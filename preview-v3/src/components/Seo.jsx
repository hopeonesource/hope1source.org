import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { org } from '../content/org.js'

const origin = (import.meta.env.VITE_SITE_ORIGIN || 'https://hope1source.org').replace(/\/$/, '')

/** Absolute URL for the current deploy base (project Pages or a custom domain). */
export function absoluteUrl(pathname = '/') {
  const base = import.meta.env.BASE_URL || '/'
  const prefix = base === '/' ? '' : base.replace(/\/$/, '')
  if (!pathname || pathname === '/') return `${origin}${prefix}/`
  const path = pathname.startsWith('/') ? pathname : `/${pathname}`
  return `${origin}${prefix}${path}`
}

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
 * Per-route title, description, Open Graph, canonical, and optional JSON-LD.
 * GitHub Pages serves one HTML shell, so tags have to be set in the browser.
 */
export default function Seo({ title, description, jsonLd }) {
  const { pathname } = useLocation()

  useEffect(() => {
    const fullTitle = title ? `${title} · ${org.program}` : org.brand
    document.title = fullTitle
    const url = absoluteUrl(pathname)
    const image = absoluteUrl('/og.png')

    upsertMeta('name', 'description', description)
    upsertMeta('property', 'og:title', fullTitle)
    upsertMeta('property', 'og:description', description)
    upsertMeta('property', 'og:type', 'website')
    upsertMeta('property', 'og:url', url)
    upsertMeta('property', 'og:image', image)
    upsertMeta('property', 'og:site_name', org.brand)
    upsertMeta('name', 'twitter:card', 'summary_large_image')
    upsertMeta('name', 'twitter:title', fullTitle)
    upsertMeta('name', 'twitter:description', description)
    upsertMeta('name', 'twitter:image', image)

    let canonical = document.head.querySelector('link[rel="canonical"]')
    if (!canonical) {
      canonical = document.createElement('link')
      canonical.setAttribute('rel', 'canonical')
      document.head.appendChild(canonical)
    }
    canonical.setAttribute('href', url)

    const existing = document.getElementById('jsonld')
    if (jsonLd) {
      const script = existing || document.createElement('script')
      script.id = 'jsonld'
      script.type = 'application/ld+json'
      script.textContent = JSON.stringify(jsonLd)
      if (!existing) document.head.appendChild(script)
    } else if (existing) {
      existing.remove()
    }
  }, [title, description, pathname, jsonLd])

  return null
}
