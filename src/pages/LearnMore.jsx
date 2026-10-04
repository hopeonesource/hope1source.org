import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero.jsx'
import Seo from '../components/Seo.jsx'
import { org } from '../content/org.js'

const supports = [
  {
    title: 'Collect feedback',
    text: 'Securely collect feedback on your services.',
    watch: 'https://www.youtube.com/watch?v=OmHWfx-0Rmo',
    watchTitle: 'Get relevant feedback from people who have accessed your services',
  },
  {
    title: 'Stay connected',
    text: 'Engage the people you serve, plus volunteers and staff.',
    watch: 'https://www.youtube.com/watch?v=1jeHvos9PHI',
    watchTitle: 'Stay connected with the people you serve, volunteers, and staff',
  },
  {
    title: 'Share your services',
    text: 'Reach verified people who need them.',
    watch: 'https://www.youtube.com/watch?v=nmrcfKIA1lI',
    watchTitle: 'Spread info about your services to people who need them most',
  },
  {
    title: 'Collect with less busy work',
    text: 'Securely gather information from the people you serve.',
    watch: 'https://www.youtube.com/watch?v=X6DwapkzU6I',
    watchTitle: 'Easily and safely collect relevant info from the people you serve',
  },
  {
    title: 'See unmet needs',
    text: 'Real-time reporting. The partner page calls these insights HIPAA compliant.',
    watch: 'https://www.youtube.com/watch?v=sI60Z1-l870',
    watchTitle: 'Get automatic reporting and data insights on those you serve',
  },
]

export default function LearnMore() {
  return (
    <>
      <Seo
        title="How we support partners"
        description="Hope1Source Check-ins connects partners to a verified network: feedback, outreach, and reporting. Hope with Love is the 501(c)(3)."
      />
      <PageHero
        kicker={org.brand}
        title="How we support partners."
        lede="A verified network to connect people and services with dignity, security, and ease."
      />
      <section className="section">
        <div className="wrap">
          <p className="hero-note">
            Already a partner? <a href={org.portalUrl}>Log in</a>. {org.legalName} is the 501(c)(3).
          </p>
          <div className="role-detail">
            {supports.map((item) => (
              <article key={item.title}>
                <h2>{item.title}</h2>
                <p>{item.text}</p>
                <p>
                  <a
                    href={item.watch}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Watch: ${item.watchTitle}`}
                  >
                    Watch
                  </a>
                </p>
              </article>
            ))}
          </div>
          <div className="hero-actions">
            <Link className="btn btn-primary" to="/outreach-tools">
              How outreach works
            </Link>
            <Link className="btn btn-secondary" to="/get-involved">
              Get involved
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
