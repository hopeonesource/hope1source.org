import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero.jsx'
import Seo from '../components/Seo.jsx'
import { org } from '../content/org.js'
import { roleById } from '../content/roles.js'
import { mailto } from '../lib/links.js'
import NotFound from './NotFound.jsx'

export default function RolePage({ id }) {
  const role = roleById(id)
  if (!role) return <NotFound />

  return (
    <>
      <Seo title={role.title} description={role.lede} />
      <PageHero stage tone={role.id} kicker={role.kicker} title={role.title} lede={role.lede}>
        <div className="hero-actions">
          {role.donate ? (
            <a className="btn btn-primary" href={org.donateUrl} target="_blank" rel="noopener noreferrer">
              {role.cta}
            </a>
          ) : (
            <a className="btn btn-primary" href={mailto({ subject: role.subject })}>
              {role.cta}
            </a>
          )}
          <Link className="btn btn-secondary" to="/contact">
            Contact
          </Link>
        </div>
      </PageHero>
      {role.points.length > 0 ? (
        <section className="section">
          <div className="wrap role-detail">
            {role.points.map((point, index) => (
              <article key={point.title}>
                <p className="panel-index">0{index + 1}</p>
                <h2>{point.title}</h2>
                <p>{point.text}</p>
              </article>
            ))}
          </div>
        </section>
      ) : null}
      {role.donate ? (
        <section className="section section-tight">
          <div className="wrap narrow prose path-note">
            <p>
              Prefer a conversation before a gift?{' '}
              <a href={mailto({ subject: role.subject })}>Email {org.email}</a>.
            </p>
          </div>
        </section>
      ) : null}
    </>
  )
}
