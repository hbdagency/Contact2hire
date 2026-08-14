import type { Metadata } from 'next'
import type { LucideIcon } from 'lucide-react'
import { notFound } from 'next/navigation'
import Navigation from '@/components/layout/Navigation'
import Footer from '@/components/layout/Footer'
import CtaCard from '@/components/sections/CtaCard'
import Button from '@/components/ui/Button'
import {
  ArrowRight,
  Check,
  Search,
  TrendingUp,
  Target,
  Globe,
  UserCheck,
  Award,
  Shield,
  Building2,
  Sparkles,
  Heart,
  MessageSquare,
  Zap,
} from '@/components/ui/Icon'
import { getService, services } from '@/data/services'

const iconMap: Record<string, LucideIcon> = {
  search: Search,
  'trending-up': TrendingUp,
  target: Target,
  globe: Globe,
  'user-check': UserCheck,
  award: Award,
  shield: Shield,
  'building-2': Building2,
  sparkles: Sparkles,
  heart: Heart,
  'message-square': MessageSquare,
  zap: Zap,
}

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string }
}): Promise<Metadata> {
  const service = getService(params.slug)
  if (!service) return {}
  return {
    title: service.title,
    description: service.description,
    openGraph: {
      title: `${service.title} | Contact to Hire`,
      description: service.description,
    },
  }
}

export default function ServicePage({ params }: { params: { slug: string } }) {
  const service = getService(params.slug)

  if (!service) {
    notFound()
  }

  const FeatureIcon = iconMap[service.icon] ?? Search

  return (
    <>
      <Navigation />

      <main>
        {/* ===== Hero ===== */}
        <section className="pt-28 pb-20 bg-white">
          <div className="container">
            <div className="relative bg-surface-dark rounded-[40px] px-6 md:px-12 lg:px-16 py-14 lg:py-20 overflow-hidden">
              <div className="absolute top-0 right-0 w-72 h-72 bg-brand-violet/20 rounded-full blur-3xl" />
              <div className="absolute bottom-0 left-0 w-72 h-72 bg-brand-lime/10 rounded-full blur-3xl" />

              <div className="relative z-10 max-w-3xl">
                <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-brand-lime text-gray-900 text-xs font-bold uppercase tracking-widest rounded-full">
                  Our Services
                </span>
                <h1 className="font-display text-[clamp(2.4rem,5vw,4.2rem)] font-bold text-white mt-6 leading-[1.05] tracking-[-0.03em]">
                  {service.title}
                </h1>
                <p className="text-brand-lime font-semibold text-fluid-lg mt-4">
                  {service.tagline}
                </p>
                <p className="text-gray-400 text-fluid-base mt-6 leading-relaxed max-w-2xl">
                  {service.description}
                </p>

                <div className="flex flex-col sm:flex-row items-start gap-4 mt-10">
                  <Button
                    href="/contact?type=employer"
                    variant="primary"
                    size="lg"
                    icon={<ArrowRight className="w-5 h-5" />}
                  >
                    Talk to an Expert
                  </Button>
                  <Button
                    href="/services"
                    variant="ghost"
                    size="lg"
                    className="!text-white hover:!text-brand-lime hover:bg-white/10"
                  >
                    All Services
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ===== Overview + image ===== */}
        <section className="pb-20 bg-white">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <div>
                <span className="text-brand-violet text-sm font-bold uppercase tracking-[0.2em]">
                  What it is
                </span>
                <h2 className="font-display text-[clamp(1.9rem,3.4vw,3rem)] font-bold text-gray-900 mt-4 leading-[1.12] tracking-[-0.02em]">
                  A sharper way to hire
                </h2>
                <p className="text-gray-500 text-fluid-base leading-relaxed mt-6">
                  {service.overview}
                </p>
              </div>
              <div className="relative">
                <div className="aspect-[4/3] rounded-[28px] overflow-hidden shadow-large">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <span className="absolute -bottom-4 right-8 bg-brand-lime text-gray-900 px-5 py-2 rounded-full font-bold text-sm shadow-large">
                  {service.title}
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* ===== Features ===== */}
        <section className="pb-20 bg-white">
          <div className="container">
            <div className="text-center mb-12">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-brand-violet/10 text-brand-violet text-xs font-bold uppercase tracking-widest rounded-full">
                What&rsquo;s Included
              </span>
              <h2 className="font-display text-fluid-4xl font-extrabold text-gray-900 mt-4">
                How we deliver
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {service.features.map((feature) => (
                <div
                  key={feature.title}
                  className="bg-gray-100 rounded-[20px] p-6 lg:p-8 hover:shadow-medium transition-shadow"
                >
                  <div className="w-12 h-12 rounded-2xl bg-brand-violet/10 flex items-center justify-center mb-4">
                    <FeatureIcon className="w-6 h-6 text-brand-violet" />
                  </div>
                  <h3 className="font-display text-xl font-bold text-gray-900 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ===== Outcomes + industries ===== */}
        <section className="pb-24 bg-white">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
              {/* Outcomes */}
              <div className="bg-surface-dark rounded-[28px] p-8 lg:p-10">
                <h3 className="font-display text-2xl font-bold text-white mb-6">
                  What you get
                </h3>
                <ul className="space-y-4">
                  {service.outcomes.map((outcome) => (
                    <li key={outcome} className="flex items-start gap-3">
                      <span className="w-6 h-6 rounded-full bg-brand-lime flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-3.5 h-3.5 text-gray-900" strokeWidth={3} />
                      </span>
                      <span className="text-gray-300 text-sm leading-relaxed">
                        {outcome}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Industries */}
              <div>
                <h3 className="font-display text-2xl font-bold text-gray-900 mb-6">
                  Industries we serve
                </h3>
                <div className="flex flex-wrap gap-3">
                  {service.industries.map((industry) => (
                    <span
                      key={industry}
                      className="bg-brand-violet/10 text-brand-violet text-sm font-semibold px-5 py-2.5 rounded-full"
                    >
                      {industry}
                    </span>
                  ))}
                </div>
                <p className="text-gray-500 text-sm leading-relaxed mt-8">
                  Every engagement is tailored — if your sector isn&rsquo;t listed,
                  talk to us. We&rsquo;ve placed talent across technology, finance,
                  healthcare, manufacturing and energy markets throughout EMEA.
                </p>
                <Button
                  href="/contact?type=employer"
                  variant="outline"
                  size="md"
                  icon={<ArrowRight className="w-4 h-4" />}
                  className="mt-8"
                >
                  Discuss Your Hiring Goals
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* CTA card */}
        <CtaCard />
      </main>

      <Footer />
    </>
  )
}
