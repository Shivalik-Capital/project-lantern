import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { ArrowLeft, Clock, Calendar, User, ExternalLink } from 'lucide-react'
import { DisclaimerBanner } from '@/components/layout/DisclaimerBanner'
import { HelplineBanner } from '@/components/layout/HelplineBanner'

// Static data map until Velite is wired
const ARTICLES: Record<string, {
  title: string
  description: string
  readingTime: number
  tags: string[]
  status: 'draft' | 'reviewed'
  author: string
  lastUpdated: string
  sources: { name: string; url: string }[]
  body: string
}> = {
  'what-is-alzheimers': {
    title: "What is Alzheimer's Disease?",
    description:
      "A clear, plain-language introduction to Alzheimer's disease: what it is, how it differs from normal ageing and why an early understanding matters for Indian families.",
    readingTime: 8,
    tags: ['Basics', 'Diagnosis'],
    status: 'draft',
    author: 'Project Lantern Editorial Team',
    lastUpdated: '2026-08-01',
    sources: [
      { name: 'WHO: Dementia Fact Sheet', url: 'https://www.who.int/news-room/fact-sheets/detail/dementia' },
      { name: "Alzheimer's Disease International: World Alzheimer Report", url: 'https://www.alzint.org/resource/world-alzheimer-report-2022/' },
      { name: 'ARDSI', url: 'https://www.ardsi.org' },
    ],
    body: `
      <p>Alzheimer's disease is the most common form of dementia: a term that describes a group of symptoms affecting memory, thinking and social abilities severely enough to interfere with daily life. It is not a normal part of ageing, though it becomes more common as people grow older.</p>
      <p>In India, an estimated 5.3 million people live with dementia and the number is expected to grow significantly over the next two decades as the population ages. Yet awareness remains low and many families navigate the journey of caregiving without adequate information or support.</p>
      <h2>Alzheimer's vs. Normal Ageing: What's the Difference?</h2>
      <p>It is normal to occasionally forget where you put your keys or blank on a name for a moment. This type of forgetfulness tends to improve with prompting: someone mentions the name and you remember.</p>
      <p>Alzheimer's disease is different in important ways:</p>
      <ul>
        <li><strong>Forgetting recent events entirely</strong>: not just misplacing keys, but forgetting that a conversation happened an hour ago</li>
        <li><strong>Getting lost in familiar places</strong>: not navigating an unfamiliar city, but losing the way to a shop visited weekly for years</li>
        <li><strong>Difficulty with familiar tasks</strong>: struggling to prepare a familiar recipe, manage money or follow the thread of a television programme</li>
        <li><strong>Confusion about time</strong>: not knowing the day of the week is common; not knowing what year it is or believing long-dead relatives are still alive, is not</li>
        <li><strong>Language difficulties</strong>: finding words less often, in ways that noticeably affect conversation</li>
        <li><strong>Changes in personality or behaviour</strong>: uncharacteristic suspicion, withdrawal or mood swings that persist</li>
      </ul>
      <h2>What Happens in the Brain</h2>
      <p>Alzheimer's disease involves the gradual breakdown of brain cells (neurons) and the connections between them. Two abnormal protein structures are central to the disease process:</p>
      <p><strong>Amyloid plaques</strong>: clumps of a protein fragment called beta-amyloid that build up between nerve cells.</p>
      <p><strong>Tau tangles</strong>: twisted strands of another protein, tau, that form inside dying nerve cells.</p>
      <p>These changes typically begin in the hippocampus: the region of the brain responsible for forming new memories: which is why memory for recent events is usually the first thing affected. Over time, the damage spreads to other parts of the brain, affecting language, reasoning and eventually basic bodily functions.</p>
      <h2>The Stages of Alzheimer's Disease</h2>
      <h3>Early Stage (Mild)</h3>
      <p>The person can still live independently and participate in most activities. Common signs include forgetting recent conversations, difficulty finding the right word and mild mood changes. At this stage, many people with Alzheimer's are aware that something has changed.</p>
      <h3>Middle Stage (Moderate)</h3>
      <p>This is typically the longest stage. The person requires increasing support with daily activities. Common signs include significant memory gaps, confusion about time and place, difficulty with personal care and behavioural changes including sundowning.</p>
      <h3>Late Stage (Severe)</h3>
      <p>The person requires full-time care and assistance with all daily activities. At this stage, comfort, dignity and managing pain and distress become the central goals of care.</p>
      <h2>Getting a Diagnosis in India</h2>
      <p>If you are concerned about memory changes in yourself or a family member, the right first step is a consultation with a doctor: a general physician for initial assessment or a neurologist or geriatrician for specialist review. Major cities have memory clinics, including NIMHANS in Bangalore and AIIMS in Delhi. ARDSI (Alzheimer's and Related Disorders Society of India) can help connect families with resources in their region.</p>
    `,
  },
  'types-of-dementia': {
    title: 'Understanding the Different Types of Dementia',
    description:
      "Dementia is not one disease. This guide explains the main types: Alzheimer's, vascular, Lewy body and frontotemporal dementia: their differences and why the distinction matters.",
    readingTime: 7,
    tags: ['Education', 'Types'],
    status: 'draft',
    author: 'Project Lantern Editorial Team',
    lastUpdated: '2026-08-01',
    sources: [
      { name: "Alzheimer's Disease International: Types of Dementia", url: 'https://www.alzint.org/about/dementia/types-of-dementia/' },
      { name: 'World Health Organization: Dementia', url: 'https://www.who.int/news-room/fact-sheets/detail/dementia' },
    ],
    body: `
      <p>When most people hear the word "dementia", they think of Alzheimer's disease. Alzheimer's is the most common form: accounting for roughly 60–70% of cases globally: but dementia is an umbrella term that covers a spectrum of conditions, each with somewhat different causes, symptoms and progression patterns.</p>
      <h2>Alzheimer's Disease (60–70% of cases)</h2>
      <p>The most common cause of dementia. Caused by amyloid plaques and tau tangles that gradually damage brain cells, beginning in the hippocampus. Memory loss for recent events is usually the first and most prominent symptom, with gradual, progressive decline over many years.</p>
      <h2>Vascular Dementia (15–20% of cases)</h2>
      <p>Caused by reduced blood flow to the brain: through strokes, mini-strokes or disease of small blood vessels. Symptoms sometimes appear suddenly after a stroke and decline may be "stepwise": periods of stability followed by sudden worsening. Executive function (planning, reasoning) is often more affected early on than memory.</p>
      <p><strong>India relevance:</strong> Vascular dementia may be proportionally more common in South Asia due to high rates of hypertension, diabetes and stroke. Lifestyle risk factor management can make a genuine difference.</p>
      <h2>Lewy Body Dementia (approximately 10–15% of cases)</h2>
      <p>Involves abnormal protein deposits (Lewy bodies) in brain cells. Signature features include vivid visual hallucinations (seeing animals or people that are not there), fluctuating cognition, Parkinsonian movement symptoms and REM sleep behaviour disorder.</p>
      <p><strong>Critical safety note:</strong> People with Lewy body dementia are severely sensitive to certain antipsychotic medications that are sometimes used in other dementias: these can cause life-threatening reactions. Always inform any prescribing doctor of the specific diagnosis.</p>
      <h2>Frontotemporal Dementia (5–10% of cases)</h2>
      <p>Caused by progressive damage to the frontal and temporal lobes. It is the most common dementia in people under 65. Changes in personality and behaviour: disinhibition, apathy, impulsivity, loss of empathy: are prominent early, while memory may be relatively preserved. Language difficulties are prominent in some variants.</p>
      <h2>Why the Specific Diagnosis Matters</h2>
      <p>The type of dementia affects medication decisions (especially critical for Lewy body), what symptoms to expect, how to prepare as caregivers and eligibility for research trials. If a family member has received a dementia diagnosis, ask the specialist: "What specific type of dementia is this?"</p>
    `,
  },
}

