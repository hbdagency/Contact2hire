'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ArrowRight, Code, Landmark, Stethoscope, Factory, Cpu } from '@/components/ui/Icon'

const sectors = [
  {
    id: 'technology',
    title: 'Technology',
    subtitle: 'IT & Software',
    description: 'Software engineers, data scientists, and tech leaders for EMEA innovation hubs.',
    roles: ['Software Engineers', 'Data Scientists', 'Product Managers', 'DevOps Engineers'],
    stats: { placements: 450, clients: 85 },
    size: 'large',
    icon: Code,
    featured: true,
  },
  {
    id: 'finance',
    title: 'Finance',
    subtitle: 'Banking & Fintech',
    description: 'Financial experts for London, Dubai, and European financial centers.',
    roles: ['Financial Analysts', 'Risk Managers', 'CFOs', 'Investment Bankers'],
    stats: { placements: 280, clients: 52 },
    size: 'small',
    icon: Landmark,
    featured: false,
  },
  {
    id: 'healthcare',
    title: 'Healthcare',
    subtitle: 'Medical & Pharma',
    description: 'Medical professionals and healthcare administrators.',
    roles: ['Doctors', 'Nurses', 'Healthcare Admin', 'Pharma Execs'],
    stats: { placements: 220, clients: 38 },
    size: 'small',
    icon: Stethoscope,
    featured: false,
  },
  {
    id: 'manufacturing',
    title: 'Manufacturing',
    subtitle: 'Industrial & Operations',
    description: 'Operations leaders for industrial sectors across EMEA.',
    roles: ['Plant Managers', 'Supply Chain', 'Quality Heads', 'COOs'],
    stats: { placements: 180, clients: 42 },
    size: 'medium',
    icon: Factory,
    featured: false,
  },
  {
    id: 'energy',
    title: 'Energy & Oil',
    subtitle: 'Oil, Gas & Renewables',
    description: 'Energy sector specialists for Middle East and European markets.',
    roles: ['Petroleum Engineers', 'Project Managers', 'HSE Officers', 'Energy Analysts'],
    stats: { placements: 370, clients: 83 },
    size: 'wide',
    icon: Cpu,
    featured: false,
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
            <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-brand-violet/10 text-brand-violet text-xs font-bold uppercase tracking-widest rounded-full">
              Industries We Serve
            </span>
            <h2 className="font-display text-fluid-4xl font-extrabold text-gray-900 mt-4">
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
                  group relative overflow-hidden rounded-[20px]
                  transition-all duration-500 hover:shadow-large hover:-translate-y-1
                  ${sector.size === 'large' ? 'md:col-span-2 md:row-span-2' : ''}
                  ${sector.size === 'wide' ? 'md:col-span-2' : ''}
                  ${sector.size === 'medium' ? 'md:col-span-1 md:row-span-2' : ''}
                  ${sector.featured ? 'bg-brand-violet' : 'bg-surface-dark-card'}
                `}
                onMouseEnter={() => setHoveredSector(sector.id)}
                onMouseLeave={() => setHoveredSector(null)}
              >
                {/* Content */}
                <div className={`
                  relative z-10 p-6 lg:p-8 flex flex-col
                  ${sector.size === 'large' ? 'min-h-[400px] lg:min-h-[500px]' : 'min-h-[200px]'}
                  ${sector.size === 'medium' ? 'min-h-[300px]' : ''}
                `}>
                  {/* Top row - icon + arrow */}
                  <div className="flex items-start justify-between mb-6">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                      sector.featured 
                        ? 'bg-white/20 backdrop-blur-sm border border-white/30' 
                        : 'bg-brand-lime/10 border border-brand-lime/20'
                    }`}>
                      <IconComponent className={`w-6 h-6 ${sector.featured ? 'text-white' : 'text-brand-lime'}`} />
                    </div>
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${
                      isHovered 
                        ? 'bg-brand-lime text-gray-900 rotate-45' 
                        : sector.featured 
                          ? 'bg-white/20 text-white' 
                          : 'bg-white/10 text-white'
                    }`}>
                      <ArrowRight className="w-5 h-5" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="mt-auto">
                    <span className={`text-xs uppercase tracking-widest font-bold ${
                      sector.featured ? 'text-white/70' : 'text-brand-lime'
                    }`}>
                      {sector.subtitle}
                    </span>
                    <h3 className={`font-display text-fluid-2xl font-extrabold mt-2 mb-3 ${
                      sector.featured ? 'text-white' : 'text-white'
                    }`}>
                      {sector.title}
                    </h3>
                    <p className={`text-sm leading-relaxed mb-4 ${
                      sector.featured ? 'text-white/80' : 'text-gray-400'
                    }`}>
                      {sector.description}
                    </p>

                    {/* Stats */}
                    <div className="flex items-center gap-3">
                      <div className={`px-3 py-1.5 rounded-full ${
                        sector.featured ? 'bg-brand-lime text-gray-900' : 'bg-brand-lime/10 text-brand-lime'
                      }`}>
                        <span className="font-bold text-sm">{sector.stats.placements}+</span>
                        <span className="text-xs ml-1 opacity-70">placements</span>
                      </div>
                      <div className={`px-3 py-1.5 rounded-full border ${
                        sector.featured ? 'border-white/30 text-white' : 'border-white/20 text-white'
                      }`}>
                        <span className="font-bold text-sm">{sector.stats.clients}+</span>
                        <span className="text-xs ml-1 opacity-70">clients</span>
                      </div>
                    </div>

                    {/* Roles - show on hover */}
                    <div className={`
                      flex flex-wrap gap-2 mt-4 transition-all duration-500
                      ${isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}
                    `}>
                      {sector.roles.slice(0, 3).map((role) => (
                        <span
                          key={role}
                          className={`text-xs px-3 py-1.5 rounded-full ${
                            sector.featured 
                              ? 'bg-white/10 text-white border border-white/20' 
                              : 'bg-white/10 text-white border border-white/20'
                          }`}
                        >
                          {role}
                        </span>
                      ))}
                    </div>
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