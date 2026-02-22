'use client'

import { useEffect, useRef } from 'react'
import Counter from '@/components/ui/Counter'

const metrics = [
  { end: 1500, suffix: '+', label: 'Placements' },
  { end: 300, suffix: '+', label: 'Global Clients' },
  { end: 5, suffix: '+', label: 'Years Experience' },
  { end: 98, suffix: '%', label: 'Client Retention' },
]

export default function Metrics() {
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed')
        }
      },
      { threshold: 0.2 }
    )

    const section = sectionRef.current
    if (section) {
      observer.observe(section)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="section bg-brown text-cream relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="container relative z-10">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="text-sun text-sm uppercase tracking-widest font-medium">
            Our Impact
          </span>
          <h2 className="font-display text-fluid-4xl font-bold mt-4">
            Numbers That Speak
          </h2>
        </div>

        {/* Metrics grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {metrics.map((metric, index) => (
            <div
              key={metric.label}
              className="relative"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Divider line for larger screens */}
              {index > 0 && (
                <div className="hidden lg:block absolute left-0 top-1/2 -translate-y-1/2 w-px h-20 bg-cream/20" />
              )}
              
              <Counter
                end={metric.end}
                suffix={metric.suffix}
                label={metric.label}
                className="reveal-item"
              />
            </div>
          ))}
        </div>

        {/* Bottom decorative line */}
        <div className="mt-16 flex justify-center">
          <div className="w-24 h-1 bg-gradient-to-r from-sun via-terracotta to-sun rounded-full" />
        </div>
      </div>
    </section>
  )
}