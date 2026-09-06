'use server'

import { createClient } from '@/lib/supabase/server'
import { revalidatePath } from 'next/cache'

export async function submitDailyLog(formData: FormData) {
  const supabase = await createClient()

  // Verify authentication
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) {
    throw new Error('Not authenticated')
  }

  // Parse form data
  const log_date = formData.get('log_date') as string
  const sleep_quality = formData.get('sleep_quality') as string
  const agitation_level = formData.get('agitation_level') as string
  const wandering_incidents = parseInt(formData.get('wandering_incidents') as string || '0', 10)
  const fall_incidents = parseInt(formData.get('fall_incidents') as string || '0', 10)
  const appetite = formData.get('appetite') as string
  const memory_status = formData.get('memory_status') as string
  const notes = formData.get('notes') as string

  // Insert or Update the daily log (using upsert on the unique constraint user_id + log_date)
  const { error } = await supabase
    .from('daily_logs')
    .upsert({
      user_id: user.id,
      log_date,
      sleep_quality,
      agitation_level,
      wandering_incidents,
      fall_incidents,
      appetite,
      memory_status,
      notes
    }, {
      onConflict: 'user_id, log_date'
    })

  if (error) {
    console.error('Error inserting log:', error)
    throw new Error('Failed to save log.')
  }

  revalidatePath('/tracker')
}
