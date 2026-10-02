import { org } from '../content/org.js'

/** Build a mailto link. The site does not store form submissions. */
export function mailto({ email = org.email, subject, body }) {
  const params = new URLSearchParams()
  if (subject) params.set('subject', subject)
  if (body) params.set('body', body)
  const query = params.toString()
  return query ? `mailto:${email}?${query}` : `mailto:${email}`
}

/** Public file URL that respects the GitHub Pages base path. */
export function publicUrl(file) {
  const base = import.meta.env.BASE_URL || '/'
  return `${base}${String(file).replace(/^\//, '')}`
}

export function initials(name) {
  return name
    .split(/\s+/)
    .filter((part) => part && part !== '&')
    .slice(0, 2)
    .map((part) => part[0])
    .join('')
    .toUpperCase()
}
