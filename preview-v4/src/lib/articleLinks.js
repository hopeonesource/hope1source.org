import { aliases, pages } from '../content/routes.js'

/** Historical H1S links stay within this build, including archived URLs. */
export function articleLinkDestination(href) {
  let target = href
  if (/^https?:\/\/web\.archive\.org\/web\//.test(target)) {
    target = target.replace(/^https?:\/\/web\.archive\.org\/web\/[^/]+\//, '')
  }
  const url = new URL(target, 'https://www.hope1source.org')
  if (!['hope1source.org', 'www.hope1source.org', 'hopeonesource.org', 'www.hopeonesource.org', 'dc.hopeonesource.org'].includes(url.hostname)) return href
  const pathname = url.pathname.replace(/\/+$/, '') || '/'
  const destination = aliases.find(([from]) => from === pathname)?.[1] || pathname
  if (!pages.some((page) => page.path === destination)) {
    throw new Error(`Missing v4 destination for historical article link: ${href}`)
  }
  return `${destination}${url.search}${url.hash}`
}
