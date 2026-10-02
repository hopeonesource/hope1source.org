import { useId } from 'react'

/**
 * Original abstract wash for the dark hero.
 * Warm sun, a second soft disc, and two open arcs — light and a path,
 * not a skyline, grid, or figure.
 */
export default function MissionWash({ tone = 'home' }) {
  const id = useId().replace(/:/g, '')
  const sun = `sun-${id}`
  const glow = `glow-${id}`

  return (
    <div className={`mission-wash tone-${tone}`} aria-hidden="true">
      <svg className="wash-svg" viewBox="0 0 800 800" focusable="false">
        <defs>
          <radialGradient id={sun} cx="50%" cy="50%" r="50%">
            <stop className="wash-sun-core" offset="0%" stopColor="#ffe4d8" stopOpacity="1" />
            <stop className="wash-sun-mid" offset="22%" stopColor="#ff6b45" stopOpacity="1" />
            <stop offset="58%" stopColor="#ff6b45" stopOpacity="0.72" />
            <stop offset="100%" stopColor="#ff6b45" stopOpacity="0" />
          </radialGradient>
          <radialGradient id={glow} cx="50%" cy="50%" r="50%">
            <stop className="wash-glow-core" offset="0%" stopColor="#d7f0e4" stopOpacity="0.95" />
            <stop offset="40%" stopColor="#7eb89a" stopOpacity="0.85" />
            <stop offset="100%" stopColor="#7eb89a" stopOpacity="0" />
          </radialGradient>
        </defs>
        <circle className="wash-sun" cx="560" cy="250" r="250" fill={`url(#${sun})`} />
        <circle className="wash-glow" cx="300" cy="500" r="210" fill={`url(#${glow})`} />
        <path
          className="wash-arc"
          d="M90 540c150-90 250-90 390 20"
          fill="none"
          stroke="#f6f1e7"
          strokeOpacity="0.38"
          strokeWidth="2.5"
        />
        <path
          className="wash-arc-warm"
          d="M150 610c130-48 230-36 340 48"
          fill="none"
          stroke="#ffb199"
          strokeOpacity="0.85"
          strokeWidth="3"
        />
        <circle cx="488" cy="292" r="7" fill="#f6f1e7" opacity="0.9" />
      </svg>
      <div className="wash-veil" />
    </div>
  )
}
