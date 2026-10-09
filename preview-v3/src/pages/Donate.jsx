import { useEffect } from 'react'
import Seo from '../components/Seo.jsx'
import { org } from '../content/org.js'

/**
 * /donate exists so old links still resolve.
 * The gift itself happens on the Every.org campaign already configured for Hope with Love.
 */
export default function Donate() {
  useEffect(() => {
    window.location.replace(org.donateUrl)
  }, [])

  return (
    <>
      <Seo
        title="Donate"
        description="Give to Hope1Source Check-ins on Every.org. Hope with Love is the 501(c)(3)."
      />
      <section className="page-hero">
        <div className="wrap narrow">
          <p className="kicker">Donate</p>
          <h1>Every.org</h1>
          <p className="lede">
            Gifts go to {org.legalName}, the 501(c)(3) behind {org.brand}.
          </p>
          <p className="hero-actions">
            <a className="btn btn-primary" href={org.donateUrl}>
              Donate on Every.org
            </a>
          </p>
        </div>
      </section>
    </>
  )
}
