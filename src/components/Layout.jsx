import { useEffect, useState } from 'react'
import { Link, NavLink, Outlet, useLocation } from 'react-router-dom'
import { footerLinks, org, primaryNav } from '../content/org.js'
import { mailto } from '../lib/links.js'

function Brand({ onClick }) {
  return (
    <Link className="brand" to="/" onClick={onClick}>
      <span className="mark" aria-hidden="true">
        <svg viewBox="0 0 32 32" width="32" height="32">
          <rect width="32" height="32" rx="8" fill="currentColor" />
          <path d="M9 8h3.1v6.1H19.8V8H23v16h-3.2v-6.7H12.1V24H9V8z" fill="#f6f1e7" />
          <rect x="9" y="14.15" width="14" height="2.35" fill="#ff6b45" />
        </svg>
      </span>
      <span className="brand-text">
        <span className="brand-name">Hope1Source</span>
        <span className="brand-sub">Check-ins</span>
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
              {org.program} ({org.product}). {org.legalName} is the 501(c)(3).
            </p>
            <p>
              <a href={mailto({})}>{org.email}</a>
            </p>
          </div>
          <nav aria-label="Footer">
            <ul className="footer-links">
              {footerLinks.map((item) => (
                <li key={item.label}>
                  {item.external ? (
                    <a href={item.href}>{item.label}</a>
                  ) : (
                    <Link to={item.to}>{item.label}</Link>
                  )}
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <div className="footer-base">
          <p>
            <a href={org.hubUrl}>hopeonesource.me</a>
          </p>
          <p className="footer-crisis">
            Crisis support in the U.S.: call or text <a href="tel:988">988</a>.
          </p>
          <p>© {new Date().getFullYear()} {org.legalName}</p>
        </div>
      </footer>
    </div>
  )
}
