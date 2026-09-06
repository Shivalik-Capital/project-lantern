import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/tracker/', '/dashboard/'],
    },
    sitemap: 'https://project-lantern-teal.vercel.app/sitemap.xml',
  }
}
