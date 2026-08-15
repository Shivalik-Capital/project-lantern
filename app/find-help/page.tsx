import resources from '@/content/resources.json'
import { MapPin, Phone, Globe, ShieldAlert } from 'lucide-react'

export const metadata = {
  title: 'Find Help & Resources',
  description: 'A structured directory of memory clinics, NGOs, and national helplines for dementia in India.',
}

export default function FindHelpPage() {
  return (
    <div className="container-layout py-12 md:py-16">
      <div className="max-w-3xl mb-12">
        <h1 className="text-4xl font-900 tracking-tight text-text mb-4">
          Find Help & Resources
        </h1>
        <p className="text-lg text-text-muted leading-relaxed mb-6">
          A vetted directory of memory clinics, national helplines, and non-profit organizations operating across India.
        </p>
        
        <div className="helpline-banner flex items-start gap-3">
          <ShieldAlert className="w-5 h-5 text-emergency mt-0.5" />
          <div>
            <strong className="block text-emergency mb-1">National Dementia Helpline</strong>
            <p className="text-sm">Call the Dementia India Alliance (DIA) toll-free helpline at <strong>1800 202 4944</strong> for immediate guidance and support.</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {resources.map((resource) => (
          <div key={resource.id} className="card p-6 flex flex-col h-full">
            <div className="mb-4">
              <span className="tag mb-3">{resource.category}</span>
              <h3 className="text-xl font-bold text-text mb-2">{resource.name}</h3>
              <p className="text-text-muted text-sm leading-relaxed">{resource.description}</p>
            </div>
            
            <div className="mt-auto pt-4 border-t border-border-light space-y-3">
              <div className="flex items-center gap-3 text-sm text-text-subtle">
                <MapPin className="w-4 h-4 text-primary" />
                {resource.location}
              </div>
              <div className="flex items-center gap-3 text-sm text-text-subtle">
                <Phone className="w-4 h-4 text-primary" />
                <a href={`tel:${resource.phone.replace(/[^0-9+]/g, '')}`} className="hover:text-primary transition-colors">
                  {resource.phone}
                </a>
              </div>
              <div className="flex items-center gap-3 text-sm text-text-subtle">
                <Globe className="w-4 h-4 text-primary" />
                <a href={resource.website} target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors underline underline-offset-2">
                  Visit Website
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
