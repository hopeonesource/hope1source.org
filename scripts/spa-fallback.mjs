import { copyFileSync, existsSync } from 'node:fs'

/**
 * GitHub Pages serves 404.html when a path has no file, and it keeps the URL.
 * Copying the built shell there lets React Router open /about, /donate, and
 * the rest. Cloudflare uses public/_redirects instead, and ignores nothing
 * harmful if this extra file is uploaded too.
 */
const indexUrl = new URL('../dist/index.html', import.meta.url)
const fallbackUrl = new URL('../dist/404.html', import.meta.url)
const sitemapUrl = new URL('../dist/sitemap.xml', import.meta.url)

if (!existsSync(indexUrl)) {
  console.error('dist/index.html is missing. Run vite build first.')
  process.exit(1)
}

copyFileSync(indexUrl, fallbackUrl)

if (!existsSync(sitemapUrl)) {
  console.error('dist/sitemap.xml is missing. prebuild should write public/sitemap.xml.')
  process.exit(1)
}

console.log('GitHub Pages SPA fallback: dist/404.html')
