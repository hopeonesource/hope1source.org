# V4 review verification

October 14, 2026. Scope: the separate `preview-v4` site; publication follows PR review.

## Build and crawler output

- Full `npm run build` passes for the current site, v3, and v4. The build now includes `check-v4-prerender.mjs`.
- The generated-output checker passes for 29 complete HTML pages, 12 explicit legacy aliases, and 446 internal links in the default preview build.
- Every page has one H1, unique title and description, a canonical matching the configured origin/base, social metadata, and valid JSON-LD before JavaScript runs.
- Default preview HTML is `noindex, follow`, with an empty sitemap. The explicit future `https://hope1source.org/` indexable build and sitemap were separately built and validated, then the default preview was restored.
- Unknown URLs return the generated HTTP 404 and `noindex` in the local static preview. Unknown article/post/category URLs remain consistent 404s with and without JavaScript.
- Vite preview now serves each route's own HTML for paths with or without a trailing slash. This avoids a homepage HTML fallback causing React hydration errors.

## Browser verification

Tested in local Chromium with simulated viewports; this is not a claim of physical-device testing or an independent accessibility certification.

- 28 on-site pages × four viewport widths (320, 390, 768, 1440 pixels): HTTP 200, one H1, no horizontal overflow, no broken loaded images, and no React runtime/hydration errors.
- All 29 pages, including the donation handoff, with JavaScript disabled at 320 pixels: readable content, primary navigation, back-to-top link, and no horizontal overflow. With JavaScript enabled, donation retains its existing external handoff rather than being navigated during the on-site sweep.
- Page links, same-route links, and browser Back start at the top. Route navigation moves keyboard focus to main content. Deep-link anchors retain their destination and focus.
- Back-to-top arrow returns to zero scroll and focuses the header brand; reduced-motion mode uses immediate movement.
- Mobile menus fit at 320×568 and 844×390, both before and after scrolling. The final link remains reachable. Escape restores focus to the toggle.
- Contact form native validation rejects empty fields and accepts valid sample input; no message was sent. Without JavaScript, the email link remains available and the inactive form is hidden.
- Homepage case-study image frames are equal 3:2 rectangles at 320, 390, and 1440 pixels. All graphics use containment rather than cropping. Cards remain fully opaque while scrolling.
- Visually inspected homepage, service offerings, contact, Dreamers & Achievers, emergency-shelter story, case-study cards, and the mobile footer/back-to-top control.

Local screenshots are in ignored `output/playwright/`. No new runtime dependencies were added.

## Copy-preservation review

Following the user's correction, compared the search-work diff with the saved wording at `a6c3927` and reviewed the effective edits through T100. Restored earlier titles, descriptions, introductions, and button labels while keeping the four requested service additions separate. Corrected the stale Housing-page duplicate of the DC quote/attribution. Confirmed 44 approved or restored phrases across eight generated pages and reran the full build/output checker. Detailed before/after notes are in T106 of `EDITS.md`.

## Publication checks

See [SEARCH_READINESS.md](SEARCH_READINESS.md) for the production build command, host-root robots/sitemap rules, crawler access, evidence-linking review notes, and checks that require the approved live deployment. Indexing and placement in search or ChatGPT answers are not guaranteed by these technical changes.
