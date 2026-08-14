import Link from 'next/link'
import Navigation from '@/components/layout/Navigation'
import Footer from '@/components/layout/Footer'
import CtaCard from '@/components/sections/CtaCard'
import CircularBadge from '@/components/ui/CircularBadge'
import { ArrowRight } from '@/components/ui/Icon'

const expertise = [
  {
    slug: 'market-research',
    title: 'Market\nresearch',
    description:
      'Blends talent market data and hiring trends to confirm and sharpen your recruitment strategy.',
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=900&q=80',
    dark: true,
  },
  {
    slug: 'executive-search',
    title: 'Executive\nSearch',
    description:
      'Confidential search, leadership assessment and C-suite placement across EMEA markets.',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=900&q=80',
    dark: false,
  },
  {
    slug: 'branding-strategies',
    title: 'Branding\nstrategies',
    description:
      'Builds employer recognition and trust with candidates and future talent pools.',
    image: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=900&q=80',
    dark: true,
  },
]

const process = [
  {
    step: '01',
    title: 'Discover',
    description: 'Deep dive into your organization\'s culture, needs, and goals.',
    duration: '1-2 weeks',
  },
  {
    step: '02',
    title: 'Source',
    description: 'Leverage our network and technology to find exceptional talent.',
    duration: '2-4 weeks',
  },
  {
    step: '03',
    title: 'Vet',
    description: 'Rigorous assessment to ensure quality and cultural fit.',
    duration: '1-2 weeks',
  },
  {
    step: '04',
    title: 'Place',
    description: 'Seamless placement with ongoing support and follow-up.',
    duration: 'Ongoing',
  },
]

/** Arrow button (circle with diagonal arrow) used on the cards. */
function ArrowCircle({ lime = false }: { lime?: boolean }) {
  return (
    <span
      className={`w-12 h-12 rounded-full flex items-center justify-center transition-transform group-hover:rotate-45 ${
        lime
          ? 'bg-brand-lime text-brand-violet shadow-lg'
          : 'bg-white/10 border border-white/20 text-white'
      }`}
    >
      <svg
        viewBox="0 0 24 24"
        className="w-5 h-5"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M7 17L17 7M9 7h8v8" />
      </svg>
    </span>
  )
}

