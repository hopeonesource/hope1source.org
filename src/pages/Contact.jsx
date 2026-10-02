import { useState } from 'react'
import PageHero, { Confirm } from '../components/PageHero.jsx'
import Seo from '../components/Seo.jsx'
import { org } from '../content/org.js'
import { mailto } from '../lib/links.js'

const roles = ['Provider', 'Venue', 'Backer', 'Press', 'Volunteer', 'Other']

export default function Contact() {
  const [opened, setOpened] = useState(false)

  function onSubmit(event) {
    event.preventDefault()
    const data = new FormData(event.currentTarget)
    const role = String(data.get('role') || 'Other')
    const name = String(data.get('name') || '')
    const organization = String(data.get('organization') || '')
    const email = String(data.get('email') || '')
    const message = String(data.get('message') || '')
    const body = [`Name: ${name}`, `Organization: ${organization}`, `Email: ${email}`, `Role: ${role}`, '', message].join(
      '\n',
    )
    window.location.href = mailto({ subject: `Hope1Source inquiry — ${role}`, body })
    setOpened(true)
  }

  return (
    <>
      <Seo
        title="Contact"
        description="Reach Hope With Love partnerships by email or phone. The form opens your email app and is not stored on this site."
      />
      <PageHero
        kicker="Contact"
        title="Write the partnerships team."
        lede="Questions about a provider, a venue, a gift, or the press land in one mailbox. We do not keep a copy of this form on the website."
      />
      <section className="section">
        <div className="wrap contact-grid">
          <div className="contact-card">
            <h2>Direct</h2>
            <p>
              <span className="meta-label">Email</span>
              <a href={mailto({})}>{org.email}</a>
            </p>
            <p>
              <span className="meta-label">Phone</span>
              <a href={`tel:${org.phoneTel}`}>{org.phoneDisplay}</a>
            </p>
            <Confirm>
              This is the number published on the prior contact page. Older privacy text used different numbers. See
              the README before printing a second line.
            </Confirm>
            <p>
              <span className="meta-label">Mailing address to confirm</span>
              {org.legalName}
              <br />
              {org.street}
              <br />
              {org.city}, {org.region} {org.postal}
            </p>
            <p>
              <span className="meta-label">Already a partner?</span>
              <a href={org.portalUrl}>Log in to the portal</a>
            </p>
          </div>

          <form className="form" onSubmit={onSubmit}>
            <h2>Open an email</h2>
            <p className="form-note">
              Submitting uses your own email app, addressed to {org.email}. If nothing opens, copy the address and
              write directly.
            </p>
            <label>
              Name
              <input name="name" autoComplete="name" required />
            </label>
            <label>
              Organization
              <input name="organization" autoComplete="organization" />
            </label>
            <label>
              Your email
              <input name="email" type="email" autoComplete="email" required />
            </label>
            <label>
              I am a
              <select name="role" defaultValue="Provider">
                {roles.map((role) => (
                  <option key={role}>{role}</option>
                ))}
              </select>
            </label>
            <label>
              Message
              <textarea name="message" rows="6" required />
            </label>
            <button className="btn btn-primary" type="submit">
              Email partnerships
            </button>
            {opened ? (
              <p role="status" className="form-status">
                If a mail draft did not open, write {org.email} directly. Nothing was saved on this server.
              </p>
            ) : null}
          </form>
        </div>
      </section>
    </>
  )
}
