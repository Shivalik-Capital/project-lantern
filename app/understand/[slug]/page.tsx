import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { ArrowLeft, Clock, Calendar, User, ExternalLink, ShieldAlert } from 'lucide-react'
import { DisclaimerBanner } from '@/components/layout/DisclaimerBanner'

const FLAGSHIP_ARTICLE = {
  title: "What is Alzheimer's Disease?",
  description:
    "A clinical overview of Alzheimer's disease pathology, progression and prevalence in the Indian context. Provided as a proof-of-concept for clinical review.",
  readingTime: 12,
  tags: ['Pilot Content', 'Neurology'],
  status: 'draft',
  author: 'Project Lantern Editorial Framework',
  lastUpdated: '2026-08-13',
  sources: [
    { name: 'Longitudinal Aging Study in India (LASI) Wave 1', url: 'https://www.iipsindia.ac.in/sites/default/files/LASI_India_Report_2020_compressed.pdf' },
    { name: 'Dementia in India: National and state estimates (Alzheimer\'s & Dementia, 2023)', url: 'https://alz-journals.onlinelibrary.wiley.com/doi/10.1002/alz.12928' },
    { name: 'World Health Organization: Dementia Fact Sheet', url: 'https://www.who.int/news-room/fact-sheets/detail/dementia' }
  ],
  body: `
    <div class="p-6 bg-primary-lighter border border-primary-light rounded-xl mb-10 flex gap-4">
      <ShieldAlert class="w-6 h-6 text-primary flex-shrink-0 mt-1" />
      <div>
        <p class="font-700 text-primary-dark mb-1">Notice to Clinical Reviewers</p>
        <p class="text-sm text-text-muted mb-0">This flagship article serves as a structural proof-of-concept for our MDX content pipeline. We invite your clinical scrutiny on the depth, tone and accuracy of the medical information presented below.</p>
      </div>
    </div>

    <h2>Defining Alzheimer's Disease</h2>
    <p>Alzheimer's disease is an irreversible, progressive neurodegenerative disorder that slowly destroys memory, thinking skills and eventually the ability to carry out the simplest tasks. It is the most common cause of dementia in older adults, accounting for an estimated 60% to 80% of all dementia cases globally.</p>
    <p>It is critical to distinguish Alzheimer's from standard age-related cognitive decline. While occasional memory lapses are a normal part of ageing, Alzheimer's disease represents a distinct pathological deterioration of the brain.</p>

    <h2>The Burden of Dementia in India</h2>
    <p>According to the 2023 analysis of the Longitudinal Aging Study in India (LASI), an estimated 8.8 million adults aged 60 and older are living with dementia in India. The national prevalence is approximately 7.4%. However, this burden is not distributed equally:</p>
    <ul>
      <li><strong>Gender Disparity:</strong> Prevalence is notably higher in women than in men, driven by greater longevity and socio-educational factors.</li>
      <li><strong>Urban vs. Rural:</strong> Higher prevalence rates are consistently observed in rural populations, which often face compound challenges of lower educational attainment and reduced access to neurological care.</li>
      <li><strong>Regional Variance:</strong> There is massive cross-state variance. For instance, estimates suggest a prevalence of 12.94% in Jammu & Kashmir compared to just 1.82% in Chandigarh.</li>
    </ul>

    <h2>Neuropathology: What Happens in the Brain?</h2>
    <p>The precise etiology of Alzheimer's disease is still subject to intense clinical research, but the disease is characterized by two primary neuropathological hallmarks:</p>
    
    <h3>1. Amyloid Plaques</h3>
    <p>Beta-amyloid is a fragment of a larger protein found in the fatty membrane surrounding nerve cells. In a healthy brain, these fragments are broken down and eliminated. In Alzheimer's disease, they accumulate to form hard, insoluble plaques between neurons. These plaques are highly neurotoxic and disrupt cell-to-cell communication at synapses.</p>
    
    <h3>2. Neurofibrillary Tangles</h3>
    <p>Neurons possess an internal support and transport system made of proteins. Tau protein helps stabilize this structure in healthy neurons. In Alzheimer's, chemical changes cause tau proteins to detach from the microtubules and stick to other tau molecules, forming threads that eventually join to form tangles inside neurons. These tangles block the neuron's transport system, starving the cell and eventually causing cell death.</p>

    <p>This cellular destruction typically begins in the entorhinal cortex and hippocampus (areas essential for forming memories) before spreading to the cerebral cortex (responsible for language, reasoning and social behavior).</p>

    <h2>Clinical Progression</h2>
    <p>Alzheimer's progresses along a continuum. While the rate of progression varies significantly between patients, the clinical trajectory is generally categorized into three stages:</p>

    <h3>Early-Stage (Mild)</h3>
    <p>In the early stages, an individual may function independently. They might still drive, work and participate in social activities. Clinical signs often include:</p>
    <ul>
      <li>Difficulty recalling newly learned information or recent conversations.</li>
      <li>Challenges in finding the right word or name.</li>
      <li>Decreased ability to organize or plan complex tasks (e.g. managing finances).</li>
      <li>Misplacing objects in unusual locations.</li>
    </ul>

    <h3>Middle-Stage (Moderate)</h3>
    <p>This is typically the longest stage of the disease. The individual requires a greater level of care and structural support. Clinical signs include:</p>
    <ul>
      <li>Pronounced memory loss, including forgetting personal history or recognizing family members.</li>
      <li>Disorientation to time and place (e.g. not knowing the current year or their location).</li>
      <li>Changes in sleep patterns (e.g. sleeping during the day and becoming restless at night).</li>
      <li>Significant personality and behavioral changes, including suspiciousness, delusions, or repetitive behavior.</li>
    </ul>

    <h3>Late-Stage (Severe)</h3>
    <p>In the final stage, individuals lose the ability to respond to their environment, carry on a conversation and eventually control movement. Care transitions to full-time palliative support focusing on quality of life and dignity.</p>
    <ul>
      <li>Require full-time, around-the-clock assistance with daily personal care.</li>
      <li>Loss of awareness of recent experiences and surroundings.</li>
      <li>Increased vulnerability to infections, particularly pneumonia, which is a common cause of mortality in late-stage Alzheimer's.</li>
    </ul>

    <h2>The Urgent Need for Localized Education</h2>
    <p>The gap between the clinical reality of Alzheimer's disease and the public understanding in India is vast. Without access to medically accurate, culturally contextualized information in regional languages, families face severe delays in diagnosis, exacerbated caregiver burnout and poor patient outcomes.</p>
  `
}

