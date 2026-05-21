import { useEffect, useMemo, useState } from 'react'
import type { LandingStrings, Language } from './types'
import { defaultStrings } from './defaultStrings'

export function useLandingStrings(): {
  strings: LandingStrings
  lang: Language
  setLang: (l: Language) => void
} {
  const [lang, setLang] = useState<Language>('en')
  const [strings, setStrings] = useState<LandingStrings>(defaultStrings)

  useEffect(() => {
    let cancelled = false

    async function load() {
      try {
        const apiBaseUrl = (import.meta.env.VITE_API_BASE_URL as string | undefined)?.trim() || ''
        const url = apiBaseUrl
          ? `${apiBaseUrl.replace(/\/$/, '')}/api/landing?lang=${lang}`
          : `/api/landing?lang=${lang}`

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

  return useMemo(() => ({ strings, lang, setLang }), [strings, lang])
}

