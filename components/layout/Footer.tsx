import Link from 'next/link'
import { Phone, ExternalLink, Flame } from 'lucide-react'

const HELPLINES = [
  { name: 'Tele-MANAS (Govt. of India)', number: '14416', href: 'tel:14416' },
  { name: 'Dementia India Alliance', number: '8585 990 990', href: 'tel:8585990990' },
  { name: 'iCall (TISS)', number: '9152987821', href: 'tel:9152987821' },
]

const FOOTER_LINKS = [
  {
    heading: 'Learn',
    links: [
      { label: "Understand Alzheimer's", href: '/understand' },
      { label: 'Caregiving Guide', href: '/caregiving' },
      { label: 'Glossary', href: '/glossary' },
    ],
  },
  {
    heading: 'Support',
    links: [
      { label: 'Find Help in India', href: '/find-help' },
      { label: 'Helplines', href: '/find-help#helplines' },
    ],
  },
  {
    heading: 'About',
    links: [
      { label: 'Our Story', href: '/about' },
      { label: 'Contributing', href: 'https://github.com', external: true },
    ],
  },
]

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-primary-lighter border-t border-border" aria-label="Site footer">
      {/* Helplines section */}
      <div className="bg-emergency-bg border-b border-red-100">
        <div className="container-layout py-5">
          <div className="flex flex-wrap items-start gap-4">
            <div className="flex items-center gap-2 text-emergency">
              <Phone className="w-4 h-4 flex-shrink-0" aria-hidden="true" />
              <span className="font-sans font-700 text-sm">Need help now?</span>
            </div>
            <div className="flex flex-wrap gap-4">
              {HELPLINES.map((h) => (
                <a
                  key={h.href}
                  href={h.href}
                  className="inline-flex items-center gap-1.5 text-sm font-sans font-600 text-emergency hover:text-red-900 transition-colors min-h-11"
                  aria-label={`Call ${h.name}: ${h.number}`}
                >
                  <span className="text-text-muted font-400 text-xs">{h.name}:</span>
                  {h.number}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Main footer */}
      <div className="container-layout py-10 md:py-14">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-4">
          {/* Brand column */}
          <div className="md:col-span-1">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-primary font-sans font-800 text-lg mb-3"
              aria-label="Project Lantern home"
            >
              <Flame className="w-5 h-5 text-amber" aria-hidden="true" strokeWidth={1.8} />
              Project Lantern
            </Link>
            <p className="text-sm text-text-muted leading-relaxed max-w-xs">
              Free educational information about Alzheimer's disease and dementia care for Indian families.
            </p>
          </div>

          {/* Navigation columns */}
          {FOOTER_LINKS.map((section) => (
            <div key={section.heading}>
              <h3 className="text-xs font-sans font-700 text-text uppercase tracking-widest mb-4">
                {section.heading}
              </h3>
              <ul className="space-y-2.5" role="list">
                {section.links.map((link) => (
                  <li key={link.href}>
                    {'external' in link && link.external ? (
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-sm text-text-muted hover:text-amber transition-colors"
                      >
                        {link.label}
                        <ExternalLink className="w-3 h-3" aria-hidden="true" />
                        <span className="sr-only">(opens in new tab)</span>
                      </a>
                    ) : (
                      <Link
                        href={link.href}
                        className="text-sm text-text-muted hover:text-amber transition-colors"
                      >
                        {link.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Disclaimer + copyright */}
        <div className="mt-10 pt-8 border-t border-border">
          <p className="text-xs text-text-subtle leading-relaxed max-w-2xl mb-4">
            <strong className="text-text-muted">Disclaimer:</strong> This platform provides educational information only.
            It does not constitute medical advice, diagnosis or treatment.
            Always consult a qualified healthcare professional for medical concerns.
            All articles on this site are marked as draft and have not yet been medically reviewed.
          </p>
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 text-xs text-text-subtle">
            <p>© {currentYear} Project Lantern. Code: MIT licence. Content: CC BY 4.0.</p>
            <p>Not affiliated with ARDSI, Dementia India Alliance or any healthcare institution.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
