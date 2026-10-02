import { Link } from 'react-router-dom'
import Seo from '../components/Seo.jsx'

export default function NotFound() {
  return (
    <>
      <Seo
        title="Page not found"
        description="That Hope1Source page is not here. Try the mission home, contact, or a partner door."
      />
      <section className="page-hero">
        <div className="wrap narrow">
          <p className="kicker">404</p>
          <h1>That page is not on this site.</h1>
          <p className="lede">
            The address may be from the old website. The new pages are linked below. If you were looking for a service,
            start with the resource guides in the footer rather than a pricing page.
          </p>
          <ul className="lost-links">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <li>
              <Link to="/donate">Donate</Link>
            </li>
            <li>
              <Link to="/case-studies">Case studies</Link>
            </li>
            <li>
              <Link to="/faqs">FAQs</Link>
            </li>
          </ul>
        </div>
      </section>
    </>
  )
}
