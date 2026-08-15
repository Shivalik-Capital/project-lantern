import Link from 'next/link'
import { BookOpen, MapPin, Heart, Users } from 'lucide-react'

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-surface/80 backdrop-blur-md">
      <div className="container-layout flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-8 h-8 rounded bg-primary flex items-center justify-center text-white shadow-sm transition-transform group-hover:scale-105">
            <Heart className="w-5 h-5 fill-white" />
          </div>
          <span className="font-sans font-800 text-xl tracking-tight text-text group-hover:text-primary transition-colors">
            Project Lantern
          </span>
        </Link>
        <nav className="hidden md:flex items-center gap-6" aria-label="Main Navigation">
          <Link href="/charter" aria-label="Read our Editorial Charter" className="text-sm font-600 text-text-muted hover:text-primary transition-colors flex items-center gap-1.5">
            <BookOpen className="w-4 h-4" aria-hidden="true" /> Editorial Charter
          </Link>
          <Link href="/methodology" aria-label="View our Methodology and Data Sourcing" className="text-sm font-600 text-text-muted hover:text-primary transition-colors flex items-center gap-1.5">
            <BookOpen className="w-4 h-4" aria-hidden="true" /> Methodology
          </Link>
          <Link href="/clinical-board" aria-label="Learn about our Clinical Board" className="text-sm font-600 text-text-muted hover:text-primary transition-colors flex items-center gap-1.5">
            <Users className="w-4 h-4" aria-hidden="true" /> Clinical Board
          </Link>
          <Link href="/understand" aria-label="Read Draft Articles" className="text-sm font-600 text-text-muted hover:text-primary transition-colors flex items-center gap-1.5">
            <Heart className="w-4 h-4" aria-hidden="true" /> Draft Articles
          </Link>
          <Link href="/find-help" aria-label="Find Resources and Help" className="text-sm font-600 text-text-muted hover:text-primary transition-colors flex items-center gap-1.5">
            <MapPin className="w-4 h-4" aria-hidden="true" /> Resources
          </Link>
        </nav>
        <div className="md:hidden flex items-center">
          <button aria-label="Open mobile menu" className="p-2 text-text-muted hover:text-primary">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" /></svg>
          </button>
        </div>
      </div>
    </header>
  )
}
