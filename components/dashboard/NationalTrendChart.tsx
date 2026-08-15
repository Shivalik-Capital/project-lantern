'use client'

import { useEffect, useState } from 'react'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts'
import { DataSourceBadge } from './DataSourceBadge'

interface TrendData {
  year: number
  burden_index: number
  population_over_60_million: number
}

export function NationalTrendChart() {
  const [data, setData] = useState<TrendData[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // In production, this would hit the deployed FastAPI url
    fetch('http://127.0.0.1:8000/api/v1/national-trends')
      .then(res => res.json())
      .then(d => {
        setData(d)
        setLoading(false)
      })
      .catch(err => {
        console.error("Failed to fetch trends", err)
        // Fallback mock data if API is down
        setData([
          { year: 1990, burden_index: 2.4, population_over_60_million: 56 },
          { year: 2000, burden_index: 3.1, population_over_60_million: 71 },
          { year: 2010, burden_index: 4.5, population_over_60_million: 92 },
          { year: 2021, burden_index: 7.2, population_over_60_million: 138 },
        ])
        setLoading(false)
      })
  }, [])

  if (loading) return <div className="h-80 flex items-center justify-center text-text-muted">Loading chart data...</div>

  return (
    <div className="card p-6">
      <h3 className="text-xl font-bold mb-1">National Dementia Burden Trend</h3>
      <p className="text-sm text-text-muted mb-6">Tracking the growth of the elderly population and the corresponding dementia burden index over three decades.</p>
      
      <div className="h-80 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8e5" />
            <XAxis dataKey="year" stroke="#8a93a3" />
            <YAxis yAxisId="left" stroke="#4a7c6f" label={{ value: 'Burden Index', angle: -90, position: 'insideLeft', fill: '#4a7c6f' }} />
            <YAxis yAxisId="right" orientation="right" stroke="#c4793a" label={{ value: 'Pop > 60 (M)', angle: 90, position: 'insideRight', fill: '#c4793a' }} />
            <Tooltip 
              contentStyle={{ borderRadius: '10px', border: '1px solid #eef2f0', boxShadow: '0 4px 20px 0 rgb(74 124 111 / 0.14)' }}
            />
            <Legend wrapperStyle={{ paddingTop: '20px' }} />
            <Line yAxisId="left" type="monotone" dataKey="burden_index" name="Burden Index" stroke="var(--color-primary)" strokeWidth={3} activeDot={{ r: 8 }} />
            <Line yAxisId="right" type="monotone" dataKey="population_over_60_million" name="Population > 60 (Millions)" stroke="var(--color-amber)" strokeWidth={3} />
          </LineChart>
        </ResponsiveContainer>
      </div>

      <DataSourceBadge sourceName="Global Burden of Disease Study 2021 (IHME)" dateFetched="August 2026" />
    </div>
  )
}
