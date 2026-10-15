# Wording edits

## Pages for review

- Current: https://hopeonesource.github.io/hope1source.org/
- Preview: https://hopeonesource.github.io/hope1source.org/v3/
- Repository: https://github.com/hopeonesource/hope1source.org
- Third preview: implemented in `preview-v4/`, running locally at http://127.0.0.1:5175/v4/. The GitHub Pages path `/hope1source.org/v4/` will become available after review and merge; it is not published yet.

## Workflow

Record each wording change with the page, exact old text, exact new text, and status. Preserve wording the user supplies; identify assistant-drafted wording as proposed. Clarify ambiguous targets before applying.

The user said **apply them in realtime**. Apply wording edits immediately to the local third preview and keep this log current. Work on branch `codex/third-preview-copy` and open a pull request for review. Do not change layout or design; do not merge or publish automatically.

The separate third preview started from v3 as its structural base. The wording and subsequent user-requested visual, navigation, and responsive changes are recorded below. The current site and v3 source are unchanged. Separate preview setup consists of `preview-v4/vite.config.js`, `scripts/build-v4.mjs`, the package scripts, and README instructions. Review this setup separately from the wording diff.

**Scope update, October 14, 2026:** Later requests authorize the visual corrections recorded below and responsive, navigation, and search improvements across **all v4 pages**. The user selected service providers as the priority audience, a partnership conversation as the primary action, and SMS check-ins, emergency alerts, service feedback, and outreach tools as the offerings to describe. The intended future production domain is **hope1source.org**. Publication still follows PR review; this work does not merge, publish, or change DNS. T101–T105 supersede the original text-only constraint only for this authorized work.

**Copy-preservation correction (T106):** Mobile, navigation, and crawling work must preserve the user's edited wording. Do not replace existing headings, descriptions, or button labels with marketing rewrites. Keep expressly requested new material separate, and retain the page-specific scope of earlier edits.

## Third version — applied locally

The user asked to combine the best of the current and preview versions, with a common thread across all case studies. T01, T02, T03, T14, T21, T22, T23, T24, T24A, T27, T28, T29, T30, T46, T47, T48, T49, T50, T51, T52, T53, T54, T55, T56, T57, T58, T59, T60, T61, T62, T63, T64, T65, T66, T67, T68, T69, T70, T71, T72, T73, T74, T75, T76, T77, T78, T79, T80, T81, T82, T83, T84, T85, T86, T87, T88, T89, T90, T91, T92, T93, T94, T95, T96, T97, T98, T99, and T100 contain user-supplied or user-requested changes. The remaining entries originated as assistant proposals. All listed entries have now been applied to the separate local third preview following the request to apply in realtime.

**Common thread:** Help people get support. Help partners serve them better.

Keep the current version's warmth and emphasis on trust, follow-up, and showing what changed. Keep v3's concrete explanations, voluntary participation, and distinctions between study findings, a past partnership, and partner-reported results.

**Current third-preview homepage:**

> **Earn Trust.**
>
> We train and equip those who serve others for lasting change.

The homepage headline and supporting line are user-supplied and supersede the earlier assistant drafts in T01 and T02. The homepage case-study heading is **Partner Success** (T03).

## Visual adjustments

### V01 — Veterans Affairs graph

- Status: **Applied locally — user-requested visual correction; awaiting PR review**
- Pages: Homepage, `/case-studies`, and `/case-studies/veterans-affairs-national-homeless-programs`
- Asset: `public/photos/va-access-improvement.svg`

Replaced the cropped raster figure with a resolution-independent chart based on the published study’s Table 2. It compares year two with year three for access to food, counseling, PTSD care, and hypertension/prediabetes care. Percentages are rounded and calculated as 100% minus the published reported-barrier rate. The graph uses `contain` inside the shared 3:2 card frame so all labels and bars remain visible on mobile and desktop. Updated the image description to match the graph.

### V02 — DC hypothermia alert image

- Status: **Applied locally — user-requested visual correction; awaiting PR review**
- Pages: Homepage, `/case-studies`, and `/case-studies/emergency-shelter-alerts`
- Approved source image: `IMG_8351.JPG`
- Assets: `public/photos/hypothermia-alert-people.svg`, `public/photos/dc-homeless.jpg`, and `public/photos/dc-hypothermia-messages-focus.jpg`

Replaced the unrelated VA team photo with a responsive graphic using the historic Washington, D.C. street photo published on the Hope1Source housing page. The revised composition shows the complete street photo instead of using a full-bleed crop. It pairs that photo with the approved historic message screenshot from `IMG_8351.JPG`, changes every visible `HOS` prefix to `H1S`, keeps the hypothermia message sharp, and leaves the surrounding resource messages visible with a soft blur. The graphic states that DC reported hypothermia deaths fell 78% during the supported period and uses a 3:2 safe composition with `contain` for mobile and desktop.

### V03 — Dreamers & Achievers growth image

- Status: **Applied locally — user-requested visual correction; awaiting PR review**
- Pages: Homepage, `/case-studies`, and `/case-studies/dreamers-and-achievers`
- Approved source images: `IMG_2524.JPG`, `IMG_0500.JPG`, and `IMG_0639.jpg`
- Assets: `public/photos/dorothy-adams-enhanced.jpg` and `public/photos/dreamers-growth.svg`

Used the clearest approved portrait and full before-and-after graphic from `IMG_0500.JPG`, with `IMG_0639.jpg` as a supporting identity reference. Enhanced Dorothy Adams’s portrait at 900×900 while preserving her identity, then placed it as a small inset in a resolution-independent 3:2 growth graphic. The graphic focuses on the three results used in the story: funding from $110,000 to $560,000, feedback from 25 to 2,268 people, and experience follow-ups from 60 to 1,400 people. Exact labels and values are vector text for clarity on mobile and desktop.

### V04 — Case-study card alignment

- Status: **Applied locally — user-requested formatting review; awaiting PR review**
- Page: Homepage
- Files: `preview-v4/src/content/stories.js` and `preview-v4/src/styles/site.css`

Standardized all three Partner Success image frames at 3:2 while keeping each image set to `contain`, so the cards align without cropping their evidence graphics. Anchored every “Read the story” button to the bottom of its card so different copy lengths no longer create uneven action rows.

**Existing three-step section:** Reach. Listen. Follow up.

**Case-study writing pattern:** the need → H1S's role → what was reported. Use existing text fields and paragraphs. The studies share a purpose; do not imply they all used the same product or intervention.

| Case study | Proposed card headline | What readers should understand |
| --- | --- | --- |
| Veterans Affairs | Make care easier to reach. | Research and feedback helped service teams identify barriers. |
| DC Human Services | Put shelter information within reach. | Alerts shared information people could use during extreme weather. |
| Dreamers & Achievers | Stay connected through follow-up. | Continued contact and feedback helped a partner understand needs. |

## Evidence used for the proposal

