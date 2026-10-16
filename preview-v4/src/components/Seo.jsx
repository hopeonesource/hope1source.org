import { createContext, useContext, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { pageMetadata, jsonForScript, metadataTags } from '../lib/seo.js'

export { absoluteUrl, absoluteAssetUrl } from '../lib/seo.js'
export const SeoContext = createContext(null)

function upsertMeta(attr, key, content) {
  let el = document.head.querySelector(`meta[${attr}="${key}"]`)
  if (content == null) {
    el?.remove()
    return
  }
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
export default function Seo({ title, description, jsonLd, image }) {
  const { pathname } = useLocation()
  const collector = useContext(SeoContext)
  const metadata = pageMetadata({ title, description, jsonLd, image, pathname })
  if (collector) collector.current = metadata

  useEffect(() => {
    document.title = metadata.title

    for (const [attribute, key, content] of metadataTags(metadata)) upsertMeta(attribute, key, content)

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
  }, [title, description, pathname, jsonLd, image])

  return null
}
