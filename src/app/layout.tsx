import type { Metadata } from 'next'
import { Plus_Jakarta_Sans, Inter } from 'next/font/google'
import './globals.css'
import TimezoneSidebar from '@/components/layout/TimezoneSidebar'

const plusJakartaSans = Plus_Jakarta_Sans({
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
  metadataBase: new URL('https://contacttohire.in'),
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
    url: 'https://contacttohire.in',
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
  verification: {
    google: 'your-google-verification-code',
  },
}

// JSON-LD Schema
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'EmploymentAgency',
  name: 'Contact to Hire',
  alternateName: 'Contact2Hire',
  url: 'https://contacttohire.in',
  logo: 'https://contacttohire.in/logo.png',
  description: "Bridging India's finest talent with EMEA opportunities. Executive search and RPO services.",
  foundingDate: '2019',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'D-13, Dhusali Society, Talavadi, Nr-Hansol police chowky, Airport Road',
    addressLocality: 'Ahmedabad',
    addressRegion: 'Gujarat',
    postalCode: '382475',
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
    <html lang="en" className={`${plusJakartaSans.variable} ${inter.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-surface-light text-gray-900 antialiased">
        {/* Timezone Sidebar - appears on hover from left */}
        <TimezoneSidebar />
        
        {/* Main content */}
        {children}
      </body>
    </html>
  )
}
