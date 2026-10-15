import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero.jsx'
import Seo from '../components/Seo.jsx'
import { newsItems } from '../content/press.js'
import { org } from '../content/org.js'
import { mailto } from '../lib/links.js'

export default function Press() {
  return (
    <>
      <Seo
        title="News & Stories"
        description="Partner stories, community updates, announcements, and coverage of H1S."
      />
      <PageHero
        kicker="Media"
        title="News & Stories"
        lede="Partner stories, community updates, announcements, and coverage of H1S."
      >
        <p>
          <a className="btn btn-secondary" href={mailto({ subject: 'Press inquiry' })}>
            Press inquiry
          </a>
        </p>
      </PageHero>
      <section className="section">
        <div className="wrap narrow">
          <ol className="press-list" role="list">
            {newsItems.map((item) => (
              <li key={item.title}>
                <p className="meta-label">
                  <time dateTime={item.dateTime}>{item.date}</time>
                  {' · '}{item.kind}
                </p>
                <h2>
                  {item.to ? (
                    <Link to={item.to}>{item.title}</Link>
                  ) : (
                    <a href={item.href} target="_blank" rel="noopener noreferrer">
                      {item.title}
                    </a>
                  )}
                </h2>
                <p>{item.detail || item.source}</p>
                {item.sourceHref ? (
                  <p><a className="text-link" href={item.sourceHref} target="_blank" rel="noopener noreferrer">Original Facebook post</a></p>
                ) : null}
              </li>
            ))}
          </ol>
          <p className="form-note">Media contact: {org.email}</p>
        </div>
      </section>
    </>
  )
}
