'use client'

import { IndiaMap as ReactIndiaMap } from 'india-map-react'

export function IndiaMap() {
  return (
    <ReactIndiaMap
      stateData={{
        "Jammu & Kashmir": { value: 12.94 },
        "Odisha": { value: 10.74 },
        "Andhra Pradesh": { value: 10.37 },
        "Kerala": { value: 9.2 },
        "Maharashtra": { value: 7.4 },
        "Delhi": { value: 6.5 },
        "Chandigarh": { value: 1.82 },
        "Uttar Pradesh": { value: 8.5 },
        "Bihar": { value: 7.9 },
        "West Bengal": { value: 8.2 },
        "Madhya Pradesh": { value: 7.1 },
        "Tamil Nadu": { value: 8.9 },
        "Rajasthan": { value: 6.8 },
        "Karnataka": { value: 7.6 },
        "Gujarat": { value: 6.4 },
        "Haryana": { value: 5.9 },
        "Telangana": { value: 7.8 },
        "Punjab": { value: 6.2 },
        "Assam": { value: 5.4 },
        "Jharkhand": { value: 6.7 },
        "Chhattisgarh": { value: 6.1 },
        "Uttarakhand": { value: 7.3 },
        "Himachal Pradesh": { value: 8.1 },
        "Tripura": { value: 5.2 },
        "Meghalaya": { value: 4.8 },
        "Manipur": { value: 4.9 },
        "Nagaland": { value: 4.5 },
        "Goa": { value: 9.5 },
        "Arunachal Pradesh": { value: 4.2 },
        "Mizoram": { value: 4.4 },
        "Sikkim": { value: 5.1 },
        "Puducherry": { value: 8.4 },
        "Ladakh": { value: 10.1 },
        "Andaman & Nicobar": { value: 4.1 },
        "Lakshadweep": { value: 3.8 },
        "Dadra and Nagar Haveli and Daman and Diu": { value: 4.0 },
      }}
      enableChoropleth={true}
      choroplethLow="#e8f0ed"
      choroplethHigh="#3a6358"
      showTooltip={true}
      strokeColor="#ffffff"
      strokeWidth={0.8}
      tooltipContent={(name: string, data: any) => (
        <div className="bg-surface border border-border shadow-lg px-4 py-2 rounded-lg text-sm">
          <span className="font-700 text-text block mb-1">{name}</span>
          <span className="text-text-muted">
            Prevalence: <strong className="text-primary">{data?.value ? `${data.value}%` : 'No data'}</strong>
          </span>
        </div>
      )}
    />
  )
}
