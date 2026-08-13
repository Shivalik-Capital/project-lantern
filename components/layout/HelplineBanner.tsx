import { Phone } from 'lucide-react'

interface HelplineBannerProps {
  variant?: 'sidebar' | 'inline' | 'footer'
}

const HELPLINES = [
  { name: 'Tele-MANAS', subtitle: '24/7 · Free · Multilingual', number: '14416', href: 'tel:14416' },
  { name: 'Dementia India Alliance', subtitle: 'Dedicated dementia support', number: '8585 990 990', href: 'tel:8585990990' },
  { name: 'iCall (TISS)', subtitle: 'Mon–Sat, 8am–10pm', number: '9152987821', href: 'tel:9152987821' },
]

export function HelplineBanner({ variant = 'inline' }: HelplineBannerProps) {
  return (
    <aside
      className="helpline-banner"
      aria-label="Emergency support helplines"
    >
      <div className="flex items-center gap-2 mb-3">
        <Phone className="w-4 h-4 text-emergency flex-shrink-0" aria-hidden="true" />
        <h2 className="text-sm font-sans font-700 text-emergency">
          Need immediate support?
        </h2>
      </div>
      <p className="text-xs text-text-muted mb-3 leading-relaxed">
        These helplines are free and available across India.
      </p>
      <ul className="space-y-3" role="list">
        {HELPLINES.map((h) => (
          <li key={h.href}>
            <a
              href={h.href}
              className="group flex items-start justify-between gap-2 p-2.5 rounded-lg bg-white border border-red-100 hover:border-red-200 hover:shadow-sm transition-all"
              aria-label={`Call ${h.name}: ${h.number}. ${h.subtitle}`}
            >
              <div>
                <div className="text-sm font-sans font-600 text-text group-hover:text-emergency transition-colors">
                  {h.name}
                </div>
                <div className="text-xs text-text-subtle">{h.subtitle}</div>
              </div>
              <div className="text-sm font-sans font-700 text-emergency flex-shrink-0">
                {h.number}
              </div>
            </a>
          </li>
        ))}
      </ul>
    </aside>
  )
}
