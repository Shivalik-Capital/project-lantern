import type { Metadata } from 'next'
import GlossaryClient from './GlossaryClient'

export const metadata: Metadata = {
  title: 'Medical Glossary',
  description:
    'Plain-language definitions of medical terms you might encounter when learning about Alzheimer\'s disease and dementia. From amyloid plaques to sundowning, explained without jargon.',
}

export default function GlossaryPage() {
  return <GlossaryClient />
}
