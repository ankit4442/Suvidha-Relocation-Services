import { COMPANY } from '../constants.js'

const REASONS = [
  { title: 'Experienced Team', text: 'Trained professionals who handle every item with utmost care.' },
  { title: 'Affordable Pricing', text: 'Transparent quotes with no hidden charges — value for every rupee.' },
  { title: 'On-Time Delivery', text: 'We respect your schedule and deliver exactly when promised.' },
  { title: 'Safe & Insured', text: 'Goods-in-transit coverage gives you complete peace of mind.' },
]

export default function About() {
  return (
    <section id="about" className="section about">
      <div className="container about__inner">
        <div className="about__media">
          <img
            src="/img2.png"
            alt={`${COMPANY.name} team packing a family's home`}
            className="about__photo"
          />
        </div>

        <div className="about__content">
          <span className="section__eyebrow">Why Choose Us</span>
          <h2 className="section__title">
            Reliable Movers You Can Trust
          </h2>
          <p className="section__lead">
            At {COMPANY.name}, we treat your belongings like our own. From
            packing the first box to placing the last one, our mission is a
            smooth, safe and worry-free relocation experience.
          </p>

          <div className="about__reasons">
            {REASONS.map((r) => (
              <div key={r.title} className="about__reason">
                <span className="about__check">✔</span>
                <div>
                  <strong>{r.title}</strong>
                  <p>{r.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
