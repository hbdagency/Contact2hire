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
    <section ref={sectionRef} className="section">
      <div className="container">
        <div className="bg-surface-dark rounded-[28px] px-8 py-16 lg:px-16 relative overflow-hidden">
          {/* Decorative lime accent */}
          <div className="absolute top-0 right-0 w-40 h-40 bg-brand-lime/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-40 h-40 bg-brand-violet/10 rounded-full blur-3xl" />

          <div className="relative z-10">
            {/* Section header */}
            <div className="text-center mb-14">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-brand-lime text-gray-900 text-xs font-bold uppercase tracking-widest rounded-full">
                Our Impact
              </span>
              <h2 className="font-display text-fluid-4xl font-extrabold text-white mt-6">
                Numbers That Speak
              </h2>
            </div>

            {/* Metrics grid */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
              {metrics.map((metric, index) => (
                <div
                  key={metric.label}
                  className="relative text-center"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {/* Divider line for larger screens */}
                  {index > 0 && (
                    <div className="hidden lg:block absolute left-0 top-1/2 -translate-y-1/2 w-px h-20 bg-white/10" />
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
            <div className="mt-14 flex justify-center">
              <div className="w-24 h-1 bg-gradient-to-r from-brand-lime via-brand-violet to-brand-lime rounded-full" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}