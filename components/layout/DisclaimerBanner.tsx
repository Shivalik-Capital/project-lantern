import { AlertCircle } from 'lucide-react'

interface DisclaimerBannerProps {
  compact?: boolean
}

export function DisclaimerBanner({ compact = false }: DisclaimerBannerProps) {
  if (compact) {
    return (
      <div className="disclaimer-banner flex items-start gap-2.5" role="note" aria-label="Medical disclaimer">
        <AlertCircle
          className="w-4 h-4 text-primary flex-shrink-0 mt-0.5"
          aria-hidden="true"
          strokeWidth={2}
        />
        <p className="text-xs text-text-muted">
          <strong className="text-text">Educational content only.</strong>{' '}
          This does not constitute medical advice. Always consult a qualified healthcare professional.
        </p>
      </div>
    )
  }

  return (
    <div
      className="disclaimer-banner flex items-start gap-3"
      role="note"
      aria-label="Medical disclaimer"
    >
      <AlertCircle
        className="w-5 h-5 text-primary flex-shrink-0 mt-0.5"
        aria-hidden="true"
        strokeWidth={2}
      />
      <div>
        <p className="text-sm text-text-muted leading-relaxed">
          <strong className="text-text font-600">This article is for educational purposes only.</strong>{' '}
          It does not constitute medical advice, diagnosis or treatment.
          If you have concerns about memory loss or cognitive changes in yourself or a family member,
          please consult a qualified doctor, neurologist or geriatrician.
        </p>
      </div>
    </div>
  )
}
