# Search readiness for the v4 review

Updated October 14, 2026. The intended audience is service providers, the conversion is a partnership conversation, and the confirmed future production domain is `https://hope1source.org`. Publishing follows PR review; these changes do not publish the site or change DNS.

## What this build supplies

- Every v4 route has its actual page content and ordinary HTML links in the initial response. JavaScript enhances navigation and interactions; reading and following links do not depend on it.
- Each page has its own title, description, canonical URL, social metadata, and JSON-LD before JavaScript runs. The metadata is kept consistent when visitors navigate in the application.
- Structured data describes the organization, website, and current page using existing public facts. It does not invent service areas, certifications, ratings, reviews, or aggregate outcomes.
- Legacy aliases have a destination canonical, an immediate static redirect, and a working fallback link. The real 404 page has useful content and `noindex`.
- Unknown article/post/category paths use that same 404 rather than silently redirecting only after JavaScript runs. The 12 explicitly mapped legacy aliases remain available.
- The default v4 build remains a `noindex, follow` review preview. Its sitemap contains no URLs. The current site's root sitemap and robots files are unchanged.

## Build and validate

The existing full `npm run build` still includes v4. To build v4 alone:

```sh
node scripts/build-v4.mjs
node scripts/check-v4-prerender.mjs
```

For browser QA of the built GitHub preview:

```sh
VITE_BASE=/hope1source.org/v4/ node node_modules/vite/bin/vite.js preview --config preview-v4/vite.config.js --host 127.0.0.1 --port 4175
```

The preview server resolves each route to its generated HTML and returns the generated 404 for missing pages. It must not use a generic SPA fallback that serves homepage HTML for every URL, because that causes hydration mismatches and tests the wrong initial response. The development server continues to use normal client routing.

Default canonicals match `https://hopeonesource.github.io/hope1source.org/v4/`; they no longer combine the custom domain with a GitHub project path.

After PR review and approval to launch, prepare the confirmed root-domain release with:

```sh
VITE_SITE_ORIGIN=https://hope1source.org VITE_V4_BASE=/ VITE_SITE_INDEXABLE=true node scripts/build-v4.mjs
node scripts/check-v4-prerender.mjs
```

The output is **`dist/v4`**, which must be deployed as the production site's document root. Running this command only builds files. Do not upload the encompassing `dist` directory as the v4 production release, because it contains the current site and other previews. A deployment workflow must intentionally select this output and use these environment settings. Rebuild with defaults afterward to restore the local review build.

The automated checker verifies all routes, unique titles/descriptions, matching canonical and Open Graph URLs, valid JSON-LD, readable HTML, internal link targets, aliases, sitemap policy, and noindex 404. Browser QA must also check hydration, responsive layouts, keyboard navigation, navigation scrolling, and actual HTTP status codes after deployment.

During the GitHub subdirectory preview, unknown `/v4/*` URLs may use the existing project-root 404 document because GitHub Pages selects a site-level fallback. This build deliberately does not replace the current site's fallback. Deploying `dist/v4` as the approved production root makes its own noindex `404.html` available to the host; verify that the hosting configuration returns it with HTTP 404.

## Crawler access and launch verification

`robots.txt` is effective only at a host's root. A file at `/hope1source.org/v4/robots.txt` cannot control crawling on `hopeonesource.github.io`. The preview therefore uses HTML `noindex` rather than relying on a nested robots file. When `dist/v4` is deployed at the future host root, its `robots.txt` permits crawling and advertises the release sitemap. Keep crawlers able to fetch pages so they can see the page-level policy. [Google robots guidance](https://developers.google.com/crawling/docs/robots-txt/create-robots-txt).

ChatGPT search uses **OAI-SearchBot**; OpenAI recommends allowing it in robots.txt and any hosting/CDN controls, including its published IP ranges. **GPTBot** is a separate training crawler preference, and **ChatGPT-User** is user-initiated fetching rather than the search indexing control. This change leaves the site's existing training-crawler preference unchanged. No WAF, CDN, or production crawler setting has been changed. [OpenAI crawler documentation](https://developers.openai.com/api/docs/bots).

After the approved release, verify the canonical HTTPS host, redirect alternate hosts to it, return HTTP 200 for real pages and 404 for missing pages, verify root robots and sitemap responses, and ensure CDN/security rules do not challenge allowed search crawlers. Submit the production sitemap in Google Search Console and Bing Webmaster Tools using authorized owner accounts. Inspect representative service and case-study URLs in Search Console and test rendered metadata. Monitor qualified partnership inquiries as well as search impressions/clicks.

Readable HTML, stable canonical URLs, and crawlable links address the JavaScript indexing issues described in [Google's JavaScript SEO guidance](https://developers.google.com/search/docs/crawling-indexing/javascript/javascript-seo-basics). Google states that its AI search features use the same SEO foundations, require no special AI text file or schema, and do not guarantee crawling, indexing, or inclusion. Technical readiness likewise cannot guarantee placement in ChatGPT answers. [Google AI search guidance](https://developers.google.com/search/docs/appearance/ai-features).

## Existing claims that need clear source support

The user confirmed that evidence is already on the website. This work preserves approved visible claims; it does not independently certify them. Before production, connect each claim to the precise source it describes:

- **VA study date and scope:** the public-agencies copy cites Oxford Journal of Public Health, 2019, while the case study links [PMID 33929036](https://pubmed.ncbi.nlm.nih.gov/33929036/) and an Oxford article in volume 44, issue 1, and attributes the publication to 2022. Distinguish the study period from the publication year and confirm the supported denominator and service-access measures.
- **Google reviews and 97% funding growth:** identify the source document, organizations included, denominator, time interval, and method for the “OPM & Google Gemini, 2026” statement. A model name alone is not a reproducible study citation. Keep partner-reported outcomes separate from the published VA study.
- **DC hypothermia reduction:** link the exact DC Office of the Chief Medical Examiner report and supported period for the 78% figure; retain attribution to city reporting.
- **AWS security wording:** link current public security/privacy documentation and specify the controls that the phrase “latest AWS security” describes. This phrasing does not itself establish a certification or independent audit.

These are evidence-linking tasks, not new on-page disclaimers. Do not add rating or quantified-outcome schema until the visible source and its meaning are clear.
