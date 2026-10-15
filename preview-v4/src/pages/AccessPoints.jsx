import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero.jsx'
import Seo from '../components/Seo.jsx'
import { howSteps } from '../components/HowItWorks.jsx'
import { mailto } from '../lib/links.js'

const accessSteps = howSteps.map((step) =>
  step.title === 'Follow up'
    ? { ...step, title: 'Repeat', text: 'Use what you learn to understand what changed and follow up.' }
    : step,
)

export default function AccessPoints() {
  return (
    <>
      <Seo
        title="Your front desk can be where people find help."
        description="A QR code, NFC tap, or kiosk lets visitors ask for help privately. Everything is built with the latest AWS security to maintain trust. Congregations, libraries, community centers, and food sites."
      />
      <PageHero
        kicker="Trusted access points"
        title="Your front desk can be where people find help."
        lede="A QR code, NFC tap, or kiosk lets visitors ask for help privately. Your team follows up. Everything is built with the latest AWS security to maintain trust."
      >
        <p className="hero-note">No app or internet needed.</p>
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
                <p>People come to you first. Help them connect with support through a simple check-in.</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="section section-tight">
        <div className="wrap narrow prose">
          <h2>Connect. Listen. Repeat.</h2>
          <p>No app. Any phone. People choose to take part.</p>
          <ol>
            {accessSteps.map((step) => (
              <li key={step.title}>
                <strong>{step.title}.</strong> {step.text}
              </li>
            ))}
          </ol>
          <p>
            All partners must provide free or discounted services. They own their check-in data and can filter, sort,
            or delete it at any time.
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
