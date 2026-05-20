import type { LandingStrings } from '../landing/types'
import { SubjectIcon } from './SubjectIcon'

export function SubjectsSection({ strings }: { strings: LandingStrings }) {
  return (
    <section className="section section-light" id="subjects">
      <div className="section-header reveal">
        <span className="section-label">{strings.subjects.label}</span>
        <h2 className="section-title">{strings.subjects.title}</h2>
        <p className="section-subtitle">{strings.subjects.subtitle}</p>
        <div className="ornament">✦</div>
      </div>

      <div className="subjects-grid">
        {strings.subjects.cards.map((c) => (
          <div key={c.name} className="subject-card reveal">
            <div className="subject-icon">
              <SubjectIcon icon={c.icon} />
            </div>
            <h3 className="subject-name">{c.name}</h3>
            <p className="subject-desc">{c.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

