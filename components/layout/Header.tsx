'use client'

import { useState } from 'react'
import Link from 'next/link'
import { BookOpen, MapPin, Heart, Users, X, Menu } from 'lucide-react'

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const toggleMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen)

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-surface/80 backdrop-blur-md">
      <div className="container-layout flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group" onClick={() => setIsMobileMenuOpen(false)}>
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
          <button 
            aria-label={isMobileMenuOpen ? "Close mobile menu" : "Open mobile menu"} 
            className="p-2 text-text-muted hover:text-primary"
            onClick={toggleMenu}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden border-t border-border bg-surface px-4 py-4 space-y-4 shadow-lg absolute w-full left-0">
          <Link href="/charter" onClick={toggleMenu} className="block text-base font-600 text-text hover:text-primary flex items-center gap-2">
            <BookOpen className="w-5 h-5 text-primary" /> Editorial Charter
          </Link>
          <Link href="/methodology" onClick={toggleMenu} className="block text-base font-600 text-text hover:text-primary flex items-center gap-2">
            <BookOpen className="w-5 h-5 text-primary" /> Methodology
          </Link>
          <Link href="/clinical-board" onClick={toggleMenu} className="block text-base font-600 text-text hover:text-primary flex items-center gap-2">
            <Users className="w-5 h-5 text-primary" /> Clinical Board
          </Link>
          <Link href="/understand" onClick={toggleMenu} className="block text-base font-600 text-text hover:text-primary flex items-center gap-2">
            <Heart className="w-5 h-5 text-primary" /> Draft Articles
          </Link>
          <Link href="/find-help" onClick={toggleMenu} className="block text-base font-600 text-text hover:text-primary flex items-center gap-2">
            <MapPin className="w-5 h-5 text-primary" /> Resources
          </Link>
        </div>
      )}
    </header>
  )
}
