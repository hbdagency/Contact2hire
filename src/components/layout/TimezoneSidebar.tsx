'use client'

import { useState, useEffect, useRef } from 'react'
import { Clock, X } from '@/components/ui/Icon'

const timeZones = [
  { city: 'Ahmedabad', country: 'India', zone: 'IST', offset: '+5:30', flag: '🇮🇳', region: 'HQ' },
  { city: 'Dubai', country: 'UAE', zone: 'GST', offset: '+4:00', flag: '🇦🇪', region: 'Middle East' },
  { city: 'Riyadh', country: 'Saudi Arabia', zone: 'AST', offset: '+3:00', flag: '🇸🇦', region: 'Middle East' },
  { city: 'Doha', country: 'Qatar', zone: 'AST', offset: '+3:00', flag: '🇶🇦', region: 'Middle East' },
  { city: 'London', country: 'UK', zone: 'GMT', offset: '+0:00', flag: '🇬🇧', region: 'Europe' },
  { city: 'Frankfurt', country: 'Germany', zone: 'CET', offset: '+1:00', flag: '🇩🇪', region: 'Europe' },
  { city: 'Amsterdam', country: 'Netherlands', zone: 'CET', offset: '+1:00', flag: '🇳🇱', region: 'Europe' },
  { city: 'Dublin', country: 'Ireland', zone: 'GMT', offset: '+0:00', flag: '🇮🇪', region: 'Europe' },
  { city: 'Johannesburg', country: 'South Africa', zone: 'SAST', offset: '+2:00', flag: '🇿🇦', region: 'Africa' },
  { city: 'Lagos', country: 'Nigeria', zone: 'WAT', offset: '+1:00', flag: '🇳🇬', region: 'Africa' },
  { city: 'Nairobi', country: 'Kenya', zone: 'EAT', offset: '+3:00', flag: '🇰🇪', region: 'Africa' },
]

export default function TimezoneSidebar() {
  const [isVisible, setIsVisible] = useState(false)
  const [currentTime, setCurrentTime] = useState(new Date())
  const sidebarRef = useRef<HTMLDivElement>(null)
  const timeoutRef = useRef<NodeJS.Timeout | null>(null)

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000)
    return () => clearInterval(timer)
  }, [])

  useEffect(() => {
    // On touch devices the emulated left-edge hover fires when tapping the
    // hamburger menu — so only open via the trigger button there.
    if (window.matchMedia('(pointer: coarse)').matches) {
      return
    }

    const handleMouseMove = (e: MouseEvent) => {
      const threshold = 50 // pixels from left edge
      
      if (e.clientX <= threshold) {
        setIsVisible(true)
        if (timeoutRef.current) {
          clearTimeout(timeoutRef.current)
        }
      } else if (sidebarRef.current && !sidebarRef.current.contains(e.target as Node)) {
        // Delay hiding to allow user to move to sidebar
        timeoutRef.current = setTimeout(() => {
          setIsVisible(false)
        }, 300)
      }
    }

    const handleMouseLeave = () => {
      timeoutRef.current = setTimeout(() => {
        setIsVisible(false)
      }, 300)
    }

    window.addEventListener('mousemove', handleMouseMove)
    document.addEventListener('mouseleave', handleMouseLeave)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('mouseleave', handleMouseLeave)
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
      }
    }
  }, [])

  const getTimeInZone = (offset: string) => {
    const [hours, minutes] = offset.split(':').map(Number)
    const sign = offset.startsWith('-') ? -1 : 1
    const utc = currentTime.getTime() + currentTime.getTimezoneOffset() * 60000
    const time = new Date(utc + sign * (hours * 3600000 + minutes * 60000))
    return time.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' })
  }

  const groupedTimezones = timeZones.reduce((acc, tz) => {
    if (!acc[tz.region]) {
      acc[tz.region] = []
    }
    acc[tz.region].push(tz)
    return acc
  }, {} as Record<string, typeof timeZones>)

  return (
    <div
      ref={sidebarRef}
      className={`fixed left-0 top-0 h-full w-72 bg-white/95 backdrop-blur-md shadow-2xl z-[60] 
        transform transition-transform duration-300 ease-in-out border-r border-gray-200
        ${isVisible ? 'translate-x-0' : '-translate-x-full'}`}
      onMouseEnter={() => {
        setIsVisible(true)
        if (timeoutRef.current) {
          clearTimeout(timeoutRef.current)
        }
      }}
      onMouseLeave={() => {
        timeoutRef.current = setTimeout(() => {
          setIsVisible(false)
        }, 300)
      }}
    >
      <div className="h-full overflow-y-auto py-6 px-4">
        {/* Header */}
        <div className="flex items-center gap-2 mb-6 pb-4 border-b border-gray-200">
          <Clock className="w-5 h-5 text-brand-violet" />
          <h3 className="font-display text-lg font-bold text-gray-900 flex-1">Global Time Zones</h3>
          <button
            onClick={() => setIsVisible(false)}
            className="w-8 h-8 rounded-full flex items-center justify-center text-gray-500 hover:bg-gray-100 hover:text-gray-900 transition-colors"
            aria-label="Close time zones panel"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Time zones by region */}
        {Object.entries(groupedTimezones).map(([region, zones]) => (
          <div key={region} className="mb-6">
            <h4 className="text-xs uppercase tracking-widest text-gray-400 font-medium mb-3">
              {region}
            </h4>
            <div className="space-y-3">
              {zones.map((tz) => (
                <div
                  key={tz.city}
                  className={`flex items-center justify-between p-3 rounded-xl transition-colors
                    ${tz.region === 'HQ' ? 'bg-brand-violet/10 border border-brand-violet/20' : 'bg-white hover:bg-gray-50 border border-gray-100'}`}
                >
                  <div className="flex items-center gap-3">
                    <span className="text-xl">{tz.flag}</span>
                    <div>
                      <div className="font-medium text-gray-900 text-sm">{tz.city}</div>
                      <div className="text-xs text-gray-400">{tz.zone} ({tz.offset})</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="font-display text-lg font-bold text-gray-900">
                      {getTimeInZone(tz.offset)}
                    </div>
                    {tz.region === 'HQ' && (
                      <div className="text-xs text-brand-violet font-medium">Our HQ</div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}

        {/* Footer note */}
        <div className="mt-6 pt-4 border-t border-gray-200">
          <p className="text-xs text-gray-400 text-center">
            Hover the left edge — or tap the clock — to show this panel
          </p>
        </div>
      </div>

      {/* Trigger indicator (clickable — works on touch devices too) */}
      <button
        onClick={() => setIsVisible((v) => !v)}
        className={`absolute right-0 top-1/2 -translate-y-1/2 translate-x-full
          bg-surface-dark text-white px-2 py-4 rounded-r-lg shadow-lg cursor-pointer
          transition-opacity duration-300 ${isVisible ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}
        aria-label="Show global time zones"
      >
        <Clock className="w-4 h-4" />
      </button>
    </div>
  )
}