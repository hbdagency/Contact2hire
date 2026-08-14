'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Phone, ArrowRight } from '@/components/ui/Icon'

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services' },
  { href: '/about', label: 'About' },
  { href: '/case-studies', label: 'Case Studies' },
  { href: '/insights', label: 'Insights' },
  { href: '/contact', label: 'Contact' },
]

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    // Close mobile menu on route change
    setIsMobileMenuOpen(false)
  }, [pathname])

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? 'bg-white/90 backdrop-blur-md shadow-soft py-3'
            : 'bg-transparent py-5'
        }`}
      >
        <nav className="container flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="relative z-50 group">
            <span className="font-display text-2xl font-extrabold text-gray-900 group-hover:text-brand-violet transition-colors">
              Contact<span className="text-brand-lime bg-gray-900 px-1 rounded">2</span>Hire
            </span>
          </Link>

          {/* Desktop Navigation */}
          <ul className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`relative text-sm font-semibold tracking-wide uppercase transition-colors hover:text-brand-violet ${
                    pathname === link.href ? 'text-brand-violet' : 'text-gray-700'
                  }`}
                >
                  {link.label}
                  {pathname === link.href && (
                    <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-brand-violet rounded-full" />
                  )}
                </Link>
              </li>
            ))}
          </ul>

          {/* Contact Icons & CTA - Desktop */}
          <div className="hidden lg:flex items-center gap-3">
            {/* Phone - Icon only */}
            <a
              href="tel:+919601570167"
              className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-700 hover:bg-brand-violet hover:text-white transition-colors"
              title="Call us"
            >
              <Phone className="w-5 h-5" />
            </a>
            
            {/* CTA Button */}
            <Link
              href="/contact"
              className="flex items-center gap-2 px-5 py-2.5 bg-brand-violet text-white rounded-full hover:bg-brand-violet-dark transition-colors font-semibold text-sm"
            >
              Hire Talent
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Mobile Contact Icons */}
          <div className="flex lg:hidden items-center gap-3 mr-4">
            <a
              href="tel:+919601570167"
              className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-700 hover:bg-brand-violet hover:text-white transition-colors"
              title="Call us"
            >
              <Phone className="w-5 h-5" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden relative z-50 w-10 h-10 flex flex-col items-center justify-center gap-1.5"
            aria-label="Toggle menu"
          >
            <span
              className={`w-6 h-0.5 bg-gray-900 transition-all duration-300 ${
                isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''
              }`}
            />
            <span
              className={`w-6 h-0.5 bg-gray-900 transition-all duration-300 ${
                isMobileMenuOpen ? 'opacity-0' : ''
              }`}
            />
            <span
              className={`w-6 h-0.5 bg-gray-900 transition-all duration-300 ${
                isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''
              }`}
            />
          </button>
        </nav>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-40 bg-white lg:hidden transition-all duration-500 ${
          isMobileMenuOpen
            ? 'opacity-100 pointer-events-auto'
            : 'opacity-0 pointer-events-none'
        }`}
      >
        <nav className="container flex flex-col items-center justify-center h-full">
          <ul className="flex flex-col items-center gap-8">
            {navLinks.map((link, index) => (
              <li
                key={link.href}
                className={`transform transition-all duration-500 ${
                  isMobileMenuOpen
                    ? 'translate-y-0 opacity-100'
                    : 'translate-y-8 opacity-0'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <Link
                  href={link.href}
                  className={`font-display text-3xl font-extrabold transition-colors hover:text-brand-violet ${
                    pathname === link.href ? 'text-brand-violet' : 'text-gray-900'
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <div
            className={`mt-12 flex flex-col items-center gap-4 transform transition-all duration-500 delay-500 ${
              isMobileMenuOpen
                ? 'translate-y-0 opacity-100'
                : 'translate-y-8 opacity-0'
            }`}
          >
            <Link
              href="/contact"
              className="btn-primary flex items-center gap-2"
            >
              <ArrowRight className="w-5 h-5" />
              <span>Hire Talent</span>
            </Link>
            <div className="flex items-center gap-4 mt-4">
              <a
                href="tel:+919601570167"
                className="flex items-center gap-2 text-gray-700"
              >
                <Phone className="w-5 h-5" />
                <span>Call</span>
              </a>
            </div>
          </div>
        </nav>
      </div>
    </>
  )
}