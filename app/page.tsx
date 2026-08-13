import Link from 'next/link'
import { ArrowRight, BookOpen, Heart, Users, MapPin, Clock } from 'lucide-react'
import { HelplineBanner } from '@/components/layout/HelplineBanner'
import { DisclaimerBanner } from '@/components/layout/DisclaimerBanner'

const ENTRY_CARDS = [
  {
    icon: BookOpen,
    title: "Understand Alzheimer's",
    description:
      'What the disease is, how it progresses, the difference between types of dementia and what a diagnosis means.',
    href: '/understand',
    color: 'text-primary',
    bg: 'bg-primary-light',
  },
  {
    icon: Heart,
    title: 'Caregiving Guide',
    description:
      'Practical, honest guidance for families navigating daily care: from the first weeks after a diagnosis through every stage.',
    href: '/caregiving',
    color: 'text-amber',
    bg: 'bg-amber-light',
  },
  {
    icon: MapPin,
    title: 'Find Help in India',
    description:
      "ARDSI chapters, dedicated helplines and memory clinics across India. You don't have to figure this out alone.",
    href: '/find-help',
    color: 'text-primary',
    bg: 'bg-primary-light',
  },
  {
    icon: Users,
    title: 'Glossary',
    description:
      'Medical terms explained in plain language: from amyloid plaques to sundowning, without the jargon.',
    href: '/glossary',
    color: 'text-amber',
    bg: 'bg-amber-light',
  },
]

