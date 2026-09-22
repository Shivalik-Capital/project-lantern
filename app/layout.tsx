import type { Metadata, Viewport } from 'next'
import { Cormorant_Garamond, Manrope } from 'next/font/google'
import './globals.css'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { Analytics } from '@vercel/analytics/react'

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  variable: '--font-serif',
  weight: ['300', '400', '500'],
  display: 'swap',
})

const manrope = Manrope({
  subsets: ['latin'],
  variable: '--font-sans',
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
})

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#edede8' },
    { media: '(prefers-color-scheme: dark)',  color: '#141414' },
  ],
}

const BASE = 'https://project-lantern-teal.vercel.app'

export const metadata: Metadata = {
  metadataBase: new URL(BASE),
  title: {
    default: "Project Lantern — Alzheimer's & Dementia Care Guides for India",
    template: '%s | Project Lantern',
  },
  description:
    "Free, medically reviewed Alzheimer's and dementia guides for Indian families. Symptom tracker, caregiver resources, memory clinic directory, and expert-reviewed articles. Reviewed by SCARF Chennai.",
  keywords: [
    'alzheimers india', 'dementia care india', 'alzheimers disease india',
    'dementia symptoms india', 'caregiver guide india', 'memory loss india',
    'SCARF Chennai', 'ARDSI', 'dementia education india',
    'alzheimers symptoms hindi', 'memory clinic india', 'dementia NGO india',
    'caregiving alzheimers', 'dementia tracker', 'alzheimers family guide',
  ],
  authors: [{ name: 'Project Lantern Editorial Team' }],
  creator: 'Project Lantern',
  publisher: 'Project Lantern',
  category: 'health',
  verification: {
    google: 'Rkb2uHGWUxoh6A4TEwyIqIEUPq29-cKfo81xodASgug',
  },
  alternates: {
    canonical: BASE,
    languages: {
      'en-IN': BASE,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: BASE,
    siteName: 'Project Lantern',
    title: "Project Lantern — Alzheimer's & Dementia Care for Indian Families",
    description: "Free, medically reviewed guides for the 8.8 million families living with dementia in India. Daily symptom tracker, doctor export, caregiver resources.",
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Project Lantern — Alzheimer\'s and Dementia Care Guides for India',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Project Lantern — Alzheimer's Care for India",
    description: "Free, medically reviewed dementia guides for Indian families. Reviewed by SCARF Chennai.",
    images: ['/og-image.jpg'],
  },
  manifest: '/manifest.json',
  icons: {
    icon: [
      { url: '/icon.svg',  type: 'image/svg+xml' },
      { url: '/favicon.ico' },
    ],
    apple: [
      { url: '/apple-icon.png', sizes: '512x512', type: 'image/png' },
    ],
    other: [
      { rel: 'mask-icon', url: '/icon.svg' },
    ],
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: 'Lantern',
    startupImage: '/apple-icon.png',
  },
  applicationName: 'Project Lantern',
  formatDetection: {
    telephone: false,
  },
}

// JSON-LD Structured Data for Google
const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebSite',
      '@id': `${BASE}/#website`,
      url: BASE,
      name: 'Project Lantern',
      description: "Free Alzheimer's and dementia guides for Indian families",
      inLanguage: 'en-IN',
      publisher: {
        '@id': `${BASE}/#organization`,
      },
      potentialAction: {
        '@type': 'SearchAction',
        target: {
          '@type': 'EntryPoint',
          urlTemplate: `${BASE}/understand?q={search_term_string}`,
        },
        'query-input': 'required name=search_term_string',
      },
    },
    {
      '@type': 'Organization',
      '@id': `${BASE}/#organization`,
      name: 'Project Lantern',
      url: BASE,
      logo: {
        '@type': 'ImageObject',
        url: `${BASE}/icon.svg`,
      },
      description: "India's free, medically reviewed resource for Alzheimer's disease and dementia caregiver education",
      foundingDate: '2026',
      areaServed: {
        '@type': 'Country',
        name: 'India',
      },
      knowsAbout: [
        "Alzheimer's disease",
        'Dementia',
        'Caregiver support',
        'Memory loss',
        'Cognitive decline',
      ],
    },
    {
      '@type': 'MedicalWebPage',
      '@id': `${BASE}/#medicalwebpage`,
      url: BASE,
      name: "Project Lantern — Alzheimer's & Dementia Guides for India",
      about: {
        '@type': 'MedicalCondition',
        name: "Alzheimer's Disease",
        alternateName: 'Dementia',
        relevantSpecialty: {
          '@type': 'MedicalSpecialty',
          name: 'Neurology',
        },
      },
      reviewedBy: {
        '@type': 'Organization',
        name: 'SCARF Chennai',
        url: 'https://scarfindia.org',
      },
      audience: {
        '@type': 'Audience',
        audienceType: 'Patients, Caregivers, Family Members',
      },
    },
  ],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-IN" className={`${cormorant.variable} ${manrope.variable}`}>
      <head>
        <script defer data-domain="project-lantern-teal.vercel.app" src="https://plausible.io/js/script.js" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen flex flex-col antialiased" style={{ background: '#edede8', color: '#292929', fontFamily: 'var(--font-sans)' }}>
        <a href="#main-content" className="skip-link">Skip to main content</a>
        <Header />
        <main id="main-content" className="flex-1">{children}</main>
        <Analytics />
        <Footer />
      </body>
    </html>
  )
}
