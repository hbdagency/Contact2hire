'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import CircularBadge from '@/components/ui/CircularBadge'

/** Up arrow used in "Go to top" mode. */
function UpArrow() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="w-4 h-4"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 19V5M5 12l7-7 7 7" />
    </svg>
  )
}

/** Right arrow used in "Let's get started" mode. */
function RightArrow() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="w-4 h-4"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 12h14M12 5l7 7-7 7" />
    </svg>
  )
}

/**
 * Floating rotating badge pinned to the bottom-right of the viewport.
 * Its label and action adapt to the section in view:
 * - anywhere above the footer → "Let's Get Started" → /contact
 * - when the footer is in view  → "Go To Top" → scrolls to the top
 */
export default function FloatingActionBadge() {
  const [inFooter, setInFooter] = useState(false)

  useEffect(() => {
    const footer = document.querySelector('footer')
    if (!footer) return

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          setInFooter(entry.isIntersecting)
        }
      },
      // Only count the footer once it reaches the middle band of the viewport
      { rootMargin: '-35% 0px -45% 0px' }
    )

    observer.observe(footer)
    return () => observer.disconnect()
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const badge = (
    <CircularBadge
      text={
        inFooter
          ? 'Go To Top • Go To Top • '
          : "Let's Get Started • Let's Get Started • "
      }
      className="w-20 h-20 lg:w-24 lg:h-24 text-white transition-colors duration-300"
      bgClassName={inFooter ? 'fill-brand-lime' : 'fill-brand-violet'}
    >
      <span
        className={`w-8 h-8 rounded-full flex items-center justify-center shadow-lg transition-colors duration-300 ${
          inFooter ? 'bg-surface-dark text-brand-lime' : 'bg-brand-lime text-gray-900'
        }`}
      >
        {inFooter ? <UpArrow /> : <RightArrow />}
      </span>
    </CircularBadge>
  )

  return (
    <div className="fixed bottom-6 right-6 z-40 hidden md:block">
      {inFooter ? (
        <button
          onClick={scrollToTop}
          aria-label="Go to top"
          title="Go to top"
          className="block cursor-pointer hover:scale-105 transition-transform duration-300"
        >
          {badge}
        </button>
      ) : (
        <Link
          href="/contact"
          aria-label="Let's get started"
          title="Let's get started"
          className="block hover:scale-105 transition-transform duration-300"
        >
          {badge}
        </Link>
      )}
    </div>
  )
}
