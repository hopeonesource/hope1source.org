# Website edit log

## Pages for review

- Current: https://hopeonesource.github.io/hope1source.org/
- Preview: https://hopeonesource.github.io/hope1source.org/v3/
- Repository: https://github.com/hopeonesource/hope1source.org
- Review pull request: https://github.com/hopeonesource/hope1source.org/pull/15
- Third preview: implemented in `preview-v4/`, running locally at http://127.0.0.1:5175/v4/. The GitHub Pages path `/hope1source.org/v4/` will become available after review and merge; it is not published yet.

## Current record — October 15, 2026

This is the running record for all v4 edits, including wording, images, ordering, formatting, navigation, responsive behavior, search preparation, and new stories. The existing file remains `EDITS.md`; no separate `edit.md` is needed.

Reconciled the conversation, current v4 source, and branch history through `71cd1a1`. All T01–T177 entries and T24A were already present exactly once, along with V01–V04 and resolved placement C01. T178 records this documentation reconciliation. Every one of the 140 branch commits ahead of `origin/main` at that checkpoint included an edit-log update.

**How to read the history:** Entries record what was applied at that point in the conversation. Later instructions supersede earlier versions only within their stated page and field. An older entry marked “Applied” is not a direction to restore superseded text. Per-entry requests and provenance distinguish user wording from assistant drafts. Historical build counts and validation results describe the version tested at the time.

**Review status:** Changes remain on `codex/third-preview-copy` for PR review. Publication is not authorized until review. T178 was a documentation-only reconciliation; subsequent website edits continue below.

### Current choices and where to find their history

| Area | Current state / scope | Log references |
| --- | --- | --- |
| Homepage | `HOPE1SOURCE (H1S) CHECK-INS`, `Earn Trust.`, and `We train and equip those who serve others for lasting change.` Three featured `Partner Success` stories; `Take part` and `Contact partnerships` actions. `Can you remain connected to those you aim to serve?` and `Plan your service` remain. | T01–T03, T46–T47, T54, T86–T87, T106 |
| Shared process | Home and Outreach Tools use `Connect. Listen. Follow up.` The shared final step says `Use what you learn to follow up and measure what matters.` Access Points retains its separate `Repeat` step and wording. | T98–T100, T122–T123 |
| Case studies and graphics | Full, responsive VA chart; DC photo/message composition with `H1S` prefixes and hypothermia message in focus; Dreamers growth graphic with a small enhanced portrait. DC text specifies a 78% reduction in hypothermia deaths during the supported period, attributed to the DC Office of the Chief Medical Examiner. Dreamers includes 5x funding growth. | V01–V04, T23–T30, T85, T88–T91, T106 |
| Readiness | Outreach planning, opt-in alerts, tap/scan list building, easy and fun check-ins, and valuable follow-up; added the sourced Hurricane Helene field account and a church public-health outreach example. | T47–T54, T106, T133, T179 |
| Public Agencies | Preserves the user's opt-in, phone, partner-control, bulleted-list, past-performance, and results wording, including the later percentage and funding-language revisions. | T55–T84, T106 |
| Team | Greg Marmo removed; Harry's retired-commander wording, Sarah's leadership wording, shortened Tim and Hugo bios, and all requested ordering revisions recorded. Tim `founded H1S`; credentials include `Eagle Scout, Honor Medal recipient`. Current source order: Tim, Frank, Tamecia, Nick, Justin, Veronica, Hugo, Damien, Jeff, Tom, Chris Teitzel, Sarah, Harry, Chris Burnett. | T107–T121 |
| Outreach Tools | `social media` replaces `Facebook`; adjacent repeated organization text removed; real-check-in phone caption added. | T124 |
| About | Approved hero restored; Portsmouth STEM-event photo replaces the Equity Incubator photo. Mission ends `Measure what matters and use what you learn to follow up.` Plain no-app introduction precedes three numbered explanations: people choose to connect, partners shape the experience, partners control their data. Community access points lead the audience bullets, with libraries after community centers. Business action says `Evaluate a business partnership`; sponsors link to `/corporate-sponsors`. SAM.gov details remain in a separate paragraph beneath H1S Check-ins. | T138–T150 |
| Access Points | Hero note: `Cell Phone required. Stickers, Signs, and Stands provided.` Four cards use the clearer check-in explanation. Process is `Connect. Listen. Repeat.` Final ownership sentence: `They own their check-in experience, and can filter, sort, or delete their data at any time.` Business-hub paragraph removed. | T92–T100, T122, T129, T151–T158 |
| Business and corporate partners | Business option on Get Involved; separate corporate-sponsor page covers volunteer outreach, community connection, team building, and partner examples including publicly documented Cisco support and user-confirmed Adobe involvement. | T130, T141–T142, T145, T149 |
| Media and footer | Footer and Contact link to Media; Case Studies links to more stories and updates. Removed the pictured footer row containing the hub link, crisis line, DBA, and procurement details. About registration information remains. | T125–T128 (superseded footer treatment), T134, T137, T140, T162 |
| News, source links, and authors | One newest-first `News & Stories` list. Ten migrated H1S releases have internal responsive articles; independent coverage remains external. Source-based dates, social-media stories, and first-initial/last-name author credits are recorded. Current list: 29 items, including 14 internal press articles and links to case studies. | T131–T136, T159–T177, T180 |
| Social stories and library | Second Harvest Asia and the VA/Feeding America partnership are included in the five-story case-study library; homepage retains its three featured stories. Social-source evidence and additional community updates are recorded. | T133, T135, T162, T180 |
| Navigation, mobile, and search | Page navigation returns to the top, with a shared back-to-top arrow; responsive and accessibility improvements, rendered HTML, metadata, structured data, sitemap/robots preparation, and legacy aliases cover v4. Current source defines 46 pages and 30 aliases. User copy restored after the search rewrite; future domain is `hope1source.org`, with publication after PR review. | T101–T106, T132, T145, T159–T177, T180 |

