import { useEffect, useRef } from 'react'
import { useLocation } from 'react-router-dom'

/** Keep client-side page changes consistent with opening a new document. */
export default function RouteNavigation() {
  const location = useLocation()
  const previousVisit = useRef(null)

  useEffect(() => {
    const previousRestoration = window.history.scrollRestoration
    window.history.scrollRestoration = 'manual'
    return () => {
      window.history.scrollRestoration = previousRestoration
    }
  }, [])

  useEffect(() => {
    let restoreAnchorTabIndex

    // Wait until the destination route has rendered before moving the viewport.
    const frame = window.requestAnimationFrame(() => {
      // Set this after the frame starts so a StrictMode effect replay does not
      // turn an initial page load into a navigation and steal initial focus.
      const isNavigation = previousVisit.current !== null
      previousVisit.current = location.key

      if (location.hash) {
        let id = location.hash.slice(1)
        try {
          id = decodeURIComponent(id)
        } catch {
          // An unencoded percent sign is still a valid literal element ID.
        }
        const target = document.getElementById(id)
        if (target) {
          target.scrollIntoView({ block: 'start', behavior: 'instant' })
          if (target.tabIndex < 0 && !target.hasAttribute('tabindex')) {
            target.setAttribute('tabindex', '-1')
            restoreAnchorTabIndex = () => {
              target.removeAttribute('tabindex')
              target.removeEventListener('blur', restoreAnchorTabIndex)
            }
            target.addEventListener('blur', restoreAnchorTabIndex, { once: true })
          }
          target.focus({ preventScroll: true })
          return
        }
      }

      window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
      if (isNavigation) document.getElementById('main')?.focus({ preventScroll: true })
    })

    return () => {
      window.cancelAnimationFrame(frame)
      restoreAnchorTabIndex?.()
    }
  }, [location.key, location.pathname, location.search, location.hash])

  return null
}
