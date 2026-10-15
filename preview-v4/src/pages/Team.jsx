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
              width="76"
              height="76"
              loading="lazy"
              decoding="async"
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
        description="Meet the H1S Check-ins team. We bring together service, technology, and lived experience to help those who serve others create lasting change."
      />
      <PageHero
        kicker="Team"
        title="The people behind the work."
        lede="We bring together service, technology, and lived experience to help those who serve others create lasting change."
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