const FEATURED_ARTICLES = [
  {
    title: "What is Alzheimer's Disease?",
    description:
      "A clear introduction to Alzheimer's: what it is, how it differs from normal ageing and why early understanding matters.",
    href: '/understand/what-is-alzheimers',
    readingTime: 8,
    tag: 'Basics',
  },
  {
    title: 'Understanding the Different Types of Dementia',
    description:
      "Dementia is not one disease. Learn the key differences between Alzheimer's, vascular, Lewy body and frontotemporal dementia.",
    href: '/understand/types-of-dementia',
    readingTime: 7,
    tag: 'Education',
  },
  {
    title: 'After a Diagnosis: A Guide for Indian Families',
    description:
      'What to do in the weeks after a dementia diagnosis. Legal steps, care team, family conversations and looking after yourself.',
    href: '/caregiving/after-diagnosis',
    readingTime: 10,
    tag: 'Caregiving',
  },
]

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-primary-lighter border-b border-border-light pt-20 pb-24 md:pt-28 md:pb-32" aria-labelledby="hero-heading">
        {/* Background decorative elements */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[120%] h-full pointer-events-none opacity-40">
          <div className="absolute -top-24 left-10 w-96 h-96 bg-primary rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
          <div className="absolute top-20 right-10 w-80 h-80 bg-amber rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
        </div>

        <div className="container-layout relative z-10 text-center flex flex-col items-center">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-surface border border-border text-xs font-700 text-primary uppercase tracking-widest mb-6 shadow-sm">
            <Heart className="w-3.5 h-3.5 text-amber" /> For Indian Families
          </span>
          <h1
            id="hero-heading"
            className="text-4xl md:text-5xl lg:text-6xl font-sans font-800 text-text leading-[1.1] mb-6 max-w-4xl"
          >
            Clear, trustworthy information about Alzheimer's & dementia
          </h1>
          <p className="text-lg md:text-xl text-text-muted leading-relaxed max-w-2xl mb-10">
            India has an estimated 5.3 million people living with dementia. Most families navigate
            the journey without adequate support. <span className="font-600 text-text">Project Lantern is here to change that.</span>
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
            <Link href="/understand" className="btn btn-primary w-full sm:w-auto text-base px-8 py-3.5">
              Start learning
              <ArrowRight className="w-4 h-4 ml-1" aria-hidden="true" />
            </Link>
            <Link href="/find-help" className="btn btn-outline w-full sm:w-auto text-base px-8 py-3.5 bg-surface">
              Find help near me
            </Link>
          </div>
        </div>
      </section>

      {/* Where do you want to start */}
      <section className="py-14 md:py-20" aria-labelledby="start-heading">
        <div className="container-layout">
          <h2
            id="start-heading"
            className="text-2xl md:text-3xl font-sans font-700 text-text mb-2"
          >
            Where do you want to start?
          </h2>
          <p className="text-text-muted mb-8 text-base">
            Every family's situation is different. Choose what's most useful to you right now.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {ENTRY_CARDS.map((card) => {
              const Icon = card.icon
              return (
                <Link
                  key={card.href}
                  href={card.href}
                  className="card p-6 flex flex-col gap-4 group"
                  aria-label={`${card.title}: ${card.description}`}
                >
                  <div className={`w-11 h-11 rounded-xl ${card.bg} flex items-center justify-center flex-shrink-0`}>
                    <Icon className={`w-5 h-5 ${card.color}`} aria-hidden="true" strokeWidth={1.8} />
                  </div>
                  <div>
                    <h3 className="font-sans font-700 text-text mb-1.5 text-base group-hover:text-primary transition-colors">
                      {card.title}
                    </h3>
                    <p className="text-sm text-text-muted leading-relaxed">
                      {card.description}
                    </p>
                  </div>
                  <div className="mt-auto flex items-center gap-1 text-amber text-sm font-sans font-600">
                    Read more
                    <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
                  </div>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      {/* Featured articles + helplines */}
      <section className="py-14 md:py-20 bg-primary-lighter border-t border-border-light" aria-labelledby="articles-heading">
        <div className="container-layout">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-16">
            {/* Articles */}
            <div className="lg:col-span-2">
              <h2
                id="articles-heading"
                className="text-2xl md:text-3xl font-sans font-700 text-text mb-6"
              >
                Start reading
              </h2>
              <ul className="space-y-4" role="list">
                {FEATURED_ARTICLES.map((article) => (
                  <li key={article.href}>
                    <Link
                      href={article.href}
                      className="card p-6 flex flex-col gap-3 group block"
                    >
                      <div className="flex items-center gap-2">
                        <span className="tag">{article.tag}</span>
                        <span className="tag tag-draft">Draft</span>
                        <span className="flex items-center gap-1 text-xs text-text-subtle ml-auto">
                          <Clock className="w-3 h-3" aria-hidden="true" />
                          {article.readingTime} min read
                        </span>
                      </div>
                      <h3 className="font-sans font-700 text-text text-lg leading-snug group-hover:text-primary transition-colors">
                        {article.title}
                      </h3>
                      <p className="text-sm text-text-muted leading-relaxed">
                        {article.description}
                      </p>
                      <div className="flex items-center gap-1 text-amber text-sm font-sans font-600 mt-1">
                        Read article
                        <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
                      </div>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Sidebar */}
            <aside className="space-y-6">
              <HelplineBanner />
              <DisclaimerBanner compact />
            </aside>
          </div>
        </div>
      </section>

      {/* Mission & Impact */}
      <section className="py-16 md:py-24 border-t border-border-light bg-surface" aria-labelledby="mission-heading">
        <div className="container-layout">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 id="mission-heading" className="text-3xl md:text-4xl font-sans font-800 text-text mb-4">
              Our Mission
            </h2>
            <p className="text-lg text-text-muted leading-relaxed">
              Project Lantern is a comprehensive, open-source initiative dedicated to bridging the information gap for the 5.3 million families navigating dementia in India.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="p-6 rounded-2xl bg-primary-lighter border border-primary-light">
              <h3 className="font-sans font-700 text-xl text-text mb-3 flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-primary" /> Evidence-Based
              </h3>
              <p className="text-text-muted leading-relaxed">
                All content is meticulously researched, strictly educational and avoids diagnostic AI tools or unverified symptom checkers.
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-amber-light border border-amber/20">
              <h3 className="font-sans font-700 text-xl text-text mb-3 flex items-center gap-2">
                <MapPin className="w-5 h-5 text-amber" /> Locally Contextual
              </h3>
              <p className="text-text-muted leading-relaxed">
                From identifying regional ARDSI chapters to addressing cultural stigmas, our resources are explicitly tailored for the Indian context.
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-primary-lighter border border-primary-light">
              <h3 className="font-sans font-700 text-xl text-text mb-3 flex items-center gap-2">
                <Heart className="w-5 h-5 text-primary" /> Completely Free
              </h3>
              <p className="text-text-muted leading-relaxed">
                No paywalls, no advertisements, no affiliate links and no subscription fees. Accessible to all families indefinitely.
              </p>
            </div>
          </div>

          <div className="card p-8 md:p-10 text-center max-w-4xl mx-auto border-dashed border-2 border-border">
            <h3 className="text-2xl font-sans font-800 text-text mb-4">
              Call for Founding Medical Reviewers
            </h3>
            <p className="text-text-muted leading-relaxed mb-8 max-w-2xl mx-auto">
              Our foundational articles are currently in the draft phase. To ensure the highest standard of clinical accuracy, we are seeking experienced geriatricians, neurologists and dementia specialists in India to serve on our founding review board.
            </p>
            <Link href="/about" className="btn btn-primary px-8 py-3">
              Learn about our clinical standards
              <ArrowRight className="w-4 h-4 ml-1" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
