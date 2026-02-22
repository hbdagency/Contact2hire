'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Phone, MessageCircle, ArrowRight } from '@/components/ui/Icon'

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
            ? 'bg-cream/90 backdrop-blur-md shadow-soft py-4'
            : 'bg-transparent py-6'
        }`}
      >
        <nav className="container flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="relative z-50 group">
            <span className="font-display text-2xl font-bold text-brown group-hover:text-emerald transition-colors">
              Contact<span className="text-emerald">2</span>Hire
            </span>
          </Link>

          {/* Desktop Navigation */}
          <ul className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`relative text-sm font-medium tracking-wide uppercase transition-colors hover:text-emerald ${
                    pathname === link.href ? 'text-emerald' : 'text-brown'
                  }`}
                >
                  {link.label}
                  {pathname === link.href && (
                    <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-emerald rounded-full" />
                  )}
                </Link>
              </li>
            ))}
          </ul>

          {/* Contact Icons & CTA - Desktop */}
          <div className="hidden lg:flex items-center gap-3">
            {/* Phone - Icon only, expands on hover */}
            <a
              href="tel:+919601570167"
              className="group flex items-center gap-0 bg-brown/10 hover:bg-brown text-brown hover:text-cream px-2 hover:px-4 py-2 rounded-full transition-all duration-300 overflow-hidden"
              title="Call us"
            >
              <Phone className="w-5 h-5 flex-shrink-0" />
              <span className="max-w-0 group-hover:max-w-[100px] overflow-hidden whitespace-nowrap text-sm font-medium transition-all duration-300">
                +91-9601570167
              </span>
            </a>
            
            {/* WhatsApp - Icon only, expands on hover */}
            <a
              href="https://wa.me/919601570167"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-0 bg-green-600 hover:bg-green-700 text-cream px-2 hover:px-4 py-2 rounded-full transition-all duration-300 overflow-hidden"
              title="WhatsApp us"
            >
              <MessageCircle className="w-5 h-5 flex-shrink-0" />
              <span className="max-w-0 group-hover:max-w-[80px] overflow-hidden whitespace-nowrap text-sm font-medium transition-all duration-300">
                WhatsApp
              </span>
            </a>
            
            {/* CTA Button - Icon only */}
            <Link
              href="/contact"
              className="flex items-center justify-center w-10 h-10 bg-sun text-brown rounded-full hover:bg-emerald hover:text-cream transition-colors"
              title="Get Started"
            >
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>

          {/* Mobile Contact Icons */}
          <div className="flex lg:hidden items-center gap-3 mr-4">
            <a
              href="tel:+919601570167"
              className="w-10 h-10 rounded-full bg-brown/10 flex items-center justify-center text-brown hover:bg-emerald hover:text-cream transition-colors"
              title="Call us"
            >
              <Phone className="w-5 h-5" />
            </a>
            <a
              href="https://wa.me/919601570167"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-green-600 flex items-center justify-center text-cream hover:bg-green-700 transition-colors"
              title="WhatsApp us"
            >
              <MessageCircle className="w-5 h-5" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden relative z-50 w-10 h-10 flex flex-col items-center justify-center gap-1.5"
            aria-label="Toggle menu"
          >
            <span
              className={`w-6 h-0.5 bg-brown transition-all duration-300 ${
                isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''
              }`}
            />
            <span
              className={`w-6 h-0.5 bg-brown transition-all duration-300 ${
                isMobileMenuOpen ? 'opacity-0' : ''
              }`}
            />
            <span
              className={`w-6 h-0.5 bg-brown transition-all duration-300 ${
                isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''
              }`}
            />
          </button>
        </nav>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-40 bg-cream lg:hidden transition-all duration-500 ${
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
                  className={`font-display text-3xl font-bold transition-colors hover:text-emerald ${
                    pathname === link.href ? 'text-emerald' : 'text-brown'
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
              <span>Get Started</span>
            </Link>
            <div className="flex items-center gap-4 mt-4">
              <a
                href="tel:+919601570167"
                className="flex items-center gap-2 text-brown"
              >
                <Phone className="w-5 h-5" />
                <span>Call</span>
              </a>
              <a
                href="https://wa.me/919601570167"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-green-600 text-cream px-4 py-2 rounded-full"
              >
                <MessageCircle className="w-5 h-5" />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>
        </nav>
      </div>
    </>
  )
}