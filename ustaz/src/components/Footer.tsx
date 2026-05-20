import type { LandingStrings } from '../landing/types'

export function Footer({ strings }: { strings: LandingStrings }) {
  return (
    <footer>
      <div className="footer-name">{strings.footer.name}</div>
      <div className="footer-motto">{strings.footer.motto}</div>
      <div className="footer-copy">{strings.footer.copy}</div>
    </footer>
  )
}

