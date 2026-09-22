import { TrackerApp } from './TrackerApp'

export const metadata = {
  title: 'Caregiver Symptom Log | Project Lantern',
  description: 'A private, on-device symptom tracker for Alzheimer\'s and dementia caregivers. Export PDF summaries for doctor visits.'
}

export default function TrackerPage() {
  return (
    <div className="container-layout py-16 md:py-24">
      <div className="max-w-3xl mx-auto">
        <TrackerApp />
      </div>
    </div>
  )
}
