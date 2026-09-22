import { MetadataRoute } from 'next'

const BASE = 'https://project-lantern-teal.vercel.app'

const ARTICLES = [
  { slug: 'what-is-alzheimers',  date: '2026-09-06' },
  { slug: 'what-is-dementia',    date: '2026-09-06' },
  { slug: 'early-signs',         date: '2026-09-06' },
  { slug: 'diagnosis',           date: '2026-09-06' },
  { slug: 'progression',         date: '2026-08-15' },
]

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages: MetadataRoute.Sitemap = [
    { url: BASE,                        lastModified: new Date(), changeFrequency: 'weekly',  priority: 1.0 },
    { url: `${BASE}/about`,             lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/clinical-board`,    lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/understand`,        lastModified: new Date(), changeFrequency: 'weekly',  priority: 0.9 },
    { url: `${BASE}/tracker`,           lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE}/find-help`,         lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE}/glossary`,          lastModified: new Date(), changeFrequency: 'monthly', priority: 0.6 },
    { url: `${BASE}/charter`,           lastModified: new Date(), changeFrequency: 'yearly',  priority: 0.5 },
    { url: `${BASE}/methodology`,       lastModified: new Date(), changeFrequency: 'yearly',  priority: 0.5 },
    { url: `${BASE}/dashboard`,         lastModified: new Date(), changeFrequency: 'monthly', priority: 0.6 },
  ]

  const articlePages: MetadataRoute.Sitemap = ARTICLES.map(a => ({
    url: `${BASE}/understand/${a.slug}`,
    lastModified: new Date(a.date),
    changeFrequency: 'monthly' as const,
    priority: 0.85,
  }))

  return [...staticPages, ...articlePages]
}
