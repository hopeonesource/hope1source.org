import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero.jsx'
import Seo from '../components/Seo.jsx'
import { org } from '../content/org.js'
import { publicUrl } from '../lib/links.js'

const phoneQuery = '(max-width: 720px)'
const [operator, registration] = org.procurement.split(/ (?=SAM\.gov)/)

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
          <figure className="about-figure">
            <img
              className="about-photo"
              src={publicUrl('photos/h1s-portsmouth-community-2023.jpg')}
              alt="Community members and partners gathered beside the H1S outreach van at a Portsmouth STEM event."
              width="1440"
              height="1080"
              loading="lazy"
              decoding="async"
            />
            <figcaption>
              H1S and community partners at a Portsmouth STEM event, 2023.{' '}
              <a
                href="https://www.facebook.com/hopewithlove/posts/pfbid0DrmxSxm5832z3bWH56PvYkhyF6Y8v2ZZ4rPAZN7gB16Ecmqker5EXpULaptMuhqel"
                target="_blank"
                rel="noopener noreferrer"
              >
                View original post
              </a>.
            </figcaption>
          </figure>
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
            <ul className="about-audiences">
              <li>
                Public agencies, shelters, and program leads use the tools to reach people other channels miss.{' '}
                <Link to="/public-agencies">Read the agency facts</Link>.
              </li>
              <li>
                Congregations, libraries, community centers, and food sites can be the place people ask for help.{' '}
                <Link to="/access-points">Become an access point</Link>.
              </li>
              <li>
                Restaurants and other businesses can offer free or discounted services, gather feedback, and stay
                connected through H1S Check-ins. <Link to="/contact">Evaluate a business partnership</Link>.
              </li>
              <li>
                Corporate sponsors can support service providers and bring their teams together through volunteer
                outreach for community connection and team building.{' '}
                <Link to="/corporate-sponsors">Explore corporate sponsorship</Link>.
              </li>
              <li>
                Funders can back prevention they can measure. <Link to="/for-backers">See the funder page</Link>.
              </li>
            </ul>
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
            <p>{operator}</p>
            <p>{registration}</p>
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
