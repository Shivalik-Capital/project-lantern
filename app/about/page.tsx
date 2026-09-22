import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Our Story',
  description: 'About Project Lantern: why it exists, what it is, what it is not.',
}

const ROADMAP = [
  { v: 'V1', label: 'Educational Foundation', desc: 'Articles, glossary, resource directory', live: true },
  { v: 'V2', label: 'Data & Symptom Tracking', desc: 'Indian dementia statistics and caregiver logs', live: true },
  { v: 'V3', label: 'Hindi Content', desc: 'Multilingual support and assisted search', live: false },
  { v: 'V4', label: 'Community', desc: 'Caregiver stories and peer connection', live: false },
]

export default function AboutPage() {
  return (
    <div style={{ background: '#edede8' }}>

      {/* Hero */}
      <section className="w-full pt-[96px] pb-[80px]">
        <div className="container-layout">
          <p style={{ fontSize: '12px', fontWeight: 600, color: '#8f8f8e', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '16px' }}>
            About us
          </p>
          <h1 style={{ maxWidth: '700px', marginBottom: '24px' }}>
            A clear, localized guide to Alzheimer's in India.
          </h1>
          <p style={{ fontSize: '23px', color: '#6f6f6e', lineHeight: 1.35, letterSpacing: '-0.23px', maxWidth: '560px' }}>
            Project Lantern exists to close the information gap for families navigating a dementia diagnosis.
          </p>
        </div>
      </section>

      {/* The gap */}
      <section className="w-full py-[80px]" style={{ background: '#ffffff' }}>
        <div className="container-layout max-w-[760px]">
          <p style={{ fontSize: '12px', fontWeight: 600, color: '#8f8f8e', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '16px' }}>
            The crisis
          </p>
          <h2 style={{ fontSize: '32px', fontWeight: 400, letterSpacing: '-0.32px', color: '#292929', marginBottom: '32px' }}>
            The information gap
          </h2>
          <div className="prose">
            <p>
              India has an estimated 8.8 million people living with dementia — and the number is projected to double by 2050. Yet the available information is almost entirely written for Western audiences.
            </p>
            <p>
              What does "contact your GP" mean where the first contact might be a physician who has seen two dementia patients in their career? What does "care home" mean in a culture where institutional care carries significant stigma and the expectation is that families care for their own?
            </p>
            <p>
              Project Lantern is an addition to the work done by ARDSI and the Dementia India Alliance — a free, open, plainly written resource built specifically for Indian families.
            </p>
          </div>
        </div>
      </section>

      {/* What it's not */}
      <section className="w-full py-[80px]" style={{ background: '#edede8' }}>
        <div className="container-layout max-w-[760px]">
          <p style={{ fontSize: '12px', fontWeight: 600, color: '#8f8f8e', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '16px' }}>
            Boundaries
          </p>
          <h2 style={{ fontSize: '32px', fontWeight: 400, letterSpacing: '-0.32px', color: '#292929', marginBottom: '36px' }}>
            What this platform is not
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { title: 'Not a diagnostic tool', body: 'We will never build a symptom checker that suggests whether you or a family member has dementia. All diagnostic questions go to a qualified doctor.' },
              { title: 'Not a treatment guide', body: 'We describe treatments in educational terms with citations, and defer all specific decisions to medical professionals.' },
              { title: 'Not commercially influenced', body: 'No sponsored articles, no affiliate links, no advertising. Entirely independent.' },
            ].map((item) => (
              <div key={item.title} className="card" style={{ padding: '28px 24px' }}>
                <h3 style={{ fontSize: '17px', fontWeight: 500, color: '#292929', marginBottom: '10px', letterSpacing: '-0.17px' }}>
                  {item.title}
                </h3>
                <p style={{ fontSize: '15px', color: '#6f6f6e', lineHeight: 1.6 }}>{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Roadmap */}
      <section className="w-full py-[80px]" style={{ background: '#ffffff' }}>
        <div className="container-layout max-w-[760px]">
          <p style={{ fontSize: '12px', fontWeight: 600, color: '#8f8f8e', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '16px' }}>
            Roadmap
          </p>
          <h2 style={{ fontSize: '32px', fontWeight: 400, letterSpacing: '-0.32px', color: '#292929', marginBottom: '36px' }}>
            Where this is going
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
            {ROADMAP.map((item, i) => (
              <div
                key={item.v}
                className="flex items-start gap-6 py-6"
                style={{ borderBottom: i < ROADMAP.length - 1 ? '1px solid rgba(0,0,0,0.08)' : 'none', opacity: item.live ? 1 : 0.45 }}
              >
                <div className="w-10 shrink-0">
                  <span style={{ fontSize: '12px', fontWeight: 600, color: '#8f8f8e' }}>{item.v}</span>
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-1">
                    <h3 style={{ fontSize: '18px', fontWeight: 500, color: '#292929', margin: 0 }}>{item.label}</h3>
                    {item.live && (
                      <span className="flex items-center gap-1.5 px-2 py-0.5 rounded-full" style={{ background: '#dbdbd2', fontSize: '12px', color: '#6f6f6e' }}>
                        <span className="status-dot" style={{ width: '6px', height: '6px' }}></span>
                        Live
                      </span>
                    )}
                  </div>
                  <p style={{ fontSize: '16px', color: '#6f6f6e', margin: 0 }}>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Clinical CTA */}
      <section className="w-full py-[80px]" style={{ background: '#edede8' }}>
        <div className="container-layout flex flex-col sm:flex-row items-start sm:items-center justify-between gap-8">
          <div>
            <h2 style={{ fontSize: '32px', fontWeight: 400, letterSpacing: '-0.32px', color: '#292929', marginBottom: '8px' }}>
              Meet the Clinical Board
            </h2>
            <p style={{ fontSize: '16px', color: '#6f6f6e' }}>
              The SCARF Chennai doctors who reviewed our foundational content.
            </p>
          </div>
          <Link href="/clinical-board" className="btn btn-primary shrink-0">
            View board <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  )
}
