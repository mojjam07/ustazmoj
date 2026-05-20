import { useEffect } from 'react'

export function useScrollReveal() {
  useEffect(() => {
    const reveals = document.querySelectorAll<HTMLElement>('.reveal')
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add('visible')
            }, (Number((entry.target as HTMLElement).dataset.delay) || 0) * 1)
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.1 }
    )

    reveals.forEach((el, i) => {
      el.style.transitionDelay = `${(i % 4) * 0.08}s`
      observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])
}

