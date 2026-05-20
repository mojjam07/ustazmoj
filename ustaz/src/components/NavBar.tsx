import { useState } from 'react'
import type { LandingStrings, Language } from '../landing/types'

export function NavBar({
  strings,
  lang,
  onContact
}: {
  strings: LandingStrings
  lang: Language
  onContact?: () => void
}) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav>
      <div className="nav-logo">{lang === 'en' ? 'Ustaz Abdul Majid' : 'الأستاذ عبد المجيد'}</div>

      <button
        type="button"
        className="nav-toggle"
        aria-label={isOpen ? 'Close menu' : 'Open menu'}
        aria-expanded={isOpen}
        onClick={() => setIsOpen((v) => !v)}
      >
        <span className="nav-toggle-icon" aria-hidden="true" />
      </button>

      <ul className={isOpen ? 'nav-links nav-links--open' : 'nav-links'}>
        <li>
          <a
            href="#subjects"
            onClick={() => {
              setIsOpen(false)
            }}
          >
            {strings.nav.subjects}
          </a>
        </li>
        <li>
          <a
            href="#about"
            onClick={() => {
              setIsOpen(false)
            }}
          >
            {strings.nav.about}
          </a>
        </li>
        <li>
          <a
            href="#methodology"
            onClick={() => {
              setIsOpen(false)
            }}
          >
            {strings.nav.methodology}
          </a>
        </li>
        <li>
          <a
            href="#testimonials"
            onClick={() => {
              setIsOpen(false)
            }}
          >
            {strings.nav.testimonials}
          </a>
        </li>
        <li>
          <a
            href="#contact"
            className="nav-cta"
            onClick={() => {
              onContact?.()
              setIsOpen(false)
            }}
          >
            {strings.nav.contactCta}
          </a>
        </li>
      </ul>
    </nav>
  )
}


