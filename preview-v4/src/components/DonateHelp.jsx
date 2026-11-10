import { directDonateUrl } from '../content/giving.js'

export default function DonateHelp() {
  return (
    <p className="donate-help">
      Monthly is selected in the donation window; you can choose a one-time gift.
      {' '}You will be asked to share your contact information with Hope with Love.
      {' '}Prefer a full page? <a data-every-direct href={directDonateUrl}>Continue on Every.org</a>.
    </p>
  )
}
