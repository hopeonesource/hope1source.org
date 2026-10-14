import { Link } from 'react-router-dom'
import MissionWash from '../components/MissionWash.jsx'
import Seo from '../components/Seo.jsx'
import { howSteps } from '../components/HowItWorks.jsx'
import { StoryCard } from '../components/StoryCards.jsx'
import { org } from '../content/org.js'
import { stories } from '../content/stories.js'
import { mailto, publicUrl } from '../lib/links.js'

const proof = stories.filter((story) => story.slug !== 'dreamers-and-achievers')
const dreamers = stories.find((story) => story.slug === 'dreamers-and-achievers')

const offerings = [
  {
    title: 'SMS check-ins',
    text: 'Invite people to opt in to text messages, share what they need, and stay connected with your team.',
    to: '/for-providers',
    linkLabel: 'Check-ins for service providers',
  },
  {
    title: 'Emergency alerts',
    text: 'Share shelter, transportation, and service updates during cold, heat, storms, and closures.',
    to: '/readiness',
    linkLabel: 'Plan your alerts',
  },
  {
    title: 'Service feedback',
    text: 'Hear what worked, understand unmet needs, and use what you learn to improve services.',
    to: '/learn-more',
    linkLabel: 'See partner support and results',
  },
  {
    title: 'Outreach tools',
    text: 'Use a QR code, NFC tap, or kiosk at places people already visit to help them opt in and ask for support.',
    to: '/access-points',
    linkLabel: 'Explore access points',
  },
]

export default function OutreachTools() {
  return (
    <>
      <Seo
        title="SMS Check-ins, Emergency Alerts & Service Feedback"
        description="Explore H1S outreach tools for service providers: opt-in SMS check-ins, emergency alerts, service feedback, and QR, NFC, or kiosk access points."
      />

      <section className="hero">
        <div className="hero-photo">
          <img src={publicUrl('photos/homepage-hero.jpg')} alt="" width="1200" height="630" fetchPriority="high" />
        </div>
        <MissionWash tone="home" />
        <div className="wrap hero-copy">
          <p className="kicker">{org.product}</p>
          <h1>Reach. Listen. Follow up.</h1>
          <p className="lede">H1S Check-ins gives service providers outreach tools for opt-in SMS check-ins, emergency alerts, and service feedback. Stay connected, understand needs, and follow up.</p>
          <div className="hero-actions">
            <Link className="btn btn-primary" to="/contact">
              Request a partnership conversation
            </Link>
            <a className="btn btn-secondary" href={mailto({ subject: 'Live demo' })}>
              Request a live demo
            </a>
          </div>
          <p className="hero-note">
            For people who <Link to="/for-providers">run a program</Link> or{' '}
            <Link to="/access-points">host an access point</Link>. Already a partner?{' '}
            <a href={org.portalUrl}>Log in</a>.
          </p>
        </div>
      </section>

      <div className="horizon" aria-hidden="true" />

      <section className="section" aria-labelledby="outreach-offerings">
        <div className="wrap">
          <h2 id="outreach-offerings">Tools for staying connected</h2>
          <div className="door-row offerings-grid">
            {offerings.map((offering) => (
              <article key={offering.title} className="door">
                <h3>{offering.title}</h3>
                <p>{offering.text}</p>
                <Link className="door-go" to={offering.to}>{offering.linkLabel}</Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="doors-section" aria-labelledby="outreach-steps">
        <div className="wrap">
          <h2 id="outreach-steps">Three steps</h2>
          <div className="door-row">
            {howSteps.map((step, index) => (
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
            <img src={publicUrl('photos/phone-checkins.png')} alt="Phone showing an H1S Check-ins screen." width="900" height="856" loading="lazy" decoding="async" />
          </figure>
          <p className="hero-note">
            Text also works with email, QR codes, Facebook, and WhatsApp. {org.brand}. {org.legalName} is the
            501(c)(3).
          </p>
        </div>
      </section>

      <section className="section stories-section" aria-labelledby="outreach-voices">
        <div className="wrap">
          <h2 id="outreach-voices">Partner voices</h2>
          {dreamers ? (
            <figure className="evidence-quote">
              <blockquote>
                <p>{dreamers.quote}</p>
              </blockquote>
              <footer>{dreamers.quoteAttribution}</footer>
            </figure>
          ) : null}
          <figure className="evidence-quote">
            <blockquote>
              <p>Their (H1S) outreach tools are very convenient and effective. We grew by 54 people last week.</p>
            </blockquote>
            <footer>Jennifer Franklin, Total Family Care Coalition</footer>
          </figure>
          <div className="story-cards">
            {proof.map((story) => (
              <StoryCard key={story.slug} story={story} />
            ))}
          </div>
        </div>
      </section>

      <section className="cause-band" aria-labelledby="outreach-cta">
        <div className="wrap cause-inner">
          <div>
            <h2 id="outreach-cta">Bring check-ins to your service</h2>
            <p>Tell us who you serve and what you want to improve. We can discuss your needs and arrange a live demo.</p>
          </div>
          <Link className="btn btn-primary" to="/contact">
            Request a partnership conversation
          </Link>
        </div>
      </section>
    </>
  )
}