### Latest article dates and content

All four new articles and their Media summaries use shared data in `preview-v4/src/content/pressArticlesUpdates.js`.

| Article | Final display date | Latest content / revisions |
| --- | --- | --- |
| Join the Portsmouth Wellness Check-ins Hub community kickoff on October 23 | October 15, 2026 | Event: October 23, 2026, 2–3 p.m. Eastern, 801 Dinwiddie Street, Portsmouth. Planned hub and participation information, with the official registration link. T159. |
| Alaska pilot records 3,100 check-ins in 60 days | October 1, 2026 | H1S-led central Alaska pilot; outreach across the entire Air Force base; more than 27 services; text-linked games designed for 15 seconds or less, highlighting local and national mental-health services; 68% specifically means game completion. Pilot concluded in September 2026; results provide a basis for leadership to evaluate next steps. Wellness purpose appears in both article and Media summary. T167–T170, T177. |
| Custom agentic AI starts with understanding needs | September 2, 2026 | Year-long GMU Honors College partnership, September 1, 2025–September 1, 2026. Grant-cycle and volunteer challenges, custom agentic AI prototypes, and practical tools and insights to support nonprofits and their communities. T159–T166. |
| H1S equips Miami partners for veteran cancer-screening outreach | October 1, 2025 | H1S check-ins, training, and equipment support veteran wellness outreach. Summary uses `REFLECTION’s early analysis found`; 1.3% is the study's cancer-signal rate, with 12 diagnoses confirmed through follow-up. Wellness purpose appears in both article and Media summary. T171–T176. The final date in T174 supersedes T171–T173. |

**Latest wellness wording:** Alaska's article introduction and Media summary both state: `The purpose was to encourage service members and veterans to complete wellness activities that support their health.` Miami's introduction states: `The purpose was to encourage veterans to complete wellness activities that support their health.` Its Media summary includes the same purpose in the opening sentence. These describe the purpose of the outreach; the Alaska 68% result remains game completion.

## Workflow

Record each wording change with the page, exact old text, exact new text, and status. Preserve wording the user supplies; identify assistant-drafted wording as proposed. Clarify ambiguous targets before applying.

The user said **apply them in realtime**. Apply wording edits immediately to the local third preview and keep this log current. Work on branch `codex/third-preview-copy` and open a pull request for review. Do not change layout or design; do not merge or publish automatically.

The separate third preview started from v3 as its structural base. The wording and subsequent user-requested visual, navigation, and responsive changes are recorded below. The current site and v3 source are unchanged. Separate preview setup consists of `preview-v4/vite.config.js`, `scripts/build-v4.mjs`, the package scripts, and README instructions. Review this setup separately from the wording diff.

**Scope update, October 14, 2026:** Later requests authorize the visual corrections recorded below and responsive, navigation, and search improvements across **all v4 pages**. The user selected service providers as the priority audience, a partnership conversation as the primary action, and SMS check-ins, emergency alerts, service feedback, and outreach tools as the offerings to describe. The intended future production domain is **hope1source.org**. Publication still follows PR review; this work does not merge, publish, or change DNS. T101–T105 supersede the original text-only constraint only for this authorized work.

**Copy-preservation correction (T106):** Mobile, navigation, and crawling work must preserve the user's edited wording. Do not replace existing headings, descriptions, or button labels with marketing rewrites. Keep expressly requested new material separate, and retain the page-specific scope of earlier edits.

## Third version — applied locally

The user asked to combine the best of the current and preview versions, with a common thread across all case studies, then authorized edits in realtime. The entries below record user-supplied wording, user-requested changes, and assistant drafts with their individual provenance. Later entries include additional explicit user requests and corrections. Read them chronologically with the current choices above; superseded versions are retained as history.

**Original working theme:** Help people get support. Help partners serve them better.

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

**Current shared three-step section:** Connect. Listen. Follow up. The final step says `Use what you learn to follow up and measure what matters.` About and Access Points retain their separately edited `Connect. Listen. Repeat.` language (T122–T123, T138, T147).

**Case-study writing pattern:** the need → H1S's role → what was reported. Use existing text fields and paragraphs. The studies share a purpose; do not imply they all used the same product or intervention.

| Case study | Current homepage card headline | What readers should understand |
| --- | --- | --- |
| Veterans Affairs | Make care easier to reach. | Research and feedback helped service teams identify barriers. |
| DC Human Services | A text points the way to warmth. | Hypothermia alerts shared shelter and transport details; hypothermia deaths fell 78% during the supported period. |
| Dreamers & Achievers | Stay connected through follow-up. | Continued contact and feedback helped a partner understand needs. |

## Evidence used for the original proposal

These notes record the initial source review. Later user-requested wording and attribution changes are documented in the numbered entries and summarized above.

