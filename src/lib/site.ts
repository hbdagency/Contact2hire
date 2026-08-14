/**
 * Canonical site origin. Override with NEXT_PUBLIC_SITE_URL for preview/branch
 * deployments (Vercel sets it automatically); defaults to the production domain.
 */
export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/+$/, '') ?? 'https://contacttohire.in'
