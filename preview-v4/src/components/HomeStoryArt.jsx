import { publicUrl } from '../lib/links.js'

const cream = '#f5efe3'
const ink = '#10211b'
const coral = '#bd452b'
const sage = '#537b68'
const font = 'Arial, Helvetica, sans-serif'

/** Larger, simpler artwork for homepage cards; full study figures stay unchanged. */
export default function HomeStoryArt({ story }) {
  if (story.slug === 'veterans-affairs-national-homeless-programs') {
    const rows = [
      ['Food', 74, 97],
      ['Counseling', 68, 87],
      ['PTSD care', 77, 97],
      ['Blood pressure / prediabetes', 74, 83],
    ]
    return (
      <svg viewBox="0 0 600 400" role="img" aria-label={story.imageAlt} fontFamily={font}>
        <rect width="600" height="400" fill={cream} />
        <text x="26" y="40" fill={ink} fontSize="28" fontWeight="700">Access improved in year three</text>
        <text x="26" y="68" fill="#4e6359" fontSize="19">Visits with no reported barrier</text>
        <circle cx="381" cy="63" r="5" fill={sage} />
        <text x="393" y="69" fill={ink} fontSize="18">Year 2</text>
        <circle cx="487" cy="63" r="5" fill={coral} />
        <text x="499" y="69" fill={ink} fontSize="18">Year 3</text>
        {rows.map(([label, before, after], i) => (
          <g key={label} transform={`translate(26 ${101 + i * 72})`}>
            <text y="15" fill={ink} fontSize="21" fontWeight="700">{label}</text>
            <text x="548" y="15" textAnchor="end" fontSize="23" fontWeight="700">
              <tspan fill="#50685c">{before}%</tspan>
              <tspan fill="#6f776f"> → </tspan>
              <tspan fill={coral}>{after}%</tspan>
            </text>
            <rect y="28" width="548" height="10" rx="5" fill="#dfe3d9" />
            <rect y="28" width={548 * before / 100} height="10" rx="5" fill={sage} />
            <rect y="43" width="548" height="10" rx="5" fill="#e8dfd3" />
            <rect y="43" width={548 * after / 100} height="10" rx="5" fill={coral} />
          </g>
        ))}
        <text x="26" y="388" fill="#4e6359" fontSize="16">Year 2 (2018) → Year 3 (2019) · Published study</text>
      </svg>
    )
  }

  if (story.slug === 'emergency-shelter-alerts') {
    return (
      <svg viewBox="0 0 600 400" role="img" aria-label="Historic DC outreach photo and H1S hypothermia shelter alert. DC reported a 78% reduction in hypothermia deaths during the supported period." fontFamily={font}>
        <defs>
          <clipPath id="home-alert-photo"><rect x="24" y="74" width="238" height="174.3" rx="10" /></clipPath>
          <clipPath id="home-alert-screen"><rect x="282" y="74" width="294" height="208" rx="12" /></clipPath>
        </defs>
        <rect width="600" height="400" fill={ink} />
        <circle cx="31" cy="32" r="6" fill="#ff8e67" />
        <text x="47" y="40" fill={cream} fontSize="25" fontWeight="700">H1S: DC hypothermia alerts</text>
        <image href={publicUrl('photos/dc-homeless.jpg')} x="24" y="74" width="238" height="174.3" preserveAspectRatio="xMidYMid meet" clipPath="url(#home-alert-photo)" />
        <text x="24" y="273" fill="#bdcfc4" fontSize="18">Historic community outreach</text>
        <image href={publicUrl('photos/dc-hypothermia-messages-focus.jpg')} x="282" y="-58" width="294" height="450" preserveAspectRatio="xMidYMid meet" clipPath="url(#home-alert-screen)" />
        <rect x="291" y="108" width="276" height="146" rx="18" fill="#e9e9ef" stroke="#ffffff" strokeWidth="2" />
        <g fill="#13221b" fontSize="21">
          <text x="304" y="137">H1S: The Hypothermia</text>
          <text x="304" y="167">Alert is active. Call</text>
          <text x="304" y="197"><tspan fill="#075fa9" textDecoration="underline">202-399-7093</tspan> for</text>
          <text x="304" y="227">transportation to shelter.</text>
        </g>
        <line x1="24" y1="300" x2="576" y2="300" stroke="#4b6658" />
        <text x="218" y="323" fill="#ffad7d" fontSize="17" fontWeight="700" letterSpacing="1.6">DC REPORTED</text>
        <text x="20" y="378" fill={cream} fontSize="76" fontWeight="700">78%</text>
        <text x="218" y="350" fill={cream} fontSize="24" fontWeight="700">Hypothermia deaths fell</text>
        <text x="218" y="377" fill="#c2d2c9" fontSize="20">during the supported period.</text>
      </svg>
    )
  }

  return (
    <svg viewBox="0 0 600 400" role="img" aria-label="Dreamers and Achievers partner-reported growth during the supported period: funding from $110,000 to $560,000, feedback from 25 to 2,268 people, and follow-ups from 60 to 1,400 people." fontFamily={font}>
      <defs><clipPath id="home-dreamers-portrait"><circle cx="540" cy="47" r="29" /></clipPath></defs>
      <rect width="600" height="400" fill={cream} />
      <rect width="600" height="94" fill={ink} />
      <text x="26" y="40" fill={cream} fontSize="27" fontWeight="700">Dreamers &amp; Achievers</text>
      <text x="26" y="70" fill="#c1d1c5" fontSize="19">Partner-reported growth</text>
      <circle cx="540" cy="47" r="32" fill="#ff956e" />
      <image href={publicUrl('photos/dorothy-adams-home-384.jpg')} x="511" y="18" width="58" height="58" clipPath="url(#home-dreamers-portrait)" />
      <line x1="277" y1="122" x2="277" y2="352" stroke="#d5d9cf" strokeWidth="2" />
      <text x="26" y="145" fill={coral} fontSize="20" fontWeight="700" letterSpacing="1.2">FUNDING</text>
      <text x="20" y="268" fill={ink} fontFamily="Georgia, serif" fontSize="132" fontWeight="700">5x</text>
      <text x="26" y="314" fill={ink} fontSize="25" fontWeight="700">$110K → $560K</text>
      <text x="306" y="145" fill={coral} fontSize="20" fontWeight="700" letterSpacing="1.2">FEEDBACK</text>
      <text x="302" y="197" fill={ink} fontSize="49" fontWeight="700">2,268</text>
      <text x="306" y="224" fill="#506359" fontSize="20">from 25 people</text>
      <text x="306" y="270" fill={coral} fontSize="20" fontWeight="700" letterSpacing="1.2">FOLLOW-UPS</text>
      <text x="302" y="321" fill={ink} fontSize="49" fontWeight="700">1,400</text>
      <text x="306" y="348" fill="#506359" fontSize="20">from 60 people</text>
      <text x="26" y="385" fill="#506359" fontSize="18">Growth during the supported period</text>
    </svg>
  )
}
