import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero.jsx'
import Seo from '../components/Seo.jsx'
import { howSteps } from '../components/HowItWorks.jsx'
import { org } from '../content/org.js'
import { mailto } from '../lib/links.js'

export default function AccessPoints() {
  return (
    <>
      <Seo
        title="Your front desk can be where people find help."
        description="A QR code or kiosk lets visitors ask for help privately. Congregations, libraries, community centers, and food sites."
      />
      <PageHero
        kicker="Trusted access points"
        title="Your front desk can be where people find help."
        lede="A QR code or kiosk lets visitors ask for help privately. Your team follows up. No app, and no personal data collected for its own sake."
      >
        <div className="hero-actions">
          <a className="btn btn-primary" href={mailto({ subject: 'Access point' })}>
            Become an access point
          </a>
          <Link className="btn btn-secondary" to="/outreach-tools">
            See how outreach works
          </Link>
        </div>
      </PageHero>
      <section className="section">
        <div className="wrap">
          <h2>Places people already trust</h2>
          <div className="door-row">
            {['Congregations', 'Libraries', 'Community centers', 'Food sites'].map((place, index) => (
              <article key={place} className="door">
                <span className="door-index" aria-hidden="true">
                  0{index + 1}
                </span>
                <h3>{place}</h3>
                <p>People come to you first. You do not have to collect a file to point them toward help.</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="section section-tight">
        <div className="wrap narrow prose">
          <h2>Alert. Check in. Connect.</h2>
          <p>No app. Any phone. People choose to take part.</p>
          <ol>
            {howSteps.map((step) => (
              <li key={step.title}>
                <strong>{step.title}.</strong> {step.text}
              </li>
            ))}
          </ol>
          <p>
            No religious affiliation is required to give, volunteer, or be served by a partner. The private note stays
            with the team.
          </p>
          <p>
            Business check-ins live on the partner hub linked in the footer. {org.legalName} is the 501(c)(3).
          </p>
          <p>
            <a className="btn btn-primary" href={mailto({ subject: 'Access point' })}>
              Become an access point
            </a>
          </p>
        </div>
      </section>
    </>
  )
}
