import type { Metadata } from 'next'
import { Nunito, Inter } from 'next/font/google'
import './globals.css'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'

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

export const metadata: Metadata = {
  title: {
    default: 'Project Lantern: Alzheimer\'s Education for Indian Families',
    template: '%s | Project Lantern',
  },
  description:
    'Free, trustworthy information about Alzheimer\'s disease and dementia care for Indian families and caregivers. Practical guides, a plain-language glossary and India-specific resources.',
  keywords: [
    'alzheimers india', 'dementia care india', 'caregiver guide', 'memory loss india',
    'ARDSI', 'dementia education', 'alzheimers symptoms hindi',
  ],
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    siteName: 'Project Lantern',
  },
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
        <Footer />
      </body>
    </html>
  )
}
