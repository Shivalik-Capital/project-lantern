import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Clock, BookOpen } from 'lucide-react'
import { DisclaimerBanner } from '@/components/layout/DisclaimerBanner'

export const metadata: Metadata = {
  title: "Understand Alzheimer's Disease",
  description:
    "Clear, accurate educational articles about Alzheimer's disease and dementia: what it is, how it progresses and the different types. Written for Indian families.",
}

import { articles } from '@/.velite'

// Filter articles to only show those in the 'understand' section
const UNDERSTAND_ARTICLES = articles.filter(article => article.section === 'understand')

export default function UnderstandPage() {
  return (
    <>
      {/* Hero */}
      <section className="page-hero" aria-labelledby="page-heading">
        <div className="container-layout">
          <div className="flex items-center gap-2 mb-3">
            <BookOpen className="w-5 h-5 text-primary" aria-hidden="true" />
            <span className="text-primary font-sans font-600 text-sm">Educational Articles</span>
          </div>
          <h1 id="page-heading" className="font-sans font-800 text-text mb-4">
            Understand Alzheimer's Disease
          </h1>
          <p className="text-lg text-text-muted leading-relaxed max-w-xl">
            Grounded, plain-language explanations of what Alzheimer's is, how it works
            and what a diagnosis means: for families, not medical professionals.
          </p>
        </div>
      </section>

      <div className="container-layout py-10 md:py-14">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-14">
          {/* Articles list */}
          <main className="lg:col-span-2" id="main-content">
            <DisclaimerBanner compact />
            <ul className="mt-8 space-y-5" role="list">
              {UNDERSTAND_ARTICLES.map((article) => (
                <li key={article.slug}>
                  <Link
                    href={`/understand/${article.slug}`}
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
                      Read article
                      <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </main>

          {/* Sidebar */}
          <aside className="space-y-8" aria-label="Section information">
            <div className="card p-6">
              <h2 className="font-sans font-700 text-text mb-3 text-base">About these articles</h2>
              <p className="text-sm text-text-muted leading-relaxed mb-4">
                All articles in this section are written in plain language for families and caregivers,
                not medical professionals. Every factual claim is sourced.
              </p>
              <p className="text-sm text-text-muted leading-relaxed">
                Articles are currently undergoing <strong>clinical review</strong> by the medical team at SCARF India.
              </p>
            </div>
            <div className="card p-6">
              <h2 className="font-sans font-700 text-text mb-3 text-base">Also useful</h2>
              <ul className="space-y-2 text-sm" role="list">
                <li>
                  <Link href="/glossary" className="text-amber hover:text-amber-dark transition-colors flex items-center gap-1">
                    <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
                    Medical glossary
                  </Link>
                </li>
                <li>
                  <Link href="/caregiving" className="text-amber hover:text-amber-dark transition-colors flex items-center gap-1">
                    <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
                    Caregiving guides
                  </Link>
                </li>
                <li>
                  <Link href="/find-help" className="text-amber hover:text-amber-dark transition-colors flex items-center gap-1">
                    <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
                    Find help in India
                  </Link>
                </li>
              </ul>
            </div>
          </aside>
        </div>
      </div>
    </>
  )
}
