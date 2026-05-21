import type { LandingStrings, Language } from '../landing/types'
import profPic from '../assets/portrait.png'



export function HeroSection({
  strings,
  lang,
  setLang
}: {
  strings: LandingStrings
  lang: Language
  setLang: (l: Language) => void
}) {
  return (
    <section className="hero" id="home">
      <div className="hero-bg" />
      <div className="hero-arch" />

      <div className="hero-content">
        <span className="hero-bismillah">{strings.hero.bismillah}</span>
        <span className="hero-eyebrow">{strings.hero.eyebrow}</span>
        <h1 className="hero-name">{lang === 'ar' ? strings.hero.nameAr : strings.hero.nameEn}</h1>
        <p className="hero-name-en" style={{ display: lang === 'ar' ? 'none' : 'block' }}>
          {strings.hero.nameEn}
        </p>
        <div className="hero-divider" />
        <p className="hero-bio">{strings.hero.bio}</p>
        <p className="hero-motto">{strings.hero.motto}</p>

        <div className="hero-buttons">
          <a href="#contact" className="btn-primary">
            {strings.hero.btnPrimary}
          </a>
          <a href="#subjects" className="btn-secondary">
            {strings.hero.btnSecondary}
          </a>
        </div>

        <div style={{ marginTop: '1.5rem', display: 'flex', gap: 10, justifyContent: 'flex-end' }}>
          <button
            type="button"
            onClick={() => setLang('en')}
            style={{
              background: lang === 'en' ? 'var(--gold)' : 'transparent',
              border: `1px solid var(--gold)`,
              color: 'var(--gold-light)',
              padding: '0.4rem 0.9rem',
              borderRadius: 3,
              cursor: 'pointer'
            }}
          >
            EN
          </button>
          <button
            type="button"
            onClick={() => setLang('ar')}
            style={{
              background: lang === 'ar' ? 'var(--gold)' : 'transparent',
              border: `1px solid var(--gold)`,
              color: 'var(--gold-light)',
              padding: '0.4rem 0.9rem',
              borderRadius: 3,
              cursor: 'pointer'
            }}
          >
            AR
          </button>
        </div>
      </div>

      <div className="hero-image-side">
        <div>
          <div className="avatar-frame">
            <div className="avatar-placeholder">
              <div className="avatar-arabesque">✦ &nbsp; {lang === 'en' ? 'Bismillah' : 'بسم الله'} &nbsp; ✦</div>
              <div className="avatar-icon-wrap">
                <img src={profPic} alt="Profile Picture" />
              </div>
              <div className="avatar-name-plate">{strings.hero.avatarName}</div>
              <div className="avatar-title-plate">{strings.hero.avatarTitle}</div>
              <div className="upload-note">{strings.hero.uploadNote}</div>
            </div>
          </div>
          <div className="credential-badges">
            {strings.hero.badges.map((b) => (
              <span key={b} className="badge">
                {b}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

