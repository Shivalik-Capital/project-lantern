'use client'

import { useEffect, useState } from 'react'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts'
import { DataSourceBadge } from './DataSourceBadge'

interface RiskData {
  factor: string
  impact: number
}

const COLORS = ['#b91c1c', '#c4793a', '#d97706', '#4a7c6f']

export function RiskFactorChart() {
  const [data, setData] = useState<RiskData[]>([])
  const [loading, setLoading] = useState(true)
  const [source, setSource] = useState('IHME GBD 2023')

  useEffect(() => {
    // Using static data for V1
    setData([
      { factor: 'Hypertension', impact: 42 },
      { factor: 'Diabetes', impact: 35 },
      { factor: 'Obesity', impact: 22 },
      { factor: 'Smoking', impact: 18 },
    ])
    setLoading(false)
  }, [])

  if (loading) return <div className="h-80 flex items-center justify-center text-text-muted">Loading chart data...</div>

  return (
    <div className="card p-6 h-full flex flex-col">
      <h3 className="text-xl font-bold mb-1">Modifiable Risk Factors</h3>
      <p className="text-sm text-text-muted mb-6">Estimated percentage of dementia cases attributable to major risk factors in the Indian population.</p>
      
      <div className="flex-1 w-full min-h-[250px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} layout="vertical" margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" horizontal={false} stroke="#e2e8e5" />
            <XAxis type="number" stroke="#8a93a3" unit="%" />
            <YAxis type="category" dataKey="factor" stroke="#5a6070" width={90} />
            <Tooltip 
              cursor={{fill: 'rgba(74, 124, 111, 0.05)'}}
              contentStyle={{ borderRadius: '10px', border: '1px solid #eef2f0', boxShadow: '0 4px 20px 0 rgb(74 124 111 / 0.14)' }}
              formatter={(value: number) => [`${value}%`, 'Attributable Risk']}
            />
            <Bar dataKey="impact" radius={[0, 4, 4, 0]}>
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div className="mt-auto">
        <DataSourceBadge sourceName={source} dateFetched="August 2026" />
      </div>
    </div>
  )
}
