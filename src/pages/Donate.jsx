import { Link } from 'react-router-dom'
import PageHero, { Confirm } from '../components/PageHero.jsx'
import Seo from '../components/Seo.jsx'
import { addressLines, org } from '../content/org.js'
import { mailto } from '../lib/links.js'

export default function Donate() {
  return (
    <>
      <Seo
        title="Donate"
        description="Give to Hope With Love through Every.org, or mail a check after the Arlington address is confirmed. This site does not run a checkout."
      />
      <PageHero
        kicker="Donate"
        title="Give through Every.org."
        lede="Hope With Love is an IRS-recognized 501(c)(3), as the organization has stated publicly. This page links to Every.org. It does not charge a card itself."
      >
        <p className="hero-actions">
          <a className="btn btn-primary" href={org.donateUrl} target="_blank" rel="noopener noreferrer">
            Donate on Every.org
          </a>
          <a className="btn btn-secondary" href={mailto({ subject: 'Question about a gift' })}>
            Ask about a gift
          </a>
        </p>
      </PageHero>

      <section className="section">
        <div className="wrap donate-grid">
          <div className="prose">
            <h2>What a gift supports</h2>
            <p>
              The prior donate page said gifts help partners send timely messages about extreme-weather alerts, mental
              health support, food, legal aid, job training, health screenings, and other nearby services — and help
              providers see what is happening in time to act.
            </p>
            <h2>Ways the last public page described giving</h2>
            <ol>
              <li>Online gifts are tax-deductible to the extent the law allows, because Hope With Love is a 501(c)(3).</li>
              <li>Ask your employer whether they match.</li>
              <li>
                The old page listed cash, crypto, stock, vehicles, RVs, and boats. Every.org decides which of those are
                actually enabled on the Hope With Love campaign. Confirm a vehicle or in-kind gift before you promise it.
              </li>
            </ol>
            <h2>Checks</h2>
            <address>
              {addressLines.map((line) => (
                <span key={line}>
                  {line}
                  <br />
                </span>
              ))}
            </address>
            <Confirm>
              Confirm {org.street}, {org.city}, {org.region} {org.postal} is still the right mailing address before you
              send a check.
            </Confirm>
            <p>
              Sponsorships and multi-year gifts are a conversation, not a form checkout.{' '}
              <Link to="/for-backers">The backer door</Link> is the longer version.
            </p>
          </div>
          <div className="embed-frame">
            <h2>Every.org</h2>
            <p>If the embed is blocked, the button above opens the same campaign in a new tab.</p>
            <iframe
              title="Donate to Hope With Love on Every.org"
              src={`${org.donateUrl}/donate/embed`}
              loading="lazy"
            />
          </div>
        </div>
      </section>
    </>
  )
}
