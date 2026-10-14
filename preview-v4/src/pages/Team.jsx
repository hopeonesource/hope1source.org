import PageHero from '../components/PageHero.jsx'
import Seo from '../components/Seo.jsx'
import { team } from '../content/team.js'
import { publicUrl } from '../lib/links.js'

function People({ people }) {
  return (
    <ul className="people">
      {people.map((person) => (
        <li key={person.name}>
          <article>
            <img
              className="avatar avatar-photo"
              src={publicUrl(person.photo)}
              alt=""
              style={person.imagePosition ? { objectPosition: person.imagePosition } : undefined}
            />
            <div>
              <h3>{person.name}</h3>
              <p className="person-role">{person.role}</p>
              <p>{person.bio}</p>
            </div>
          </article>
        </li>
      ))}
    </ul>
  )
}

export default function Team() {
  return (
    <>
      <Seo
        title="Team"
        description="The H1S Check-ins team: names, roles, and photos from the public team page. Hope with Love is the 501(c)(3)."
      />
      <PageHero
        kicker="Team"
        title="The people behind the work."
        lede="Names, roles, and photos from the public team page."
      />
      <section className="section">
        <div className="wrap">
          <h2 className="group-title">Our team</h2>
          <People people={team} />
        </div>
      </section>
    </>
  )
}
