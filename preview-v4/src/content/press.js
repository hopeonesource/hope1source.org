import { pressArticleById } from './pressArticles.js'
import { pressArticlesUpdates } from './pressArticlesUpdates.js'

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
    detail: 'E. Curran · VA News.',
    href: 'https://news.va.gov/81753/free-produce-veterans-charleston-va/',
  },
  {
    date: 'December 2, 2020',
    dateTime: '2020-12-02',
    title: 'On Giving Tuesday and social justice',
    detail: 'E. Blakley · LinkedIn. Published as “The User Experience of Homelessness.”',
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
    detail: 'A. Bajpai · Street Sense Media.',
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

/** Dated social posts with summaries and links to their original sources. */
export const communityUpdates = [
  {
    date: 'July 29, 2025',
    dateTime: '2025-07-29',
    title: 'Listening is part of better service',
    detail: 'H1S described its support for partners who want to listen, deliver services honestly, and use what they learn for continuous quality improvement.',
    href: 'https://www.facebook.com/hopewithlove/videos/780893854293582/',
  },
  {
    date: 'June 21, 2025',
    dateTime: '2025-06-21',
    title: 'Keeping people at the center of automation',
    detail: 'A reflection on using automation to support human work, with people involved in decisions and real connections at the center of each check-in.',
    href: 'https://www.facebook.com/hopewithlove/posts/pfbid02Vt3VGEuDBvS7grkhkasBYK6QzYddtdWiX9dvAVavyN2onCgBfbbe9GeMAHHE1FPtl',
  },
  {
    date: 'October 16, 2024',
    dateTime: '2024-10-16',
    title: 'Hurricane Helene: keep checking what people need',
    detail: 'Tim and Wayne Underwood’s field observations on changing needs and coordinating support in North Carolina.',
    to: '/readiness#changing-needs',
    sourceHref: 'https://www.facebook.com/hopewithlove/posts/pfbid036Vero7qHFBwnxeHb9vHLt6GjswP3StUpojmJnVKH3xXeRPWCweSFXnWEA1wUab9Xl',
  },
  {
    date: 'August 20, 2024',
    dateTime: '2024-08-20',
    title: 'Second Harvest Asia: making food-bank check-ins easier',
    detail: 'A partner’s account of moving from manual recipient checks to immediate online validation.',
    to: '/case-studies/second-harvest-asia',
    sourceHref: 'https://www.facebook.com/photo/?fbid=904654131689097&set=a.626564272831419',
  },
  {
    date: 'March 24, 2024',
    dateTime: '2024-03-24',
    title: 'Celebrating Dorothy Adams and Dreamers & Achievers',
    detail: 'A Women’s History Month spotlight recognized Dorothy Adams and shared the partner’s reported growth in funding, feedback, follow-ups, clients served, and staff.',
    to: '/case-studies/dreamers-and-achievers',
    sourceHref: 'https://www.facebook.com/photo/?fbid=809284237892754&set=a.626564272831419',
  },
  {
    date: 'February 2, 2024',
    dateTime: '2024-02-02',
    title: 'Gaming and pathways to technical careers',
    detail: 'In a 2024 campaign, H1S invited veterans, refugees, and their families to virtual gaming events linked to opportunities for Salesforce, AWS, and Microsoft Azure training.',
    href: 'https://www.facebook.com/photo/?fbid=778745194279992&set=a.626564272831419',
  },
  {
    date: 'November 4, 2023',
    dateTime: '2023-11-04',
    title: 'Bringing check-ins to the table',
    detail: 'H1S shared the delivery of QR-marked drinking glasses to partners. The update showed a practical way to invite feedback where a service happens.',
    href: 'https://www.facebook.com/photo/?fbid=724160976405081&set=a.626564272831419',
  },
  {
    date: 'February 23, 2023',
    dateTime: '2023-02-23',
    title: 'Speaking up for easier access to DC services',
    detail: 'H1S shared Tim Underwood’s participation in a DC Council housing oversight hearing and its commitment to making services easier to discover and access.',
    href: 'https://www.facebook.com/photo/?fbid=5765730620188963&set=a.626564272831419',
  },
]

// ISO date strings sort chronologically without timezone conversion. A partial
// date follows precisely dated items in that same year/month; its label remains
// at the source's known precision rather than inventing a month or day.
export const newsItems = [
  ...pressArticlesUpdates.map((article) => ({
    date: article.date,
    dateTime: article.dateTime,
    title: article.title,
    detail: article.description,
    to: `/press/${article.id}`,
    kind: article.kicker,
  })),
  ...releases.map((item) => ({ ...item, kind: 'Announcement' })),
  ...coverage.map((item) => ({ ...item, kind: 'Coverage' })),
  ...communityUpdates.map((item) => ({ ...item, kind: 'Community update' })),
].sort((a, b) => b.dateTime.localeCompare(a.dateTime))
