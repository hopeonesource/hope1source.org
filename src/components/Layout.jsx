import { useEffect, useState } from 'react'
import { Link, NavLink, Outlet, useLocation } from 'react-router-dom'
import { footerNav, org, primaryNav } from '../content/org.js'
import { services } from '../content/services.js'
import { mailto } from '../lib/links.js'

function Brand({ onClick }) {
  return (
    <Link className="brand" to="/" onClick={onClick}>
      <span className="mark" aria-hidden="true">
        <svg viewBox="0 0 32 32" width="32" height="32">
          <rect width="32" height="32" rx="8" fill="currentColor" />
          <path d="M9 8h3.1v6.1H19.8V8H23v16h-3.2v-6.7H12.1V24H9V8z" fill="#f6f1e7" />
          <rect x="9" y="14.15" width="14" height="2.35" fill="#e2b87a" />
        </svg>
      </span>
      <span className="brand-text">
        <span className="brand-name">Hope With Love</span>
        <span className="brand-sub">Hope1Source</span>
      </span>
    </Link>
  )
}

export default function Layout() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    setOpen(false)
  }, [location.pathname])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.classList.toggle('nav-open', open)
    return () => document.body.classList.remove('nav-open')
  }, [open])

  useEffect(() => {
    if (!open) return undefined
    const onKey = (event) => {
      if (event.key === 'Escape') setOpen(false)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  return (
    <div className="site">
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <header className={scrolled ? 'site-header is-scrolled' : 'site-header'}>
        <div className="header-inner">
          <Brand onClick={() => setOpen(false)} />
          <button
            type="button"
            className="nav-toggle"
            aria-expanded={open}
            aria-controls="site-nav"
            onClick={() => setOpen((value) => !value)}
          >
            <span className="sr-only">{open ? 'Close menu' : 'Open menu'}</span>
            <span className="nav-toggle-bars" aria-hidden="true" />
          </button>
          <nav id="site-nav" className={open ? 'site-nav is-open' : 'site-nav'} aria-label="Primary">
            <ul>
              {primaryNav.map((item) => (
                <li key={item.to}>
                  <NavLink to={item.to} onClick={() => setOpen(false)}>
                    {item.label}
                  </NavLink>
                </li>
              ))}
            </ul>
            <a className="nav-login" href={org.portalUrl}>
              Log in
            </a>
          </nav>
        </div>
      </header>

      <main id="main">
        <Outlet />
      </main>

      <footer className="site-footer">
        <div className="footer-inner">
          <div className="footer-brand">
            <Brand />
            <p>
              {org.legalName} is a 501(c)(3) nonprofit. This is the mission and trust home for {org.program}.
              Partner work happens with providers, venues, and backers.
            </p>
            <p>
              <a href={mailto({})}>{org.email}</a>
              <br />
              <a href={`tel:${org.phoneTel}`}>{org.phoneDisplay}</a>
            </p>
            <p className="footer-crisis">
              Crisis support in the U.S.: call or text <a href="tel:988">988</a>.
            </p>
          </div>

          <nav aria-label="Mission">
            <h2>Mission</h2>
            <ul>
              {footerNav.mission.map((item) => (
                <li key={item.to}>
                  <Link to={item.to}>{item.label}</Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Partners">
            <h2>Partners</h2>
            <ul>
              {footerNav.partners.map((item) => (
                <li key={item.to}>
                  <Link to={item.to}>{item.label}</Link>
                </li>
              ))}
              <li>
                <a href={org.portalUrl}>Log in</a>
              </li>
            </ul>
          </nav>

          <nav aria-label="Trust">
            <h2>Trust</h2>
            <ul>
              {footerNav.trust.map((item) => (
                <li key={item.to}>
                  <Link to={item.to}>{item.label}</Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav className="footer-services" aria-label="Community resource guides">
            <h2>Resource guides</h2>
            <ul>
              {services.map((service) => (
                <li key={service.slug}>
                  <Link to={`/${service.slug}`}>{service.title}</Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="footer-base">
          <p>
            Partners: H1S Check-ins{' '}
            <a href={org.hubUrl}>hopeonesource.me</a>
          </p>
          <p>© {new Date().getFullYear()} {org.legalName}. Privacy and terms are drafts pending legal review.</p>
        </div>
      </footer>
    </div>
  )
}
