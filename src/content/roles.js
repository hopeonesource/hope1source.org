export const roles = [
  {
    id: 'providers',
    path: '/for-providers',
    nav: 'If you run a program',
    kicker: 'Nonprofits, agencies, program leads',
    title: 'If you run a program',
    panel: 'Nonprofits, agencies, and program leads.',
    lede: 'Hear what people need, follow up, and show what happened. The check-in stays with your team.',
    points: [
      {
        title: 'What people tell you stays private',
        text: 'A person can say what they could not say at a public counter. Your staff sees it. It is not posted for the wider internet.',
      },
      {
        title: 'Then you follow through',
        text: 'Partners use the same relationship for outreach and for the counts managers and donors ask to see. The stories on this site are ones already published.',
      },
      {
        title: 'People seeking help start with a partner',
        text: 'Food, shelter, and care are reached through the organization that runs the service, or through the resource guides on this site. This page is for that organization.',
      },
    ],
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
    lede: 'A guest can tell you what went wrong in private. You follow up. When the visit goes well, the praise can be public.',
    points: [
      {
        title: 'A private note',
        text: 'The guest, fan, or visitor says what went wrong where only your team can see it. You can repair the visit before it becomes a public complaint.',
      },
      {
        title: 'Praise you can show',
        text: 'When the visit goes well, you can invite a review or a return. That is the part worth sharing.',
      },
      {
        title: 'A community gift, when it fits',
        text: 'A check-in can also point toward a community partner. That comes after the visit is handled.',
      },
    ],
    cta: 'Talk with partnerships',
    subject: 'Venue partnership',
    note: 'Restaurants, shows, and open houses can use the same check-in. The product tour lives on the partner hub linked in the footer. Start with a conversation here.',
  },
  {
    id: 'backers',
    path: '/for-backers',
    nav: 'If you fund the work',
    kicker: 'Sponsors, foundations, major donors',
    title: 'If you fund the work',
    panel: 'Sponsors, foundations, and major donors.',
    lede: 'Fund the network. Read the partner stories. Give when you are ready.',
    points: [
      {
        title: 'The gift supports the network',
        text: 'Hope With Love is the 501(c)(3). Gifts help partner organizations connect people with verified services.',
      },
      {
        title: 'Give through Every.org',
        text: 'Online gifts go to Every.org for Hope With Love. This site does not take the card payment. Checks use the Arlington address after you confirm it is current.',
      },
      {
        title: 'Sponsor a partnership',
        text: 'Corporate and foundation conversations go to partnerships@hope1source.me. We would rather design the gift with you than guess at a benefits sheet.',
      },
    ],
    cta: 'Donate on Every.org',
    donate: true,
    subject: 'Backer or sponsorship conversation',
  },
]

export function roleById(id) {
  return roles.find((role) => role.id === id)
}
