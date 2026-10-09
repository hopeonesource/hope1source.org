import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero.jsx'
import Seo from '../components/Seo.jsx'
import { org } from '../content/org.js'
import { stories } from '../content/stories.js'
import { mailto } from '../lib/links.js'

const dreamers = stories.find((story) => story.slug === 'dreamers-and-achievers')

export default function ForBackers() {
  return (
    <>
      <Seo
        title="Fund prevention you can measure."
        description="Gifts go to Hope with Love, a 501(c)(3), through Every.org. Partners report what changed."
      />
      <PageHero
        kicker="Funders"
        title="Fund prevention you can measure."
        lede="Partners use Hope1Source to reach people before harm happens, and report what changed. Gifts go to Hope with Love, a 501(c)(3), through Every.org."
      >
        <div className="hero-actions">
          <a className="btn btn-primary" href={org.donateUrl}>
            Donate on Every.org
          </a>
          <a className="btn btn-secondary" href={mailto({ subject: 'Funding a city' })}>
            Talk about funding a city
          </a>
        </div>
      </PageHero>
      <section className="section">
        <div className="wrap narrow prose">
          <h2>Proof</h2>
          <ul>
            <li>Published in the Journal of Public Health.</li>
            <li>DC Human Services adopted the alert approach we brought for weather alerts.</li>
            <li>Dreamers & Achievers reported follow-ups growing from 60 to 1,400 people.</li>
          </ul>
          {dreamers ? (
            <figure className="evidence-quote">
              <blockquote>
                <p>{dreamers.quote}</p>
              </blockquote>
              <footer>{dreamers.quoteAttribution}</footer>
            </figure>
          ) : null}
          <p>
            <Link to="/case-studies/veterans-affairs-national-homeless-programs">Read the veterans story</Link>
          </p>
          <p>
            <Link to="/case-studies/emergency-shelter-alerts">Read the shelter alerts story</Link>
          </p>
          <p>We provided the technical assistance to help measure what matters.</p>
          <p>{org.procurement}</p>
        </div>
      </section>
    </>
  )
}
