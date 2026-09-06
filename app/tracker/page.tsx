import { createClient } from '@/lib/supabase/server'
import { redirect } from 'next/navigation'
import { LogOut } from 'lucide-react'

export const metadata = {
  title: 'Daily Symptom Tracker | Project Lantern',
}

export default async function TrackerPage() {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()

  if (!user) {
    redirect('/login')
  }

  return (
    <div className="container-layout py-12">
      <div className="content-column">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-sans font-800 text-text">Dashboard</h1>
          <form action="/auth/signout" method="post">
            <button className="btn btn-outline !text-xs !py-1 !px-3" type="submit">
              <LogOut className="w-3.5 h-3.5" /> Sign Out
            </button>
          </form>
        </div>

        <div className="card p-8 bg-primary-lighter border-primary-light">
          <h2 className="text-xl font-sans font-700 text-primary-dark mb-2">Welcome to your Tracker</h2>
          <p className="text-text-muted">
            You are signed in securely as: <strong className="text-text">{user.email}</strong>
          </p>
          <p className="text-text-muted mt-4">
            In the next phase, this dashboard will house the Daily Symptom Log, where you can track sleep, wandering, and agitation to share with your doctor.
          </p>
        </div>
      </div>
    </div>
  )
}
