import JobTicker from '@/components/sections/JobTicker'
import Button from '@/components/ui/Button'
import { ArrowRight } from '@/components/ui/Icon'

/** Four-pointed sparkle/star used as a decorative accent. */
function Star({ className = 'w-6 h-6 text-brand-violet' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
      <path d="M12 0 L14.4 9.6 L24 12 L14.4 14.4 L12 24 L9.6 14.4 L0 12 L9.6 9.6 Z" />
    </svg>
  )
}

/** Thin gray connector line with an arrowhead, from the mockups. */
function ConnectorLine({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 120 60" className={`w-24 h-12 ${className}`} fill="none" aria-hidden="true">
      <path
        d="M6 52 C 40 52, 70 18, 108 10"
        stroke="#C7C7C7"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeDasharray="1 5"
      />
      <path d="M108 3 L112 11 L104 10 Z" fill="#C7C7C7" />
    </svg>
  )
}

/** Faint interlocking rounded squares behind the headline (mockup background). */
function InterlockingShapes() {
  return (
    <svg
      viewBox="0 0 800 600"
      className="absolute left-1/2 top-[42%] -translate-x-1/2 -translate-y-1/2 w-[min(90vw,1100px)] opacity-[0.35] pointer-events-none"
      aria-hidden="true"
    >
      <g fill="none" stroke="#5923E2" strokeOpacity="0.16" strokeWidth="34">
        <rect x="170" y="110" width="330" height="330" rx="90" transform="rotate(18 335 275)" />
        <rect x="300" y="150" width="330" height="330" rx="90" transform="rotate(-24 465 315)" />
        <rect x="230" y="120" width="330" height="330" rx="90" transform="rotate(70 395 285)" />
      </g>
    </svg>
  )
}

