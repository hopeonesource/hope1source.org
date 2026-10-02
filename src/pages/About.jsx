import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero.jsx'
import Seo from '../components/Seo.jsx'
import { org } from '../content/org.js'
import { publicUrl } from '../lib/links.js'

const phoneQuery = '(max-width: 720px)'

/** True on a phone-width screen. Desktop keeps every section open. */
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

/**
 * On a phone, each block is a closed disclosure so the page starts short.
 * On a wider screen it is a normal heading and the paragraphs stay visible.
 * The key remounts the control when the breakpoint changes, so a phone
 * starts collapsed and a desktop starts open without fighting the tap.
 */
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
        <span className="about-fold-shut">Read more</span>
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
        description="Hope1Source Check-ins connects people and verified services with dignity, security, and ease. Hope with Love is the 501(c)(3)."
      />
      <PageHero
        kicker="Our mission"
        title="Connecting people and services with a great experience."
        lede={org.missionLine}
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
            alt="Hope1Source team gathered around a table, from the live about page."
          />
          <p className="about-lead">
            {org.brand} is the program. {org.legalName} is the 501(c)(3).
          </p>
          <AboutFold title="Mission" phone={phone}>
            <p>
              {org.brand} is the program. {org.legalName} is the 501(c)(3) that operates it, also written{' '}
              {org.programLegacy}. The aim, as the organization has stated it, is to connect people to verified services
              they need with dignity, security, and ease.
            </p>
          </AboutFold>
          <AboutFold title="How the work happens" phone={phone}>
            <p>
              Service providers get outreach tools so they can talk with people they already serve, or with the public
              they hope to reach, and see the data they need for reporting and funding. Venues use the same check-in
              idea in a room. Backers fund the network. Those are the three doors.
            </p>
          </AboutFold>
          <AboutFold title="Beginnings" phone={phone}>
            <p>
              {org.program} started in Haiti in 2010. The goal was to use widely available cell phones to connect local
              services and unmet needs with medical providers after the earthquake.
            </p>
            <p>
              In 2015, founder Tim Underwood and his wife Allie spent four days and three nights experiencing
              homelessness in Washington, D.C. They found a familiar gap: a simple way to connect people with verified
              nearby services. At the request of the D.C. government, the team began adapting the tool. It expanded from
              there. During the COVID-19 pandemic, Tim left his federal job to lead the work full time.
            </p>
            <p>
              A December 2024 public FAQ said the network was supporting a growing number of partners in 24 communities,
              from a base in the Washington, D.C. metro.
            </p>
          </AboutFold>
          <AboutFold title="What this website is" phone={phone}>
            <p>
              hope1source.org is the mission and trust home: story, team, legal drafts, gifts, and resource guides that
              can hold an ad without turning into a sales page. The Check-ins product hub is linked once, in the footer.
              Teams who already have access use the portal to log in.
            </p>
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
