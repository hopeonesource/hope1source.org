import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import Layout from './components/Layout.jsx'
import { aliases } from './content/routes.js'
import { roles } from './content/roles.js'
import { services } from './content/services.js'
import { stories } from './content/stories.js'
import About from './pages/About.jsx'
import CaseStudies from './pages/CaseStudies.jsx'
import CaseStudy from './pages/CaseStudy.jsx'
import Contact from './pages/Contact.jsx'
import Donate from './pages/Donate.jsx'
import Faqs from './pages/Faqs.jsx'
import GetInvolved from './pages/GetInvolved.jsx'
import Home from './pages/Home.jsx'
import NotFound from './pages/NotFound.jsx'
import Press from './pages/Press.jsx'
import Privacy from './pages/Privacy.jsx'
import RolePage from './pages/RolePage.jsx'
import ServicePage from './pages/ServicePage.jsx'
import Team from './pages/Team.jsx'
import Terms from './pages/Terms.jsx'

/**
 * BrowserRouter + a copied 404.html (see scripts/spa-fallback.mjs).
 * GitHub Pages has no rewrite rules, so unknown paths return 404.html,
 * which is the built app. React Router then reads the real pathname.
 * basename follows Vite's base so project Pages (/hope1source.org/) and
 * a custom domain (/) both work.
 */
const basename = import.meta.env.BASE_URL.replace(/\/$/, '')

export default function App() {
  return (
    <BrowserRouter basename={basename}>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="team" element={<Team />} />
          <Route path="contact" element={<Contact />} />
          <Route path="donate" element={<Donate />} />
          <Route path="get-involved" element={<GetInvolved />} />
          <Route path="faqs" element={<Faqs />} />
          <Route path="press" element={<Press />} />
          <Route path="privacy" element={<Privacy />} />
          <Route path="terms" element={<Terms />} />
          <Route path="case-studies" element={<CaseStudies />} />
          {stories.map((story) => (
            <Route
              key={story.slug}
              path={`case-studies/${story.slug}`}
              element={<CaseStudy slug={story.slug} />}
            />
          ))}
          {roles.map((role) => (
            <Route key={role.id} path={role.path.slice(1)} element={<RolePage id={role.id} />} />
          ))}
          {services.map((service) => (
            <Route
              key={service.slug}
              path={service.slug}
              element={<ServicePage slug={service.slug} />}
            />
          ))}
          {aliases.map(([from, to]) => (
            <Route key={from} path={from.slice(1)} element={<Navigate to={to} replace />} />
          ))}
          <Route path="article/*" element={<Navigate to="/press" replace />} />
          <Route path="post/*" element={<Navigate to="/press" replace />} />
          <Route path="blog-categories/*" element={<Navigate to="/press" replace />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
