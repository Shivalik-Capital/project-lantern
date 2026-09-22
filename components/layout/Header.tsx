'use client'

import { useState } from 'react'
import Link from 'next/link'
import { SearchModal } from '@/components/ui/SearchModal'

const NAV = [
  { label: 'Charter',        href: '/charter' },
  { label: 'Methodology',    href: '/methodology' },
  { label: 'Clinical Board', href: '/clinical-board' },
  { label: 'Articles',       href: '/understand' },
  { label: 'Resources',      href: '/find-help' },
]

export function Header() {
  const [menuOpen,   setMenuOpen]   = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)

  return (
    <header
      className="sticky top-0 z-50 w-full"
      style={{ background: '#edede8', borderBottom: '1px solid rgba(0,0,0,0.09)' }}
    >
      <div className="container-layout flex h-[60px] items-center justify-between gap-6">

        {/* Brand */}
        <Link
          href="/"
          onClick={() => setMenuOpen(false)}
          style={{
            fontFamily: 'var(--font-sans)',
            fontWeight: 600,
            fontSize: '16px',
            color: '#292929',
            letterSpacing: '-0.02em',
            textDecoration: 'none',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            flexShrink: 0,
          }}
        >
          {/* Lantern SVG icon */}
          <span
            style={{
              width: '28px', height: '28px',
              background: '#141414',
              borderRadius: '6px',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              flexShrink: 0,
              overflow: 'hidden',
            }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/icon.svg" alt="" width={28} height={28} style={{ display: 'block' }} />
          </span>
          Project Lantern
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-7 flex-1 justify-center" aria-label="Main navigation">
          {NAV.map(n => (
            <Link
              key={n.href}
              href={n.href}
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '14px',
                fontWeight: 400,
                color: '#6f6f6e',
                textDecoration: 'none',
                letterSpacing: '-0.01em',
              }}
            >
              {n.label}
            </Link>
          ))}
        </nav>

        {/* Right */}
        <div className="hidden md:flex items-center gap-4 shrink-0">
          <button
            onClick={() => setSearchOpen(true)}
            aria-label="Search"
            style={{
              background: 'none', border: 'none', cursor: 'pointer',
              fontFamily: 'var(--font-sans)', fontSize: '14px',
              color: '#6f6f6e', padding: '4px',
            }}
          >
            Search
          </button>
          <Link href="/tracker" className="btn btn-primary" style={{ height: '38px', padding: '0 20px', fontSize: '14px' }}>
            Symptom Log
          </Link>
        </div>

        {/* Mobile toggle — text, no icon */}
        <div className="md:hidden flex items-center gap-4 ml-auto">
          <button
            onClick={() => setSearchOpen(true)}
            style={{ background: 'none', border: 'none', cursor: 'pointer', fontSize: '14px', color: '#6f6f6e', fontFamily: 'var(--font-sans)' }}
          >
            Search
          </button>
          <button
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            onClick={() => setMenuOpen(v => !v)}
            style={{ background: 'none', border: 'none', cursor: 'pointer', fontSize: '14px', color: '#292929', fontFamily: 'var(--font-sans)', fontWeight: 500 }}
          >
            {menuOpen ? 'Close' : 'Menu'}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      {menuOpen && (
        <div
          className="md:hidden absolute top-[60px] left-0 w-full z-40 px-6 py-8"
          style={{ background: '#edede8', borderBottom: '1px solid rgba(0,0,0,0.09)' }}
        >
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            {NAV.map(n => (
              <Link
                key={n.href}
                href={n.href}
                onClick={() => setMenuOpen(false)}
                style={{ fontSize: '17px', color: '#292929', textDecoration: 'none', fontFamily: 'var(--font-sans)' }}
              >
                {n.label}
              </Link>
            ))}
            <Link
              href="/tracker"
              onClick={() => setMenuOpen(false)}
              className="btn btn-primary"
              style={{ width: '100%', justifyContent: 'center', marginTop: '8px' }}
            >
              Symptom Log
            </Link>
          </div>
        </div>
      )}

      <SearchModal isOpen={searchOpen} onClose={() => setSearchOpen(false)} />
    </header>
  )
}
