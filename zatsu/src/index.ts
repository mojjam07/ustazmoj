import cors from 'cors'
import dotenv from 'dotenv'
import express from 'express'


dotenv.config()

const app = express()
app.use(cors())
app.use(express.json())

const supabaseUrl = process.env.SUPABASE_URL
const supabaseAnonKey = process.env.SUPABASE_ANON_KEY




function normalizeLang(langRaw: unknown): 'en' | 'ar' {
  const lang = typeof langRaw === 'string' ? langRaw.toLowerCase() : ''
  return lang === 'ar' ? 'ar' : 'en'
}

// GET /api/landing?lang=en|ar
app.get('/api/landing', async (req: express.Request, res: express.Response) => {
  try {
    const lang = normalizeLang(req.query.lang)

    // Optional: if you have a table to store strings, you can fetch from it.
    // For now, we return a deterministic translation set.

    // If a table exists in your Supabase, you can replace the block below
    // with a real query.

    const strings =
      lang === 'ar'
        ? {
            nav: {
              subjects: 'المواد',
              about: 'عن المُعلّم',
              methodology: 'المنهجية',
              testimonials: 'آراء الطلاب',
              contactCta: 'تواصل معنا'
            },
            hero: {
              bismillah: 'بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ',
              eyebrow: 'التعليم الإسلامي واللغة العربية',
              nameAr: "الأسـتاذ عبد المجيد محمد جامِع",
              nameEn: 'Abdul Majid Muhammad Jami\'',
              bio: 'تعليم القرآن، التجويد، الحديث والفقه بخطة واضحة ومنظمة. جلسات مبنية على الوضوح والاستمرارية والفهم العميق.',
              motto: '"التعلم بإخلاص، والعيش بتوجيه."',
              btnPrimary: 'احجز درسًا',
              btnSecondary: 'استكشف المواد',
              avatarName: "الأسـتاذ عبد المجيد محمد جامِع",
              avatarTitle: 'مدرس القرآن والدراسات الإسلامية',
              uploadNote: '[ صورة المُعلّم ]',
              badges: ['القرآن', 'الحديث والفقه', 'قواعد العربية']
            },
            subjects: {
              label: 'التخصصات الأكاديمية',
              title: 'المواد التي أُدرّسها',
              subtitle: 'تعلمٌ متخصص عبر القرآن والحديث والفقه واللغة العربية والتاريخ والعلوم الإسلامية.',
              cards: [
                {
                  icon: 'quran',
                  name: 'القرآن الكريم',
                  desc: 'تجويد وتفسير وتطبيق عملي من خلال تدريب مُوجَّه.'
                },
                {
                  icon: 'hadith',
                  name: 'دراسة الحديث النبوي',
                  desc: 'فهم مبادئ الروايات وتحليل أدلة الأحكام.'
                },
                {
                  icon: 'fiqh',
                  name: 'الفقه الإسلامي',
                  desc: 'أسس الأحكام وفهم قائم على الدليل وإرشاد عملي.'
                },
                {
                  icon: 'arabic',
                  name: 'العربية المعاصرة',
                  desc: 'قواعد ومفردات وقراءة وكتابة وقدرة على المحادثة.'
                },
                {
                  icon: 'history',
                  name: 'التاريخ الإسلامي',
                  desc: 'استعراض الأحداث والدروس والقيم عبر منهج واضح للخط الزمني.'
                },
                {
                  icon: 'grammar',
                  name: 'الترجمة الأخلاقية واللغوية',
                  desc: 'تطوير الذات والتهذيب الروحي بما ينسجم مع تعاليم الإسلام.'
                }
              ]
            },
            about: {
              label: 'عن المُعلّم',
              title: 'من هو عبد المجيد؟',
              paragraphs: [
                'أُدرّس القرآن والدراسات الإسلامية مع التركيز على الوضوح والفهم العملي.',
                'هدفي دعم الطلاب لبناء المعرفة خطوة بخطوة بإخلاص واستمرارية.'
              ],
              values: [
                'دروس مخلصة ودراسة مركزة',
                'فهم متوازن للطلاب',
                'إرشاد مستمر للنمو',
                'إيقاع تعلم متمركز حول الطالب',
                'مواد مُؤلَّفة وتدرج منظّم'
              ],
              stats: ['125+', '300+', '6', '100%'],
              statsLabels: ['طلاب متخرجون', 'متعَلّمون اليوم', 'تخصصات', 'رضا وثقة']
            },
            methodology: {
              label: 'منهجيتنا',
              title: 'منهج تعلم فعّال',
              subtitle: 'مسار تعلم مُحكَم مبني على مبادئ تقود لنتائج حقيقية.',
              steps: [
                { title: 'التحضير والتدريس', desc: 'بداية واضحة: دروس مُنظمة مع تقدم مستمر.' },
                { title: 'التقييم والتخطيط', desc: 'خطة عملية مبنية على التقييم ونقاط البدء واحتياجات المتعلم.' },
                { title: 'التدريب والمراجعة', desc: 'تدريب منتظم مع مراجعة لطيفة لضمان رسوخ الفهم.' },
                { title: 'التقدم والتأكيد', desc: 'نقاط متابعة مستمرة للتأكد من الإتقان وتحفيز المتعلم.' }
              ]
            },
            testimonials: {
              label: 'آراء الطلاب',
              title: 'ماذا يقول الطلاب؟',
              subtitle: 'تغذية راجعة حقيقية من متعلمين درسوا بإخلاص وتوجيه.',
              items: [
                {
                  stars: '★★★★★',
                  text: 'شرح واضح ومنظم للغاية. تحسّن كبير في تلاوة القرآن وفهمي.',
                  name: 'أحمد يوسف',
                  role: 'طالب حفظ القرآن'
                },
                {
                  stars: '★★★★★',
                  text: 'تواصل رائع وأسلوب تدريس هادئ. الدروس مرتبة وسهلة المتابعة.',
                  name: 'فاطمة إبراهيم',
                  role: 'متعلم اللغة العربية'
                },
                {
                  stars: '★★★★★',
                  text: 'تعلّمت القرآن والعربية العملية بثقة. ساعدتني المنهجية على الاستمرارية والتقدم بسرعة.',
                  name: 'محمد حسن',
                  role: 'متعلم الفقه والتاريخ'
                }
              ]
            },
            cta: {
              ayah: 'قال الله تعالى: (فَآمِنُوا بِاللَّهِ وَرَسُولِهِ...)',
              ref: '— سورة المجادلة 58:11',
              title: 'احجز جلسة اليوم',
              text: 'تواصل معنا لجدولة جلسات أونلاين أو حضورية في القرآن واللغة العربية والحديث والفقه. سنطابقك مع المسار المناسب.',
              whatsapp: 'تواصل عبر واتساب',
              email: 'راسلنا عبر البريد',
              availability: 'جلسات متاحة أونلاين وحضوري · عربي وإنجليزي'
            },
            footer: {
              name: "الأسـتاذ عبد المجيد محمد جامِع",
              motto: '"التعلم بإخلاص، والعيش بتوجيه."',
              copy: '© 2025 · تعليم إسلامي وعربي'
            }
          }
        : defaultEnStrings()

    res.json({ strings })
  } catch (err) {
    res.status(500).json({ error: (err as Error).message })
  }
})

