import { COMPANY, phoneLink, whatsappLink } from '../constants.js'

export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="container hero__inner">
        <div className="hero__content">
          <span className="hero__badge">★ Trusted across India</span>
          <h1 className="hero__title">
            Stress-Free <span>Packing &amp; Moving</span> Services
          </h1>
          <p className="hero__subtitle">
            {COMPANY.name} provides safe, reliable and affordable relocation for
            your home and office. Trained staff, quality packing material and
            on-time delivery — every single move.
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
            <a href={`tel:${phoneLink(COMPANY.phonePrimary)}`}>{COMPANY.phonePrimary}</a>
            <span className="hero__call-sep">/</span>
            <a href={`tel:${phoneLink(COMPANY.phoneSecondary)}`}>{COMPANY.phoneSecondary}</a>
          </div>
        </div>

        <div className="hero__card">
          <h3>Request a Callback</h3>
          <p className="hero__card-sub">We reply within 30 minutes</p>
          <ul className="hero__features">
            <li>✔ Free survey &amp; transparent pricing</li>
            <li>✔ Insured &amp; damage-free moving</li>
            <li>✔ Doorstep packing &amp; unpacking</li>
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
