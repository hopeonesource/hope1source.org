# Donation integration review

Status: draft. Production is held because live testing found accessibility failures in the vendor popup. No gift has been made.

## Scope

- Shared stock, DAF, IRA, and crypto giving cards on the homepage and For Backers.
- Official Every.org explicit-mode popup for ordinary links to the exact Hope with Love profile.
- Monthly default, add-on amounts $50/$100/$250, required sharing, coral #c94b2c.
- Method, campaign, amount, and other parameterized URLs stay direct. Modified clicks, target windows, downloads, unrelated profiles, and fundraisers keep browser behavior.
- Visible direct Every.org fallback beside both primary giving areas. This is important because asynchronous vendor fetch failures cannot be detected by a synchronous showWidget call.
- Plain-language recurring-default and contact-sharing disclosures. No fee-free or guaranteed tax-deduction claims.

## Verified locally

- `npm run build`: original site, v3, and v4 builds plus route/prerender checks.
- Production-equivalent v4 build: 46 public pages, 30 aliases, metadata, JSON-LD, sitemap, real 404, and 886 internal links.
- `node scripts/check-every-donate.mjs`: 45 focused checks using a stubbed Every.org API and static generated HTML.
- `git diff --check`.

The focused checks validate our integration logic, not Every.org payment processing.

## Live browser checks

The actual built site was opened through the supported local preview service.

- Home and For Backers: no horizontal overflow at 320, 375, 390, 430, 768, and 1180 CSS-pixel widths. All giving cards exceeded the 44px target minimum. Minimum measured card size was 265 x 150px. Visible coral keyboard focus was verified.
- Desktop and 320px popup: correct Hope With Love identity, Monthly selected, coral styling, and the configured +50/+100/+250 controls.
- Switching to Once worked. Clicking +50 then +100 produced 150. The amount was cleared afterward, without clicking Continue or submitting a gift.
- Stocks, DAF, IRA, and Crypto method tabs showed their corresponding starting forms. No account, personal, or payment information was entered.
- Click-to-close restored body scrolling. Reopening is possible.
- The live widget disclosed that Hope With Love has not added bank-deposit information and that Network for Good currently applies a 2.25% disbursement fee. This is an observed vendor disclosure, not an independent account audit. No account settings were changed.
- A missing external-arrow glyph in the bundled font was replaced with an inline SVG.

These were desktop Chromium and fixed-width iframe layout checks, not real iPhone Safari / Android Chrome or completed checkout tests.

## Release blockers

- Confirmed vendor accessibility failures: no dialog role, unnamed Close button, Escape did not dismiss, and clicking Close returned focus to the page body instead of the Donate trigger. The Once radio also had no accessible name in the browser accessibility tree.
- Every.org returned a Vercel Security Checkpoint with “Failed to verify your browser,” Code 11, in the test browser. No bypass or gift was attempted.
- Fix the vendor modal accessibility through a supported integration or vendor release and retest. Avoid fragile patches to vendor internals.
- Full-page stock, DAF, IRA, and crypto links remain source-verified but their destination pages cannot be click-certified in this browser; the embedded method starts were tested separately.
- Production release is held pending these checks or an explicit decision to release the direct-link version instead.

## Primary references

- https://github.com/everydotorg/donate-button/blob/main/packages/donate-button-v4/src/manualMode.tsx
- https://github.com/everydotorg/donate-button/blob/main/packages/donate-button-v4/src/components/widget/index.tsx
- https://github.com/everydotorg/donate-button/blob/main/packages/donate-button-v4/src/loaders/Widgetloader.tsx
- https://github.com/everydotorg/donate-button/blob/main/packages/donate-button-v4/src/components/widget/components/Header/CloseButton/index.tsx
- https://github.com/everydotorg/donate-button/blob/main/packages/donate-button-v4/src/helpers/constructDonateUrl.ts
- https://support.every.org/hc/en-us/articles/360061886773-Does-Every-org-charge-fees
