'use client'

import { useRef, useEffect } from 'react'

// Placeholder client logos - replace with actual client logos
const clients = [
  { name: 'TechCorp London', logo: '/images/clients/client1.svg' },
  { name: 'Dubai Holdings', logo: '/images/clients/client2.svg' },
  { name: 'European Bank', logo: '/images/clients/client3.svg' },
  { name: 'Saudi Aramco', logo: '/images/clients/client4.svg' },
  { name: 'German Auto', logo: '/images/clients/client5.svg' },
  { name: 'Qatar Airways', logo: '/images/clients/client6.svg' },
  { name: 'London Fintech', logo: '/images/clients/client7.svg' },
  { name: 'Abu Dhabi Investment', logo: '/images/clients/client8.svg' },
]

export default function ClientMarquee() {
  const marqueeRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Clone marquee content for seamless loop
    const marquee = marqueeRef.current
    if (!marquee) return

    const content = marquee.querySelector('.marquee-content')
    if (!content) return

    const clone = content.cloneNode(true)
    marquee.appendChild(clone)
  }, [])

  return (
    <section className="py-16 bg-cream-dark overflow-hidden">
      <div className="container mb-8">
        <p className="text-center text-gray-500 text-sm uppercase tracking-widest font-medium">
          Trusted by leading companies across EMEA
        </p>
      </div>

      <div
        ref={marqueeRef}
        className="flex animate-marquee"
        style={{
          animation: 'marquee 30s linear infinite',
        }}
      >
        <div className="marquee-content flex items-center gap-16 px-8">
          {clients.map((client, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-32 h-12 flex items-center justify-center opacity-50 hover:opacity-100 transition-opacity grayscale hover:grayscale-0"
            >
              {/* Placeholder logo - replace with actual Image component */}
              <div className="text-brown font-display text-lg font-bold whitespace-nowrap">
                {client.name}
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </section>
  )
}