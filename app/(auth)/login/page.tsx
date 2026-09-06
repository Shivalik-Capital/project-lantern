import { LoginForm } from './LoginForm'
import { Heart } from 'lucide-react'

export const metadata = {
  title: 'Sign In | Project Lantern',
  description: 'Sign in to access your family\'s daily symptom tracker and caregiver community.',
}

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-background flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md flex flex-col items-center">
        <div className="w-12 h-12 rounded bg-primary flex items-center justify-center text-white shadow-sm mb-6">
          <Heart className="w-7 h-7 fill-white" />
        </div>
        <h2 className="text-center text-3xl font-sans font-800 text-text">
          Welcome to Project Lantern
        </h2>
        <p className="mt-2 text-center text-sm text-text-muted">
          Sign in to access the Daily Tracker and Community.
        </p>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="card py-8 px-4 sm:px-10">
          <div className="mb-6 p-4 bg-primary-lighter border border-primary-light rounded-md text-center">
            <h3 className="font-sans font-700 text-primary-dark mb-1">Track Daily Progress</h3>
            <p className="text-sm text-text-muted">
              Create a free, secure account to log daily symptoms and build a history you can share with your doctor.
            </p>
          </div>
          <LoginForm />
        </div>
      </div>
    </div>
  )
}
