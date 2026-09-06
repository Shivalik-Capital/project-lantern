import type { Metadata } from 'next'
import Link from 'next/link'
import { Award, BookOpen, Heart, Building2 } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Clinical Board',
  description: 'Meet the medical professionals who govern the accuracy and standards of Project Lantern.',
}

export default function ClinicalBoardPage() {
  return (
    <div className="container-layout py-16 md:py-24">
      <div className="content-column">
        <div className="mb-12 text-center">
          <span className="inline-block px-3 py-1 rounded-full bg-primary-light text-primary-dark font-700 text-sm tracking-wide uppercase mb-4 shadow-sm border border-primary/20">
            Medical Oversight
          </span>
          <h1 className="text-4xl md:text-5xl font-sans font-800 text-text leading-tight mb-6">
            Founding Clinical Board
          </h1>
          <p className="text-xl text-text-muted leading-relaxed max-w-2xl mx-auto">
            Our content is medically reviewed and governed by practicing dementia specialists to ensure accuracy, safety, and relevance for Indian families.
          </p>
        </div>

        <div className="prose max-w-none">
          <p className="text-lg">
            Technology alone cannot solve the dementia awareness gap in India. To ensure this platform serves as a genuinely safe and authoritative resource, all educational materials on Project Lantern undergo rigorous review by our Clinical Board.
          </p>
          <p>
            The doctors below generously volunteer their time to edit our articles, ensuring they align with current medical standards and the specific realities of the Indian healthcare context. We are deeply grateful for their foundational support.
          </p>

          <h2 className="mt-12 mb-8 flex items-center gap-3">
            <Award className="w-8 h-8 text-amber" />
            Clinical Reviewers
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8 not-prose">
            {/* Dr. Rohith */}
            <div className="card p-6 border-l-4 border-l-primary flex flex-col h-full">
              <h3 className="font-sans font-800 text-xl text-text mb-2">Dr. Rohith Khanna Deivasigamani</h3>
              <div className="flex items-start gap-2 mt-2 text-text-muted">
                <Building2 className="w-4 h-4 mt-1 shrink-0" />
                <span className="text-sm font-600">SCARF Chennai (Schizophrenia Research Foundation)</span>
              </div>
              <p className="text-sm text-text-muted mt-4 leading-relaxed flex-grow">
                Dr. Rohith brings extensive experience in geriatric mental health and dementia care, helping ensure our resources are clinically precise and highly practical for families navigating Alzheimer's in India.
              </p>
            </div>

            {/* Dr. Abitha */}
            <div className="card p-6 border-l-4 border-l-primary flex flex-col h-full">
              <h3 className="font-sans font-800 text-xl text-text mb-2">Dr. Abitha</h3>
              <div className="flex items-start gap-2 mt-2 text-text-muted">
                <Building2 className="w-4 h-4 mt-1 shrink-0" />
                <span className="text-sm font-600">SCARF Chennai (Schizophrenia Research Foundation)</span>
              </div>
              <p className="text-sm text-text-muted mt-4 leading-relaxed flex-grow">
                Dr. Abitha specializes in the presentation and progression of cognitive disorders. Her detailed editorial reviews ensure our symptom guides are accurate, compassionate, and easy to understand.
              </p>
            </div>
            
            {/* Dr. Sridhar Vaitheswaran (Mentioned in previous context) */}
            <div className="card p-6 border-l-4 border-l-primary flex flex-col h-full md:col-span-2">
              <h3 className="font-sans font-800 text-xl text-text mb-2">Dr. Sridhar Vaitheswaran</h3>
              <div className="flex items-start gap-2 mt-2 text-text-muted">
                <Building2 className="w-4 h-4 mt-1 shrink-0" />
                <span className="text-sm font-600">SCARF Chennai (Schizophrenia Research Foundation)</span>
              </div>
              <p className="text-sm text-text-muted mt-4 leading-relaxed">
                As a senior consultant, Dr. Vaitheswaran's leadership in dementia care at SCARF Chennai has been instrumental in shaping the vision of Project Lantern's medical accuracy and support for caregivers.
              </p>
            </div>
          </div>

          <div className="card p-8 bg-primary-lighter border-none mt-12 not-prose">
            <h3 className="text-2xl font-sans font-800 text-primary-dark mb-4 flex items-center gap-2">
              <BookOpen className="w-6 h-6" /> Our Editorial Process
            </h3>
            <p className="text-text-muted mb-4 leading-relaxed">
              Every article in our <Link href="/understand" className="text-primary font-700 hover:underline">Draft Articles</Link> section begins as heavily researched material by the Project Lantern team based on global standards (like the Alzheimer's Association). 
            </p>
            <p className="text-text-muted leading-relaxed">
              It is then submitted to our Clinical Board for a line-by-line review. Only after all medical corrections are implemented is an article marked as <strong>Published</strong>. Please review our <Link href="/charter" className="text-primary font-700 hover:underline">Editorial Charter</Link> to understand our strict stance against diagnostic AI tools and automated medical advice.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
