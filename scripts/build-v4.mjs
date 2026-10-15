import { mkdirSync, mkdtempSync, readFileSync, rmSync, writeFileSync } from 'node:fs'
import path from 'node:path'
import { fileURLToPath, pathToFileURL } from 'node:url'
import { build } from 'vite'
import { pages, aliases } from '../preview-v4/src/content/routes.js'

/** Build readable HTML for every v4 route, without changing the current site. */
const root = fileURLToPath(new URL('..', import.meta.url))
const base = process.env.VITE_V4_BASE || '/hope1source.org/v4/'
if (!base.startsWith('/') || !base.endsWith('/')) {
  throw new Error('VITE_V4_BASE must be an absolute path ending in /')
}
const origin = new URL(process.env.VITE_SITE_ORIGIN || 'https://hopeonesource.github.io')
if (!['http:', 'https:'].includes(origin.protocol) || origin.pathname !== '/' || origin.search || origin.hash) {
  throw new Error('VITE_SITE_ORIGIN must be an HTTP(S) origin without a path')
}
// Client and SSR builds must receive identical deployment settings.
process.env.VITE_BASE = base
process.env.VITE_SITE_ORIGIN = origin.origin
process.env.VITE_SITE_INDEXABLE = process.env.VITE_SITE_INDEXABLE === 'true' ? 'true' : 'false'

const configFile = path.join(root, 'preview-v4/vite.config.js')
const dist = path.join(root, 'dist/v4')
// Keep the temporary SSR bundle in-project so external dependencies resolve.
mkdirSync(path.join(root, 'node_modules/.vite'), { recursive: true })
const serverBuild = mkdtempSync(path.join(root, 'node_modules/.vite/v4-prerender-'))

try {
  await build({ configFile })
  const template = readFileSync(path.join(dist, 'index.html'), 'utf8')
  if (!template.includes('<!--seo-start-->') || !template.includes('<div id="root"></div>')) {
    throw new Error('The v4 HTML template is missing its prerender placeholders')
  }
  await build({
    configFile,
    build: {
      ssr: path.join(root, 'preview-v4/src/entry-server.jsx'),
      outDir: serverBuild,
      emptyOutDir: true,
      copyPublicDir: false,
      rollupOptions: { output: { entryFileNames: 'entry-server.mjs' } },
    },
  })
  const { renderRoute, absoluteUrl, escapeHtml, siteIndexable } = await import(
    pathToFileURL(path.join(serverBuild, 'entry-server.mjs')).href
  )
  const manifest = []
  const renderPage = (route) => {
    const rendered = renderRoute(route)
    return {
      ...rendered,
      document: template
        .replace(/<!--seo-start-->[\s\S]*?<!--seo-end-->/, rendered.head)
        .replace('<div id="root"></div>', `<div id="root">${rendered.html}</div>`),
    }
  }

  for (const page of pages) {
    const rendered = renderPage(page.path)
    const directory = path.join(dist, page.path.replace(/^\//, ''))
    mkdirSync(directory, { recursive: true })
    writeFileSync(path.join(directory, 'index.html'), rendered.document)
    manifest.push({ path: page.path, ...rendered.metadata })
  }

  // Canonical destination + refresh + real link works without JavaScript.
  // Aliases are never included in the sitemap.
  for (const [from, to] of aliases) {
    const directory = path.join(dist, from.replace(/^\//, ''))
    mkdirSync(directory, { recursive: true })
    const destination = escapeHtml(absoluteUrl(to))
    const localDestination = escapeHtml(new URL(absoluteUrl(to)).pathname)
    writeFileSync(path.join(directory, 'index.html'), `<!doctype html>
<html lang="en"><head><meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<title>Page moved · Hope1Source</title>
<meta name="robots" content="noindex, follow" />
<link rel="canonical" href="${destination}" />
<meta http-equiv="refresh" content="0; url=${localDestination}" />
</head><body><main><h1>This page has moved.</h1>
<p><a href="${localDestination}">Continue to the Hope1Source page</a>.</p>
</main></body></html>\n`)
  }

  writeFileSync(path.join(dist, '404.html'), renderPage('/404.html').document)
  // The shared legacy file redirects every /article/* to the press index.
  // v4 owns its rules so recreated articles keep their individual destinations.
  const localPath = (route) => new URL(absoluteUrl(route)).pathname
  writeFileSync(path.join(dist, '_redirects'), [
    '# Generated v4 route aliases. Force HTTP redirects over the static fallback pages.',
    ...aliases.map(([from, to]) => `${localPath(from)}  ${localPath(to)}  301!`),
    // Every valid route is prerendered; unknown URLs must remain real 404s.
    `${base}*  ${base}404.html  404`,
    '',
  ].join('\n'))
  const xmlBody = siteIndexable ? pages.map((page) => `  <url><loc>${escapeHtml(absoluteUrl(page.path))}</loc></url>`).join('\n') : ''
  writeFileSync(path.join(dist, 'sitemap.xml'), `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${xmlBody}
</urlset>\n`)
  // A nested robots.txt cannot control host crawling. A root deployment uses
  // these rules to let crawlers read the page-level index/noindex metadata.
  writeFileSync(path.join(dist, 'robots.txt'), `# Effective only when deployed as the host-root /robots.txt.
# This build's HTML carries the index/noindex policy.
User-agent: *
Allow: /
${siteIndexable ? `\nSitemap: ${absoluteUrl('/sitemap.xml')}\n` : ''}`)
  writeFileSync(path.join(dist, 'prerender-manifest.json'), `${JSON.stringify({ base, origin: origin.origin, indexable: siteIndexable, pages: manifest, aliases }, null, 2)}\n`)
  console.log(`v4: prerendered ${pages.length} pages, ${aliases.length} aliases and a noindex 404 (${siteIndexable ? 'indexable release' : 'noindex preview'})`)
} finally {
  rmSync(serverBuild, { recursive: true, force: true })
}
