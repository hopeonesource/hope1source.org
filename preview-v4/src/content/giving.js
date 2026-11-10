import { org } from './org.js'

// Keep method and sharing parameters before the donate fragment. These links
// deliberately bypass the general-purpose pop-up so their settings stay intact.
export const givingMethods = [
  { method: 'stocks', title: 'Stock', description: 'Give shares of stock.', action: 'Give stock' },
  { method: 'daf', title: 'Donor-advised fund', description: 'Recommend a grant from your DAF.', action: 'Give from a DAF' },
  { method: 'ira', title: 'IRA', description: 'Explore giving from your IRA.', action: 'See IRA giving options' },
  { method: 'crypto', title: 'Crypto', description: 'Choose a cryptocurrency to give.', action: 'Give crypto' },
].map((option) => ({
  ...option,
  href: `${org.donateUrl}?method=${option.method}&require_share_info=true#/donate`,
}))

export const directDonateUrl = `${org.donateUrl}?require_share_info=true#/donate`
export const givingFeesUrl = 'https://support.every.org/hc/en-us/articles/360061886773-Does-Every-org-charge-fees'
