import assert from 'node:assert/strict'
import { existsSync, readFileSync } from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { pages, aliases } from '../preview-v4/src/content/routes.js'

const dist = fileURLToPath(new URL('../dist/v4/', import.meta.url))
const manifest = JSON.parse(readFileSync(path.join(dist, 'prerender-manifest.json'), 'utf8'))
const baseUrl = `${manifest.origin}${manifest.base}`
const routeUrl = (route) => new URL(route.replace(/^\//, ''), baseUrl).href
const unescape = (value) => value.replace(/&amp;/g, '&').replace(/&quot;/g, '"').replace(/&#39;/g, "'").replace(/&lt;/g, '<').replace(/&gt;/g, '>')
const routePaths = new Set([...pages.map((page) => page.path), ...aliases.map(([from]) => from)])
const titles = new Set()
const descriptions = new Set()
let checkedLinks = 0

assert.equal(manifest.pages.length, pages.length, 'Prerender manifest must cover every public route')

for (const page of pages) {
  const file = path.join(dist, page.path.replace(/^\//, ''), 'index.html')
  const html = readFileSync(file, 'utf8')
  const head = html.match(/<head>([\s\S]*?)<\/head>/)?.[1] || ''
  const body = html.match(/<div id="root">([\s\S]*)<\/body>/)?.[1] || ''
  const title = unescape(head.match(/<title>([^<]+)<\/title>/)?.[1] || '')
  const description = unescape(head.match(/<meta name="description" content="([^"]+)"\s*\/>/)?.[1] || '')
  const canonical = unescape(head.match(/<link rel="canonical" href="([^"]+)"\s*\/>/)?.[1] || '')
  assert(title && description, `${page.path}: missing static title/description`)
  assert(!titles.has(title), `${page.path}: duplicate title`)
  assert(!descriptions.has(description), `${page.path}: duplicate description`)
  titles.add(title)
  descriptions.add(description)
  assert.equal((head.match(/<link rel="canonical"/g) || []).length, 1, `${page.path}: needs exactly one canonical`)
  assert.equal(canonical, routeUrl(page.path), `${page.path}: canonical differs from build origin/base`)
  assert(head.includes(`property="og:url" content="${canonical}"`), `${page.path}: OG URL differs from canonical`)
  const robots = head.match(/<meta name="robots" content="([^"]+)"/)?.[1] || ''
  assert.equal(robots.startsWith('index,'), manifest.indexable, `${page.path}: indexing policy mismatch`)
  assert.equal((body.match(/<h1(?:\s|>)/g) || []).length, 1, `${page.path}: missing unique static H1`)
  assert(body.replace(/<[^>]*>/g, '').trim().length > 200, `${page.path}: only an HTML shell`)

  const jsonLd = JSON.parse(head.match(/<script id="jsonld" type="application\/ld\+json">([\s\S]*?)<\/script>/)?.[1] || 'null')
  assert.equal(jsonLd?.['@context'], 'https://schema.org', `${page.path}: missing valid static JSON-LD`)
  assert(jsonLd['@graph'].some((node) => node.url === canonical && /Page$/.test(node['@type'])), `${page.path}: missing WebPage identity`)

  for (const [, rawHref] of body.matchAll(/<a\b[^>]*\bhref="([^"]+)"/g)) {
    const href = unescape(rawHref)
    const url = new URL(href, canonical)
    if (url.origin !== manifest.origin || !url.pathname.startsWith(manifest.base)) continue
    checkedLinks += 1
    const relativePath = url.pathname.slice(manifest.base.length).replace(/\/$/, '')
    assert(routePaths.has(`/${relativePath}`) || existsSync(path.join(dist, relativePath)), `${page.path}: broken static link ${href}`)
  }
}

for (const [from, to] of aliases) {
  const html = readFileSync(path.join(dist, from.replace(/^\//, ''), 'index.html'), 'utf8')
  assert(html.includes(`rel="canonical" href="${routeUrl(to)}"`), `${from}: wrong alias canonical`)
  const destination = new URL(routeUrl(to)).pathname
  assert(html.includes(`http-equiv="refresh" content="0; url=${destination}"`), `${from}: no static redirect`)
  assert(html.includes(`<a href="${destination}">`), `${from}: no usable fallback link`)
  assert(html.includes('content="noindex, follow"'), `${from}: alias must be noindex`)
}

const missingPage = readFileSync(path.join(dist, '404.html'), 'utf8')
assert(missingPage.includes('content="noindex, follow"'), '404 must be noindex before JavaScript')
assert(!missingPage.includes('rel="canonical"'), '404 should not claim a valid canonical page')
assert(missingPage.includes('That page is not on this site.'), '404 must contain useful static content')

const sitemap = readFileSync(path.join(dist, 'sitemap.xml'), 'utf8')
const sitemapUrls = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((match) => unescape(match[1]))
assert.deepEqual(sitemapUrls, manifest.indexable ? pages.map((page) => routeUrl(page.path)) : [], 'Sitemap must match the canonical, indexable routes only')
console.log(`v4 prerender checks passed: ${pages.length} pages, ${aliases.length} aliases, ${checkedLinks} internal links, metadata, JSON-LD, sitemap, and 404 (${manifest.indexable ? 'indexable release' : 'noindex preview'}).`)
