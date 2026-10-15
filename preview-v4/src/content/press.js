import { pressArticleById } from './pressArticles.js'

/** H1S releases live here; independent coverage stays with its publisher. */
export const releases = [
  {
    "id": "frank-adames-national-service-award",
    "title": "Frank Adames receives National Service Award for helping those most vulnerable, including refugees"
  },
  {
    "id": "dc-community-network",
    "title": "DC Councilmember steadfast on strengthening a proven network to serve everyone, including returning citizens and veterans"
  },
  {
    "id": "hurricane-florence-alerts",
    "title": "HopeOneSource releases emergency alerts during Hurricane Florence"
  },
  {
    "id": "contactless-outreach-covid-19",
    "title": "HopeOneSource gives local service providers a simple, contactless way to connect with the people they serve during COVID-19"
  },
  {
    "id": "helping-2000-people",
    "title": "HopeOneSource is now helping over 2,000 people experiencing homelessness"
  },
  {
    "id": "text-messages-for-dc-residents",
    "title": "HopeOneSource leverages the power of text messages to help vulnerable DC residents"
  },
  {
    "id": "preventing-hypothermia-deaths",
    "title": "How DC can prevent hypothermia deaths this winter"
  },
  {
    "id": "dc-service-provider-convening",
    "title": "Local leaders from over 20 DC housing, career, and service providers fight homelessness"
  },
  {
    "id": "derrick-woodfork-resources",
    "title": "Derrick Woodfork: accessing free meals and job resources from more than 70 service providers"
  },
  {
    "id": "partner-network-homelessness",
    "title": "HopeOneSource partners with service providers to work to reduce numbers of those experiencing homelessness"
  }
].map((item) => {
  const article = pressArticleById(item.id)
  return {
    ...item,
    date: article.date,
    dateTime: article.dateTime,
    source: article.author || 'Hope1Source',
    to: '/press/' + article.id,
  }
})

export const coverage = [
  {
    date: 'March 6, 2025',
    dateTime: '2025-03-06',
    title: 'Frank V. Adames named a Northern Virginia 40 Under 40 honoree',
    detail: 'Leadership Center of Arlington and Leadership Fairfax · Official 2025 honoree announcement.',
    href: 'https://www.leadercenter.org/press-releases/announcing-2025-northern-virginia-40-under-40-honorees/',
  },
  {
    date: 'December 6, 2020',
    dateTime: '2020-12-06',
    title: 'Veterans notified by text of free produce at Charleston VA',
    detail: 'Erin Curran · VA News.',
    href: 'https://news.va.gov/81753/free-produce-veterans-charleston-va/',
  },
  {
    date: 'December 2, 2020',
    dateTime: '2020-12-02',
    title: 'On Giving Tuesday and social justice',
    detail: 'Erin Blakley · LinkedIn. Published as “The User Experience of Homelessness.”',
    href: 'https://www.linkedin.com/pulse/giving-tuesday-social-justice-erin-blakley',
  },
  {
    date: 'April 17, 2019',
    dateTime: '2019-04-17',
    title: 'This text-notification service for the DC homeless community is working to expand',
    detail: 'Street Sense Media. Independent coverage of the Interagency Council on Homelessness pilot.',
    href: 'https://streetsensemedia.org/article/notification-service-hopeonesource-expanded-greatly-after-start-as-an-interagency-council-on-homeless-pilot-program/',
  },
  {
    date: 'March 24, 2020',
    dateTime: '2020-03-24',
    title: 'Street Sense on which DC services stayed open during COVID-19',
    detail: 'Avi Bajpai · Street Sense Media.',
    href: 'https://streetsensemedia.org/article/coronavirus-services-homeless-resource/',
  },
  {
    date: 'September 9, 2015',
    dateTime: '2015-09-09',
    title: 'Text-messaging system as a guide to homeless services',
    detail: 'Street Sense Media, on the early District pilot with Miriam’s Kitchen and the Interagency Council on Homelessness.',
    href: 'https://streetsensemedia.org/article/text-messaging-system-a-potential-guide-to-homeless-services/',
  },
]

/** Dated social posts with readable summaries on this website. */
export const communityUpdates = [
  {
    date: 'October 16, 2024',
    dateTime: '2024-10-16',
    title: 'Hurricane Helene: keep checking what people need',
    detail: 'Tim and Wayne Underwood’s field observations on changing needs and coordinating support in North Carolina.',
    to: '/readiness#changing-needs',
  },
  {
    date: 'August 20, 2024',
    dateTime: '2024-08-20',
    title: 'Second Harvest Asia: making food-bank check-ins easier',
    detail: 'A partner’s account of moving from manual recipient checks to immediate online validation.',
    to: '/case-studies/second-harvest-asia',
  },
]
