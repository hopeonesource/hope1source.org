import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero.jsx'
import Seo from '../components/Seo.jsx'
import { org } from '../content/org.js'
import { publicUrl } from '../lib/links.js'

const phoneQuery = '(max-width: 720px)'

function usePhone() {
  const [phone, setPhone] = useState(() => window.matchMedia(phoneQuery).matches)

  useEffect(() => {
    const query = window.matchMedia(phoneQuery)
    const update = () => setPhone(query.matches)
    update()
    query.addEventListener('change', update)
    return () => query.removeEventListener('change', update)
  }, [])

  return phone
}

function AboutFold({ title, phone, children }) {
  if (!phone) {
    return (
      <section>
        <h2>{title}</h2>
        {children}
      </section>
    )
  }

  return (
    <details className="about-fold">
      <summary>
        <span className="about-fold-title">{title}</span>
        <span className="about-fold-shut">Read this</span>
        <span className="about-fold-open">Close</span>
      </summary>
      <div className="about-fold-body">{children}</div>
    </details>
  )
}

export default function About() {
  const phone = usePhone()

  return (
    <div className="about-page">
      <Seo
        title="Our mission"
        description="H1S Check-ins makes it easier to connect resources to people who need them. People opt in. Hope with Love is the 501(c)(3)."
      />
      <PageHero
        kicker={org.product}
        title="Earn trust."
        lede="H1S Check-ins makes it easier to connect resources to people who need them. Dignity first. People opt in."
      />
      <article className="section prose-section">
        <div className="wrap narrow prose">
          <img
            className="about-logo"
            src={publicUrl('logo-hope-one-source.png')}
            alt="Hope One Source"
          />
          <img
            className="about-photo"
            src={publicUrl('photos/hos-team.jpg')}
            alt="Hope1Source team gathered around a table."
          />
          <p className="about-lead">
            {org.product}. {org.legalName} is the 501(c)(3).
          </p>
          <AboutFold title="Mission" phone={phone}>
            <p>
              Hope1Source provides tools that make it easier to connect resources to people who need them. Partners
              send opt-in alerts and check-ins, hear back privately, and follow up.
            </p>
            <p>
              Public safety here means preventing harm: cold, heat, storms, service closures, and gaps in care. It
              does not mean policing.
            </p>
          </AboutFold>
          <AboutFold title="How trust works" phone={phone}>
            <p>People opt in.</p>
            <p>Partners own their data.</p>
            <p>No app is needed. Any phone can take part.</p>
            <p>Dignity comes first. A sensitive service is never named in a text.</p>
          </AboutFold>
          <AboutFold title="Who it’s for" phone={phone}>
            <p>
              Public agencies, shelters, and program leads use the tools to reach people other channels miss.{' '}
              <Link to="/public-agencies">Read the agency facts</Link>.
            </p>
            <p>
              Congregations, libraries, community centers, and food sites can be the place people ask for help.{' '}
              <Link to="/access-points">Become an access point</Link>.
            </p>
            <p>
              Funders can back prevention they can measure. <Link to="/for-backers">See the funder page</Link>.
            </p>
          </AboutFold>
          <AboutFold title="The organization" phone={phone}>
            <p>
              {org.legalName} is the 501(c)(3) behind the program. The public name of the work is {org.product}, also
              written {org.program} and {org.programLegacy}.
            </p>
            <p>
              Tim Underwood co-founded this 501(c)(3) so partners could reach people and show what changed.
            </p>
            <p>{org.procurement}</p>
          </AboutFold>
          <p>
            <Link className="btn btn-primary" to="/team">
              Meet the team
            </Link>
          </p>
        </div>
      </article>
    </div>
  )
}
