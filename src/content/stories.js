/**
 * Case studies ported from the public Hope1Source pages.
 * Copy stays inside what those pages actually stated.
 */
export const stories = [
  {
    slug: 'veterans-affairs-national-homeless-programs',
    title: 'Veterans Affairs national homeless programs',
    cardTitle: 'Veterans Affairs',
    card: 'Access to care rose from 68–77% to 83–97%.',
    org: 'Veterans Affairs / National Homeless Programs',
    industry: 'Federal government and nonprofit',
    location: '30 communities nationally',
    website: 'https://academic.oup.com/jpubhealth/article-abstract/44/1/207/6218923',
    websiteLabel: 'Published study (Journal of Public Health)',
    kicker: 'Provider outcome',
    summary:
      'A three-year quality-improvement study. Hope1Source staff managed a working group that led the project. The public case study says the work detected, reduced, and then eliminated barriers to services for seniors and veterans experiencing homelessness, by race and age, across 30 communities.',
    quote:
      'Access to food, counseling, PTSD treatment, and hypertension/prediabetes care services increased significantly from 68–77% in year 2 to 83–97% in year 3 (each P < 0.05 adjusted for script present). A significant disparity in access for African American actors resolved following more uniform adherence to pre-existing policies.',
    quoteAttribution: 'Finding quoted on the public case-study page',
    home: 'Veterans and seniors across 30 communities. In a three-year study, access to food, counseling, PTSD treatment, and care for hypertension and prediabetes rose from 68–77% to 83–97%. A disparity in access by race was resolved.',
    body: [
      'This page does not restate the journal article. The number above is the finding the organization published on its case-study page and tied to an Oxford University Press abstract.',
      'Read the study before citing the percentages in a grant, ad, or press pitch. The case study describes Hope1Source’s role as staffing the working group that spearheaded the project.',
    ],
  },
  {
    slug: 'emergency-shelter-alerts',
    legacySlug: 'hopeonesource-saves-lives-with-emergency-shelter-alerts',
    title: 'Emergency shelter alerts',
    cardTitle: 'Shelter alerts',
    card: 'Emergency alerts reached hundreds of D.C. residents.',
    org: 'DC Department of Human Services',
    industry: 'Local government',
    location: 'Washington, D.C.',
    website: 'https://dhs.dc.gov/',
    websiteLabel: 'DC Department of Human Services',
    kicker: 'Provider outcome',
    summary:
      'During the coldest and warmest months, DC Department of Human Services has used Hope1Source — the outreach tool created by Hope With Love — to send emergency alerts to hundreds of highly vulnerable residents, with information on transportation and shelter.',
    home: 'In extreme cold and heat, DC Department of Human Services has sent emergency alerts to hundreds of residents, with transportation and shelter information. One resident said that when the alert arrives, they know they have somewhere safe and warm to go.',
    quote: 'When I see that alert come to my phone, I know I have somewhere safe and warm to go.',
    quoteAttribution: 'Crystal, described on the public case-study page as a D.C. resident experiencing homelessness',
    body: [
      'The quote is a resident’s experience of a government alert, published on the prior case-study page. It is not a current shelter-bed listing. Hours, sites, and hypothermia status change. For a live alert, use DC DHS and the city’s own channels.',
      'Partners who run similar alerts can talk with partnerships about check-ins and outreach. This story is here so the operating model is visible, not so this page becomes a beneficiary intake form.',
    ],
  },
  {
    slug: 'dreamers-and-achievers',
    title: 'Dreamers & Achievers',
    cardTitle: 'Dreamers & Achievers',
    card: 'A D.C. nonprofit stayed close to the people it serves.',
    org: 'Dreamers & Achievers',
    industry: 'Local nonprofit',
    location: 'Washington, D.C.',
    website: 'http://dreamersandachievers.org/',
    websiteLabel: 'Dreamers & Achievers',
    kicker: 'Provider outcome',
    summary:
      'Dorothy Adams runs Dreamers & Achievers, a nonprofit providing direct services to hundreds of highly vulnerable D.C. residents. The public case study describes the organization using Hope1Source to stay in touch with clients, funders, and volunteers before and during COVID-19.',
    home: 'Dorothy Adams and Dreamers & Achievers serve hundreds of residents in Washington, D.C. Before and during COVID-19, she used Hope1Source to stay in touch with clients, funders, and volunteers.',
    quote: 'HopeOneSource tells me what I need to know, including health and unmet needs. It is a very valuable tool.',
    quoteAttribution: 'Dorothy Adams, Executive Director, as published on the case-study page',
    body: [
      'The prior page did not publish a longer metric set for this partnership. This summary stops where that page stopped.',
      'Provider partnerships start with a conversation, not a self-serve checkout on this site.',
    ],
  },
]

export function storyBySlug(slug) {
  return stories.find((story) => story.slug === slug || story.legacySlug === slug)
}
