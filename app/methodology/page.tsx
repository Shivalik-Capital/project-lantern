import { ShieldCheck, Database, FlaskConical, Scale } from 'lucide-react'

export const metadata = {
  title: 'Methodology & Data Sourcing',
  description: 'Learn about Project Lantern\'s strict editorial guidelines, data sources, and our stance against AI-driven diagnostic tools.',
}

export default function MethodologyPage() {
  return (
    <div className="container-layout py-16 md:py-24">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-sans font-800 text-text mb-6">
          Methodology & Sourcing
        </h1>
        <div className="tag tag-draft mb-8 inline-block">Project Status: Alpha Phase</div>
        
        <p className="prose text-lg text-text-muted mb-12">
          Project Lantern is currently in an <strong>Alpha Phase</strong>. The technical infrastructure and design systems have been established, and we are actively recruiting our founding Medical Advisory Board. All clinical content currently on the platform is pending formal review by certified medical professionals.
        </p>
        
        <hr className="border-border-light my-12" />
        
        <div className="space-y-12">
          <section>
            <div className="flex items-center gap-3 mb-4">
              <Database className="w-6 h-6 text-primary" />
              <h2 className="text-2xl font-sans font-700 text-text m-0">Data Sourcing</h2>
            </div>
            <p className="prose text-text-muted">
              Our public health data visualization, including the national and state-level dementia prevalence maps, is strictly sourced from peer-reviewed epidemiological research. Our primary data source is the <strong>Longitudinal Aging Study in India (LASI) 2023</strong>. 
            </p>
            <p className="prose text-text-muted mt-4">
              We do not aggregate unstructured data, and we do not use predictive algorithms to estimate prevalence outside of published, verifiable clinical studies.
            </p>
          </section>
          
          <section>
            <div className="flex items-center gap-3 mb-4">
              <ShieldCheck className="w-6 h-6 text-amber" />
              <h2 className="text-2xl font-sans font-700 text-text m-0">Editorial Guidelines</h2>
            </div>
            <p className="prose text-text-muted">
              Project Lantern operates under a strict editorial charter. We focus entirely on education, systemic navigation, and caregiver support. We do not publish anecdotal medical advice, holistic "cures," or unverified treatments. All future clinical content will require sign-off from at least one board-certified specialist before publication.
            </p>
          </section>
          
          <section>
            <div className="flex items-center gap-3 mb-4">
              <FlaskConical className="w-6 h-6 text-primary" />
              <h2 className="text-2xl font-sans font-700 text-text m-0">Our Stance on AI</h2>
            </div>
            <p className="prose text-text-muted">
              While we utilize modern software to build this platform, <strong>we explicitly prohibit the use of Artificial Intelligence for medical diagnosis or symptom checking.</strong> 
            </p>
            <p className="prose text-text-muted mt-4">
              Dementia is a complex, deeply personal condition that requires a multidisciplinary human approach to diagnosis. Project Lantern will never host a chatbot that attempts to diagnose cognitive decline, nor will we host algorithmic symptom checkers. We build digital infrastructure to guide families to human doctors, not to replace them.
            </p>
          </section>
          
          <section>
            <div className="flex items-center gap-3 mb-4">
              <Scale className="w-6 h-6 text-amber" />
              <h2 className="text-2xl font-sans font-700 text-text m-0">Conflict of Interest</h2>
            </div>
            <p className="prose text-text-muted">
              Project Lantern is built as a public good. We do not accept funding from pharmaceutical companies, memory care facilities, or private healthcare networks. The platform is entirely open-source, and our resource directory listings cannot be purchased.
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}