function defaultEnStrings() {
  return {
    nav: {
      subjects: 'Subjects',
      about: 'About the Educator',
      methodology: 'Methodology',
      testimonials: 'Testimonials',
      contactCta: 'Contact Me'
    },
    hero: {
      bismillah: 'Bismillah ar-Rahman ar-Rahim',
      eyebrow: 'Islamic & Arabic Education',
      nameAr: "Ustaz Abdul Majid Jami'",
      nameEn: "Ustaz Abdul Majid Jami'",
      bio: 'Learn Qur’an, tajwīd, hadith, and fiqh with a structured plan. Sessions are designed for clarity, consistency, and lasting understanding.',
      motto: '"Learning with Sincerity, Living with Guidance."',
      btnPrimary: 'Request a Lesson',
      btnSecondary: 'Explore Subjects',
      avatarName: "Ustaz Abdul Majid Jami'",
      avatarTitle: "Qur'an & Islamic Studies Instructor",
      uploadNote: '[ Educator Photo Placeholder ]',
      badges: ['Qur\'an', 'Hadith & Fiqh', 'Arabic Grammar']
    },
    subjects: {
      label: 'Academic Disciplines',
      title: 'Subjects I Teach',
      subtitle: 'Specialized learning across Qur\'an, Hadith, Fiqh, Arabic language, history, and Islamic science.',
      cards: [
        {
          icon: 'quran',
          name: "The Noble Qur\'an",
          desc: 'Tajwīd, interpretation, and application through guided practice.'
        },
        {
          icon: 'hadith',
          name: 'Hadith Studies',
          desc: 'Study of principles, narrations, and analytical understanding of evidence.'
        },
        {
          icon: 'fiqh',
          name: 'Islamic Jurisprudence (Fiqh)',
          desc: 'Foundations of rulings, evidence-based understanding, and practical guidance.'
        },
        {
          icon: 'arabic',
          name: 'Modern Arabic',
          desc: 'Grammar, vocabulary, reading, writing, and spoken proficiency.'
        },
        {
          icon: 'history',
          name: 'Islamic History',
          desc: 'Reviewing events, lessons, and values with a clear timeline approach.'
        },
        {
          icon: 'grammar',
          name: 'Islamic Translation & Ethics',
          desc: 'Self-development and spiritual refinement aligned with Islamic teachings.'
        }
      ]
    },
    about: {
      label: 'About the Educator',
      title: 'Who is Ustaz Abdul Majid?',
      paragraphs: [
        'I teach Qur\'an and Islamic studies with a focus on clarity and practical understanding.',
        'My goal is to support students in building knowledge step-by-step, with sincerity and consistency.'
      ],
      values: [
        'Sincere lessons & focused study',
        'Balanced understanding for seekers',
        'Continuous guidance for growth',
        'Student-centered learning rhythm',
        'Authored materials & structured progress'
      ],
      stats: ['125+', '300+', '6', '100%'],
      statsLabels: ['Students Graduated', 'Learners Served Today', 'Specialized Subjects', 'Satisfaction & Confidence']
    },
    methodology: {
      label: 'Our Methodology',
      title: 'A Learning Method That Works',
      subtitle: 'A refined learning path built from principles that lead to real results.',
      steps: [
        { title: 'Preparation & Teaching', desc: 'A clear beginning: structured lessons for learners, with consistent progress.' },
        { title: 'Assessment & Planning', desc: 'A practical plan based on assessment, starting points, and learner needs.' },
        { title: 'Practice & Review', desc: 'Regular practice with gentle review to ensure lasting understanding.' },
        { title: 'Progress & Confirmation', desc: 'Ongoing checkpoints to confirm mastery and keep learners motivated.' }
      ]
    },
    testimonials: {
      label: 'Student Reviews',
      title: 'What Students Say',
      subtitle: 'Real feedback from learners who studied with sincere guidance.',
      items: [
        {
          stars: '★★★★★',
          text: "Ustaz Abdul Majid's teaching is clear, structured, and very helpful. I improved my Qur\'an recitation and understanding significantly.",
          name: 'Ahmed Yousif',
          role: 'Qur\'an Memorization Learner'
        },
        {
          stars: '★★★★★',
          text: 'Great communication and a calm teaching style. Lessons feel well planned and easy to follow.',
          name: 'Fatima Ibrahim',
          role: 'Arabic Language Learner'
        },
        {
          stars: '★★★★★',
          text: 'I learned Qur\'an and practical Arabic with confidence. The method helped me stay consistent and progress quickly.',
          name: 'Muhammad Hassan',
          role: 'Fiqh & History Learner'
        }
      ]
    },
    cta: {
      ayah: 'Allah says: “Have faith in Allah and rely upon Him.”',
      ref: '— Surah Al-Mujadilah 58:11',
      title: 'Book a Session Today',
      text: 'Contact us to schedule online or in-person lessons in Qur\'an, Arabic, Hadith, and Fiqh. We will match you with the right learning track.',
      whatsapp: 'WhatsApp Us',
      email: 'Email Us',
      availability: 'Sessions available online & in-person · Arabic & English'
    },
    footer: {
      name: "Ustaz Abdul Majid Jami'",
      motto: '"Learning with Sincerity, Living with Guidance."',
      copy: '© 2025 · Islamic & Arabic Education'
    }
  }
}

const port = Number(process.env.PORT || 4000)

// Start the server

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`zatsu API running on http://localhost:${port}`)
})

