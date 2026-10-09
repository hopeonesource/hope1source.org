import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero.jsx'
import Seo from '../components/Seo.jsx'
import { stories } from '../content/stories.js'
import { publicUrl } from '../lib/links.js'

export default function CaseStudies() {
  return (
    <>
      <Seo
        title="Stories"
        description="A published study, a past weather-alert partnership, and partner-reported results from Dreamers and Achievers."
      />
      <PageHero
        kicker="Stories"
        title="What changed."
        lede="A published study, a past weather-alert partnership, and results a partner reported."
      />
      <section className="section">
        <div className="wrap story-cards">
          {stories.map((story) => (
            <article key={story.slug}>
              {story.image ? (
                <img
                  className={story.imageFit === 'cover' ? 'study-thumb is-cover' : 'study-thumb'}
                  src={publicUrl(story.image)}
                  alt=""
                  style={story.imagePosition ? { objectPosition: story.imagePosition } : undefined}
                />
              ) : null}
              <p className="kicker">{story.industry}</p>
              <h2>
                <Link to={`/case-studies/${story.slug}`}>{story.cardTitle}</Link>
              </h2>
              <p className="person-role">{story.org}</p>
              <p>{story.summary}</p>
              <Link className="text-link" to={`/case-studies/${story.slug}`}>
                Read the story
              </Link>
            </article>
          ))}
        </div>
      </section>
    </>
  )
}
