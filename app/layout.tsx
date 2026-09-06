import type { Metadata } from 'next'
import { Nunito, Inter } from 'next/font/google'
import './globals.css'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { Analytics } from '@vercel/analytics/react'

const nunito = Nunito({
  subsets: ['latin'],
  variable: '--font-nunito',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const viewport: import('next').Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  themeColor: '#4a7c6f',
}

export const metadata: Metadata = {
  title: {
    default: 'Project Lantern: Alzheimer\'s Care in India',
    template: '%s | Project Lantern',
  },
  description:
    'Trustworthy Alzheimer\'s and dementia guides for Indian families. Find medical information, memory clinics, NGOs, and caregiver resources.',
  keywords: [
    'alzheimers india', 'dementia care india', 'caregiver guide', 'memory loss india',
    'ARDSI', 'dementia education', 'alzheimers symptoms hindi',
  ],
  verification: {
    google: 'Rkb2uHGWUxoh6A4TEwyIqIEUPq29-cKfo81xodASgug',
  },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    siteName: 'Project Lantern',
  },
  manifest: '/manifest.json',
}

export default function RootLayout({ children }: LayoutProps<'/'>) {
  return (
    <html
      lang="en-IN"
      className={`${nunito.variable} ${inter.variable}`}
    >
      <head>
        <script defer data-domain="project-lantern-teal.vercel.app" src="https://plausible.io/js/script.js"></script>
      </head>
      <body className="min-h-screen flex flex-col bg-background text-text antialiased">
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        <Header />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <Analytics />
        <Footer />
      </body>
    </html>
  )
}
