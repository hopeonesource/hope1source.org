import { Link } from 'react-router-dom'
import MissionWash from '../components/MissionWash.jsx'
import Seo from '../components/Seo.jsx'
import { StoryCard } from '../components/StoryCards.jsx'
import { org } from '../content/org.js'
import { stories } from '../content/stories.js'
import { mailto, publicUrl } from '../lib/links.js'

const shelter = stories.filter((story) => story.slug === 'emergency-shelter-alerts')
const dreamers = stories.find((story) => story.slug === 'dreamers-and-achievers')
const followUps = dreamers?.metrics?.find((row) => row.label === 'Experience follow-ups')

const steps = [
  {
    title: 'Collect',
    text: 'Securely gather the latest information from the people you serve, staff, and volunteers.',
  },
  {
    title: 'Engage',
    text: 'Instant, direct, secure messages. Referrals to nearby services, and feedback on a recent experience.',
  },
  {
    title: 'Follow up',
    text: 'Welcome new people, follow up, and connect them to the verified network.',
  },
]

export default function OutreachTools() {
  return (
    <>
      <Seo
        title="Outreach tools"
        description="Text outreach from H1S Check-ins. Published reach, a partner’s 54-person week, and nearly 80% fewer hypothermia deaths in D.C."
      />

      <section className="hero">
        <div className="hero-photo">
          <img src={publicUrl('photos/homepage-hero.jpg')} alt="" />
        </div>
        <MissionWash tone="home" />
        <div className="wrap hero-copy">
          <p className="kicker">{org.product}</p>
          <h1>Easier outreach.</h1>
          <p className="lede">
            Meaningful conversations by text, shaped to each person’s experience. It fits the process you already use.
          </p>
          <div className="hero-actions">
            <Link className="btn btn-primary" to="/get-involved">
              Get started
            </Link>
            <a className="btn btn-secondary" href={mailto({ subject: 'Outreach tools' })}>
              Email us
            </a>
          </div>
          <p className="hero-note">
            For people who <Link to="/for-providers">run a program</Link> or <Link to="/for-venues">host people</Link>.
            Already a partner? <a href={org.portalUrl}>Log in</a>.
          </p>
        </div>
      </section>

      <div className="horizon" aria-hidden="true" />

      <section className="section stories-section" aria-labelledby="outreach-proof">
        <div className="wrap">
          <h2 id="outreach-proof">Published proof</h2>
          <div className="story-cards">
            {shelter.map((story) => (
              <StoryCard key={story.slug} story={story} />
            ))}
            <article className="story-card proof-tile">
              <p className="proof-figure">100%</p>
              <h3>Reach</h3>
              <p>As published on the outreach tools page.</p>
            </article>
            <article className="story-card proof-tile">
              <p className="proof-figure">90%</p>
              <h3>Open rate in the first four minutes</h3>
              <p>As published on the outreach tools page.</p>
            </article>
          </div>
          <figure className="evidence-quote">
            <blockquote>
              <p>Their (H1S) outreach tools are very convenient and effective. We grew by 54 people last week.</p>
            </blockquote>
            <footer>Jennifer Franklin, Total Family Care Coalition, as published on the outreach tools page</footer>
          </figure>
          {followUps ? (
            <p className="proof-source">
              {dreamers.org} reported experience follow-ups from {followUps.before} to {followUps.after} after joining
              the network. Partner-reported. The graphic does not show years.{' '}
              <Link to={`/case-studies/${dreamers.slug}`}>Read the story</Link>
            </p>
          ) : null}
        </div>
      </section>

      <section className="doors-section" aria-labelledby="outreach-steps">
        <div className="wrap">
          <h2 id="outreach-steps">How it works</h2>
          <div className="door-row">
            {steps.map((step, index) => (
              <article key={step.title} className="door">
                <span className="door-index" aria-hidden="true">
                  0{index + 1}
                </span>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </article>
            ))}
          </div>
          <figure className="product-shot">
            <img src={publicUrl('photos/phone-checkins.png')} alt="Phone showing an H1S Check-ins screen." />
          </figure>
          <p className="hero-note">
            Text also works with email, QR codes, Facebook, and WhatsApp. No download. {org.brand}. {org.legalName} is
            the 501(c)(3).
          </p>
        </div>
      </section>

      <section className="cause-band" aria-labelledby="outreach-cta">
        <div className="wrap cause-inner">
          <div>
            <h2 id="outreach-cta">Start outreach</h2>
            <p>Tell us whether you run a program or host people.</p>
          </div>
          <Link className="btn btn-primary" to="/get-involved">
            Get started
          </Link>
        </div>
      </section>
    </>
  )
}
