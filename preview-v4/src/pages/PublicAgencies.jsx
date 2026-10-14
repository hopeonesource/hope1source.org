import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero.jsx'
import Seo from '../components/Seo.jsx'
import { org } from '../content/org.js'
import { mailto } from '../lib/links.js'

const facts = [
  ['Operator', 'H1S Check-ins (dba Hope With Love, Inc.)'],
  ['SAM.gov UEI', org.uei],
  ['CAGE', org.cage],
  ['EIN', org.ein],
  ['Status', '501(c)(3)'],
  ['Contact', org.email],
]

export default function PublicAgencies() {
  return (
    <>
      <Seo
        title="Reach residents before harm happens."
        description="Opt-in alerts, check-ins, and follow-up for human services, emergency management, public health, VA, and housing teams."
      />
      <PageHero
        kicker="Public agencies"
        title="Reach residents before harm happens."
        lede="Opt-in alerts, check-ins, and follow-up for human services, emergency management, public health, VA, and housing teams."
      >
        <div className="hero-actions">
          <a className="btn btn-primary" href={mailto({ subject: 'Agency briefing' })}>
            Request an agency briefing
          </a>
          <Link className="btn btn-secondary" to="/readiness">
            Plan your winter alerts
          </Link>
        </div>
      </PageHero>
      <section className="section">
        <div className="wrap narrow prose">
          <h2>Facts for procurement</h2>
          <p>{org.procurement}</p>
          <dl className="facts">
            {facts.map(([label, value]) => (
              <div key={label}>
                <dt>{label}</dt>
                <dd>{value}</dd>
              </div>
            ))}
          </dl>
          <h2>How trust works</h2>
          <ul>
            <li>People opt in.</li>
            <li>Partners own and control access to their data.</li>
            <li>No app is needed.</li>
            <li>A sensitive service is never named in a text.</li>
          </ul>
          <h2>Proof you can forward</h2>
          <p>
            We provided the technical assistance to help measure what matters. Across 30 cities, access to food,
            counseling, and care rose from about 7 in 10 to as high as 9 in 10. Published in the Journal of Public
            Health.
          </p>
          <p>
            <Link to="/case-studies/veterans-affairs-national-homeless-programs">Read the veterans story</Link>
          </p>
          <p>
            DC Human Services adopted the alert approach we brought. Alerts carried shelter and ride information in
            extreme weather. That use is in the past.
          </p>
          <p>
            <Link to="/case-studies/emergency-shelter-alerts">Read the shelter alerts story</Link>
          </p>
          <p>
            <Link to="/team">Meet the team</Link>.
          </p>
        </div>
      </section>
    </>
  )
}
