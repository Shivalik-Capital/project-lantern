'use client'

import { useEffect } from 'react'
import Link from 'next/link'
import { AlertOctagon, RotateCcw } from 'lucide-react'

export default function ErrorBoundary({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error)
  }, [error])

  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center text-center px-4">
      <div className="w-20 h-20 bg-emergency-bg rounded-full flex items-center justify-center mb-8 border border-[#fecaca]">
        <AlertOctagon className="w-10 h-10 text-emergency" />
      </div>
      
      <h1 className="text-3xl md:text-4xl font-sans font-800 text-text mb-4">
        Something went wrong
      </h1>
      
      <p className="text-lg text-text-muted max-w-lg mx-auto mb-10">
        An unexpected error occurred in our system. Our engineering team has been notified. We apologize for the inconvenience.
      </p>
      
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <button
          onClick={() => reset()}
          className="btn btn-primary"
        >
          <RotateCcw className="w-4 h-4 mr-2" />
          Try Again
        </button>
        <Link href="/" className="btn btn-outline">
          Return Home
        </Link>
      </div>
    </div>
  )
}
