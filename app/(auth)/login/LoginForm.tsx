'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { createClient } from '@/lib/supabase/client'
import { Loader2 } from 'lucide-react'

export function LoginForm() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  
  const router = useRouter()
  const supabase = createClient()

  const [showPassword, setShowPassword] = useState(false)

  const handleSignIn = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError(null)
    
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    })

    if (error) {
      setError(error.message)
      setLoading(false)
    } else {
      router.push('/tracker')
      router.refresh()
    }
  }

  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError(null)
    
    const { error } = await supabase.auth.signUp({
      email,
      password,
    })

    if (error) {
      setError(error.message)
      setLoading(false)
    } else {
      setError('Check your email for the confirmation link.')
      setLoading(false)
    }
  }

  return (
    <form className="space-y-6" onSubmit={handleSignIn}>
      {error && (
        <div className="p-3 text-sm text-red-800 bg-red-100 rounded-md border border-red-200">
          {error}
        </div>
      )}
      
      <div>
        <label htmlFor="email" className="block text-sm font-sans font-600 text-text">
          Email address
        </label>
        <div className="mt-1">
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="appearance-none block w-full px-3 py-2 border border-border rounded-md shadow-sm placeholder-text-subtle focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
          />
        </div>
      </div>

      <div>
        <label htmlFor="password" className="block text-sm font-sans font-600 text-text">
          Password
        </label>
        <div className="mt-1 relative">
          <input
            id="password"
            name="password"
            type={showPassword ? "text" : "password"}
            autoComplete="current-password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="appearance-none block w-full px-3 py-2 border border-border rounded-md shadow-sm placeholder-text-subtle focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
          />
          <button
            type="button"
            className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5 text-text-muted hover:text-primary"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? 'Hide' : 'Show'}
          </button>
        </div>
      </div>

      <div className="flex gap-3">
        <button
          type="submit"
          disabled={loading}
          className="btn btn-primary w-full flex justify-center"
        >
          {loading ? <Loader2 className="w-5 h-5 animate-spin" /> : 'Sign In'}
        </button>
        <button
          type="button"
          onClick={handleSignUp}
          disabled={loading}
          className="btn btn-outline w-full flex justify-center"
        >
          Sign Up
        </button>
      </div>

      <div className="mt-4 text-center text-xs text-text-muted">
        By continuing, you agree to our <a href="/privacy" className="text-amber hover:underline">Privacy Policy</a> and strict medical data standards. We never sell your data.
      </div>
    </form>
  )
}
