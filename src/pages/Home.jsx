import { useMemo } from 'react'
import { Link } from 'react-router-dom'
import MissionWash from '../components/MissionWash.jsx'
import Seo, { absoluteUrl } from '../components/Seo.jsx'
import { org } from '../content/org.js'
import { roles } from '../content/roles.js'
import { stories } from '../content/stories.js'

export default function Home() {
  const jsonLd = useMemo(
    () => ({
      '@context': 'https://schema.org',
      '@type': 'NGO',
      name: org.legalName,
      alternateName: [org.program, org.programLegacy, org.product],
      url: absoluteUrl('/'),
      email: org.email,
      telephone: org.phoneTel,
      nonprofitStatus: 'Nonprofit501c3',
      address: {
        '@type': 'PostalAddress',
        streetAddress: org.street,
        addressLocality: org.city,
        addressRegion: org.region,
        postalCode: org.postal,
        addressCountry: 'US',
      },
    }),
    [],
  )

  return (
    <>
      <Seo
        title="Earn trust."
        description="We help partners serve people with care, and show the impact that follows."
        jsonLd={jsonLd}
      />

      <section className="hero">
        <MissionWash tone="home" />
        <div className="wrap hero-copy">
          <p className="kicker">Hope With Love · a 501(c)(3)</p>
          <h1>Earn trust.</h1>
          <p className="lede">We help partners serve people with care, and show the impact that follows.</p>
          <div className="hero-actions">
            <a className="btn btn-primary" href="#doors">
              Take part
            </a>
            <Link className="btn btn-secondary" to="/contact">
              Contact partnerships
            </Link>
          </div>
          <p className="hero-note">
            Already working with us? <a href={org.portalUrl}>Log in</a>.
          </p>
        </div>
      </section>

      <div className="horizon" aria-hidden="true" />

      <section className="section stories-section" aria-labelledby="stories-title">
        <div className="wrap">
          <h2 id="stories-title">Stories</h2>
          <div className="story-cards">
            {stories.map((story, index) => (
              <article key={story.slug} className="story-card">
                <p className="story-num" aria-hidden="true">
                  0{index + 1}
                </p>
                <h3>
                  <Link to={`/case-studies/${story.slug}`}>{story.cardTitle}</Link>
                </h3>
                <p>{story.card}</p>
                <Link className="text-link" to={`/case-studies/${story.slug}`}>
                  Read
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="doors-section" id="doors">
        <div className="wrap">
          <h2>Take part</h2>
          <div className="door-row">
            {roles.map((role, index) => (
              <Link key={role.id} className={`door door-${role.id}`} to={role.path}>
                <span className="door-index" aria-hidden="true">
                  0{index + 1}
                </span>
                <h3>{role.nav}</h3>
                <p>{role.lede}</p>
                <span className="door-go">Open</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="cause-band" aria-labelledby="cause-title">
        <div className="wrap cause-inner">
          <div>
            <h2 id="cause-title">Give</h2>
            <p>Gifts to Hope With Love go through Every.org.</p>
          </div>
          <Link className="btn btn-primary" to="/donate">
            Ways to give
          </Link>
        </div>
      </section>
    </>
  )
}
