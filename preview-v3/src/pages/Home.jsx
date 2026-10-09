import { useMemo } from 'react'
import { Link } from 'react-router-dom'
import MissionWash from '../components/MissionWash.jsx'
import Seo, { absoluteUrl } from '../components/Seo.jsx'
import StoryCards from '../components/StoryCards.jsx'
import { howSteps } from '../components/HowItWorks.jsx'
import { org } from '../content/org.js'
import { roles } from '../content/roles.js'
import { stories } from '../content/stories.js'
import { publicUrl } from '../lib/links.js'

export default function Home() {
  const jsonLd = useMemo(
    () => ({
      '@context': 'https://schema.org',
      '@type': 'NGO',
      name: org.brand,
      legalName: org.legalName,
      alternateName: [org.program, org.product, org.programLegacy],
      url: absoluteUrl('/'),
      email: org.email,
      nonprofitStatus: 'Nonprofit501c3',
    }),
    [],
  )

  return (
    <>
      <Seo
        title="Earn trust."
        description="H1S Check-ins makes it easier to connect resources to people who need them. Dignity first. People opt in."
        jsonLd={jsonLd}
      />

      <section className="hero">
        <div className="hero-photo">
          <img src={publicUrl('photos/homepage-hero.jpg')} alt="" />
        </div>
        <MissionWash tone="home" />
        <div className="wrap hero-copy">
          <p className="kicker">{org.brand}</p>
          <h1>Earn trust.</h1>
          <p className="lede">
            H1S Check-ins makes it easier to connect resources to people who need them. Dignity first. People opt in.
          </p>
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
          <StoryCards stories={stories} />
          <p className="doors-support">
            <a href={stories[0].studyUrl}>See the veterans study</a>
          </p>
        </div>
      </section>

      <section className="cause-band" aria-labelledby="ready-title">
        <div className="wrap cause-inner">
          <div>
            <h2 id="ready-title">Cold nights are coming.</h2>
            <p>Can you reach everyone tonight?</p>
          </div>
          <Link className="btn btn-primary" to="/readiness">
            Plan your winter alerts
          </Link>
        </div>
      </section>

      <section className="doors-section" id="doors">
        <div className="wrap">
          <h2>Take part</h2>
          <div className="door-row">
            {roles.map((role, index) => (
              <Link key={role.id} className={`door door-${role.id}`} to={role.doorTo || role.path}>
                <span className="door-index" aria-hidden="true">
                  0{index + 1}
                </span>
                <h3>{role.nav}</h3>
                <p>{role.lede}</p>
                <span className="door-go">{role.doorLabel}</span>
              </Link>
            ))}
          </div>
          <p className="doors-support">
            <Link to="/learn-more">How we support partners</Link>
            <Link to="/public-agencies">Read the agency facts</Link>
          </p>
        </div>
      </section>

      <section className="section" aria-labelledby="how-title">
        <div className="wrap">
          <h2 id="how-title">Alert. Check in. Connect.</h2>
          <p>No app. Any phone. People choose to take part.</p>
          <div className="door-row">
            {howSteps.map((step, index) => (
              <article key={step.title} className="door">
                <span className="door-index" aria-hidden="true">
                  0{index + 1}
                </span>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </article>
            ))}
          </div>
          <p className="doors-support">
            <Link to="/outreach-tools">See how outreach works</Link>
          </p>
        </div>
      </section>

      <section className="cause-band" aria-labelledby="cause-title">
        <div className="wrap cause-inner">
          <div>
            <h2 id="cause-title">Give</h2>
            <p>Gifts go through Every.org to {org.legalName}, the 501(c)(3).</p>
          </div>
          <div className="hero-actions">
            <a className="btn btn-primary" href={org.donateUrl}>
              Donate on Every.org
            </a>
            <Link className="btn btn-secondary" to="/for-backers">
              Fund prevention you can measure
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
