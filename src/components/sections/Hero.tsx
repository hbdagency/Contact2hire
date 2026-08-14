'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'
import Button from '@/components/ui/Button'
import { ArrowRight, Briefcase, Users, Building2, Award, TrendingUp } from '@/components/ui/Icon'
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
      className="relative min-h-screen flex items-center overflow-hidden pt-24 pb-16"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-surface-light" />
      
      {/* Decorative grid pattern */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(to right, #0E0F11 1px, transparent 1px), linear-gradient(to bottom, #0E0F11 1px, transparent 1px)`,
          backgroundSize: '80px 80px'
        }}
      />

      <div className="container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column - Content */}
          <div>
            {/* Eyebrow badge */}
            <div className="animate-on-load mb-6">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-brand-violet/10 text-brand-violet text-xs font-bold uppercase tracking-widest rounded-full">
                <span className="w-2 h-2 bg-brand-lime rounded-full" />
                India → EMEA Recruitment
              </span>
            </div>

            {/* Main heading */}
            <h1 className="animate-on-load font-display text-fluid-hero font-extrabold text-gray-900 leading-[1.08] tracking-tight mb-6">
              CONNECTING
              <br />
              INDIA'S FINEST
              <br />
              <span className="relative inline-block">
                <span className="relative z-10">TALENT</span>
                <span className="absolute inset-x-0 bottom-1 h-4 bg-brand-lime -z-0" />
              </span>
            </h1>

            {/* Subheading */}
            <p className="animate-on-load text-fluid-lg text-gray-500 max-w-xl mb-8 leading-relaxed">
              Bridging India's exceptional talent pool with EMEA's most ambitious companies. 
              Precision hiring across continents — every time.
            </p>

            {/* CTA Buttons */}
            <div className="animate-on-load flex flex-col sm:flex-row items-start gap-4 mb-10">
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

            {/* Stats row */}
            <div className="animate-on-load grid grid-cols-2 sm:grid-cols-4 gap-6">
              <div>
                <p className="font-display text-3xl font-extrabold text-brand-violet">1500+</p>
                <p className="text-xs text-gray-500 font-medium uppercase tracking-wider mt-1">Placements</p>
              </div>
              <div>
                <p className="font-display text-3xl font-extrabold text-brand-violet">300+</p>
                <p className="text-xs text-gray-500 font-medium uppercase tracking-wider mt-1">Clients</p>
              </div>
              <div>
                <p className="font-display text-3xl font-extrabold text-brand-violet">5+</p>
                <p className="text-xs text-gray-500 font-medium uppercase tracking-wider mt-1">Years</p>
              </div>
              <div>
                <p className="font-display text-3xl font-extrabold text-brand-violet">98%</p>
                <p className="text-xs text-gray-500 font-medium uppercase tracking-wider mt-1">Retention</p>
              </div>
            </div>
          </div>

          {/* Right Column - Visual */}
          <div className="animate-on-load relative hidden lg:block">
            {/* Main image card */}
            <div className="relative rounded-[28px] overflow-hidden shadow-large">
              <div className="aspect-[4/5] relative">
                <Image
                  src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=1200&q=80"
                  alt="Professional business team"
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/40 to-transparent" />
              </div>
              
              {/* Bottom info card */}
              <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur rounded-2xl p-4 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-brand-violet flex items-center justify-center">
                    <Users className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-sm text-gray-900">Trusted by 300+ Companies</p>
                    <p className="text-xs text-gray-500">Across Tech, Finance & Healthcare</p>
                  </div>
                </div>
                <div className="flex -space-x-2">
                  <div className="w-8 h-8 rounded-full bg-brand-lime border-2 border-white flex items-center justify-center">
                    <Building2 className="w-4 h-4 text-gray-900" />
                  </div>
                  <div className="w-8 h-8 rounded-full bg-brand-violet border-2 border-white flex items-center justify-center">
                    <Award className="w-4 h-4 text-white" />
                  </div>
                  <div className="w-8 h-8 rounded-full bg-gray-900 border-2 border-white flex items-center justify-center">
                    <TrendingUp className="w-4 h-4 text-brand-lime" />
                  </div>
                </div>
              </div>
            </div>

            {/* Rotating circular badge */}
            <div className="absolute -top-6 -right-6 w-28 h-28 rotating-badge">
              <svg viewBox="0 0 100 100" className="w-full h-full">
                <defs>
                  <path id="circlePath" d="M 50,50 m -37,0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" />
                </defs>
                <circle cx="50" cy="50" r="50" fill="#D2FF00" />
                <text fill="#0E0F11" fontSize="10" fontWeight="700" letterSpacing="1">
                  <textPath href="#circlePath">
                    HIRE TALENT • LET'S GET STARTED •
                  </textPath>
                </text>
                <circle cx="50" cy="50" r="18" fill="#0E0F11" />
                <path d="M 44 50 L 56 50 M 50 44 L 50 56" stroke="#D2FF00" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </div>

            {/* Floating lime badge */}
            <div className="absolute -bottom-4 -left-4 bg-brand-lime rounded-2xl px-4 py-3 shadow-medium">
              <p className="font-display font-extrabold text-gray-900 text-sm">98% Client</p>
              <p className="font-display font-extrabold text-gray-900 text-sm">Retention Rate</p>
            </div>
          </div>
        </div>
      </div>

      {/* Job Ticker - Fixed at bottom */}
      <div className="absolute bottom-0 left-0 right-0 z-20">
        <JobTicker />
      </div>
    </section>
  )
}