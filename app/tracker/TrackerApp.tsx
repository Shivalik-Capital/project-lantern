'use client'

import { useState, useEffect } from 'react'
import Dexie, { type Table } from 'dexie'
import { format, subDays } from 'date-fns'
import { jsPDF } from 'jspdf'
import autoTable from 'jspdf-autotable'

// ── DB Schema ────────────────────────────────────────────────
interface LogEntry {
  id?: number
  timestamp: string
  memory: number | null
  sleep: number | null
  agitation: number | null
  appetite: number | null
  bp_upper: number | null
  bp_lower: number | null
  pulse: number | null
  notes: string
}

class TrackerDB extends Dexie {
  logs!: Table<LogEntry, number>
  constructor() {
    super('ProjectLanternTrackerDB_v3')
    this.version(1).stores({ logs: '++id, timestamp' })
  }
}
const db = new TrackerDB()

// ── Shared styles ────────────────────────────────────────────
const S = {
  label: {
    fontFamily: 'var(--font-sans)',
    fontWeight: 500,
    fontSize: '14px',
    color: '#6f6f6e',
    letterSpacing: '-0.01em',
  },
  eyebrow: {
    fontFamily: 'var(--font-sans)',
    fontWeight: 600,
    fontSize: '11px',
    letterSpacing: '0.09em',
    textTransform: 'uppercase' as const,
    color: '#8f8f8e',
  },
  input: {
    width: '100%',
    background: '#dbdbd2',
    border: 'none',
    borderRadius: '6px',
    padding: '14px 16px',
    fontFamily: 'var(--font-sans)',
    fontSize: '22px',
    fontWeight: 400,
    letterSpacing: '-0.02em',
    color: '#292929',
    outline: 'none',
  },
  inputLabel: {
    fontFamily: 'var(--font-sans)',
    fontSize: '11px',
    fontWeight: 600,
    textTransform: 'uppercase' as const,
    letterSpacing: '0.07em',
    color: '#8f8f8e',
    marginBottom: '6px',
    display: 'block',
  },
}

// ── Rating Row ────────────────────────────────────────────────
function RatingRow({ label, value, onChange }: { label: string; value: number | null; onChange: (v: number) => void }) {
  return (
    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 py-3.5">
      <span style={S.label}>{label}</span>
      <div style={{ display: 'flex', gap: '6px' }}>
        {[1, 2, 3, 4, 5].map(n => (
          <button
            key={n}
            onClick={() => onChange(value === n ? 0 : n)}
            style={{
              width: '40px',
              height: '40px',
              borderRadius: '6px',
              border: 'none',
              background: value !== null && n <= value ? '#141414' : '#dbdbd2',
              color: value !== null && n <= value ? '#edede8' : '#8f8f8e',
              fontFamily: 'var(--font-sans)',
              fontSize: '15px',
              fontWeight: 500,
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0,
            }}
          >
            {n}
          </button>
        ))}
      </div>
    </div>
  )
}

