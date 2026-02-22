'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, Code, Landmark, Stethoscope, Factory, Cpu } from '@/components/ui/Icon'

const sectors = [
  {
    id: 'technology',
    title: 'Technology',
    subtitle: 'IT & Software',
    description: 'Software engineers, data scientists, and tech leaders for EMEA innovation hubs.',
    image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80',
    roles: ['Software Engineers', 'Data Scientists', 'Product Managers', 'DevOps Engineers'],
    stats: { placements: 450, clients: 85 },
    size: 'large',
    icon: Code,
    accentColor: 'from-blue-500/30 to-purple-500/30',
  },
  {
    id: 'finance',
    title: 'Finance',
    subtitle: 'Banking & Fintech',
    description: 'Financial experts for London, Dubai, and European financial centers.',
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=800&q=80',
    roles: ['Financial Analysts', 'Risk Managers', 'CFOs', 'Investment Bankers'],
    stats: { placements: 280, clients: 52 },
    size: 'small',
    icon: Landmark,
    accentColor: 'from-emerald-500/30 to-teal-500/30',
  },
  {
    id: 'healthcare',
    title: 'Healthcare',
    subtitle: 'Medical & Pharma',
    description: 'Medical professionals and healthcare administrators.',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80',
    roles: ['Doctors', 'Nurses', 'Healthcare Admin', 'Pharma Execs'],
    stats: { placements: 220, clients: 38 },
    size: 'small',
    icon: Stethoscope,
    accentColor: 'from-rose-500/30 to-pink-500/30',
  },
  {
    id: 'manufacturing',
    title: 'Manufacturing',
    subtitle: 'Industrial & Operations',
    description: 'Operations leaders for industrial sectors across EMEA.',
    image: 'https://images.unsplash.com/photo-1565043589221-1a6fd9ae45c7?auto=format&fit=crop&w=800&q=80',
    roles: ['Plant Managers', 'Supply Chain', 'Quality Heads', 'COOs'],
    stats: { placements: 180, clients: 42 },
    size: 'medium',
    icon: Factory,
    accentColor: 'from-amber-500/30 to-orange-500/30',
  },
  {
    id: 'energy',
    title: 'Energy & Oil',
    subtitle: 'Oil, Gas & Renewables',
    description: 'Energy sector specialists for Middle East and European markets.',
    image: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=800&q=80',
    roles: ['Petroleum Engineers', 'Project Managers', 'HSE Officers', 'Energy Analysts'],
    stats: { placements: 370, clients: 83 },
    size: 'wide',
    icon: Cpu,
    accentColor: 'from-yellow-500/30 to-amber-500/30',
  },
]

