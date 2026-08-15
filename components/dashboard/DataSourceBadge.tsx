import { Info } from 'lucide-react'

interface DataSourceBadgeProps {
  sourceName: string
  dateFetched?: string
}

export function DataSourceBadge({ sourceName, dateFetched }: DataSourceBadgeProps) {
  return (
    <div className="flex items-center gap-1.5 text-xs text-text-muted mt-4 p-2 bg-background border border-border-light rounded-md">
      <Info className="w-3.5 h-3.5 text-primary" />
      <span>
        Data source: <strong>{sourceName}</strong> {dateFetched && `(Retrieved: ${dateFetched})`}
      </span>
    </div>
  )
}
