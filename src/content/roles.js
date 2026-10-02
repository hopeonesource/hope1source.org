export const roles = [
  {
    id: 'providers',
    path: '/for-providers',
    nav: 'Providers',
    kicker: 'Partner door',
    title: 'For providers',
    lede: 'Nonprofits, agencies, and program leads use one check-in loop for needs, follow-up, and reporting — in place of another spreadsheet.',
    points: [
      {
        title: 'Hear it once, follow up in time',
        text: 'A check-in can capture what a person will not say at a public counter. Your team sees the signal. The wider internet does not.',
      },
      {
        title: 'Show the work to funders',
        text: 'Partners have used the network for live outreach and for the counts managers and donors ask about. Case studies on this site stay inside what was publicly written.',
      },
      {
        title: 'Keep help-seeker signup off your sales pitch',
        text: 'People looking for food, shelter, or care belong on the resource pages and in your own channels. This door is for the organization that operates the service.',
      },
    ],
    cta: 'Talk with partnerships',
    subject: 'Provider partnership',
  },
  {
    id: 'venues',
    path: '/for-venues',
    nav: 'Venues',
    kicker: 'Partner door',
    title: 'For venues',
    lede: 'Restaurants, rooms, shows, and open houses can turn a quiet complaint into a private fix — and a public reason to come back.',
    points: [
      {
        title: 'Private friction',
        text: 'The guest, fan, or visitor says what went wrong where only your team can see it. You get a chance to repair the visit before it hardens into a one-star review.',
      },
      {
        title: 'Public praise',
        text: 'When the visit goes well, the same moment can invite a review or a return. Praise is the part you are glad to show.',
      },
      {
        title: 'Cause, after the loop works',
        text: 'A check-in can also point toward a community partner. That is a feature of the relationship, not the first line of this page.',
      },
    ],
    cta: 'Talk with partnerships',
    subject: 'Venue partnership',
    note: 'A restaurant, a show, or an open house can use the same loop. The Check-ins tour for those rooms is the partner hub linked in the footer. This page is the conversation that comes first.',
  },
  {
    id: 'backers',
    path: '/for-backers',
    nav: 'Backers',
    kicker: 'Partner door',
    title: 'For backers',
    lede: 'Sponsors, foundations, and major donors fund the network and can see the partner story behind the gift.',
    points: [
      {
        title: 'Fund the connective tissue',
        text: 'Hope With Love is the 501(c)(3). Gifts support the mission of verified connections between people and services, delivered with partner organizations.',
      },
      {
        title: 'Give where the receipt lives',
        text: 'Online gifts go to Every.org for Hope With Love. This site does not run a second card form. Checks use the Arlington address after you confirm it is current.',
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