export default function ServicesPage() {
  return (
    <>
      <Navigation />

      <main>
        {/* ===== Expertise (mockup 4) ===== */}
        <section className="pt-28 pb-20 bg-white">
          <div className="container">
            <div className="relative bg-surface-dark rounded-[40px] px-6 md:px-12 lg:px-16 py-14 lg:py-20 overflow-hidden">
              {/* Header */}
              <div className="relative z-10">
                <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
                  <h1 className="font-display text-[clamp(2.2rem,4vw,3.6rem)] font-bold text-white tracking-[-0.02em]">
                    Our Expertise
                  </h1>
                  <p className="text-gray-400 max-w-md lg:text-right leading-relaxed">
                    We turn hiring goals into successful placements — fast,
                    precise, and built to last.
                  </p>
                </div>
                <div className="h-px bg-white/10 mt-10" />

                {/* Cards — each opens its detailed service page */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-12">
                  {expertise.map((item) => (
                    <Link
                      key={item.slug}
                      href={`/services/${item.slug}`}
                      className={`group relative rounded-[28px] p-8 flex flex-col cursor-pointer transition-transform duration-300 hover:-translate-y-1 ${
                        item.dark ? 'bg-surface-dark-card' : 'bg-brand-violet'
                      }`}
                    >
                      <div className="flex items-start justify-between">
                        <h2
                          className={`font-display text-3xl font-bold leading-[1.1] whitespace-pre-line ${
                            item.dark ? 'text-brand-lime' : 'text-white'
                          }`}
                        >
                          {item.title}
                        </h2>
                        <ArrowCircle lime={!item.dark} />
                      </div>

                      <div className={`h-px my-6 ${item.dark ? 'bg-white/10' : 'bg-white/25'}`} />

                      <p className={`text-sm leading-relaxed ${item.dark ? 'text-white/80' : 'text-white'}`}>
                        {item.description}
                      </p>

                      <span
                        className={`mt-6 inline-flex items-center gap-2 text-sm font-semibold ${
                          item.dark ? 'text-brand-lime' : 'text-white'
                        }`}
                      >
                        Explore service
                        <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                      </span>

                      {/* Photo bleeding to bottom */}
                      <div
                        className={`relative mt-8 -mx-8 -mb-8 aspect-[16/10] ${
                          item.dark ? '' : 'rounded-b-[28px] overflow-hidden'
                        }`}
                      >
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src={item.image}
                          alt={item.title.replace('\n', ' ')}
                          className="w-full h-full object-cover"
                        />
                      </div>

                      {/* Lime arrow button breaking bottom-left edge (active card) */}
                      {!item.dark && (
                        <div className="absolute bottom-6 left-8 z-10">
                          <ArrowCircle lime />
                        </div>
                      )}
                    </Link>
                  ))}
                </div>

                {/* Bottom: lime headline + stats */}
                <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center mt-20">
                  {/* Left headline */}
                  <div>
                    <h3 className="font-display font-bold text-brand-lime uppercase leading-[1.06] tracking-[-0.02em] text-[clamp(2rem,3.6vw,3.3rem)]">
                      We create
                      <br />
                      impactful
                      <br />
                      experiences for our
                      <br />
                      clients&rsquo; teams
                      <br />
                      every time they
                      <br />
                      engage with
                      <br />
                      talent
                    </h3>
                  </div>

                  {/* Right: badge, stat, connecting line, paragraph */}
                  <div className="relative flex flex-col items-start lg:items-end gap-8">
                    <CircularBadge
                      text="Let's Get Started • Let's Get Started • "
                      className="absolute top-2 right-0 lg:-top-6 lg:-right-2 w-24 h-24 lg:w-28 lg:h-28 text-white"
                    />

                    <div className="lg:text-right pt-20 lg:pt-24">
                      {/* Connecting line */}
                      <div className="hidden lg:flex items-center justify-end gap-2 mb-8">
                        <span className="w-2.5 h-2.5 rounded-full bg-white" />
                        <span className="h-px w-28 bg-white/50" />
                        <svg viewBox="0 0 24 24" className="w-5 h-5 text-white" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M3 12h17M14 6l6 6-6 6" />
                        </svg>
                      </div>

                      <div className="font-display text-6xl lg:text-7xl font-bold text-white leading-none">
                        1500+
                      </div>
                      <div className="text-brand-lime mt-3 font-semibold tracking-wide">
                        Placements Completed
                      </div>
                    </div>

                    <p className="text-gray-400 max-w-sm lg:text-right leading-relaxed text-sm">
                      We take pride in our placement success stories, where our
                      strategies and execution have played a vital role in
                      helping clients build world-class teams and surpass their
                      hiring goals.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-16 lg:py-24 bg-white">
          <div className="container">
            <div className="bg-surface-dark rounded-[40px] px-6 md:px-12 lg:px-16 py-14 lg:py-20">
              <div className="text-center mb-16">
                <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-brand-lime text-gray-900 text-xs font-bold uppercase tracking-widest rounded-full">
                  Our Approach
                </span>
                <h2 className="font-display text-[clamp(2rem,3.6vw,3.2rem)] font-bold text-white mt-6">
                  How We Work
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {process.map((item, index) => (
                  <div key={item.step} className="relative">
                    {index < process.length - 1 && (
                      <div className="hidden lg:block absolute top-8 left-1/2 w-full h-0.5 bg-white/20">
                        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 bg-brand-lime rounded-full" />
                      </div>
                    )}

                    <div className="text-center">
                      <span className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-brand-lime/15 text-brand-lime font-display text-2xl font-bold mb-4">
                        {item.step}
                      </span>
                      <h3 className="font-display text-fluid-xl font-bold text-white mb-2">
                        {item.title}
                      </h3>
                      <p className="text-gray-400 mb-2">
                        {item.description}
                      </p>
                      <span className="text-xs text-brand-lime font-medium">
                        {item.duration}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA card — mockup 3 (bottom) */}
        <CtaCard />
      </main>

      <Footer />
    </>
  )
}
