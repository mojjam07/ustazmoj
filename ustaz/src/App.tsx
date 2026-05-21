import './App.css'
import { useLandingStrings } from './landing/useLandingStrings'
import { useScrollReveal } from './landing/useScrollReveal'

import { LandingStyles } from './components/LandingStyles'
// import { PatternBg } from './components/PatternBg'
import { NavBar } from './components/NavBar'
import { HeroSection } from './components/HeroSection'
import { SubjectsSection } from './components/SubjectsSection'
import { AboutSection } from './components/AboutSection'
import { MethodologySection } from './components/MethodologySection'
import { TestimonialsSection } from './components/TestimonialsSection'
import { CtaSection } from './components/CtaSection'
import { Footer } from './components/Footer'

import { useEffect, useRef, useState } from 'react'

function LandingPage() {
  const { strings, lang, setLang } = useLandingStrings()

  // Keep html attributes in sync on initial mount + whenever lang changes.
  useEffect(() => {
    const dir = lang === 'ar' ? 'rtl' : 'ltr'
    if (typeof document !== 'undefined') {
      document.documentElement.setAttribute('dir', dir)
      document.documentElement.setAttribute('lang', lang)
    }
  }, [lang])
  useScrollReveal([lang, strings])


  const [isLangTransitioning, setIsLangTransitioning] = useState(false)
  const pendingDirRef = useRef<'ltr' | 'rtl'>('ltr')

  // Apply RTL/LTR only after we fade out, to avoid layout jitter/shake.
  useEffect(() => {
    if (!isLangTransitioning) {
      const dir = lang === 'ar' ? 'rtl' : 'ltr'
      if (typeof document !== 'undefined') {
        document.documentElement.setAttribute('dir', dir)
        document.documentElement.setAttribute('lang', lang)
      }
    }
  }, [lang, isLangTransitioning])

  const handleSetLangSmooth = (next: typeof lang) => {
    if (next === lang) return
    pendingDirRef.current = next === 'ar' ? 'rtl' : 'ltr'
    setIsLangTransitioning(true)

    // Switch content immediately; direction will update after fadeOut finishes.
    setLang(next)

    window.setTimeout(() => {
      // Now that new content is in place, direction gets updated by useEffect.
      setIsLangTransitioning(false)
    }, 220)
  }

  return (
    <div>
      <LandingStyles />

      <div className={isLangTransitioning ? 'lang-fade lang-fade--out' : 'lang-fade'}>
        <NavBar strings={strings} lang={lang} />
        <HeroSection strings={strings} lang={lang} setLang={handleSetLangSmooth} />
        <hr className="gold-line" />
        <SubjectsSection strings={strings} />
        <AboutSection strings={strings} />
        <MethodologySection strings={strings} />
        <TestimonialsSection strings={strings} />
        <CtaSection strings={strings} />
        <Footer strings={strings} />
        {/* <PatternBg /> */}
      </div>
    </div>
  )
}



export default function App() {
  return <LandingPage />
}

