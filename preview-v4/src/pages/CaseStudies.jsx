import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero.jsx'
import Seo from '../components/Seo.jsx'
import { allStories } from '../content/stories.js'
import { publicUrl } from '../lib/links.js'

export default function CaseStudies() {
  return (
    <>
      <Seo
        title="Stories"
        description="How Hope1Source has helped partners understand barriers, share useful information, and stay connected through follow-up."
      />
      <PageHero
        kicker="Stories"
        title="Making support easier to reach."
        lede="Different partners. One purpose: make support easier to reach and help organizations improve how they serve people. These stories explain the need, our role, and what was reported."
      />
      <section className="section">
        <div className="wrap story-cards">
          {allStories.map((story) => (
            <article key={story.slug}>
              {story.image ? (
                <img
                  className={story.imageFit ? `study-thumb is-${story.imageFit}` : 'study-thumb'}
                  src={publicUrl(story.image)}
                  width={story.imageWidth}
                  height={story.imageHeight}
                  alt=""
                  loading="lazy"
                  decoding="async"
                  style={{
                    ...(story.imagePosition ? { objectPosition: story.imagePosition } : {}),
                    ...(story.imageAspectRatio ? { aspectRatio: story.imageAspectRatio } : {}),
                  }}
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
        <div className="wrap">
          <p className="path-actions">
            <Link className="btn btn-secondary" to="/press">
              More stories and updates in Media
            </Link>
          </p>
        </div>
      </section>
    </>
  )
}
