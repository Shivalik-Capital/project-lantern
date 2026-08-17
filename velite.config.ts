import { defineConfig, s } from 'velite'

const articles = {
  name: 'Article',
  pattern: 'articles/**/*.mdx',
  schema: s.object({
    title: s.string().max(120),
    description: s.string().max(300),
    section: s.enum(['understand', 'caregiving', 'diagnosed']),
    slug: s.path().transform((p) => p.replace(/^articles\//, '')),
    status: s.enum(['draft', 'under-review', 'reviewed']).default('draft'),
    author: s.string().optional(),
    medicalReviewer: s.string().optional(),
    reviewDate: s.isodate().optional(),
    lastUpdated: s.isodate().optional(),
    sources: s.array(
      s.object({ name: s.string(), url: s.string().url() })
    ).optional().default([]),
    tags: s.array(s.string()).optional().default([]),
    readingTime: s.number().optional(),
    body: s.mdx(),
  }),
}

export default defineConfig({
  root: 'content',
  output: {
    data: '.velite',
    assets: 'public/static',
    base: '/static/',
    name: '[name]-[hash:8].[ext]',
    clean: true,
  },
  collections: {
    articles,
  },
})
