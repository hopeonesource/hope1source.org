import { StrictMode } from 'react'
import { createRoot, hydrateRoot } from 'react-dom/client'
import App from './App.jsx'
import '@fontsource/fraunces/latin-600.css'
import '@fontsource/fraunces/latin-600-italic.css'
import '@fontsource/fraunces/latin-ext-600.css'
import '@fontsource/fraunces/latin-ext-600-italic.css'
import '@fontsource/source-sans-3/latin-400.css'
import '@fontsource/source-sans-3/latin-600.css'
import '@fontsource/source-sans-3/latin-700.css'
import '@fontsource/source-sans-3/latin-ext-400.css'
import '@fontsource/source-sans-3/latin-ext-600.css'
import '@fontsource/source-sans-3/latin-ext-700.css'
import './styles/site.css'

const root = document.getElementById('root')
const app = (
  <StrictMode>
    <App />
  </StrictMode>
)

// Production pages already contain the same React tree as readable HTML.
// Development still starts from an empty root and uses the normal client render.
if (root.hasChildNodes()) hydrateRoot(root, app)
else createRoot(root).render(app)
