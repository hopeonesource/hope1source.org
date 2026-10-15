import { createContext, useContext, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { org } from '../content/org.js'
import { pageMetadata, jsonForScript } from '../lib/seo.js'

export { absoluteUrl } from '../lib/seo.js'
export const SeoContext = createContext(null)

function upsertMeta(attr, key, content) {
  let el = document.head.querySelector(`meta[${attr}="${key}"]`)
  if (!el) {
    el = document.createElement('meta')
    el.setAttribute(attr, key)
    document.head.appendChild(el)
  }
  el.setAttribute('content', content)
}

/**
 * Static metadata is collected at build time and kept current on navigation.
 */
export default function Seo({ title, description, jsonLd }) {
  const { pathname } = useLocation()
  const collector = useContext(SeoContext)
  const metadata = pageMetadata({ title, description, jsonLd, pathname })
  if (collector) collector.current = metadata

  useEffect(() => {
    document.title = metadata.title

    upsertMeta('name', 'description', metadata.description)
    upsertMeta('name', 'robots', metadata.robots)
    upsertMeta('property', 'og:title', metadata.title)
    upsertMeta('property', 'og:description', metadata.description)
    upsertMeta('property', 'og:type', 'website')
    upsertMeta('property', 'og:url', metadata.url)
    upsertMeta('property', 'og:image', metadata.image)
    upsertMeta('property', 'og:site_name', org.brand)
    upsertMeta('name', 'twitter:card', 'summary_large_image')
    upsertMeta('name', 'twitter:title', metadata.title)
    upsertMeta('name', 'twitter:description', metadata.description)
    upsertMeta('name', 'twitter:image', metadata.image)

    let canonical = document.head.querySelector('link[rel="canonical"]')
    if (metadata.canonical) {
      if (!canonical) {
        canonical = document.createElement('link')
        canonical.setAttribute('rel', 'canonical')
        document.head.appendChild(canonical)
      }
      canonical.setAttribute('href', metadata.canonical)
    } else canonical?.remove()

    const existing = document.getElementById('jsonld')
    if (metadata.jsonLd) {
      const script = existing || document.createElement('script')
      script.id = 'jsonld'
      script.type = 'application/ld+json'
      script.textContent = jsonForScript(metadata.jsonLd)
      if (!existing) document.head.appendChild(script)
    } else if (existing) {
      existing.remove()
    }
  }, [title, description, pathname, jsonLd])

  return null
}
