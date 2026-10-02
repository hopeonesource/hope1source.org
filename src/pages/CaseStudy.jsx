import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero.jsx'
import Seo from '../components/Seo.jsx'
import { storyBySlug } from '../content/stories.js'
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
            <blockquote className="pull">
              <p>{story.quote}</p>
              <footer>{story.quoteAttribution}</footer>
            </blockquote>
            {story.body.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
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
