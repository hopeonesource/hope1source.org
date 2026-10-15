import PageHero from '../components/PageHero.jsx'
import Seo from '../components/Seo.jsx'
import { coverage, releases } from '../content/press.js'
import { org } from '../content/org.js'
import { mailto } from '../lib/links.js'

export default function Press() {
  return (
    <>
      <Seo
        title="Press"
        description="Read Hope1Source press releases and explore independent coverage of our work."
      />
      <PageHero
        kicker="Press"
        title="What has been public."
        lede="Read our press releases here, or follow coverage to the original publisher. For a quote or a photo, write the partnerships desk."
      >
        <p>
          <a className="btn btn-secondary" href={mailto({ subject: 'Press inquiry' })}>
            Press inquiry
          </a>
        </p>
      </PageHero>
      <section className="section">
        <div className="wrap press-layout">
          <div>
            <h2>Releases</h2>
            <ul className="press-list">
              {releases.map((item) => (
                <li key={item.title}>
                  <p className="meta-label"><time dateTime={item.dateTime}>{item.date}</time></p>
                  <h3>
                    <Link to={item.to}>
                      {item.title}
                    </Link>
                  </h3>
                  <p>{item.source}</p>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2>Coverage</h2>
            <ul className="press-list">
              {coverage.map((item) => (
                <li key={item.title}>
                  <p className="meta-label"><time dateTime={item.dateTime}>{item.date}</time></p>
                  <h3>
                    <a href={item.href} target="_blank" rel="noopener noreferrer">
                      {item.title}
                    </a>
                  </h3>
                  <p>{item.detail}</p>
                </li>
              ))}
            </ul>
            <p className="form-note">Media contact: {org.email}</p>
          </div>
        </div>
      </section>
    </>
  )
}
import { Link } from 'react-router-dom'
