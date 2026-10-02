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
        title="Private friction. Public praise."
        description="Hope With Love is the mission and trust home for Hope1Source. Partner doors for providers, venues, and backers — not a pricing page."
        jsonLd={jsonLd}
      />

      <section className="hero">
        <div className="wrap hero-grid">
          <div className="hero-copy">
            <p className="kicker">Hope With Love · a 501(c)(3)</p>
            <h1>
              Private friction. <em>Public praise.</em>
            </h1>
            <p className="lede">
              Partners hear what a guest or a client will not say out loud. The friction stays private. The praise,
              the follow-up, and the proof can be public.
            </p>
            <div className="hero-actions">
              <a className="btn btn-primary" href="#doors">
                Choose a partner door
              </a>
              <Link className="btn btn-secondary" to="/contact">
                Contact partnerships
              </Link>
            </div>
            <p className="hero-note">
              Already running check-ins? <a href={org.portalUrl}>Log in</a>. Gifts sit further down this page.
            </p>
          </div>

          <aside className="hero-panel" aria-label="Three partner roles">
            <p className="panel-label">Three doors</p>
            <ol>
              {roles.map((role, index) => (
                <li key={role.id}>
                  <Link to={role.path}>
                    <span className="panel-index">0{index + 1}</span>
                    <span>
                      <strong>{role.nav}</strong>
                      <span>{role.lede}</span>
                    </span>
                  </Link>
                </li>
              ))}
            </ol>
          </aside>
        </div>
      </section>

      <section className="section" id="doors">
        <div className="wrap">
          <div className="section-head">
            <p className="kicker">Who the homepage is for</p>
            <h2>Providers, venues, and backers.</h2>
            <p>
              People looking for a meal, a bed, or a clinic are not the front door of this site. They have quiet
              resource guides in the footer, written so an ad can land somewhere honest. The work of operating a
              service starts here.
            </p>
          </div>
          <div className="role-row">
            {roles.map((role) => (
              <article key={role.id} className="role-card">
                <h3>{role.nav}</h3>
                <p>{role.lede}</p>
                <Link className="text-link" to={role.path}>
                  {role.title}
                </Link>
              </article>
            ))}
          </div>
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
            <p>Providers, venues, and backers share the same check-in idea. The mission stays on this site.</p>
          </article>
        </div>
      </section>

      <section className="quote-band" id="proof" aria-labelledby="proof-title">
        <div className="wrap">
          <div className="section-head light">
            <p className="kicker">In their words</p>
            <h2 id="proof-title">Operator outcomes, as previously published.</h2>
            <p>
              These lines appeared on the prior Hope1Source homepage. They are partner accounts of operations, not new
              interviews collected for this redesign.
            </p>
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
            <span>Also named on that homepage:</span>
            {namedOnPriorSite.map((name) => (
              <span key={name} className="name-pill">
                {name}
              </span>
            ))}
          </p>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="section-head">
            <p className="kicker">Case studies</p>
            <h2>Three public stories.</h2>
            <p>Each one stops where the old case-study page stopped. No extra metrics were added.</p>
          </div>
          <ol className="story-index">
            {stories.map((story, index) => (
              <li key={story.slug}>
                <Link to={`/case-studies/${story.slug}`}>
                  <span className="story-index-num">0{index + 1}</span>
                  <span>
                    <strong>{story.title}</strong>
                    <span>{story.org}</span>
                  </span>
                  <span className="story-go" aria-hidden="true">
                    Read
                  </span>
                </Link>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="cause-band" aria-labelledby="cause-title">
        <div className="wrap cause-inner">
          <div>
            <p className="kicker">The cause</p>
            <h2 id="cause-title">Hope With Love can take a gift.</h2>
            <p>
              Donations are not the headline of this site. When you are ready, Every.org handles the transaction for
              Hope With Love. Checks use the Arlington address after it is confirmed.
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
