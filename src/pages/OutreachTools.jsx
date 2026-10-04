import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero.jsx'
import Seo from '../components/Seo.jsx'
import { org } from '../content/org.js'
import { mailto } from '../lib/links.js'

const benefits = [
  {
    title: 'Connect',
    text: 'A custom text for an instant connection. 100% reach. A 90% open rate in the first four minutes.',
  },
  {
    title: 'Fit the tools you have',
    text: 'Text works with email, QR codes, Facebook, and WhatsApp. No download.',
  },
  {
    title: 'Join the network',
    text: 'Government and community partners connecting people and services with dignity, security, and ease.',
  },
]

const steps = [
  {
    title: 'Collect',
    text: 'Securely gather the latest information from the people you serve, staff, and volunteers. It fits the process you already use.',
  },
  {
    title: 'Engage',
    text: 'Instant, direct, secure messages. Referrals to nearby services, and feedback on a recent experience.',
  },
  {
    title: 'Follow up',
    text: 'Meaningful conversations at scale. Welcome new people, follow up, and connect them to the verified network.',
  },
]

export default function OutreachTools() {
  return (
    <>
      <Seo
        title="Outreach tools"
        description="H1S Check-ins uses text for meaningful conversations at scale. Three steps: collect, engage, and follow up."
      />
      <PageHero
        kicker={org.product}
        title="Easier outreach."
        lede="Meaningful conversations by text, shaped to each person’s experience. It fits the process you already use."
      />
      <section className="section">
        <div className="wrap">
          <p>
            For people who <Link to="/for-providers">run a program</Link> or <Link to="/for-venues">host people</Link>.
          </p>
          <div className="role-detail">
            {benefits.map((item, index) => (
              <article key={item.title}>
                <p className="panel-index">0{index + 1}</p>
                <h2>{item.title}</h2>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="section section-tight">
        <div className="wrap">
          <h2>How it works</h2>
          <div className="role-detail">
            {steps.map((item, index) => (
              <article key={item.title}>
                <p className="panel-index">0{index + 1}</p>
                <h2>{item.title}</h2>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
          <figure className="pull">
            <blockquote>
              <p>
                Their (H1S) outreach tools are very convenient and effective. We grew by 54 people last week.
              </p>
            </blockquote>
            <footer>Jennifer Franklin, Total Family Care Coalition</footer>
          </figure>
          <div className="hero-actions">
            <Link className="btn btn-primary" to="/get-involved">
              Get started
            </Link>
            <a className="btn btn-secondary" href={mailto({ subject: 'Outreach tools' })}>
              Email us
            </a>
          </div>
          <p className="hero-note">
            Already a partner? <a href={org.portalUrl}>Log in</a>. Questions are on the <Link to="/faqs">FAQ</Link>.{' '}
            {org.brand}. {org.legalName} is the 501(c)(3).
          </p>
        </div>
      </section>
    </>
  )
}
