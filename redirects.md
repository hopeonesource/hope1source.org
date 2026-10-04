# Redirects for hope1source.org

**Status:** Cutover map for the new mission site in this repo.  
**Use:** Paste into Cloudflare Redirect Rules, or deploy `public/_redirects` on Cloudflare Pages.  
**Do not** 301 the apex to `hopeonesource.me`. An earlier planning draft (October 1, 2026) pointed the whole domain at the commercial hub because that hub did not yet have legal pages. This site is the mission, trust, and Ad Grants home. The Check-ins hub stays a single footer link.

GitHub Pages cannot apply this table. On Pages, the app still catches the same paths in the browser (`src/content/routes.js` aliases plus `src/App.jsx`). That is a soft landing, not an HTTP 301. Use Cloudflare in front of the domain when you want real 301s for ads and bookmarks.

## Hosts

| Source | Target | Notes |
|--------|--------|-------|
| `www.hope1source.org` | `https://hope1source.org` | Apex is canonical. Do this at Cloudflare, not in the React app. |
| `hope1source.org` | this site | Keep. Do not send `/` to the `.me` hub. |

## MUST

| From | To | Why |
|------|----|-----|
| `/privacy-policy` | `/privacy` | Old Webflow legal URL |
| `/terms-of-service` | `/terms` | Old Webflow legal URL |
| `/donate-now` | `https://www.every.org/hope-with-love` | Same Every.org campaign as `/donate` |
| `/contact` | `/contact` | Same path |
| `/get-involved` | `/get-involved` | Same path |
| `/` | `/` | New homepage |

Log in never had a Webflow path. Keep sending people to `https://portal.hopeonesource.me`.

## SHOULD

| From | To |
|------|----|
| `/our-mission` | `/about` |
| `/about-us` | `/about` |
| `/our-team` | `/team` |
| `/our-sponsors` | `/about` |
| `/testimonials` | `/case-studies` |
| `/faqs` | `/faqs` |
| `/press` | `/press` |
| `/in-the-news` | `/press` |
| `/case-studies` | `/case-studies` |
| `/case-studies/dreamers-and-achievers` | `/case-studies/dreamers-and-achievers` |
| `/case-studies/veterans-affairs-national-homeless-programs` | `/case-studies/veterans-affairs-national-homeless-programs` |
| `/case-studies/hopeonesource-saves-lives-with-emergency-shelter-alerts` | `/case-studies/emergency-shelter-alerts` |
| `/data-insights-tools` | `/for-providers` |

`/outreach-tools` and `/learn-more` are pages on this site. Do not redirect them.

## OPTIONAL industry paths (kept)

These stay on this host as mission landers. Do not 301 them to `hopeonesource.me/#plans` or to a price.

| Path |
|------|
| `/food-meals` |
| `/medical` |
| `/mental-health` |
| `/housing` |
| `/education-career` |
| `/justice-legal` |
| `/faith-based` |
| `/other-services` |

## OPTIONAL archive

| From | To |
|------|----|
| `/article/*` | `/press` |
| `/post/*` | `/press` |
| `/blog-categories/*` | `/press` |

Full article bodies were not copied. Titles are on `/press`. Outside coverage that we could re-check links to the publisher.

## DROP / low value

| From | To |
|------|----|
| `/donate` | `https://www.every.org/hope-with-love` | Gifts leave this site. The SPA route also sends the browser there. |
| `/donations`, `/support`, `/give` | `https://www.every.org/hope-with-love` | Same campaign |
| `/old-home` | `/` |
| `/404` | `/` |
| Unknown paths | `/` at the edge if you want, or leave the branded 404 |

## Cloudflare examples

**Single redirect (Redirect Rule)**

- If hostname equals `hope1source.org` or `www.hope1source.org`
- and URI Path equals `/privacy-policy`
- then 301 to `https://hope1source.org/privacy`

**Bulk**

`public/_redirects` is in Netlify/Cloudflare Pages format. Specific 301s come first. The last line rewrites unknown paths to `index.html` with status 200 so the React app can route. Cloudflare Pages serves real files before that rewrite, so JS and CSS still load.

## Ad Grants

Leave keyword destinations on these `.org` paths until real mission landers exist on `hopeonesource.me`. Do not point an ad at the commercial hub’s pricing section.
