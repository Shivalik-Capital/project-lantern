import { createClient } from '@/lib/supabase/server'
import { redirect } from 'next/navigation'
import { LogOut } from 'lucide-react'
import { TrackerDashboard } from './TrackerDashboard'

export const metadata = {
  title: 'Daily Symptom Tracker | Project Lantern',
}

export default async function TrackerPage() {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()

  if (!user) {
    redirect('/login')
  }

  // Fetch recent logs (30 days for analysis)
  const { data: logs } = await supabase
    .from('daily_logs')
    .select('*')
    .order('log_date', { ascending: false })
    .limit(30)

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

        <TrackerDashboard logs={logs || []} />
      </div>
    </div>
  )
}
