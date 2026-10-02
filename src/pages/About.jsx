import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero.jsx'
import Seo from '../components/Seo.jsx'
import { org } from '../content/org.js'
import { publicUrl } from '../lib/links.js'

export default function About() {
  return (
    <>
      <Seo
        title="Our mission"
        description="Hope1Source is a social-impact program of Hope With Love, a 501(c)(3). The work connects people and verified services with dignity, security, and ease."
      />
      <PageHero
        kicker="Our mission"
        title="Connecting people and services with a great experience."
        lede={org.missionLine}
      />
      <article className="section prose-section">
        <div className="wrap narrow prose">
          <img
            className="about-photo"
            src={publicUrl('photos/hos-team.jpg')}
            alt="Hope1Source team gathered around a table, from the live about page."
          />
          <h2>Mission</h2>
          <p>
            {org.programLegacy} is a social-impact program powered by {org.legalName}, a 501(c)(3) nonprofit that uses
            outreach technology for good. The aim, as the organization has stated it, is to connect people to verified
            services they need with dignity, security, and ease.
          </p>
          <h2>How the work happens</h2>
          <p>
            Service providers get outreach tools so they can talk with people they already serve, or with the public
            they hope to reach, and see the data they need for reporting and funding. Venues use the same check-in
            idea in a room. Backers fund the network. Those are the three doors.
          </p>
          <h2>Beginnings</h2>
          <p>
            Hope1Source started in Haiti in 2010. The goal was to use widely available cell phones to connect local
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
          <h2>What this website is</h2>
          <p>
            hope1source.org is the mission and trust home: story, team, legal drafts, gifts, and resource guides that
            can hold an ad without turning into a sales page. The Check-ins product hub is linked once, in the footer.
            Teams who already have access use the portal to log in.
          </p>
          <p>
            <Link className="btn btn-primary" to="/team">
              Meet the team
            </Link>
          </p>
        </div>
      </article>
    </>
  )
}
