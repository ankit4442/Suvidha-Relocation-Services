import { COMPANY, phoneLink, whatsappLink } from '../constants.js'

export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="container hero__inner">
        <div className="hero__content">
          <span className="hero__badge">★ Trusted Packers & Movers Across India</span>

          <h1 className="hero__title">
            Best Packers and Movers in India for Home & Office Relocation
          </h1>

          <p className="hero__subtitle">
            {COMPANY.name} provides safe, reliable and affordable home shifting,
            office relocation, packing, loading, unloading, car transportation
            and warehousing services across India. Our trained professionals,
            high-quality packing materials and timely delivery ensure a smooth
            and stress-free moving experience.
          </p>

          <div className="hero__actions">
            <a className="btn btn--primary" href="#contact">
              Get a Free Quote
            </a>

            <a
              className="btn btn--ghost"
              href={whatsappLink(COMPANY.phonePrimary)}
              target="_blank"
              rel="noreferrer"
            >
              WhatsApp Us
            </a>
          </div>

          <div className="hero__call">
            <span>Call now:</span>

            <a href={`tel:${phoneLink(COMPANY.phonePrimary)}`}>
              {COMPANY.phonePrimary}
            </a>

            <span className="hero__call-sep">/</span>

            <a href={`tel:${phoneLink(COMPANY.phoneSecondary)}`}>
              {COMPANY.phoneSecondary}
            </a>
          </div>
        </div>

        <div className="hero__card">
          <h3>Request a Callback</h3>

          <p className="hero__card-sub">
            We respond within 30 minutes
          </p>

          <ul className="hero__features">
            <li>✔ Free survey & transparent pricing</li>
            <li>✔ Insured & damage-free moving services</li>
            <li>✔ Professional packing & unpacking support</li>
            <li>✔ Home shifting and office relocation experts</li>
            <li>✔ Safe car and bike transportation</li>
            <li>✔ Pan-India delivery network</li>
          </ul>

          <a className="btn btn--primary btn--block" href="#contact">
            Book Your Move
          </a>
        </div>
      </div>
    </section>
  )
}
