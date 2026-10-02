/**
 * Case studies ported from the public Hope1Source pages.
 * Copy stays inside what those pages actually stated.
 */
export const stories = [
  {
    slug: 'emergency-shelter-alerts',
    legacySlug: 'hopeonesource-saves-lives-with-emergency-shelter-alerts',
    title: 'Emergency shelter alerts',
    cardTitle: 'Nearly 80% fewer hypothermia deaths',
    card: 'Washington, D.C.',
    image: 'photos/shelter-alerts.jpg',
    imageAlt: 'HopeOneSource emergency shelter alerts graphic from the published case study.',
    org: 'DC Department of Human Services',
    industry: 'Local government',
    location: 'Washington, D.C.',
    website: 'https://dhs.dc.gov/',
    websiteLabel: 'DC Department of Human Services',
    kicker: 'Washington, D.C.',
    summary:
      'Nearly 80% fewer hypothermia deaths in Washington, D.C. That figure is the change in the ICH quote below, not a later winter and not a percent printed in the quote.',
    quote:
      'Hypothermia deaths in DC have consistently decreased over the past 5 years, down from 9 in 2015 to 2 in 2019.',
    quoteAttribution:
      'DC Interagency Council on Homelessness, as published on hope1source.org/housing',
    home: 'Nearly 80% fewer hypothermia deaths.',
    note: 'As published on hope1source.org/housing. Nearly 80% is derived from the published counts 9 and 2. It is not a separate percentage in the ICH quote, and it is not a count from a later winter.',
    body: [
      'During the coldest and warmest months, DC Department of Human Services has used Hope1Source to send emergency alerts to hundreds of highly vulnerable residents, with information on transportation and shelter.',
      'Crystal, described on the public case-study page as a D.C. resident experiencing homelessness, said: “When I see that alert come to my phone, I know I have somewhere safe and warm to go.” That is one person’s account of a government alert. It is not a current shelter-bed list. For a live alert, use DC DHS and the city’s own channels.',
      'Partners who run similar alerts can talk with partnerships about check-ins and outreach. This story is here so the operating model is visible, not so this page becomes a beneficiary intake form.',
    ],
  },
  {
    slug: 'veterans-affairs-national-homeless-programs',
    title: 'Veterans Affairs national homeless programs',
    cardTitle: 'Veterans Affairs',
    card: 'Barriers removed in 30 communities.',
    org: 'Veterans Affairs / National Homeless Programs',
    industry: 'Federal government and nonprofit',
    location: '30 communities nationally',
    website: 'https://academic.oup.com/jpubhealth/article-abstract/44/1/207/6218923',
    websiteLabel: 'Published study (Journal of Public Health)',
    image: 'photos/va-program.jpg',
    imageFit: 'cover',
    imageAlt: 'Two people outdoors, cropped from the photo on the Hope1Source Veterans Affairs case study.',
    kicker: 'Provider outcome',
    summary:
      'A three-year quality-improvement study. Hope1Source staff managed a working group that led the project. The public case study says the work detected, reduced, and then eliminated barriers to services for seniors and veterans experiencing homelessness, by race and age, across 30 communities.',
    quote:
      'Access to food, counseling, PTSD treatment, and hypertension/prediabetes care services increased significantly from 68–77% in year 2 to 83–97% in year 3 (each P < 0.05 adjusted for script present). A significant disparity in access for African American actors resolved following more uniform adherence to pre-existing policies.',
    quoteAttribution: 'Finding quoted on the public case-study page',
    home: 'Barriers removed in 30 communities.',
    body: [
      'This page does not restate the journal article. The number above is the finding the organization published on its case-study page and tied to an Oxford University Press abstract.',
      'Read the study before citing the percentages in a grant, ad, or press pitch. The case study describes Hope1Source’s role as staffing the working group that spearheaded the project.',
    ],
  },
  {
    slug: 'dreamers-and-achievers',
    title: 'Dreamers & Achievers',
    cardTitle: '5× budget',
    card: '$110k to $560k.',
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
    kicker: 'Provider outcome',
    summary:
      'Dorothy Adams, Executive Director, reported budget with assets of $110,000 before joining the H1S network and $560,000 after. The partner graphics do not show years.',
    home: '$110k to $560k.',
    quote: 'HopeOneSource tells me what I need to know, including health and unmet needs. It is a very valuable tool.',
    quoteAttribution: 'Dorothy Adams, Executive Director, as published on the case-study page',
    metricsCaption:
      'Partner-reported, before and after joining the H1S network. The graphics do not show years.',
    metrics: [
      { label: 'Budget with assets', before: '$110,000', after: '$560,000' },
      { label: 'Feedback collected', before: '25 people', after: '2,268 people' },
      { label: 'Experience follow-ups', before: '60 people', after: '1,400 people' },
      { label: 'Clients served', before: '53 people', after: '882 people' },
      { label: 'Staff employed', before: '3 people', after: '9 people' },
    ],
    body: [
      'The published case study describes Dreamers & Achievers using Hope1Source to stay in touch with clients, funders, and volunteers before and during COVID-19.',
      'The figures above are what the partner reported after joining the H1S network. They come from Hope1Source partner graphics. Those graphics do not name a year, and this page does not treat the figures as an audited financial statement.',
    ],
  },
]

export function storyBySlug(slug) {
  return stories.find((story) => story.slug === slug || story.legacySlug === slug)
}
