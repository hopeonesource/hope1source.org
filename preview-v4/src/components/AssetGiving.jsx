import { givingMethods, givingFeesUrl } from '../content/giving.js'

export default function AssetGiving() {
  return (
    <section className="asset-giving" aria-labelledby="asset-giving-title">
      <div className="wrap">
        <div className="asset-giving-intro">
          <p className="kicker">More ways to give</p>
          <h2 id="asset-giving-title">Stock, DAF, IRA, or crypto.</h2>
          <p>
            Support Hope with Love, the nonprofit behind Hope1Source Check-ins.
            Choose a giving option to continue on Every.org.
          </p>
        </div>
        <ul className="asset-giving-grid">
          {givingMethods.map(({ method, title, description, action, href }) => (
            <li key={method}>
              <a className="asset-giving-card" data-every-direct href={href}>
                <h3>{title}</h3>
                <p>{description}</p>
                <span className="asset-giving-action">
                  {action}<span aria-hidden="true">↗</span>
                  <span className="sr-only"> on Every.org</span>
                </span>
              </a>
            </li>
          ))}
        </ul>
        <p className="asset-giving-note">
          These giving links ask you to share your contact information with Hope with Love.
          {' '}Fees and eligibility vary by giving method.
          {' '}<a data-every-direct href={givingFeesUrl}>Read about fees on Every.org</a>.
        </p>
      </div>
    </section>
  )
}
