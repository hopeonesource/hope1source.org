/**
 * Single source for public facts.
 * Items marked confirm are published candidates, not newly verified by this repo.
 * See README "Confirm before cutover".
 */
export const org = {
  legalName: 'Hope With Love',
  program: 'Hope1Source',
  programLegacy: 'HopeOneSource',
  product: 'H1S Check-ins',
  tagline: 'Private friction. Public praise.',
  missionLine: 'Connecting people with dignity, security, and ease.',
  email: 'partnerships@hope1source.me',
  legacyEmail: 'hopeonesource@hopewithlove.org',
  phoneDisplay: '(202) 743-5342',
  phoneTel: '+12027435342',
  street: '809 South Oak Street',
  city: 'Arlington',
  region: 'VA',
  postal: '22204',
  donateUrl: 'https://www.every.org/hope-with-love',
  portalUrl: 'https://portal.hopeonesource.me',
  hubUrl: 'https://hopeonesource.me',
  siteHost: 'hope1source.org',
}

export const addressLines = [
  `${org.legalName} (${org.product})`,
  org.street,
  `${org.city}, ${org.region} ${org.postal}`,
]

/** Primary navigation. Donate stays in the footer, not beside a product pitch. */
export const primaryNav = [
  { to: '/about', label: 'About' },
  { to: '/team', label: 'Team' },
  { to: '/case-studies', label: 'Stories' },
  { to: '/get-involved', label: 'Get involved' },
  { to: '/contact', label: 'Contact' },
]

export const footerNav = {
  mission: [
    { to: '/about', label: 'Our mission' },
    { to: '/team', label: 'Team' },
    { to: '/case-studies', label: 'Case studies' },
    { to: '/press', label: 'Press' },
    { to: '/faqs', label: 'FAQs' },
  ],
  partners: [
    { to: '/for-providers', label: 'For providers' },
    { to: '/for-venues', label: 'For venues' },
    { to: '/for-backers', label: 'For backers' },
    { to: '/get-involved', label: 'Get involved' },
    { to: '/contact', label: 'Contact' },
  ],
  trust: [
    { to: '/donate', label: 'Donate' },
    { to: '/privacy', label: 'Privacy' },
    { to: '/terms', label: 'Terms' },
  ],
}
