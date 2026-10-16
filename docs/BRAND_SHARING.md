# Brand icons and link previews

PR #18 / EDITS.md T251, October 15, 2026.

The browser favicon uses the original HopeOneSource red heart and gold rays. No original logo or favicon pixels were replaced. `preview-v4/index.html` declares the 16px/32px PNG files, the 16px/32px ICO fallback, the existing 512px `public/logo-mark.png`, and the 180px Apple touch icon. The larger square option follows [Google's favicon guidance](https://developers.google.com/search/docs/appearance/favicon-in-search).

The default large link preview is `public/social/hope1source-share-v2.png`: 1733 × 907 PNG, 1,324,925 bytes. `preview-v4/src/content/brandAssets.js` records its actual dimensions and alternative text. It is used for Open Graph and Twitter cards. Articles with their own photographs retain those photographs. The original `public/og.png` remains available to the previous site versions.

The new card uses the current approved homepage text: “Earn Trust.” and “We train and equip those who serve others for lasting change.” This adds no new visible page text. The large card is generated artwork based on the original wordmark and heart references; the favicon itself remains the original artwork.

## Image provenance

Created with the built-in image generation tool, using `public/logo-hope-one-source.png` and `public/logo-mark.png` as references. The generated result was inspected for legibility, spelling, recognizable branding, and margins, then copied into the repository. The tool returned 1733 × 907 rather than the requested 1200 × 630; metadata declares the actual dimensions.

Prompt:

> Use case: ads-marketing / compositing. Asset type: polished Open Graph link-sharing card for HopeOneSource (H1S), landscape 1200x630 pixels (1.905:1). Input image 1 is the original complete HopeOneSource wordmark and heart/sunrays logo to insert intact. Input image 2 is the original standalone mark, supplied only as a brand fidelity reference. Create a striking, calm, premium nonprofit brand card that looks clear when shared in social feeds and messages. Preserve the exact recognizable existing red heart, gold rays, wordmark spelling, proportions, and colors. Do not redesign or restyle the mark or invent a new logo. Flat warm cream #f6f1e7 with minimal restrained dark forest green #101816 editorial layout. Generous whitespace, clean broad margins for social cropping. Place the actual full reference logo prominently and completely visible near the upper left or top, balanced with a large highly legible serif headline below. Use a clean modern sans serif for the supporting sentence. Keep all essential content inside 8% safe margins. Use a small restrained gold accent at most; no decorative imagery or photos. Readability at mobile thumbnail size matters most. Include exactly: “Earn Trust.” and “We train and equip those who serve others for lasting change.” Headline dark forest green, bold and elegant, very large. Supporting line dark forest green, clear and moderately sized, split into at most two lines with natural breaks. Retain the logo’s existing red and gold text. Only the two exact text lines above plus the existing original logo wordmark. No URL, new claims, extra tagline, repeated logo, fabricated icon, or watermark. Crisp edges, polished spacing, professional simple design. Output a finished landscape PNG social-sharing graphic, not a mockup or image of a screen.

## Maintenance

`scripts/make-og.py` remains a legacy generator for the earlier site's abstract `og.png`. Its obsolete “H” touch-icon generator was removed so it cannot overwrite the original heart icon. It is not used by the v4 build. Preserve the original heart assets and save future social-card revisions with new filenames to reduce stale cached previews.

The build checker verifies favicon declarations and real PNG/ICO dimensions/structure. It also checks the sharing image, image host, alternative text, and article images. Before release, confirm the image URLs in deployed HTML return actual images over HTTPS. The domain transition details are in `docs/SEARCH_READINESS.md`.