// ── Main Tracker ──────────────────────────────────────────────
export function TrackerApp() {
  const [logs, setLogs] = useState<LogEntry[]>([])
  const [isClient, setIsClient] = useState(false)
  const [view, setView] = useState<'log' | 'history'>('log')
  const [saved, setSaved] = useState(false)

  // Form state
  const [memory,    setMemory]    = useState<number | null>(null)
  const [sleep,     setSleep]     = useState<number | null>(null)
  const [agitation, setAgitation] = useState<number | null>(null)
  const [appetite,  setAppetite]  = useState<number | null>(null)
  const [bpUpper,   setBpUpper]   = useState('')
  const [bpLower,   setBpLower]   = useState('')
  const [pulse,     setPulse]     = useState('')
  const [notes,     setNotes]     = useState('')
  const [logTime,   setLogTime]   = useState('')

  useEffect(() => {
    setIsClient(true)
    setLogTime(new Date().toISOString().slice(0, 16))
    loadLogs()
  }, [])

  const loadLogs = async () => {
    const all = await db.logs.orderBy('timestamp').reverse().toArray()
    setLogs(all)
  }

  const handleSave = async () => {
    const anyRating = memory || sleep || agitation || appetite
    if (!anyRating && !bpUpper && !notes.trim()) return
    await db.logs.add({
      timestamp: logTime || new Date().toISOString(),
      memory:    memory    || null,
      sleep:     sleep     || null,
      agitation: agitation || null,
      appetite:  appetite  || null,
      bp_upper:  bpUpper   ? parseFloat(bpUpper)  : null,
      bp_lower:  bpLower   ? parseFloat(bpLower)  : null,
      pulse:     pulse      ? parseFloat(pulse)    : null,
      notes,
    })
    // Reset
    setMemory(null); setSleep(null); setAgitation(null); setAppetite(null)
    setBpUpper(''); setBpLower(''); setPulse(''); setNotes('')
    setSaved(true)
    setTimeout(() => setSaved(false), 2400)
    loadLogs()
  }

  const exportPDF = async () => {
    try {
      const doc = new jsPDF()
      const recent = logs.slice(0, 42)
      doc.setFontSize(18)
      doc.text('Project Lantern — Doctor Visit Log', 14, 20)
      doc.setFontSize(10)
      doc.text(`Exported: ${format(new Date(), 'dd MMM yyyy, h:mm a')}`, 14, 28)
      
      autoTable(doc, {
        startY: 34,
        head: [['Date & Time', 'Memory', 'Sleep', 'Agitation', 'Appetite', 'BP (Sys/Dia)', 'Pulse', 'Notes']],
        body: recent.map(l => [
          format(new Date(l.timestamp), 'dd MMM yy, h:mm a'),
          l.memory    ? `${l.memory}/5`  : '-',
          l.sleep     ? `${l.sleep}/5`   : '-',
          l.agitation ? `${l.agitation}/5` : '-',
          l.appetite  ? `${l.appetite}/5`  : '-',
          l.bp_upper && l.bp_lower ? `${l.bp_upper} / ${l.bp_lower}` : '-',
          l.pulse     ? String(l.pulse)  : '-',
          l.notes || '-',
        ]),
        styles: { fontSize: 8, cellPadding: 3 },
        headStyles: { fillColor: [20, 20, 20] },
      })
      
      const filename = `lantern-log-${format(new Date(), 'dd-MMM-yyyy')}.pdf`

      // Mobile friendly share via Web Share API
      if (navigator.canShare && navigator.share) {
        const pdfBlob = doc.output('blob')
        const file = new File([pdfBlob], filename, { type: 'application/pdf' })
        if (navigator.canShare({ files: [file] })) {
          await navigator.share({
            files: [file],
            title: 'Doctor Visit Log',
            text: 'Project Lantern symptom log for doctor visit.',
          })
          return
        }
      }
      
      // Fallback for desktop / unsupported browsers
      doc.save(filename)
    } catch (err) {
      console.error('Error generating PDF:', err)
      alert('Could not generate PDF. Please try again.')
    }
  }

  const setReminder = () => {
    // Generate an ICS file for a daily recurring event
    const icsContent = `BEGIN:VCALENDAR
VERSION:2.0
PRODID:-//Project Lantern//Tracker//EN
BEGIN:VEVENT
SUMMARY:Log Symptoms (Project Lantern)
DESCRIPTION:Time to log your daily symptoms and blood pressure in the Project Lantern tracker.\\n\\nOpen tracker: https://project-lantern-teal.vercel.app/tracker
RRULE:FREQ=DAILY
BEGIN:VALARM
ACTION:DISPLAY
DESCRIPTION:Log Symptoms (Project Lantern)
TRIGGER:-PT0M
END:VALARM
END:VEVENT
END:VCALENDAR`

    const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8' })
    const url = URL.createObjectURL(blob)
    const link = document.createElement('a')
    link.href = url
    link.setAttribute('download', 'lantern-daily-reminder.ics')
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  if (!isClient) return null

  const today = format(new Date(), 'EEEE, d MMMM')

  return (
    <div style={{ background: '#edede8', minHeight: '100vh', fontFamily: 'var(--font-sans)' }}>
      <div style={{ maxWidth: '760px', marginInline: 'auto', padding: '0 24px 96px' }}>

        {/* ── Page Header ─────────────────────────────────── */}
        <div style={{ padding: '48px 0 40px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <div>
            <div style={{ ...S.eyebrow, marginBottom: '10px' }}>Daily Tracker</div>
            <h1 style={{ fontSize: 'clamp(28px, 4vw, 40px)', fontWeight: 400, letterSpacing: '-0.03em', color: '#292929', lineHeight: 1.1 }}>
              {today}
            </h1>
          </div>
          
          {/* Controls */}
          <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', width: '100%' }}>
            {/* Tab switcher */}
            <div style={{ display: 'flex', background: '#dbdbd2', borderRadius: '200px', padding: '4px' }}>
              {(['log', 'history'] as const).map(v => (
                <button
                  key={v}
                  onClick={() => setView(v)}
                  style={{
                    padding: '8px 20px',
                    borderRadius: '200px',
                    border: 'none',
                    background: view === v ? '#141414' : 'transparent',
                    color: view === v ? '#edede8' : '#6f6f6e',
                    fontFamily: 'var(--font-sans)',
                    fontSize: '14px',
                    fontWeight: 500,
                    cursor: 'pointer',
                    letterSpacing: '-0.01em',
                  }}
                >
                  {v === 'log' ? 'Log Entry' : 'History'}
                </button>
              ))}
            </div>
            
            <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
              <button onClick={setReminder} className="btn" style={{ background: '#dbdbd2', color: '#141414', border: '1px solid rgba(0,0,0,0.1)', height: '40px', padding: '0 20px', fontSize: '14px' }}>
                Set Reminder
              </button>
              {view === 'history' && logs.length > 0 && (
                <button onClick={exportPDF} className="btn btn-primary" style={{ height: '40px', padding: '0 20px', fontSize: '14px' }}>
                  Export PDF
                </button>
              )}
            </div>
          </div>
        </div>

        {/* ── LOG VIEW ──────────────────────────────────────── */}
        {view === 'log' && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>

            {/* Log card */}
            <div style={{ background: '#ffffff', borderRadius: '8px', border: '1px solid rgba(0,0,0,0.07)', padding: '28px' }}>

              {/* Card header */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '24px' }}>
                <div>
                  <div style={{ ...S.eyebrow, marginBottom: '4px' }}>Today</div>
                  <div style={{ fontSize: '20px', fontWeight: 500, color: '#292929', letterSpacing: '-0.02em' }}>Daily Log</div>
                </div>
                {/* Timestamp picker */}
                <div>
                  <label style={S.inputLabel}>Time logged</label>
                  <input
                    type="datetime-local"
                    value={logTime}
                    onChange={e => setLogTime(e.target.value)}
                    style={{
                      background: '#dbdbd2',
                      border: 'none',
                      borderRadius: '6px',
                      padding: '8px 12px',
                      fontFamily: 'var(--font-sans)',
                      fontSize: '13px',
                      color: '#292929',
                      outline: 'none',
                    }}
                  />
                </div>
              </div>

              <hr style={{ border: 'none', borderTop: '1px solid rgba(0,0,0,0.08)', marginBottom: '4px' }} />

              {/* Rating rows */}
              <RatingRow label="Memory"       value={memory}    onChange={v => setMemory(v === 0 ? null : v)} />
              <hr style={{ border: 'none', borderTop: '1px solid rgba(0,0,0,0.06)' }} />
              <RatingRow label="Sleep quality" value={sleep}     onChange={v => setSleep(v === 0 ? null : v)} />
              <hr style={{ border: 'none', borderTop: '1px solid rgba(0,0,0,0.06)' }} />
              <RatingRow label="Agitation"    value={agitation} onChange={v => setAgitation(v === 0 ? null : v)} />
              <hr style={{ border: 'none', borderTop: '1px solid rgba(0,0,0,0.06)' }} />
              <RatingRow label="Appetite"     value={appetite}  onChange={v => setAppetite(v === 0 ? null : v)} />

              <div style={{ marginTop: '4px', display: 'flex', justifyContent: 'space-between' }}>
                <span style={{ fontSize: '11px', color: '#c0c0c0' }}>1 = very poor</span>
                <span style={{ fontSize: '11px', color: '#c0c0c0' }}>5 = excellent</span>
              </div>
            </div>

            {/* Blood Pressure card */}
            <div style={{ background: '#ffffff', borderRadius: '8px', border: '1px solid rgba(0,0,0,0.07)', padding: '28px' }}>
              <div style={{ ...S.eyebrow, marginBottom: '16px' }}>Blood Pressure</div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {[
                  { label: 'Systolic',  value: bpUpper,   set: setBpUpper,   placeholder: '120' },
                  { label: 'Diastolic', value: bpLower,   set: setBpLower,   placeholder: '80' },
                  { label: 'Pulse',     value: pulse,      set: setPulse,     placeholder: '72' },
                ].map(f => (
                  <div key={f.label}>
                    <label style={S.inputLabel}>{f.label}</label>
                    <input
                      type="number"
                      value={f.value}
                      onChange={e => f.set(e.target.value)}
                      placeholder={f.placeholder}
                      style={S.input}
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Notes card */}
            <div style={{ background: '#ffffff', borderRadius: '8px', border: '1px solid rgba(0,0,0,0.07)', padding: '28px' }}>
              <div style={{ ...S.eyebrow, marginBottom: '12px' }}>Notes (optional)</div>
              <textarea
                value={notes}
                onChange={e => setNotes(e.target.value)}
                placeholder="Describe anything notable that happened today..."
                rows={3}
                style={{
                  width: '100%',
                  background: '#dbdbd2',
                  border: 'none',
                  borderRadius: '6px',
                  padding: '14px 16px',
                  fontFamily: 'var(--font-sans)',
                  fontSize: '16px',
                  color: '#292929',
                  outline: 'none',
                  resize: 'vertical',
                  lineHeight: 1.5,
                }}
              />
            </div>

            {/* Save button */}
            <button
              onClick={handleSave}
              disabled={!memory && !sleep && !agitation && !appetite && !bpUpper && !notes.trim()}
              style={{
                width: '100%',
                height: '52px',
                borderRadius: '200px',
                border: 'none',
                background: saved ? '#4cc02b' : '#141414',
                color: '#ffffff',
                fontFamily: 'var(--font-sans)',
                fontSize: '16px',
                fontWeight: 500,
                cursor: 'pointer',
                letterSpacing: '-0.01em',
                opacity: (!memory && !sleep && !agitation && !appetite && !bpUpper && !notes.trim()) ? 0.4 : 1,
              }}
            >
              {saved ? 'Saved' : 'Save Entry'}
            </button>
          </div>
        )}

        {/* ── HISTORY VIEW ─────────────────────────────────── */}
        {view === 'history' && (
          <div>
            {logs.length === 0 ? (
              <div style={{ textAlign: 'center', padding: '96px 0' }}>
                <div style={{ fontSize: '40px', marginBottom: '16px', color: '#c0c0c0' }}>·</div>
                <h3 style={{ fontSize: '24px', fontWeight: 400, color: '#292929', marginBottom: '8px' }}>No entries yet</h3>
                <p style={{ fontSize: '16px', color: '#6f6f6e', marginBottom: '32px' }}>
                  Log your first entry to start building a history you can share with your doctor.
                </p>
                <button onClick={() => setView('log')} className="btn btn-primary">
                  Make your first entry
                </button>
              </div>
            ) : (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                {/* Export CTA strip */}
                <div style={{
                  background: '#141414', borderRadius: '8px',
                  padding: '20px 24px',
                  display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '16px',
                  marginBottom: '8px', flexWrap: 'wrap',
                }}>
                  <div>
                    <div style={{ fontSize: '16px', fontWeight: 500, color: '#ffffff', marginBottom: '2px' }}>Doctor Visit Summary</div>
                    <div style={{ fontSize: '14px', color: '#6f6f6e' }}>Generate a printable PDF of your full log history.</div>
                  </div>
                  <button onClick={exportPDF} className="btn" style={{ background: '#ffffff', color: '#141414', height: '40px', padding: '0 20px', fontSize: '14px', flexShrink: 0 }}>
                    Export PDF
                  </button>
                </div>

                {logs.map((log, i) => (
                  <div
                    key={log.id}
                    style={{
                      background: '#ffffff',
                      borderRadius: '8px',
                      border: '1px solid rgba(0,0,0,0.07)',
                      padding: '20px 24px',
                    }}
                  >
                    {/* Row header */}
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: log.memory || log.sleep || log.agitation || log.appetite || log.bp_upper ? '16px' : '0' }}>
                      <div>
                        <div style={{ fontSize: '15px', fontWeight: 500, color: '#292929', letterSpacing: '-0.01em' }}>
                          {format(new Date(log.timestamp), 'EEEE, d MMM yyyy')}
                        </div>
                        <div style={{ fontSize: '13px', color: '#8f8f8e' }}>
                          {format(new Date(log.timestamp), 'h:mm a')}
                        </div>
                      </div>
                      {log.bp_upper && (
                        <div style={{ textAlign: 'right' }}>
                          <div style={{ fontSize: '11px', color: '#8f8f8e', textTransform: 'uppercase', letterSpacing: '0.07em', marginBottom: '2px' }}>BP</div>
                          <div style={{ fontSize: '16px', fontWeight: 400, color: '#292929', letterSpacing: '-0.01em' }}>
                            {log.bp_upper}/{log.bp_lower}
                            {log.pulse ? <span style={{ color: '#8f8f8e', fontSize: '14px' }}> · {log.pulse} bpm</span> : null}
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Ratings row */}
                    {(log.memory || log.sleep || log.agitation || log.appetite) && (
                      <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                        {[
                          { l: 'Memory',    v: log.memory },
                          { l: 'Sleep',     v: log.sleep },
                          { l: 'Agitation', v: log.agitation },
                          { l: 'Appetite',  v: log.appetite },
                        ].filter(r => r.v).map(r => (
                          <div key={r.l} style={{ background: '#dbdbd2', borderRadius: '6px', padding: '8px 14px' }}>
                            <div style={{ fontSize: '11px', color: '#8f8f8e', textTransform: 'uppercase', letterSpacing: '0.07em' }}>{r.l}</div>
                            <div style={{ fontSize: '20px', fontWeight: 400, color: '#292929', letterSpacing: '-0.02em' }}>{r.v}/5</div>
                          </div>
                        ))}
                      </div>
                    )}

                    {log.notes && (
                      <p style={{ fontSize: '15px', color: '#6f6f6e', marginTop: '12px', marginBottom: 0, lineHeight: 1.5 }}>
                        {log.notes}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  )
}
