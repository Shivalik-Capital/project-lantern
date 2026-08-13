import type { Metadata } from 'next'
import Link from 'next/link'
import { MapPin, Phone, Globe, Building2, ExternalLink } from 'lucide-react'
import { HelplineBanner } from '@/components/layout/HelplineBanner'
import directoryData from '@/content/resources/directory.json'

export const metadata: Metadata = {
  title: 'Find Help in India',
  description:
    "ARDSI chapters, dementia helplines and memory clinics across India. Find support near you for Alzheimer's and dementia care.",
}

const { helplines, organizations, clinics } = directoryData as {
  helplines: {
    id: string; name: string; description: string; phone: string;
    website?: string; type: string; national: boolean;
    languages?: string[]; hours?: string; cost?: string
  }[]
  organizations: {
    id: string; name: string; fullName: string; description: string;
    city: string; state: string; phone?: string; email?: string;
    website?: string; type: string; national: boolean
  }[]
  clinics: {
    id: string; name: string; fullName: string; description: string;
    city: string; state: string; address?: string; phone?: string;
    website?: string; type: string; national: boolean
  }[]
}

export default function FindHelpPage() {
  return (
    <>
      {/* Hero */}
      <section className="page-hero" aria-labelledby="find-help-heading">
        <div className="container-layout">
          <div className="flex items-center gap-2 mb-3">
            <MapPin className="w-5 h-5 text-primary" aria-hidden="true" />
            <span className="text-primary font-sans font-600 text-sm">India-specific resources</span>
          </div>
          <h1 id="find-help-heading" className="font-sans font-800 text-text mb-4">
            Find Help in India
          </h1>
          <p className="text-lg text-text-muted leading-relaxed max-w-xl">
            You don't have to navigate this alone. Here are the organisations, helplines and
            memory clinics across India that can provide support, information and connection.
          </p>
        </div>
      </section>

      <div className="container-layout py-10 md:py-14">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-14">
          <main className="lg:col-span-2 space-y-12">

            {/* Helplines */}
            <section aria-labelledby="helplines-heading" id="helplines">
              <h2 id="helplines-heading" className="font-sans font-700 text-text text-2xl mb-6">
                Helplines
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:grid-cols-1 xl:grid-cols-2">
                {helplines.map((h) => (
                  <div key={h.id} className="card p-5">
                    <div className="flex items-start justify-between gap-2 mb-2">
                      <h3 className="font-sans font-700 text-text text-base">{h.name}</h3>
                      {h.national && (
                        <span className="tag flex-shrink-0">National</span>
                      )}
                    </div>
                    <p className="text-sm text-text-muted leading-relaxed mb-3">{h.description}</p>
                    <div className="space-y-1.5 text-sm">
                      <a
                        href={`tel:${h.phone.replace(/\s/g, '')}`}
                        className="flex items-center gap-2 text-emergency font-sans font-700 hover:text-red-900 transition-colors"
                        aria-label={`Call ${h.name}: ${h.phone}`}
                      >
                        <Phone className="w-4 h-4" aria-hidden="true" />
                        {h.phone}
                      </a>
                      {h.hours && (
                        <p className="text-text-subtle text-xs">{h.hours}</p>
                      )}
                      {h.cost && (
                        <p className="text-text-subtle text-xs">{h.cost}</p>
                      )}
                      {h.languages && (
                        <p className="text-text-subtle text-xs">Languages: {h.languages.join(', ')}</p>
                      )}
                      {h.website && (
                        <a
                          href={h.website}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-amber hover:text-amber-dark transition-colors text-xs"
                        >
                          Visit website
                          <ExternalLink className="w-3 h-3" aria-hidden="true" />
                          <span className="sr-only">(opens in new tab)</span>
                        </a>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* ARDSI & Organisations */}
            <section aria-labelledby="organisations-heading">
              <h2 id="organisations-heading" className="font-sans font-700 text-text text-2xl mb-2">
                Dementia organisations
              </h2>
              <p className="text-text-muted text-sm mb-6">
                ARDSI (Alzheimer's and Related Disorders Society of India) has chapters in cities
                across the country providing support groups, caregiver training and resources.
              </p>
              <div className="space-y-4">
                {organizations.map((org) => (
                  <div key={org.id} className="card p-5">
                    <div className="flex items-start justify-between gap-2 flex-wrap mb-1">
                      <h3 className="font-sans font-700 text-text text-base">{org.name}</h3>
                      <div className="flex gap-2">
                        {org.national && <span className="tag">National</span>}
                        <span className="tag">{org.type.toUpperCase()}</span>
                      </div>
                    </div>
                    {!org.national && (
                      <div className="flex items-center gap-1 text-xs text-text-subtle mb-2">
                        <MapPin className="w-3 h-3" aria-hidden="true" />
                        {org.city}, {org.state}
                      </div>
                    )}
                    <p className="text-sm text-text-muted leading-relaxed mb-3">{org.description}</p>
                    <div className="flex flex-wrap gap-4 text-sm">
                      {org.phone && (
                        <a href={`tel:${org.phone.replace(/\s/g, '')}`}
                          className="flex items-center gap-1.5 text-text-muted hover:text-primary transition-colors">
                          <Phone className="w-3.5 h-3.5" aria-hidden="true" />
                          {org.phone}
                        </a>
                      )}
                      {org.website && (
                        <a href={org.website} target="_blank" rel="noopener noreferrer"
                          className="flex items-center gap-1.5 text-amber hover:text-amber-dark transition-colors">
                          <Globe className="w-3.5 h-3.5" aria-hidden="true" />
                          Website
                          <ExternalLink className="w-3 h-3" aria-hidden="true" />
                          <span className="sr-only">(opens in new tab)</span>
                        </a>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Memory Clinics */}
            <section aria-labelledby="clinics-heading">
              <h2 id="clinics-heading" className="font-sans font-700 text-text text-2xl mb-2">
                Memory clinics & hospitals
              </h2>
              <p className="text-sm text-text-muted mb-6">
                These institutions have specialist departments for dementia assessment and treatment.
                Access is typically through outpatient referral.
              </p>
              <div className="space-y-4">
                {clinics.map((clinic) => (
                  <div key={clinic.id} className="card p-5">
                    <div className="flex items-start gap-3">
                      <div className="w-9 h-9 rounded-xl bg-primary-light flex items-center justify-center flex-shrink-0">
                        <Building2 className="w-4 h-4 text-primary" aria-hidden="true" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="font-sans font-700 text-text text-base">{clinic.name}</h3>
                        <p className="text-xs text-text-subtle mb-1">{clinic.fullName}</p>
                        <div className="flex items-center gap-1 text-xs text-text-subtle mb-2">
                          <MapPin className="w-3 h-3" aria-hidden="true" />
                          {clinic.address || `${clinic.city}, ${clinic.state}`}
                        </div>
                        <p className="text-sm text-text-muted leading-relaxed mb-3">{clinic.description}</p>
                        <div className="flex flex-wrap gap-4 text-sm">
                          {clinic.phone && (
                            <a href={`tel:${clinic.phone.replace(/\s/g, '')}`}
                              className="flex items-center gap-1.5 text-text-muted hover:text-primary transition-colors text-sm">
                              <Phone className="w-3.5 h-3.5" aria-hidden="true" />
                              {clinic.phone}
                            </a>
                          )}
                          {clinic.website && (
                            <a href={clinic.website} target="_blank" rel="noopener noreferrer"
                              className="flex items-center gap-1.5 text-amber hover:text-amber-dark transition-colors text-sm">
                              <Globe className="w-3.5 h-3.5" aria-hidden="true" />
                              Website
                              <ExternalLink className="w-3 h-3" aria-hidden="true" />
                              <span className="sr-only">(opens in new tab)</span>
                            </a>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Missing something */}
            <div className="p-6 rounded-xl border-2 border-dashed border-border text-center">
              <p className="font-sans font-600 text-text mb-1">Know of a resource we missed?</p>
              <p className="text-sm text-text-muted">
                If you know of an ARDSI chapter, memory clinic or helpline not listed here,
                please <Link href="/about" className="text-amber hover:text-amber-dark transition-colors">get in touch</Link>.
                We verify all entries before adding them.
              </p>
            </div>
          </main>

          <aside className="space-y-6" aria-label="Quick resources">
            <HelplineBanner />
            <div className="card p-5">
              <h2 className="font-sans font-700 text-text mb-3 text-sm">Quick links</h2>
              <ul className="space-y-2 text-sm" role="list">
                <li><a href="#helplines" className="text-amber hover:text-amber-dark transition-colors">↓ Helplines</a></li>
                <li><Link href="/understand" className="text-amber hover:text-amber-dark transition-colors">Understand Alzheimer's</Link></li>
                <li><Link href="/caregiving/after-diagnosis" className="text-amber hover:text-amber-dark transition-colors">After a diagnosis</Link></li>
              </ul>
            </div>
          </aside>
        </div>
      </div>
    </>
  )
}
