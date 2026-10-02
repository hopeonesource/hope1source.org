import PageHero from '../components/PageHero.jsx'
import Seo from '../components/Seo.jsx'
import { faqs } from '../content/faqs.js'

export default function Faqs() {
  return (
    <>
      <Seo
        title="FAQs"
        description="Answers for providers, venues, backers, and volunteers about Hope With Love, privacy, cost, and where to log in."
      />
      <PageHero
        kicker="FAQs"
        title="Straight answers, in a mission voice."
        lede="Written from the public FAQ and the pages around it. Where a fact is dated or in conflict, the answer says so."
      />
      <section className="section">
        <div className="wrap narrow">
          <dl className="faq-list">
            {faqs.map((item) => (
              <div key={item.q} className="faq">
                <dt>{item.q}</dt>
                <dd>{item.a}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>
    </>
  )
}
