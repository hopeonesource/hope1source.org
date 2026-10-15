/**
 * Stories for the recommended preview.
 * VA leads. H1S provided technical assistance. It was not the intervention.
 * DC is past tense. The home card includes the supported-period 78% result.
 * No Crystal quote. No 52% claim.
 */
export const stories = [
  {
    slug: 'veterans-affairs-national-homeless-programs',
    title: 'Veterans Affairs national homeless programs',
    outcome: 'Understand barriers',
    cardTitle: "Make care easier to reach.",
    card: 'H1S co-authored a three-year quality improvement initiative with the VA in 30 communities that helped identify and improve access to care.',
    org: 'Veterans Affairs / National',
    industry: 'Federal Government - Access',
    location: '30 cities nationally',
    website: 'https://academic.oup.com/jpubhealth/article-abstract/44/1/207/6218923',
    websiteLabel: 'Journal of Public Health',
    studyUrl: 'https://pubmed.ncbi.nlm.nih.gov/33929036/',
    image: 'photos/va-access-improvement.svg',
    imageWidth: 750,
    imageHeight: 605,
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
    cardTitle: 'A text points the way to warmth.',
    card: 'DC Human Services used H1S hypothermia alerts to share shelter and transport details. Hypothermia deaths fell 78% during the supported period.',
    image: 'photos/hypothermia-alert-people.svg',
    imageWidth: 900,
    imageHeight: 600,
    imageFit: 'contain',
    imageAspectRatio: '3 / 2',
    imageAlt: 'Full historic Washington, D.C. street photo beside an H1S message screenshot with the hypothermia shelter transportation alert in focus.',
    org: 'DC Human Services',
    industry: 'Local Government - Access',
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
      'DC Human Services used H1S to send emergency alerts with shelter and transportation information to thousands of residents.',
      'The alerts put practical details on residents’ phones so people could see where shelter was available and how to get there.',
      'It also measured their real-time needs and made it easier to meet them.',
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
    imageWidth: 1200,
    imageHeight: 800,
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

// Additional stories appear in the library without expanding the homepage.
export const allStories = [
  ...stories,
  {
    slug: 'veterans-affairs-feeding-america-partnership',
    title: 'Feeding America and Charleston VA: connecting veterans with food and support.',
    cardTitle: 'Turn a food check-in into a connection to support.',
    org: 'Feeding America',
    industry: 'Nonprofit - Food Access',
    location: 'Charleston, South Carolina',
    website: 'https://news.va.gov/81753/free-produce-veterans-charleston-va/',
    websiteLabel: 'VA News · December 6, 2020',
    studyUrl: 'https://cdn.prod.website-files.com/5f904f4c523012193298304f/5f98d882ec51869390472125_VA%20Feeding%20America%20Partneship_Charleston%20Case%20Study_Final.pdf',
    kicker: 'VA / Feeding America partnership',
    summary:
      'H1S supported Charleston VA’s Feeding America pilot with check-ins, outreach, and reporting. The published case study reports 95% less time spent on reporting, freeing staff for direct service while helping veterans connect with food and other support.',
    quote: 'This virtual tool provides exactly what is needed to the right people.',
    quoteAttribution: 'Margaret Bradbury, Chief of Nutrition and Food Service, Charleston VA',
    body: [
      'A food-pantry visit can reveal needs beyond groceries. Charleston’s Ralph H. Johnson VA Medical Center began piloting a check-in tool through the VA/Feeding America partnership in 2019. H1S supported real-time outreach, data collection, and reporting to help teams understand and respond to veterans’ needs.',
      'Veterans could check in using a phone, tablet, or computer and share whether they wanted help with food benefits or faced housing instability. Staff could use those responses to connect them with a case manager and follow up.',
      'The case study reports that 90% provided a cell phone number for follow-up. All participants interested in SNAP food assistance who provided a cell phone number were contacted for support. It also reports that 31% were identified as experiencing housing instability and connected with support.',
      'Reporting took 95% less time, allowing staff to spend that time on direct service. The team also gained information about staffing, donations, demand, and gaps in food access to guide its work.',
      'The report follows one veteran whose check-in revealed food and housing needs. Connections to food assistance helped free up money for other bills; he later reported that he was no longer experiencing housing instability.',
      'VA News also described how Charleston VA used online registration and text reminders for its Fresh Xpress produce distribution with Lowcountry Food Bank, part of the Feeding America network. The event served 181 veterans with 280 boxes containing more than 5,600 pounds of produce.',
    ],
  },
  {
    slug: 'second-harvest-asia',
    title: 'Making food-bank check-ins easier.',
    cardTitle: 'Make the first step simpler.',
    org: 'Second Harvest Asia',
    industry: 'Nonprofit - Food Access',
    location: 'Japan',
    website: 'https://www.facebook.com/photo/?fbid=904654131689097&set=a.626564272831419',
    websiteLabel: 'Partner testimonial · August 20, 2024',
    kicker: 'Partner experience',
    summary:
      'Second Harvest Asia partnered with H1S to help a food bank in Japan move from manual recipient checks to immediate online validation, according to founder Charles McJilton.',
    quote:
      'H1S Checkins also provides opportunities to introduce new services, automate future outreach, and collect vital real-time data needed for management and donors.',
    quoteAttribution: 'Charles McJilton, Founder, Second Harvest Asia · shared August 20, 2024',
    body: [
      'Before the change, each recipient needed to be verified through a manual process before using the pantry. Second Harvest Asia worked with H1S to help move that step online.',
      'In the partner testimonial shared by Hope with Love, McJilton described immediate validation in the new system. This gave the pantry a simpler way to confirm recipients before they used the service.',
      'He also described opportunities to introduce services, automate future outreach, and gather real-time information for managers and donors. The common thread is practical: make it easier to connect, learn from each check-in, and use that information to improve service.',
    ],
  },
]

export function storyBySlug(slug) {
  return allStories.find((story) => story.slug === slug || story.legacySlug === slug)
}
