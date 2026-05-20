export type Language = 'ar' | 'en'

export type LandingStrings = {
  nav: {
    subjects: string
    about: string
    methodology: string
    testimonials: string
    contactCta: string
  }
  hero: {
    bismillah: string
    eyebrow: string
    nameAr: string
    nameEn: string
    bio: string
    motto: string
    btnPrimary: string
    btnSecondary: string

    avatarName: string
    avatarTitle: string
    uploadNote: string
    badges: [string, string, string]
  }
  subjects: {
    label: string
    title: string
    subtitle: string

    cards: Array<{
      name: string
      desc: string
      icon: 'quran' | 'hadith' | 'fiqh' | 'arabic' | 'history' | 'grammar'
    }>
  }
  about: {
    label: string
    title: string
    paragraphs: [string, string]
    values: string[]
    stats: [string, string, string, string]
    statsLabels: [string, string, string, string]
  }
  methodology: {
    label: string
    title: string
    subtitle: string
    steps: Array<{ title: string; desc: string }>
  }
  testimonials: {
    label: string
    title: string
    subtitle: string
    items: Array<{ stars: string; text: string; name: string; role: string }>
  }
  cta: {
    ayah: string
    ref: string
    title: string
    text: string
    whatsapp: string
    email: string
    availability: string
  }
  footer: {
    name: string
    motto: string
    copy: string
  }
}

