import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero.jsx'
import Seo from '../components/Seo.jsx'
import { org } from '../content/org.js'
import { mailto } from '../lib/links.js'

const paths = [
  {
    title: 'If you run a program',
    text: 'Tell people where help is, hear back, and show what changed.',
    to: '/for-providers',
    linkLabel: 'See the program page',
    href: mailto({ subject: 'Provider partnership' }),
  },
  {
    title: 'If people come to you',
    text: 'Congregations, libraries, community centers, and food sites can be where people find help.',
    to: '/access-points',
    linkLabel: 'Become an access point',
    href: mailto({ subject: 'Access point' }),
  },
  {
    title: 'Volunteers',
    text: 'Help keep neighbors safe with the skills you have.',
    to: '/contact',
    linkLabel: 'Write partnerships',
    href: mailto({ subject: 'Volunteer interest' }),
  },
  {
    title: 'If you fund the work',
    text: 'Fund prevention you can measure.',
    to: '/for-backers',
    linkLabel: 'See the funder page',
    href: mailto({ subject: 'Funding a city' }),
  },
]

export default function GetInvolved() {
  return (
    <>
      <Seo
        title="Get involved"
        description="Run a program, host an access point, volunteer, or fund prevention you can measure."
      />
      <PageHero
        kicker="Get involved"
        title="Pick the seat you actually occupy."
        lede="Run a program, host a front desk, volunteer, or fund the work."
      />
      <section className="section">
        <div className="wrap path-grid">
          {paths.map((path) => (
            <article key={path.title} className="path-card">
              <h2>{path.title}</h2>
              <p>{path.text}</p>
              <div className="path-actions">
                <Link className="text-link" to={path.to}>
                  {path.linkLabel}
                </Link>
                <a className="text-link" href={path.href}>
                  Email us
                </a>
              </div>
            </article>
          ))}
        </div>
        <div className="wrap narrow prose path-note">
          <h2>What your time changes</h2>
          <p>
            Support helps people who opted in connect with services. Community outreach looks for local partners.
            Technical volunteers help partners improve the experience of the people who use their services.
          </p>
          <p>
            Press inquiries can use <Link to="/press">the press index</Link> or email {org.email}.
          </p>
        </div>
      </section>
    </>
  )
}
