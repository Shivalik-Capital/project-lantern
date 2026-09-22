'use client'

import { useState, useEffect } from 'react'
import Dexie, { type Table } from 'dexie'
import { format, subDays, isAfter } from 'date-fns'
import jsPDF from 'jspdf'
import 'jspdf-autotable'
import { Clock, Plus, Download, Shield, Activity, CalendarDays, CheckCircle2 } from 'lucide-react'

// Define the database schema
interface LogEntry {
  id?: number
  timestamp: string // ISO string
  tags: string[]
  severity: number | null
  bp_upper: number | null
  bp_lower: number | null
  pulse: number | null
  notes: string
}

class TrackerDB extends Dexie {
  logs!: Table<LogEntry, number>

  constructor() {
    super('ProjectLanternTrackerDB')
    this.version(2).stores({
      logs: '++id, timestamp'
    })
  }
}

const db = new TrackerDB()

const SYMPTOM_TAGS = [
  'Confusion / disorientation',
  'Memory lapse',
  'Mood change / agitation',
  'Sleep disruption',
  'Medication taken',
  'Appetite / eating issue',
  'Wandering',
  'Fall / physical incident',
  'Other'
]

export function TrackerApp() {
  const [logs, setLogs] = useState<LogEntry[]>([])
  const [isClient, setIsClient] = useState(false)
  
  // Form State
  const [timestamp, setTimestamp] = useState('')
  const [selectedTags, setSelectedTags] = useState<string[]>([])
  const [severity, setSeverity] = useState<number | null>(null)
  const [bpUpper, setBpUpper] = useState<string>('')
  const [bpLower, setBpLower] = useState<string>('')
  const [pulse, setPulse] = useState<string>('')
  const [notes, setNotes] = useState('')
  const [showSuccess, setShowSuccess] = useState(false)
  const [view, setView] = useState<'log' | 'history'>('log')

  useEffect(() => {
    setIsClient(true)
    setTimestamp(new Date().toISOString().slice(0, 16)) // YYYY-MM-DDTHH:mm
    loadLogs()
  }, [])

  const loadLogs = async () => {
    const allLogs = await db.logs.orderBy('timestamp').reverse().toArray()
    setLogs(allLogs)
  }

  const toggleTag = (tag: string) => {
    setSelectedTags(prev => 
      prev.includes(tag) ? prev.filter(t => t !== tag) : [...prev, tag]
    )
  }

  const handleSave = async () => {
    if (selectedTags.length === 0 && !notes.trim() && !bpUpper) return // Don't save completely empty
    
    await db.logs.add({
      timestamp: new Date(timestamp).toISOString(),
      tags: selectedTags,
      severity,
      bp_upper: bpUpper ? parseInt(bpUpper) : null,
      bp_lower: bpLower ? parseInt(bpLower) : null,
      pulse: pulse ? parseInt(pulse) : null,
      notes: notes.trim()
    })
    
    // Reset form
    setSelectedTags([])
    setSeverity(null)
    setBpUpper('')
    setBpLower('')
    setPulse('')
    setNotes('')
    setTimestamp(new Date().toISOString().slice(0, 16))
    
    setShowSuccess(true)
    setTimeout(() => setShowSuccess(false), 3000)
    
    loadLogs()
    setView('history')
  }

  const exportPDF = () => {
    // Default export: Last 14 days
    const twoWeeksAgo = subDays(new Date(), 14)
    const recentLogs = logs.filter(log => isAfter(new Date(log.timestamp), twoWeeksAgo))
    
    const doc = new jsPDF()
    
    // Header
    doc.setFontSize(20)
    doc.setTextColor(74, 124, 111) // Primary Teal
    doc.text('Caregiver Symptom Log', 14, 22)
    
    doc.setFontSize(10)
    doc.setTextColor(100, 100, 100)
    doc.text(`Generated on: ${format(new Date(), 'PPp')}`, 14, 30)
    doc.text(`Covering: Past 14 Days (${format(twoWeeksAgo, 'MMM d, yyyy')} - ${format(new Date(), 'MMM d, yyyy')})`, 14, 35)

    // Table
    const tableData = recentLogs.map(log => [
      format(new Date(log.timestamp), 'MMM d, h:mm a'),
      log.tags.join(', '),
      log.severity ? `${log.severity}/5` : '-',
      log.bp_upper ? `${log.bp_upper}/${log.bp_lower} (${log.pulse} bpm)` : '-',
      log.notes
    ])

    // @ts-ignore - jspdf-autotable extends jsPDF but types don't always pick it up
    doc.autoTable({
      startY: 45,
      head: [['Date & Time', 'Symptoms / Events', 'Severity', 'Vitals (BP/Pulse)', 'Notes']],
      body: tableData,
      theme: 'grid',
      headStyles: { fillColor: [74, 124, 111] },
      styles: { fontSize: 9, cellPadding: 4 },
      columnStyles: {
        0: { cellWidth: 32 },
        1: { cellWidth: 45 },
        2: { cellWidth: 16 },
        3: { cellWidth: 28 },
        4: { cellWidth: 'auto' }
      }
    })
    
    doc.save('Caregiver_Symptom_Log.pdf')
  }

  if (!isClient) return null

  return (
    <div className="bg-surface rounded-[3px] shadow-none border border-border-light overflow-hidden">
      
      {/* Header Info */}
      <div className="bg-primary-lighter/30 p-6 md:p-8 border-b border-border-light">
        <h1 className="text-3xl font-serif text-text mb-3">Caregiver Symptom Log</h1>
        <p className="text-text-muted font-sans text-base md:text-lg mb-4">
          Quickly log symptoms or incidents so you don't have to rely on memory during doctor appointments. 
        </p>
        <div className="flex items-start gap-2 bg-white/60 p-3 rounded-[3px] text-sm text-text-muted">
          <Shield className="w-5 h-5 text-primary shrink-0 mt-0.5" />
          <p>
            <strong>Private & Secure:</strong> No account required. This data is saved entirely on your current device and is never sent to a server. 
            Remember to export it to PDF before clearing your browser data.
          </p>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex border-b border-border-light">
        <button 
          onClick={() => setView('log')}
          className={`flex-1 py-4 font-sans font-600 text-lg transition-colors ${view === 'log' ? 'text-primary border-b-2 border-primary bg-primary/5' : 'text-text-muted hover:bg-surface-light'}`}
        >
          New Entry
        </button>
        <button 
          onClick={() => setView('history')}
          className={`flex-1 py-4 font-sans font-600 text-lg transition-colors flex items-center justify-center gap-2 ${view === 'history' ? 'text-primary border-b-2 border-primary bg-primary/5' : 'text-text-muted hover:bg-surface-light'}`}
        >
          Log History <span className="bg-border-light text-text-muted text-xs py-0.5 px-2 rounded-[3px]">{logs.length}</span>
        </button>
      </div>

      {/* Main Content */}
      <div className="p-6 md:p-8">
        
        {view === 'log' && (
          <div className="space-y-8 max-w-2xl mx-auto">
            
            {showSuccess && (
              <div className="bg-green-50 text-green-800 p-4 rounded-[3px] flex items-center gap-3 animate-in fade-in slide-in-from-top-2">
                <CheckCircle2 className="w-5 h-5" />
                <span className="font-sans font-600">Entry saved successfully.</span>
              </div>
            )}

            {/* Time */}
            <div>
              <label className="block font-serif text-xl text-text mb-3">When did this happen?</label>
              <input 
                type="datetime-local" 
                value={timestamp}
                onChange={(e) => setTimestamp(e.target.value)}
                className="w-full md:w-auto p-3 bg-background border border-border-light rounded-[3px] font-sans text-text focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
              />
            </div>

            {/* Vitals */}
            <div>
              <label className="block font-serif text-xl text-text mb-3">Vitals <span className="text-text-muted text-base font-sans font-normal">(Optional)</span></label>
              <div className="grid grid-cols-3 gap-3 md:gap-4">
                <div>
                  <label className="block text-sm text-text-muted font-sans mb-1.5">Upper (Systolic)</label>
                  <input 
                    type="number" 
                    value={bpUpper} 
                    onChange={e => setBpUpper(e.target.value)} 
                    placeholder="120" 
                    className="w-full p-3 bg-background border border-border-light rounded-[3px] font-sans text-text focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm text-text-muted font-sans mb-1.5">Lower (Diastolic)</label>
                  <input 
                    type="number" 
                    value={bpLower} 
                    onChange={e => setBpLower(e.target.value)} 
                    placeholder="80" 
                    className="w-full p-3 bg-background border border-border-light rounded-[3px] font-sans text-text focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm text-text-muted font-sans mb-1.5">Pulse Rate</label>
                  <input 
                    type="number" 
                    value={pulse} 
                    onChange={e => setPulse(e.target.value)} 
                    placeholder="72" 
                    className="w-full p-3 bg-background border border-border-light rounded-[3px] font-sans text-text focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
                  />
                </div>
              </div>
            </div>

            {/* Tags */}
            <div>
              <label className="block font-serif text-xl text-text mb-3">Symptoms / Events <span className="text-text-muted text-base font-sans font-normal">(Select all that apply)</span></label>
              <div className="flex flex-wrap gap-3">
                {SYMPTOM_TAGS.map(tag => {
                  const isSelected = selectedTags.includes(tag)
                  return (
                    <button
                      key={tag}
                      onClick={() => toggleTag(tag)}
                      className={`px-4 py-2.5 rounded-[3px] font-sans font-500 text-sm md:text-base transition-all duration-200 border ${
                        isSelected 
                          ? 'bg-primary text-white border-primary shadow-none transform scale-[1.02]' 
                          : 'bg-background text-text-muted border-border-light hover:border-primary/40 hover:bg-primary-lighter/30'
                      }`}
                    >
                      {tag}
                    </button>
                  )
                })}
              </div>
            </div>

            {/* Severity */}
            <div>
              <label className="block font-serif text-xl text-text mb-3">Severity / Concern Level <span className="text-text-muted text-base font-sans font-normal">(Optional)</span></label>
              <div className="flex gap-2">
                {[1, 2, 3, 4, 5].map(num => (
                  <button
                    key={num}
                    onClick={() => setSeverity(severity === num ? null : num)}
                    className={`w-12 h-12 rounded-[3px] font-sans font-600 text-lg transition-all border ${
                      severity === num 
                        ? 'bg-amber text-white border-amber shadow-none transform scale-[1.05]' 
                        : 'bg-background text-text-muted border-border-light hover:border-amber/40 hover:bg-amber-light/30'
                    }`}
                  >
                    {num}
                  </button>
                ))}
              </div>
              <div className="flex justify-between max-w-[280px] mt-2 text-xs text-text-muted font-sans uppercase tracking-wider">
                <span>Mild</span>
                <span>Severe</span>
              </div>
            </div>

            {/* Notes */}
            <div>
              <label className="block font-serif text-xl text-text mb-3">Additional Notes <span className="text-text-muted text-base font-sans font-normal">(Optional)</span></label>
              <textarea 
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                placeholder="Briefly describe what happened..."
                rows={3}
                className="w-full p-4 bg-background border border-border-light rounded-[3px] font-sans text-text focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all resize-none"
              />
            </div>

            <button 
              onClick={handleSave}
              disabled={selectedTags.length === 0 && !notes.trim() && !bpUpper}
              className="w-full btn btn-primary py-4 text-lg shadow-none hover:-translate-y-0.5 transition-transform disabled:opacity-50 disabled:hover:translate-y-0"
            >
              Save Entry
            </button>
          </div>
        )}

        {view === 'history' && (
          <div>
            {logs.length === 0 ? (
              <div className="text-center py-16">
                <div className="w-16 h-16 bg-primary-lighter rounded-[3px] flex items-center justify-center mx-auto mb-4">
                  <Activity className="w-8 h-8 text-primary/50" />
                </div>
                <h3 className="font-serif text-2xl text-text mb-2">No entries yet</h3>
                <p className="text-text-muted font-sans mb-6 max-w-sm mx-auto">
                  Your log is empty. Start tracking symptoms and vitals to build a history you can share with your doctor.
                </p>
                <button onClick={() => setView('log')} className="btn btn-primary">
                  Make your first entry
                </button>
              </div>
            ) : (
              <div>
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4 bg-amber-light/20 p-6 rounded-[3px] border border-amber/10">
                  <div>
                    <h3 className="font-serif text-xl text-text mb-1">Doctor Visit Summary</h3>
                    <p className="text-text-muted font-sans text-sm">Generate a clean, printable PDF of the last 14 days.</p>
                  </div>
                  <button 
                    onClick={exportPDF}
                    className="btn btn-amber shadow-none w-full sm:w-auto hover:-translate-y-0.5 transition-transform whitespace-nowrap"
                  >
                    <Download className="w-4 h-4 mr-2" />
                    Export Log for Doctor Visit
                  </button>
                </div>

                <div className="space-y-4">
                  {logs.map(log => (
                    <div key={log.id} className="bg-background border border-border-light p-5 rounded-[3px] flex flex-col md:flex-row md:items-start gap-4 hover:border-primary/30 transition-colors">
                      <div className="md:w-32 shrink-0">
                        <p className="font-sans font-700 text-text">{format(new Date(log.timestamp), 'MMM d')}</p>
                        <p className="font-sans text-sm text-text-muted">{format(new Date(log.timestamp), 'h:mm a')}</p>
                      </div>
                      <div className="flex-1">
                        <div className="flex flex-wrap gap-2 mb-3">
                          {log.tags.map(tag => (
                            <span key={tag} className="bg-primary-lighter/50 text-primary-dark border border-primary/10 px-2.5 py-1 rounded-[3px] text-sm font-sans font-600">
                              {tag}
                            </span>
                          ))}
                          {log.severity && (
                            <span className="bg-amber-light/50 text-amber-dark border border-amber/20 px-2.5 py-1 rounded-[3px] text-sm font-sans font-600">
                              Severity: {log.severity}/5
                            </span>
                          )}
                          {log.bp_upper && (
                            <span className="bg-blue-50 text-blue-800 border border-blue-200 px-2.5 py-1 rounded-[3px] text-sm font-sans font-600 flex items-center gap-1.5">
                              <Activity className="w-3.5 h-3.5" />
                              BP: {log.bp_upper}/{log.bp_lower} • Pulse: {log.pulse}
                            </span>
                          )}
                        </div>
                        {log.notes && (
                          <p className="text-text-muted font-sans text-base">{log.notes}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  )
}
