/**
 * Thin Ad Grants landers. Mission voice. No product pricing.
 * They do not invent a live directory of openings.
 */
export const services = [
  {
    slug: 'food-meals',
    title: 'Food and meals',
    description:
      'A mission page for food help through the Hope1Source partner network. No live pantry list and no product pricing.',
    lede: 'If you need a meal or groceries, start with a local provider. This page explains how food partners share information. It is not a list of who is open tonight.',
    forSomeone:
      'Pantry hours, meal sites, and eligibility change faster than a marketing page can. Ask a library, a 211 specialist, or a provider you already trust. Partners in this network have used text alerts so a change in hours reaches people who opted in.',
    forPartner:
      'Food banks, meal programs, and campus or congregate kitchens can use check-ins and alerts to confirm a visit, learn what did not work, and tell funders what happened — without posting a private complaint in public.',
  },
  {
    slug: 'medical',
    title: 'Medical care',
    description:
      'A mission page about medical and health-access partners in the Hope1Source network. Not a clinic finder and not a pricing page.',
    lede: 'Health access on this network runs through providers who already know their patients and clients. This page is not a clinic directory and it cannot book care.',
    forSomeone:
      'For an emergency, call 911. For a nurse line or local clinic, use 211 or your insurer’s number. Do not send personal health details through the contact form on this website.',
    forPartner:
      'Clinics and health-access programs can coordinate outreach here. The draft terms forbid messages that tie a named person to a HIPAA-sensitive service, such as a specific treatment appointment. Read the FAQ on security before you describe compliance in public.',
  },
  {
    slug: 'mental-health',
    title: 'Mental health',
    description:
      'A mission page for mental-health partners and for people looking for care. Includes 988. Not a pricing page.',
    lede: 'Behavioral health partners use the network to reach people they serve with timely, relevant information. If you are in crisis, you do not need an account on this site.',
    forSomeone:
      'If you are thinking about suicide or are in emotional crisis in the United States, call or text 988. You can also call 911 if you or someone else is in immediate danger. This website is not a crisis service and does not read messages in real time.',
    forPartner:
      'Counseling programs, peer teams, and public behavioral-health agencies can talk with partnerships about outreach that respects privacy. Do not put a diagnosis or a treatment detail in a text that could expose someone.',
    crisis: true,
  },
  {
    slug: 'housing',
    title: 'Housing',
    description:
      'A mission page about housing and shelter alerts through Hope1Source partners. Not a live bed list and not a pricing page.',
    lede: 'Housing help on this network has included emergency shelter alerts sent by public agencies to people who opted in. This page is not a list of open beds.',
    forSomeone:
      'Shelter rules and hypothermia alerts change by the hour. In Washington, D.C., use DC Department of Human Services and the city’s own alert channels for the current status. Elsewhere, call 211 or your local continuum of care.',
    forPartner:
      'Agencies that already message clients about shelter, prevention, or housing navigation can use the same private check-in pattern: the friction stays with the team, and only the public service information goes out.',
  },
  {
    slug: 'education-career',
    title: 'Education and career',
    description:
      'A mission page for job training, education, and career partners in the Hope1Source network.',
    lede: 'Training programs, libraries, and workforce teams use outreach so people hear about a class, a hiring event, or a deadline they are actually eligible for.',
    forSomeone:
      'Ask a workforce center, a library, or 211 what is open near you. This site does not take job applications and does not rank employers.',
    forPartner:
      'Career and education providers can check people in at a workshop or a hiring event, learn what blocked them, and follow up without turning the sign-in sheet into a public post.',
  },
  {
    slug: 'justice-legal',
    title: 'Justice and legal aid',
    description:
      'A mission page for legal aid and justice partners. Not legal advice and not a pricing page.',
    lede: 'Legal-aid and reentry partners have been part of the public story of this network. Nothing on this page is legal advice, and this site cannot take a case.',
    forSomeone:
      'If you need a lawyer, contact a legal-aid program, a public defender, or your local bar association’s referral line. If you are in danger, call 911.',
    forPartner:
      'Legal and reentry teams can use private check-ins for reminders that do not expose someone’s case in a public channel. Sponsorship and partnership questions go to the partnerships inbox.',
  },
  {
    slug: 'faith-based',
    title: 'Faith-based support',
    description:
      'A mission page for congregations and faith-based partners in the Hope1Source network.',
    lede: 'Congregations and faith-based charities are one kind of partner. Hope With Love does not require a religious affiliation to give, volunteer, or be served by a partner.',
    forSomeone:
      'A congregation’s meal, shelter night, or benevolence fund is run by that congregation. Confirm time and place with them directly. This page does not endorse a denomination.',
    forPartner:
      'Faith communities that already host services can check people in with the same privacy rule as any other provider: private friction, public praise, and no extra personal data collected for its own sake.',
  },
  {
    slug: 'other-services',
    title: 'Other community services',
    description:
      'A mission page for community services that do not fit a single Hope1Source category.',
    lede: 'Some partners do work that crosses food, health, housing, and work. If you are not sure where a need fits, start with a local referral line or with the partnerships team.',
    forSomeone:
      'Call 211 for a broad referral in much of the United States. Bring this page only as an explanation of the network, not as proof that a specific program has space today.',
    forPartner:
      'If your program does not match a category above, write partnerships with what you operate and who you already serve. A human reads that mailbox. This form does not create an account.',
  },
]

export function serviceBySlug(slug) {
  return services.find((service) => service.slug === slug)
}
