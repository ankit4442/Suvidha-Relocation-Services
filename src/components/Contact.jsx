import { useState } from 'react'
import { COMPANY, phoneLink, whatsappLink } from '../constants.js'

export default function Contact() {
  const [form, setForm] = useState({
    name: '',
    phone: '',
    from: '',
    to: '',
    service: 'Home Relocation',
    message: '',
  })

  const update = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const onSubmit = (e) => {
    e.preventDefault()
    const subject = `New Relocation Enquiry from ${form.name || 'Website'}`
    const body =
      `New enquiry for ${COMPANY.name}\n\n` +
      `Name: ${form.name}\n` +
      `Phone: ${form.phone}\n` +
      `Moving from: ${form.from}\n` +
      `Moving to: ${form.to}\n` +
      `Service: ${form.service}\n` +
      `Message: ${form.message}\n`
    window.location.href =
      `mailto:${COMPANY.email}` +
      `?subject=${encodeURIComponent(subject)}` +
      `&body=${encodeURIComponent(body)}`
  }

  return (
    <section id="contact" className="section contact">
      <div className="container contact__inner">
        <div className="contact__info">
          <span className="section__eyebrow">Get In Touch</span>
          <h2 className="section__title">
  Contact India's Trusted Packers and Movers
</h2>

<p className="section__lead">
  Looking for reliable home shifting, office relocation, packing and moving,
  car transportation or warehousing services? Contact Suvidha Relocation
  Services today and get a free moving quote within 30 minutes.
</p>

          <ul className="contact__list">
            <li>
              <span className="contact__icon">📞</span>
              <div>
                <small>Call Us</small>
                <a href={`tel:${phoneLink(COMPANY.phonePrimary)}`}>{COMPANY.phonePrimary}</a>
                {' / '}
                <a href={`tel:${phoneLink(COMPANY.phoneSecondary)}`}>{COMPANY.phoneSecondary}</a>
              </div>
            </li>
            <li>
              <span className="contact__icon">✉️</span>
              <div>
                <small>Email Us</small>
                <a href={`mailto:${COMPANY.email}`}>{COMPANY.email}</a>
              </div>
            </li>
            <li>
              <span className="contact__icon">💬</span>
              <div>
                <small>WhatsApp</small>
                <a href={whatsappLink(COMPANY.phonePrimary)} target="_blank" rel="noreferrer">
                  Chat with us instantly
                </a>
              </div>
            </li>
          </ul>
        </div>

        <form className="contact__form" onSubmit={onSubmit}>
          <div className="contact__row">
            <input
              name="name"
              placeholder="Your Name"
              value={form.name}
              onChange={update}
              required
            />
            <input
              name="phone"
              type="tel"
              placeholder="Phone Number"
              value={form.phone}
              onChange={update}
              required
            />
          </div>
          <div className="contact__row">
            <input name="from" placeholder="Moving From" value={form.from} onChange={update} />
            <input name="to" placeholder="Moving To" value={form.to} onChange={update} />
          </div>
          <select name="service" value={form.service} onChange={update}>
            <option>Home Relocation</option>
            <option>Office Relocation</option>
            <option>Packing &amp; Unpacking</option>
            <option>Car &amp; Bike Transport</option>
            <option>Warehousing &amp; Storage</option>
          </select>
          <textarea
            name="message"
            rows="4"
            placeholder="Tell us about your move..."
            value={form.message}
            onChange={update}
          />
          <button type="submit" className="btn btn--primary btn--block">
            Send Enquiry by Email
          </button>
        </form>
      </div>
    </section>
  )
}
