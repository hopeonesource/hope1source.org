import { mkdirSync, readFileSync, writeFileSync } from 'node:fs'
import { spawnSync } from 'node:child_process'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

/**
 * Build the recommended preview into dist/v3 after the current site build.
 * Does not run write-seo.mjs, so public/sitemap.xml stays the current site's.
 */
const root = fileURLToPath(new URL('..', import.meta.url))
const base = process.env.VITE_V3_BASE || '/hope1source.org/v3/'
const origin = (process.env.VITE_SITE_ORIGIN || 'https://hopeonesource.github.io').replace(/\/$/, '')

const result = spawnSync('npx', ['vite', 'build', '--config', 'preview-v3/vite.config.js'], {
  cwd: root,
  env: { ...process.env, VITE_BASE: base },
  stdio: 'inherit',
})

if (result.status) process.exit(result.status ?? 1)

const { pages, aliases } = await import('../preview-v3/src/content/routes.js')
const dist = path.join(root, 'dist/v3')
const index = readFileSync(path.join(dist, 'index.html'))
const routes = new Set()

for (const page of pages) {
  if (page.path !== '/') routes.add(page.path.replace(/^\//, ''))
}
for (const [from] of aliases) routes.add(from.replace(/^\//, ''))

for (const rel of routes) {
  const dir = path.join(dist, rel)
  mkdirSync(dir, { recursive: true })
  writeFileSync(path.join(dir, 'index.html'), index)
}

writeFileSync(path.join(dist, '404.html'), index)

const prefix = base.endsWith('/') ? base : `${base}/`
function loc(pagePath) {
  if (pagePath === '/') return `${origin}${prefix}`
  return `${origin}${prefix}${pagePath.replace(/^\//, '')}`
}

const xmlBody = pages
  .map(
    (page) =>
      `  <url>\n    <loc>${loc(page.path)}</loc>\n    <changefreq>${page.changefreq}</changefreq>\n    <priority>${page.priority}</priority>\n  </url>`,
  )
  .join('\n')

writeFileSync(
  path.join(dist, 'sitemap.xml'),
  `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${xmlBody}\n</urlset>\n`,
)
writeFileSync(
  path.join(dist, 'robots.txt'),
  `User-agent: *\nAllow: /\n\nSitemap: ${loc('/sitemap.xml')}\n`,
)

console.log(`v3 preview: ${routes.size} deep links under dist/v3`)
