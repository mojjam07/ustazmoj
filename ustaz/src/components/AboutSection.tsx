import type { LandingStrings } from '../landing/types'

export function AboutSection({ strings }: { strings: LandingStrings }) {
  return (
    <section className="section section-mid" id="about">
      <div className="about-inner">
        <div className="about-text reveal">
          <span className="section-label" style={{ textAlign: 'right', display: 'block' }}>
            {strings.about.label}
          </span>
          <h2>{strings.about.title}</h2>
          <p>{strings.about.paragraphs[0]}</p>
          <p>{strings.about.paragraphs[1]}</p>
          <ul className="values-list">
            {strings.about.values.map((v) => (
              <li key={v}>
                <div className="check-icon">✓</div>
                {v}
              </li>
            ))}
          </ul>
        </div>

        <div className="about-stats reveal">
          {strings.about.stats.map((stat, idx) => (
            <div key={idx} className="stat-card">
              <div className="stat-number">{stat}</div>
              <div className="stat-label">{strings.about.statsLabels[idx]}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

