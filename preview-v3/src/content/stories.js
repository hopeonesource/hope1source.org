/**
 * Stories for the recommended preview.
 * VA leads. H1S provided technical assistance. It was not the intervention.
 * DC is past tense. Nearly 80% stays on the story, not the home card.
 * No Crystal quote. No 52% claim.
 */
export const stories = [
  {
    slug: 'veterans-affairs-national-homeless-programs',
    title: 'Veterans Affairs national homeless programs',
    outcome: 'Remove barriers to care',
    cardTitle: "Some veterans weren't getting help. We helped find out why.",
    card: 'Across 30 cities, access to food, counseling, and care rose from about 7 in 10 to as high as 9 in 10. Published in the Journal of Public Health.',
    org: 'Veterans Affairs / National Homeless Programs',
    industry: 'Federal government and nonprofit',
    location: '30 cities nationally',
    website: 'https://academic.oup.com/jpubhealth/article-abstract/44/1/207/6218923',
    websiteLabel: 'Journal of Public Health',
    studyUrl: 'https://pubmed.ncbi.nlm.nih.gov/33929036/',
    image: 'photos/va-program.jpg',
    imageFit: 'cover',
    imageAlt: 'Two people outdoors, cropped from the photo on the Hope1Source Veterans Affairs case study.',
    kicker: 'Journal of Public Health',
    summary:
      'We provided the technical assistance to help measure what matters. Across 30 cities, access to food, counseling, and care rose from about 7 in 10 to as high as 9 in 10.',
    quote:
      'Access to food, counseling, PTSD treatment, and hypertension and prediabetes care increased from 68 to 77 percent in year 2 to 83 to 97 percent in year 3. A gap in access for Black veterans closed.',
    quoteAttribution: 'Journal of Public Health',
    home: 'Some veterans were not getting help.',
    body: [
      'We provided the technical assistance to help measure what matters.',
      'The study followed access to food, counseling, PTSD treatment, and health screening across 30 cities. Read the paper before citing the percentages in a grant or a briefing.',
    ],
  },
  {
    slug: 'emergency-shelter-alerts',
    legacySlug: 'hopeonesource-saves-lives-with-emergency-shelter-alerts',
    title: 'Emergency shelter alerts',
    outcome: 'Prevent cold-weather harm',
    cardTitle: 'Alerts that point to a warm place tonight.',
    card: 'DC Human Services adopted the alert approach we brought. Alerts carried shelter and ride information in extreme weather.',
    image: 'photos/shelter-alerts.jpg',
    imageAlt: 'HopeOneSource emergency shelter alerts graphic from the published case study.',
    org: 'DC Human Services',
    industry: 'Local government',
    location: 'Washington, D.C.',
    website: 'https://dhs.dc.gov/',
    websiteLabel: 'DC Human Services',
    kicker: 'Washington, D.C.',
    summary:
      'Nearly 80% fewer hypothermia deaths in Washington, D.C., from the change in the Interagency Council on Homelessness quote on this page.',
    quote:
      'Hypothermia deaths in DC have consistently decreased over the past 5 years, down from 9 in 2015 to 2 in 2019.',
    quoteAttribution: 'DC Interagency Council on Homelessness',
    home: 'Alerts that point to a warm place tonight.',
    body: [
      'DC Human Services adopted the alert approach we brought. During the coldest and warmest months, alerts carried shelter and ride information for highly vulnerable residents.',
      'That partnership is in the past. For a live alert, use DC Human Services and the city’s own channels. This page is not a live alert feed.',
    ],
  },
  {
    slug: 'dreamers-and-achievers',
    title: 'Dreamers & Achievers',
    outcome: 'Show what changed',
    cardTitle: 'A small nonprofit that could finally show its reach.',
    card: 'Follow-ups grew from 60 to 1,400 people, as reported by the partner.',
    org: 'Dreamers & Achievers',
    industry: 'Local nonprofit',
    location: 'Washington, D.C.',
    website: 'http://dreamersandachievers.org/',
    websiteLabel: 'Dreamers & Achievers',
    image: 'photos/dorothy-adams.png',
    imageFit: 'cover',
    imagePosition: 'center 42%',
    portrait: true,
    imageAlt: 'Dorothy Adams, Executive Director of Dreamers and Achievers.',
    kicker: 'Partner reported',
    summary:
      'Dorothy Adams, Executive Director of Dreamers & Achievers, reported follow-ups growing from 60 to 1,400 people after joining the H1S network.',
    home: 'Follow-ups grew from 60 to 1,400 people.',
    quote:
      'HopeOneSource tells me what I need to know, including health and unmet needs. It is a very valuable tool.',
    quoteAttribution: 'Dorothy Adams, Executive Director, Dreamers & Achievers',
    metricsCaption: 'Partner-reported, before and after joining the H1S network.',
    metrics: [
      { label: 'Budget with assets', before: '$110,000', after: '$560,000' },
      { label: 'Feedback collected', before: '25 people', after: '2,268 people' },
      { label: 'Experience follow-ups', before: '60 people', after: '1,400 people' },
      { label: 'Clients served', before: '53 people', after: '882 people' },
      { label: 'Staff employed', before: '3 people', after: '9 people' },
    ],
    body: [
      'Dreamers & Achievers used Hope1Source to stay in touch with clients, funders, and volunteers.',
      'The figures are what the partner reported after joining the H1S network.',
    ],
  },
]

export function storyBySlug(slug) {
  return stories.find((story) => story.slug === slug || story.legacySlug === slug)
}
