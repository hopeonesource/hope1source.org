import { Link } from 'react-router-dom'
import MissionWash from '../components/MissionWash.jsx'
import Seo from '../components/Seo.jsx'
import StoryCards from '../components/StoryCards.jsx'
import { org } from '../content/org.js'
import { stories } from '../content/stories.js'
import { publicUrl } from '../lib/links.js'

const dreamers = stories.find((story) => story.slug === 'dreamers-and-achievers')

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
        description="Published partner results: nearly 80% fewer hypothermia deaths, barriers removed in 30 communities, and a 5× budget. Hope with Love is the 501(c)(3)."
      />

      <section className="hero">
        <div className="hero-photo is-team">
          <img src={publicUrl('photos/hos-team.jpg')} alt="" />
        </div>
        <MissionWash tone="home" />
        <div className="wrap hero-copy">
          <p className="kicker">{org.brand}</p>
          <h1>How we support.</h1>
          <p className="lede">A verified network to connect people and services with dignity, security, and ease.</p>
          <div className="hero-actions">
            <Link className="btn btn-primary" to="/outreach-tools">
              How outreach works
            </Link>
            <Link className="btn btn-secondary" to="/get-involved">
              Get involved
            </Link>
          </div>
          <p className="hero-note">
            Already a partner? <a href={org.portalUrl}>Log in</a>. {org.legalName} is the 501(c)(3).
          </p>
        </div>
      </section>

      <div className="horizon" aria-hidden="true" />

      <section className="section stories-section" aria-labelledby="partner-proof">
        <div className="wrap">
          <h2 id="partner-proof">Published results</h2>
          <StoryCards stories={stories} />
          {dreamers?.metrics?.length ? (
            <figure className="metric-set partner-metrics">
              <figcaption>
                {dreamers.org}. {dreamers.metricsCaption}
              </figcaption>
              <table>
                <thead>
                  <tr>
                    <th scope="col">Measure</th>
                    <th scope="col">Before</th>
                    <th scope="col">After</th>
                  </tr>
                </thead>
                <tbody>
                  {dreamers.metrics.map((row) => (
                    <tr key={row.label}>
                      <th scope="row">{row.label}</th>
                      <td>{row.before}</td>
                      <td>{row.after}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </figure>
          ) : null}
          <p className="proof-source">
            Outreach cites 100% reach and a 90% open rate in the first four minutes.{' '}
            <Link to="/outreach-tools">See outreach tools</Link>
          </p>
        </div>
      </section>

      <section className="doors-section" aria-labelledby="partner-tools">
        <div className="wrap">
          <h2 id="partner-tools">What partners use</h2>
          <div className="door-row">
            {supports.map((item, index) => (
              <article key={item.title} className="door">
                <span className="door-index" aria-hidden="true">
                  0{index + 1}
                </span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
                <a
                  className="door-go"
                  href={item.watch}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Watch: ${item.watchTitle}`}
                >
                  Watch
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="cause-band" aria-labelledby="partner-cta">
        <div className="wrap cause-inner">
          <div>
            <h2 id="partner-cta">Bring this to your program</h2>
            <p>Outreach, check-ins, and a conversation with partnerships.</p>
          </div>
          <Link className="btn btn-primary" to="/get-involved">
            Get involved
          </Link>
        </div>
      </section>
    </>
  )
}
