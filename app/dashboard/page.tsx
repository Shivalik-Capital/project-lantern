import { NationalTrendChart } from '@/components/dashboard/NationalTrendChart'
import { RiskFactorChart } from '@/components/dashboard/RiskFactorChart'
import { IndiaMap } from '@/components/visualizations/IndiaMap'

export const metadata = {
  title: 'Public Health Dashboard',
  description: 'Interactive data visualizations exploring dementia prevalence and healthcare access across India.',
}

export default function DashboardPage() {
  return (
    <div className="container-layout py-12 md:py-16">
      <div className="max-w-3xl mb-12">
        <h1 className="text-4xl font-900 tracking-tight text-text mb-4">
          Public Health Dashboard
        </h1>
        <p className="text-lg text-text-muted leading-relaxed">
          Project Lantern aggregates open data from the LASI study, IHME Global Burden of Disease, and the National Health Mission to visualize the true scale of the dementia challenge in India.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
        <div className="lg:col-span-2">
          <NationalTrendChart />
        </div>
        
        <div className="w-full">
          <div className="card p-6 h-full flex flex-col">
            <h3 className="text-xl font-bold mb-1">State-by-State Prevalence</h3>
            <p className="text-sm text-text-muted mb-6">Estimated dementia prevalence among individuals aged 60+ (LASI 2023).</p>
            <div className="flex-1 bg-primary-lighter rounded-md border border-border-light overflow-hidden p-4 min-h-[400px]">
              <IndiaMap />
            </div>
          </div>
        </div>

        <div className="w-full">
          <RiskFactorChart />
        </div>
      </div>
    </div>
  )
}
