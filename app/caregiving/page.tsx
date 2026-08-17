import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Clock, Heart } from 'lucide-react'
import { DisclaimerBanner } from '@/components/layout/DisclaimerBanner'

export const metadata: Metadata = {
  title: 'Caregiving Guide',
  description:
    "Practical, honest caregiving guides for families supporting someone with Alzheimer's or dementia in India. Covers every stage from diagnosis through late-stage care.",
}

const CAREGIVING_ARTICLES = [
  {
    slug: 'after-diagnosis',
    title: 'After a Diagnosis: A Practical Guide for Indian Families',
    description:
      'What to do in the weeks after a dementia diagnosis. Practical, honest guidance on the immediate steps, legal and financial planning, navigating the Indian healthcare system and how to support the person diagnosed.',
    readingTime: 10,
    tags: ['First Steps', 'Planning'],
    status: 'under-review' as const,
  },
]

export default function CaregivingPage() {
  return (
    <>
      {/* Hero */}
      <section className="page-hero" aria-labelledby="page-heading">
        <div className="container-layout">
          <div className="flex items-center gap-2 mb-3">
            <Heart className="w-5 h-5 text-amber" aria-hidden="true" />
            <span className="text-amber font-sans font-600 text-sm">Caregiving Guides</span>
          </div>
          <h1 id="page-heading" className="font-sans font-800 text-text mb-4">
            Caregiving Guide
          </h1>
          <p className="text-lg text-text-muted leading-relaxed max-w-xl">
            Practical, honest guidance for families supporting someone with Alzheimer's or dementia.
            Written for the Indian context: our healthcare system, our family structures, our resources.
          </p>
        </div>
      </section>

      <div className="container-layout py-10 md:py-14">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-14">
          <main className="lg:col-span-2" id="main-content">
            <DisclaimerBanner compact />
            <ul className="mt-8 space-y-5" role="list">
              {CAREGIVING_ARTICLES.map((article) => (
                <li key={article.slug}>
                  <Link
                    href={`/caregiving/${article.slug}`}
                    className="card p-6 flex flex-col gap-3 group block"
                  >
                    <div className="flex flex-wrap items-center gap-2">
                      {article.tags.map((tag) => (
                        <span key={tag} className="tag">{tag}</span>
                      ))}
                      {article.status === 'draft' && (
                        <span className="tag tag-draft">Draft: not yet medically reviewed</span>
                      )}
                      {article.status === 'under-review' && (
                        <span className="tag tag-amber">Under clinical review by SCARF India</span>
                      )}
                      <span className="flex items-center gap-1 text-xs text-text-subtle ml-auto">
                        <Clock className="w-3 h-3" aria-hidden="true" />
                        {article.readingTime} min read
                      </span>
                    </div>
                    <h2 className="font-sans font-700 text-text text-xl leading-snug group-hover:text-primary transition-colors">
                      {article.title}
                    </h2>
                    <p className="text-text-muted leading-relaxed text-sm">
                      {article.description}
                    </p>
                    <div className="flex items-center gap-1 text-amber text-sm font-sans font-600 mt-1">
                      Read guide
                      <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
            {CAREGIVING_ARTICLES.length === 1 && (
              <div className="mt-8 p-6 rounded-xl border-2 border-dashed border-border text-center text-text-muted">
                <p className="font-sans font-600 mb-1">More guides are in progress</p>
                <p className="text-sm">Topics planned: daily care, managing behaviour changes, late-stage care, caregiver self-care.</p>
              </div>
            )}
          </main>

          <aside className="space-y-8" aria-label="Section information">
            <div className="card p-6">
              <h2 className="font-sans font-700 text-text mb-3 text-base">Caregiving is hard</h2>
              <p className="text-sm text-text-muted leading-relaxed">
                These guides acknowledge that caregiving for someone with dementia is one of the
                most demanding things a person can do. They are written to be honest about that,
                not to minimise it.
              </p>
            </div>
            <div className="card p-6 bg-emergency-bg border-red-100">
              <h2 className="font-sans font-700 text-text mb-3 text-base">Support helplines</h2>
              <ul className="space-y-2 text-sm" role="list">
                <li className="flex justify-between">
                  <span className="text-text-muted">Tele-MANAS</span>
                  <a href="tel:14416" className="font-sans font-700 text-emergency">14416</a>
                </li>
                <li className="flex justify-between">
                  <span className="text-text-muted">Dementia India Alliance</span>
                  <a href="tel:8585990990" className="font-sans font-700 text-emergency">8585 990 990</a>
                </li>
              </ul>
            </div>
          </aside>
        </div>
      </div>
    </>
  )
}
