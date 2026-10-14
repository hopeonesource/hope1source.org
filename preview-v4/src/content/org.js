/**
 * Public facts used across the recommended preview.
 * Hope1Source (H1S) Check-ins is the name people should see.
 * Hope with Love is the legal 501(c)(3) / DBA behind it.
 * No street address or phone number is published.
 */
export const org = {
  legalName: 'Hope with Love',
  brand: 'Hope1Source Check-ins',
  program: 'Hope1Source',
  programLegacy: 'HopeOneSource',
  product: 'H1S Check-ins',
  tagline: 'Earn trust.',
  missionLine: 'Connecting people with dignity, security, and ease.',
  email: 'partnerships@hope1source.me',
  legacyEmail: 'hopeonesource@hopewithlove.org',
  donateUrl: 'https://www.every.org/hope-with-love',
  portalUrl: 'https://portal.hopeonesource.me',
  hubUrl: 'https://hopeonesource.me',
  siteHost: 'hope1source.org',
  currentSiteUrl: 'https://hopeonesource.github.io/hope1source.org/',
  uei: 'HYQWP496LMJ8',
  cage: '77K55',
  ein: '27-5461163',
  procurement:
    'H1S Check-ins (dba Hope With Love, Inc.). SAM.gov UEI HYQWP496LMJ8. CAGE 77K55. EIN 27-5461163. 501(c)(3).',
}

/** Header links. Donate is an external gift link, not a second product pitch. */
export const primaryNav = [
  { to: '/about', label: 'About' },
  { to: '/team', label: 'Team' },
  { to: '/case-studies', label: 'Stories' },
  { to: '/get-involved', label: 'Get involved' },
  { to: '/contact', label: 'Contact' },
]

/** Short footer. Resource guides stay at their own URLs for ads. */
export const footerLinks = [
  { to: '/about', label: 'About' },
  { to: '/readiness', label: 'Readiness' },
  { to: '/public-agencies', label: 'Public agencies' },
  { to: '/contact', label: 'Contact' },
  { href: org.donateUrl, label: 'Donate', external: true },
  { to: '/privacy', label: 'Privacy' },
  { to: '/terms', label: 'Terms' },
]
