import { useState, useEffect } from 'react'
import { COMPANY, phoneLink } from '../constants.js'
import logo from "../../assets/logo2.png";

const LINKS = [
  { href: '#home', label: 'Home' },
  { href: '#services', label: 'Services' },
  { href: '#about', label: 'About' },
  { href: '#process', label: 'Process' },
  { href: '#testimonials', label: 'Reviews' },
  { href: '#contact', label: 'Contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <div className="container navbar__inner">
        <a href="#home" className="navbar__brand" onClick={() => setOpen(false)}>
          <img src={logo} alt={`${COMPANY.name} logo`} className="navbar__logo" />
          <span className="navbar__brand-text">
            <strong>Suvidha</strong>
            <small>Relocation Services</small>
          </span>
        </a>

        <nav className={`navbar__nav ${open ? 'is-open' : ''}`}>
          {LINKS.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)}>
              {l.label}
            </a>
          ))}
          <a
            className="btn btn--primary navbar__cta"
            href={`tel:${phoneLink(COMPANY.phonePrimary)}`}
            onClick={() => setOpen(false)}
          >
            Call {COMPANY.phonePrimary}
          </a>
        </nav>

        <button
          className="navbar__toggle"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </header>
  )
}