- Compared both source trees at repository commit 3ddcb76. Old text below is from v3; replacements were applied only in the third-preview copy. Shared content may appear on several pages; those existing uses should remain consistent.
- Read the [published VA study](https://pubmed.ncbi.nlm.nih.gov/33929036/) through NCBI's public publication API, including the full article (PMC8904198). It used actors portraying veterans in 30 cities, reports to centers, and corrective plans. Tim Underwood is listed as a coauthor affiliated with HopeOneSource. The draft says H1S contributed to the research, without crediting its software as the intervention. The replacement quotation is a short excerpt from the study conclusion; the current v3 paraphrase incorrectly reads like a direct quote.
- Read the [original DC case study](https://hope1source.org/case-studies/hopeonesource-saves-lives-with-emergency-shelter-alerts), which describes H1S alerts containing shelter and transportation information. The initial draft retained the older ICH quotation as historical context; that wording and attribution were subsequently replaced. The current quote is `DC reported that hypothermia deaths fell 78% during the supported period.`, attributed to `DC Office of the Chief Medical Examiner, published H1S housing case study` (T85, T106). The original underlying counts were not independently revalidated in the initial pass.
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

**Applied wording at this step**

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

- **Later superseded:** T137 removes this entire footer row, including the formatting and wording revised in T125–T128. About's separate registration text remains under T140.
- Status: **Applied locally — user-requested formatting; awaiting PR review**
- Target: `preview-v4/src/components/Layout.jsx`
- Placed `SAM.gov UEI...` on a new line immediately beneath `H1S Check-ins (dba Hope With Love, Inc.).` in the shared footer.
- Used a single line break within the same paragraph, with no blank line or added paragraph spacing. Preserved all wording and identifiers.

### T126 — v4 — Footer registration typography

- **Later superseded:** Footer row removed in T137.
- Status: **Applied locally — user-requested formatting; awaiting PR review**
- Targets: `preview-v4/src/components/Layout.jsx`, `preview-v4/src/styles/site.css`
- Made the `SAM.gov UEI...` registration line smaller (`0.875rem`) and italic throughout v4.
- Preserved the single line break, compact spacing, and wording. The H1S Check-ins line keeps its existing typography.

### T127 — v4 — Footer SAM.gov punctuation

- **Later superseded:** Footer row removed in T137.
- Status: **Applied locally — user-requested wording; awaiting PR review**
- Target: `preview-v4/src/components/Layout.jsx`
- Changed the shared footer registration line from `SAM.gov UEI...` to `SAM.gov: UEI...`, preserving its smaller italic style and line break.

### T128 — v4 — Corporate partner footer label

- **Later superseded:** Footer row removed in T137.
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

- **Later destination change:** T132 replaces the ten legacy H1S release links with internal v4 articles; independent coverage remains external. The external-link validation below describes the earlier version.
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

- **Later superseded:** T143 replaces this Equity Incubator photo with the Portsmouth community STEM-event photo.
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

- **Later destination change:** T145 links this action to the new internal `/corporate-sponsors` page, which includes the business-hub link.
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

- **Later superseded:** T150 replaces the introductory bullet and revises the three numbered explanations for clearer flow.
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

### T154 — /access-points — Clarify no app is required

- **Request:** `No app required.`
- **Applied:** Changed the hero note to `No app required. Limited internet ok.`, preserving the approved limited-internet sentence.
- **Scope:** This Access Points phrase only. Publication remains pending PR review.
- **Validation:** Reviewed the exact replacement; whitespace check passes.

### T155 — /access-points — Describe provided outreach materials

- **Request:** Replace `Limited internet ok` with `Stickers, Signs, and Stands provided.`
- **Applied:** Updated the hero note to `No app required. Stickers, Signs, and Stands provided.` using the requested capitalization.
- **Scope:** This Access Points phrase only. Publication remains pending PR review.
- **Validation:** Reviewed the exact replacement; whitespace check passes.

### T156 — /access-points — Cell phone requirement

- **Request:** Change `No app required` to `Cell Phone required.`
- **Applied:** Updated the hero note to `Cell Phone required. Stickers, Signs, and Stands provided.` using the requested capitalization.
- **Scope:** This Access Points phrase only. Publication remains pending PR review.
- **Validation:** Reviewed the exact replacement; whitespace check passes.

### T157 — /access-points — Check-in experience and data ownership

- **Request:** `They own their check-in experience and data, and can...`
- **Applied:** Updated the ownership sentence to `They own their check-in experience and data, and can filter, sort, or delete their data at any time.` Retained the preceding free/discounted-service requirement.
- **Scope:** This Access Points sentence only. Publication remains pending PR review.
- **Validation:** Reviewed the exact replacement; whitespace check passes.

### T158 — /access-points — Simplify experience ownership wording

- **Request:** `They own their check-in experience, and can...`
- **Applied:** Removed `and data` from the opening phrase. The sentence now reads `They own their check-in experience, and can filter, sort, or delete their data at any time.`
- **Scope:** This Access Points phrase only. Publication remains pending PR review.
- **Validation:** Reviewed the exact replacement; whitespace check passes.

### T159 — /press — Two new stories only

- **Later revisions:** T160 sets the GMU story date to September 2, 2026; T161–T166 refine its narrative, title, and year-long introduction. Portsmouth retains October 15, 2026. Alaska and Miami were added only after subsequent explicit requests in T167 and T171.
- **Request:** Create one story for the George Mason University Honors College partnership from September 1, 2025, to September 1, 2026, and one for the October 23 community kickoff. Only those two.
- **Applied:** Added two full articles and their News & Stories listings: the completed year-long Honors College partnership, and the upcoming Portsmouth Wellness Check-ins Hub kickoff on October 23, 2026, from 2–3 p.m. Eastern at 801 Dinwiddie Street. Both announcements are dated October 15, 2026; the partnership period and event date are explicit in the articles.
- **Sources:** Partnership dates supplied by the user; project handoff and training details verified in the previously reviewed correspondence. Event details and the public registration link come from the official Eventbrite listing. Private correspondence and email links are not published.
- **Scope:** These two v4 articles and their listing/route integration only. Existing articles, approved copy, and layout are unchanged. Publication remains pending PR review.
- **Validation:** v4 build and prerender checks pass (43 pages, 30 aliases, 730 internal links). Both article pages and the News & Stories listings were verified in the running preview; the kickoff registration link matches the public event. Whitespace check passes.

### T160 — /press — George Mason story date

- **Request:** Place the GMU story at September 2, 2026.
- **Applied:** Changed the George Mason article date and its sorting/metadata date to September 2, 2026. The News & Stories listing uses the same date automatically.
- **Scope:** George Mason story date only; partnership dates and article text are unchanged. Publication remains pending PR review.
- **Validation:** Confirmed the shared article/listing date and chronological order; whitespace check passes.

### T161 — /press/george-mason-honors-college-partnership — Tell a mini story

- **Request:** Update the GMU story with details from emails with Hugo and Melanie, told as a mini story.
- **Applied:** Recast the article as four short paragraphs: H1S’s grant-preparation need; Buchanan Hall workspace and Hugo and Melanie’s collaboration with students; the December prototype handoff and human-review design; and student research informing Portsmouth planning. Updated the listing summary to match.
- **Sources:** Reviewed the September 2025 student/Hugo exchange and project brief, Melanie’s December thank-you with the student deliverable handoff, and the October 2026 retrospective thank-you. The narrative paraphrases relevant project details; private email links and administrative details are not published.
- **Scope:** GMU article body and summary only. Preserved the September 2, 2026 story date, the September 1, 2025–September 1, 2026 partnership period, and the existing layout.
- **Validation:** v4 build and prerender checks pass (43 pages, 30 aliases, 730 internal links). Verified the four-paragraph story and September 2 date in the running preview; whitespace check passes. Publication remains pending PR review.

### T162 — /case-studies — Link to more stories and updates

- **Request:** Link from the bottom of Case Studies to the Media page for more stories and updates.
- **Applied:** Added `More stories and updates in Media` after the case-study cards, linking to `/press` with the existing secondary-button style.
- **Scope:** Case Studies index only. Publication remains pending PR review.
- **Validation:** v4 build and prerender checks pass (43 pages, 731 internal links). Clicked the new link in the preview and confirmed it opens News & Stories at `/v4/press`; whitespace check passes.

### T163 — /press/george-mason-honors-college-partnership — Nonprofit needs and custom agentic AI

- **Request:** Tell a story about understanding nonprofit challenges and providing custom agentic AI solutions, including grant cycles and volunteers.
- **Applied:** Reframed the existing GMU mini story around recurring grant demands, volunteer availability, understanding H1S’s workflow, and the custom discovery and writing agent prototypes. Explained structured intake, government/private-foundation drafting, and human review. Updated the headline and listing summary to match.
- **Evidence:** Uses the previously reviewed Hugo project brief and Melanie/student handoff. Describes delivered prototypes and their intended use without claiming deployment, funding awards, or measured time savings.
- **Scope:** GMU story only; preserved its route, September 2, 2026 date, and September 1, 2025–September 1, 2026 partnership period. Publication remains pending PR review.
- **Validation:** v4 build and prerender checks pass (43 pages, 731 internal links). Verified the updated headline, four-paragraph story, and preserved date in the preview; whitespace check passes.

### T164 — /press/george-mason-honors-college-partnership — Practical tools and community insight

- **Request:** Mention that the partnership gave H1S practical tools and insights to further serve nonprofits and their communities.
- **Applied:** Updated the closing sentence to `The partnership gave H1S practical tools and insights to better support nonprofits and the communities they serve.`
- **Scope:** This sentence only. Publication remains pending PR review.
- **Validation:** Confirmed the article data loads with the updated sentence; whitespace check passes.

### T165 — /press/george-mason-honors-college-partnership — Shorten the title

- **Request:** Remove `nonprofit` from the title.
- **Applied:** Changed the title to `Custom agentic AI starts with understanding needs`. The article heading, News & Stories listing, and metadata share this title.
- **Scope:** Title only. Publication remains pending PR review.
- **Validation:** Confirmed the shared title loads correctly; whitespace check passes.

### T166 — /press — Introduce the year-long GMU partnership

- **Request:** Mention the year spent working together in the introduction.
- **Applied:** Added `Over a year together` to the News & Stories summary. Moved the partnership period into the article’s opening paragraph, stating that H1S and George Mason University Honors College worked together for a year from September 1, 2025, to September 1, 2026.
- **Scope:** GMU introduction and summary only. Removed the repeated dates from the later paragraph. Publication remains pending PR review.
- **Validation:** Confirmed the article introduction and shared listing summary load correctly; whitespace check passes.

### T167 — /press — Alaska pilot story dated October 1

- **Request:** Review the Alaska draft skeptically, strengthen its impact, and add it dated October 1.
- **Applied:** Added `Alaska pilot records 3,100 check-ins in 60 days`, dated October 1, 2026. Led with the reported check-in interactions and service access, described outreach across the entire Air Force base and support from local organizations, and closed with the completed pilot and evaluation of possible future use. The News & Stories listing sorts it between the October 15 kickoff announcement and September 2 GMU story.
- **Evidence:** Counts, central Alaska location, commander involvement, 60-day duration, September conclusion, and local organizations’ interest were supplied by the user. The user clarified that outreach covered the entire Air Force base; the article and summary use that scope instead of the dorm reference. The copy distinguishes check-in interactions and available services from unique people or completed service visits. It makes no claim of reduced suicide or approved continuation and uses no on-base imagery or official logos.
- **Scope:** One new v4 news article and its automatic listing/route integration. Existing stories and layout are unchanged. Publication remains pending PR review.
- **Validation:** v4 build and prerender checks pass (44 pages, 30 aliases, 748 internal links). Confirmed the October 1 chronological placement and viewed the complete article with the corrected base-wide outreach in the running preview; whitespace check passes.

### T168 — /press/central-alaska-check-in-pilot — Game completion and service recognition

- **Request:** Add the reported 68% game engagement and explain games designed for service branding and recall, including a mental-health-service memory game. The user clarified that engagement means completing the game.
- **Applied:** Added a paragraph reporting H1S’s 68% game completion rate and explaining the games’ intended role in recognizing service providers and recalling available mental health services.
- **Evidence:** The rate and completion definition were supplied by the user. A focused email review supported the memory-matching design purpose but did not establish a denominator or earlier record for comparison. `Record-breaking` is omitted pending that comparison; the copy does not claim measured improvement in recall or health outcomes.
- **Scope:** Full Alaska article only; title, date, and News & Stories summary are unchanged. Publication remains pending PR review.
- **Validation:** Confirmed the updated article data and viewed the new paragraph in the running preview. Title, October 1 date, and summary remain unchanged; whitespace check passes.

### T169 — /press/central-alaska-check-in-pilot — Crisp story and quick games by text

- **Request:** Make the Alaska story concise and convincing, explain games delivered by text message that reinforce recognition of local counseling and mental health services and available national services, and include the 15-seconds-or-less experience.
- **Applied:** Tightened the story to four paragraphs. Explained that participants received text messages linking to games designed to take 15 seconds or less, highlighted local and national services, and described the memory-matching game's purpose in helping people recognize and remember them. Retained the reported 68% game completion rate.
- **Evidence:** The user supplied the delivery method and timing. Timing is described as a design target and service recognition as an intended benefit; the article does not claim measured recall or health improvements. Preserved 3,100 check-in interactions, more than 27 services, base-wide outreach, the completed September pilot, and leadership evaluation of next steps.
- **Scope:** Alaska article body only; headline, October 1 date, listing summary, and layout remain unchanged. Publication remains pending PR review.
- **Validation:** v4 build and prerender checks pass (44 pages, 30 aliases, 748 internal links). Verified all four revised paragraphs and the preserved title/date in the running preview; whitespace check passes.

### T170 — /press — Identify H1S leadership in the Alaska preview

- **Request:** Make H1S's leadership clear on the main News & Stories page.
- **Applied:** Changed the Alaska summary opening to `An H1S-led pilot in central Alaska`. Retained the existing check-in count, base-wide outreach, and services description.
- **Scope:** Shared Alaska listing summary and description metadata only. Article title, body, date, and layout are unchanged. Publication remains pending PR review.
- **Validation:** Confirmed the shared listing data and the updated summary on News & Stories in the running preview; whitespace check passes.

### T171 — /press — Miami veteran cancer-screening outreach story

- **Later revisions:** The final story date is October 1, 2025 (T174), superseding the dates in T171–T173. T172 and T175–T176 refine the results, summary, and wellness purpose.
- **Request:** Add a story about H1S's role supporting veteran early cancer detection, grounded in email and study results. The user clarified that H1S provided check-ins, training, and equipping.
- **Applied:** Added `H1S equips Miami partners for veteran cancer-screening outreach`, dated October 15, 2026, describing the 2025 work. Leads with check-ins, staff training, and outreach equipment; explains QR/tap access and computer/tablet options, plus coordination between Miami VA and local veteran-service organizations. The new article appears automatically in News & Stories.
- **Evidence:** Reviewed relevant March–July 2025 email correspondence documenting check-in form/response access, outreach material preparation, training and demonstrations, partner introductions, and the July meeting with United Way of Broward County's Mission United team. The user's confirmation supports the provided check-ins, training, and equipment. No private contact details, email quotations, or internal check-in links are published.
- **Study context:** Verified the original 2024 REFLECTION presentation: 1.3% is the cancer-signal detection rate among 2,854 analyzable veterans across seven VA sites, including Miami. It is not an early-stage cancer diagnosis rate or an outcome attributable to H1S's later outreach. The article identifies the result as historical research context, explains clinical evaluation, and links the original presentation, Miami VA's program, and the 2025 study update. It makes no unsupported claim about family/caregiver outreach, enrollment counts, health improvement, or automated appointment reminders.
- **Scope:** One new v4 article with existing responsive article layout, automatic listing, route, and metadata integration. Publication remains pending PR review.
- **Validation:** v4 build and prerender checks pass (45 pages, 30 aliases, 765 internal links). Clicked the new News & Stories entry and verified the full article, date, and all three source links in the running preview; whitespace check passes.

### T172 — /press — Miami date and concrete research impact

- **Request:** Date the Miami story September 23, 2026, feature the 1.3% result, and review the article and summary for clear, credible impact.
- **Applied:** Updated the date and chronological listing placement. Tightened the introduction around H1S's check-ins, training, equipment, and the path to the study team. Added the 1.3% signal detection figure and 12 confirmed diagnoses to the listing summary; the article explains the full denominators and the value of answers that could guide care.
- **Evidence:** Rechecked GRAIL's October 23, 2024 release and original presentation: 37 of 2,854 veterans had cancer signals (1.3%); among 28 positive-result participants with 180-day follow-up, 12 had confirmed cancer diagnoses. These pooled study findings predate H1S's 2025 Miami outreach. The copy does not recast the signal rate as confirmed early-stage diagnoses, a measured survival benefit, or H1S-attributed diagnoses. The study source and updated 2025 findings remain linked.
- **Scope:** Miami article and its shared summary/date only. H1S's contribution remains explicit; no unrelated story or design changes. Publication remains pending PR review.
- **Validation:** v4 build and prerender checks pass (45 pages, 30 aliases, 765 internal links). Confirmed the September 23 article date, chronological placement, revised summary, and full research paragraph in the running preview; whitespace check passes.

### T173 — /press — Miami story date: March 2026

- **Request:** Change the Miami story date to March 2026.
- **Applied:** Set the shared display date to `March 2026` and chronological value to `2026-03`, preserving month precision without inventing a day. This supersedes the September 23 date in T172.
- **Scope:** Miami article and listing date only. Publication remains pending PR review.
- **Validation:** Confirmed the shared date, chronological placement after the September GMU story, and March 2026 label in the running preview; whitespace check passes.

### T174 — /press — Miami story date: October 1, 2025

- **Request:** Change the Miami story date to October 1, 2025.
- **Applied:** Set the shared display date to `October 1, 2025` and chronological value to `2025-10-01`. This supersedes T173.
- **Scope:** Miami article and listing date only. Publication remains pending PR review.
- **Validation:** Confirmed the shared date, chronological placement, and October 1, 2025 label in the running preview; whitespace check passes.

### T175 — /press — Simplify the Miami summary

- **Request:** Remove the `earlier 2024 analysis found` wording, then use `early analysis found` instead.
- **Applied:** Changed `REFLECTION’s earlier 2024 analysis found` to `REFLECTION’s early analysis found`, retaining the named study attribution. This replaces the interim `REFLECTION reported` wording.
- **Scope:** Shared Miami listing summary and description metadata only; full article and date are unchanged. Publication remains pending PR review.
- **Validation:** Confirmed the shared summary and the final early-analysis wording in the running News & Stories preview; whitespace check passes.

### T176 — /press — Explain the wellness purpose

- **Request:** Include that the purpose is to promote completion of wellness activities to promote health.
- **Applied:** Added the purpose of encouraging veterans to complete wellness activities that support their health to the Miami story's summary and opening paragraph.
- **Scope:** Miami summary and introduction only. The purpose is expressed as an aim; study findings, date, and layout are unchanged. Publication remains pending PR review.
- **Validation:** Confirmed the shared summary and article introduction, preserved October 1, 2025 date, and updated wording in the running News & Stories preview; whitespace check passes.

### T177 — /press — Alaska wellness purpose and Media summaries

- **Request:** Include the wellness purpose on the main Media page and add a similar purpose for veterans in the Alaska pilot.
- **Applied:** Added `The purpose was to encourage service members and veterans to complete wellness activities that support their health.` to the Alaska summary and article introduction. Confirmed that the Miami summary already includes its wellness purpose on the same Media page.
- **Scope:** Alaska summary and introduction only. Wellness completion is expressed as the purpose; the 68% figure remains specifically game completion. Existing dates, results, and layout are unchanged. Publication remains pending PR review.
- **Validation:** Confirmed the Alaska summary and introduction share the new purpose, preserved the October 1, 2026 date, and verified both Alaska and Miami wellness wording on the running Media page; whitespace check passes.

### T178 — Edit log — Reconcile all edits and current choices

- **Request:** Update the edit log with all edits.
- **Applied:** Reconciled the existing `EDITS.md` with the conversation, current v4 source, and all 140 branch commits through `71cd1a1`. Confirmed T01–T177 and T24A were already recorded once each; retained all historical entries, V01–V04, and C01. Added a current-state index, final article dates, and the latest Alaska/Miami wellness-purpose wording.
- **Corrections:** Removed the stale claim that every entry after the original attribution list was an assistant proposal. Updated the overview's `Reach` wording to `Connect`, clarified the current DC attribution, changed `Published wording` to `Applied wording at this step`, and explicitly marked superseded footer, source-link, About-photo, sponsor-link, check-in-flow, and story-date versions.
- **Scope:** Documentation only. No website wording, images, design, routes, or publication settings changed. Publication remains pending PR review.
- **Validation:** Checked numbered-entry continuity and uniqueness, current source counts and story dates, summary references, and whitespace. Confirmed only `EDITS.md` changed. Historical site-build results remain attached to their original entries; no new site build is needed for this documentation-only update.

### T179 — /readiness — Church public-health outreach

- **Request:** Add what a church did with H1S to promote public health resources, without mentioning COVID in the website copy.
- **Applied:** Added `Public health outreach through a trusted church` between the DC Human Services example and the Hurricane Helene field account.
- **New text:** `A church partner worked with H1S to promote public health resources in its community. The goal was simple: help people find useful health information and available support through a familiar community connection.`
- **Evidence and scope of attribution:** The user supplied the church partnership and public-health promotion purpose. This addition uses that account without naming the church or including private-email-derived details. No delivery totals or health outcomes are claimed.
- **Scope:** One brief Readiness section using the existing responsive prose style, plus this log. Other approved content and layout are preserved. Publication remains pending PR review.
- **Validation:** Verified the new heading and paragraph in the running Readiness preview. The v4 build and prerender checks pass for 45 pages, 30 aliases, and 765 internal links; whitespace check passes. The diff contains only the new section and its edit-log record.

### T180 — /case-studies, /press, /food-meals — Feeding America partnership

- **Request:** Include the Feeding America case study already published on hope1source.org in v4, with a Media listing at minimum.
- **Applied:** Added the full internal story at `/case-studies/veterans-affairs-feeding-america-partnership`, automatically included in the case-study library. Added a Media entry linking to it and a Food and Meals link. Preserved the three homepage stories and the separate Second Harvest Asia case study.
- **Content:** Describes the Charleston VA/Feeding America pilot, H1S's check-in/outreach/reporting role, the report's 95% reduction in reporting time, phone-based follow-up, food-benefit referrals, and identified housing needs. Includes a short verified partner quote, an anonymous example from the report, and VA News's separate food-distribution figures. The original PDF and VA News remain accessible from the new story.
- **Date and evidence:** Media uses `2020 report`, based on the PDF's creation year; no exact publication date is printed. All three source PDF pages were extracted and visually reviewed. [Source audit](docs/FEEDING_AMERICA_SOURCES.md) records provenance and the distinction between pilot percentages and separate event totals.
- **Scope:** New case-study data and links, source documentation, and this log. Existing approved copy, design, and independent Media coverage remain unchanged. Publication remains pending PR review.
- **Validation:** v4 build and prerender checks pass for 46 pages, 30 aliases, and 784 internal links. Confirmed every article paragraph is in rendered HTML, one dated Media listing, five library stories, the Food and Meals link, and three unchanged homepage cards. Checked all four affected pages at 320px, 390px, and 1440px with no horizontal overflow, broken images, or page errors; reviewed mobile and desktop screenshots and the Media-to-story navigation. Independent source/scope review and whitespace checks pass.

### T181 — Homepage and case-study library — Shelter-alerts card headline

- **Request / new text:** `Put vital information within real-time reach.`
- **Old text:** `Put shelter information within reach.`
- **Applied:** Replaced the shared emergency-shelter-alerts card headline on the homepage and case-study library. Updated the current-headline summary above; earlier wording remains in the historical record.
- **Scope:** This headline and edit log only. Publication remains pending PR review.
- **Validation:** v4 build and prerender checks pass. Confirmed the new headline appears and the old headline is absent in rendered Home and Case Studies HTML; whitespace check passes.

### T182 — Homepage — Hypothermia alerts and reduction in deaths

- **Request:** Specify that the alerts were for hypothermia and supported a 78% reduction in deaths.
- **Old text:** `DC Human Services used H1S to share emergency shelter and transportation information with residents.`
- **New text:** `DC Human Services used H1S hypothermia alerts to share shelter and transportation information. Hypothermia deaths fell 78% during the supported period.`
- **Scope:** Homepage shelter-alerts card description and this log. Retained the headline from T181. The full case study already includes the 78% result and attribution; its wording remains unchanged. The source comment now reflects the user's request to include this result on the home card. Publication remains pending PR review.
- **Validation:** v4 build and prerender checks pass. Confirmed the new description, explicit hypothermia death reduction, and preserved headline in rendered homepage HTML; whitespace check passes.

### T183 — Homepage — Shorter hypothermia card description

- **Request:** Shorten the description by 7–9 characters.
- **Old phrase:** `transportation information`
- **New phrase:** `transport details`
- **Scope:** Shortens the homepage card description by exactly 9 characters, from 151 to 142. Retains the headline and the 78% reduction in hypothermia deaths during the supported period. Full case-study wording remains unchanged. Publication remains pending PR review.
- **Validation:** Character-count check, v4 build, prerender checks, and whitespace check pass.

### T184 — Homepage and case-study library — Concise shelter-alerts headline

- **Request:** Match the other story headlines in length and make the headline more compelling, with a newspaper-like hook.
- **Old headline:** `Put vital information within real-time reach.`
- **New headline:** `A text points the way to warmth.`
- **Rationale:** Centers the text alert and its human purpose in 32 characters, between the other homepage headlines at 26 and 33 characters. Replaces the abstract wording with a concrete connection between shelter information and protection from the cold.
- **Scope:** Shared shelter-alerts card headline on the homepage and case-study library, plus this log. Preserves the approved description, 78% result, full story, and design. Publication remains pending PR review.
- **Validation:** Confirmed headline lengths of 26, 32, and 33 characters. v4 build, prerender checks, and whitespace check pass; rendered homepage and case-study library contain the new headline and omit the old one.

### T185 — Case studies — Public Sector label

- **Request:** Change `Federal Gov...` to `Public Sector`.
- **Old text:** `Federal government and nonprofit`
- **New text:** `Public Sector`
- **Scope:** VA story's shared industry label and this log. Publication remains pending PR review.
- **Validation:** v4 build, prerender checks, and whitespace check pass. Rendered case-study library includes `Public Sector` and omits the previous label.

### T186 — Case studies — Federal Government label

- **Request / new text:** `Federal Government`
- **Old text:** `Public Sector`
- **Scope:** VA story's shared industry label and this log. Supersedes T185. Publication remains pending PR review.
- **Validation:** v4 build, prerender checks, and whitespace check pass. Rendered case-study library includes `Federal Government` and omits `Public Sector`.

### T187 — Case studies — Shorter VA organization label

- **Request:** Remove `Homeless Programs` from the selected VA label.
- **Old text:** `Veterans Affairs / National Homeless Programs`
- **New text:** `Veterans Affairs / National`
- **Scope:** VA story's shared organization label and this log. The full article title and study wording remain unchanged. Publication remains pending PR review.
- **Validation:** v4 build, prerender checks, and whitespace check pass. Confirmed the shortened label in the rendered case-study library.

### T188 — Case studies — Feeding America organization label

- **Request / new text:** `Feeding America`
- **Old text:** `Veterans Affairs / Feeding America`
- **Scope:** Feeding America story's shared organization label and this log. Publication remains pending PR review.
- **Validation:** v4 build, prerender checks, and whitespace check pass. Confirmed the updated organization label in the rendered case-study library.

### T189 — Case studies — Food Access category

- **Request / new text:** `Food Access`
- **Old text:** `Veteran services and food access`
- **Scope:** Feeding America story's shared industry label and this log. Publication remains pending PR review.
- **Validation:** v4 build, prerender checks, and whitespace check pass. Confirmed the updated category in the rendered case-study library.

### T190 — Case studies — Nonprofit - Food Access category

- **Request / new text:** `Nonprofit - Food Access`
- **Old text:** `Food Access`
- **Scope:** Feeding America story's shared industry label and this log. Supersedes T189. Publication remains pending PR review.
- **Validation:** v4 build, prerender checks, and whitespace check pass. Confirmed the updated category in the rendered case-study library.

### T191 — Case studies — Second Harvest Asia category

- **Request / new text:** `Nonprofit - Food Access`
- **Old text:** `Food access and nonprofit`
- **Scope:** Second Harvest Asia story's shared industry label and this log. Matches the Feeding America category applied in T190. Publication remains pending PR review.
- **Validation:** v4 build, prerender checks, and whitespace check pass. Confirmed both food-access case studies display the requested category in the rendered library.

### T192 — Case studies — Federal Government - Access category

- **Request / new text:** `Federal Government - Access`
- **Old text:** `Federal Government`
- **Scope:** VA story's shared industry label and this log. Supersedes T186. Publication remains pending PR review.
- **Validation:** v4 build, prerender checks, and whitespace check pass. Confirmed the updated category in the rendered case-study library.

### T193 — Case studies — Local Government - Access category

- **Request / new text:** `Local Government - Access`
- **Old text:** `Local government`
- **Scope:** DC Human Services story's shared industry label and this log. Publication remains pending PR review.
- **Validation:** v4 build, prerender checks, and whitespace check pass. Confirmed the updated category in the rendered case-study library.

### T194 — Case studies — Local Nonprofit - Access category

- **Request / new text:** `Local Nonprofit - Access`
- **Old text:** `Local nonprofit`
- **Scope:** Dreamers & Achievers story's shared industry label and this log. Publication remains pending PR review.
- **Validation:** v4 build, prerender checks, and whitespace check pass. Confirmed the updated category in the rendered case-study library.

### T195 — Case studies — National Nonprofit - Access category

- **Request / new text:** `National Nonprofit - Access`
- **Old text:** `Nonprofit - Food Access`
- **Scope:** Feeding America story's shared industry label and this log. Supersedes T190 for Feeding America. Publication remains pending PR review.
- **Validation:** v4 build, prerender checks, and whitespace check pass. Confirmed the updated category in the rendered case-study library and preserved Second Harvest Asia's category.

### T196 — Case studies — Second Harvest Asia National Nonprofit category

- **Request / new text:** `National Nonprofit - Access`
- **Old text:** `Nonprofit - Food Access`
- **Scope:** Second Harvest Asia story's shared industry label and this log. Supersedes T191 and matches Feeding America's label from T195. Publication remains pending PR review.
- **Validation:** v4 build, prerender checks, and whitespace check pass. Confirmed both organizations display the requested category in the rendered case-study library.

### T197 — Case studies — Shorter Feeding America headline

- **Request / new text:** `Turn a food check-in into connection`
- **Old text:** `Turn a food check-in into a connection to support.`
- **Scope:** Feeding America story's card headline and this log. Publication remains pending PR review.
- **Validation:** v4 build, prerender checks, and whitespace check pass. Confirmed the updated headline in the rendered case-study library.

### T198 — About — Simpler opening message

- **Request:** Simplify the message around connecting people to services with dignity, security, and ease.
- **Old text:** `We train and equip those who serve others for lasting change.`
- **New text:** `We connect people to services with dignity, security, and ease.`
- **Scope:** About page hero introduction and matching opening sentence in its search description, plus this log. Other pages and About sections retain their existing wording. Publication remains pending PR review.
- **Validation:** v4 build, prerender checks, and whitespace check pass. Confirmed the revised introduction and search description in rendered About HTML.

### T199 — About — Separate SAM.gov from UEI

- **Request:** Differentiate `SAM.gov` from `UEI` in the registration line.
- **Old text:** `SAM.gov UEI HYQWP496LMJ8.`
- **New text:** `SAM.gov: UEI HYQWP496LMJ8.`
- **Scope:** Adds a colon to the shared procurement text displayed on About and For Backers, plus this log. Publication remains pending PR review.
- **Validation:** v4 build, prerender checks, and whitespace check pass. Confirmed the separator in rendered About HTML.

### T200 — About — Simpler registration details

- **Request:** Improve the registration block for simplicity.
- **Old text:** `SAM.gov: UEI HYQWP496LMJ8. CAGE 77K55. EIN 27-5461163. 501(c)(3).`
- **New presentation:** `SAM.gov registration` followed by `UEI: HYQWP496LMJ8 · CAGE: 77K55`; a separate `Nonprofit status` paragraph followed by `501(c)(3) · EIN: 27-5461163`.
- **Scope:** About registration block and this log. Uses existing organization data and paragraph styling, with bold labels and line breaks. Preserves the organization text above, every identifier, and the nonprofit designation. Other pages retain their existing presentation. Publication remains pending PR review.
- **Validation:** v4 build, prerender checks, and whitespace check pass. Confirmed both labeled groups, all identifiers, and the retained organization name in rendered About HTML. Independent copy review confirms clarity and preserved information.

## Resolved placement

### C01 — Partner Success

- Status: **Applied locally in T03 following the request to apply in realtime**
- Exact new text: **Partner Success**
- Page / field: homepage case-study section heading; exact old text: `Stories`.
- Supersedes the assistant's `Support in practice.` proposal in T03. Navigation labels are unchanged.
