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
    outcome: 'Understand barriers',
    cardTitle: "Make care easier to reach.",
    card: 'H1S co-authored a three-year quality improvement initiative with the VA in 30 communities that helped identify and improve access to care.',
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
    card: 'DC Human Services used H1S to send shelter and transportation information to residents during extreme weather.',
    image: 'photos/shelter-alerts.jpg',
    imageAlt: 'HopeOneSource emergency shelter alerts graphic from the published case study.',
    org: 'DC Human Services',
    industry: 'Local government',
    location: 'Washington, D.C.',
    website: 'https://dhs.dc.gov/',
    websiteLabel: 'DC Human Services',
    kicker: 'Washington, D.C.',
    summary:
      'DC Human Services used H1S to help residents find shelter and transportation during extreme weather. The partnership shows how timely information can help people take the next step toward support.',
    quote:
      'Hypothermia deaths in DC have consistently decreased over the past 5 years, down from 9 in 2015 to 2 in 2019.',
    quoteAttribution: 'DC Interagency Council on Homelessness, as quoted in the published H1S housing page',
    home: 'Alerts that point to a warm place tonight.',
    body: [
      'During extreme weather, people need to know where shelter is available and how to get there. DC Human Services used H1S to share that information through emergency alerts.',
      'The historical figures quoted above describe the city’s wider response. They do not establish how much of the change came from H1S alerts. This partnership is in the past; current shelter and transportation information comes from DC Human Services and the city’s own channels.',
    ],
  },
  {
    slug: 'dreamers-and-achievers',
    title: 'Dreamers & Achievers',
    outcome: 'Keep listening',
    cardTitle: 'Stay connected through follow-up.',
    card: 'Dreamers & Achievers used H1S to stay in touch and gather feedback. The partner reported follow-ups growing from 60 to 1,400 people.',
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
      'Dreamers & Achievers used H1S to stay connected with its community and learn about unmet needs. The partner reported follow-ups growing from 60 to 1,400 people after joining the H1S network.',
    home: 'Follow-ups grew from 60 to 1,400 people.',
    quote:
      'HopeOneSource tells me what I need to know, including health and unmet needs. It is a very valuable tool.',
    quoteAttribution: 'Dorothy Adams, Executive Director, Dreamers & Achievers',
    metricsCaption: 'Partner-reported figures from before and after joining the H1S network. Reporting dates were not provided.',
    metrics: [
      { label: 'Budget with assets', before: '$110,000', after: '$560,000' },
      { label: 'Feedback collected', before: '25 people', after: '2,268 people' },
      { label: 'Experience follow-ups', before: '60 people', after: '1,400 people' },
      { label: 'Clients served', before: '53 people', after: '882 people' },
      { label: 'Staff employed', before: '3 people', after: '9 people' },
    ],
    body: [
      'For a community organization, knowing how people are doing takes continued contact. Dreamers & Achievers used H1S to stay in touch with clients, funders, and volunteers and to learn about health and unmet needs.',
      'The partner reported follow-ups growing from 60 to 1,400 people and feedback collected from 25 to 2,268 people after joining the H1S network. These figures describe the partner’s reported experience. Reporting dates were not provided, and the figures do not isolate H1S’s contribution to the changes.',
    ],
  },
]

export function storyBySlug(slug) {
  return stories.find((story) => story.slug === slug || story.legacySlug === slug)
}
