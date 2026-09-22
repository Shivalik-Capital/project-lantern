import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Clinical Board',
  description: 'Meet the medical professionals who reviewed the foundational content of Project Lantern.',
}

const DOCTORS = [
  {
    name: 'Dr. Sridhar Vaitheswaran',
    org: 'SCARF Chennai',
    bio: 'As a senior consultant, Dr. Vaitheswaran\'s leadership in dementia care at SCARF Chennai has been instrumental in ensuring Project Lantern\'s medical accuracy and support for caregivers.',
  },
  {
    name: 'Dr. Rohith Khanna Deivasigamani',
    org: 'SCARF Chennai',
    bio: 'Dr. Rohith brings extensive experience in geriatric mental health and dementia care, helping ensure our resources are clinically precise and highly practical for Indian families.',
  },
  {
    name: 'Dr. Abitha',
    org: 'SCARF Chennai',
    bio: 'Dr. Abitha specializes in the presentation and progression of cognitive disorders. Her detailed editorial reviews ensured our symptom guides are accurate, compassionate, and accessible.',
  },
]

export default function ClinicalBoardPage() {
  return (
    <div style={{ background: '#edede8' }}>

      {/* Hero */}
      <section className="w-full pt-[96px] pb-[80px]">
        <div className="container-layout">
          <p style={{ fontSize: '12px', fontWeight: 600, color: '#8f8f8e', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '16px' }}>
            Oversight
          </p>
          <h1 style={{ maxWidth: '680px', marginBottom: '24px' }}>Clinical Board</h1>
          <p style={{ fontSize: '19px', color: '#6f6f6e', lineHeight: 1.4, letterSpacing: '-0.19px', maxWidth: '560px' }}>
            All educational materials on Project Lantern were reviewed by practicing dementia specialists at SCARF Chennai before publication.
          </p>
        </div>
      </section>

      {/* Doctors */}
      <section className="w-full py-[80px]" style={{ background: '#ffffff' }}>
        <div className="container-layout">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {DOCTORS.map((doc) => (
              <div key={doc.name} className="card" style={{ padding: '36px 30px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <div className="w-10 h-10 rounded-full flex items-center justify-center shrink-0" style={{ background: '#dbdbd2' }}>
                  <span style={{ fontSize: '16px', color: '#6f6f6e', fontWeight: 500 }}>
                    {doc.name.split(' ')[1]?.[0] ?? 'D'}
                  </span>
                </div>
                <div>
                  <h3 style={{ fontSize: '20px', fontWeight: 500, lineHeight: 1.25, color: '#292929', marginBottom: '6px' }}>
                    {doc.name}
                  </h3>
                  <div className="flex items-center gap-1.5 mb-4">
                    <span className="status-dot" style={{ width: '6px', height: '6px' }}></span>
                    <span style={{ fontSize: '13px', color: '#8f8f8e' }}>{doc.org}</span>
                  </div>
                  <p style={{ fontSize: '16px', color: '#6f6f6e', lineHeight: 1.5 }}>{doc.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="w-full py-[80px]" style={{ background: '#edede8' }}>
        <div className="container-layout flex flex-col sm:flex-row items-start sm:items-center justify-between gap-8">
          <div>
            <h2 style={{ fontSize: '32px', fontWeight: 400, letterSpacing: '-0.32px', color: '#292929', marginBottom: '8px' }}>
              Read the Guides
            </h2>
            <p style={{ fontSize: '16px', color: '#6f6f6e' }}>
              Foundational articles reviewed by the SCARF Chennai clinical team.
            </p>
          </div>
          <Link href="/understand" className="btn btn-primary shrink-0" style={{ fontSize: '16px' }}>
            Start reading <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  )
}
