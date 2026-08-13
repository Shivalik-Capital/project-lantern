import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Stethoscope, FileCheck, Users } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Call for Clinical Leadership',
  description: 'Information for medical professionals interested in joining the Project Lantern founding review board.',
}

export default function ClinicalBoardPage() {
  return (
    <div className="container-layout py-16 md:py-24">
      <div className="content-column">
        <div className="mb-12 text-center">
          <span className="inline-block px-3 py-1 rounded-full bg-amber-light text-amber-dark font-700 text-sm tracking-wide uppercase mb-4 border border-amber/20">
            Professional Outreach
          </span>
          <h1 className="text-4xl md:text-5xl font-sans font-800 text-text leading-tight mb-6">
            Call for Clinical Leadership
          </h1>
          <p className="text-xl text-text-muted leading-relaxed max-w-2xl mx-auto">
            We have built the digital infrastructure. We are now seeking a founding clinical board to govern its medical accuracy.
          </p>
        </div>

        <div className="prose max-w-none">
          <p>
            Project Lantern is a fully engineered, open-source educational platform designed specifically for the 5.3 million Indian families navigating Alzheimer's and dementia. The technical foundation—including MDX content management, a verified resource directory and interactive public health data dashboards—is complete. 
          </p>
          <p>
            However, technology alone cannot solve the awareness gap. To ensure this platform serves as a genuinely safe and authoritative resource, we are recruiting a founding board of clinical reviewers.
          </p>

          <h2 className="mt-12">Who We Are Looking For</h2>
          <p>
            We are reaching out to practicing geriatricians, neurologists, psychiatrists, and dementia specialists based in India. We are looking for professionals who understand the profound need to bridge the gap between clinical excellence and accessible, community-level education.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-10 not-prose">
            <div className="card p-6 border-t-4 border-t-primary">
              <Stethoscope className="w-8 h-8 text-primary mb-4" />
              <h3 className="font-sans font-700 text-lg text-text mb-2">Clinical Oversight</h3>
              <p className="text-sm text-text-muted leading-relaxed">Ensure our foundational articles align with current medical standards and the Indian healthcare context.</p>
            </div>
            <div className="card p-6 border-t-4 border-t-amber">
              <FileCheck className="w-8 h-8 text-amber mb-4" />
              <h3 className="font-sans font-700 text-lg text-text mb-2">Low Time Commitment</h3>
              <p className="text-sm text-text-muted leading-relaxed">Reviewing 2 to 3 concise draft articles (approx. 30-45 minutes total) to help us launch the V1 platform.</p>
            </div>
            <div className="card p-6 border-t-4 border-t-primary-dark">
              <Users className="w-8 h-8 text-primary-dark mb-4" />
              <h3 className="font-sans font-700 text-lg text-text mb-2">Public Attribution</h3>
              <p className="text-sm text-text-muted leading-relaxed">Your name, credentials and institutional affiliation will be permanently displayed on all content you review.</p>
            </div>
          </div>

          <h2>Why Join?</h2>
          <p>
            By serving as a founding reviewer, you will directly influence the editorial standards of a platform built to scale across multiple Indian languages. You will help ensure that when families search for answers in the middle of the night, they find information that is medically sound, ethically bounded and highly practical.
          </p>
          
          <p className="mb-10">
            Please review our <Link href="/charter">Editorial Charter</Link> to understand our strict stance against diagnostic AI tools and medical advice.
          </p>

          <div className="card p-8 bg-surface border-2 border-dashed border-border-light text-center not-prose">
            <h3 className="text-2xl font-sans font-800 text-text mb-4">Interested in guiding this project?</h3>
            <p className="text-text-muted mb-6">
              If you received our outreach email, please reply directly. Alternatively, you can reach out via our GitHub repository.
            </p>
            <a href="https://github.com/Shivalik-Capital/project-lantern" target="_blank" rel="noopener noreferrer" className="btn btn-primary px-8">
              View Project Architecture
              <ArrowRight className="w-4 h-4 ml-2" />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
