import type { Metadata } from 'next'
import { Space_Grotesk, Inter } from 'next/font/google'
import { SITE_URL } from '@/lib/site'
import TimezoneSidebar from '@/components/layout/TimezoneSidebar'
import FloatingActionBadge from '@/components/ui/FloatingActionBadge'
import './globals.css'

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'Contact to Hire | India-EMEA Recruitment Agency',
    template: '%s | Contact to Hire',
  },
  description: "Bridging India's finest talent with EMEA opportunities. 1500+ placements, 300+ clients across Tech, Finance, Healthcare. Your trusted recruitment partner for India-Europe-Middle East hiring.",
  keywords: ['recruitment agency', 'India EMEA hiring', 'executive search', 'RPO', 'talent acquisition', 'India to Europe jobs', 'Dubai jobs', 'UK jobs from India'],
  authors: [{ name: 'Contact to Hire' }],
  creator: 'Contact to Hire',
  publisher: 'Contact to Hire',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: SITE_URL,
    siteName: 'Contact to Hire',
    title: 'Contact to Hire | India-EMEA Recruitment Agency',
    description: "Bridging India's finest talent with EMEA opportunities. 1500+ placements, 300+ clients.",
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Contact to Hire - Connecting Talents',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact to Hire | India-EMEA Recruitment Agency',
    description: "Bridging India's finest talent with EMEA opportunities.",
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  // Add real verification tokens here after claiming the site in Search Console
  // verification: {
  //   google: '...',
  //   bing: '...',
  // },
}

// JSON-LD Schema
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'EmploymentAgency',
  name: 'Contact to Hire',
  alternateName: 'Contact2Hire',
  url: SITE_URL,
  logo: `${SITE_URL}/logo.png`,
  description: "Bridging India's finest talent with EMEA opportunities. Executive search and RPO services.",
  foundingDate: '2019',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'B/105, Gokul Pratham, Nr. Tapovan Circle, Chandkheda',
    addressLocality: 'Ahmedabad',
    addressRegion: 'Gujarat',
    postalCode: '382424',
    addressCountry: 'IN',
  },
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+91-9601570167',
    contactType: 'customer service',
    email: 'info@contacttohire.in',
    availableLanguage: ['English', 'Hindi'],
  },
  areaServed: [
    {
      '@type': 'Country',
      name: 'India',
    },
    {
      '@type': 'Country',
      name: 'United Arab Emirates',
    },
    {
      '@type': 'Country',
      name: 'United Kingdom',
    },
    {
      '@type': 'Country',
      name: 'Germany',
    },
    {
      '@type': 'Country',
      name: 'Saudi Arabia',
    },
  ],
  serviceType: ['Executive Search', 'RPO', 'Talent Acquisition', 'Recruitment Process Outsourcing'],
  sameAs: [
    'https://www.linkedin.com/company/contacttohire',
    'https://www.instagram.com/contacttohire',
  ],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${inter.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-surface-light text-gray-900 antialiased">
        {/* Main content */}
        {children}
        {/* World time sidebar (hover/tap the left edge clock) */}
        <TimezoneSidebar />
        {/* Floating rotating badge — label/action adapts to the section in view */}
        <FloatingActionBadge />
      </body>
    </html>
  )
}
