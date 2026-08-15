import Link from 'next/link'
import { FileQuestion, Home, BookOpen } from 'lucide-react'

export const metadata = {
  title: 'Page Not Found',
}

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center text-center px-4">
      <div className="w-20 h-20 bg-primary-lighter rounded-full flex items-center justify-center mb-8">
        <FileQuestion className="w-10 h-10 text-primary" />
      </div>
      
      <h1 className="text-4xl md:text-5xl font-sans font-800 text-text mb-4">
        Page Not Found
      </h1>
      
      <p className="text-lg text-text-muted max-w-lg mx-auto mb-10">
        We are constantly updating our clinical and educational resources. The page you are looking for may have been moved, updated, or removed during our Alpha phase.
      </p>
      
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Link href="/" className="btn btn-primary">
          <Home className="w-4 h-4 mr-2" />
          Return Home
        </Link>
        <Link href="/caregiving" className="btn btn-outline">
          <BookOpen className="w-4 h-4 mr-2" />
          Browse Caregiving Guides
        </Link>
      </div>
    </div>
  )
}
