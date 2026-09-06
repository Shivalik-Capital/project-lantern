'use client'

import { useState, useEffect } from 'react'
import { Share2 } from 'lucide-react'

interface ShareButtonProps {
  title: string
  text?: string
}

export function ShareButton({ title, text = 'A helpful guide from Project Lantern' }: ShareButtonProps) {
  const [url, setUrl] = useState('')

  useEffect(() => {
    setUrl(window.location.href)
  }, [])

  const handleShare = async () => {
    // If native sharing is supported (like on most mobile devices)
    if (navigator.share) {
      try {
        await navigator.share({
          title,
          text,
          url,
        })
      } catch (err) {
        console.error('Share failed:', err)
      }
    } else {
      // Fallback to WhatsApp link
      const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(`${title} - ${text}\n\n${url}`)}`
      window.open(whatsappUrl, '_blank')
    }
  }

  // Don't render until we have the URL (client-side only)
  if (!url) return null

  return (
    <button
      onClick={handleShare}
      className="inline-flex items-center gap-2 bg-[#25D366] text-white hover:bg-[#128C7E] px-4 py-2 rounded-full font-sans font-600 text-sm transition-colors shadow-sm"
      aria-label="Share via WhatsApp or Native Share"
    >
      <Share2 className="w-4 h-4" />
      Share with Family
    </button>
  )
}
