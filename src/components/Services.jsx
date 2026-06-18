import { COMPANY, phoneLink } from '../constants.js'
import logo from "../../assets/logo2.png";

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container footer__grid">
        <div className="footer__brand">
          <div className="footer__brand-top">
            <img src={logo} alt={`${COMPANY.name} logo`} />
            <span>
              <strong>Suvidha</strong>
              <small>Relocation Services</small>
            </span>
          </div>
          <p>
  Suvidha Relocation Services provides professional home shifting,
  office relocation, packing and moving, car transportation and
  warehousing services across India with safe and timely delivery.
</p>
        </div>

        <div className="footer__col">
          <h4>Quick Links</h4>
          <a href="#home">Home</a>
          <a href="#services">Services</a>
          <a href="#about">About Us</a>
          <a href="#contact">Contact</a>
        </div>

        <div className="footer__col">
          <h4>Our Services</h4>
          <a href="#services">Home Relocation</a>
          <a href="#services">Office Relocation</a>
          <a href="#services">Car &amp; Bike Transport</a>
          <a href="#services">Warehousing</a>
        </div>

        <div className="footer__col">
          <h4>Contact</h4>
          <a href={`tel:${phoneLink(COMPANY.phonePrimary)}`}>{COMPANY.phonePrimary}</a>
          <a href={`tel:${phoneLink(COMPANY.phoneSecondary)}`}>{COMPANY.phoneSecondary}</a>
          <a href={`mailto:${COMPANY.email}`}>{COMPANY.email}</a>
        </div>
      </div>

      <div className="footer__bottom">
        <div className="container">
          © {year} {COMPANY.name}. All Rights Reserved.
        </div>
      </div>
    </footer>
  )
}
