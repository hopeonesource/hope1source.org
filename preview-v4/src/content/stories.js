/**
 * Stories for the recommended preview.
 * VA leads. H1S provided technical assistance. It was not the intervention.
 * DC is past tense. The 78% result stays on the story, not the home card.
 * No Crystal quote. No 52% claim.
 */
export const stories = [
  {
    slug: 'veterans-affairs-national-homeless-programs',
    title: 'Veterans Affairs national homeless programs',
    outcome: 'Understand barriers',
    cardTitle: "Make care easier to reach.",
    card: 'H1S co-authored a three-year quality improvement initiative with the VA in 30 communities that helped identify and improve access to care.',
    org: 'Veterans Affairs / National Homeless Programs',
    industry: 'Federal government and nonprofit',
    location: '30 cities nationally',
    website: 'https://academic.oup.com/jpubhealth/article-abstract/44/1/207/6218923',
    websiteLabel: 'Journal of Public Health',
    studyUrl: 'https://pubmed.ncbi.nlm.nih.gov/33929036/',
    image: 'photos/va-access-improvement.svg',
    imageFit: 'contain',
    imageAspectRatio: '3 / 2',
    imageAlt: 'Bar chart showing access to food, counseling, PTSD care, and blood pressure or prediabetes care improving from year two to year three.',
    kicker: 'Journal of Public Health',
    summary:
      'H1S contributed to research on barriers faced by veterans experiencing homelessness. In 30 cities, trained actors tested access to services, and teams received feedback to improve how they responded.',
    quote:
      'The ‘unannounced standardized veteran’ (USV) can identify previously unrecognized barriers to needed services and care.',
    quoteAttribution: 'Weiner and colleagues, Journal of Public Health, 2022',
    home: 'Some veterans were not getting help.',
    body: [
      'Finding a service does not always mean being able to use it. From 2017 to 2019, actors portraying veterans experiencing homelessness visited service centers in 30 cities. Teams received reports and were asked to address barriers. H1S contributed to the research.',
      'During these visits, access to the services studied increased from 68–77% in year two to 83–97% in year three. The study shows how systematic feedback can help teams improve access. These results come from the published study of service encounters, not a measure of every veteran’s experience.',
    ],
  },
  {
    slug: 'emergency-shelter-alerts',
    legacySlug: 'hopeonesource-saves-lives-with-emergency-shelter-alerts',
    title: 'Emergency shelter alerts',
    outcome: 'Share useful information',
    cardTitle: 'Put shelter information within reach.',
    card: 'DC Human Services used H1S to share emergency shelter and transportation information with residents.',
    image: 'photos/hypothermia-alert-people.svg',
    imageFit: 'contain',
    imageAspectRatio: '3 / 2',
    imageAlt: 'Full historic Washington, D.C. street photo beside an H1S message screenshot with the hypothermia shelter transportation alert in focus.',
    org: 'DC Human Services',
    industry: 'Local government',
    location: 'Washington, D.C.',
    website: 'https://dhs.dc.gov/',
    websiteLabel: 'DC Human Services',
    kicker: 'Washington, D.C.',
    summary:
      'DC Human Services used H1S emergency alerts to connect residents with shelter and transportation information during extreme weather. DC reported that hypothermia deaths fell 78% during the supported period.',
    quote: 'DC reported that hypothermia deaths fell 78% during the supported period.',
    quoteAttribution: 'DC Office of the Chief Medical Examiner, published H1S housing case study',
    home: 'Alerts that point to a warm place tonight.',
    body: [
      'During extreme weather, people need to know where shelter is available and how to get there.',
      'It also measured their real-time needs and made it easier to meet them.',
      'DC Human Services used H1S to send emergency alerts with shelter and transportation information to thousands of residents.',
      'The alerts put practical details on residents’ phones so people could see where shelter was available and how to get there.',
      'DC reported that hypothermia deaths fell 78% during the supported period.',
    ],
  },
  {
    slug: 'dreamers-and-achievers',
    title: 'Dreamers & Achievers',
    outcome: 'Keep listening',
    cardTitle: 'Stay connected through follow-up.',
    card: 'Dreamers & Achievers used H1S to stay in touch and gather feedback. The partner reported follow-ups growing from 60 to 1,400 people and funding growing 5x during the supported period.',
    org: 'Dreamers & Achievers',
    industry: 'Local nonprofit',
    location: 'Washington, D.C.',
    website: 'http://dreamersandachievers.org/',
    websiteLabel: 'Dreamers & Achievers',
    image: 'photos/dreamers-growth.svg',
    imageFit: 'contain',
    imageAspectRatio: '3 / 2',
    imageAlt: 'Partner-reported growth graphic with a small portrait of Dorothy Adams and before-and-after figures for funding, feedback, and follow-ups.',
    kicker: 'Partner reported',
    summary:
      'Dreamers & Achievers used H1S to stay connected with its community and learn about unmet needs. The partner reported follow-ups growing from 60 to 1,400 people and funding growing 5x during the supported period.',
    home: 'Follow-ups grew from 60 to 1,400 people, and funding grew 5x.',
    quote:
      'HopeOneSource tells me what I need to know, including health and unmet needs. It is a very valuable tool.',
    quoteAttribution: 'Dorothy Adams, Executive Director, Dreamers & Achievers',
    metricsCaption: 'Partner-reported figures from the supported period.',
    metrics: [
      { label: 'Budget with assets', before: '$110,000', after: '$560,000' },
      { label: 'Feedback collected', before: '25 people', after: '2,268 people' },
      { label: 'Experience follow-ups', before: '60 people', after: '1,400 people' },
      { label: 'Clients served', before: '53 people', after: '882 people' },
      { label: 'Staff employed', before: '3 people', after: '9 people' },
    ],
    body: [
      'For a community organization, knowing how people are doing takes continued contact. Dreamers & Achievers used H1S to stay in touch with clients, funders, and volunteers and to learn about health and unmet needs.',
      'During the supported period, the partner reported follow-ups growing from 60 to 1,400 people, feedback collected from 25 to 2,268 people, and funding growing 5x.',
    ],
  },
]

export function storyBySlug(slug) {
  return stories.find((story) => story.slug === slug || story.legacySlug === slug)
}
