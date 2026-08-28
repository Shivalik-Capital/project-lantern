'use client'

import { useState } from 'react'
import { DataSourceBadge } from './DataSourceBadge'

export function IndiaPrevalenceMap() {
  return (
    <div className="card p-6 h-full flex flex-col">
      <h3 className="text-xl font-bold mb-1">State-level Prevalence Estimates</h3>
      <p className="text-sm text-text-muted mb-6">Estimated dementia prevalence among adults 60+ (LASI-DAD, 2023). Note: Map implementation is under active development.</p>
      
      <div className="flex-1 w-full min-h-[300px] flex items-center justify-center bg-background rounded-lg border border-border-light relative overflow-hidden group">
        <div className="absolute inset-0 bg-[url('https://upload.wikimedia.org/wikipedia/commons/e/ec/India_Blank_Map.svg')] bg-contain bg-center bg-no-repeat opacity-20"></div>
        <div className="text-center z-10 p-4 bg-surface/80 backdrop-blur-sm rounded-lg border border-border shadow-sm">
          <p className="text-sm font-600 text-text">Interactive Map Rendering Offline</p>
          <p className="text-xs text-text-muted mt-1">Awaiting TopoJSON geometry data</p>
        </div>
      </div>

      <div className="mt-6">
        <DataSourceBadge sourceName="LASI-DAD (Harmonized Diagnostic Assessment of Dementia for LASI)" dateFetched="August 2026" />
      </div>
    </div>
  )
}
