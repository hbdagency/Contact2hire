'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ArrowRight, Phone } from '@/components/ui/Icon'
import Logo from '@/components/ui/Logo'
import WhatsAppIcon from '@/components/ui/WhatsAppIcon'

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services' },
  { href: '/about', label: 'About' },
  { href: '/case-studies', label: 'Case Studies' },
  { href: '/insights', label: 'Insights' },
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
          isScrolled ? 'bg-white/90 backdrop-blur-md shadow-soft py-3' : 'bg-transparent py-5'
        }`}
      >
        <nav className="container relative flex items-center justify-between">
          {/* Left group - page links (desktop) */}
          <ul className="hidden lg:flex items-center gap-x-5 xl:gap-x-8">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`relative text-[13px] xl:text-sm font-semibold whitespace-nowrap transition-colors hover:text-brand-violet ${
                    pathname === link.href ? 'text-brand-violet' : 'text-gray-900'
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Center logo */}
          <Link
            href="/"
            className="absolute left-1/2 -translate-x-1/2 flex items-center gap-2 group"
            aria-label="Contact2Hire home"
          >
            <Logo className="w-8 h-8 xl:w-9 xl:h-9" />
            <span className="font-display text-xl xl:text-2xl font-bold text-gray-900">
              Contact<span className="text-brand-violet">2</span>Hire
            </span>
          </Link>

          {/* Right group - WhatsApp, Call, Contact (desktop) */}
          <div className="hidden sm:flex items-center gap-3 lg:gap-4">
            <a
              href="https://wa.me/919601570167"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 lg:w-10 lg:h-10 rounded-full border border-gray-900/20 flex items-center justify-center text-gray-900 hover:border-[#25D366] hover:text-[#25D366] transition-all"
              title="WhatsApp us"
              aria-label="WhatsApp us"
            >
              <WhatsAppIcon className="w-4 h-4 lg:w-5 lg:h-5" />
            </a>
            <a
              href="tel:+919601570167"
              className="w-9 h-9 lg:w-10 lg:h-10 rounded-full border border-gray-900/20 flex items-center justify-center text-gray-900 hover:border-brand-violet hover:text-brand-violet transition-all"
              title="Call us"
              aria-label="Call us"
            >
              <Phone className="w-4 h-4 lg:w-5 lg:h-5" />
            </a>
            <Link
              href="/contact"
              className="hidden lg:inline-flex items-center gap-2 px-5 py-2.5 border border-gray-900 rounded-full font-semibold text-sm hover:border-brand-violet hover:text-brand-violet transition-all"
            >
              Contact
              <ArrowRight className="w-4 h-4 text-brand-violet" />
            </Link>
          </div>

          {/* Mobile menu button */}
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
          isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <nav className="container flex flex-col items-center justify-center h-full">
          <ul className="flex flex-col items-center gap-7">
            {[...navLinks, { href: '/contact', label: 'Contact' }].map((link, index) => (
              <li
                key={link.href + link.label}
                className={`transform transition-all duration-500 ${
                  isMobileMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                }`}
                style={{ transitionDelay: `${index * 80}ms` }}
              >
                <Link
                  href={link.href}
                  className={`font-display text-3xl font-bold transition-colors hover:text-brand-violet ${
                    pathname === link.href ? 'text-brand-violet' : 'text-gray-900'
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <div
            className={`mt-10 flex items-center gap-4 transform transition-all duration-500 delay-500 ${
              isMobileMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
            }`}
          >
            <a
              href="https://wa.me/919601570167"
              target="_blank"
              rel="noopener noreferrer"
              className="w-11 h-11 rounded-full border border-gray-900/20 flex items-center justify-center text-gray-900"
              aria-label="WhatsApp us"
            >
              <WhatsAppIcon className="w-5 h-5" />
            </a>
            <a
              href="tel:+919601570167"
              className="w-11 h-11 rounded-full border border-gray-900/20 flex items-center justify-center text-gray-900"
              aria-label="Call us"
            >
              <Phone className="w-5 h-5" />
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-7 py-3 border border-gray-900 rounded-full font-semibold"
            >
              Contact
              <ArrowRight className="w-4 h-4 text-brand-violet" />
            </Link>
          </div>
        </nav>
      </div>
    </>
  )
}
