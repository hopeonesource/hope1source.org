# Team portrait refresh — October 15, 2026

All 14 Team-page photos now have responsive delivery files under `public/photos/team/`. The 41 delivered files are listed with actual widths, file sizes, source URLs, and crop coordinates in `docs/TEAM_PHOTO_ASSETS.json`. Existing originals remain unchanged in `public/photos/`.

## Image choices

- Larger versions of the exact original photographs were recovered for Tim, Tamecia, Nick, Hugo, Damien, Harry, and Chris Burnett from the organization's existing public image sources. Damien's original is 2402 × 2997, compared with the previous 641 × 800 file.
- Face-centered framing is applied in CSS where the original contains substantial surrounding scenery or body area. This does not rewrite the source photograph. The Team page retains its existing circular 76px portraits, layout, roster, and biographies.
- Chris Burnett's original boat photograph and existing framing are retained, following the user's explicit correction. The source is now 900 × 1200 rather than 600 × 800. His generated close-up is discarded and is not referenced or shipped.
- Tamecia uses her larger original photograph with a tighter face crop. An experimental generated restoration was rejected because it reconstructed facial and shoulder details.
- Veronica retains the approved navy-blazer portrait. A different portrait found at the public source was excluded.
- Justin uses a conservative AI-restored version of his approved portrait, preserving its pose, clothing, expression, and plain background. Fine eye, tooth, skin, and beard detail is reconstructed; this is an enhanced marketing portrait, not a newly recovered camera original. The original is retained for comparison.

## Resolution and delivery

The browser chooses among 256px, 512px, and a larger source-appropriate width of up to 1024px. No source was mechanically enlarged. The larger public originals supply real additional source pixels; only Justin's restoration adds inferred detail. JPEG delivery files were encoded with macOS `sips` at quality 88.

Responsive `sizes` accounts for CSS crop enlargement. This is important: a tightly cropped image needs more source pixels than its 76px frame. Explicit image dimensions, lazy loading, and asynchronous decoding are retained.

## Selected image-generation prompt

Mode: built-in `image_gen`, `identity-preserve` edit, not CLI. Justin's generated output was 1254 × 1254 despite the requested 1024 × 1024. Selected delivery files are `public/photos/team/justin-robinson-256.jpg`, `justin-robinson-512.jpg`, and `justin-robinson-1024.jpg`.

> Use case: identity-preserve.
> Asset type: square website team portrait, 1024 x 1024 pixels.
> Edit target: the provided existing photograph of Justin Robinson, bald smiling adult man wearing a patterned navy shirt against a plain light background.
> Primary request: conservatively restore this exact photograph and enlarge it to a clean 1024 x 1024 square. Gently reduce JPEG compression and softness only. Preserve photographic reality and the existing head-and-upper-shoulders composition.
> Invariants: preserve his exact identity, apparent age, facial proportions, bald head shape and hairline, eyebrow shapes, eye shapes and gaze, nose, facial hair distribution, exact smile and tooth shapes, natural skin tone, expression, posture, original navy shirt and its small red pattern, original plain light background, and original lighting. Keep subtle natural skin texture and tonal variation.
> Avoid: beautification, rejuvenation, facial reshaping, symmetry correction, changing eyes or teeth, invented details, smoothing skin, makeup, new accessories, background replacement, new lighting, stylization, or any added text. Do not redesign or recreate the person. Prioritize fidelity to the supplied image over sharpness; leave uncertain small detail gently soft.

## Validation

All 14 portraits load at 320, 390, 768, and 1440 CSS pixels with a 3× pixel-density browser. No horizontal overflow or page errors were observed. The selected source width increases when the face crop requires it. Desktop, phone, and portrait-framing screenshots were reviewed. The Team roster, order, roles, and biography text match the pre-refresh version exactly.
