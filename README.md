# Hope1Source Check-ins · hope1source.org

Mission and trust website for Hope1Source (H1S) Check-ins. [Hope with Love](https://hope1source.org) is the 501(c)(3) / DBA behind the program (also written HopeOneSource).

This replaces the Webflow site. It is a static React app. It does not run a donation checkout, a login, or a database.

## Concept

Think of three doors that should not be the same door.

| Door | Host | Job |
|------|------|-----|
| Mission and trust | `hope1source.org` (this repo) | Story, team, legal drafts, gifts, Ad Grants landers |
| Check-ins hub | [hopeonesource.me](https://hopeonesource.me) | Commercial partner product. Linked **once**, in the footer |
| Partner portal | [portal.hopeonesource.me](https://portal.hopeonesource.me) | Log in for teams who already have access |
| Gifts | [Every.org · Hope with Love](https://www.every.org/hope-with-love) | Donations. Donate buttons and `/donate` go here |

Analogy: this site is the front window of the organization. The hub is the workshop price list. The portal is the staff entrance. Mixing them on one hero makes both the gift and the product harder to trust.

The homepage speaks to people who run a program, host guests, or fund the work. Resource guides stay at their own URLs (`/food-meals`, `/housing`, and the rest). Those guides do not list live openings and do not show a price.

Hero: **Earn trust.** We help partners serve people with care, and show the impact that follows.

## Pages

| Path | Role |
|------|------|
| `/` | Partner homepage |
| `/about` | Mission and origin |
| `/team` | Staff and advisors |
| `/contact` | Email and a short mailto form. No phone or street address |
| `/donate` | Sends the browser to Every.org |
| `/get-involved` | Provider, venue, volunteer, backer |
| `/faqs` | Mission FAQ, including the privacy and SMS flags |
| `/press` | Release titles and checked coverage links |
| `/case-studies` | Three sourced stories |
| `/for-providers`, `/for-venues`, `/for-backers` | Role doors |
| `/food-meals`, `/medical`, `/mental-health`, `/housing`, `/education-career`, `/justice-legal`, `/faith-based`, `/other-services` | Ad Grants–safe landers |
| `/privacy`, `/terms` | **Drafts. Not legal advice.** |
| Anything else | Branded 404 |

Old Webflow paths such as `/privacy-policy` and `/donate-now` are listed in [redirects.md](redirects.md).

## Local development

From this folder:

```bash
npm install
npm run dev
```

`npm run dev` serves http://localhost:5173 with `base: /`, so routes look like `/about`.

```bash
npm run build
npm run preview
```

A plain `npm run build` targets **GitHub project Pages**:

- `VITE_BASE=/hope1source.org/`
- `VITE_SITE_ORIGIN=https://hopeonesource.github.io`

Preview that build at http://localhost:4173/hope1source.org/ (Vite preview does not mount the site at `/` when the base is the project path).

Custom domain or Cloudflare Pages:

```bash
VITE_BASE=/ VITE_SITE_ORIGIN=https://hope1source.org npm run build
```

Copy `.env.example` to `.env` if you want those values remembered. Never commit `.env`.

## How routing works on GitHub Pages

The app uses **React Router’s browser history**, not hash URLs (`/#/about`). Ad landing pages need a real path.

GitHub Pages has no rewrite rules. The build copies `dist/index.html` to `dist/404.html` (`scripts/spa-fallback.mjs`). Pages returns that file for unknown paths and **keeps the URL**, so React Router can render `/about` or `/donate`.

`vite.config.js` sets `base` from `VITE_BASE`. Router `basename` uses the same value, with the trailing slash removed.

Hash routing would have avoided the 404 file. It would also have made every ad URL look temporary. The 404 fallback is the cleaner fit.

## Deploy: GitHub Pages

Workflow: `.github/workflows/pages.yml`. It runs on pushes to `main`.

After this pull request is merged:

1. Open **Settings → Pages → Build and deployment**.
2. Set **Source** to **GitHub Actions** (not “Deploy from a branch”).
3. The workflow publishes the `dist` folder.
4. The project URL is `https://hopeonesource.github.io/hope1source.org/`.

### This repo is private

Free GitHub Pages for a **private** repository needs GitHub Pro, Team, or Enterprise. On a free plan, pick one:

1. **Make the repository public**, then use the workflow above. The site content is meant to be public anyway. Do not put secrets in it.
2. **Cloudflare Pages** (below), which can build a private GitHub repo on the free plan and attach `hope1source.org`.

Do not cancel Webflow or change DNS until the new host answers on a URL you have clicked through.

### Optional: `gh-pages` branch

If you cannot use Actions:

```bash
VITE_BASE=/hope1source.org/ VITE_SITE_ORIGIN=https://hopeonesource.github.io npm run build
npx gh-pages -d dist
```

Then set Pages to the `gh-pages` branch, folder `/ (root)`. A `CNAME` file is **not** in this repo on purpose. Add `hope1source.org` as the custom domain only when DNS is ready, and change the build to `VITE_BASE=/`.

### Custom domain DNS (when you are ready)

At the DNS host (Cloudflare is the better place, because it can also 301):

| Type | Name | Value |
|------|------|--------|
| A | `@` | `185.199.108.153` |
| A | `@` | `185.199.109.153` |
| A | `@` | `185.199.110.153` |
| A | `@` | `185.199.111.153` |
| CNAME | `www` | `hopeonesource.github.io` |

Those four A records are GitHub’s Pages anycast addresses. If the site is on Cloudflare Pages instead, use the CNAME Cloudflare gives you, not these A records.

Rebuild with:

```bash
VITE_BASE=/ VITE_SITE_ORIGIN=https://hope1source.org npm run build
```

Canonical tags and `sitemap.xml` follow `VITE_SITE_ORIGIN`. They are generated in `scripts/write-seo.mjs` at build time.

## Deploy: Cloudflare Pages

Use this if the repo stays private, or if you want real 301s.

| Setting | Value |
|---------|--------|
| Framework | Vite |
| Build command | `npm run build` |
| Output directory | `dist` |
| Environment | `VITE_BASE=/` and `VITE_SITE_ORIGIN=https://hope1source.org` |
| Node | 22 |

`public/_redirects` is copied into `dist`. It 301s old Webflow paths and, last, rewrites unknown paths to `/index.html` so the app router works. The same map is written for humans in [redirects.md](redirects.md).

Attach `hope1source.org` and `www` in the Cloudflare Pages project. Redirect `www` to the apex there.

## What not to change by accident

- Do not put **Donate** and a **price** on the hero as equal buttons. Gifts are the late band and the footer. Prices are not on this site.
- Do not add a second link to `hopeonesource.me`. One footer link is the rule.
- Do not 301 `/food-meals` and the other resource guides to the hub.
- Do not invent testimonials, partner logos, or a live bed list. Quotes on the homepage are labeled as lines from the previous public homepage.

## Confirm before cutover

Older drafts disagreed about a public phone, a mailing street, and SMS codes. None of those are printed on this site. Contact is email only.

| Item | Status | Where it shows |
|------|--------|----------------|
| Public phone | Not published | — |
| SMS short code and long code | Not published | Terms draft says to confirm before printing a code |
| Welcome text | Old terms had sample copy pointing at hopeonesource.me | Terms draft only |
| Email | **partnerships@hope1source.me** | Contact, footer, privacy, terms |
| Street address | Not published | — |
| Governing law | Virginia, Arlington County, from the old terms | Terms draft |
| Effective dates | Privacy: unset · Terms previously December 6, 2016 | Legal banners |
| Account URL | Draft proposes `portal.hopeonesource.me` | Privacy draft |
| Social login | Old terms mentioned Facebook login | Terms draft |
| Every.org slug | `hope-with-love` → https://www.every.org/hope-with-love | Donate |
| HIPAA sentence | December 2024 FAQ said the system is HIPAA-compliant (AWS, encryption, partner permissions) | FAQ, marked as a prior public statement, not a new legal opinion |
| Cost language | Old terms say outreach is free for community members · commercial plans live on the hub | Terms draft. No price on this site |
| Carrier list | Historical list in the terms | Confirm against current 10DLC paperwork |
| DMCA agent | Not designated | Terms draft |
| “100 Virginia organizations” (2024) | Awarding body was not named on the old news page | Press page |
| Partner names | Shake Shack, United Way, Second Harvest Asia were named on the old homepage | Homepage, labeled as previously published. No logos |
| Site definition | One policy for `.org` + `.me` + portal, or separate policies | Privacy and terms drafts |
| EIN on receipts | Cause IQ lists 27-5461163. Not printed here until you confirm it against the determination letter | — |
| Social profiles | None were verified, so none are linked | — |

Counsel should review `/privacy` and `/terms` and then remove the draft banner.

## Scripts

| Command | What it does |
|---------|----------------|
| `npm run dev` | Local site at `/` |
| `npm run check:routes` | Fails if the sitemap list and `App.jsx` drift apart |
| `npm run build` | SEO files, production bundle, `404.html` copy |
| `npm run preview` | Serve the last build |

Stack: React, Vite, React Router, plain CSS. Fonts are self-hosted through Fontsource so the pages do not call Google at runtime.

## License of content

Organization copy was ported from the public Webflow site and the October 2026 cutover notes. Press articles were not copied. Link out to Street Sense where a URL was re-checked.
