'use client'

import { useState } from 'react'
import { submitDailyLog } from './actions'
import { Loader2, CheckCircle2 } from 'lucide-react'

export function DailyLogForm() {
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState<string | null>(null)

  // Default to today in local timezone formatted as YYYY-MM-DD
  const today = new Date().toLocaleDateString('en-CA')

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setLoading(true)
    setError(null)
    setSuccess(false)

    const form = e.currentTarget
    
    try {
      const formData = new FormData(form)
      await submitDailyLog(formData)
      setSuccess(true)
      // Reset form text area but keep date
      form.reset()
      // Manually set date back to today
      const dateInput = form.elements.namedItem('log_date') as HTMLInputElement
      if (dateInput) dateInput.value = today
    } catch (err: any) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {error && (
        <div className="p-3 text-sm text-red-800 bg-red-100 rounded-md border border-red-200">
          {error}
        </div>
      )}
      
      {success && (
        <div className="p-3 text-sm text-green-800 bg-green-100 rounded-md border border-green-200 flex items-center gap-2">
          <CheckCircle2 className="w-5 h-5" />
          Log saved successfully.
        </div>
      )}

      <div>
        <label htmlFor="log_date" className="block text-sm font-sans font-600 text-text">
          Date
        </label>
        <input
          type="date"
          id="log_date"
          name="log_date"
          defaultValue={today}
          required
          className="mt-1 block w-full px-3 py-2 border border-border rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="sleep_quality" className="block text-sm font-sans font-600 text-text">
            Sleep Quality (Last Night)
          </label>
          <select
            id="sleep_quality"
            name="sleep_quality"
            required
            className="mt-1 block w-full px-3 py-2 border border-border rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
          >
            <option value="">Select...</option>
            <option value="good">Good (Slept through / minor waking)</option>
            <option value="fair">Fair (Woke up multiple times)</option>
            <option value="poor">Poor (Awake most of the night)</option>
          </select>
        </div>

        <div>
          <label htmlFor="agitation_level" className="block text-sm font-sans font-600 text-text">
            Agitation / Anxiety Level
          </label>
          <select
            id="agitation_level"
            name="agitation_level"
            required
            className="mt-1 block w-full px-3 py-2 border border-border rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
          >
            <option value="">Select...</option>
            <option value="none">None (Calm, relaxed)</option>
            <option value="mild">Mild (Pacing, repeating questions)</option>
            <option value="moderate">Moderate (Distressed, resisting care)</option>
            <option value="severe">Severe (Aggressive, entirely inconsolable)</option>
          </select>
        </div>

        <div>
          <label htmlFor="wandering_incidents" className="block text-sm font-sans font-600 text-text">
            Wandering Incidents
          </label>
          <input
            type="number"
            id="wandering_incidents"
            name="wandering_incidents"
            min="0"
            defaultValue="0"
            className="mt-1 block w-full px-3 py-2 border border-border rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
          />
        </div>

        <div>
          <label htmlFor="fall_incidents" className="block text-sm font-sans font-600 text-text">
            Fall Incidents
          </label>
          <input
            type="number"
            id="fall_incidents"
            name="fall_incidents"
            min="0"
            defaultValue="0"
            className="mt-1 block w-full px-3 py-2 border border-border rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
          />
        </div>

        <div>
          <label htmlFor="appetite" className="block text-sm font-sans font-600 text-text">
            Appetite
          </label>
          <select
            id="appetite"
            name="appetite"
            required
            className="mt-1 block w-full px-3 py-2 border border-border rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
          >
            <option value="">Select...</option>
            <option value="good">Good (Ate full meals)</option>
            <option value="fair">Fair (Ate parts of meals)</option>
            <option value="poor">Poor (Refused most food)</option>
          </select>
        </div>

        <div>
          <label htmlFor="memory_status" className="block text-sm font-sans font-600 text-text">
            Memory / Cognition
          </label>
          <select
            id="memory_status"
            name="memory_status"
            required
            className="mt-1 block w-full px-3 py-2 border border-border rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
          >
            <option value="">Select...</option>
            <option value="typical">Typical (Usual baseline)</option>
            <option value="better">Better (More lucid/clear than usual)</option>
            <option value="worse">Worse (More confused/forgetful than usual)</option>
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="notes" className="block text-sm font-sans font-600 text-text">
          Daily Notes (Optional)
        </label>
        <textarea
          id="notes"
          name="notes"
          rows={3}
          placeholder="Any triggers you noticed? E.g., 'became agitated when the doorbell rang'"
          className="mt-1 block w-full px-3 py-2 border border-border rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
        />
      </div>

      <button
        type="submit"
        disabled={loading}
        className="btn btn-primary w-full flex justify-center"
      >
        {loading ? <Loader2 className="w-5 h-5 animate-spin" /> : 'Save Daily Log'}
      </button>
    </form>
  )
}