- Compared both source trees at repository commit 3ddcb76. Old text below is from v3; replacements were applied only in the third-preview copy. Shared content may appear on several pages; those existing uses should remain consistent.
- Read the [published VA study](https://pubmed.ncbi.nlm.nih.gov/33929036/) through NCBI's public publication API, including the full article (PMC8904198). It used actors portraying veterans in 30 cities, reports to centers, and corrective plans. Tim Underwood is listed as a coauthor affiliated with HopeOneSource. The draft says H1S contributed to the research, without crediting its software as the intervention. The replacement quotation is a short excerpt from the study conclusion; the current v3 paraphrase incorrectly reads like a direct quote.
- Read the [original DC case study](https://hope1source.org/case-studies/hopeonesource-saves-lives-with-emergency-shelter-alerts), which describes H1S alerts containing shelter and transportation information. The draft preserves v3's historical framing. The existing ICH quotation is retained as attributed historical context, not as a causal claim for H1S. Its original underlying counts were not independently revalidated in this pass.
- Read the [original Dreamers & Achievers case study](https://hope1source.org/case-studies/dreamers-and-achievers), which describes continued contact and unmet needs. The numeric before/after figures are retained from both repository versions as partner-reported. The user-requested funding claim rounds the listed change from $110,000 to $560,000 to 5x during the supported period.

## Applied replacements

### T01 — /

- Status: **Applied locally — user-supplied wording; awaiting PR review**
- Existing source: `preview-v3/src/pages/Home.jsx`
- Target: corresponding field in `preview-v4/src/`
- Field: Hero h1 and SEO title

**Old text**

Earn trust.

**New text**

Earn Trust.

### T02 — /

- Status: **Applied locally — user-supplied wording; awaiting PR review**
- Existing source: `preview-v3/src/pages/Home.jsx`
- Target: corresponding field in `preview-v4/src/`
- Field: Hero lede and SEO description

**Old text**

H1S Check-ins makes it easier to connect resources to people who need them. Dignity first. People opt in.

**New text**

We train and equip those who serve others for lasting change.

### T03 — /

- Status: **Applied locally — user-supplied wording; awaiting PR review**
- Existing source: `preview-v3/src/pages/Home.jsx`
- Target: corresponding field in `preview-v4/src/`
- Field: Stories section heading

**Old text**

Stories

**New text**

Partner Success

### T04 — /

- Status: **Applied locally — assistant draft; awaiting PR review**
- Existing source: `preview-v3/src/pages/Home.jsx`
- Target: corresponding field in `preview-v4/src/`
- Field: Existing how-it-works heading

**Old text**

Alert. Check in. Connect.

**New text**

Reach. Listen. Follow up.

### T05 — /

- Status: **Applied locally — assistant draft; awaiting PR review**
- Existing source: `preview-v3/src/pages/Home.jsx`
- Target: corresponding field in `preview-v4/src/`
- Field: Existing how-it-works introduction

**Old text**

No app. Any phone. People choose to take part.

**New text**

Earn trust by listening, following up, and showing what changed. People choose to take part.

### T06 — / and /outreach-tools

- Status: **Applied locally — assistant draft; awaiting PR review**
- Existing source: `preview-v3/src/components/HowItWorks.jsx`
- Target: corresponding field in `preview-v4/src/`
- Field: howSteps title: Alert

**Old text**

Alert

**New text**

Reach

### T07 — / and /outreach-tools

- Status: **Applied locally — assistant draft; awaiting PR review**
- Existing source: `preview-v3/src/components/HowItWorks.jsx`
- Target: corresponding field in `preview-v4/src/`
- Field: howSteps text: Alert

**Old text**

Send an opt-in text with the resource and where to go.

**New text**

Share useful information with people who choose to hear from you.

### T08 — / and /outreach-tools

- Status: **Applied locally — assistant draft; awaiting PR review**
- Existing source: `preview-v3/src/components/HowItWorks.jsx`
- Target: corresponding field in `preview-v4/src/`
- Field: howSteps title: Check in

**Old text**

Check in

**New text**

Listen

### T09 — / and /outreach-tools

- Status: **Applied locally — assistant draft; awaiting PR review**
- Existing source: `preview-v3/src/components/HowItWorks.jsx`
- Target: corresponding field in `preview-v4/src/`
- Field: howSteps text: Check in

**Old text**

People reply or scan a QR code, privately.

**New text**

Give people a private way to share their needs and experiences.

### T10 — / and /outreach-tools

- Status: **Applied locally — assistant draft; awaiting PR review**
- Existing source: `preview-v3/src/components/HowItWorks.jsx`
- Target: corresponding field in `preview-v4/src/`
- Field: howSteps title: Connect

**Old text**

Connect

**New text**

Follow up

### T11 — / and /outreach-tools

- Status: **Applied locally — assistant draft; awaiting PR review**
- Existing source: `preview-v3/src/components/HowItWorks.jsx`
- Target: corresponding field in `preview-v4/src/`
- Field: howSteps text: Connect

**Old text**

Your team follows up. The report shows what changed.

**New text**

Use what you learn to follow up and understand what changed.

### T12 — Home cards, /case-studies, /case-studies/veterans-affairs-national-homeless-programs, and other existing uses of this story

- Status: **Applied locally — assistant draft; awaiting PR review**
- Existing source: `preview-v3/src/content/stories.js`
- Target: corresponding field in `preview-v4/src/`
- Field: veterans-affairs-national-homeless-programs.outcome

**Old text**

Remove barriers to care

**New text**

Understand barriers

### T13 — Home cards, /case-studies, /case-studies/veterans-affairs-national-homeless-programs, and other existing uses of this story

- Status: **Applied locally — assistant draft; awaiting PR review**
- Existing source: `preview-v3/src/content/stories.js`
- Target: corresponding field in `preview-v4/src/`
- Field: veterans-affairs-national-homeless-programs.cardTitle

**Old text**

Some veterans weren't getting help. We helped find out why.

**New text**

Make care easier to reach.

### T14 — Home cards, /case-studies, /case-studies/veterans-affairs-national-homeless-programs, and other existing uses of this story

- Status: **Applied locally — user-supplied wording; “three” normalized to “three-year”; awaiting PR review**
- Existing source: `preview-v3/src/content/stories.js`
- Target: corresponding field in `preview-v4/src/`
- Field: veterans-affairs-national-homeless-programs.card

**Old text**

Across 30 cities, access to food, counseling, and care rose from about 7 in 10 to as high as 9 in 10. Published in the Journal of Public Health.

**New text**

H1S co-authored a three-year quality improvement initiative with the VA in 30 communities that helped identify and improve access to care.

### T15 — Home cards, /case-studies, /case-studies/veterans-affairs-national-homeless-programs, and other existing uses of this story

- Status: **Applied locally — assistant draft; awaiting PR review**
- Existing source: `preview-v3/src/content/stories.js`
- Target: corresponding field in `preview-v4/src/`
- Field: veterans-affairs-national-homeless-programs.summary

**Old text**

We provided the technical assistance to help measure what matters. Across 30 cities, access to food, counseling, and care rose from about 7 in 10 to as high as 9 in 10.

**New text**

H1S contributed to research on barriers faced by veterans experiencing homelessness. In 30 cities, trained actors tested access to services, and teams received feedback to improve how they responded.

### T16 — Home cards, /case-studies, /case-studies/veterans-affairs-national-homeless-programs, and other existing uses of this story

- Status: **Applied locally — assistant draft; awaiting PR review**
- Existing source: `preview-v3/src/content/stories.js`
- Target: corresponding field in `preview-v4/src/`
- Field: veterans-affairs-national-homeless-programs.quote

**Old text**

Access to food, counseling, PTSD treatment, and hypertension and prediabetes care increased from 68 to 77 percent in year 2 to 83 to 97 percent in year 3. A gap in access for Black veterans closed.

**New text**

The ‘unannounced standardized veteran’ (USV) can identify previously unrecognized barriers to needed services and care.

### T17 — Home cards, /case-studies, /case-studies/veterans-affairs-national-homeless-programs, and other existing uses of this story

- Status: **Applied locally — assistant draft; awaiting PR review**
- Existing source: `preview-v3/src/content/stories.js`
- Target: corresponding field in `preview-v4/src/`
- Field: veterans-affairs-national-homeless-programs.quoteAttribution

**Old text**

Journal of Public Health

**New text**

Weiner and colleagues, Journal of Public Health, 2022

### T18 — Home cards, /case-studies, /case-studies/veterans-affairs-national-homeless-programs, and other existing uses of this story

- Status: **Applied locally — assistant draft; awaiting PR review**
- Existing source: `preview-v3/src/content/stories.js`
- Target: corresponding field in `preview-v4/src/`
- Field: veterans-affairs-national-homeless-programs.body

**Old text**

1. We provided the technical assistance to help measure what matters.

2. The study followed access to food, counseling, PTSD treatment, and health screening across 30 cities. Read the paper before citing the percentages in a grant or a briefing.

**New text**

1. Finding a service does not always mean being able to use it. From 2017 to 2019, actors portraying veterans experiencing homelessness visited service centers in 30 cities. Teams received reports and were asked to address barriers. H1S contributed to the research.

2. During these visits, access to the services studied increased from 68–77% in year two to 83–97% in year three. The study shows how systematic feedback can help teams improve access. These results come from the published study of service encounters, not a measure of every veteran’s experience.

### T19 — Home cards, /case-studies, /case-studies/emergency-shelter-alerts, and other existing uses of this story

- Status: **Applied locally — assistant draft; awaiting PR review**
- Existing source: `preview-v3/src/content/stories.js`
- Target: corresponding field in `preview-v4/src/`
- Field: emergency-shelter-alerts.outcome

**Old text**

Prevent cold-weather harm

**New text**

Share useful information

### T20 — Home cards, /case-studies, /case-studies/emergency-shelter-alerts, and other existing uses of this story

- Status: **Applied locally — assistant draft; awaiting PR review**
- Existing source: `preview-v3/src/content/stories.js`
- Target: corresponding field in `preview-v4/src/`
- Field: emergency-shelter-alerts.cardTitle

**Old text**

Alerts that point to a warm place tonight.

**New text**

Put shelter information within reach.

### T21 — Home cards, /case-studies, /case-studies/emergency-shelter-alerts, and other existing uses of this story

- Status: **Applied locally — user-requested result; causal wording qualified to match the available evidence; awaiting PR review**
- Existing source: `preview-v3/src/content/stories.js`
- Target: corresponding field in `preview-v4/src/`
- Field: emergency-shelter-alerts.card

**Old text**

DC Human Services adopted the alert approach we brought. Alerts carried shelter and ride information in extreme weather.

**New text**

DC Human Services used H1S to share emergency shelter and transportation information with residents.

### T22 — Home cards, /case-studies, /case-studies/emergency-shelter-alerts, and other existing uses of this story

- Status: **Applied locally — user-requested result; causal wording qualified to match the available evidence; awaiting PR review**
- Existing source: `preview-v3/src/content/stories.js`
- Target: corresponding field in `preview-v4/src/`
- Field: emergency-shelter-alerts.summary

**Old text**

Nearly 80% fewer hypothermia deaths in Washington, D.C., from the change in the Interagency Council on Homelessness quote on this page.

**New text**

DC Human Services used H1S emergency alerts to connect residents with shelter and transportation information during extreme weather. DC reported that hypothermia deaths fell 78% during the supported period.

### T23 — Home cards, /case-studies, /case-studies/emergency-shelter-alerts, and other existing uses of this story

- Status: **Applied locally — user-requested wording; awaiting PR review**
- Existing source: `preview-v3/src/content/stories.js`
- Target: corresponding field in `preview-v4/src/`
- Field: emergency-shelter-alerts.quoteAttribution

**Old text**

DC Interagency Council on Homelessness

**New text**

DC Interagency Council on Homelessness, published H1S housing case study

### T24 — Home cards, /case-studies, /case-studies/emergency-shelter-alerts, and other existing uses of this story

- Status: **Applied locally — user-requested wording; awaiting PR review**
- Existing source: `preview-v3/src/content/stories.js`
- Target: corresponding field in `preview-v4/src/`
- Field: emergency-shelter-alerts.body

**Old text**

1. DC Human Services adopted the alert approach we brought. During the coldest and warmest months, alerts carried shelter and ride information for highly vulnerable residents.

2. That partnership is in the past. For a live alert, use DC Human Services and the city’s own channels. This page is not a live alert feed.

**New text**

1. During extreme weather, people need to know where shelter is available and how to get there. DC Human Services used H1S to send emergency alerts with shelter and transportation information to hundreds of residents.

2. The alerts put practical details on residents’ phones so people could see where shelter was available and how to get there.

3. DC reported that hypothermia deaths fell 78% during the supported period.

### T24A — /case-studies/emergency-shelter-alerts

- Status: **Applied locally — user-requested wording; awaiting PR review**
- Existing source: `preview-v4/src/content/stories.js`
- Target: `preview-v4/src/content/stories.js`
- Field: emergency-shelter-alerts.quote

**Old text**

Hypothermia deaths in DC have consistently decreased over the past 5 years, down from 9 in 2015 to 2 in 2019.

**New text**

DC reported that hypothermia deaths fell 78% during the supported period.

### T25 — Home cards, /case-studies, /case-studies/dreamers-and-achievers, and other existing uses of this story

- Status: **Applied locally — assistant draft; awaiting PR review**
- Existing source: `preview-v3/src/content/stories.js`
- Target: corresponding field in `preview-v4/src/`
- Field: dreamers-and-achievers.outcome

**Old text**

Show what changed

**New text**

Keep listening

### T26 — Home cards, /case-studies, /case-studies/dreamers-and-achievers, and other existing uses of this story

- Status: **Applied locally — assistant draft; awaiting PR review**
- Existing source: `preview-v3/src/content/stories.js`
- Target: corresponding field in `preview-v4/src/`
- Field: dreamers-and-achievers.cardTitle

**Old text**

A small nonprofit that could finally show its reach.

**New text**

Stay connected through follow-up.

### T27 — Home cards, /case-studies, /case-studies/dreamers-and-achievers, and other existing uses of this story

- Status: **Applied locally — user-requested wording; awaiting PR review**
- Existing source: `preview-v3/src/content/stories.js`
- Target: corresponding field in `preview-v4/src/`
- Field: dreamers-and-achievers.card

**Old text**

Follow-ups grew from 60 to 1,400 people, as reported by the partner.

**New text**

Dreamers & Achievers used H1S to stay in touch and gather feedback. The partner reported follow-ups growing from 60 to 1,400 people and funding growing 5x during the supported period.

### T28 — Home cards, /case-studies, /case-studies/dreamers-and-achievers, and other existing uses of this story

- Status: **Applied locally — user-requested wording; awaiting PR review**
- Existing source: `preview-v3/src/content/stories.js`
- Target: corresponding field in `preview-v4/src/`
- Field: dreamers-and-achievers.summary

**Old text**

Dorothy Adams, Executive Director of Dreamers & Achievers, reported follow-ups growing from 60 to 1,400 people after joining the H1S network.

**New text**

Dreamers & Achievers used H1S to stay connected with its community and learn about unmet needs. The partner reported follow-ups growing from 60 to 1,400 people and funding growing 5x during the supported period.

### T29 — Home cards, /case-studies, /case-studies/dreamers-and-achievers, and other existing uses of this story

- Status: **Applied locally — user-requested wording; awaiting PR review**
- Existing source: `preview-v3/src/content/stories.js`
- Target: corresponding field in `preview-v4/src/`
- Field: dreamers-and-achievers.metricsCaption

**Old text**

Partner-reported, before and after joining the H1S network.

**New text**

Partner-reported figures from the supported period.

### T30 — Home cards, /case-studies, /case-studies/dreamers-and-achievers, and other existing uses of this story

- Status: **Applied locally — user-requested wording; awaiting PR review**
- Existing source: `preview-v3/src/content/stories.js`
- Target: corresponding field in `preview-v4/src/`
- Field: dreamers-and-achievers.body

**Old text**

1. Dreamers & Achievers used Hope1Source to stay in touch with clients, funders, and volunteers.

2. The figures are what the partner reported after joining the H1S network.

**New text**

1. For a community organization, knowing how people are doing takes continued contact. Dreamers & Achievers used H1S to stay in touch with clients, funders, and volunteers and to learn about health and unmet needs.

2. During the supported period, the partner reported follow-ups growing from 60 to 1,400 people, feedback collected from 25 to 2,268 people, and funding growing 5x.

### T31 — /case-studies

- Status: **Applied locally — assistant draft; awaiting PR review**
- Existing source: `preview-v3/src/pages/CaseStudies.jsx`
- Target: corresponding field in `preview-v4/src/`
- Field: Hero title

**Old text**

What changed.

**New text**

Making support easier to reach.

### T32 — /case-studies

- Status: **Applied locally — assistant draft; awaiting PR review**
- Existing source: `preview-v3/src/pages/CaseStudies.jsx`
- Target: corresponding field in `preview-v4/src/`
- Field: Hero lede

**Old text**

A published study, a past weather-alert partnership, and results a partner reported.

**New text**

Different partners. One purpose: make support easier to reach and help organizations improve how they serve people. These stories explain the need, our role, and what was reported.

### T33 — /case-studies

- Status: **Applied locally — assistant draft; awaiting PR review**
- Existing source: `preview-v3/src/pages/CaseStudies.jsx`
- Target: corresponding field in `preview-v4/src/`
- Field: SEO description

**Old text**

A published study, a past weather-alert partnership, and partner-reported results from Dreamers and Achievers.

**New text**

How Hope1Source has helped partners understand barriers, share useful information, and stay connected through follow-up.

### T34 — /about

- Status: **Applied locally — assistant draft; awaiting PR review**
- Existing source: `preview-v3/src/pages/About.jsx`
- Target: corresponding field in `preview-v4/src/`
- Field: Hero title

**Old text**

Earn trust.

**New text**

Help people get support.

### T35 — /about

- Status: **Applied locally — assistant draft; awaiting PR review**
- Existing source: `preview-v3/src/pages/About.jsx`
- Target: corresponding field in `preview-v4/src/`
- Field: Hero lede

**Old text**

H1S Check-ins makes it easier to connect resources to people who need them. Dignity first. People opt in.

**New text**

Hope1Source helps organizations reach people, understand their needs, and improve services. H1S Check-ins supports that work through outreach, private feedback, and follow-up.

### T36 — /about

- Status: **Applied locally — assistant draft; awaiting PR review**
- Existing source: `preview-v3/src/pages/About.jsx`
- Target: corresponding field in `preview-v4/src/`
- Field: SEO description

**Old text**

H1S Check-ins makes it easier to connect resources to people who need them. People opt in. Hope with Love is the 501(c)(3).

**New text**

Hope1Source helps organizations reach people, understand needs, and improve services. Hope with Love is the 501(c)(3) behind the work.

### T37 — /about

- Status: **Applied locally — assistant draft; awaiting PR review**
- Existing source: `preview-v3/src/pages/About.jsx`
- Target: corresponding field in `preview-v4/src/`
- Field: First Mission paragraph

**Old text**

Hope1Source provides tools that make it easier to connect resources to people who need them. Partners send opt-in alerts and check-ins, hear back privately, and follow up.

**New text**

Our purpose is to help people get support and help partners serve them better. We bring together outreach tools, feedback, and practical support for partner teams. People choose to take part, and partners use what they learn to follow up and improve services.

### T38 — /learn-more

- Status: **Applied locally — assistant draft; awaiting PR review**
- Existing source: `preview-v3/src/pages/LearnMore.jsx`
- Target: corresponding field in `preview-v4/src/`
- Field: Hero title

**Old text**

How we support.

**New text**

Reach people. Follow through.

### T39 — /learn-more

- Status: **Applied locally — assistant draft; awaiting PR review**
- Existing source: `preview-v3/src/pages/LearnMore.jsx`
- Target: corresponding field in `preview-v4/src/`
- Field: Hero lede

**Old text**

Tools that make it easier to connect resources to people who need them. People opt in.

**New text**

Outreach, feedback, and practical support help partners understand needs and improve services. People choose to take part.

### T40 — /outreach-tools

- Status: **Applied locally — assistant draft; awaiting PR review**
- Existing source: `preview-v3/src/pages/OutreachTools.jsx`
- Target: corresponding field in `preview-v4/src/`
- Field: Hero h1 and SEO title

**Old text**

Alert. Check in. Connect.

**New text**

Reach. Listen. Follow up.

### T41 — /outreach-tools

- Status: **Applied locally — assistant draft; awaiting PR review**
- Existing source: `preview-v3/src/pages/OutreachTools.jsx`
- Target: corresponding field in `preview-v4/src/`
- Field: Hero lede

**Old text**

No app. Any phone. People choose to take part.

**New text**

H1S Check-ins helps partners share useful information, hear back privately, and follow up with people who choose to take part.

### T42 — /outreach-tools

- Status: **Applied locally — assistant draft; awaiting PR review**
- Existing source: `preview-v3/src/pages/OutreachTools.jsx`
- Target: corresponding field in `preview-v4/src/`
- Field: SEO description

**Old text**

Opt-in alerts, a private check-in, and a follow-up. No app. Any phone. People choose to take part.

**New text**

Share useful information, hear back privately, and follow up. H1S Check-ins helps partners stay connected with people who choose to take part.

### T43 — / and /for-providers

- Status: **Applied locally — assistant draft; awaiting PR review**
- Existing source: `preview-v3/src/content/roles.js`
- Target: corresponding field in `preview-v4/src/`
- Field: providers.lede

**Old text**

Tell people where help is tonight, hear back when it did not work, and show what changed.

**New text**

Share useful information, hear what people need, and follow up on what comes next.

### T44 — / and /for-backers

- Status: **Applied locally — assistant draft; awaiting PR review**
- Existing source: `preview-v3/src/content/roles.js`
- Target: corresponding field in `preview-v4/src/`
- Field: backers.lede

**Old text**

Partners reach people before harm happens, and report what changed. Gifts go to Hope with Love through Every.org.

**New text**

Help partners reach people, improve services, and report what changed. Gifts go to Hope with Love through Every.org.

### T45 — All third-preview pages

- Status: **Applied locally — assistant draft; awaiting PR review**
- Existing source: `preview-v3/src/components/Layout.jsx`
- Target: corresponding field in `preview-v4/src/`
- Field: Preview banner

**Old text**

Preview of recommended version.

**New text**

Third preview: a shared story across our work.

### T46 — /

- Status: **Applied locally — user-supplied wording; awaiting PR review**
- Existing source: `preview-v3/src/pages/Home.jsx`
- Target: homepage hero label in `preview-v4/src/pages/Home.jsx`
- Field: Hero kicker

**Old text**

Hope1Source Check-ins

**New text**

HOPE1SOURCE (H1S) CHECK-INS

### T47 — / and /readiness

- Status: **Applied locally — user-supplied wording; awaiting PR review**
- Existing source: `preview-v4/src/pages/Home.jsx` and `preview-v4/src/pages/Readiness.jsx`
- Target: corresponding fields in `preview-v4/src/`
- Field: Homepage readiness question and Readiness page hero title

**Old text**

Can you reach everyone tonight?

**New text**

Can you reach those you aim to serve?

### T48 — /, /readiness, /public-agencies, and service links

- Status: **Applied locally — user-supplied wording; awaiting PR review**
- Existing source: `preview-v4/src/`
- Target: corresponding fields in `preview-v4/src/`
- Field: Readiness call-to-action labels

**Old text**

Plan your winter alerts

**New text**

Plan your outreach

### T49 — /readiness

- Status: **Applied locally — user-supplied wording; awaiting PR review**
- Existing source: `preview-v4/src/pages/Readiness.jsx`
- Target: `preview-v4/src/pages/Readiness.jsx`
- Field: Page introduction

**Old text**

Send opt-in alerts with shelter, ride, and service updates to people other channels miss. Used for cold, heat, storms, and closures.

**New text**

Send opt-in alerts to check-in with people other channels miss. Used for cold, heat, storms, closures, and collecting any real-time need.

### T50 — /readiness

- Status: **Applied locally — user-supplied wording; awaiting PR review**
- Existing source: `preview-v4/src/pages/Readiness.jsx`
- Target: `preview-v4/src/pages/Readiness.jsx`
- Field: Before step and first readiness-checklist item

**Old text**

Build the opt-in list at your front desk.

Build the opt-in list at the front desk, with people who choose to take part.

**New text**

Build the opt-in list with a simple tap or scan.

### T51 — /readiness

- Status: **Applied locally — user-supplied wording; awaiting PR review**
- Existing source: `preview-v4/src/pages/Readiness.jsx`
- Target: `preview-v4/src/pages/Readiness.jsx`
- Field: During step

**Old text**

Alert, then check in.

**New text**

Check-ins should be easy and fun.

### T52 — /readiness

- Status: **Applied locally — user-supplied wording; awaiting PR review**
- Existing source: `preview-v4/src/pages/Readiness.jsx`
- Target: `preview-v4/src/pages/Readiness.jsx`
- Field: After step and fifth readiness-checklist item

**Old text**

Follow up and report what changed.

Afterward, follow up and report what changed.

**New text**

Follow-up with valuable support and report what changed.

### T53 — /readiness and /public-agencies

- Status: **Applied locally — user-requested wording; awaiting PR review**
- Existing source: `preview-v4/src/pages/Readiness.jsx` and `preview-v4/src/pages/PublicAgencies.jsx`
- Target: corresponding fields in `preview-v4/src/`
- Field: DC Human Services summary

**Old text**

That use is in the past.

**New text**

DC Human Services now uses its own solution, modeled on the H1S approach.

### T54 — /, /readiness, /public-agencies, and service links

- Status: **Applied locally — user-supplied wording; awaiting PR review**
- Existing source: `preview-v4/src/`
- Target: corresponding fields in `preview-v4/src/`
- Field: Service-planning call-to-action labels

**Old text**

Plan your outreach

**New text**

Plan your service

### T55 — /public-agencies

- Status: **Applied locally — user-supplied wording; awaiting PR review**
- Existing source: `preview-v4/src/pages/PublicAgencies.jsx`
- Target: `preview-v4/src/pages/PublicAgencies.jsx`
- Field: How trust works

**Old text**

Partners own and control access to their data.

**New text**

Partners own and control their check-in.

### T56 — /public-agencies

- Status: **Applied locally — user-supplied wording; awaiting PR review**
- Existing source: `preview-v4/src/pages/PublicAgencies.jsx`
- Target: `preview-v4/src/pages/PublicAgencies.jsx`
- Field: How trust works

**Old text**

Partners own and control their check-in.

**New text**

Partners own and control their experience.

### T57 — /public-agencies

- Status: **Applied locally — user-supplied wording; awaiting PR review**
- Existing source: `preview-v4/src/pages/PublicAgencies.jsx`
- Target: `preview-v4/src/pages/PublicAgencies.jsx`
- Field: How trust works

**Old text**

No app is needed.

**New text**

No app is needed. Only a free or discounted service you provide.

### T58 — /public-agencies

- Status: **Applied locally — user-requested order; awaiting PR review**
- Existing source: `preview-v4/src/pages/PublicAgencies.jsx`
- Target: `preview-v4/src/pages/PublicAgencies.jsx`
- Field: How trust works

**Old order**

1. No app is needed. Only a free or discounted service you provide.
2. A sensitive service is never named in a text.

**New order**

1. A sensitive service is never named in a text.
2. No app is needed. Only a free or discounted service you provide.

### T59 — /public-agencies

- Status: **Applied locally — user-requested removal; awaiting PR review**
- Existing source: `preview-v4/src/pages/PublicAgencies.jsx`
- Target: `preview-v4/src/pages/PublicAgencies.jsx`
- Field: How trust works

**Removed text**

No app is needed. Only a free or discounted service you provide.

### T60 — /public-agencies

- Status: **Applied locally — user-supplied wording; awaiting PR review**
- Existing source: `preview-v4/src/pages/PublicAgencies.jsx`
- Target: `preview-v4/src/pages/PublicAgencies.jsx`
- Field: How trust works

**New text**

No app is needed; only a free or discounted service.

### T61 — /public-agencies

- Status: **Applied locally — user-requested removal; awaiting PR review**
- Existing source: `preview-v4/src/pages/PublicAgencies.jsx`
- Target: `preview-v4/src/pages/PublicAgencies.jsx`
- Field: How trust works

**Removed text**

No app is needed; only a free or discounted service.

### T62 — /public-agencies

- Status: **Applied locally — user-requested undo; awaiting PR review**
- Existing source: `preview-v4/src/pages/PublicAgencies.jsx`
- Target: `preview-v4/src/pages/PublicAgencies.jsx`
- Field: How trust works

**Restored text**

No app is needed; only a free or discounted service.

### T63 — /public-agencies

- Status: **Applied locally — user-requested removal; awaiting PR review**
- Existing source: `preview-v4/src/pages/PublicAgencies.jsx`
- Target: `preview-v4/src/pages/PublicAgencies.jsx`
- Field: How trust works

**Removed text**

A sensitive service is never named in a text.

### T64 — /public-agencies

- Status: **Applied locally — user-supplied wording; awaiting PR review**
- Existing source: `preview-v4/src/pages/PublicAgencies.jsx`
- Target: `preview-v4/src/pages/PublicAgencies.jsx`
- Field: How trust works

**Old text**

People opt in.

**New text**

People opt-in interested in free and discounted services.

### T65 — /public-agencies

- Status: **Applied locally — user-supplied wording; awaiting PR review**
- Existing source: `preview-v4/src/pages/PublicAgencies.jsx`
- Target: `preview-v4/src/pages/PublicAgencies.jsx`
- Field: How trust works

**Old text**

No app is needed; only a free or discounted service.

**New text**

No app is needed; only a cell phone.

### T66 — /public-agencies

- Status: **Applied locally — user-requested order; awaiting PR review**
- Existing source: `preview-v4/src/pages/PublicAgencies.jsx`
- Target: `preview-v4/src/pages/PublicAgencies.jsx`
- Field: How trust works

**Old order**

1. Partners own and control their experience.
2. No app is needed; only a cell phone.

**New order**

1. No app is needed; only a cell phone.
2. Partners own and control their experience.

### T67 — /public-agencies

- Status: **Applied locally — user-supplied wording; awaiting PR review**
- Existing source: `preview-v4/src/pages/PublicAgencies.jsx`
- Target: `preview-v4/src/pages/PublicAgencies.jsx`
- Field: How trust works

**Old text**

No app is needed; only a cell phone.

**New text**

No app is needed; only a cell phone for text messages to earn rewards.

### T68 — /public-agencies

- Status: **Applied locally — user-supplied wording; awaiting PR review**
- Existing source: `preview-v4/src/pages/PublicAgencies.jsx`
- Target: `preview-v4/src/pages/PublicAgencies.jsx`
- Field: How trust works

**Old text**

People opt-in interested in free and discounted services.

**New text**

People opt-in interested in free and discounted services or games.

### T69 — /public-agencies

- Status: **Applied locally — user-supplied wording; awaiting PR review**
- Existing source: `preview-v4/src/pages/PublicAgencies.jsx`
- Target: `preview-v4/src/pages/PublicAgencies.jsx`
- Field: How trust works

**Old text**

Partners own and control their experience.

**New text**

Partners own and control their digital experience and service delivery.

### T70 — /public-agencies

- Status: **Applied locally — user-supplied wording; awaiting PR review**
- Existing source: `preview-v4/src/pages/PublicAgencies.jsx`
- Target: `preview-v4/src/pages/PublicAgencies.jsx`
- Field: Proof you can forward

**Old text**

Across 30 cities

**New text**

Across 30 communities

### T71 — Shared footer

- Status: **Applied locally — user-requested standardization; awaiting PR review**
- Existing source: `preview-v4/src/styles/site.css`
- Target: `preview-v4/src/styles/site.css`
- Field: Footer-link alignment

**Old behavior**

The first link, “About,” sat higher because each following footer link received an extra top margin.

**New behavior**

All footer links share the same vertical alignment.

### T72 — /public-agencies

- Status: **Applied locally — user-supplied wording; awaiting PR review**
- Existing source: `preview-v4/src/pages/PublicAgencies.jsx`
- Target: `preview-v4/src/pages/PublicAgencies.jsx`
- Field: Page introduction

**Old text**

Opt-in alerts, check-ins, and follow-up for human services, emergency management, public health, VA, and housing teams.

**New text**

Opt-in check-in text messages for health, housing, human, and emergency services.

### T73 — /public-agencies

- Status: **Applied locally — user-supplied wording; awaiting PR review**
- Existing source: `preview-v4/src/pages/PublicAgencies.jsx`
- Target: `preview-v4/src/pages/PublicAgencies.jsx`
- Field: Proof you can forward

**Old text**

Published in the Journal of Public Health.

**New text**

Published in the Oxford Journal of Public Health. Although unpublished, Google Review ratings increased during this three year period.

### T74 — /public-agencies

- Status: **Applied locally — user-supplied wording; awaiting PR review**
- Existing source: `preview-v4/src/pages/PublicAgencies.jsx`
- Target: `preview-v4/src/pages/PublicAgencies.jsx`
- Field: How trust works

**Old text**

No app is needed; only a cell phone for text messages to earn rewards.

**New text**

No app is needed; only a cell phone with text messages to earn rewards.

### T75 — /public-agencies

- Status: **Applied locally — user-requested formatting; awaiting PR review**
- Existing source: `preview-v4/src/pages/PublicAgencies.jsx`
- Target: `preview-v4/src/pages/PublicAgencies.jsx`
- Field: How trust works

**Old format**

Bulleted list

**New format**

Numbered list

### T76 — /public-agencies

- Status: **Applied locally — user-requested formatting reversal; awaiting PR review**
- Existing source: `preview-v4/src/pages/PublicAgencies.jsx`
- Target: `preview-v4/src/pages/PublicAgencies.jsx`
- Field: How trust works

**Removed format**

Numbered list

**Restored format**

Bulleted list

### T77 — /public-agencies

- Status: **Applied locally — user-requested removal; awaiting PR review**
- Existing source: `preview-v4/src/pages/PublicAgencies.jsx`
- Target: `preview-v4/src/pages/PublicAgencies.jsx`
- Field: Facts for procurement

**Removed text at the top of the section**

H1S Check-ins (dba Hope With Love, Inc.). SAM.gov UEI HYQWP496LMJ8. CAGE 77K55. EIN 27-5461163. 501(c)(3).

The formatted procurement fields and footer legal text remain.

### T78 — /public-agencies

- Status: **Applied locally — user-supplied wording; awaiting PR review**
- Existing source: `preview-v4/src/pages/PublicAgencies.jsx`
- Target: `preview-v4/src/pages/PublicAgencies.jsx`
- Field: Facts for procurement introduction

**New text**

We have Prime and Sub experience and can provide past performance recommendations upon request.

### T79 — /public-agencies

- Status: **Applied locally — user-supplied wording; awaiting PR review**
- Existing source: `preview-v4/src/pages/PublicAgencies.jsx`
- Target: `preview-v4/src/pages/PublicAgencies.jsx`
- Field: Facts for procurement introduction

**Old text**

We have Prime and Sub experience and can provide past performance recommendations upon request.

**New text**

We provide past performance recommendations upon request.

### T80 — /public-agencies

- Status: **Applied locally — user-supplied wording; awaiting PR review**
- Existing source: `preview-v4/src/pages/PublicAgencies.jsx`
- Target: `preview-v4/src/pages/PublicAgencies.jsx`
- Field: Proof you can forward

**Old text**

We provided the technical assistance to help measure what matters. Across 30 communities, access to food, counseling, and care rose from about 7 in 10 to as high as 9 in 10. Published in the Oxford Journal of Public Health. Although unpublished, Google Review ratings increased during this three year period.

**New text**

We provided the technical assistance to help measure what matters. Across 30 communities, access to food, counseling, and care rose from about 7 in 10 to as high as 9 in 10 (Oxford Journal of Public Health, 2019). Google Review ratings increased during this three year period and 97% reported funding growth.

### T81 — /public-agencies

- Status: **Applied locally — user-supplied wording; awaiting PR review**
- Existing source: `preview-v4/src/pages/PublicAgencies.jsx`
- Target: `preview-v4/src/pages/PublicAgencies.jsx`
- Field: Proof you can forward

**Old text**

Google Review ratings increased during this three year period and 97% reported funding growth.

**New text**

Google Review ratings increased during this three year period and 97% have had steady funding growth (OPM & Google Gemini, 2026).

### T82 — /public-agencies

- Status: **Applied locally — user-supplied wording with typo corrected; awaiting PR review**
- Existing source: `preview-v4/src/pages/PublicAgencies.jsx`
- Target: `preview-v4/src/pages/PublicAgencies.jsx`
- Field: Proof you can forward

**Old text**

Google Review ratings increased during this three year period and 97% have had steady funding growth (OPM & Google Gemini, 2026).

**New text**

Google Review ratings increased during this three year period and 97% have reported steady funding growth (OPM & Google Gemini, 2026).

### T83 — /public-agencies

- Status: **Applied locally — user-supplied wording; awaiting PR review**
- Existing source: `preview-v4/src/pages/PublicAgencies.jsx`
- Target: `preview-v4/src/pages/PublicAgencies.jsx`
- Field: Proof you can forward

**Old text**

Across 30 communities, access to food, counseling, and care rose from about 7 in 10 to as high as 9 in 10 (Oxford Journal of Public Health, 2019).

**New text**

Across 30 communities, access to food, counseling, and care rose from about 70% to as high as 90% (Oxford Journal of Public Health, 2019).

### T84 — /public-agencies

- Status: **Applied locally — user-supplied wording; awaiting PR review**
- Existing source: `preview-v4/src/pages/PublicAgencies.jsx`
- Target: `preview-v4/src/pages/PublicAgencies.jsx`
- Field: Proof you can forward

**Old text**

Across 30 communities, access to food, counseling, and care rose from about 70% to as high as 90% (Oxford Journal of Public Health, 2019).

**New text**

Across 30 communities, access to food, counseling, and care increased from about 70% to as high as 90% (Oxford Journal of Public Health, 2019).

### T85 — /case-studies/emergency-shelter-alerts

- Status: **Applied locally — user-supplied wording; awaiting PR review**
- Existing source: `preview-v4/src/content/stories.js`
- Target: `preview-v4/src/content/stories.js`
- Field: emergency-shelter-alerts.quoteAttribution

**Old text**

DC Interagency Council on Homelessness, published H1S housing case study

**New text**

DC Office of the Chief Medical Examiner, published H1S housing case study

### T86 — /

- Status: **Applied locally — user-supplied wording; awaiting PR review**
- Existing source: `preview-v4/src/pages/Home.jsx`
- Target: `preview-v4/src/pages/Home.jsx`
- Field: Homepage readiness question

**Old text**

Can you reach those you aim to serve?

**New text**

Can you remain connected to those you aim to serve?

### T87 — /

- Status: **Applied locally — user-supplied wording; awaiting PR review**
- Existing source: `preview-v4/src/content/roles.js`
- Target: `preview-v4/src/content/roles.js`
- Field: Homepage first participation-card label

**Old text**

If you run a program

**New text**

If you provide a service

### T88 — /case-studies/emergency-shelter-alerts

- Status: **Applied locally — user-supplied wording; awaiting PR review**
- Existing source: `preview-v4/src/content/stories.js`
- Target: `preview-v4/src/content/stories.js`
- Field: emergency-shelter-alerts.body

**Old text**

During extreme weather, people need to know where shelter is available and how to get there. DC Human Services used H1S to send emergency alerts with shelter and transportation information to hundreds of residents.

**New text**

During extreme weather, people need to know where shelter is available and how to get there. DC Human Services used H1S to send emergency alerts with shelter and transportation information to thousands of residents.

### T89 — /case-studies/emergency-shelter-alerts

- Status: **Applied locally — user-supplied wording; awaiting PR review**
- Existing source: `preview-v4/src/content/stories.js`
- Target: `preview-v4/src/content/stories.js`
- Field: emergency-shelter-alerts.body

**Added text**

It also measured their real-time needs and made it easier to meet them.

### T90 — /case-studies/emergency-shelter-alerts

- Status: **Applied locally — user-requested placement; awaiting PR review**
- Existing source: `preview-v4/src/content/stories.js`
- Target: `preview-v4/src/content/stories.js`
- Field: emergency-shelter-alerts.body

**Old order**

During extreme weather, people need to know where shelter is available and how to get there. DC Human Services used H1S to send emergency alerts with shelter and transportation information to thousands of residents.

It also measured their real-time needs and made it easier to meet them.

**New order and paragraph breaks**

During extreme weather, people need to know where shelter is available and how to get there.

It also measured their real-time needs and made it easier to meet them.

DC Human Services used H1S to send emergency alerts with shelter and transportation information to thousands of residents.

### T91 — /case-studies/emergency-shelter-alerts

- Status: **Applied locally — user-requested placement; awaiting PR review**
- Existing source: `preview-v4/src/content/stories.js`
- Target: `preview-v4/src/content/stories.js`
- Field: emergency-shelter-alerts.body

**New placement**

The alerts put practical details on residents’ phones so people could see where shelter was available and how to get there.

It also measured their real-time needs and made it easier to meet them.

DC reported that hypothermia deaths fell 78% during the supported period.

### T92 — /access-points

- Status: **Applied locally — user-supplied wording with grammar clarified; awaiting PR review**
- Existing source: `preview-v4/src/pages/AccessPoints.jsx`
- Target: `preview-v4/src/pages/AccessPoints.jsx`
- Field: Hero introduction and SEO description

**Old text**

A QR code or kiosk lets visitors ask for help privately.

**New text**

A QR code, NFC tap, or kiosk lets visitors ask for help privately.

### T93 — /access-points

- Status: **Applied locally — user-supplied wording with grammar corrected; awaiting PR review**
- Existing source: `preview-v4/src/pages/AccessPoints.jsx`
- Target: `preview-v4/src/pages/AccessPoints.jsx`
- Field: Hero introduction and SEO description

**Added text**

Everything is built with the latest AWS security to maintain trust.

### T94 — /access-points

- Status: **Applied locally — user-requested removal; awaiting PR review**
- Existing source: `preview-v4/src/pages/AccessPoints.jsx`
- Target: `preview-v4/src/pages/AccessPoints.jsx`
- Field: Hero introduction

**Removed text**

, and no personal data collected for its own sake

### T95 — /access-points

- Status: **Applied locally — user-requested wording and placement; awaiting PR review**
- Existing source: `preview-v4/src/pages/AccessPoints.jsx`
- Target: `preview-v4/src/pages/AccessPoints.jsx`
- Field: Hero introduction

**Removed from the introduction**

No app.

**Added on a separate line below**

No app or internet needed.

### T96 — /access-points

- Status: **Applied locally — user-supplied wording with grammar and flow tightened; awaiting PR review**
- Existing source: `preview-v4/src/pages/AccessPoints.jsx`
- Target: `preview-v4/src/pages/AccessPoints.jsx`
- Field: Alert. Check in. Connect. partner requirements

**User wording**

All partners must provide free or discounted services. Their check-in data is owned by them and can be filtered, sorted, or deleted at anytime by them.

**Published wording**

All partners must provide free or discounted services. They own their check-in data and can filter, sort, or delete it at any time.

### T97 — /access-points

- Status: **Applied locally — user-requested removal of selected line; awaiting PR review**
- Existing source: `preview-v4/src/pages/AccessPoints.jsx`
- Target: `preview-v4/src/pages/AccessPoints.jsx`
- Field: Alert. Check in. Connect. supporting text

**Removed text**

No religious affiliation is required to give, volunteer, or be served by a partner. The private note stays with the team.

### T98 — /access-points

- Status: **Applied locally — user-supplied wording; awaiting PR review**
- Existing source: `preview-v4/src/pages/AccessPoints.jsx`
- Target: `preview-v4/src/pages/AccessPoints.jsx`
- Field: Process section heading

**Old text**

Alert. Check in. Connect.

**New text**

Reach. Listen. Repeat.

### T99 — /access-points

- Status: **Applied locally — user-supplied wording; awaiting PR review**
- Existing source: `preview-v4/src/pages/AccessPoints.jsx`
- Target: `preview-v4/src/pages/AccessPoints.jsx`
- Field: Third process-step label

**Old text**

Follow up

**New text**

Repeat

### T100 — /access-points

- Status: **Applied locally — user-supplied wording with verb form corrected; awaiting PR review**
- Existing source: `preview-v4/src/pages/AccessPoints.jsx`
- Target: `preview-v4/src/pages/AccessPoints.jsx`
- Field: Third process-step description

**Old text**

Use what you learn to follow up and understand what changed.

**New text**

Use what you learn to understand what changed and follow up.

### T101 — All v4 pages: navigation and return to top

- Status: **Applied locally — user-requested behavior; awaiting PR review**
- Ordinary page links now open the destination at the top, including same-page route links and history navigation. Explicit section links still open their intended section.
- Added a labeled, keyboard-accessible up-arrow after scrolling. It returns to the top and honors reduced-motion preferences.
- Added route focus handling, mobile-menu Escape behavior, viewport-aware menu sizing, and mobile navigation when JavaScript is unavailable.

### T102 — All v4 pages: responsive presentation

- Status: **Applied locally — user-requested mobile and desktop review; awaiting PR review**
- Fixed the narrow-screen Dreamers & Achievers results table and unnecessary double page gutters.
- Made long button labels and content wrap, constrained form controls, stacked team profiles on narrow phones, and enlarged navigation/footer tap targets.
- Preserved image proportions, supplied known image dimensions, and deferred offscreen photos. Case-study graphics remain fully contained.
- Removed the scroll-driven card fade so text and graphics remain fully readable.
- Arranged the four outreach offerings in two columns on larger screens and one on phones.

### T103 — Service-provider discovery and partnership conversations

- Status: **Partially superseded by T106 — four new service offerings retained; replacements of existing copy and calls to action reverted**
- Pages: `/`, `/outreach-tools`, `/learn-more`, `/for-providers`
- Preserved the approved homepage headline, mission, and case-study results.

**Homepage actions**

- Old: `Take part` → New: `Request a partnership conversation` (opens `/contact`).
- Old: `Contact partnerships` → New: `Explore outreach tools` (opens `/outreach-tools`).

**Homepage service summary**

- Old: `Earn trust by listening, following up, and showing what changed. People choose to take part.`
- New: `Our outreach tools help service providers use SMS check-ins, emergency alerts, and service feedback to stay connected and follow up. People choose to take part.`

**Outreach Tools lead**

- Old: `H1S Check-ins helps partners share useful information, hear back privately, and follow up with people who choose to take part.`
- New: `H1S Check-ins gives service providers outreach tools for opt-in SMS check-ins, emergency alerts, and service feedback. Stay connected, understand needs, and follow up.`

**Added offering descriptions**

- SMS check-ins: `Invite people to opt in to text messages, share what they need, and stay connected with your team.`
- Emergency alerts: `Share shelter, transportation, and service updates during cold, heat, storms, and closures.`
- Service feedback: `Hear what worked, understand unmet needs, and use what you learn to improve services.`
- Outreach tools: `Use a QR code, NFC tap, or kiosk at places people already visit to help them opt in and ask for support.`

Each offering links to an existing relevant v4 page. Outreach Tools and partner-support/provider calls to action also lead to a partnership conversation. No service coverage area was inferred.

### T104 — All v4 pages: readable HTML and search metadata

- Status: **Applied locally — user-requested search/crawler optimization; awaiting PR review**
- Replaced JavaScript-only HTML shells with 29 fully rendered pages, 12 static alias redirects, and a useful noindex 404.
- Added unique initial-response titles/descriptions, canonical URLs, social metadata, and organization/website/page structured data that stay current after navigation.
- Marketing metadata names the relevant services and audiences without adding ratings, geographic coverage, or unsupported outcomes.
- Review previews remain `noindex, follow`; an explicitly configured future production build targets `https://hope1source.org/`, enables indexing, and includes its canonical sitemap. The preview banner disappears for that release configuration.
- Added generated-output validation to the normal build. Existing current-site and v3 source/configuration are untouched by this task.
- T106 restores the earlier approved title and description strings. The static HTML, metadata rendering, sitemap, and crawler improvements remain.

### T105 — Existing evidence and publication review

- Status: **Review notes recorded; no new outcome claims added**
- Added a direct `Read the published study` link beside the veterans case-study link on `/public-agencies`.
- The existing Oxford reference uses 2019, but the linked paper was published online in 2021 and in a 2022 journal issue. The approved visible wording is preserved pending review; the discrepancy is documented.
- Recorded source-linking needs for the existing Google-review/funding, hypothermia, and AWS-security wording in `docs/SEARCH_READINESS.md`. These notes are for review and were not added as on-page disclaimers.
- The user confirmed evidence is already on the site; no new studies, certifications, testimonials, or outcomes were invented.

### T106 — Restore edited copy and audit earlier instructions

- Status: **Applied locally — user-requested correction; awaiting PR review**
- Baseline: the saved editing state at `a6c3927`, immediately before the mobile/search work.
- Reviewed the latest effective versions of T01–T100, including later corrections and removals.

**Restored existing visible copy**

- Home: `Request a partnership conversation` → `Take part`; `Explore outreach tools` → `Contact partnerships`, with their earlier destinations. Restored `Earn trust by listening, following up, and showing what changed. People choose to take part.`
- Outreach Tools: restored `H1S Check-ins helps partners share useful information, hear back privately, and follow up with people who choose to take part.` Restored the `Request a live demo` / `Pick a way to take part` actions and the `See it on a phone` closing section.
- Learn More: restored `Outreach, check-ins, and a note to partnerships.` and `Pick a way to take part`.
- Providers: restored `Talk with partnerships` and its existing email action.
- Restored earlier page titles/descriptions on Home, Access Points, Funders, Get Involved, Learn More, Outreach Tools, Public Agencies, Readiness, and Providers. This includes `Earn Trust.` and the approved homepage mission in search metadata, and the QR/NFC/AWS description on Access Points.

**Retained requested additions and technical improvements**

- Kept the four service offerings in their separate Outreach Tools section. Changed its new `Plan your alerts` link to the approved shared wording, `Plan your service`.
- Kept the direct study link, mobile/desktop fixes, back-to-top arrows, page-opening behavior, static HTML, and crawler metadata infrastructure.

**Corrected a stale duplicate**

- Housing quote: `Hypothermia deaths in DC have consistently decreased over the past 5 years, down from 9 in 2015 to 2 in 2019.` → `DC reported that hypothermia deaths fell 78% during the supported period.`
- Housing attribution: `DC Interagency Council on Homelessness, as published on the Hope1Source housing page.` → `DC Office of the Chief Medical Examiner, published H1S housing case study`.

Confirmed the final Public Agencies wording and bullet order, 70%/90%, 97% funding statement, 78% hypothermia result, 5x funding result, thousands of residents, and the placement of `It also measured...` remain present. `Reach. Listen. Repeat.` and the updated third step remain on Access Points as requested; page-specific changes were not silently spread elsewhere.

Verification: full build and prerender checks pass; 44 approved/restored phrases confirmed across eight rendered pages. Home and Learn More now differ from the pre-search baseline only in image-loading attributes; Readiness, Access Points, Providers, Funders, and Get Involved page copy matches that baseline.

### T107 — /team introduction

- Status: **Applied locally — assistant-drafted replacement requested by the user; awaiting PR review**
- Target: `preview-v4/src/pages/Team.jsx`
- Field: Supporting line below `The people behind the work.`, with matching page-description metadata.

**Old text**

Names, roles, and photos from the public team page.

**New text**

We bring together service, technology, and lived experience to help those who serve others create lasting change.

The headline, roster, roles, biographies, and photos are unchanged.

### T108 — /team

- Status: **Applied locally — user-requested removal; awaiting PR review**
- Target: `preview-v4/src/content/team.js`
- Removed Greg Marmo’s team entry, including name, role, biography, and displayed photo.

### T109 — /team — Harry Kim

- Status: **Applied locally — user-requested wording; awaiting PR review**
- Target: `preview-v4/src/content/team.js`
- Old text: `Harry is a commander in the United States Navy Civil Engineer Corps`
- New text: `Harry is a recently retired commander from the United States Navy Civil Engineer Corps`
- The rest of his biography is unchanged.

### T110 — /team — Sarah Lindsay

- Status: **Applied locally — user-requested wording; awaiting PR review**
- Target: `preview-v4/src/content/team.js`
- Old text: `and led one of the`
- New text: `and has led one of the`
- The rest of her biography is unchanged.

### T111 — /team — Sarah Lindsay placement

- Status: **Superseded by T112 — assistant misinterpreted which person to move**
- Target: `preview-v4/src/content/team.js`
- Moved Sarah Lindsay directly beneath Frank Adames, preserving her updated biography, role, and photo.

### T112 — /team — Correct team placement

- Status: **Applied locally — user clarification; awaiting PR review**
- Target: `preview-v4/src/content/team.js`
- Returned Sarah Lindsay to her prior position between Chris Teitzel and Harry Kim.
- Moved Veronica Thornton directly beneath Frank Adames.
- Preserved all biographies, roles, and photos.

### T113 — /team — Veronica Thornton placement

- Status: **Applied locally — user-requested reorder; awaiting PR review**
- Target: `preview-v4/src/content/team.js`
- Moved Veronica Thornton directly beneath Nick Hanson, superseding her placement in T112.
- Preserved all biographies, roles, photos, and the relative order of everyone else.

### T114 — /team — Hugo Diaz placement

- Status: **Applied locally — user-requested reorder; awaiting PR review**
- Target: `preview-v4/src/content/team.js`
- Moved Hugo Diaz directly above Tamecia McKenzie.
- Preserved all biographies, roles, photos, and the relative order of everyone else.

## Resolved placement

### C01 — Partner Success

- Status: **Applied locally in T03 following the request to apply in realtime**
- Exact new text: **Partner Success**
- Page / field: homepage case-study section heading; exact old text: `Stories`.
- Supersedes the assistant's `Support in practice.` proposal in T03. Navigation labels are unchanged.
