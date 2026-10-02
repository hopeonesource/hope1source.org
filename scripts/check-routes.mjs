import { readFileSync } from 'node:fs'
import { pages } from '../src/content/routes.js'

const app = readFileSync(new URL('../src/App.jsx', import.meta.url), 'utf8')
const staticPaths = [
  '/about',
  '/team',
  '/contact',
  '/donate',
  '/get-involved',
  '/faqs',
  '/press',
  '/privacy',
  '/terms',
  '/case-studies',
]

const missing = []

if (!app.includes('<Route index element={<Home />} />')) missing.push('/')

for (const path of staticPaths) {
  if (!pages.some((page) => page.path === path)) missing.push(`sitemap missing ${path}`)
  if (!app.includes(`path="${path.slice(1)}"`)) missing.push(`route missing ${path}`)
}

if (!app.includes('case-studies/${story.slug}')) missing.push('case study routes')
if (!app.includes('role.path.slice(1)')) missing.push('role routes')
if (!app.includes('service.slug')) missing.push('service routes')

for (const page of pages) {
  if (!page.path.startsWith('/')) missing.push(`bad path ${page.path}`)
}

if (missing.length) {
  console.error(missing.join('\n'))
  process.exit(1)
}

console.log(`Route table OK (${pages.length} public URLs)`)
