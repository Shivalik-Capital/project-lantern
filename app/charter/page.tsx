import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Editorial Charter & Methodology',
  description: 'The strict ethical boundaries and content methodology guiding Project Lantern.',
}

export default function CharterPage() {
  return (
    <div className="container-layout py-16 md:py-24">
      <div className="content-column">
        <div className="mb-16">
          <span className="inline-block px-3 py-1 rounded-full bg-primary-lighter text-primary font-sans font-600 text-sm tracking-wide uppercase mb-6 border border-primary/20">
            Official Whitepaper
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-text leading-tight mb-6">
            Editorial Charter & Methodology
          </h1>
          <p className="text-xl md:text-2xl text-text-muted font-sans font-300 leading-relaxed">
            Project Lantern is built on a foundation of clinical accuracy, cultural relevance, and strict ethical boundaries. This charter outlines our methodology for serving the 8.8 million Indian families navigating dementia.
          </p>
        </div>

        <div className="prose max-w-none prose-p:text-lg prose-p:leading-relaxed prose-li:text-lg">
          
          <h2 className="font-serif text-3xl text-text border-b border-border-light pb-2 mb-6 mt-16">
            The Genesis of Project Lantern
          </h2>
          <p>
            This project was born out of profound personal struggle. Caring for my grandmother through her journey with dementia exposed the severe lack of accessible, localized guidance for Indian families. It taught me how incredibly difficult it is to live with someone who has dementia, despite loving them immensely. This platform exists so that other families do not have to navigate this darkness alone.
          </p>

          <h2 className="font-serif text-3xl text-text border-b border-border-light pb-2 mb-6 mt-16">
            What We Build
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

          <h2 className="font-serif text-3xl text-text border-b border-border-light pb-2 mb-6 mt-16">
            Strict Ethical Boundaries
          </h2>
          <p>
            In the era of rapid digital health expansion, drawing a hard line on what a platform <em>will not</em> do is as important as what it will do. 
          </p>
          <div className="bg-red-50 border-l-4 border-red-600 p-8 my-8 rounded-r-2xl">
            <ul className="space-y-4 mb-0 text-text pl-0 list-none">
              <li className="pl-6 relative before:content-[''] before:absolute before:left-0 before:top-2.5 before:w-2 before:h-2 before:bg-red-600 before:rounded-full">
                <strong className="text-red-900 font-serif text-xl block mb-1">No Diagnostic Tools</strong> 
                <span className="font-sans">We will never implement AI symptom checkers or diagnostic questionnaires. Diagnosis is strictly the purview of medical professionals.</span>
              </li>
              <li className="pl-6 relative before:content-[''] before:absolute before:left-0 before:top-2.5 before:w-2 before:h-2 before:bg-red-600 before:rounded-full">
                <strong className="text-red-900 font-serif text-xl block mb-1">No Medical Advice</strong> 
                <span className="font-sans">Our content will never recommend specific treatments, medications, or alternative therapies.</span>
              </li>
              <li className="pl-6 relative before:content-[''] before:absolute before:left-0 before:top-2.5 before:w-2 before:h-2 before:bg-red-600 before:rounded-full">
                <strong className="text-red-900 font-serif text-xl block mb-1">No Commercial Influence</strong> 
                <span className="font-sans">We do not accept advertising, pharmaceutical sponsorships, or affiliate marketing. The platform is indefinitely free.</span>
              </li>
            </ul>
          </div>

          <h2 className="font-serif text-3xl text-text border-b border-border-light pb-2 mb-6 mt-16">
            Content Sourcing & Clinical Review
          </h2>
          <p>
            All foundational data is sourced from internationally and nationally recognized bodies, including the World Health Organization (WHO), the Ministry of Health and Family Welfare (India), and the Dementia India Report. 
          </p>
          <p>
            However, aggregation is not enough. To ensure that global best practices are correctly contextualized for the Indian healthcare landscape, the educational articles on this site were thoroughly reviewed by practicing clinicians at SCARF Chennai (Schizophrenia Research Foundation). We rely on their expertise to ensure our foundational guides are medically accurate and safe for families.
          </p>
        </div>
      </div>
    </div>
  )
}
