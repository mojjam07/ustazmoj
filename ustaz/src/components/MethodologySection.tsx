import type { LandingStrings } from '../landing/types'

export function MethodologySection({ strings }: { strings: LandingStrings }) {
  return (
    <section className="section section-dark" id="methodology">
      <div className="section-header reveal">
        <span className="section-label" style={{ color: 'var(--gold)' }}>
          {strings.methodology.label}
        </span>
        <h2 className="section-title section-title-light">{strings.methodology.title}</h2>
        <p className="section-subtitle section-subtitle-light">{strings.methodology.subtitle}</p>
        <div className="ornament" style={{ color: 'var(--gold)' }}>✦</div>
      </div>

      <div className="method-steps">
        {strings.methodology.steps.map((s, idx) => (
          <div key={s.title} className="method-step reveal">
            <div className="step-number">{idx + 1}</div>
            <h3 className="step-title">{s.title}</h3>
            <p className="step-desc">{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

