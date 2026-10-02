import { useState } from 'react'
import PageHero from '../components/PageHero.jsx'
import Seo from '../components/Seo.jsx'
import { org } from '../content/org.js'
import { mailto } from '../lib/links.js'

export default function Contact() {
  const [opened, setOpened] = useState(false)

  function onSubmit(event) {
    event.preventDefault()
    const data = new FormData(event.currentTarget)
    const name = String(data.get('name') || '')
    const email = String(data.get('email') || '')
    const message = String(data.get('message') || '')
    const body = [`Name: ${name}`, `Email: ${email}`, '', message].join('\n')
    window.location.href = mailto({ subject: `${org.brand} inquiry`, body })
    setOpened(true)
  }

  return (
    <>
      <Seo
        title="Contact"
        description={`Email ${org.brand} at ${org.email}. The form opens your email app and is not stored on this site.`}
      />
      <PageHero
        kicker="Contact"
        title="Email us."
        lede="Partnerships, press, and gifts. One mailbox. This form opens your email app and is not stored here."
      >
        <p className="hero-actions">
          <a className="btn btn-primary" href={mailto({})}>
            Email {org.email}
          </a>
        </p>
      </PageHero>
      <section className="section">
        <div className="wrap narrow">
          <form className="form" onSubmit={onSubmit}>
            <label>
              Name
              <input name="name" autoComplete="name" required />
            </label>
            <label>
              Your email
              <input name="email" type="email" autoComplete="email" required />
            </label>
            <label>
              Message
              <textarea name="message" rows="5" required />
            </label>
            <button className="btn btn-primary" type="submit">
              Open email
            </button>
            {opened ? (
              <p role="status" className="form-status">
                If a draft did not open, write {org.email} directly. Nothing was saved on this server.
              </p>
            ) : null}
          </form>
          <p>
            Already a partner? <a href={org.portalUrl}>Log in</a>.
          </p>
        </div>
      </section>
    </>
  )
}
