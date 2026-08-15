import type { Metadata } from 'next'
import Link from 'next/link'
import { Flame, ArrowRight, Shield, Heart, BookOpen } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Our Story',
  description:
    'About Project Lantern: why it exists, what it is, what it is not and how we approach the responsibility of publishing health information.',
}

const PRINCIPLES = [
  {
    icon: Shield,
    title: 'Educational only. Always.',
    description:
      'Every page on this platform is educational. We do not tell you whether you or a family member has dementia. We do not recommend specific treatments. Every article directs you to qualified healthcare professionals.',
  },
  {
    icon: BookOpen,
    title: 'Sourced and transparent',
    description:
      'Every factual claim traces to a named, reputable source. Sources are listed at the bottom of every article. If something is uncertain or contested, we say so.',
  },
  {
    icon: Heart,
    title: 'India-appropriate',
    description:
      'Resources, context and examples reflect the Indian experience: our healthcare system, our family structures, our helplines. Content written for Western contexts can be alienating and practically useless.',
  },
]

const ROADMAP = [
  { version: 'V1', label: 'Educational Foundation', description: 'Articles, glossary, resource directory', status: 'current' },
  { version: 'V2', label: 'Data & Research', description: 'Indian dementia statistics and dashboards', status: 'planned' },
  { version: 'V3', label: 'Hindi content & AI Q&A', description: 'Multilingual support and assisted search', status: 'planned' },
  { version: 'V4', label: 'Community', description: 'Caregiver stories and connection', status: 'planned' },
  { version: 'V5', label: 'Research Tools', description: 'Data tools for researchers and advocates', status: 'planned' },
]

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="page-hero" aria-labelledby="about-heading">
        <div className="container-layout">
          <div className="content-column">
            <div className="flex items-center gap-2.5 mb-5">
              <Flame className="w-8 h-8 text-amber" aria-hidden="true" strokeWidth={1.6} />
              <span className="font-sans font-800 text-primary text-2xl">Project Lantern</span>
            </div>
            <h1 id="about-heading" className="font-sans font-800 text-text mb-4">
              Our Story
            </h1>
            <p className="text-lg text-text-muted leading-relaxed">
              Why this platform exists, what it is and the principles behind every decision we make.
            </p>
          </div>
        </div>
      </section>

      <div className="container-layout py-10 md:py-16">
        <div className="content-column space-y-14">

          {/* Why this exists */}
          <section aria-labelledby="why-heading">
            <h2 id="why-heading" className="font-sans font-700 text-text text-2xl mb-5">
              The information gap
            </h2>
            <div className="prose">
              <p>
                India has an estimated 5.3 million people living with dementia. The number
                is expected to grow significantly as the population ages: some projections suggest
                it could double by 2050.
              </p>
              <p>
                Yet the available information is largely written for Western audiences. What does
                "contact your GP" mean in a country where the first point of contact might be a
                general physician who has seen two dementia patients in their career? What does
                "care home" mean in a culture where institutional care carries significant stigma
                and the expectation is that families care for their own?
              </p>
              <p>
                Project Lantern is an attempt to close part of that gap. It is not a substitute for
                the excellent work done by ARDSI, the Dementia India Alliance and other organisations.
                It is an addition: a free, open, plainly written resource built specifically for
                Indian families navigating a dementia journey.
              </p>
            </div>
          </section>

          {/* Principles */}
          <section aria-labelledby="principles-heading">
            <h2 id="principles-heading" className="font-sans font-700 text-text text-2xl mb-6">
              How we approach this responsibility
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
              {PRINCIPLES.map((p) => {
                const Icon = p.icon
                return (
                  <div key={p.title} className="card p-6">
                    <div className="w-10 h-10 rounded-xl bg-primary-light flex items-center justify-center mb-4">
                      <Icon className="w-5 h-5 text-primary" aria-hidden="true" strokeWidth={1.8} />
                    </div>
                    <h3 className="font-sans font-700 text-text mb-2">{p.title}</h3>
                    <p className="text-sm text-text-muted leading-relaxed">{p.description}</p>
                  </div>
                )
              })}
            </div>
          </section>

          {/* What it's not */}
          <section aria-labelledby="not-heading">
            <h2 id="not-heading" className="font-sans font-700 text-text text-2xl mb-5">
              What this platform is not
            </h2>
            <div className="prose">
              <ul>
                <li>
                  <strong>Not a diagnostic tool.</strong> We will never build a symptom checker
                  that suggests whether you or a family member has dementia. The potential for
                  harm is too significant. All diagnostic questions should be directed to a
                  qualified doctor, neurologist or geriatrician.
                </li>
                <li>
                  <strong>Not a treatment guide.</strong> We do not recommend specific medications
                  or therapies. We describe what is generally known about treatments in educational
                  terms, with citations and we defer specific decisions to medical professionals.
                </li>
                <li>
                  <strong>Not affiliated with any pharmaceutical company.</strong> There are no
                  sponsored articles, no affiliate links, no advertising of any kind.
                </li>
                <li>
                  <strong>Not a finished product.</strong> All V1 articles are draft: they have
                  not yet been reviewed by a medical professional. We are actively seeking a
                  medical reviewer. Until content is reviewed, it is clearly marked as draft.
                </li>
              </ul>
            </div>
          </section>

          {/* Medical review */}
          <section className="card p-8 bg-primary-lighter border-primary-light" aria-labelledby="review-heading">
            <h2 id="review-heading" className="font-sans font-700 text-text text-xl mb-3">
              Medical review
            </h2>
            <p className="text-text-muted leading-relaxed mb-4">
              All content on this platform is currently marked{' '}
              <span className="tag tag-draft">draft</span> and has not been reviewed by
              a medical professional. Before any article is marked as reviewed, it will be
              read and approved by a named, credentialed medical professional: a geriatrician,
              neurologist or dementia specialist.
            </p>
            <p className="text-text-muted leading-relaxed mb-5">
              We are actively seeking a medical reviewer. If you are a qualified medical
              professional in India who is willing to review educational content, we would
              be grateful to hear from you.
            </p>
            <Link href="mailto:sorendatta7@gmail.com" className="btn btn-primary inline-flex">
              Get in touch
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </Link>
          </section>

          {/* Roadmap */}
          <section aria-labelledby="roadmap-heading">
            <h2 id="roadmap-heading" className="font-sans font-700 text-text text-2xl mb-6">
              Where this is going
            </h2>
            <ol className="space-y-3" role="list">
              {ROADMAP.map((item) => (
                <li
                  key={item.version}
                  className={`flex items-start gap-4 p-4 rounded-xl border ${
                    item.status === 'current'
                      ? 'border-primary bg-primary-lighter'
                      : 'border-border bg-surface'
                  }`}
                >
                  <div className={`
                    flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center
                    font-sans font-700 text-xs
                    ${item.status === 'current' ? 'bg-primary text-white' : 'bg-background text-text-muted border border-border'}
                  `}>
                    {item.version}
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="font-sans font-700 text-text text-sm">{item.label}</span>
                      {item.status === 'current' && (
                        <span className="tag text-xs">Current</span>
                      )}
                    </div>
                    <p className="text-xs text-text-muted mt-0.5">{item.description}</p>
                  </div>
                </li>
              ))}
            </ol>
          </section>

          {/* Open source */}
          <section aria-labelledby="open-source-heading">
            <h2 id="open-source-heading" className="font-sans font-700 text-text text-2xl mb-4">
              Open source
            </h2>
            <p className="text-text-muted leading-relaxed mb-5">
              The code for this platform is open source (MIT licence). The content is published
              under Creative Commons Attribution 4.0 (CC BY 4.0). This is intentional: if this
              work is useful, it should be freely reusable. If you want to contribute, see the
              contributing guide on GitHub.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline text-sm"
              >
                View on GitHub
                <span className="sr-only">(opens in new tab)</span>
              </a>
              <Link href="/understand" className="btn btn-primary text-sm">
                Start reading
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </Link>
            </div>
          </section>
        </div>
      </div>
    </>
  )
}
