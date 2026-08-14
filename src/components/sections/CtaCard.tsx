import Link from 'next/link'
import { ArrowRight } from '@/components/ui/Icon'
import CircularBadge from '@/components/ui/CircularBadge'

export default function CtaCard() {
  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="container">
        <div className="relative bg-surface-dark rounded-[40px] px-6 py-16 md:px-12 lg:px-16 lg:py-24 overflow-hidden">
          {/* Faded geometric watermark shapes (bottom-left) */}
          <svg
            viewBox="0 0 500 400"
            className="absolute -bottom-40 -left-24 w-[560px] opacity-40 pointer-events-none"
            aria-hidden="true"
          >
            <g fill="none" stroke="#FFFFFF" strokeOpacity="0.07" strokeWidth="40">
              <rect x="60" y="60" width="240" height="240" rx="80" transform="rotate(15 180 180)" />
              <rect x="140" y="90" width="240" height="240" rx="80" transform="rotate(-30 260 210)" />
            </g>
          </svg>

          <div className="relative z-10">
            {/* Headline block */}
            <div className="relative max-w-5xl mx-auto text-center">
              <CircularBadge
                text="Let's Get Started • Let's Get Started • "
                className="absolute top-6 right-6 lg:top-12 lg:right-12 w-24 h-24 lg:w-32 lg:h-32 text-white hidden md:inline-flex"
              />

              <p className="text-brand-lime text-sm font-semibold uppercase tracking-[0.2em]">
                Start shaping your workforce
              </p>

              <h2 className="font-display font-bold text-white uppercase leading-[1.05] tracking-[-0.02em] text-[clamp(2.2rem,5.2vw,4.4rem)] mt-6">
                Partner with us to build
                <br />
                a{' '}
                <span className="inline-block bg-brand-lime text-gray-900 px-4 md:px-6 py-0.5 rounded-full -rotate-2">
                  world-class
                </span>{' '}
                team
                <br />
                for your business!
              </h2>

              <p className="text-gray-400 text-fluid-lg mt-8 max-w-xl mx-auto leading-relaxed">
                Hiring for a single role or scaling across EMEA — our experienced
                recruiters get you the right people, quickly and precisely.
              </p>

              <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link
                  href="/contact?type=employer"
                  className="group inline-flex items-center gap-2 px-8 py-3.5 bg-brand-lime text-gray-900 rounded-full font-semibold hover:bg-brand-lime-bright transition-colors"
                >
                  Hire Talent
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  href="/contact?type=candidate"
                  className="inline-flex items-center gap-2 px-8 py-3.5 border border-white/40 text-white rounded-full font-semibold hover:border-brand-lime hover:text-brand-lime transition-all"
                >
                  Find a Job
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