export function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Metadata {
  return {
    title: FLAGSHIP_ARTICLE.title,
    description: FLAGSHIP_ARTICLE.description,
  }
}

export default async function UnderstandArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params
  
  if (resolvedParams.slug !== 'what-is-alzheimers') {
    notFound()
  }

  const article = FLAGSHIP_ARTICLE

  return (
    <article className="pb-16 md:pb-24">
      {/* Article Header */}
      <header className="bg-primary-lighter border-b border-border-light pt-12 pb-16 mb-12">
        <div className="container-layout">
          <div className="content-column">
            <Link
              href="/"
              className="inline-flex items-center gap-1.5 text-sm font-600 text-text-muted hover:text-primary transition-colors mb-8"
            >
              <ArrowLeft className="w-4 h-4" aria-hidden="true" />
              Back to Home
            </Link>

            <div className="flex flex-wrap items-center gap-3 mb-6">
              {article.tags.map((tag) => (
                <span key={tag} className="tag">
                  {tag}
                </span>
              ))}
              <span className="tag bg-emergency-bg text-emergency border border-emergency/20">
                Awaiting Clinical Review
              </span>
            </div>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-sans font-800 text-text leading-tight mb-6">
              {article.title}
            </h1>

            <p className="text-xl text-text-muted leading-relaxed mb-8">
              {article.description}
            </p>

            <div className="flex flex-wrap items-center gap-6 text-sm text-text-subtle font-600">
              <div className="flex items-center gap-2">
                <User className="w-4 h-4" aria-hidden="true" />
                {article.author}
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" aria-hidden="true" />
                Updated {new Date(article.lastUpdated).toLocaleDateString('en-IN', { month: 'short', year: 'numeric' })}
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" aria-hidden="true" />
                {article.readingTime} min read
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Article Content */}
      <div className="container-layout">
        <div className="content-column">
          <div
            className="prose prose-lg max-w-none mb-16"
            dangerouslySetInnerHTML={{ __html: article.body }}
          />

          <hr className="border-border mb-12" />

          {/* Sources Section */}
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
        </div>
      </div>
    </article>
  )
}
