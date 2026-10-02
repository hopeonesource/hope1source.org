import { writeFileSync } from 'node:fs'
import { pages } from '../src/content/routes.js'

/**
 * Sitemap and robots.txt follow the deploy target.
 * GitHub project Pages: VITE_BASE=/hope1source.org/ and the github.io origin.
 * Custom domain or Cloudflare: VITE_BASE=/ and https://hope1source.org.
 */
const baseRaw = process.env.VITE_BASE || '/hope1source.org/'
const base = baseRaw.endsWith('/') ? baseRaw : `${baseRaw}/`
const origin = (
  process.env.VITE_SITE_ORIGIN ||
  (base === '/' ? 'https://hope1source.org' : 'https://hopeonesource.github.io')
).replace(/\/$/, '')

function loc(path) {
  if (path === '/') return `${origin}${base}`
  return `${origin}${base}${path.replace(/^\//, '')}`
}

const body = pages
  .map(
    (page) =>
      `  <url>\n    <loc>${loc(page.path)}</loc>\n    <changefreq>${page.changefreq}</changefreq>\n    <priority>${page.priority}</priority>\n  </url>`,
  )
  .join('\n')

const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${body}\n</urlset>\n`

writeFileSync(new URL('../public/sitemap.xml', import.meta.url), xml)
writeFileSync(
  new URL('../public/robots.txt', import.meta.url),
  `User-agent: *\nAllow: /\n\nSitemap: ${loc('/sitemap.xml')}\n`,
)

console.log(`Wrote sitemap and robots for ${origin}${base}`)
