import PageHero from '../components/PageHero.jsx'
import Seo from '../components/Seo.jsx'
import { advisors, staff } from '../content/team.js'
import { initials } from '../lib/links.js'

function People({ people }) {
  return (
    <ul className="people">
      {people.map((person) => (
        <li key={person.name}>
          <article>
            <p className="avatar" aria-hidden="true">
              {initials(person.name)}
            </p>
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
        description="Staff and advisors of Hope With Love and Hope1Source, summarized from the public team page."
      />
      <PageHero
        kicker="Team"
        title="The people behind the network."
        lede="Names and roles below are taken from the public Hope1Source team page. Duplicate listings on that page appear once here. Portraits were not carried over."
      />
      <section className="section">
        <div className="wrap">
          <h2 className="group-title">Staff</h2>
          <People people={staff} />
          <h2 className="group-title">Advisors</h2>
          <People people={advisors} />
        </div>
      </section>
    </>
  )
}
