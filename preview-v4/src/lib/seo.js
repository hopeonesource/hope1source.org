import { org } from '../content/org.js'
import { aliases, pages } from '../content/routes.js'

// Match the actual GitHub preview host; a production release sets both values.
export const siteOrigin = (import.meta.env.VITE_SITE_ORIGIN || 'https://hopeonesource.github.io').replace(/\/$/, '')
export const siteBase = import.meta.env.BASE_URL || '/'
export const siteIndexable = import.meta.env.VITE_SITE_INDEXABLE === 'true'

export function normalizedPath(pathname = '/') {
  return `/${pathname.replace(/^\/+|\/+$/g, '')}`
}

/** Absolute URL for this build, including its project/preview base. */
export function absoluteUrl(pathname = '/') {
  const prefix = siteBase === '/' ? '' : siteBase.replace(/\/$/, '')
  if (!pathname || pathname === '/') return `${siteOrigin}${prefix}/`
  return `${siteOrigin}${prefix}/${pathname.replace(/^\/+/, '')}`
}

export function pageMetadata({ title, description, jsonLd, pathname }) {
  const route = normalizedPath(pathname)
  const canonicalPath = aliases.find(([from]) => from === route)?.[1] || route
  const knownPage = pages.some((page) => page.path === canonicalPath)
  const url = absoluteUrl(canonicalPath)
  const name = title ? `${title} · ${org.program}` : org.brand
  const home = absoluteUrl('/')
  const organizationId = `${home}#organization`
  const websiteId = `${home}#website`
  const organization = {
    '@type': 'NGO',
    '@id': organizationId,
    name: org.brand,
    legalName: org.legalName,
    alternateName: [org.program, org.product, org.programLegacy],
    url: home,
    email: org.email,
    logo: absoluteUrl('/logo-hope-one-source.png'),
  }
  const graph = [
    organization,
    { '@type': 'WebSite', '@id': websiteId, name: org.brand, url: home, publisher: { '@id': organizationId } },
    {
      '@type': route === '/contact' ? 'ContactPage' : route === '/about' ? 'AboutPage' : 'WebPage',
      '@id': `${url}#webpage`,
      url,
      name,
      description,
      inLanguage: 'en-US',
      isPartOf: { '@id': websiteId },
      publisher: { '@id': organizationId },
    },
  ]

  // Preserve explicitly supplied organization facts. Never infer review scores,
  // prices, service coverage, study outcomes, or other unsupported claims.
  if (jsonLd?.['@type'] === 'NGO') {
    const { '@context': context, ...facts } = jsonLd
    Object.assign(organization, facts, { '@id': organizationId, url: home })
  } else if (jsonLd) {
    const { '@context': context, ...facts } = jsonLd
    graph.push(facts)
  }

  return {
    title: name,
    description,
    url,
    canonical: knownPage ? url : null,
    image: absoluteUrl('/og.png'),
    robots: knownPage && siteIndexable ? 'index, follow, max-image-preview:large' : 'noindex, follow',
    jsonLd: knownPage ? { '@context': 'https://schema.org', '@graph': graph } : null,
  }
}

export function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, (character) => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;',
  })[character])
}

export function jsonForScript(value) {
  return JSON.stringify(value).replace(/</g, '\\u003c').replace(/\u2028/g, '\\u2028').replace(/\u2029/g, '\\u2029')
}

/** One metadata model for the static build and client-side navigation. */
export function renderMetadata(metadata) {
  const meta = (attribute, name, content) => `<meta ${attribute}="${escapeHtml(name)}" content="${escapeHtml(content)}" />`
  return [
    `<title>${escapeHtml(metadata.title)}</title>`,
    meta('name', 'description', metadata.description),
    meta('name', 'robots', metadata.robots),
    meta('property', 'og:title', metadata.title),
    meta('property', 'og:description', metadata.description),
    meta('property', 'og:type', 'website'),
    meta('property', 'og:url', metadata.url),
    meta('property', 'og:image', metadata.image),
    meta('property', 'og:site_name', org.brand),
    meta('name', 'twitter:card', 'summary_large_image'),
    meta('name', 'twitter:title', metadata.title),
    meta('name', 'twitter:description', metadata.description),
    meta('name', 'twitter:image', metadata.image),
    metadata.canonical ? `<link rel="canonical" href="${escapeHtml(metadata.canonical)}" />` : '',
    metadata.jsonLd ? `<script id="jsonld" type="application/ld+json">${jsonForScript(metadata.jsonLd)}</script>` : '',
  ].filter(Boolean).join('\n    ')
}
