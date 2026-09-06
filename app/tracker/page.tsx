import { createClient } from '@/lib/supabase/server'
import { redirect } from 'next/navigation'
import { LogOut, Activity, CalendarDays } from 'lucide-react'
import { DailyLogForm } from './DailyLogForm'

export const metadata = {
  title: 'Daily Symptom Tracker | Project Lantern',
}

export default async function TrackerPage() {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()

  if (!user) {
    redirect('/login')
  }

  // Fetch recent logs
  const { data: logs } = await supabase
    .from('daily_logs')
    .select('*')
    .order('log_date', { ascending: false })
    .limit(7)

  return (
    <div className="container-layout py-12">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-sans font-800 text-text">Dashboard</h1>
            <p className="text-text-muted mt-1 text-sm">Signed in as: {user.email}</p>
          </div>
          <form action="/auth/signout" method="post">
            <button className="btn btn-outline !text-xs !py-1 !px-3" type="submit">
              <LogOut className="w-3.5 h-3.5" /> Sign Out
            </button>
          </form>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Form Column */}
          <div className="lg:col-span-2 space-y-8">
            <div className="card p-6 md:p-8">
              <div className="flex items-center gap-2 mb-6 border-b border-border-light pb-4">
                <Activity className="w-5 h-5 text-primary" />
                <h2 className="text-xl font-sans font-700 text-text">Log Today's Symptoms</h2>
              </div>
              <DailyLogForm />
            </div>
          </div>

          {/* Sidebar / Past Logs */}
          <div className="space-y-6">
            <div className="card p-6 bg-primary-lighter border-primary-light">
              <div className="flex items-center gap-2 mb-4">
                <CalendarDays className="w-5 h-5 text-primary-dark" />
                <h3 className="font-sans font-700 text-primary-dark text-lg">Recent Logs</h3>
              </div>
              
              {!logs || logs.length === 0 ? (
                <p className="text-sm text-text-muted">No logs recorded yet. Start tracking to build a history you can share with your doctor.</p>
              ) : (
                <ul className="space-y-4">
                  {logs.map(log => (
                    <li key={log.id} className="bg-surface rounded-md p-3 border border-primary-light/50 text-sm">
                      <div className="font-sans font-700 text-text mb-1">
                        {new Date(log.log_date).toLocaleDateString('en-IN', { weekday: 'short', month: 'short', day: 'numeric' })}
                      </div>
                      <div className="grid grid-cols-2 gap-1 text-xs text-text-muted">
                        <div>Sleep: <span className="text-text font-500 capitalize">{log.sleep_quality}</span></div>
                        <div>Agitation: <span className="text-text font-500 capitalize">{log.agitation_level}</span></div>
                        <div>Falls: <span className="text-text font-500">{log.fall_incidents}</span></div>
                        <div>Memory: <span className="text-text font-500 capitalize">{log.memory_status}</span></div>
                      </div>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
