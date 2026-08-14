import Link from 'next/link'
import CircularBadge from '@/components/ui/CircularBadge'

const projects = [
  {
    id: 'london-tech',
    title: 'London Tech Scale-Up',
    services: 'Executive Search, RPO, Tech Hiring, EMEA',
    image: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=900&q=80',
    offset: false,
    badge: null as null | 'view-more',
  },
  {
    id: 'dubai-conglomerate',
    title: 'Dubai Conglomerate',
    services: 'Executive Search, Leadership, UAE Market',
    image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=900&q=80',
    offset: true,
    badge: 'shapes' as 'shapes' | null,
  },
  {
    id: 'nairobi-fintech',
    title: 'Nairobi Fintech Hub',
    services: 'Tech Hiring, Fintech, East Africa',
    image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=900&q=80',
    offset: false,
    badge: 'view-more' as 'view-more' | null,
    region: 'Africa' as 'Africa' | undefined,
  },
  {
    id: 'riyadh-healthcare',
    title: 'Riyadh Healthcare Network',
    services: 'Medical Staffing, Licensing, Saudi Arabia',
    image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=900&q=80',
    offset: true,
    badge: 'view-more',
  },
]

/** Lime interlocking rings decor, like the mockup's Google card corner. */
function InterlockingRings({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 200" className={`w-40 h-40 ${className}`} aria-hidden="true">
      <g fill="none" stroke="#C2E84A" strokeWidth="22" strokeLinecap="round">
        <circle cx="70" cy="70" r="45" />
        <circle cx="130" cy="70" r="45" />
        <circle cx="70" cy="130" r="45" />
      </g>
    </svg>
  )
}

export default function RecentWork() {
  return (
    <section id="work" className="py-24 lg:py-32 bg-white">
      <div className="container">
        {/* Section header */}
        <div className="max-w-3xl">
          <span className="text-brand-violet text-sm font-bold uppercase tracking-[0.2em]">
            Recent Work
          </span>
          <h2 className="font-display text-[clamp(1.9rem,3.4vw,3rem)] font-bold text-gray-900 leading-[1.12] tracking-[-0.02em] mt-5">
            Through meticulous planning, seamless execution, and creative
            problem-solving, we deliver the right talent — on time, every time.
          </h2>
        </div>

        {/* Staggered 2x2 grid — each card opens its detailed case study page */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-16 mt-16 lg:mt-24">
          {projects.map((project) => (
            <Link
              key={project.id}
              href={`/case-studies/${project.id}`}
              className={`group block cursor-pointer ${project.offset ? 'md:mt-24' : ''}`}
            >
              {/* Image */}
              <div className="relative">
                {project.badge === 'shapes' && (
                  <InterlockingRings className="hidden md:block absolute -top-10 -right-10 z-0" />
                )}
                <div className="relative z-10 aspect-[4/3] rounded-[28px] overflow-hidden bg-gray-200">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={project.image}
                    alt={project.title}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>

                {project.badge === 'view-more' && (
                  <div className="absolute top-6 right-6 z-20">
                    <CircularBadge
                      text="View More • View More • "
                      spin={false}
                      className="w-24 h-24 text-gray-900"
                      bgClassName="fill-brand-lime"
                    >
                      <span className="w-7 h-7 rounded-full bg-brand-violet flex items-center justify-center">
                        <svg
                          viewBox="0 0 24 24"
                          className="w-4 h-4 text-white"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M7 17L17 7M9 7h8v8" />
                        </svg>
                      </span>
                    </CircularBadge>
                  </div>
                )}

                {/* Highlight chip for the Africa region case */}
                {project.region === 'Africa' && (
                  <span className="absolute bottom-6 left-6 z-20 bg-brand-lime text-gray-900 text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full shadow-lg">
                    Africa Region
                  </span>
                )}
              </div>

              {/* Meta */}
              <div className="mt-6">
                <h3 className="font-display text-2xl font-bold text-brand-violet group-hover:underline underline-offset-4">
                  {project.title}
                </h3>
                <p className="text-gray-500 text-sm mt-2">
                  {project.services}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
