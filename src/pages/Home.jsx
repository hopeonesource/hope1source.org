import { useMemo } from 'react'
import { Link } from 'react-router-dom'
import Seo, { absoluteUrl } from '../components/Seo.jsx'
import { org } from '../content/org.js'
import { roles } from '../content/roles.js'
import { stories } from '../content/stories.js'

const quotes = [
  {
    text: 'Second Harvest Asia partnered with H1S to help Japan’s first food bank transition from an analog system in which each recipient needed to be verified before using the pantry to an online system in which validation was immediate. H1S also provides opportunities to introduce new services, automate future outreach, and collect vital real-time data needed for management and donors.',
    name: 'Charles McJilton',
    detail: 'Founder, Second Harvest Asia',
  },
  {
    text: 'Our partnership with H1S has achieved incredible results that quickly doubled our 5-star reviews. We continue to grow and our customers are happier with our continuous improvements.',
    name: 'Meron Haile',
    detail: 'Co-founder, Meda',
  },
]

const namedOnPriorSite = ['Shake Shack', 'United Way', 'Second Harvest Asia']

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
        title="People tell partners what they won’t say out loud"
        description="We help those partners follow through — and show the good that follows. Check-ins stay private. Hope With Love is a 501(c)(3)."
        jsonLd={jsonLd}
      />

      <section className="hero">
        <div className="wrap hero-grid">
          <div className="hero-copy">
            <p className="kicker">Hope With Love · a 501(c)(3)</p>
            <h1>
              People tell partners what they won’t say out loud.
              <span>We help those partners follow through — and show the good that follows.</span>
            </h1>
            <p className="lede">
              Check-ins stay private. Partners follow up with the person in front of them. Praise, and other proof, can
              be public when that is the right thing to share.
            </p>
            <div className="hero-actions">
              <a className="btn btn-primary" href="#doors">
                See how to take part
              </a>
              <Link className="btn btn-secondary" to="/contact">
                Contact partnerships
              </Link>
            </div>
            <p className="hero-note">
              Already working with us? <a href={org.portalUrl}>Log in</a>. Gifts are further down this page.
            </p>
          </div>

          <aside className="hero-panel" aria-label="Three ways to take part">
            <p className="panel-label">Three ways in</p>
            <ol>
              {roles.map((role, index) => (
                <li key={role.id}>
                  <Link to={role.path}>
                    <span className="panel-index">0{index + 1}</span>
                    <span>
                      <strong>{role.nav}</strong>
                      <span>{role.panel}</span>
                    </span>
                  </Link>
                </li>
              ))}
            </ol>
          </aside>
        </div>
      </section>

      <section className="section" aria-labelledby="stories-title">
        <div className="wrap">
          <div className="section-head">
            <p className="kicker">What has already happened</p>
            <h2 id="stories-title">Three stories we can stand behind.</h2>
            <p>
              Each one is already public. The numbers and quotes below are the ones on those pages. We did not add new
              results.
            </p>
          </div>
          <div className="story-cards">
            {stories.map((story) => (
              <article key={story.slug}>
                <p className="kicker">{story.org}</p>
                <h3>
                  <Link to={`/case-studies/${story.slug}`}>{story.title}</Link>
                </h3>
                <p>{story.home}</p>
                <Link className="text-link" to={`/case-studies/${story.slug}`}>
                  Read the story
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-tight" id="doors">
        <div className="wrap">
          <div className="section-head">
            <p className="kicker">How to take part</p>
            <h2>Start with the work you do.</h2>
            <p>
              If you need a meal, a bed, or care, use the resource guides at the bottom of this page. If you run a
              program, host people, or fund the work, start here.
            </p>
          </div>
          <div className="role-row">
            {roles.map((role) => (
              <article key={role.id} className="role-card">
                <h3>{role.nav}</h3>
                <p>{role.lede}</p>
                <Link className="text-link" to={role.path}>
                  Read more
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="quote-band" id="proof" aria-labelledby="proof-title">
        <div className="wrap">
          <div className="section-head light">
            <p className="kicker">In their words</p>
            <h2 id="proof-title">Partners, on the work itself.</h2>
            <p>These lines were on the previous Hope1Source homepage. They are not new interviews.</p>
          </div>
          <div className="quote-grid">
            {quotes.map((quote) => (
              <figure key={quote.name}>
                <blockquote>
                  <p>{quote.text}</p>
                </blockquote>
                <figcaption>
                  <strong>{quote.name}</strong>
                  <span>{quote.detail}</span>
                </figcaption>
              </figure>
            ))}
          </div>
          <p className="named-row">
            <span>Also named on that homepage</span>
            {namedOnPriorSite.map((name) => (
              <span key={name} className="name-pill">
                {name}
              </span>
            ))}
          </p>
        </div>
      </section>

      <section className="section section-tight">
        <div className="wrap fact-row" aria-label="Program origin">
          <article>
            <p className="fact-year">2010</p>
            <h3>Haiti</h3>
            <p>The program started after the earthquake, using ordinary phones to connect local services and unmet needs.</p>
          </article>
          <article>
            <p className="fact-year">2015</p>
            <h3>The District</h3>
            <p>A public-sector pilot grew from a simple gap: nearby, verified help, delivered without a maze.</p>
          </article>
          <article>
            <p className="fact-year">Now</p>
            <h3>One network</h3>
            <p>Programs, hosts, and funders share the same check-in. This site tells the mission.</p>
          </article>
        </div>
      </section>

      <section className="cause-band" aria-labelledby="cause-title">
        <div className="wrap cause-inner">
          <div>
            <p className="kicker">The cause</p>
            <h2 id="cause-title">Hope With Love can take a gift.</h2>
            <p>
              When you are ready, Every.org receives the gift for Hope With Love. A check can go to the Arlington
              address after that address is confirmed.
            </p>
          </div>
          <Link className="btn btn-primary" to="/donate">
            Ways to give
          </Link>
        </div>
      </section>
    </>
  )
}
