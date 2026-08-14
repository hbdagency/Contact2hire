import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Navigation from '@/components/layout/Navigation'
import Footer from '@/components/layout/Footer'
import Button from '@/components/ui/Button'
import { ArrowRight, ArrowLeft, Briefcase, MapPin, Building2, Quote } from '@/components/ui/Icon'
import { caseStudies, getCaseStudy } from '@/data/caseStudies'

export function generateStaticParams() {
  return caseStudies.map((study) => ({ slug: study.id }))
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string }
}): Promise<Metadata> {
  const study = getCaseStudy(params.slug)
  if (!study) return {}
  return {
    title: study.title,
    description: study.challenge,
    openGraph: {
      title: `${study.title} | Contact to Hire`,
      description: study.challenge,
    },
  }
}

export default function CaseStudyPage({ params }: { params: { slug: string } }) {
  const study = getCaseStudy(params.slug)

  if (!study) {
    notFound()
  }

  return (
    <>
      <Navigation />

      <main>
        {/* ===== Hero ===== */}
        <section className="pt-28 pb-20 bg-white">
          <div className="container">
            <Button href="/case-studies" variant="ghost" size="sm" icon={<ArrowLeft className="w-4 h-4" />}>
              All Case Studies
            </Button>

            <div className="relative bg-surface-dark rounded-[40px] px-6 md:px-12 lg:px-16 py-14 lg:py-20 overflow-hidden mt-8">
              <div className="absolute top-0 right-0 w-72 h-72 bg-brand-violet/20 rounded-full blur-3xl" />
              <div className="absolute bottom-0 left-0 w-72 h-72 bg-brand-lime/10 rounded-full blur-3xl" />

              <div className="relative z-10">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-brand-lime text-gray-900 text-xs font-bold uppercase tracking-widest rounded-full">
                    {study.industry}
                  </span>
                  <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/10 text-white text-xs font-bold uppercase tracking-widest rounded-full">
                    <MapPin className="w-3.5 h-3.5 text-brand-lime" />
                    {study.location}
                  </span>
                  <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/10 text-white text-xs font-bold uppercase tracking-widest rounded-full">
                    {study.region}
                  </span>
                </div>

                <h1 className="font-display text-[clamp(2.4rem,5vw,4.2rem)] font-bold text-white mt-8 leading-[1.05] tracking-[-0.03em]">
                  {study.title}
                </h1>
                <p className="text-gray-400 text-fluid-lg mt-4 flex items-center gap-2">
                  <Building2 className="w-5 h-5 text-brand-lime" />
                  {study.client}
                </p>
              </div>
            </div>

            {/* Stats strip */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
              {study.results.map((result) => (
                <div key={result.label} className="bg-gray-100 rounded-2xl p-5 text-center">
                  <div className="font-display text-2xl lg:text-3xl font-extrabold text-brand-violet">
                    {result.value}
                  </div>
                  <div className="text-gray-500 text-xs mt-1">{result.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ===== Overview + image ===== */}
        <section className="pb-20 bg-white">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <div>
                <span className="text-brand-violet text-sm font-bold uppercase tracking-[0.2em]">
                  The Story
                </span>
                <h2 className="font-display text-[clamp(1.9rem,3.4vw,3rem)] font-bold text-gray-900 mt-4 leading-[1.12] tracking-[-0.02em]">
                  From challenge to outcome
                </h2>
                <p className="text-gray-500 text-fluid-base leading-relaxed mt-6">
                  {study.overview}
                </p>
              </div>
              <div className="relative">
                <div className="aspect-[4/3] rounded-[28px] overflow-hidden shadow-large">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={study.image}
                    alt={study.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <span className="absolute -bottom-4 right-8 bg-brand-lime text-gray-900 px-5 py-2 rounded-full font-bold text-sm shadow-large">
                  {study.industry}
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* ===== Challenge & Solution ===== */}
        <section className="pb-20 bg-white">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-brand-violet rounded-[28px] p-8 lg:p-10">
                <h3 className="font-display text-xl font-bold text-white mb-4">
                  The Challenge
                </h3>
                <p className="text-white/85 leading-relaxed text-sm">
                  {study.challenge}
                </p>
              </div>
              <div className="bg-brand-lime rounded-[28px] p-8 lg:p-10">
                <h3 className="font-display text-xl font-bold text-gray-900 mb-4">
                  Our Solution
                </h3>
                <p className="text-gray-900/80 leading-relaxed text-sm">
                  {study.solution}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ===== Approach ===== */}
        <section className="pb-20 bg-white">
          <div className="container">
            <div className="text-center mb-12">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-brand-violet/10 text-brand-violet text-xs font-bold uppercase tracking-widest rounded-full">
                How We Did It
              </span>
              <h2 className="font-display text-fluid-4xl font-extrabold text-gray-900 mt-4">
                Our approach
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {study.approach.map((step, index) => (
                <div key={step.title} className="relative bg-gray-100 rounded-[20px] p-6 lg:p-8">
                  <div className="font-display text-4xl font-extrabold text-brand-lime">
                    {String(index + 1).padStart(2, '0')}
                  </div>
                  <h3 className="font-display text-lg font-bold text-gray-900 mt-3 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ===== Testimonial ===== */}
        <section className="pb-24 bg-white">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <Quote className="w-10 h-10 text-brand-violet mx-auto mb-6" />
              <blockquote className="font-display text-fluid-2xl font-bold text-gray-900 leading-snug">
                &ldquo;{study.testimonial.quote}&rdquo;
              </blockquote>
              <p className="text-gray-500 mt-6 font-medium">
                — {study.testimonial.author}
              </p>
            </div>
          </div>
        </section>

        {/* ===== CTA ===== */}
        <section className="pb-24">
          <div className="container">
            <div className="bg-surface-dark rounded-[28px] px-8 py-16 lg:px-16 text-center relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-brand-lime/5 rounded-full blur-3xl" />
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand-violet/10 rounded-full blur-3xl" />

              <div className="relative z-10 max-w-3xl mx-auto">
                <h2 className="font-display text-fluid-4xl font-extrabold text-white mb-6">
                  Ready for Results Like These?
                </h2>
                <p className="text-fluid-lg text-gray-400 mb-10">
                  Join 300+ companies who have transformed their hiring with Contact to Hire.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <Button
                    href="/contact?type=employer"
                    variant="primary"
                    size="lg"
                    icon={<Briefcase className="w-5 h-5" />}
                  >
                    Start Hiring
                  </Button>
                  <Button
                    href="/services"
                    variant="ghost"
                    size="lg"
                    className="!text-white hover:!text-brand-lime hover:bg-white/10"
                  >
                    Explore Services
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
