export const roles = [
  {
    id: 'providers',
    path: '/for-providers',
    doorTo: '/outreach-tools',
    doorLabel: 'See how outreach works',
    nav: 'If you run a program',
    kicker: 'Nonprofits, shelters, program leads',
    title: 'If you run a program',
    panel: 'Nonprofits, shelters, and program leads.',
    lede: 'Tell people where help is tonight, hear back when it did not work, and show what changed.',
    points: [
      {
        title: 'Alert',
        text: 'Send an opt-in text with the resource and where to go.',
      },
      {
        title: 'Check in',
        text: 'People reply or scan a QR code, privately. No app.',
      },
      {
        title: 'Connect',
        text: 'Your team follows up. The report shows what changed.',
      },
    ],
    cta: 'Talk with partnerships',
    subject: 'Provider partnership',
    guide: { to: '/outreach-tools', label: 'See how outreach works' },
  },
  {
    id: 'venues',
    path: '/access-points',
    doorTo: '/access-points',
    doorLabel: 'Become an access point',
    nav: 'If people come to you',
    kicker: 'Congregations, libraries, community centers',
    title: 'Your front desk can be where people find help.',
    panel: 'Congregations, libraries, community centers, and food sites.',
    lede: 'A QR code or kiosk lets visitors ask for help privately. Your team follows up. No app.',
    points: [],
    cta: 'Become an access point',
    subject: 'Access point',
    guide: { to: '/outreach-tools', label: 'See how outreach works' },
  },
  {
    id: 'backers',
    path: '/for-backers',
    doorTo: '/for-backers',
    doorLabel: 'See how a gift is used',
    nav: 'If you fund the work',
    kicker: 'Foundations, public funders, major donors',
    title: 'Fund prevention you can measure.',
    panel: 'Foundations, public funders, and major donors.',
    lede: 'Partners reach people before harm happens, and report what changed. Gifts go to Hope with Love through Every.org.',
    points: [],
    cta: 'Donate on Every.org',
    donate: true,
    subject: 'Funding a city',
  },
]

export function roleById(id) {
  return roles.find((role) => role.id === id)
}
