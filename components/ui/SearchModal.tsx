'use client'

import { useEffect, useRef } from 'react'
import { X } from 'lucide-react'

interface SearchModalProps {
  isOpen: boolean
  onClose: () => void
}

export function SearchModal({ isOpen, onClose }: SearchModalProps) {
  const searchRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!isOpen) return

    // Prevent scrolling on the body when modal is open
    document.body.style.overflow = 'hidden'

    // Check if PagefindUI is already loaded on the window
    // @ts-ignore
    if (window.PagefindUI) {
      if (searchRef.current && searchRef.current.innerHTML === '') {
        // @ts-ignore
        new window.PagefindUI({
          element: searchRef.current,
          showSubResults: true,
          showImages: false,
          resetStyles: false,
        })
      }
    } else {
      // Load CSS
      const link = document.createElement('link')
      link.rel = 'stylesheet'
      link.href = '/pagefind/pagefind-ui.css'
      document.head.appendChild(link)

      // Load JS
      const script = document.createElement('script')
      script.src = '/pagefind/pagefind-ui.js'
      script.onload = () => {
        if (searchRef.current) {
          // @ts-ignore
          new window.PagefindUI({
            element: searchRef.current,
            showSubResults: true,
            showImages: false,
            resetStyles: false,
          })
        }
      }
      document.head.appendChild(script)
    }

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', handleKeyDown)

    return () => {
      document.body.style.overflow = 'unset'
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [isOpen, onClose])

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-[100] flex items-start justify-center pt-16 sm:pt-24 px-4 bg-text/20 backdrop-blur-sm">
      <div 
        className="fixed inset-0" 
        onClick={onClose}
        aria-hidden="true"
      />
      <div className="relative w-full max-w-2xl bg-surface rounded-xl shadow-2xl border border-border flex flex-col max-h-[80vh] overflow-hidden">
        <div className="flex items-center justify-between p-4 border-b border-border">
          <h2 className="font-sans font-700 text-text">Search Articles & Glossary</h2>
          <button 
            onClick={onClose}
            className="p-1.5 rounded-md hover:bg-background text-text-muted transition-colors"
            aria-label="Close search"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
        
        <div className="p-4 overflow-y-auto" id="pagefind-container">
          <div ref={searchRef}></div>
        </div>
      </div>
    </div>
  )
}
