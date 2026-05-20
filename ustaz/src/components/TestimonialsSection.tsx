import type { LandingStrings } from '../landing/types'

export function TestimonialsSection({ strings }: { strings: LandingStrings }) {
  return (
    <section className="section section-light" id="testimonials">
      <div className="section-header reveal">
        <span className="section-label">{strings.testimonials.label}</span>
        <h2 className="section-title">{strings.testimonials.title}</h2>
        <p className="section-subtitle">{strings.testimonials.subtitle}</p>
        <div className="ornament">✦</div>
      </div>

      <div className="testimonials-grid">
        {strings.testimonials.items.map((t) => (
          <div key={t.name} className="testimonial-card reveal">
            <span className="stars">{t.stars}</span>
            <p className="testimonial-text">{t.text}</p>
            <div className="testimonial-author">
              <div className="author-avatar">{t.name.trim().slice(0, 1)}</div>
              <div>
                <div className="author-name">{t.name}</div>
                <div className="author-role">{t.role}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

