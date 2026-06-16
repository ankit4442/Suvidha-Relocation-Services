import { COMPANY, phoneLink, whatsappLink } from '../constants.js'

export default function FloatingButtons() {
  return (
    <div className="floating">
      <a
        className="floating__btn floating__btn--wa"
        href={whatsappLink(COMPANY.phonePrimary)}
        target="_blank"
        rel="noreferrer"
        aria-label="Chat on WhatsApp"
      >
        💬
      </a>
      <a
        className="floating__btn floating__btn--call"
        href={`tel:${phoneLink(COMPANY.phonePrimary)}`}
        aria-label="Call us"
      >
        📞
      </a>
    </div>
  )
}
