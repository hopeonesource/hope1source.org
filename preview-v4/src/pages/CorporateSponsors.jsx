import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero.jsx'
import Seo from '../components/Seo.jsx'
import { org } from '../content/org.js'
import { mailto } from '../lib/links.js'

export default function CorporateSponsors() {
  return (
    <>
      <Seo
        title="Corporate sponsorship and volunteer outreach"
        description="Connect your team with your community through H1S corporate sponsorship, volunteer outreach, and team building. Explore our partnership history and ways to help."
      />
      <PageHero
        kicker="Corporate sponsors"
        title="Connect your team with your community."
        lede="Support local services, volunteer together, and build connections beyond the workplace."
      />
      <article className="section prose-section">
        <div className="wrap narrow prose">
          <h2>Community connection. Team building.</h2>
          <p>
            Volunteer outreach gives colleagues a shared purpose: helping people connect with health, housing,
            human, and emergency services. Working alongside community partners creates opportunities to listen,
            learn, and solve problems together.
          </p>
          <h2>Ways your team can take part</h2>
          <ul>
            <li>
              <strong>Volunteer outreach.</strong> Help people discover nearby services and choose to stay
              connected through H1S Check-ins.
            </li>
            <li>
              <strong>Share skills.</strong> Contribute technical, communications, or project support alongside
              service providers.
            </li>
            <li>
              <strong>Sponsor access.</strong> Help more organizations use check-ins to listen, follow up, and
              measure what matters.
            </li>
          </ul>
          <h2>Companies in our story</h2>
          <p>
            Our corporate partners and supporters have included Adobe, Cisco, Blackstone Federal, and Lockr.
          </p>
          <ul>
            <li>
              <strong>Blackstone Federal:</strong> Employee volunteers helped develop H1S through coding events
              and ongoing contributions.{' '}
              <a
                href="https://www.prweb.com/releases/blackstone_federal_joins_the_fight_to_prevent_and_end_homelessness_in_the_nation_s_capital/prweb14414915.htm"
                target="_blank"
                rel="noopener noreferrer"
              >
                Read Blackstone’s partnership announcement
              </a>.
            </li>
            <li>
              <strong>Cisco and Lockr:</strong> H1S named both companies as supporters of its volunteer-led
              outreach and emergency-alert work.{' '}
              <Link to="/press/hurricane-florence-alerts">Read the H1S story</Link>.
            </li>
          </ul>
          <p>
            In 2017, Blackstone and H1S also announced a joint Veterans Day outreach effort to help people enroll
            for service information and emergency text alerts.{' '}
            <a
              href="https://www.prweb.com/releases/saving_lives_in_the_nation_s_capital_one_text_at_a_time/prweb14819980.htm"
              target="_blank"
              rel="noopener noreferrer"
            >
              Read the outreach announcement
            </a>.
          </p>
          <h2>Start with your community</h2>
          <p>
            Tell us your team’s interests, location, and timing. We can explore volunteer outreach and sponsorship
            that fit community needs.
          </p>
          <div className="hero-actions">
            <a
              className="btn btn-primary"
              href={mailto({ subject: 'Corporate sponsorship and volunteer outreach' })}
            >
              Plan volunteer outreach
            </a>
            <a className="btn btn-secondary" href={org.hubUrl} target="_blank" rel="noopener noreferrer">
              Visit hopeonesource.me
            </a>
          </div>
        </div>
      </article>
    </>
  )
}
