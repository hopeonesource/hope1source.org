import { roles } from './roles.js'
import { services } from './services.js'
import { stories } from './stories.js'

/**
 * Public URLs for the v3 sitemap. Written only into dist/v3.
 * The current site's public/sitemap.xml is not touched.
 */
export const pages = [
  { path: '/', priority: '1.0', changefreq: 'weekly' },
  { path: '/about', priority: '0.8', changefreq: 'monthly' },
  { path: '/team', priority: '0.7', changefreq: 'monthly' },
  { path: '/contact', priority: '0.8', changefreq: 'monthly' },
  { path: '/donate', priority: '0.8', changefreq: 'monthly' },
  { path: '/get-involved', priority: '0.7', changefreq: 'monthly' },
  { path: '/outreach-tools', priority: '0.8', changefreq: 'monthly' },
  { path: '/learn-more', priority: '0.8', changefreq: 'monthly' },
  { path: '/readiness', priority: '0.8', changefreq: 'monthly' },
  { path: '/public-agencies', priority: '0.8', changefreq: 'monthly' },
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

/** Old paths the preview still catches. /for-venues opens the access-points page. */
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
  ['/data-insights-tools', '/for-providers'],
  ['/for-venues', '/access-points'],
  ['/case-studies/hopeonesource-saves-lives-with-emergency-shelter-alerts', '/case-studies/emergency-shelter-alerts'],
]
