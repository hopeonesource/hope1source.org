import PageHero from '../components/PageHero.jsx'
import Seo from '../components/Seo.jsx'
import { faqs } from '../content/faqs.js'

export default function Faqs() {
  return (
    <>
      <Seo
        title="FAQs"
        description="Answers for agencies, providers, access points, funders, and volunteers."
      />
      <PageHero
        kicker="FAQs"
        title="Straight answers."
        lede="How the tools work, who they are for, and how to write partnerships."
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
