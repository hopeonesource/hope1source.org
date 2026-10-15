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

### T115 — /team — Tamecia McKenzie placement

- Status: **Applied locally — user-requested reorder; awaiting PR review**
- Target: `preview-v4/src/content/team.js`
- Moved Tamecia McKenzie directly above Justin Robinson.
- Preserved all biographies, roles, photos, and the relative order of everyone else.

### T116 — /team — Tim Underwood biography

- Status: **Applied locally — user-requested wording; awaiting PR review**
- Target: `preview-v4/src/content/team.js`
- Old text: `build trust across diverse sectors, with a proven track record of service spanning from the White House to supporting those without a house.`
- New text: `build trust by solving problems across diverse sectors, with a proven track record of measuring what matters for impact from the White House to those without a house.`
- Corrected the supplied typo `timpact` to `impact`; preserved the rest of his biography.

### T117 — /team — Shorter Tim Underwood biography

- Status: **Applied locally — user-requested shortening with LinkedIn context; awaiting PR review**
- Target: `preview-v4/src/content/team.js`
- Replaced the full biography from T116 with: `Tim co-founded H1S to help service providers build trust, solve problems, and measure what matters for impact. An Air Force Reserve officer and former Presidential Management Fellow, he brings experience across diverse sectors, from the White House to those without a house.`
- Kept the user's trust, problem-solving, impact, and White House wording; retained the Air Force Reserve and Presidential Management Fellow credentials from the approved biography.
- Considered publicly indexed content from [Tim's LinkedIn profile](https://www.linkedin.com/in/timothyunderwood1/), including his emphasis on measuring impact and community service. Direct profile fetching was rate-limited; no additional credentials were inferred.
- Removed the nonprofit designation and lengthy IEEE recognition wording from this short biography. All other team content and ordering are unchanged.

### T118 — /team — Nick Hanson placement

- Status: **Applied locally — user-requested reorder; awaiting PR review**
- Target: `preview-v4/src/content/team.js`
- Moved Nick Hanson directly above Justin Robinson.
- Preserved all biographies, roles, photos, and the relative order of everyone else.

### T119 — /team — Tim Underwood founding and credentials

- Status: **Applied locally — user-requested wording; awaiting PR review**
- Target: `preview-v4/src/content/team.js`
- Changed `Tim co-founded H1S` to `Tim founded H1S`.
- Added `Eagle Scout, Honor Medal Recipient` immediately after `Air Force Reserve officer`.
- Preserved the rest of his biography and all team ordering.

### T120 — /team — Tim Underwood capitalization

- Status: **Applied locally — user-requested wording; awaiting PR review**
- Target: `preview-v4/src/content/team.js`
- Changed `Honor Medal Recipient` to `Honor Medal recipient`.

### T121 — /team — Shorter Hugo Diaz biography

- Status: **Applied locally — user-requested shortening; awaiting PR review**
- Target: `preview-v4/src/content/team.js`
- Replaced Hugo's long biography with: `Hugo is H1S’s Economic Research Analyst and holds a Ph.D. in Economics. He uses data to measure nonprofit impact, guide planning, and help organizations use resources effectively.`
- Kept his role, degree, and practical research focus while matching the length and plain language of other team biographies.
- All other team content and ordering are unchanged.

### T122 — v4 — Connect wording

- Status: **Applied locally — user-requested wording; awaiting PR review**
- Replaced the standalone `Reach.` with `Connect.` in the Home, Outreach Tools, and Access Points headings, including the Outreach Tools page-title metadata.
- Changed the shared first-step label from `Reach` to `Connect`, updating Home, Outreach Tools, Readiness, and Access Points together.
- Preserved ordinary uses of `reach` within sentences, all other copy, and layout. Current-site and v3 content are unchanged.

### T123 — v4 — Follow-up step wording

- Status: **Applied locally — user-requested wording; awaiting PR review**
- Target: `preview-v4/src/components/HowItWorks.jsx`
- Old text: `Use what you learn to follow up and understand what changed.`
- New text: `Use what you learn to follow up and measure what matters.`
- Updates the shared step on Home, Outreach Tools, and Readiness. Preserves the separately edited Access Points repeat step.

### T124 — /outreach-tools — Phone caption and messaging channels

- Status: **Applied locally — user-requested wording and caption; awaiting PR review**
- Target: `preview-v4/src/pages/OutreachTools.jsx`
- Changed `Facebook` to `social media` in the messaging-channel note.
- Removed the adjacent `Hope1Source Check-ins. Hope with Love is the 501(c)(3).` text from that note.
- Added a caption directly beneath the phone photo: `Real H1S Check-ins make it fun and easy to connect with health, housing, and community services through familiar text messages.`
- Reviewed the image and updated its alt text to describe the two phones and the types of service messages shown. Kept the existing image size and responsive styling.

### T125 — v4 — Footer registration line

- Status: **Applied locally — user-requested formatting; awaiting PR review**
- Target: `preview-v4/src/components/Layout.jsx`
- Placed `SAM.gov UEI...` on a new line immediately beneath `H1S Check-ins (dba Hope With Love, Inc.).` in the shared footer.
- Used a single line break within the same paragraph, with no blank line or added paragraph spacing. Preserved all wording and identifiers.

### T126 — v4 — Footer registration typography

- Status: **Applied locally — user-requested formatting; awaiting PR review**
- Targets: `preview-v4/src/components/Layout.jsx`, `preview-v4/src/styles/site.css`
- Made the `SAM.gov UEI...` registration line smaller (`0.875rem`) and italic throughout v4.
- Preserved the single line break, compact spacing, and wording. The H1S Check-ins line keeps its existing typography.

### T127 — v4 — Footer SAM.gov punctuation

- Status: **Applied locally — user-requested wording; awaiting PR review**
- Target: `preview-v4/src/components/Layout.jsx`
- Changed the shared footer registration line from `SAM.gov UEI...` to `SAM.gov: UEI...`, preserving its smaller italic style and line break.

### T128 — v4 — Corporate partner footer label

- Status: **Applied locally — user-requested clarification; awaiting PR review**
- Target: `preview-v4/src/components/Layout.jsx`
- Added `For corporate partners —` before the shared footer registration details to identify the intended audience.
- Preserved `SAM.gov:`, all identifiers, smaller italic styling, and the line break beneath H1S Check-ins.

### T129 — /access-points — Clearer wording on all four cards

- Status: **Applied locally — user-approved replacement; awaiting PR review**
- Target: `preview-v4/src/pages/AccessPoints.jsx`
- Old text: `People come to you first. You do not have to collect a file to point them toward help.`
- New text: `People come to you first. Help them connect with support through a simple check-in.`
- Applied to Congregations, Libraries, Community centers, and Food sites through their shared card text.

### T130 — /get-involved — Business and corporate partnership option

- Status: **Applied locally — user-requested business option; awaiting PR review**
- Target: `preview-v4/src/pages/GetInvolved.jsx`
- Added an `If you run a business` card after the access-point option using the existing card style.
- New text: `Restaurants and other businesses can offer free or discounted services, gather feedback, and stay connected through H1S Check-ins.`
- Added `Discuss a business partnership` linking to Contact, plus the existing email action with subject `Corporate and business partnership`.
- Included business participation in the introductory sentence and restaurants/businesses in the page description. Preserved all existing options and the page heading.

### T131 — /press — Direct source links and source-based dates

- **Request:** Make the press items link to the actual sources and match their publication dates.
- **Applied:** All 10 releases and 5 coverage titles now link directly to the publisher, official announcement, or archived original. Replaced copied migration dates with original datelines, added source labels, and retained month/year precision where an exact date was not established. The hypothermia release retains the date printed on its original HTML/PDF with a matching label; its conflicting year references are documented.
- **Sources:** [Press source audit](docs/PRESS_SOURCES.md) records each destination, date evidence, and remaining precision limits. Existing titles, page wording, layout, and design are retained.
- **Files:** `preview-v4/src/content/press.js`, `preview-v4/src/pages/Press.jsx`, `docs/PRESS_SOURCES.md`.
- **Validation:** All 15 titles render as external links with safe new-tab attributes and semantic dates. Mobile (390px) and desktop (1440px) previews have no horizontal overflow. v4 build and prerender checks pass (29 pages, 12 aliases, 447 internal links). Publication remains pending PR review.

### T132 — Sitewide — Recreate linked legacy H1S articles within v4

- **Request:** Replace links to old H1S website pages with mobile- and desktop-friendly replicas inside the new website.
- **Applied:** Recreated all ten H1S press releases as internal `/press/...` articles with their original substantive prose, quotes, historical dates, and available source images. The press index and article-body H1S links now remain within v4. Independent publisher coverage remains external. Removed the preview banner's old-site escape link.
- **Navigation and presentation:** Added ten original `/article/...` aliases, seven `/news/...` aliases, and the historical participation-form alias. Articles use readable responsive typography, uncropped locally served responsive images, back links, the existing top-of-page navigation behavior, and the shared back-to-top button. Generated v4-specific host redirects preserve individual article destinations.
- **Content fidelity:** Frank's reproduced article uses year-only 2022; the convening uses its original March 7, 2018 H1S dateline. Full source and omission details are in `docs/PRESS_SOURCES.md`. Previously approved copy elsewhere is retained.
- **Validation:** All ten articles checked at 320px, 390px, and 1440px without horizontal overflow or broken images. Build and static checks pass for 39 pages, 30 aliases, and 616 internal links, including full article prose and a guard against outbound old-site links. Publication remains pending PR review.

### T133 — v4 — Fill content gaps from published social stories

- **Request:** Review Hope with Love's Facebook content in the already signed-in Safari browser and create website content that fills gaps.
- **Applied:** Added a Second Harvest Asia case study from Charles McJilton's August 20, 2024 testimonial, linked from the case-study library, Food and Meals, Learn More, and Press. Added a dated Hurricane Helene field account on Readiness and a corresponding Press link. Added a concise explanation of practical partner support and human-led automation on Learn More, plus Frank V. Adames's March 6, 2025 Northern Virginia 40 Under 40 recognition linked to the official organizer announcement.
- **Preserved:** Existing approved copy, design, and the three featured homepage stories. The new food-bank story is added to the full story library without expanding the homepage. Current site and v3 are untouched.
- **Sources:** `docs/SOCIAL_CONTENT_SOURCES.md` records direct post links, publication dates, the source-image testimonial, and the distinction between reported experience, field observations, and future plans. No social-media posts or account settings were changed.
- **Validation:** Seven affected/reference pages checked at 320px, 390px, and 1440px with no horizontal overflow, broken images, or page errors; the Press-to-Readiness anchor lands and receives focus correctly. Mobile and desktop screenshots reviewed. Static checks pass for 40 pages, 30 aliases, and 636 internal links in preview; the future root-domain configuration also passes with 726 internal links. The final local build is restored to the noindex preview. Publication remains pending PR review.

### T134 — v4 — Make Media easy to find

- **Request:** Add Media to the footer on every page and a direct link on Contact.
- **Applied:** Added `Media` after `Contact` in the shared footer and a `Media` link beside the email action at the top of Contact. Both open the existing `/press` page using the site's internal navigation and existing responsive styles.
- **Scope:** Header navigation and existing page wording are preserved. Publication remains pending PR review.
- **Validation:** Both links open the Press page at 320px, 390px, and 1440px with no horizontal overflow. v4 build and static checks pass for 40 pages, 30 aliases, and 677 internal links.

### T135 — /press — One dated News & Stories list with more social content

- **Request:** Combine releases, coverage, and social updates into one list ordered by date, give it an inclusive title, and add more from H1S social media.
- **Applied:** Renamed the page `News & Stories` and combined all existing entries into one newest-first list, with a small date and source-type label for each. Preserved all existing article titles, dates, and destinations. Partial dates keep their source precision.
- **Added:** Six social summaries covering partner listening, human-led automation, Dorothy Adams, gaming and technical-career opportunities, QR check-ins on drinking glasses, and DC service-access testimony. The list now contains 24 items: 10 releases, 6 coverage items, and 8 community updates. Internal case-study links also include an original-post link where relevant.
- **Sources and presentation:** Reviewed captions and source images in the user's signed-in Safari session. Direct links and scope are documented in `docs/SOCIAL_CONTENT_SOURCES.md`. Reused existing responsive list typography and limited styling changes to the requested unified presentation. Historical campaigns remain described in the past tense.
- **Scope:** Other page copy, the header, the footer's Media option, and the current site/v3 are unchanged. Publication remains pending PR review.
- **Validation:** All 18 previous entries preserved, with 24 unique items in correct descending order. One list renders at 320px, 390px, and 1440px with no horizontal overflow; source links have safe external-link attributes and the Dorothy link opens the existing case study. Mobile and desktop screenshots reviewed. Build and static checks pass for 40 pages, 30 aliases, and 678 internal links; independent review found no blocking issues.

### T136 — v4 — Short author credits

- **Request:** Format authors as the first initial of their first name, a period, and their last name.
- **Applied:** Changed personal author credits to `N. Hanson`, `R. Patel`, `E. Curran`, `E. Blakley`, and `A. Bajpai`. Shared release data updates both the News & Stories index and individual article bylines.
- **Scope:** Organization credits, names of article subjects, testimonials, team biographies, source URLs, and original-source documentation remain unchanged. Publication remains pending PR review.
- **Validation:** Verified all 10 article bylines and all 5 abbreviated personal credits in the rendered News & Stories index. v4 build, static checks, and whitespace checks pass; independent audit found no missed author credits.

### T137 — v4 — Remove the pictured footer row

- **Request:** Remove the footer content shown in the supplied screenshot.
- **Applied:** Removed the `hopeonesource.me` link, the crisis-support/988 line, the H1S Check-ins DBA line, and the corporate SAM.gov/UEI/CAGE/EIN registration line from the shared v4 footer.
- **Scope:** The footer's branding, email, navigation links (including Media), and copyright remain. This changes the footer only; current-site/v3 files and other page content are untouched. Publication remains pending PR review.
- **Validation:** Confirmed removal in all 40 prerendered pages and at 390px mobile/1440px desktop widths with no horizontal overflow. Build/static checks and independent scope review pass.

### T138 — /about — Align with earlier approved edits

- **Request:** Make About reflect the user's earlier wording changes.
- **Hero and mission:** Replaced the older assistant-drafted `Help people get support.` hero with `Earn Trust.` and `We train and equip those who serve others for lasting change.`, under `HOPE1SOURCE (H1S) CHECK-INS`. Aligned the search description and mission with the approved health, housing, human, and emergency services wording, `Connect. Listen. Repeat.`, and `Use what you learn to follow up and measure what matters.` Replaced the older public-safety/policing explanation with this approved process wording.
- **Trust:** Reused the latest Public Agencies wording for people opting in for free and discounted services or games, a cell phone with text messages to earn rewards, and partners owning and controlling their digital experience and service delivery. Removed the sensitive-service sentence. Included the approved Access Points requirement for free or discounted services and the ability to filter, sort, or delete partner-owned check-in data at any time.
- **Partners and founder:** Reused the approved restaurant/business partnership description from Get Involved. Replaced `Tim Underwood co-founded this 501(c)(3)` with `Tim Underwood founded H1S to help service providers build trust, solve problems, and measure what matters for impact.`, matching the corrected team biography.
- **Scope:** About copy and this log only. Preserved the page layout, photos, mobile expandable sections, and organization/registration information. The footer content removed in T137 remains removed. Current-site and v3 files are untouched; publication remains pending PR review.
- **Validation:** Approved phrases are present and stale wording absent at 390px and 1440px; all four mobile sections expand, with no horizontal overflow, broken images, or page errors. Screenshots reviewed. Build/static checks pass for 40 pages, 30 aliases, and 679 internal links. Independent copy review passed.

### T139 — /about — Stronger photo from H1S social media

- **Request:** Find a better About photo from the organization's social media.
- **Applied:** Replaced the older team image with the authentic H1S team photo from the September 22, 2023 Facebook post about the Equity Incubator at the Universities at Shady Grove. Selected it for clear faces, H1S branding, and relevance to work with entrepreneurs and community leaders.
- **Photo and source:** Saved Facebook's unaltered 2048 × 1536 JPEG as `public/photos/h1s-equity-incubator-2023.jpg`. Added a concise event caption, descriptive alt text, and a link to the original post. Full provenance and compared candidates are recorded in `docs/SOCIAL_CONTENT_SOURCES.md`.
- **Presentation and scope:** The full image scales proportionally at all screen sizes; removed About's former mobile crop. Kept all previously approved About wording, images on other pages, and current-site/v3 code unchanged. Publication remains pending PR review.
- **Validation:** Viewed the downloaded source and rendered mobile/desktop photo. At 320px, 390px, and 1440px, the image loads at its original aspect ratio, caption wraps, and no horizontal overflow or page errors occur. Build/static checks pass for 40 pages, 30 aliases, and 679 internal links. Independent scope and markup review passed.

### T140 — /about — Separate the SAM.gov registration line

- **Request:** Place SAM.gov and the subsequent text directly beneath H1S Check-ins, with space between them.
- **Applied:** Split the organization registration paragraph immediately before `SAM.gov`. The first paragraph remains `H1S Check-ins (dba Hope With Love, Inc.).`; the next contains the unchanged SAM.gov, UEI, CAGE, EIN, and nonprofit details, using the existing paragraph spacing.
- **Scope:** About formatting only; all wording and identifiers are preserved, and the removed footer row remains removed. Publication remains pending PR review.
- **Validation:** At 390px and 1440px, the registration paragraph sits directly below and aligns with the H1S line, with 16px spacing and no horizontal overflow. Build/static and whitespace checks pass.

### T141 — /about — Corporate sponsors in Who it’s for

- **Request:** Add corporate sponsors under `Who it’s for` with a link to `hopeonesource.me`.
- **Applied:** Added `Corporate sponsors can help more service providers connect with the people they serve.` followed by `Explore corporate sponsorship`, linking to `https://hopeonesource.me` in a new tab. Placed it after the business-partner paragraph and before funders, using the existing paragraph style.
- **Scope:** Preserved all existing wording, the photo, and the SAM.gov paragraph spacing. Publication remains pending PR review.
- **Validation:** Confirmed the visible link and exact destination at 390px and 1440px without horizontal overflow. Build/static checks, whitespace checks, and independent scope review pass.

### T142 — /about — Business partnership link wording

- **Request:** Change `Discuss a business partnership` to `Evaluate a business partnership`.
- **Applied:** Updated the link text under `Who it’s for` on About. Preserved its Contact destination, all other wording, and the existing layout. Publication remains pending PR review.
- **Validation:** Confirmed the exact replacement and unchanged `/contact` destination; whitespace check passes.

### T143 — /about — Replace the photo with a community event

- **Request:** Find another better photo for About.
- **Applied:** Replaced the Equity Incubator photo with the published Portsmouth community STEM-event group photo beside the H1S outreach van. Updated the alt text, intrinsic dimensions, caption, and original-post link to match the new image.
- **Source:** Hope with Love's May 15, 2023 Facebook post; details are recorded in `docs/SOCIAL_CONTENT_SOURCES.md`. The downloaded 1440 × 1080 JPEG is unaltered and keeps the full scene visible on phones and desktops.
- **Scope:** Preserved all approved About wording, business/corporate links, SAM.gov spacing, and existing responsive layout. Publication remains pending PR review.
- **Validation:** Source and rendered image inspected. At 390px and 1440px the new image loads at its full aspect ratio, the caption wraps, and there are no page errors or horizontal overflow. Build/static checks pass for 40 pages, 30 aliases, and 679 internal links; independent scope review passed.

### T144 — /about — Bullets for Who it’s for

- **Request:** Make the audience groups easier to distinguish with bullets.
- **Applied:** Converted the five `Who it’s for` paragraphs into a semantic bulleted list, with a little spacing between entries. Preserved every sentence, link, and the order of the groups.
- **Scope:** Only this About section's markup and list spacing changed. Publication remains pending PR review.
- **Validation:** All five bullets and original destinations render at 390px and 1440px with no horizontal overflow. Mobile screenshot reviewed; build/static and whitespace checks pass.

### T145 — Corporate sponsorship and volunteer outreach

- **Request:** Mention volunteer outreach for community connection and team building, with a linked background page naming corporate partners such as Adobe and Cisco.
- **Applied:** Updated About's corporate-sponsor bullet and linked it to the new `/corporate-sponsors` page. The page explains outreach, shared skills, and sponsorship opportunities; names Adobe, Cisco, Blackstone Federal, and Lockr; and links to documented partnership and volunteer background. Added a corporate-sponsor card to Get Involved, retained `https://hopeonesource.me` on the new page, and directed the legacy `/our-sponsors` alias to it.
- **Evidence:** Adobe is included based on the user's identification in this request, without adding an activity, date, or result. Cisco/Lockr support is documented in the existing H1S Hurricane Florence release. Blackstone's own 2017 announcements describe employee coding contributions and planned Veterans Day outreach. Details and source boundaries are in `docs/CORPORATE_PARTNERS_SOURCES.md`.
- **Scope:** Reused existing responsive page, list, and button styles. Preserved all other About wording, the photo, registration spacing, and existing Get Involved cards. No current-site/v3 code or footer changes. Publication remains pending PR review.
- **Validation:** No overflow at 320px, 390px, and 1440px on the new page; About and Get Involved checked at 390px/1440px. Confirmed company text, CTA destinations, sponsor alias, navigation to the top, and back-to-top arrow; no page errors. Mobile/desktop screenshots reviewed. Build/static checks pass for 41 pages and 30 aliases in both preview and root-release configurations; restored the preview build. Independent factual and code review passed, including HTTP 200 for Blackstone's partnership announcement.

### T146 — /about — Put community access points first

- **Request:** Place libraries after community centers and move this audience bullet to the top.
- **Applied:** The first `Who it’s for` bullet now begins `Congregations, community centers, libraries, and food sites`. Public agencies follows it; all other bullet wording, order, and links are unchanged.
- **Scope:** About copy/order only. Publication remains pending PR review.
- **Validation:** Reviewed the exact diff and unchanged access-point link; whitespace check passes.

### T147 — /about — Lead with measuring what matters

- **Request:** `Measure what matters and use what you learn to follow up.`
- **Applied:** Replaced `Use what you learn to follow up and measure what matters.` in About's Mission section with the exact requested sentence. Preserved `Connect. Listen. Repeat.` and all other content.
- **Scope:** About wording only. Publication remains pending PR review.
- **Validation:** Reviewed the exact text replacement; whitespace check passes.

### T148 — /about — How check-ins work

- **Request:** Rename the section `How check-ins work`, place `No app is needed...` directly underneath as a subhero bullet, and number the other three points.
- **Applied:** Renamed `How trust works`. Moved the unchanged no-app sentence to an emphasized lead bullet and converted the remaining three statements to a semantic numbered list, preserving their wording and relative order.
- **Scope:** About section markup and scoped lead/list styles only. All other content is preserved. Publication remains pending PR review.
- **Validation:** Confirmed the lead text, three decimal-numbered points, mobile disclosure behavior, and no horizontal overflow at 320px, 390px, and 1440px. Mobile/desktop screenshots reviewed; no page errors. v4 build/static checks, whitespace check, and independent scope review pass.

### T149 — /corporate-sponsors — Sponsor access wording

- **Request:** `listen, measure what matters, and follow-up.`
- **Applied:** Updated the Sponsor access sentence to `Help more organizations use check-ins to listen, measure what matters, and follow-up.`
- **Scope:** This sentence only; all other wording and formatting are unchanged. Publication remains pending PR review.
- **Validation:** Reviewed the exact text replacement; whitespace check passes.

### T150 — /about — Clearer check-in explanation

- **Request:** Improve the subhero treatment and flow of the points as a marketer.
- **Applied:** Replaced the bold lead bullet with the plain introduction `No app needed. Just a cell phone with text messaging.` Kept three numbered points with short, distinct labels: `People choose to connect.`, `Partners shape the experience.`, and `Partners control their data.` Rewrote the supporting sentences for easier scanning, placing rewards with opting in and the free/discounted-service requirement with the partner's role.
- **Preserved:** Voluntary participation, services or games, opportunities to earn rewards, the requirement that every partner provide free or discounted services, partner ownership/control of the digital experience and service delivery, and the ability to filter, sort, or delete partner-owned check-in data at any time.
- **Scope:** This About section and its scoped typography only; the mobile disclosure and all other approved content remain. Publication remains pending PR review.
- **Validation:** Checked semantic paragraph/numbered-list structure, all three labels, and no horizontal overflow at 320px, 390px, and 1440px. Mobile/desktop screenshots reviewed; no page errors. Build/static and whitespace checks pass. Independent copy review prompted preservation of the explicit `must provide` requirement.

### T151 — /access-points — Remove the business check-ins paragraph

- **Request:** Remove the text beginning `Business check-ins...`.
- **Applied:** Removed `Business check-ins live on the partner hub linked in the footer. Hope with Love is the 501(c)(3).` and its now-unused organization import.
- **Scope:** This Access Points paragraph only; other content and the call to action are unchanged. Publication remains pending PR review.
- **Validation:** Reviewed the exact removal and confirmed no remaining reference to the removed import; whitespace check passes.

### T152 — /access-points — Limited internet wording

- **Request:** `No app and limited internet ok.`
- **Applied:** Replaced the hero note `No app or internet needed.` with the exact requested wording.
- **Scope:** This Access Points sentence only. Publication remains pending PR review.
- **Validation:** Reviewed the exact replacement; whitespace check passes.

### T153 — /access-points — Shorten the hero note

- **Request:** `No app. Limited internet ok.`
- **Applied:** Replaced `No app and limited internet ok.` with the exact requested wording.
- **Scope:** This Access Points hero note only. Publication remains pending PR review.
- **Validation:** Reviewed the exact replacement; whitespace check passes.

## Resolved placement

### C01 — Partner Success

- Status: **Applied locally in T03 following the request to apply in realtime**
- Exact new text: **Partner Success**
- Page / field: homepage case-study section heading; exact old text: `Stories`.
- Supersedes the assistant's `Support in practice.` proposal in T03. Navigation labels are unchanged.
