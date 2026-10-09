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
    text: 'Hear what worked and what did not, from people who opted in.',
    watch: 'https://www.youtube.com/watch?v=OmHWfx-0Rmo',
    watchTitle: 'Get relevant feedback from people who have accessed your services',
  },
  {
    title: 'Stay connected',
    text: 'Stay in touch with the people you serve, plus volunteers and staff.',
    watch: 'https://www.youtube.com/watch?v=1jeHvos9PHI',
    watchTitle: 'Stay connected with the people you serve, volunteers, and staff',
  },
  {
    title: 'Share your services',
    text: 'Tell people who opted in where help is.',
    watch: 'https://www.youtube.com/watch?v=nmrcfKIA1lI',
    watchTitle: 'Spread info about your services to people who need them most',
  },
  {
    title: 'Collect with less busy work',
    text: 'Gather what you need from the people you serve.',
    watch: 'https://www.youtube.com/watch?v=X6DwapkzU6I',
    watchTitle: 'Easily and safely collect relevant info from the people you serve',
  },
  {
    title: 'See unmet needs',
    text: 'A report for the team that follows up.',
    watch: 'https://www.youtube.com/watch?v=sI60Z1-l870',
    watchTitle: 'Get automatic reporting and data insights on those you serve',
  },
]

export default function LearnMore() {
  return (
    <>
      <Seo
        title="How we support partners"
        description="A published study, a past weather-alert partnership, and partner-reported results from Dreamers and Achievers."
      />

      <section className="hero">
        <div className="hero-photo is-team">
          <img src={publicUrl('photos/hos-team.jpg')} alt="" />
        </div>
        <MissionWash tone="home" />
        <div className="wrap hero-copy">
          <p className="kicker">{org.brand}</p>
          <h1>How we support.</h1>
          <p className="lede">
            Tools that make it easier to connect resources to people who need them. People opt in.
          </p>
          <div className="hero-actions">
            <Link className="btn btn-primary" to="/outreach-tools">
              See how outreach works
            </Link>
            <Link className="btn btn-secondary" to="/get-involved">
              Pick a way to take part
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
          <h2 id="partner-proof">What changed</h2>
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
          {dreamers ? (
            <figure className="evidence-quote">
              <blockquote>
                <p>{dreamers.quote}</p>
              </blockquote>
              <footer>{dreamers.quoteAttribution}</footer>
            </figure>
          ) : null}
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
                  aria-label={`Play this film: ${item.watchTitle}`}
                >
                  Play this film
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
            <p>Outreach, check-ins, and a note to partnerships.</p>
          </div>
          <Link className="btn btn-primary" to="/get-involved">
            Pick a way to take part
          </Link>
        </div>
      </section>
    </>
  )
}
