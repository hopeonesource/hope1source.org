# Homepage image refresh — October 15, 2026

The refresh is limited to homepage imagery and its presentation. Approved page wording, story facts, case-study figures, and the overall layout remain intact.

## Hero assets and provenance

Built-in image generation refined the existing `public/photos/homepage-hero.jpg`, preserving the Washington, D.C. cherry-blossom / Jefferson Memorial composition. A second edit made a portrait version for phones. These are AI-refined scenic marketing images, not documentary case-study evidence.

- Desktop output: 1734 × 907 pixels (the original was 1200 × 630). Delivered as `public/photos/homepage-hero-refined-1734.jpg`, with 1200px and 800px alternatives.
- Mobile output: 1024 × 1536 pixels. Delivered as `public/photos/homepage-hero-mobile-1024.jpg`, with 768px and 512px alternatives.
- The built-in tool returned those dimensions despite higher-resolution requests; the images are not described as 4K.
- JPEG encoding and responsive delivery sizes were produced with macOS `sips`. No people or documentary photos were regenerated for this refresh.
- The original hero file is retained. The existing 2500 × 805 logo already exceeds homepage display needs and is unchanged.

Desktop prompt:

> Refine the existing Hope1Source hero into a high-resolution photographic image, ideally 3840 pixels wide at approximately 1.9:1. Preserve the Washington DC scene and composition: cherry blossoms across the upper third, Jefferson Memorial in the right half, uncluttered sky and distant foliage at left for cream website text. Improve natural petal texture, branch detail, and the memorial’s dome and columns while keeping believable depth of field. Use soft warm spring daylight, realistic colors, and restrained tonal depth. No added people, objects, lettering, logos, watermark, overlays, lens flare, fake HDR, sharpening halos, or invented architecture. The website will add text and gradients separately.

Mobile prompt:

> Create a matching 2:3 portrait adaptation of the refined Washington DC cherry-blossom/Jefferson Memorial photograph. Preserve natural warm spring lighting and realistic detail. Frame blossoms in the top quarter, memorial upper-middle right, and generous quiet lower-left/lower-half space for cream website text. No people, text, logos, new objects, overlays, dramatic effects, or HDR. Aim for 1536 × 2304 or highest practical resolution.

## Story artwork

`preview-v4/src/components/HomeStoryArt.jsx` renders resolution-independent SVG artwork directly into the homepage. All three cards use a 3:2 canvas and readable labels. The original detailed SVG files remain in the case-study pages and other story-card placements.

- VA: all four approved year-two/year-three comparisons remain; proportional bars and larger percentages replace the cramped full-report thumbnail.
- DC: the complete original street photo remains visible. The approved message image supplies the subdued surrounding messages, and exact vector text makes the hypothermia alert readable. The supported-period 78% result and historic context remain explicit.
- Dreamers: keeps Dorothy's approved portrait and all three numerical comparisons. Clear values replace decorative bars that did not encode the actual ratios. `public/photos/dorothy-adams-home-384.jpg` is a delivery-size copy of the approved portrait; the original is retained.

Every graphic includes an accessible text description. Hero files use responsive source selection and explicit dimensions; the hero receives high fetch priority.
