import { Link } from 'react-router-dom'
import { publicUrl } from '../lib/links.js'

/** Homepage story card. The title stays short. The case study holds the longer proof. */
export function StoryCard({ story }) {
  return (
    <Link className="story-card" to={`/case-studies/${story.slug}`}>
      <span className={story.imageFit === 'cover' ? 'story-art is-cover' : 'story-art'}>
        <img
          src={publicUrl(story.image)}
          alt=""
          style={story.imagePosition ? { objectPosition: story.imagePosition } : undefined}
        />
      </span>
      <span className="story-body">
        {story.outcome ? <span className="kicker">{story.outcome}</span> : null}
        <h3>{story.cardTitle}</h3>
        <p>{story.card}</p>
        <span className="story-cta">Read the story</span>
      </span>
    </Link>
  )
}

export default function StoryCards({ stories }) {
  return (
    <div className="story-cards">
      {stories.map((story) => (
        <StoryCard key={story.slug} story={story} />
      ))}
    </div>
  )
}
