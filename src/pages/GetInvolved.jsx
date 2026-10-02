import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero.jsx'
import Seo from '../components/Seo.jsx'
import { org } from '../content/org.js'
import { mailto } from '../lib/links.js'

const paths = [
  {
    title: 'Providers',
    text: 'Bring a program you already operate. Check-ins and outreach should strengthen that work, not replace your judgment.',
    to: '/for-providers',
    href: mailto({ subject: 'Provider partnership' }),
    action: 'Email as a provider',
  },
  {
    title: 'Venues',
    text: 'A dining room, a merch table, a lobby, an open house. Private friction, public praise, then a cause if it belongs.',
    to: '/for-venues',
    href: mailto({ subject: 'Venue partnership' }),
    action: 'Email as a venue',
  },
  {
    title: 'Volunteers',
    text: 'Community outreach and technical help have both mattered. Write with the skill you actually have and the time you actually have.',
    to: '/contact',
    href: mailto({ subject: 'Volunteer interest' }),
    action: 'Email as a volunteer',
  },
  {
    title: 'Backers',
    text: 'Sponsor the network or make a gift. Online gifts go to Every.org. Larger partnerships start in the inbox.',
    to: '/for-backers',
    href: mailto({ subject: 'Backer or sponsorship conversation' }),
    action: 'Email as a backer',
  },
]

export default function GetInvolved() {
  return (
    <>
      <Seo
        title="Get involved"
        description="Partner, volunteer, or fund Hope With Love. Providers, venues, volunteers, and backers each have a next step."
      />
      <PageHero
        kicker="Get involved"
        title="Pick the seat you actually occupy."
        lede="The prior page invited service providers and volunteers in one form. This page separates the roles so a restaurant, a shelter, a volunteer, and a sponsor are not asked the same first question."
      />
      <section className="section">
        <div className="wrap path-grid">
          {paths.map((path) => (
            <article key={path.title} className="path-card">
              <h2>{path.title}</h2>
              <p>{path.text}</p>
              <div className="path-actions">
                <Link className="text-link" to={path.to}>
                  Read the door
                </Link>
                <a className="text-link" href={path.href}>
                  {path.action}
                </a>
              </div>
            </article>
          ))}
        </div>
        <div className="wrap narrow prose path-note">
          <h2>What your time changes</h2>
          <p>
            The public get-involved page said support helps verified people and services connect, and that community
            outreach was aimed at a wider set of local partners. Technical volunteers help partners improve the
            experience of the people who use their services. There is no open hackathon listed here, because the old
            page did not publish one you can still join.
          </p>
          <p>
            Press inquiries can use <Link to="/press">the press index</Link> or email {org.email}.
          </p>
        </div>
      </section>
    </>
  )
}
