import { org } from '../content/org.js'
import { aliases, pages } from '../content/routes.js'
import { searchMetadata } from '../content/searchMetadata.js'
import { outreachOfferings } from '../content/outreachOfferings.js'

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

export function pageMetadata({ title, description, jsonLd, image, pathname }) {
  const route = normalizedPath(pathname)
  const canonicalPath = aliases.find(([from]) => from === route)?.[1] || route
  const knownPage = pages.some((page) => page.path === canonicalPath)
  const url = absoluteUrl(canonicalPath)
  const search = searchMetadata[canonicalPath]
  const searchTitle = search?.title || title
  const searchDescription = search?.description || description
  const name = searchTitle ? `${searchTitle} · ${org.program}` : org.brand
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
    description: 'H1S trains and equips service providers with opt-in SMS check-ins, emergency alerts, service feedback, and outreach tools.',
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'Partnership inquiries',
      email: org.email,
      url: absoluteUrl('/contact'),
    },
  }
  const page = {
    '@type': canonicalPath === '/contact' ? 'ContactPage' : canonicalPath === '/about' ? 'AboutPage' : ['/press', '/case-studies'].includes(canonicalPath) ? 'CollectionPage' : 'WebPage',
    '@id': `${url}#webpage`,
    url,
    name,
    description: searchDescription,
    inLanguage: 'en-US',
    isPartOf: { '@id': websiteId },
    publisher: { '@id': organizationId },
    about: { '@id': organizationId },
  }
  const graph = [
    organization,
    { '@type': 'WebSite', '@id': websiteId, name: org.brand, alternateName: org.product, url: home, inLanguage: 'en-US', publisher: { '@id': organizationId } },
    page,
  ]

  // These descriptions are the same strings displayed on the outreach page.
  // They describe H1S tools, not direct medical, housing, or food services.
  if (canonicalPath === '/outreach-tools') {
    const services = outreachOfferings.map((offering) => ({
      '@type': 'Service',
      '@id': `${url}#${offering.id}`,
      name: offering.title,
      serviceType: offering.title,
      description: offering.text,
      url: absoluteUrl(offering.to),
      provider: { '@id': organizationId },
      audience: { '@type': 'Audience', audienceType: 'Service providers' },
    }))
    graph.push(...services)
    page.mainEntity = services.map((service) => ({ '@id': service['@id'] }))
  }

  // Article and story pages already link back to their visible collections.
  const collection = canonicalPath.startsWith('/press/') ? { path: '/press', name: 'News & Stories' }
    : canonicalPath.startsWith('/case-studies/') ? { path: '/case-studies', name: 'Stories' } : null
  if (knownPage && collection) {
    const breadcrumbId = `${url}#breadcrumb`
    page.breadcrumb = { '@id': breadcrumbId }
    graph.push({
      '@type': 'BreadcrumbList',
      '@id': breadcrumbId,
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: org.brand, item: home },
        { '@type': 'ListItem', position: 2, name: collection.name, item: absoluteUrl(collection.path) },
        { '@type': 'ListItem', position: 3, name: title, item: url },
      ],
    })
  }

  // Preserve explicitly supplied organization facts. Never infer review scores,
  // prices, service coverage, study outcomes, or other unsupported claims.
  if (jsonLd?.['@type'] === 'NGO') {
    const { '@context': context, ...facts } = jsonLd
    Object.assign(organization, facts, { '@id': organizationId, url: home })
  } else if (jsonLd) {
    const { '@context': context, ...facts } = jsonLd
    graph.push(facts)
  }

  const socialImage = image || { src: '/og.png', width: 1200, height: 630, alt: 'Earn trust. Hope With Love and Hope1Source.' }

  return {
    title: name,
    description: searchDescription,
    url,
    canonical: knownPage ? url : null,
    image: absoluteUrl(socialImage.src),
    imageWidth: socialImage.width,
    imageHeight: socialImage.height,
    imageAlt: socialImage.alt,
    imageType: /\.png$/i.test(socialImage.src) ? 'image/png' : 'image/jpeg',
    type: jsonLd?.['@type'] === 'NewsArticle' ? 'article' : 'website',
    publishedTime: jsonLd?.['@type'] === 'NewsArticle' ? jsonLd.datePublished : undefined,
    robots: knownPage && siteIndexable ? 'index, follow, max-image-preview:large' : 'noindex, follow',
    jsonLd: knownPage ? { '@context': 'https://schema.org', '@graph': graph } : null,
  }
}

/** Both prerendering and client navigation use the same managed tags. */
export function metadataTags(metadata) {
  return [
    ['name', 'description', metadata.description],
    ['name', 'robots', metadata.robots],
    ['property', 'og:title', metadata.title],
    ['property', 'og:description', metadata.description],
    ['property', 'og:type', metadata.type],
    ['property', 'og:url', metadata.url],
    ['property', 'og:image', metadata.image],
    ['property', 'og:image:width', metadata.imageWidth],
    ['property', 'og:image:height', metadata.imageHeight],
    ['property', 'og:image:type', metadata.imageType],
    ['property', 'og:image:alt', metadata.imageAlt],
    ['property', 'og:locale', 'en_US'],
    ['property', 'og:site_name', org.brand],
    ['property', 'article:published_time', metadata.publishedTime],
    ['name', 'twitter:card', 'summary_large_image'],
    ['name', 'twitter:title', metadata.title],
    ['name', 'twitter:description', metadata.description],
    ['name', 'twitter:image', metadata.image],
    ['name', 'twitter:image:alt', metadata.imageAlt],
  ]
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
    ...metadataTags(metadata).filter(([, , content]) => content != null).map(([attr, key, content]) => meta(attr, key, content)),
    metadata.canonical ? `<link rel="canonical" href="${escapeHtml(metadata.canonical)}" />` : '',
    metadata.jsonLd ? `<script id="jsonld" type="application/ld+json">${jsonForScript(metadata.jsonLd)}</script>` : '',
  ].filter(Boolean).join('\n    ')
}
