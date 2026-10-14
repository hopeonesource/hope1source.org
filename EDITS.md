# Wording edits

## Pages for review

- Current: https://hopeonesource.github.io/hope1source.org/
- Preview: https://hopeonesource.github.io/hope1source.org/v3/
- Repository: https://github.com/hopeonesource/hope1source.org
- Third preview: implemented in `preview-v4/`, running locally at http://127.0.0.1:5176/v4/. The GitHub Pages path `/hope1source.org/v4/` will become available after review and merge; it is not published yet.

## Workflow

Record each wording change with the page, exact old text, exact new text, and status. Preserve wording the user supplies; identify assistant-drafted wording as proposed. Clarify ambiguous targets before applying.

The user said **apply them in realtime**. Apply wording edits immediately to the local third preview and keep this log current. Work on branch `codex/third-preview-copy` and open a pull request for review. Do not change layout or design; do not merge or publish automatically.

The separate third preview uses v3 as its structural base. Its layout, styles, imagery, and section order are preserved. The current site and v3 are unchanged. Separate preview setup consists of `preview-v4/vite.config.js`, `scripts/build-v4.mjs`, the package scripts, and README instructions. Initial HTML title and description metadata match T01/T02. Review this setup separately from the wording diff.

## Third version — applied locally

The user asked to combine the best of the current and preview versions, with a common thread across all case studies. T01, T02, T03, T14, T21, T22, T23, T24, T24A, T27, T28, T29, T30, T46, T47, T48, T49, T50, T51, T52, T53, T54, T55, T56, T57, T58, T59, T60, T61, T62, T63, T64, T65, T66, T67, T68, T69, T70, T71, T72, T73, T74, T75, T76, T77, T78, T79, T80, T81, T82, T83, T84, T85, T86, T87, and T88 contain user-supplied or user-requested changes. The remaining entries originated as assistant proposals. All listed entries have now been applied to the separate local third preview following the request to apply in realtime.

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

## Resolved placement

### C01 — Partner Success

- Status: **Applied locally in T03 following the request to apply in realtime**
- Exact new text: **Partner Success**
- Page / field: homepage case-study section heading; exact old text: `Stories`.
- Supersedes the assistant's `Support in practice.` proposal in T03. Navigation labels are unchanged.
