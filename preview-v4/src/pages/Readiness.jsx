import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero.jsx'
import Seo from '../components/Seo.jsx'
import { howSteps } from '../components/HowItWorks.jsx'
import { org } from '../content/org.js'
import { mailto } from '../lib/links.js'

const winterGift = `${org.donateUrl}?utm_campaign=winter`

const checklist = [
  'Build the opt-in list at the front desk, with people who choose to take part.',
  'Before the weather turns, agree who sends the alert and which official channel carries the live update.',
  'During cold, heat, a storm, or a closure, send shelter, ride, or service information to people who opted in.',
  'Check in privately. Hear what did not work.',
  'Afterward, follow up and report what changed.',
  'Point residents to the agency’s own channels for a live alert. This site is not a live alert feed.',
]

export default function Readiness() {
  return (
    <>
      <Seo
        title="Cold nights are coming."
        description="Opt-in alerts with shelter, ride, and service updates. Used for cold, heat, storms, and closures."
      />
      <PageHero
        kicker="Winter and emergency readiness"
        title="Cold nights are coming. Can you reach everyone tonight?"
        lede="Send opt-in alerts with shelter, ride, and service updates to people other channels miss. Used for cold, heat, storms, and closures."
      >
        <div className="hero-actions">
          <a className="btn btn-primary" href={mailto({ subject: 'Winter alerts' })}>
            Plan your winter alerts
          </a>
          <Link className="btn btn-secondary" to="/public-agencies">
            Read the agency facts
          </Link>
        </div>
      </PageHero>
      <section className="section">
        <div className="wrap">
          <h2>Before. During. After.</h2>
          <div className="door-row">
            <article className="door">
              <span className="door-index" aria-hidden="true">
                01
              </span>
              <h3>Before</h3>
              <p>Build the opt-in list at your front desk.</p>
            </article>
            <article className="door">
              <span className="door-index" aria-hidden="true">
                02
              </span>
              <h3>During</h3>
              <p>Alert, then check in.</p>
            </article>
            <article className="door">
              <span className="door-index" aria-hidden="true">
                03
              </span>
              <h3>After</h3>
              <p>Follow up and report what changed.</p>
            </article>
          </div>
        </div>
      </section>
      <section className="section section-tight">
        <div className="wrap narrow prose">
          <h2>What DC Human Services did</h2>
          <p>
            DC Human Services adopted the alert approach we brought. Alerts carried shelter and ride information in
            extreme weather, including heat. That use is in the past.
          </p>
          <p>
            <Link to="/case-studies/emergency-shelter-alerts">Read the shelter alerts story</Link>
          </p>
          <h2>Readiness checklist</h2>
          <ol>
            {checklist.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ol>
          <h2>Alert. Check in. Connect.</h2>
          <ol>
            {howSteps.map((step) => (
              <li key={step.title}>
                <strong>{step.title}.</strong> {step.text}
              </li>
            ))}
          </ol>
        </div>
      </section>
      <section className="cause-band">
        <div className="wrap cause-inner">
          <div>
            <h2>Help a partner send alerts this winter.</h2>
            <p>Gifts go to {org.legalName}, a 501(c)(3), through Every.org.</p>
          </div>
          <a className="btn btn-primary" href={winterGift}>
            Donate on Every.org
          </a>
        </div>
      </section>
    </>
  )
}
