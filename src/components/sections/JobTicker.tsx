'use client'

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { Briefcase, MapPin, ArrowRight } from '@/components/ui/Icon'

const jobOpenings = [
  { title: 'PET Shift Incharge', location: 'Saudi Arabia', type: 'Manufacturing', salary: 'SAR 8,000-12,000/mo' },
  { title: 'Sales Executive for GAS GENERATORS', location: 'UAE', type: 'Sales', salary: 'AED 5,000-8,000/mo' },
  { title: 'PET Maintenance Executive', location: 'Saudi Arabia', type: 'Engineering', salary: 'SAR 10,000-15,000/mo' },
  { title: 'Business Manager', location: 'Dubai', type: 'Management', salary: 'AED 15,000-25,000/mo' },
  { title: 'Mechanical Engineer', location: 'Germany', type: 'Engineering', salary: '€50,000-70,000/yr' },
  { title: 'Network Architect', location: 'UK', type: 'Technology', salary: '£60,000-90,000/yr' },
  { title: 'Business Development Executive', location: 'Qatar', type: 'Sales', salary: 'QAR 8,000-12,000/mo' },
  { title: 'Human Resource Manager', location: 'UAE', type: 'HR', salary: 'AED 12,000-18,000/mo' },
  { title: 'Welder (6G Certified)', location: 'Saudi Arabia', type: 'Skilled Trade', salary: 'SAR 4,000-6,000/mo' },
  { title: 'Electrician', location: 'Dubai', type: 'Skilled Trade', salary: 'AED 3,000-5,000/mo' },
  { title: 'Heavy Vehicle Driver', location: 'Qatar', type: 'Skilled Trade', salary: 'QAR 3,500-5,000/mo' },
  { title: 'HVAC Technician', location: 'Saudi Arabia', type: 'Skilled Trade', salary: 'SAR 4,500-7,000/mo' },
  { title: 'Scaffold Erector', location: 'UAE', type: 'Skilled Trade', salary: 'AED 2,500-4,000/mo' },
  { title: 'Crane Operator', location: 'Qatar', type: 'Skilled Trade', salary: 'QAR 5,000-8,000/mo' },
  { title: 'Safety Officer', location: 'Saudi Arabia', type: 'HSE', salary: 'SAR 6,000-10,000/mo' },
  { title: 'Civil Supervisor', location: 'Dubai', type: 'Construction', salary: 'AED 6,000-10,000/mo' },
]

export default function JobTicker() {
  const tickerRef = useRef<HTMLDivElement>(null)
  const [isPaused, setIsPaused] = useState(false)

  return (
    <div
      className="bg-charcoal text-cream py-4 overflow-hidden relative"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Gradient overlays for smooth edges */}
      <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-charcoal to-transparent z-10" />
      <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-charcoal to-transparent z-10" />
      
      {/* Ticker header */}
      <div className="absolute left-4 top-1/2 -translate-y-1/2 z-20 flex items-center gap-2 bg-coral text-white px-4 py-2 rounded-full">
        <Briefcase className="w-4 h-4" />
        <span className="text-sm font-bold whitespace-nowrap">Current Openings</span>
      </div>
      
      {/* Scrolling ticker */}
      <div 
        ref={tickerRef}
        className={`flex gap-6 animate-ticker ${isPaused ? 'animation-paused' : ''}`}
        style={{ 
          animationPlayState: isPaused ? 'paused' : 'running',
          paddingLeft: '200px'
        }}
      >
        {/* Duplicate items for seamless loop */}
        {[...jobOpenings, ...jobOpenings].map((job, index) => (
          <Link
            key={index}
            href="/contact?type=candidate"
            className="flex items-center gap-3 bg-cream/10 hover:bg-cream/20 px-4 py-2 rounded-full transition-colors whitespace-nowrap group"
          >
            <span className="font-medium text-cream">{job.title}</span>
            <ArrowRight className="w-4 h-4 text-coral opacity-0 group-hover:opacity-100 transition-opacity" />
          </Link>
        ))}
      </div>

      <style jsx>{`
        @keyframes ticker {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-ticker {
          animation: ticker 60s linear infinite;
        }
        .animation-paused {
          animation-play-state: paused !important;
        }
      `}</style>
    </div>
  )
}