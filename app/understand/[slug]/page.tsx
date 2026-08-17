import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { ArrowLeft, Clock, Calendar, User, ExternalLink, ShieldAlert } from 'lucide-react'
import { DisclaimerBanner } from '@/components/layout/DisclaimerBanner'

import { articles } from '@/.velite'
import { MDXContent } from '@/components/mdx/MDXContent'

export async function generateStaticParams() {
  return articles
    .filter((a) => a.section === 'understand')
    .map((a) => ({ slug: a.slug }))
}

export function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Metadata {
  return params.then((resolvedParams) => {
    const article = articles.find((a) => a.slug === resolvedParams.slug)
    if (!article) return {}
    
    return {
      title: article.title,
      description: article.description,
    }
  })
}

export default async function UnderstandArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params
  const article = articles.find((a) => a.slug === resolvedParams.slug)
  
  if (!article) {
    notFound()
  }

  return (
    <article className="pb-16 md:pb-24">
      {/* Article Header */}
      <header className="bg-primary-lighter border-b border-border-light pt-12 pb-16 mb-12">
        <div className="container-layout">
          <div className="content-column">
            <Link
              href="/understand"
              className="inline-flex items-center gap-1.5 text-sm font-600 text-text-muted hover:text-primary transition-colors mb-8"
            >
              <ArrowLeft className="w-4 h-4" aria-hidden="true" />
              Back to Articles
            </Link>

            <div className="flex flex-wrap items-center gap-3 mb-6">
              {article.tags.map((tag) => (
                <span key={tag} className="tag">
                  {tag}
                </span>
              ))}
              {article.status === 'draft' && (
                <span className="tag tag-draft">Draft: not yet medically reviewed</span>
              )}
              {article.status === 'under-review' && (
                <span className="tag tag-amber">Under clinical review by SCARF India</span>
              )}
            </div>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-sans font-800 text-text leading-tight mb-6">
              {article.title}
            </h1>

            <p className="text-xl text-text-muted leading-relaxed mb-8">
              {article.description}
            </p>

            <div className="flex flex-wrap items-center gap-6 text-sm text-text-subtle font-600">
              {article.author && (
                <div className="flex items-center gap-2">
                  <User className="w-4 h-4" aria-hidden="true" />
                  {article.author}
                </div>
              )}
              {article.lastUpdated && (
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" aria-hidden="true" />
                  Updated {new Date(article.lastUpdated).toLocaleDateString('en-IN', { month: 'short', year: 'numeric' })}
                </div>
              )}
              {article.readingTime && (
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" aria-hidden="true" />
                  {article.readingTime} min read
                </div>
              )}
            </div>
          </div>
        </div>
      </header>

      {/* Article Content */}
      <div className="container-layout">
        <div className="content-column">
          <div className="prose prose-lg max-w-none mb-16">
            <MDXContent code={article.body} />
          </div>

          <hr className="border-border mb-12" />

          {/* Sources Section */}
          {article.sources && article.sources.length > 0 && (
            <div className="bg-surface p-8 rounded-2xl border border-border">
              <h3 className="font-sans font-700 text-xl text-text mb-6">Sources & References</h3>
              <ul className="space-y-4 m-0 p-0 list-none">
                {article.sources.map((source, idx) => (
                  <li key={idx} className="m-0">
                    <a 
                      href={source.url} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-start gap-2 text-primary hover:text-primary-dark transition-colors group"
                    >
                      <ExternalLink className="w-4 h-4 mt-1 flex-shrink-0 opacity-70 group-hover:opacity-100" />
                      <span className="underline underline-offset-4">{source.name}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </article>
  )
}
