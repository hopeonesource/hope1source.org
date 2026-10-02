import { roles } from './roles.js'
import { services } from './services.js'
import { stories } from './stories.js'

/**
 * Public URLs for the sitemap. App.jsx must render each path.
 * scripts/check-routes.mjs fails the build if a path is missing.
 */
export const pages = [
  { path: '/', priority: '1.0', changefreq: 'weekly' },
  { path: '/about', priority: '0.8', changefreq: 'monthly' },
  { path: '/team', priority: '0.7', changefreq: 'monthly' },
  { path: '/contact', priority: '0.8', changefreq: 'monthly' },
  { path: '/donate', priority: '0.8', changefreq: 'monthly' },
  { path: '/get-involved', priority: '0.7', changefreq: 'monthly' },
  { path: '/faqs', priority: '0.6', changefreq: 'monthly' },
  { path: '/press', priority: '0.5', changefreq: 'monthly' },
  { path: '/case-studies', priority: '0.7', changefreq: 'monthly' },
  ...stories.map((story) => ({
    path: `/case-studies/${story.slug}`,
    priority: '0.6',
    changefreq: 'yearly',
  })),
  ...roles.map((role) => ({
    path: role.path,
    priority: '0.7',
    changefreq: 'monthly',
  })),
  ...services.map((service) => ({
    path: `/${service.slug}`,
    priority: '0.5',
    changefreq: 'monthly',
  })),
  { path: '/privacy', priority: '0.3', changefreq: 'yearly' },
  { path: '/terms', priority: '0.3', changefreq: 'yearly' },
]

/** Old Webflow paths that this app can still catch on the SPA. Real 301s live in redirects.md. */
export const aliases = [
  ['/privacy-policy', '/privacy'],
  ['/terms-of-service', '/terms'],
  ['/donate-now', '/donate'],
  ['/our-mission', '/about'],
  ['/about-us', '/about'],
  ['/our-team', '/team'],
  ['/our-sponsors', '/about'],
  ['/testimonials', '/case-studies'],
  ['/in-the-news', '/press'],
  ['/learn-more', '/contact'],
  ['/outreach-tools', '/for-providers'],
  ['/data-insights-tools', '/for-providers'],
  ['/case-studies/hopeonesource-saves-lives-with-emergency-shelter-alerts', '/case-studies/emergency-shelter-alerts'],
]