export async function generateStaticParams() {
  return Object.keys(ARTICLES).map((slug) => ({ slug }))
}

export async function generateMetadata(
  props: { params: Promise<{ slug: string }> }
): Promise<Metadata> {
  const { slug } = await props.params
  const article = ARTICLES[slug]
  if (!article) return { title: 'Article Not Found' }
  return {
    title: article.title,
    description: article.description,
  }
}

export default async function UnderstandArticlePage(
  props: { params: Promise<{ slug: string }> }
) {
  const { slug } = await props.params
  const article = ARTICLES[slug]

  if (!article) notFound()

  const formattedDate = new Date(article.lastUpdated).toLocaleDateString('en-IN', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })

  return (
    <>
      {/* Breadcrumb */}
      <div className="border-b border-border-light bg-surface">
        <div className="container-layout py-3">
          <nav aria-label="Breadcrumb">
            <ol className="flex items-center gap-2 text-sm text-text-subtle" role="list">
              <li><Link href="/" className="hover:text-amber transition-colors">Home</Link></li>
              <li aria-hidden="true" className="text-border">›</li>
              <li><Link href="/understand" className="hover:text-amber transition-colors">Understand Alzheimer's</Link></li>
              <li aria-hidden="true" className="text-border">›</li>
              <li className="text-text-muted truncate max-w-48 md:max-w-none" aria-current="page">
                {article.title}
              </li>
            </ol>
          </nav>
        </div>
      </div>

      {/* Article hero */}
      <section className="page-hero" aria-label="Article header">
        <div className="container-layout">
          <div className="content-column">
            <div className="flex flex-wrap items-center gap-2 mb-4">
              {article.tags.map((tag) => (
                <span key={tag} className="tag">{tag}</span>
              ))}
              {article.status === 'draft' && (
                <span className="tag tag-draft">Draft: not yet medically reviewed</span>
              )}
            </div>
            <h1 className="font-sans font-800 text-text mb-4">{article.title}</h1>
            <p className="text-lg text-text-muted leading-relaxed mb-5">{article.description}</p>
            {/* Metadata */}
            <div className="flex flex-wrap items-center gap-4 text-sm text-text-subtle border-t border-border-light pt-4">
              {article.author && (
                <div className="flex items-center gap-1.5">
                  <User className="w-3.5 h-3.5" aria-hidden="true" />
                  <span>{article.author}</span>
                </div>
              )}
              <div className="flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5" aria-hidden="true" />
                <span>Updated {formattedDate}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5" aria-hidden="true" />
                <span>{article.readingTime} min read</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Article body + sidebar */}
      <div className="container-layout py-10 md:py-14">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-14">
          {/* Article content */}
          <article
            className="lg:col-span-2"
            data-pagefind-body
            aria-labelledby="article-title"
          >
            <DisclaimerBanner />
            <div
              className="prose mt-8"
              dangerouslySetInnerHTML={{ __html: article.body }}
            />

            {/* Sources */}
            {article.sources.length > 0 && (
              <section className="mt-12 pt-8 border-t border-border-light" aria-labelledby="sources-heading">
                <h2 id="sources-heading" className="font-sans font-700 text-text text-base mb-4">
                  Sources & further reading
                </h2>
                <ul className="space-y-2" role="list">
                  {article.sources.map((source) => (
                    <li key={source.url} className="text-sm">
                      <a
                        href={source.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-amber hover:text-amber-dark transition-colors"
                      >
                        {source.name}
                        <ExternalLink className="w-3 h-3" aria-hidden="true" />
                        <span className="sr-only">(opens in new tab)</span>
                      </a>
                    </li>
                  ))}
                </ul>
              </section>
            )}

            {/* Back link */}
            <div className="mt-10">
              <Link
                href="/understand"
                className="inline-flex items-center gap-2 text-sm text-text-muted hover:text-primary transition-colors font-sans font-600"
              >
                <ArrowLeft className="w-4 h-4" aria-hidden="true" />
                Back to Understand Alzheimer's
              </Link>
            </div>
          </article>

          {/* Sidebar */}
          <aside className="space-y-6 lg:pt-2" aria-label="Additional resources">
            <HelplineBanner />
            <div className="card p-5">
              <h2 className="font-sans font-700 text-text mb-3 text-sm">On this page</h2>
              <p className="text-xs text-text-muted">
                All articles are educational only. Marked as <span className="tag tag-draft text-xs">draft</span> until
                medically reviewed by a qualified professional.
              </p>
            </div>
            <div className="card p-5">
              <h2 className="font-sans font-700 text-text mb-3 text-sm">Related</h2>
              <ul className="space-y-2 text-sm" role="list">
                <li>
                  <Link href="/glossary" className="text-amber hover:text-amber-dark transition-colors">
                    Medical glossary →
                  </Link>
                </li>
                <li>
                  <Link href="/caregiving/after-diagnosis" className="text-amber hover:text-amber-dark transition-colors">
                    After a diagnosis →
                  </Link>
                </li>
                <li>
                  <Link href="/find-help" className="text-amber hover:text-amber-dark transition-colors">
                    Find help in India →
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
