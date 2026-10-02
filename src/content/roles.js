export const roles = [
  {
    id: 'providers',
    path: '/for-providers',
    nav: 'If you run a program',
    kicker: 'Nonprofits, agencies, program leads',
    title: 'If you run a program',
    panel: 'Nonprofits, agencies, and program leads.',
    lede: 'For nonprofits, agencies, and program leads. Serve people well, follow up, and show what changed.',
    points: [],
    cta: 'Talk with partnerships',
    subject: 'Provider partnership',
  },
  {
    id: 'venues',
    path: '/for-venues',
    nav: 'If you host people',
    kicker: 'Restaurants, rooms, shows, open houses',
    title: 'If you host people',
    panel: 'Restaurants, rooms, shows, and open houses.',
    lede: 'For restaurants, rooms, shows, and open houses. Take care of the people you host, and share the good that follows.',
    points: [],
    cta: 'Talk with partnerships',
    subject: 'Venue partnership',
  },
  {
    id: 'backers',
    path: '/for-backers',
    nav: 'If you fund the work',
    kicker: 'Sponsors, foundations, major donors',
    title: 'If you fund the work',
    panel: 'Sponsors, foundations, and major donors.',
    lede: 'For sponsors, foundations, and major donors. Fund the network and read the impact stories.',
    points: [],
    cta: 'Donate on Every.org',
    donate: true,
    subject: 'Backer or sponsorship conversation',
  },
]

export function roleById(id) {
  return roles.find((role) => role.id === id)
}
