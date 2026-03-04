'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'
import Button from '@/components/ui/Button'
import { ArrowRight, Briefcase } from '@/components/ui/Icon'
import JobTicker from './JobTicker'

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Simple entrance animation
    const hero = heroRef.current
    if (!hero) return

    const elements = hero.querySelectorAll('.animate-on-load')
    elements.forEach((el, index) => {
      ;(el as HTMLElement).style.opacity = '0'
      ;(el as HTMLElement).style.transform = 'translateY(30px)'
      
      setTimeout(() => {
        ;(el as HTMLElement).style.transition = 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)'
        ;(el as HTMLElement).style.opacity = '1'
        ;(el as HTMLElement).style.transform = 'translateY(0)'
      }, 200 + index * 150)
    })
  }, [])

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-cream via-cream to-cream-dark" />
      
      {/* Decorative elements */}
      <div className="absolute top-1/4 left-10 w-64 h-64 bg-coral/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-sky/10 rounded-full blur-3xl" />
      
      {/* Hero image - professional handshake/business */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1/2 h-3/4 opacity-10 hidden lg:block">
        <Image
          src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=1200&q=80"
          alt="Professional business meeting"
          fill
          className="object-cover"
          priority
        />
      </div>
      
      {/* Floating decorative shapes */}
      <div className="absolute top-32 right-1/4 w-4 h-4 bg-coral rounded-full animate-float" />
      <div className="absolute bottom-40 left-1/4 w-6 h-6 bg-coral-dark/50 rounded-full animate-float delay-300" />
      <div className="absolute top-1/2 right-20 w-3 h-3 bg-sky rounded-full animate-float delay-500" />

      <div className="container relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Badge */}
          <div className="animate-on-load mb-8">
            <span className="badge">Since 2019 • India to EMEA</span>
          </div>

          {/* Main heading */}
          <h1 className="animate-on-load font-display text-fluid-hero font-bold text-charcoal leading-[0.9] mb-6">
            <span className="block">Connecting</span>
            <span className="block text-gradient">Talents</span>
          </h1>

          {/* Subheading */}
          <p className="animate-on-load text-fluid-xl text-gray-500 max-w-2xl mx-auto mb-12 leading-relaxed">
            Bridging India's finest talent with EMEA opportunities. 
            Your trusted partner for precision hiring across continents.
          </p>

          {/* CTA Buttons */}
          <div className="animate-on-load flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              href="/contact?type=employer"
              variant="primary"
              size="lg"
              icon={<ArrowRight className="w-5 h-5" />}
            >
              Hire Talent
            </Button>
            <Button
              href="/contact?type=candidate"
              variant="secondary"
              size="lg"
              icon={<Briefcase className="w-5 h-5" />}
            >
              Find a Job
            </Button>
          </div>
        </div>
      </div>

      {/* Job Ticker - Fixed at bottom */}
      <div className="absolute bottom-0 left-0 right-0 z-20">
        <JobTicker />
      </div>

      {/* Scroll indicator */}
      <div className="animate-on-load absolute bottom-24 left-1/2 -translate-x-1/2">
        <div className="flex flex-col items-center gap-2 text-gray-400">
          <span className="text-xs uppercase tracking-widest">Scroll</span>
          <div className="w-6 h-10 border-2 border-gray-300 rounded-full flex justify-center pt-2">
            <div className="w-1.5 h-3 bg-gray-400 rounded-full animate-bounce" />
          </div>
        </div>
      </div>
    </section>
  )
}