# Donation integration review

Status: draft, not production-approved. No gift has been made.

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

## Release blockers

- Actual rendered mobile layouts and keyboard paths still need verification.
- Every.org returned a Vercel Security Checkpoint with “Failed to verify your browser,” Code 11, in the test browser. No bypass or gift was attempted.
- The vendor source raises concerns about dialog semantics, named Close controls, Escape handling, focus containment, and focus restoration. Verify the live popup before approving it for production. Do not patch vendor internals without a tested, stable contract.
- Verify stock, DAF, IRA, and crypto start in the intended method on the live service.
- Production release is held pending these checks or an explicit decision to release the direct-link version instead.

## Primary references

- https://github.com/everydotorg/donate-button/blob/main/packages/donate-button-v4/src/manualMode.tsx
- https://github.com/everydotorg/donate-button/blob/main/packages/donate-button-v4/src/components/widget/index.tsx
- https://github.com/everydotorg/donate-button/blob/main/packages/donate-button-v4/src/loaders/Widgetloader.tsx
- https://github.com/everydotorg/donate-button/blob/main/packages/donate-button-v4/src/components/widget/components/Header/CloseButton/index.tsx
- https://github.com/everydotorg/donate-button/blob/main/packages/donate-button-v4/src/helpers/constructDonateUrl.ts
- https://support.every.org/hc/en-us/articles/360061886773-Does-Every-org-charge-fees
