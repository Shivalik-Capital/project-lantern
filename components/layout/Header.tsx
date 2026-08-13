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
        <nav className="hidden md:flex items-center gap-6">
          <Link href="/understand" className="text-sm font-600 text-text-muted hover:text-primary transition-colors flex items-center gap-1.5">
            <BookOpen className="w-4 h-4" /> Understand
          </Link>
          <Link href="/caregiving" className="text-sm font-600 text-text-muted hover:text-primary transition-colors flex items-center gap-1.5">
            <Heart className="w-4 h-4" /> Caregiving
          </Link>
          <Link href="/find-help" className="text-sm font-600 text-text-muted hover:text-primary transition-colors flex items-center gap-1.5">
            <MapPin className="w-4 h-4" /> Find Help
          </Link>
          <Link href="/glossary" className="text-sm font-600 text-text-muted hover:text-primary transition-colors flex items-center gap-1.5">
            <Users className="w-4 h-4" /> Glossary
          </Link>
        </nav>
        <div className="md:hidden flex items-center">
          {/* Mobile menu button could go here */}
        </div>
      </div>
    </header>
  )
}
