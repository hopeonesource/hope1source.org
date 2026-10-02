import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero.jsx'
import Seo from '../components/Seo.jsx'
import { org } from '../content/org.js'
import { publicUrl } from '../lib/links.js'

const phoneQuery = '(max-width: 720px)'

/** True on a phone-width screen. Desktop keeps every section open. */
function usePhone() {
  const [phone, setPhone] = useState(() => window.matchMedia(phoneQuery).matches)

  useEffect(() => {
    const query = window.matchMedia(phoneQuery)
    const update = () => setPhone(query.matches)
    update()
    query.addEventListener('change', update)
    return () => query.removeEventListener('change', update)
  }, [])

  return phone
}

/**
 * On a phone, each block is a closed disclosure so the page starts short.
 * On a wider screen it is a normal heading and the paragraphs stay visible.
 * The key remounts the control when the breakpoint changes, so a phone
 * starts collapsed and a desktop starts open without fighting the tap.
 */
function AboutFold({ title, phone, children }) {
  if (!phone) {
    return (
      <section>
        <h2>{title}</h2>
        {children}
      </section>
    )
  }

  return (
    <details className="about-fold">
      <summary>
        <span className="about-fold-title">{title}</span>
        <span className="about-fold-shut">Read more</span>
        <span className="about-fold-open">Close</span>
      </summary>
      <div className="about-fold-body">{children}</div>
    </details>
  )
}

export default function About() {
  const phone = usePhone()

  return (
    <div className="about-page">
      <Seo
        title="Our mission"
        description="H1S Check-ins routes praise to reviews, keeps friction private, and gives managers one clear fix. Hope with Love is the 501(c)(3)."
      />
      <PageHero
        kicker={org.product}
        title="Turn guest feedback into repeat visits."
        lede="Identify need. Meet need. Build trust."
      />
      <article className="section prose-section">
        <div className="wrap narrow prose">
          <img
            className="about-logo"
            src={publicUrl('logo-hope-one-source.png')}
            alt="Hope One Source"
          />
          <img
            className="about-photo"
            src={publicUrl('photos/hos-team.jpg')}
            alt="Hope1Source team gathered around a table."
          />
          <p className="about-lead">
            {org.product}. {org.legalName} is the 501(c)(3).
          </p>
          <AboutFold title="Mission" phone={phone}>
            <p>
              Route praise to reviews, keep friction private, and give managers one clear fix. Every check-in can
              support a cause.
            </p>
            <p>
              {org.product} turns QR and NFC scans into feedback, review routing, follow-up outreach, and impact
              reporting. It helps restaurants, nonprofits, creators, artists, real estate teams, and other operators
              turn scans into feedback, reviews, follow-up, and measurable impact.
            </p>
          </AboutFold>
          <AboutFold title="Who it’s for" phone={phone}>
            <p>
              The platform is designed for restaurants first. The same scan-to-action loop can support creators,
              artists, nonprofits, charities, real estate agents, and other teams. Each path keeps its own guest
              moment, proof, and follow-up.
            </p>
            <p>
              For nonprofits and charities: connect people to services and get insights to improve them. One check-in
              tracks needs, follows up, and shares live impact.
            </p>
            <p>
              Wherever people gather, watch, listen, or shop, {org.product} turns that moment into a chance to make a
              change for good.
            </p>
          </AboutFold>
          <AboutFold title="How a check-in works" phone={phone}>
            <p>Place check-ins wherever the experience happens: tables, counters, bathrooms, receipts, pickup bags, and exits.</p>
            <p>Reach: make the next step obvious. Learn: capture need and sentiment. Prove: show what changed.</p>
            <p>
              Great experiences route to Google, or the review platform the guest chooses, so they can publish the win.
              Friction stays private and opens a calm way to be heard by management. A guest can share a phone number
              for return offers, reminders, and cause updates.
            </p>
          </AboutFold>
          <AboutFold title="The organization" phone={phone}>
            <p>
              {org.legalName} is the 501(c)(3) behind the program. The public name of the work is {org.product}, also
              written {org.program} and {org.programLegacy}.
            </p>
            <p>
              Tim Underwood co-founded this 501(c)(3) charitable organization to help leaders maximize their
              effectiveness by optimizing outreach and experiences.
            </p>
          </AboutFold>
          <p>
            <Link className="btn btn-primary" to="/team">
              Meet the team
            </Link>
          </p>
        </div>
      </article>
    </div>
  )
}
