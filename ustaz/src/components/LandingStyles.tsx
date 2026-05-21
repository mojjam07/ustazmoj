export function LandingStyles() {
  return (
    <>
      <style>{`
      *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
      :root {
        --gold: #C9922A;
        --gold-light: #E8B84B;
        --gold-pale: #F5E6C0;
        --gold-deep: #8B6318;
        --green-deep: #0D3B2E;
        --green-mid: #1A5C44;
        --green-soft: #2A7A5C;
        --cream: #FAF6EE;
        --cream-dark: #F0E8D5;
        --text-dark: #1A1208;
        --text-muted: #5A4A2A;
        --text-light: #8B7355;
        --white: #FFFFFF;
        --border-gold: rgba(201,146,42,0.3);
      }
      html { scroll-behavior: smooth; }
      body {

        font-family: 'Noto Naskh Arabic', 'Amiri', serif;

      }

      /* Language switching: opacity only to prevent layout jitter/"shake" */
      .lang-fade {
        transition: opacity 200ms ease;
      }
      .lang-fade--out {
        opacity: 0;
      }


        background: var(--cream);
        color: var(--text-dark);
        overflow-x: hidden;
      }

      .pattern-bg { position: fixed; top: 0; left: 0; width: 100%; height: 100%; pointer-events: none; z-index: 0; opacity: 0.045; }
      nav {
        position: fixed; top: 0; left: 0; right: 0; z-index: 100; padding: 0 3rem; height: 72px;
        display: flex; align-items: center; justify-content: space-between;
        background: rgba(13,59,46,0.96); backdrop-filter: blur(12px);
        border-bottom: 1px solid rgba(201,146,42,0.25);
      }
      .nav-logo { font-family: 'Amiri', serif; font-size: 1.25rem; color: var(--gold-light); letter-spacing: 0.02em; }

      .nav-toggle {
        display: none;
        background: transparent;
        border: 1px solid rgba(201,146,42,0.35);
        width: 42px;
        height: 42px;
        border-radius: 8px;
        align-items: center;
        justify-content: center;
        cursor: pointer;
      }

      .nav-toggle-icon {
        width: 18px;
        height: 12px;
        position: relative;
        display: block;
      }

      .nav-toggle-icon::before,
      .nav-toggle-icon::after {
        content: '';
        position: absolute;
        left: 0;
        right: 0;
        height: 2px;
        background: rgba(255,255,255,0.75);
        border-radius: 2px;
        transition: transform 0.18s ease, top 0.18s ease, opacity 0.18s ease;
      }

      .nav-toggle-icon::before { top: 0; }
      .nav-toggle-icon::after { top: 10px; }

      .nav-toggle[aria-expanded="true"] .nav-toggle-icon::before { top: 5px; transform: rotate(45deg); }
      .nav-toggle[aria-expanded="true"] .nav-toggle-icon::after { top: 5px; transform: rotate(-45deg); }

      .nav-links { display: flex; gap: 2.5rem; list-style: none; }

      .nav-links a { font-family: 'Noto Naskh Arabic', serif; font-size: 0.92rem; color: rgba(255,255,255,0.78); text-decoration: none; transition: color 0.2s; letter-spacing: 0.01em; }
      .nav-links a:hover { color: var(--gold-light); }
      .nav-cta { background: transparent; border: 1px solid var(--gold); color: var(--gold-light) !important; padding: 0.4rem 1.2rem; border-radius: 3px; transition: background 0.2s, color 0.2s !important; }
      .nav-cta:hover { background: var(--gold) !important; color: var(--green-deep) !important; }


      .hero { min-height: 100vh; position: relative; display: grid; grid-template-columns: 1fr 1fr; align-items: center; gap: 0; padding-top: 72px; overflow: hidden; z-index: 1; }
      .hero-bg { position: absolute; inset: 0; background: linear-gradient(135deg, var(--green-deep) 0%, #0A2D22 60%, #061A14 100%); z-index: -1; }
      .hero-arch { position: absolute; right: 0; top: 0; bottom: 0; width: 54%; background: var(--cream); clip-path: ellipse(95% 100% at 100% 50%); z-index: -1; }
      .hero-content { padding: 5rem 3rem 5rem 2rem; color: var(--white); position: relative; z-index: 2; }
      .hero-bismillah { font-family: 'Amiri', serif; font-size: 1.4rem; color: var(--gold-light); margin-bottom: 1.8rem; opacity: 0.9; display: block; }
      .hero-eyebrow { font-size: 0.8rem; letter-spacing: 0.18em; text-transform: uppercase; color: var(--gold); margin-bottom: 1rem; font-family: 'Cinzel', serif; }
      .hero-name { font-family: 'Amiri', serif; font-size: 3.2rem; line-height: 1.2; color: var(--green-soft); margin-bottom: 0.6rem; font-weight: 700; }
      .hero-name-en { font-family: 'Cinzel', serif; font-size: 1.1rem; color: var(--gold-light); margin-bottom: 1.5rem; font-weight: 400; letter-spacing: 0.08em; direction: ltr; text-align: right; }
      .hero-divider { width: 80px; height: 2px; background: linear-gradient(90deg, var(--gold), transparent); margin: 1.5rem 0; }
      .hero-bio { font-size: 1.05rem; line-height: 1.85; color: var(--green-soft); max-width: 420px; margin-bottom: 2rem; }
      .hero-motto { font-family: 'Amiri', serif; font-style: italic; font-size: 1.1rem; color: var(--gold-pale); margin-bottom: 2.5rem; padding-right: 1rem; border-right: 3px solid var(--gold); direction: ltr; text-align: right; }
      .hero-buttons { display: flex; gap: 1rem; flex-wrap: wrap; }
      .btn-primary { background: var(--gold); color: var(--green-deep); border: none; padding: 0.85rem 2rem; font-family: 'Noto Naskh Arabic', serif; font-size: 1rem; font-weight: 700; cursor: pointer; border-radius: 3px; text-decoration: none; display: inline-flex; align-items: center; gap: 0.5rem; transition: background 0.2s, transform 0.15s; }
      .btn-primary:hover { background: var(--gold-light); transform: translateY(-1px); }
      .btn-secondary { background: transparent; color: var(--white); border: 1px solid rgba(255,255,255,0.4); padding: 0.85rem 2rem; font-family: 'Noto Naskh Arabic', serif; font-size: 1rem; cursor: pointer; border-radius: 3px; text-decoration: none; display: inline-flex; align-items: center; gap: 0.5rem; transition: border-color 0.2s, background 0.2s; }
      .btn-secondary:hover { border-color: var(--gold); background: rgba(201,146,42,0.1); }

      .hero-image-side { position: relative; display: flex; align-items: center; justify-content: center; padding: 5rem 2rem 5rem 3rem; z-index: 2; }
      .avatar-frame { position: relative; width: 320px; height: 380px; }
      .avatar-frame::before { content: ''; position: absolute; inset: -12px; border: 1.5px solid var(--border-gold); border-radius: 4px; transform: rotate(3deg); }
      .avatar-frame::after { content: ''; position: absolute; inset: -20px; border: 1px solid rgba(201,146,42,0.12); border-radius: 6px; transform: rotate(-2deg); }
      .avatar-placeholder { width: 100%; height: 100%; background: linear-gradient(160deg, #1A5C44 0%, #0D3B2E 100%); border-radius: 4px; display: flex; flex-direction: column; align-items: center; justify-content: center; position: relative; overflow: hidden; border: 1px solid var(--border-gold); }
      .avatar-arabesque { position: absolute; top: 0; left: 0; right: 0; height: 60px; background: rgba(201,146,42,0.08); border-bottom: 1px solid var(--border-gold); display: flex; align-items: center; justify-content: center; font-family: 'Amiri', serif; font-size: 1.3rem; color: var(--gold); }
      .avatar-icon-wrap { width: 120px; height: 120px; border-radius: 50%; background: rgba(201,146,42,0.12); border: 1.5px solid var(--border-gold); display: flex; align-items: center; justify-content: center; margin-bottom: 1.2rem; margin-top: 1rem; overflow: hidden; }
      .avatar-icon-wrap img { width: 100%; height: 100%; object-fit: cover; display: block; }
      .avatar-icon-wrap svg { width: 60px; height: 60px; fill: var(--gold); opacity: 0.85; }
      .avatar-name-plate { font-family: 'Amiri', serif; font-size: 1.2rem; color: var(--gold-light); text-align: center; padding: 0 1rem; }
      .avatar-title-plate { font-size: 0.82rem; color: rgba(255,255,255,0.55); text-align: center; margin-top: 0.4rem; font-family: 'Cinzel', serif; letter-spacing: 0.06em; direction: ltr; }
      .upload-note { position: absolute; bottom: 16px; left: 0; right: 0; text-align: center; font-size: 0.75rem; color: rgba(255,255,255,0.3); font-family: 'Cinzel', serif; direction: ltr; }
      .credential-badges { display: flex; gap: 0.6rem; margin-top: 1.5rem; flex-wrap: wrap; justify-content: center; }
      .badge { background: rgba(201,146,42,0.12); border: 1px solid rgba(201,146,42,0.3); color: var(--gold-light); padding: 0.3rem 0.85rem; border-radius: 2px; font-size: 0.75rem; font-family: 'Noto Naskh Arabic', serif; }

      .section { position: relative; z-index: 1; padding: 6rem 4rem; }
      .section-light { background: var(--cream); }
      .section-dark { background: var(--green-deep); }
      .section-mid { background: var(--cream-dark); }
      .section-header { text-align: center; margin-bottom: 4rem; }
      .section-label { font-family: 'Cinzel', serif; font-size: 0.75rem; letter-spacing: 0.2em; color: var(--gold); text-transform: uppercase; display: block; margin-bottom: 0.8rem; }

      .section-title { font-family: 'Amiri', serif; font-size: 2.4rem; color: var(--green-deep); margin-bottom: 1rem; }
      .section-title-light { color: var(--white); }
      .section-subtitle { font-size: 1.05rem; color: var(--text-muted); max-width: 520px; margin: 0 auto; line-height: 1.8; }
      .section-subtitle-light { color: rgba(255,255,255,0.65); }
      .ornament { display: flex; align-items: center; justify-content: center; gap: 1rem; margin: 1.5rem auto 0; color: var(--gold); font-family: 'Amiri', serif; font-size: 1.2rem; }
      .ornament::before, .ornament::after { content: ''; display: block; width: 60px; height: 1px; background: linear-gradient(90deg, transparent, var(--gold), transparent); }

      .subjects-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 1.5rem; max-width: 960px; margin: 0 auto; }
      .subject-card { background: var(--white); border: 1px solid rgba(201,146,42,0.18); border-top: 3px solid var(--gold); padding: 2rem 1.5rem; border-radius: 2px; transition: transform 0.2s, box-shadow 0.2s; text-align: center; }
      .subject-card:hover { transform: translateY(-4px); box-shadow: 0 12px 40px rgba(13,59,46,0.1); }
      .subject-icon { width: 56px; height: 56px; background: linear-gradient(135deg, var(--green-deep), var(--green-soft)); border-radius: 50%; display: flex; align-items: center; justify-content: center; margin: 0 auto 1.2rem; }
      .subject-icon svg { width: 26px; height: 26px; fill: var(--gold-light); }
      .subject-name { font-family: 'Amiri', serif; font-size: 1.3rem; color: var(--green-deep); margin-bottom: 0.6rem; font-weight: 700; }
      .subject-desc { font-size: 0.88rem; color: var(--text-light); line-height: 1.7; }

      .about-inner { display: grid; grid-template-columns: 1fr 1fr; gap: 5rem; align-items: center; max-width: 1100px; margin: 0 auto; }
      .about-text h2 { font-family: 'Amiri', serif; font-size: 2.2rem; color: var(--green-deep); margin-bottom: 1.2rem; }
      .about-text p { font-size: 1rem; color: var(--text-muted); line-height: 1.9; margin-bottom: 1rem; }
      .values-list { list-style: none; margin-top: 1.5rem; display: flex; flex-direction: column; gap: 0.8rem; }
      .values-list li { display: flex; align-items: center; gap: 0.8rem; font-size: 0.95rem; color: var(--text-dark); }
      .check-icon { width: 20px; height: 20px; background: var(--gold); border-radius: 50%; display: flex; align-items: center; justify-content: center; flex-shrink: 0; color: var(--green-deep); font-size: 0.7rem; font-weight: 700; }
      .about-stats { display: grid; grid-template-columns: 1fr 1fr; gap: 1.5rem; }
      .stat-card { background: var(--white); border: 1px solid rgba(201,146,42,0.2); padding: 2rem 1.5rem; text-align: center; border-radius: 2px; position: relative; overflow: hidden; }
      .stat-card::before { content: ''; position: absolute; top: 0; left: 0; right: 0; height: 3px; background: linear-gradient(90deg, var(--gold), var(--gold-light)); }
      .stat-number { font-family: 'Cinzel', serif; font-size: 2.8rem; font-weight: 700; color: var(--green-deep); line-height: 1; direction: ltr; }
      .stat-label { font-family: 'Noto Naskh Arabic', serif; font-size: 0.9rem; color: var(--text-light); margin-top: 0.5rem; }

      .method-steps { display: grid; grid-template-columns: repeat(4, 1fr); gap: 0; max-width: 1000px; margin: 0 auto; position: relative; }
      .method-steps::before { content: ''; position: absolute; top: 32px; right: 10%; left: 10%; height: 1px; background: linear-gradient(90deg, transparent, var(--gold), transparent); z-index: 0; }
      .method-step { text-align: center; padding: 0 1.5rem; position: relative; z-index: 1; }
      .step-number { width: 64px; height: 64px; background: var(--green-deep); border: 2px solid var(--gold); border-radius: 50%; display: flex; align-items: center; justify-content: center; margin: 0 auto 1.5rem; font-family: 'Cinzel', serif; font-size: 1.2rem; font-weight: 600; color: var(--gold-light); direction: ltr; }
      .step-title { font-family: 'Amiri', serif; font-size: 1.15rem; color: var(--white); margin-bottom: 0.6rem; }
      .step-desc { font-size: 0.85rem; color: rgba(255,255,255,0.58); line-height: 1.7; }

      .testimonials-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 1.5rem; max-width: 1000px; margin: 0 auto; }
      .testimonial-card { background: var(--white); border: 1px solid rgba(201,146,42,0.18); padding: 2rem; border-radius: 2px; position: relative; }
      .testimonial-card::before { content: '❝'; position: absolute; top: 1rem; left: 1.5rem; font-family: 'Amiri', serif; font-size: 3rem; color: var(--gold); opacity: 0.2; line-height: 1; direction: ltr; }
      .testimonial-text { font-size: 0.92rem; line-height: 1.85; color: var(--text-muted); margin-bottom: 1.5rem; position: relative; z-index: 1; }
      .testimonial-author { display: flex; align-items: center; gap: 0.8rem; }
      .author-avatar { width: 38px; height: 38px; background: var(--green-mid); border-radius: 50%; display: flex; align-items: center; justify-content: center; font-family: 'Amiri', serif; font-size: 1rem; color: var(--gold-light); flex-shrink: 0; }
      .author-name { font-weight: 600; font-size: 0.9rem; color: var(--green-deep); }
      .author-role { font-size: 0.78rem; color: var(--text-light); margin-top: 0.15rem; }
      .stars { color: var(--gold); font-size: 0.75rem; margin-bottom: 1rem; direction: ltr; display: block; }

      .cta-section { text-align: center; padding: 7rem 4rem; background: var(--green-deep); position: relative; overflow: hidden; }
      .cta-section::before { content: ''; position: absolute; inset: 0; background-image: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23C9922A' fill-opacity='0.04'%3E%3Cpath d='M30 0L60 30L30 60L0 30Z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E"); }
      .cta-inner { position: relative; z-index: 1; max-width: 640px; margin: 0 auto; }
      .cta-ayah { font-family: 'Amiri', serif; font-size: 1.35rem; color: var(--gold-pale); margin-bottom: 0.5rem; line-height: 1.7; }
      .cta-ref { font-size: 0.8rem; color: rgba(255,255,255,0.4); margin-bottom: 2.5rem; direction: ltr; display: block; font-family: 'Cinzel', serif; letter-spacing: 0.08em; }
      .cta-title { font-family: 'Amiri', serif; font-size: 2.4rem; color: var(--white); margin-bottom: 1rem; }
      .cta-text { font-size: 1rem; color: rgba(255,255,255,0.68); line-height: 1.8; margin-bottom: 2.5rem; }
      .cta-channels { display: flex; gap: 1rem; justify-content: center; flex-wrap: wrap; margin-bottom: 2rem; }
      .channel-btn { display: inline-flex; align-items: center; gap: 0.5rem; padding: 0.8rem 1.5rem; border-radius: 3px; font-family: 'Noto Naskh Arabic', serif; font-size: 0.95rem; text-decoration: none; cursor: pointer; transition: transform 0.15s; }
      .channel-btn:hover { transform: translateY(-2px); }
      .whatsapp-btn { background: #25D366; color: #fff; border: none; }
      .email-btn { background: transparent; color: var(--gold-light); border: 1px solid var(--gold); }
      .email-btn:hover { background: rgba(201,146,42,0.12); }

      footer { background: #061A14; padding: 2.5rem 4rem; display: flex; align-items: center; justify-content: space-between; border-top: 1px solid rgba(201,146,42,0.15); }
      .footer-name { font-family: 'Amiri', serif; font-size: 1.1rem; color: var(--gold-light); }
      .footer-copy { font-size: 0.78rem; color: rgba(255,255,255,0.3); direction: ltr; font-family: 'Cinzel', serif; }
      .footer-motto { font-family: 'Amiri', serif; font-style: italic; font-size: 0.9rem; color: rgba(255,255,255,0.4); direction: ltr; }

      @keyframes fadeUp { from { opacity: 0; transform: translateY(24px); } to { opacity: 1; transform: translateY(0); } }
      .hero-content > * { animation: fadeUp 0.7s ease backwards; }
      .hero-bismillah { animation-delay: 0.1s; }
      .hero-eyebrow { animation-delay: 0.2s; }
      .hero-name { animation-delay: 0.3s; }
      .hero-name-en { animation-delay: 0.35s; }
      .hero-divider { animation-delay: 0.4s; }
      .hero-bio { animation-delay: 0.45s; }
      .hero-motto { animation-delay: 0.5s; }
      .hero-buttons { animation-delay: 0.55s; }
      .hero-image-side { animation: fadeUp 0.7s 0.4s ease backwards; }

      .reveal { opacity: 0; transform: translateY(20px); transition: opacity 0.6s ease, transform 0.6s ease; }
      .reveal.visible { opacity: 1; transform: translateY(0); }

      @media (max-width: 900px) {
        nav { padding: 0 1.2rem; }

        .nav-toggle { display: inline-flex; }

        /* Mobile dropdown */
        .nav-links {
          position: absolute;
          top: 72px;
          left: 0;
          right: 0;
          display: flex;
          flex-direction: column;
          gap: 0.9rem;
          padding: 1rem 1.2rem 1.2rem;
          background: rgba(13,59,46,0.98);
          border-bottom: 1px solid rgba(201,146,42,0.25);
          backdrop-filter: blur(12px);
          transform-origin: top;
          transform: translateY(-8px);
          opacity: 0;
          pointer-events: none;
          transition: opacity 0.18s ease, transform 0.18s ease;
        }

        .nav-links.nav-links--open {
          transform: translateY(0);
          opacity: 1;
          pointer-events: auto;
        }

        .nav-links a { font-size: 1rem; }
        .nav-cta { width: fit-content; }

        .hero { grid-template-columns: 1fr; }
        .hero-arch { display: none; }
        .hero-content { padding: 3rem 1.5rem 1rem; }
        .hero-name { font-size: 2.2rem; }
        .hero-image-side { padding: 1rem 1.5rem 3rem; }
        .subjects-grid { grid-template-columns: 1fr 1fr; }
        .about-inner { grid-template-columns: 1fr; gap: 2rem; }
        .method-steps { grid-template-columns: 1fr 1fr; }
        .method-steps::before { display: none; }
        .testimonials-grid { grid-template-columns: 1fr; }
        .section { padding: 4rem 1.5rem; }
        footer { flex-direction: column; gap: 1rem; text-align: center; padding: 2rem 1.5rem; }
      }

      `}</style>
    </>
  )
}

