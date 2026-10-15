import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero.jsx'
import Seo from '../components/Seo.jsx'
import { org } from '../content/org.js'
import { publicUrl } from '../lib/links.js'

const phoneQuery = '(max-width: 720px)'

function usePhone() {
  const [phone, setPhone] = useState(false)

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
        description="We train and equip those who serve others for lasting change. Opt-in check-in text messages for health, housing, human, and emergency services."
      />
      <PageHero
        kicker="HOPE1SOURCE (H1S) CHECK-INS"
        title="Earn Trust."
        lede="We train and equip those who serve others for lasting change."
      />
      <article className="section prose-section">
        <div className="wrap narrow prose">
          <img
            className="about-logo"
            src={publicUrl('logo-hope-one-source.png')}
            alt="Hope One Source"
            width="2500"
            height="805"
            decoding="async"
          />
          <img
            className="about-photo"
            src={publicUrl('photos/hos-team.jpg')}
            alt="Hope1Source team gathered around a table."
            width="1200"
            height="675"
            loading="lazy"
            decoding="async"
          />
          <p className="about-lead">
            {org.product}. {org.legalName} is the 501(c)(3).
          </p>
          <AboutFold title="Mission" phone={phone}>
            <p>
              Opt-in check-in text messages for health, housing, human, and emergency services.
            </p>
            <p>
              Connect. Listen. Repeat. Use what you learn to follow up and measure what matters.
            </p>
          </AboutFold>
          <AboutFold title="How trust works" phone={phone}>
            <p>People opt-in interested in free and discounted services or games.</p>
            <p>No app is needed; only a cell phone with text messages to earn rewards.</p>
            <p>Partners own and control their digital experience and service delivery.</p>
            <p>
              All partners must provide free or discounted services. They own their check-in data and can filter,
              sort, or delete it at any time.
            </p>
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
              Restaurants and other businesses can offer free or discounted services, gather feedback, and stay
              connected through H1S Check-ins. <Link to="/contact">Discuss a business partnership</Link>.
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
              Tim Underwood founded H1S to help service providers build trust, solve problems, and measure what
              matters for impact.
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