export default function SectorGrid() {
  const [hoveredSector, setHoveredSector] = useState<string | null>(null)

  return (
    <section className="section overflow-hidden">
      <div className="container">
        {/* Section header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <div>
            <span className="text-emerald text-sm uppercase tracking-widest font-medium">
              Industries We Serve
            </span>
            <h2 className="font-display text-fluid-4xl font-bold text-brown mt-4">
              Featured Sectors
            </h2>
          </div>
          <Link
            href="/services"
            className="btn-secondary text-sm"
          >
            View All Services
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          {sectors.map((sector) => {
            const isHovered = hoveredSector === sector.id
            const IconComponent = sector.icon
            
            return (
              <Link
                key={sector.id}
                href={`/services#${sector.id}`}
                className={`
                  group relative overflow-hidden rounded-2xl
                  transition-all duration-500 hover:shadow-large hover:-translate-y-1
                  ${sector.size === 'large' ? 'md:col-span-2 md:row-span-2' : ''}
                  ${sector.size === 'wide' ? 'md:col-span-2' : ''}
                  ${sector.size === 'medium' ? 'md:col-span-1 md:row-span-2' : ''}
                `}
                onMouseEnter={() => setHoveredSector(sector.id)}
                onMouseLeave={() => setHoveredSector(null)}
              >
                {/* Background image - always visible */}
                <div className="absolute inset-0">
                  <Image
                    src={sector.image}
                    alt={sector.title}
                    fill
                    className={`object-cover transition-all duration-700 ${isHovered ? 'scale-110' : 'scale-100'}`}
                  />
                  {/* Gradient overlay for better text readability */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${sector.accentColor}`} />
                  <div className="absolute inset-0 bg-gradient-to-t from-brown/90 via-brown/60 to-brown/30" />
                </div>
                
                {/* Hover gradient overlay */}
                <div
                  className={`
                    absolute inset-0 bg-gradient-to-t from-brown/95 via-brown/80 to-brown/50
                    transition-opacity duration-500
                    ${isHovered ? 'opacity-100' : 'opacity-0'}
                  `}
                />

                {/* Content */}
                <div className={`
                  relative z-10 p-6 lg:p-8 flex flex-col
                  ${sector.size === 'large' ? 'min-h-[400px] lg:min-h-[500px]' : 'min-h-[200px]'}
                  ${sector.size === 'medium' ? 'min-h-[300px]' : ''}
                `}>
                  {/* Default state - always visible */}
                  <div className={`
                    transition-all duration-500
                    ${isHovered ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'}
                  `}>
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-12 h-12 rounded-xl bg-sun/90 flex items-center justify-center shadow-medium">
                        <IconComponent className="w-6 h-6 text-brown" />
                      </div>
                      <div className="h-8 w-px bg-cream/30" />
                      <span className="text-xs uppercase tracking-widest text-cream/80 font-medium">
                        {sector.subtitle}
                      </span>
                    </div>
                    <h3 className="font-display text-fluid-2xl font-bold text-cream mt-4 drop-shadow-lg">
                      {sector.title}
                    </h3>
                    <p className="text-cream/80 text-sm mt-2 line-clamp-2 max-w-xs">
                      {sector.description}
                    </p>
                    <div className="flex items-center gap-4 mt-4">
                      <div className="bg-sun/90 backdrop-blur-sm px-3 py-1.5 rounded-full">
                        <span className="text-brown font-bold text-sm">{sector.stats.placements}+</span>
                        <span className="text-brown/70 text-xs ml-1">placements</span>
                      </div>
                      <div className="bg-cream/20 backdrop-blur-sm px-3 py-1.5 rounded-full border border-cream/30">
                        <span className="text-cream font-bold text-sm">{sector.stats.clients}+</span>
                        <span className="text-cream/70 text-xs ml-1">clients</span>
                      </div>
                    </div>
                  </div>

                  {/* Hover state */}
                  <div className={`
                    absolute inset-0 p-6 lg:p-8 flex flex-col justify-end
                    transition-all duration-500
                    ${isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
                  `}>
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-12 h-12 rounded-xl bg-sun/20 backdrop-blur-sm flex items-center justify-center border border-sun/30">
                        <IconComponent className="w-6 h-6 text-sun" />
                      </div>
                    </div>
                    <span className="text-xs uppercase tracking-widest text-sun font-medium mb-2">
                      {sector.subtitle}
                    </span>
                    <h3 className="font-display text-fluid-2xl font-bold text-cream mb-3">
                      {sector.title}
                    </h3>
                    <p className="text-cream/80 text-sm mb-4 line-clamp-2">
                      {sector.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {sector.roles.slice(0, 3).map((role) => (
                        <span
                          key={role}
                          className="text-xs px-3 py-1.5 bg-cream/10 backdrop-blur-sm text-cream rounded-full border border-cream/20"
                        >
                          {role}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Arrow icon */}
                  <div className={`
                    absolute bottom-6 right-6 w-10 h-10 rounded-full bg-sun
                    flex items-center justify-center shadow-large
                    transition-all duration-500
                    ${isHovered ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'}
                  `}>
                    <ArrowRight className="w-5 h-5 text-brown" />
                  </div>
                </div>
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}