import { useEffect, useRef, useState } from 'react'
import { Link, NavLink, Outlet, useLocation } from 'react-router-dom'
import { footerLinks, org, primaryNav } from '../content/org.js'
import { mailto, publicUrl } from '../lib/links.js'
import { siteIndexable } from '../lib/seo.js'
import BackToTop from './BackToTop.jsx'
import RouteNavigation from './RouteNavigation.jsx'
import '../styles/navigation.css'

const [footerOperator, footerRegistration] = org.procurement.split(/ (?=SAM\.gov)/)

function Brand({ onClick, id }) {
  return (
    <Link className="brand" to="/" onClick={onClick} id={id}>
      <img
        className="brand-logo"
        src={publicUrl('logo-hope-one-source.png')}
        alt="Hope1Source Check-ins"
        width="2500"
        height="805"
        decoding="async"
      />
    </Link>
  )
}

export default function Layout() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const header = useRef(null)
  const menuToggle = useRef(null)
  const location = useLocation()

  useEffect(() => {
    setOpen(false)
  }, [location.pathname, location.search, location.hash])

  useEffect(() => {
    const desktop = window.matchMedia('(min-width: 961px)')
    const onResize = () => {
      if (desktop.matches) setOpen(false)
    }
    desktop.addEventListener('change', onResize)
    return () => desktop.removeEventListener('change', onResize)
  }, [])

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
    const element = header.current
    const fitMenu = () => {
      const viewport = window.visualViewport
      const bottom = viewport ? viewport.height + viewport.offsetTop : window.innerHeight
      const available = Math.max(0, bottom - element.getBoundingClientRect().bottom)
      element.style.setProperty('--nav-available-height', `${available}px`)
    }
    fitMenu()
    const observer = new ResizeObserver(fitMenu)
    observer.observe(element)
    window.addEventListener('resize', fitMenu)
    window.visualViewport?.addEventListener('resize', fitMenu)
    window.visualViewport?.addEventListener('scroll', fitMenu)
    return () => {
      observer.disconnect()
      window.removeEventListener('resize', fitMenu)
      window.visualViewport?.removeEventListener('resize', fitMenu)
      window.visualViewport?.removeEventListener('scroll', fitMenu)
      element.style.removeProperty('--nav-available-height')
    }
  }, [open])

  useEffect(() => {
    if (!open) return undefined
    const onKey = (event) => {
      if (event.key === 'Escape') {
        setOpen(false)
        menuToggle.current?.focus()
      }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  return (
    <div className="site">
      <RouteNavigation />
      <noscript>
        <style>{`@media (max-width: 960px) {
          .site .site-header { position: static; }
          .site .header-inner { flex-wrap: wrap; }
          .site .nav-toggle { display: none; }
          .site .hero, .site .page-hero.stage { margin-top: 0; }
          .site .site-nav { display: flex; position: static; flex: 1 0 100%; max-height: none; overflow: visible; }
        }`}</style>
      </noscript>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      {!siteIndexable && (
        <aside className="preview-banner" role="note">
          Third preview: a shared story across our work.{' '}
          <a href={org.currentSiteUrl}>View the current site</a>
        </aside>
      )}
      <header ref={header} className={scrolled ? 'site-header is-scrolled' : 'site-header'}>
        <div
          className="header-inner"
          onBlur={(event) => {
            if (!event.currentTarget.contains(event.relatedTarget)) setOpen(false)
          }}
        >
          <Brand id="page-top" onClick={() => setOpen(false)} />
          <button
            ref={menuToggle}
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

      <main id="main" tabIndex={-1}>
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
          <p className="footer-legal">
            {footerOperator}<br />
            {footerRegistration}
          </p>
          <p>© {new Date().getFullYear()} {org.legalName}</p>
        </div>
      </footer>
      <BackToTop />
      <noscript>
        <a className="back-to-top" href="#page-top" aria-label="Back to top" title="Back to top">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
            <path d="m5 12 7-7 7 7M12 5v15" />
          </svg>
        </a>
      </noscript>
    </div>
  )
}
