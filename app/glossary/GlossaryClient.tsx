'use client'

import { useState, useMemo } from 'react'
import Link from 'next/link'
import { Search, BookOpen, ChevronDown } from 'lucide-react'
import termsData from '@/content/glossary/terms.json'

type Category = 'all' | 'disease' | 'symptoms' | 'treatment' | 'caregiving' | 'science' | 'general'

interface Term {
  term: string
  pronunciation?: string
  definition: string
  relatedArticles?: string[]
  category: string
}

const terms: Term[] = termsData as Term[]

const CATEGORY_LABELS: Record<Category, string> = {
  all: 'All terms',
  disease: 'Disease types',
  symptoms: 'Symptoms',
  treatment: 'Treatment',
  caregiving: 'Caregiving',
  science: 'Science & biology',
  general: 'General',
}

const ALPHABET = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('')

export default function GlossaryPage() {
  const [query, setQuery] = useState('')
  const [activeCategory, setActiveCategory] = useState<Category>('all')
  const [activeLetter, setActiveLetter] = useState<string | null>(null)

  const filtered = useMemo(() => {
    return terms.filter((t) => {
      const matchesQuery =
        !query ||
        t.term.toLowerCase().includes(query.toLowerCase()) ||
        t.definition.toLowerCase().includes(query.toLowerCase())
      const matchesCategory =
        activeCategory === 'all' || t.category === activeCategory
      const matchesLetter =
        !activeLetter || t.term.toUpperCase().startsWith(activeLetter)
      return matchesQuery && matchesCategory && matchesLetter
    })
  }, [query, activeCategory, activeLetter])

  const availableLetters = new Set(terms.map((t) => t.term[0].toUpperCase()))

  return (
    <>
      {/* Hero */}
      <section className="page-hero" aria-labelledby="glossary-heading">
        <div className="container-layout">
          <div className="flex items-center gap-2 mb-3">
            <BookOpen className="w-5 h-5 text-primary" aria-hidden="true" />
            <span className="text-primary font-sans font-600 text-sm">Plain-language definitions</span>
          </div>
          <h1 id="glossary-heading" className="font-sans font-800 text-text mb-3">
            Medical Glossary
          </h1>
          <p className="text-lg text-text-muted leading-relaxed max-w-xl mb-6">
            Medical terms explained clearly: without the jargon. From amyloid plaques
            to sundowning, every term you might encounter on this journey.
          </p>

          {/* Search */}
          <div className="relative max-w-lg">
            <Search
              className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-text-subtle"
              aria-hidden="true"
            />
            <input
              type="search"
              id="glossary-search"
              placeholder="Search terms or definitions…"
              value={query}
              onChange={(e) => {
                setQuery(e.target.value)
                setActiveLetter(null)
              }}
              className="w-full pl-10 pr-4 py-3 rounded-xl border border-border bg-surface text-text placeholder:text-text-subtle focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition text-base"
              aria-label="Search glossary terms and definitions"
              aria-controls="glossary-list"
            />
          </div>
        </div>
      </section>

      <div className="container-layout py-8 md:py-12">
        {/* Category filters */}
        <div className="flex flex-wrap gap-2 mb-6" role="group" aria-label="Filter by category">
          {(Object.keys(CATEGORY_LABELS) as Category[]).map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setActiveCategory(cat)}
              className={`px-3.5 py-1.5 rounded-full text-sm font-sans font-600 border transition-colors ${
                activeCategory === cat
                  ? 'bg-primary text-white border-primary'
                  : 'bg-surface text-text-muted border-border hover:border-primary hover:text-primary'
              }`}
              aria-pressed={activeCategory === cat}
            >
              {CATEGORY_LABELS[cat]}
            </button>
          ))}
        </div>

        {/* A–Z navigator */}
        <div className="flex flex-wrap gap-1 mb-8" role="group" aria-label="Filter by first letter">
          <button
            type="button"
            onClick={() => setActiveLetter(null)}
            className={`px-2.5 py-1 rounded-lg text-xs font-sans font-700 transition-colors ${
              !activeLetter ? 'bg-primary text-white' : 'text-text-muted hover:text-primary'
            }`}
            aria-pressed={!activeLetter}
          >
            All
          </button>
          {ALPHABET.map((letter) => {
            const available = availableLetters.has(letter)
            return (
              <button
                key={letter}
                type="button"
                onClick={() => available ? setActiveLetter(activeLetter === letter ? null : letter) : undefined}
                disabled={!available}
                className={`w-7 h-7 rounded-lg text-xs font-sans font-700 transition-colors ${
                  activeLetter === letter
                    ? 'bg-primary text-white'
                    : available
                    ? 'text-text-muted hover:text-primary hover:bg-primary-light'
                    : 'text-border cursor-default'
                }`}
                aria-pressed={activeLetter === letter}
                aria-disabled={!available}
              >
                {letter}
              </button>
            )
          })}
        </div>

        {/* Results count */}
        <p className="text-sm text-text-muted mb-6" aria-live="polite">
          {filtered.length === terms.length
            ? `${terms.length} terms`
            : `${filtered.length} of ${terms.length} terms`}
          {query && <span> matching "<strong>{query}</strong>"</span>}
        </p>

        {/* Terms list */}
        {filtered.length === 0 ? (
          <div className="text-center py-16 text-text-muted">
            <p className="font-sans font-600 mb-2">No terms found</p>
            <p className="text-sm">Try a different search term or clear the filters.</p>
            <button
              type="button"
              onClick={() => { setQuery(''); setActiveCategory('all'); setActiveLetter(null) }}
              className="mt-4 btn btn-outline text-sm"
            >
              Clear all filters
            </button>
          </div>
        ) : (
          <dl id="glossary-list" className="space-y-4">
            {filtered.sort((a, b) => a.term.localeCompare(b.term)).map((term) => (
              <div
                key={term.term}
                className="card p-6"
              >
                <div className="flex items-start justify-between gap-4 flex-wrap">
                  <div>
                    <dt className="font-sans font-700 text-text text-lg">
                      {term.term}
                      {term.pronunciation && (
                        <span className="ml-2 text-sm font-400 text-text-subtle italic font-body">
                          /{term.pronunciation}/
                        </span>
                      )}
                    </dt>
                    <div className="mt-1">
                      <span className={`tag ${term.category === 'disease' ? '' : ''}`}>
                        {CATEGORY_LABELS[term.category as Category] || term.category}
                      </span>
                    </div>
                  </div>
                </div>
                <dd className="mt-3 text-text-muted leading-relaxed text-sm md:text-base">
                  {term.definition}
                </dd>
                {term.relatedArticles && term.relatedArticles.length > 0 && (
                  <div className="mt-3 flex flex-wrap gap-2">
                    <span className="text-xs text-text-subtle">Related:</span>
                    {term.relatedArticles.map((slug) => {
                      const section = slug === 'after-diagnosis' ? 'caregiving' : 'understand'
                      return (
                        <Link
                          key={slug}
                          href={`/${section}/${slug}`}
                          className="text-xs text-amber hover:text-amber-dark transition-colors font-sans font-600"
                        >
                          {slug.replace(/-/g, ' ')} →
                        </Link>
                      )
                    })}
                  </div>
                )}
              </div>
            ))}
          </dl>
        )}
      </div>
    </>
  )
}
