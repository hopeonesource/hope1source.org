import { useId } from 'react'

/**
 * Original illustrated panels for the three homepage stories.
 * Veterans: a dawn and rising bands — care opening, access climbing.
 * Shelter: a roof between cold and hot bands, plus an alert mark.
 * Dreamers: steps and an open page under a warm window — learning, no people.
 */
export default function StoryArt({ slug }) {
  const id = useId().replace(/:/g, '')

  if (slug === 'veterans-affairs-national-homeless-programs') {
    return (
      <svg className="story-svg" viewBox="0 0 640 360" aria-hidden="true" focusable="false">
        <defs>
          <linearGradient id={`care-sky-${id}`} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#10261e" />
            <stop offset="100%" stopColor="#1c3a30" />
          </linearGradient>
          <radialGradient id={`care-sun-${id}`} cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#ffe4d6" />
            <stop offset="28%" stopColor="#ff6b45" />
            <stop offset="100%" stopColor="#ff6b45" stopOpacity="0" />
          </radialGradient>
        </defs>
        <rect width="640" height="360" fill={`url(#care-sky-${id})`} />
        <circle cx="150" cy="250" r="170" fill={`url(#care-sun-${id})`} />
        <path d="M70 250c90-70 150-70 250 10" fill="none" stroke="#f6f1e7" strokeOpacity="0.85" strokeWidth="3" />
        <circle cx="250" cy="248" r="10" fill="#f6f1e7" />
        <rect x="390" y="230" width="46" height="70" rx="6" fill="#b7e0c8" fillOpacity="0.85" />
        <rect x="454" y="176" width="46" height="124" rx="6" fill="#f0ddc0" />
        <rect x="518" y="112" width="46" height="188" rx="6" fill="#ff6b45" />
      </svg>
    )
  }

  if (slug === 'emergency-shelter-alerts') {
    return (
      <svg className="story-svg" viewBox="0 0 640 360" aria-hidden="true" focusable="false">
        <defs>
          <linearGradient id={`cold-${id}`} x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#163e48" />
            <stop offset="100%" stopColor="#7eb8c4" />
          </linearGradient>
          <linearGradient id={`heat-${id}`} x1="1" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#ff6b45" />
            <stop offset="100%" stopColor="#7a3418" />
          </linearGradient>
        </defs>
        <rect width="640" height="360" fill="#101816" />
        <path d="M-20 40h680l-80 90H-20z" fill={`url(#cold-${id})`} opacity="0.95" />
        <path d="M-20 250h700l-60 110H-20z" fill={`url(#heat-${id})`} opacity="0.9" />
        <path d="M250 168 L320 112 L390 168 Z" fill="#f6f1e7" />
        <rect x="268" y="168" width="104" height="72" fill="#e7ddd0" />
        <rect x="308" y="196" width="24" height="44" rx="2" fill="#17382c" />
        <rect x="430" y="188" width="78" height="118" rx="12" fill="#1b2924" stroke="#f6f1e7" strokeOpacity="0.7" />
        <circle cx="469" cy="228" r="10" fill="#ff6b45" />
        <path d="M120 150h70M150 176h54M96 202h48" fill="none" stroke="#d7f0e4" strokeOpacity="0.7" strokeWidth="3" strokeLinecap="round" />
      </svg>
    )
  }

  return (
    <svg className="story-svg" viewBox="0 0 640 360" aria-hidden="true" focusable="false">
      <defs>
        <radialGradient id={`window-${id}`} cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#fff4e4" />
          <stop offset="35%" stopColor="#e8c48a" />
          <stop offset="100%" stopColor="#e8c48a" stopOpacity="0" />
        </radialGradient>
      </defs>
      <rect width="640" height="360" fill="#1a1612" />
      <circle cx="500" cy="90" r="150" fill={`url(#window-${id})`} />
      <path d="M86 292h120v-52H86z" fill="#3a3228" />
      <path d="M206 292h120v-104H206z" fill="#6a5340" />
      <path d="M326 292h120v-156H326z" fill="#e8c48a" />
      <path d="M150 210l70-36 70 36v28H150z" fill="#f6f1e7" />
      <path d="M220 174l70-36 70 36v28H220z" fill="#d7f0e4" />
      <path d="M218 210v-28" stroke="#17382c" strokeWidth="3" />
    </svg>
  )
}
