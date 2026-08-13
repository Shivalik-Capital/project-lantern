import type { Metadata } from 'next'
import { CheckCircle2, ShieldX, Heart } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Editorial Charter & Methodology',
  description: 'The strict ethical boundaries and content methodology guiding Project Lantern.',
}

export default function CharterPage() {
  return (
    <div className="container-layout py-16 md:py-24">
      <div className="content-column">
        <div className="mb-12">
          <span className="inline-block px-3 py-1 rounded-full bg-primary-lighter text-primary font-700 text-sm tracking-wide uppercase mb-4">
            Official Whitepaper
          </span>
          <h1 className="text-4xl md:text-5xl font-sans font-800 text-text leading-tight mb-6">
            Editorial Charter & Methodology
          </h1>
          <p className="text-xl text-text-muted leading-relaxed">
            Project Lantern is built on a foundation of clinical accuracy, cultural relevance, and strict ethical boundaries. This charter outlines our methodology for serving the 5.3 million Indian families navigating dementia.
          </p>
        </div>

        <div className="prose max-w-none">
          <h2 className="flex items-center gap-2 mt-0">
            <Heart className="text-amber" /> The Genesis of Project Lantern
          </h2>
          <p>
            This project was born out of profound personal struggle. Caring for my grandmother through her journey with dementia exposed the severe lack of accessible, localized guidance for Indian families. It taught me how incredibly difficult it is to live with someone who has dementia, despite loving them immensely. This platform exists so that other families do not have to navigate this darkness alone.
          </p>

          <h2 className="flex items-center gap-2">
            <CheckCircle2 className="text-primary" /> What We Will Build
          </h2>
          <p>
            Our roadmap is focused strictly on evidence-based education and resource aggregation:
          </p>
          <ul>
            <li><strong>Localized Caregiving Guides:</strong> Practical advice tailored to Indian living situations (multi-generational homes, local legal frameworks).</li>
            <li><strong>Plain-Language Medical Glossary:</strong> Demystifying clinical terminology so families can participate meaningfully in medical consultations.</li>
            <li><strong>Resource Directory:</strong> A verified database of ARDSI chapters, memory clinics, and national helplines.</li>
            <li><strong>Public Health Dashboards:</strong> Visualizing data from the Longitudinal Aging Study in India (LASI) to highlight prevalence and raise awareness.</li>
          </ul>

          <h2 className="flex items-center gap-2">
            <ShieldX className="text-emergency" /> Strict Ethical Boundaries
          </h2>
          <p>
            In the era of rapid digital health expansion, drawing a hard line on what a platform <em>will not</em> do is as important as what it will do. 
          </p>
          <div className="card p-6 bg-emergency-bg border-emergency/20 mt-4 mb-8">
            <ul className="space-y-3 mb-0 text-text">
              <li><strong>No Diagnostic Tools:</strong> We will never implement AI symptom checkers or diagnostic questionnaires. Diagnosis is strictly the purview of medical professionals.</li>
              <li><strong>No Medical Advice:</strong> Our content will never recommend specific treatments, medications, or alternative therapies.</li>
              <li><strong>No Commercial Influence:</strong> We do not accept advertising, pharmaceutical sponsorships, or affiliate marketing. The platform is indefinitely free.</li>
            </ul>
          </div>

          <h2>Content Sourcing & Review Process</h2>
          <p>
            All foundational data is sourced from internationally and nationally recognized bodies, including the World Health Organization (WHO), the Ministry of Health and Family Welfare (India), and the Dementia India Report. 
          </p>
          <p>
            However, aggregation is not enough. Before any educational article exits the draft phase, it must undergo a rigorous review by a practicing geriatrician, neurologist, or dementia specialist registered in India. This ensures that global best practices are correctly contextualized for the Indian healthcare landscape.
          </p>
        </div>
      </div>
    </div>
  )
}
