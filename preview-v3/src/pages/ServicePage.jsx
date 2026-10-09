import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero.jsx'
import Seo from '../components/Seo.jsx'
import { serviceBySlug } from '../content/services.js'
import { mailto } from '../lib/links.js'
import NotFound from './NotFound.jsx'

export default function ServicePage({ slug }) {
  const service = serviceBySlug(slug)
  if (!service) return <NotFound />

  return (
    <>
      <Seo title={service.title} description={service.description} />
      <PageHero kicker="Resource guide" title={service.title} lede={service.lede} />
      <article className="section">
        <div className="wrap service-grid">
          <section className="prose">
            <h2>If you need this service</h2>
            <p>{service.forSomeone}</p>
            {service.crisis ? (
              <p className="crisis-call">
                U.S. crisis line: call or text <a href="tel:988">988</a>. Immediate danger: call{' '}
                <a href="tel:911">911</a>.
              </p>
            ) : (
              <p>
                Immediate danger: call <a href="tel:911">911</a>. Local referrals in much of the United States:{' '}
                <a href="tel:211">211</a>.
              </p>
            )}
            {service.quote ? (
              <blockquote className="pull">
                <p>{service.quote}</p>
                <footer>{service.quoteBy}</footer>
              </blockquote>
            ) : null}
            {service.storyPath ? (
              <p>
                <Link to={service.storyPath}>Read the shelter alerts story</Link>
              </p>
            ) : null}
            {service.links?.map((link) => (
              <p key={link.to}>
                <Link to={link.to}>{link.label}</Link>
              </p>
            ))}
            <h2>If you run this service</h2>
            <p>{service.forPartner}</p>
            <p>
              <a className="btn btn-primary" href={mailto({ subject: `Partnership: ${service.title}` })}>
                Partner on {service.title.toLowerCase()}
              </a>
            </p>
            <p>
              <Link to="/faqs">Read the FAQs</Link> for how text codes, cost, and privacy are handled. Short codes are
              not printed on this page until one of them is confirmed.
            </p>
          </section>
          <aside className="service-aside">
            <h2>What this page is</h2>
            <ul>
              <li>A mission landing page for this topic.</li>
              <li>A place an ad can send someone without a pricing table.</li>
              <li>Not a live list of openings, hours, or beds.</li>
            </ul>
          </aside>
        </div>
      </article>
    </>
  )
}
