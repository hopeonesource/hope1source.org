import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero.jsx'
import Seo from '../components/Seo.jsx'
import { stories } from '../content/stories.js'

export default function CaseStudies() {
  return (
    <>
      <Seo
        title="Case studies"
        description="Three Hope1Source partner stories: Veterans Affairs, DC shelter alerts, and Dreamers & Achievers."
      />
      <PageHero
        kicker="Case studies"
        title="Stories we can actually source."
        lede="The prior site had three case studies. They are here in full enough to be useful, and no further than the public page went."
      />
      <section className="section">
        <div className="wrap story-cards">
          {stories.map((story) => (
            <article key={story.slug}>
              <p className="kicker">{story.industry}</p>
              <h2>
                <Link to={`/case-studies/${story.slug}`}>{story.title}</Link>
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
