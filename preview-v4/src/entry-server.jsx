import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router-dom'
import { AppRoutes, basename } from './App.jsx'
import { SeoContext } from './components/Seo.jsx'
import { renderMetadata } from './lib/seo.js'

export { absoluteUrl, escapeHtml, siteIndexable } from './lib/seo.js'

export function renderRoute(pathname) {
  const collector = { current: null }
  const html = renderToString(
    <StaticRouter basename={basename} location={`${basename}${pathname}`}>
      <SeoContext.Provider value={collector}>
        <AppRoutes />
      </SeoContext.Provider>
    </StaticRouter>,
  )
  if (!collector.current) throw new Error(`No page metadata collected for ${pathname}`)
  return { html, head: renderMetadata(collector.current), metadata: collector.current }
}
