import { COMPANY } from '../constants.js'

const REASONS = [
  {
    title: 'Experienced Team',
    text: 'Trained packers and movers professionals who handle household and office goods with maximum care.',
  },
  {
    title: 'Affordable Pricing',
    text: 'Transparent relocation charges with no hidden costs, providing the best value for your money.',
  },
  {
    title: 'On-Time Delivery',
    text: 'We ensure timely home shifting and office relocation services across India.',
  },
  {
    title: 'Safe & Insured',
    text: 'Comprehensive safety measures and goods-in-transit insurance for complete peace of mind.',
  },
]

export default function About() {
  return (
    <section id="about" className="section about">
      <div className="container about__inner">
        <div className="about__media">
          <img
            src="/img2.png"
            alt="Professional packers and movers team providing home relocation services"
            className="about__photo"
          />
        </div>

        <div className="about__content">
          <span className="section__eyebrow">Why Choose Us</span>

          <h2 className="section__title">
            Trusted Packers and Movers for Safe Relocation Services
          </h2>

          <p className="section__lead">
            At {COMPANY.name}, we specialize in home shifting, office
            relocation, packing and moving, car transportation and warehousing
            services across India. Our experienced team uses high-quality
            packing materials and modern transportation methods to ensure a
            safe, secure and hassle-free moving experience for every customer.
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
