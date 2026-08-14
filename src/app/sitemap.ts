import type { MetadataRoute } from 'next'
import { SITE_URL } from '@/lib/site'

// Insight article slugs that resolve to a page — kept in sync with
// generateStaticParams in src/app/insights/[slug]/page.tsx
const insightArticles = [
  { slug: 'emea-tech-hiring-2024', lastModified: '2024-01-15' },
  { slug: 'dubai-healthcare-guide', lastModified: '2024-01-10' },
  { slug: 'uk-skilled-worker-visa', lastModified: '2024-01-05' },
]

// Service detail pages — kept in sync with src/data/services.ts
const serviceSlugs = ['market-research', 'executive-search', 'branding-strategies']

// Case study detail pages — kept in sync with src/data/caseStudies.ts
const caseStudySlugs = [
  'london-tech',
  'dubai-conglomerate',
  'frankfurt-finance',
  'nairobi-fintech',
  'riyadh-healthcare',
]

// Content refresh date for the evergreen static pages
const SITE_LAST_MODIFIED = '2026-08-14'

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: SITE_URL,
      lastModified: SITE_LAST_MODIFIED,
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${SITE_URL}/services`,
      lastModified: SITE_LAST_MODIFIED,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/about`,
      lastModified: SITE_LAST_MODIFIED,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/case-studies`,
      lastModified: SITE_LAST_MODIFIED,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/insights`,
      lastModified: SITE_LAST_MODIFIED,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/contact`,
      lastModified: SITE_LAST_MODIFIED,
      changeFrequency: 'yearly',
      priority: 0.7,
    },
    {
      url: `${SITE_URL}/privacy`,
      lastModified: SITE_LAST_MODIFIED,
      changeFrequency: 'yearly',
      priority: 0.3,
    },
  ]

  const insightPages: MetadataRoute.Sitemap = insightArticles.map((article) => ({
    url: `${SITE_URL}/insights/${article.slug}`,
    lastModified: article.lastModified,
    changeFrequency: 'monthly',
    priority: 0.7,
  }))

  const servicePages: MetadataRoute.Sitemap = serviceSlugs.map((slug) => ({
    url: `${SITE_URL}/services/${slug}`,
    changeFrequency: 'monthly',
    priority: 0.8,
  }))

  const caseStudyPages: MetadataRoute.Sitemap = caseStudySlugs.map((slug) => ({
    url: `${SITE_URL}/case-studies/${slug}`,
    changeFrequency: 'monthly',
    priority: 0.8,
  }))

  return [...staticPages, ...insightPages, ...servicePages, ...caseStudyPages]
}
