import assert from 'node:assert/strict'
import { existsSync, readFileSync } from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { pages, aliases } from '../preview-v4/src/content/routes.js'
import { pressArticles } from '../preview-v4/src/content/pressArticles.js'
import { searchMetadata } from '../preview-v4/src/content/searchMetadata.js'
import { outreachOfferings } from '../preview-v4/src/content/outreachOfferings.js'
import { org } from '../preview-v4/src/content/org.js'

const dist = fileURLToPath(new URL('../dist/v4/', import.meta.url))
const manifest = JSON.parse(readFileSync(path.join(dist, 'prerender-manifest.json'), 'utf8'))
const baseUrl = `${manifest.origin}${manifest.base}`
const routeUrl = (route) => new URL(route.replace(/^\//, ''), baseUrl).href
const unescape = (value) => value.replace(/&amp;/g, '&').replace(/&quot;/g, '"').replace(/&#(?:39|x27);/g, "'").replace(/&lt;/g, '<').replace(/&gt;/g, '>')
const routePaths = new Set([...pages.map((page) => page.path), ...aliases.map(([from]) => from)])
const titles = new Set()
const descriptions = new Set()
let checkedLinks = 0

assert.equal(manifest.pages.length, pages.length, 'Prerender manifest must cover every public route')
for (const route of Object.keys(searchMetadata)) {
  assert(pages.some((page) => page.path === route), `${route}: search metadata has no canonical page`)
}

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

  // Check the published HTML contract, including parity between search, social,
  // and structured data. These assertions also run on Netlify before publishing.
  const tags = [...head.matchAll(/<meta (?:name|property)="([^"]+)" content="([^"]*)"\s*\/>/g)]
  const meta = Object.fromEntries(tags.map(([, key, value]) => [key, unescape(value)]))
  for (const [key] of Object.entries(meta)) {
    assert.equal(tags.filter(([, name]) => name === key).length, 1, `${page.path}: duplicate ${key}`)
  }
  assert.equal(meta['og:title'], title, `${page.path}: social title differs from search title`)
  assert.equal(meta['twitter:title'], title, `${page.path}: Twitter title differs from search title`)
  assert.equal(meta['og:description'], description, `${page.path}: social description differs`)
  assert.equal(meta['twitter:description'], description, `${page.path}: Twitter description differs`)
  assert.equal(meta['twitter:card'], 'summary_large_image', `${page.path}: missing large image card`)
  assert.equal(meta['og:locale'], 'en_US', `${page.path}: missing locale`)
  assert.equal(meta['twitter:image'], meta['og:image'], `${page.path}: social images differ`)
  assert.equal(meta['twitter:image:alt'], meta['og:image:alt'], `${page.path}: social image descriptions differ`)
  assert(meta['og:image:alt']?.trim(), `${page.path}: missing social image description`)
  const article = pressArticles.find((item) => page.path === `/press/${item.id}`)
  const image = article?.image || { src: '/og.png', width: 1200, height: 630 }
  assert.equal(meta['og:image'], routeUrl(image.src), `${page.path}: wrong social image URL`)
  assert.equal(Number(meta['og:image:width']), image.width, `${page.path}: wrong social image width`)
  assert.equal(Number(meta['og:image:height']), image.height, `${page.path}: wrong social image height`)
  assert.equal(meta['og:image:type'], image.src.endsWith('.png') ? 'image/png' : 'image/jpeg', `${page.path}: wrong social image type`)
  assert(existsSync(path.join(dist, image.src.replace(/^\//, ''))), `${page.path}: missing social image file`)
  if (searchMetadata[page.path]) {
    assert.equal(title, `${searchMetadata[page.path].title} · ${org.program}`, `${page.path}: search title override missing`)
    assert.equal(description, searchMetadata[page.path].description, `${page.path}: search description override missing`)
  }

  const graph = jsonLd['@graph']
  const ids = graph.map((node) => node['@id'])
  assert(ids.every(Boolean) && new Set(ids).size === ids.length, `${page.path}: missing or duplicate structured-data IDs`)
  const organizationId = `${routeUrl('/')}#organization`
  const organization = graph.find((node) => node['@type'] === 'NGO')
  assert.equal(organization?.['@id'], organizationId, `${page.path}: inconsistent organization identity`)
  assert.equal(organization.contactPoint?.email, org.email, `${page.path}: incorrect contact email`)
  assert.equal(organization.contactPoint?.url, routeUrl('/contact'), `${page.path}: incorrect contact URL`)
  const webPage = graph.find((node) => node['@id'] === `${canonical}#webpage`)
  assert.equal(webPage?.name, title, `${page.path}: schema title differs`)
  assert.equal(webPage.description, description, `${page.path}: schema description differs`)
  const services = graph.filter((node) => node['@type'] === 'Service')
  assert.equal(services.length, page.path === '/outreach-tools' ? outreachOfferings.length : 0, `${page.path}: incorrect service scope`)
  for (const offering of page.path === '/outreach-tools' ? outreachOfferings : []) {
    const service = services.find((node) => node['@id'] === `${canonical}#${offering.id}`)
    assert.equal(service?.description, offering.text, `${offering.id}: schema must match visible offering`)
    assert(unescape(body).includes(offering.text), `${offering.id}: offering is not visible`)
    assert.equal(service.provider?.['@id'], organizationId, `${offering.id}: incorrect provider`)
    assert(webPage.mainEntity.some((node) => node['@id'] === service['@id']), `${offering.id}: missing page reference`)
  }
  const collection = page.path.startsWith('/press/') ? '/press' : page.path.startsWith('/case-studies/') ? '/case-studies' : null
  const breadcrumb = graph.find((node) => node['@type'] === 'BreadcrumbList')
  if (collection) {
    assert.equal(webPage.breadcrumb?.['@id'], breadcrumb?.['@id'], `${page.path}: missing breadcrumb reference`)
    assert.deepEqual(breadcrumb.itemListElement.map((item) => item.position), [1, 2, 3], `${page.path}: invalid breadcrumb positions`)
    assert.deepEqual(breadcrumb.itemListElement.map((item) => item.item), [routeUrl('/'), routeUrl(collection), canonical], `${page.path}: incorrect breadcrumb URLs`)
  } else assert(!breadcrumb, `${page.path}: unexpected breadcrumb`)

  assert.equal(meta['og:type'], article ? 'article' : 'website', `${page.path}: incorrect social content type`)
  const news = graph.find((node) => node['@type'] === 'NewsArticle')
  if (article) {
    assert.equal(news?.headline, article.title, `${article.id}: article headline changed`)
    assert.equal(news.description, article.description, `${article.id}: article summary changed`)
    assert.equal(news.author?.name, article.author, `${article.id}: author changed`)
    assert.equal(news.image, article.image ? routeUrl(article.image.src) : undefined, `${article.id}: wrong article image`)
    const date = /^\d{4}-\d{2}-\d{2}$/.test(article.dateTime) && !article.note ? article.dateTime : undefined
    assert.equal(news.datePublished, date, `${article.id}: date precision or uncertainty lost`)
    assert.equal(meta['article:published_time'], date, `${article.id}: social publication date differs`)
    assert.equal(news.mainEntityOfPage?.['@id'], webPage['@id'], `${article.id}: missing page identity`)
  } else {
    assert(!news, `${page.path}: unexpected article schema`)
    assert(!meta['article:published_time'], `${page.path}: stale article date`)
  }

  for (const [, rawHref] of body.matchAll(/<a\b[^>]*\bhref="([^"]+)"/g)) {
    const href = unescape(rawHref)
    assert(!/^https?:\/\/(?:(?:www|dc)\.)?(?:hope1source|hopeonesource)\.org(?:[/?#]|$)/i.test(href), `${page.path}: link returns to the old site: ${href}`)
    assert(!/^https?:\/\/web\.archive\.org\/web\/[^/]+\/https?:\/\/(?:(?:www|dc)\.)?(?:hope1source|hopeonesource)\.org(?:[/?#]|$)/i.test(href), `${page.path}: link returns to an archived old-site page: ${href}`)
    assert(href !== 'https://hopeonesource.github.io/hope1source.org/', `${page.path}: link returns to the previous site`)
    const url = new URL(href, canonical)
    if (url.origin !== manifest.origin || !url.pathname.startsWith(manifest.base)) continue
    checkedLinks += 1
    const relativePath = url.pathname.slice(manifest.base.length).replace(/\/$/, '')
    assert(routePaths.has(`/${relativePath}`) || existsSync(path.join(dist, relativePath)), `${page.path}: broken static link ${href}`)
  }
}

// A recreated release must ship its complete prose and local images in HTML,
// not just an article shell that depends on the old website or JavaScript.
for (const article of pressArticles) {
  const html = readFileSync(path.join(dist, 'press', article.id, 'index.html'), 'utf8')
  const plainText = unescape(html.replace(/<[^>]*>/g, '')).replace(/\s+/g, ' ')
  for (const block of article.blocks) {
    for (const text of block.type === 'list' ? block.items : [block.text]) {
      assert(plainText.includes(text.replace(/\s+/g, ' ')), `${article.id}: missing article text: ${text.slice(0, 70)}`)
    }
  }
  if (article.image) {
    assert(existsSync(path.join(dist, article.image.src.replace(/^\//, ''))), `${article.id}: missing local image`)
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

const redirects = readFileSync(path.join(dist, '_redirects'), 'utf8')
for (const [from, to] of aliases) {
  assert(redirects.includes(`${new URL(routeUrl(from)).pathname}  ${new URL(routeUrl(to)).pathname}  301!`), `${from}: missing forced host redirect`)
}
assert(!/^\/article\/\*\s/m.test(redirects), 'A blanket article redirect would bypass recreated releases')
assert(redirects.includes(`${manifest.base}*  ${manifest.base}404.html  404`), 'Unknown routes must return a real HTTP 404')

const missingPage = readFileSync(path.join(dist, '404.html'), 'utf8')
assert(missingPage.includes('content="noindex, follow"'), '404 must be noindex before JavaScript')
assert(!missingPage.includes('rel="canonical"'), '404 should not claim a valid canonical page')
assert(missingPage.includes('That page is not on this site.'), '404 must contain useful static content')

const sitemap = readFileSync(path.join(dist, 'sitemap.xml'), 'utf8')
const sitemapUrls = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((match) => unescape(match[1]))
assert.deepEqual(sitemapUrls, manifest.indexable ? pages.map((page) => routeUrl(page.path)) : [], 'Sitemap must match the canonical, indexable routes only')
console.log(`v4 prerender checks passed: ${pages.length} pages, ${aliases.length} aliases, ${checkedLinks} internal links, metadata, JSON-LD, sitemap, and 404 (${manifest.indexable ? 'indexable release' : 'noindex preview'}).`)