export default function Hero() {
  return (
    <section className="relative min-h-screen bg-white overflow-hidden flex flex-col">
      {/* Background interlocking shapes */}
      <InterlockingShapes />

      {/* ===== Centered headline (vertical + horizontal) ===== */}
      <div className="relative z-10 flex-1 container flex flex-col items-center justify-center text-center pt-24 pb-8">
        <p className="text-gray-500 text-fluid-lg font-medium mb-4 md:mb-6">
          Crafting hiring experiences that inspire:
        </p>

        <h1 className="w-full font-display font-bold text-gray-900 leading-[1.05] tracking-[-0.03em] text-[clamp(2.4rem,6vw,5.6rem)]">
          Get the Job.
          <br />
          Build the Team.
          <br />
          We Make It{' '}
          <span className="inline-block bg-brand-lime text-white font-bold px-5 md:px-8 py-1 md:py-2 rounded-full -rotate-6 border-2 border-white shadow-[0_8px_30px_rgba(194,232,74,0.45)]">
            Happen
          </span>
        </h1>

        {/* ===== Hero CTAs ===== */}
        <div className="mt-8 md:mt-10 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 w-full">
          <Button
            href="/contact?type=candidate"
            variant="primary"
            size="lg"
            icon={<ArrowRight className="w-5 h-5" />}
            className="w-full sm:w-auto"
          >
            Find a Job
          </Button>
          <Button
            href="/contact?type=employer"
            variant="outline"
            size="lg"
            className="w-full sm:w-auto"
          >
            Hire Talent
          </Button>
        </div>

        {/* ===== Mobile imagery (shown below the headline on small screens) ===== */}
        <div className="lg:hidden mt-12 w-full">
          <div className="flex items-end justify-center gap-5">
            {/* Placement card (lime) */}
            <div className="relative">
              <Star className="absolute -top-5 -left-8 w-5 h-5 text-brand-violet" />
              <div className="w-32 sm:w-40 -rotate-6 rounded-2xl overflow-hidden shadow-xl">
                <div className="aspect-[3/4] relative bg-gradient-to-br from-brand-lime to-brand-lime-bright">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=600&q=80"
                    alt="Handshake between recruiter and candidate"
                    className="absolute inset-0 w-full h-full object-cover mix-blend-multiply"
                  />
                </div>
              </div>
            </div>

            {/* Candidate card (lavender) */}
            <div className="relative">
              <div className="w-32 sm:w-40 rotate-6 rounded-2xl bg-brand-lavender p-1.5 shadow-xl">
                <div className="rounded-xl overflow-hidden">
                  <div className="aspect-[4/5] relative">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=600&q=80"
                      alt="Happy professional candidate"
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
              <Star className="absolute -right-6 top-10 w-5 h-5 text-brand-lime" />
            </div>
          </div>

          {/* Avatar + proof caption */}
          <div className="mt-8 flex items-center gap-3 max-w-[300px] sm:max-w-xs mx-auto">
            <div className="relative w-10 h-10 sm:w-11 sm:h-11 rounded-full overflow-hidden border-2 border-brand-lime shrink-0">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80"
                alt="Happy client"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
            <p className="text-left text-gray-500 text-xs sm:text-sm leading-relaxed">
              1500+ professionals placed across EMEA — and 300+ companies
              building teams that last, one perfect match at a time.
            </p>
          </div>
        </div>
      </div>

      {/* ===== Left decorations ===== */}
      <div className="hidden lg:block absolute left-[3%] xl:left-[5%] top-[26%] z-10">
        <div className="relative">
          {/* Star above card */}
          <Star className="absolute -top-9 left-10 w-6 h-6 text-brand-violet" />

          {/* Tilted placement card (lime gradient) */}
          <div className="w-[250px] xl:w-[280px] -rotate-6 rounded-[28px] overflow-hidden shadow-2xl">
            <div className="aspect-[3/4] relative bg-gradient-to-br from-brand-lime to-brand-lime-bright">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=600&q=80"
                alt="Handshake between recruiter and candidate"
                className="absolute inset-0 w-full h-full object-cover mix-blend-multiply"
              />
            </div>
          </div>

          {/* Connector line */}
          <ConnectorLine className="absolute -bottom-12 -left-4 -scale-x-100" />

          {/* Avatar */}
          <div className="absolute -bottom-20 left-6 w-14 h-14 rounded-full overflow-hidden border-2 border-brand-lime">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80"
              alt="Happy client"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Caption text */}
        <p className="absolute left-24 -bottom-24 text-gray-500 text-sm leading-relaxed w-60 text-left">
          1500+ professionals placed across EMEA — and 300+ companies
          building teams that last, one perfect match at a time.
        </p>
      </div>

      {/* ===== Right decorations ===== */}
      <div className="hidden lg:block absolute right-[3%] xl:right-[5%] top-[22%] z-10">
        {/* Address pills */}
        <div className="flex flex-col items-start gap-2 rotate-3 mb-6">
          <span className="bg-brand-violet text-white text-sm font-semibold px-5 py-2 rounded-full shadow-lg">
            Ahmedabad, Gujarat
          </span>
          <span className="bg-brand-violet text-white text-sm font-semibold px-5 py-2 rounded-full shadow-lg">
            India · HQ
          </span>
        </div>

        <div className="relative">
          {/* Lime star left of card */}
          <Star className="absolute -left-8 top-16 w-6 h-6 text-brand-lime" />

          {/* Tilted candidate card (lavender) */}
          <div className="w-[250px] xl:w-[280px] rotate-6 rounded-[28px] bg-brand-lavender p-4 shadow-2xl">
            <div className="rounded-[20px] overflow-hidden">
              <div className="aspect-[4/5] relative">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=600&q=80"
                  alt="Happy professional candidate"
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Connector line */}
          <ConnectorLine className="absolute -right-6 -bottom-16" />
        </div>
      </div>

      {/* ===== Scroll down cue (sits just above the ticker strip) ===== */}
      <div className="relative z-10 mb-8 flex flex-col items-center gap-3">
        <span className="text-gray-700 text-sm font-medium">Scroll down</span>
        <span className="w-10 h-10 rounded-full bg-brand-violet flex items-center justify-center shadow-lg">
          <svg viewBox="0 0 24 24" className="w-5 h-5 text-white" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M6 9l6 6 6-6" />
          </svg>
        </span>
      </div>

      {/* ===== Current openings ticker pinned to the bottom of the hero ===== */}
      <div className="relative z-10">
        <JobTicker />
      </div>
    </section>
  )
}
