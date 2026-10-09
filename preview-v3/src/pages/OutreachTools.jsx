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

export default function OutreachTools() {
  return (
    <>
      <Seo
        title="Alert. Check in. Connect."
        description="Opt-in alerts, a private check-in, and a follow-up. No app. Any phone. People choose to take part."
      />

      <section className="hero">
        <div className="hero-photo">
          <img src={publicUrl('photos/homepage-hero.jpg')} alt="" />
        </div>
        <MissionWash tone="home" />
        <div className="wrap hero-copy">
          <p className="kicker">{org.product}</p>
          <h1>Alert. Check in. Connect.</h1>
          <p className="lede">No app. Any phone. People choose to take part.</p>
          <div className="hero-actions">
            <a className="btn btn-primary" href={mailto({ subject: 'Live demo' })}>
              Request a live demo
            </a>
            <Link className="btn btn-secondary" to="/get-involved">
              Pick a way to take part
            </Link>
          </div>
          <p className="hero-note">
            For people who <Link to="/for-providers">run a program</Link> or{' '}
            <Link to="/access-points">host an access point</Link>. Already a partner?{' '}
            <a href={org.portalUrl}>Log in</a>.
          </p>
        </div>
      </section>

      <div className="horizon" aria-hidden="true" />

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
            <img src={publicUrl('photos/phone-checkins.png')} alt="Phone showing an H1S Check-ins screen." />
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
            <h2 id="outreach-cta">See it on a phone</h2>
            <p>Ask partnerships for a live demo. We do not publish a text code on this site.</p>
          </div>
          <a className="btn btn-primary" href={mailto({ subject: 'Live demo' })}>
            Request a live demo
          </a>
        </div>
      </section>
    </>
  )
}
