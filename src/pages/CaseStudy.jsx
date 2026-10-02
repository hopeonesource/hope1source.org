import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero.jsx'
import Seo from '../components/Seo.jsx'
import { storyBySlug } from '../content/stories.js'
import { publicUrl } from '../lib/links.js'
import NotFound from './NotFound.jsx'

export default function CaseStudy({ slug }) {
  const story = storyBySlug(slug)
  if (!story) return <NotFound />

  return (
    <>
      <Seo title={story.title} description={story.summary} />
      <PageHero kicker={story.kicker} title={story.title} lede={story.summary} />
      <article className="section">
        <div className="wrap study-grid">
          <div className="prose">
            {story.image ? (
              <figure className={story.portrait ? 'study-figure is-portrait' : 'study-figure'}>
                <img src={publicUrl(story.image)} alt={story.imageAlt} />
              </figure>
            ) : null}
            {story.metrics?.length ? (
              <figure className="metric-set">
                <figcaption>{story.metricsCaption}</figcaption>
                <table>
                  <thead>
                    <tr>
                      <th scope="col">Measure</th>
                      <th scope="col">Before</th>
                      <th scope="col">After</th>
                    </tr>
                  </thead>
                  <tbody>
                    {story.metrics.map((row) => (
                      <tr key={row.label}>
                        <th scope="row">{row.label}</th>
                        <td>{row.before}</td>
                        <td>{row.after}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </figure>
            ) : null}
            <blockquote className="pull">
              <p>{story.quote}</p>
              <footer>{story.quoteAttribution}</footer>
            </blockquote>
            {story.body.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
            {story.note ? <p className="form-note">{story.note}</p> : null}
            <p>
              <Link className="text-link" to="/case-studies">
                All case studies
              </Link>
            </p>
          </div>
          <aside className="study-meta">
            <dl>
              <div>
                <dt>Organization</dt>
                <dd>{story.org}</dd>
              </div>
              <div>
                <dt>Industry</dt>
                <dd>{story.industry}</dd>
              </div>
              <div>
                <dt>Place</dt>
                <dd>{story.location}</dd>
              </div>
              <div>
                <dt>Further reading</dt>
                <dd>
                  <a href={story.website} target="_blank" rel="noopener noreferrer">
                    {story.websiteLabel}
                  </a>
                </dd>
              </div>
            </dl>
          </aside>
        </div>
      </article>
    </>
  )
}
