'use client'

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts'
import { DataSourceBadge } from './DataSourceBadge'

const data = [
  { country: 'Japan', rate: 21.5 },
  { country: 'UK', rate: 16.2 },
  { country: 'USA', rate: 12.8 },
  { country: 'China', rate: 8.5 },
  { country: 'India', rate: 7.4 },
]

export function GlobalContextChart() {
  return (
    <div className="card p-6 h-full flex flex-col">
      <h3 className="text-xl font-bold mb-1">India in Global Context</h3>
      <p className="text-sm text-text-muted mb-6">Age-standardized dementia prevalence rate per 1,000 population compared to selected nations.</p>
      
      <div className="flex-1 w-full min-h-[250px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8e5" />
            <XAxis dataKey="country" stroke="#8a93a3" />
            <YAxis stroke="#5a6070" />
            <Tooltip 
              cursor={{fill: 'rgba(74, 124, 111, 0.05)'}}
              contentStyle={{ borderRadius: '10px', border: '1px solid #eef2f0', boxShadow: '0 4px 20px 0 rgb(74 124 111 / 0.14)' }}
            />
            <Bar dataKey="rate" radius={[4, 4, 0, 0]}>
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.country === 'India' ? '#c4793a' : '#4a7c6f'} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div className="mt-auto">
        <DataSourceBadge sourceName="Our World in Data (IHME GBD 2023)" dateFetched="August 2026" />
      </div>
    </div>
  )
}
