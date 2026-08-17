import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { ArrowLeft, Clock, Calendar, User, ExternalLink } from 'lucide-react'
import { DisclaimerBanner } from '@/components/layout/DisclaimerBanner'
import { HelplineBanner } from '@/components/layout/HelplineBanner'

const ARTICLES: Record<string, {
  title: string
  description: string
  readingTime: number
  tags: string[]
  status: 'draft' | 'under-review' | 'reviewed'
  author: string
  lastUpdated: string
  sources: { name: string; url: string }[]
  body: string
}> = {
  'after-diagnosis': {
    title: 'After a Diagnosis: A Practical Guide for Indian Families',
    description:
      'What to do in the weeks after a dementia diagnosis. Practical guidance on immediate steps, legal planning, navigating the Indian healthcare system and how to support the person diagnosed.',
    readingTime: 10,
    tags: ['First Steps', 'Planning'],
    status: 'under-review',
    author: 'Project Lantern Editorial Team',
    lastUpdated: '2026-08-01',
    sources: [
      { name: 'ARDSI', url: 'https://www.ardsi.org' },
      { name: 'Dementia India Alliance', url: 'https://www.dementiaindiaalliance.org' },
      { name: 'ADI: Dementia in the Family', url: 'https://www.alzint.org/resource/dementia-in-the-family/' },
    ],
    body: `
      <h2>The First Days After a Diagnosis</h2>
      <p>Receiving a dementia diagnosis: for yourself or a family member: is a defining moment. The days immediately following can feel overwhelming: a mix of grief, confusion, fear about the future and often, a strange sense of relief that the uncertainty has finally resolved into something concrete.</p>
      <p>This guide is for the weeks and months after the diagnosis. It is practical rather than theoretical, shaped by the realities of navigating healthcare and caregiving in India.</p>
      <h2>Give Yourself Time to Process</h2>
      <p>Before making any decisions, allow space for the emotional reality. A dementia diagnosis is a life-changing event. Common emotional responses in the early weeks include grief, denial, relief, guilt and fear. All of these are normal. None of them require immediate action.</p>
      <h2>Practical Steps: The First Month</h2>
      <h3>1. Understand the Diagnosis Clearly</h3>
      <p>Make a follow-up appointment with the diagnosing specialist and come prepared with questions. Consider bringing another family member. Ask: What specific type of dementia has been diagnosed? What stage is it currently at? What symptoms should we expect in the next six to twelve months? Are there medications being recommended?</p>
      <h3>2. Share the Information Within the Family</h3>
      <p>In Indian family contexts, decisions about what to tell elderly parents, whether to disclose to extended family and how to handle the social dimension are real challenges. The person diagnosed has the right to be part of decisions about disclosure while they retain that capacity. Children and teenagers generally do better with age-appropriate honesty than with vague reassurances.</p>
      <h3>3. Legal and Financial Planning: Act Early</h3>
      <p>This is the most time-sensitive practical step. When the person diagnosed still has full legal capacity, certain legal and financial arrangements should be made.</p>
      <p><strong>Power of Attorney:</strong> In India, a General or Specific Power of Attorney can authorise a family member or trusted person to manage financial and legal affairs on the person's behalf. Once capacity is significantly impaired, the process becomes more complex and may require court intervention.</p>
      <p><strong>Will and succession:</strong> If a will has not been made, this is an important time to do so, with the help of a lawyer.</p>
      <p>Consult a qualified lawyer who has experience with elder law or elder care. This is not a cost that can be safely deferred.</p>
      <h3>4. Build Your Care Team</h3>
      <p>No family should try to manage dementia care entirely alone. Potential members of a care team include the diagnosing specialist for medical management, a general physician for day-to-day health needs, a trained caregiver or attendant for practical support and a social worker to help navigate resources. ARDSI chapters can often provide guidance on finding trained dementia caregivers in your area.</p>
      <h3>5. Connect with Others Who Understand</h3>
      <p>The value of peer support: speaking with other families on the same journey: cannot be overstated. ARDSI runs support groups for caregivers in many cities. The Dementia India Alliance helpline (8585 990 990) can connect you with support resources.</p>
      <h2>Supporting the Person Diagnosed</h2>
      <p>A dementia diagnosis belongs first to the person who has it. In the early stages, the person is typically aware, feeling the full weight of what the diagnosis means. Include the person in planning conversations for as long as possible. Listen to what they want about care, where they want to live, what matters to them. Maintain normality: continue shared activities, outings, family meals. Avoid talking about the person as if they are not there.</p>
      <h2>Looking After Yourself</h2>
      <p>Caregiving for someone with dementia is a years-long journey. Caregiver burnout is not a character flaw: it is a predictable consequence of sustained, demanding care without adequate support. From the beginning, build habits that protect your own health: sleep, your own medical care, social connection and asking for help. Many caregivers: particularly daughters and daughters-in-law in Indian contexts: carry a disproportionate share of the burden. This should be named and addressed within families.</p>
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
  return { title: article.title, description: article.description }
}

export default async function CaregivingArticlePage(
  props: { params: Promise<{ slug: string }> }
) {
  const { slug } = await props.params
  const article = ARTICLES[slug]

  if (!article) notFound()

  const formattedDate = new Date(article.lastUpdated).toLocaleDateString('en-IN', {
    year: 'numeric', month: 'long', day: 'numeric',
  })

  return (
    <>
      <div className="border-b border-border-light bg-surface">
        <div className="container-layout py-3">
          <nav aria-label="Breadcrumb">
            <ol className="flex items-center gap-2 text-sm text-text-subtle" role="list">
              <li><Link href="/" className="hover:text-amber transition-colors">Home</Link></li>
              <li aria-hidden="true" className="text-border">›</li>
              <li><Link href="/caregiving" className="hover:text-amber transition-colors">Caregiving Guide</Link></li>
              <li aria-hidden="true" className="text-border">›</li>
              <li className="text-text-muted truncate max-w-48 md:max-w-none" aria-current="page">{article.title}</li>
            </ol>
          </nav>
        </div>
      </div>

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
              {article.status === 'under-review' && (
                <span className="tag tag-amber">Under clinical review by SCARF India</span>
              )}
            </div>
            <h1 className="font-sans font-800 text-text mb-4">{article.title}</h1>
            <p className="text-lg text-text-muted leading-relaxed mb-5">{article.description}</p>
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

      <div className="container-layout py-10 md:py-14">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-14">
          <article className="lg:col-span-2" data-pagefind-body>
            <DisclaimerBanner />
            <div className="prose mt-8" dangerouslySetInnerHTML={{ __html: article.body }} />
            {article.sources.length > 0 && (
              <section className="mt-12 pt-8 border-t border-border-light" aria-labelledby="sources-heading">
                <h2 id="sources-heading" className="font-sans font-700 text-text text-base mb-4">Sources & further reading</h2>
                <ul className="space-y-2" role="list">
                  {article.sources.map((source) => (
                    <li key={source.url} className="text-sm">
                      <a href={source.url} target="_blank" rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-amber hover:text-amber-dark transition-colors">
                        {source.name}
                        <ExternalLink className="w-3 h-3" aria-hidden="true" />
                        <span className="sr-only">(opens in new tab)</span>
                      </a>
                    </li>
                  ))}
                </ul>
              </section>
            )}
            <div className="mt-10">
              <Link href="/caregiving"
                className="inline-flex items-center gap-2 text-sm text-text-muted hover:text-primary transition-colors font-sans font-600">
                <ArrowLeft className="w-4 h-4" aria-hidden="true" />
                Back to Caregiving Guide
              </Link>
            </div>
          </article>

          <aside className="space-y-6 lg:pt-2" aria-label="Additional resources">
            <HelplineBanner />
            <div className="card p-5">
              <h2 className="font-sans font-700 text-text mb-3 text-sm">Related articles</h2>
              <ul className="space-y-2 text-sm" role="list">
                <li><Link href="/understand/what-is-alzheimers" className="text-amber hover:text-amber-dark transition-colors">What is Alzheimer's? →</Link></li>
                <li><Link href="/glossary" className="text-amber hover:text-amber-dark transition-colors">Medical glossary →</Link></li>
                <li><Link href="/find-help" className="text-amber hover:text-amber-dark transition-colors">Find help in India →</Link></li>
              </ul>
            </div>
          </aside>
        </div>
      </div>
    </>
  )
}
