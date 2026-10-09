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
        description="Press-release titles and outside coverage for Hope1Source. Full articles were not copied onto this site."
      />
      <PageHero
        kicker="Press"
        title="What has been public."
        lede="Titles below come from the prior press and news indexes. Article text stays with the original publisher. For a quote or a photo, write the partnerships desk."
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
                  <p className="meta-label">{item.date}</p>
                  <h3>{item.title}</h3>
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
                  <p className="meta-label">{item.date}</p>
                  <h3>
                    {item.href ? (
                      <a href={item.href} target="_blank" rel="noopener noreferrer">
                        {item.title}
                      </a>
                    ) : (
                      item.title
                    )}
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
