import MissionWash from './MissionWash.jsx'

export default function PageHero({ kicker, title, lede, children, stage = false, tone = 'home' }) {
  return (
    <header className={stage ? 'page-hero stage' : 'page-hero'}>
      {stage ? <MissionWash tone={tone} /> : null}
      <div className={stage ? 'wrap hero-copy' : 'wrap narrow'}>
        {kicker ? <p className="kicker">{kicker}</p> : null}
        <h1>{title}</h1>
        {lede ? <p className="lede">{lede}</p> : null}
        {children}
      </div>
    </header>
  )
}

export function DraftBanner({ children }) {
  return (
    <aside className="draft-banner" role="note">
      <p>
        <strong>Draft. Not legal advice.</strong> Counsel needs to review this page before anyone treats it as
        enforceable. Lines marked Confirm are unresolved.
      </p>
      {children}
    </aside>
  )
}

export function Confirm({ children }) {
  return (
    <p className="confirm">
      <strong>Confirm. </strong>
      {children}
    </p>
  )
}
