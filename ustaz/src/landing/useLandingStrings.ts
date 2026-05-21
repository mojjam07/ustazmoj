import { useEffect, useMemo, useState } from 'react'
import type { LandingStrings, Language } from './types'
import { defaultStrings } from './defaultStrings'

export function useLandingStrings(): {
  strings: LandingStrings
  lang: Language
  setLang: (l: Language) => void
} {
  const getInitialLang = (): Language => {
    if (typeof window === 'undefined') return 'en'
    const saved = window.localStorage.getItem('ustaz.lang')
    return (saved === 'en' || saved === 'ar') ? saved : 'en'
  }

  const [lang, setLang] = useState<Language>(getInitialLang)
  const [strings, setStrings] = useState<LandingStrings>(defaultStrings)


  useEffect(() => {
    let cancelled = false

    async function load() {
      try {
        const apiBaseUrl =
          (import.meta.env.VITE_API_URL as string | undefined)?.trim() ||
          (import.meta.env.VITE_API_BASE_URL as string | undefined)?.trim() ||
          ''

        const url = `${apiBaseUrl.replace(/\/$/, '')}/landing?lang=${lang}`

        const res = await fetch(url)

        if (!res.ok) throw new Error(`HTTP ${res.status}`)
        const json = await res.json()
        if (!cancelled && json?.strings) setStrings(json.strings as LandingStrings)
      } catch {
        if (!cancelled) setStrings(defaultStrings)
      }
    }

    load()
    return () => {
      cancelled = true
    }
  }, [lang])

  useEffect(() => {
    try {
      window.localStorage.setItem('ustaz.lang', lang)
    } catch {
      // ignore
    }
  }, [lang])

  return useMemo(() => ({ strings, lang, setLang }), [strings, lang])
}

