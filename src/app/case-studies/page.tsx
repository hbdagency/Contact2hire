import Navigation from '@/components/layout/Navigation'
import Footer from '@/components/layout/Footer'
import Button from '@/components/ui/Button'
import { MapPin, Users, Building2, TrendingUp, ArrowRight, Briefcase } from '@/components/ui/Icon'
import dynamic from 'next/dynamic'

// Dynamically import the 3D component to avoid SSR issues
const TalentFlowGlobe = dynamic(() => import('@/components/3d/TalentFlowGlobe'), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full min-h-[400px] flex items-center justify-center bg-brown rounded-3xl">
      <div className="text-center text-cream">
        <div className="animate-spin w-8 h-8 border-2 border-sun border-t-transparent rounded-full mx-auto mb-4" />
        <p className="text-gray-400 text-sm">Loading 3D Globe...</p>
      </div>
    </div>
  ),
})

const caseStudies = [
  {
    id: 'london-tech',
    title: 'London Tech Scale-Up',
    client: 'Series B Fintech Startup',
    location: 'London, UK',
    industry: 'Technology',
    challenge: 'Rapidly scale engineering team from 15 to 65 within 8 months while maintaining quality and cultural fit.',
    solution: 'Deployed dedicated RPO team with technical assessment capabilities. Created talent pipeline from Indian tech hubs.',
    results: [
      { label: 'Roles Filled', value: '50+' },
      { label: 'Time to Fill', value: '21 days' },
      { label: 'Retention Rate', value: '94%' },
      { label: 'Cost Savings', value: '40%' },
    ],
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80',
    testimonial: {
      quote: 'Contact to Hire transformed our hiring process. Their understanding of both markets made scaling seamless.',
      author: 'CTO, London Fintech',
    },
  },
  {
    id: 'dubai-conglomerate',
    title: 'Dubai Conglomerate',
    client: 'Multi-Billion Dollar Holding',
    location: 'Dubai, UAE',
    industry: 'Conglomerate',
    challenge: 'Build entire leadership team for new healthcare division from scratch across 3 countries.',
    solution: 'Executive search with global reach. Leveraged Indian healthcare leadership talent pool with EMEA experience.',
    results: [
      { label: 'Executives Placed', value: '12' },
      { label: 'Countries', value: '3' },
      { label: 'Avg. Salary', value: '$180K' },
      { label: 'Time to Productivity', value: '60 days' },
    ],
    image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=800&q=80',
    testimonial: {
      quote: 'Their executive search capabilities are world-class. They found leaders who truly understand our vision.',
      author: 'CEO, Dubai Healthcare Division',
    },
  },
  {
    id: 'frankfurt-finance',
    title: 'Frankfurt Financial Services',
    client: 'Investment Bank',
    location: 'Frankfurt, Germany',
    industry: 'Finance',
    challenge: 'Build quantitative analytics team with expertise in AI/ML for risk modeling.',
    solution: 'Targeted search in Indian IITs and top engineering schools. Provided relocation and cultural integration support.',
    results: [
      { label: 'Quants Placed', value: '25' },
      { label: 'PhD Holders', value: '80%' },
      { label: 'Visa Success', value: '100%' },
      { label: 'Avg. Tenure', value: '3+ years' },
    ],
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80',
    testimonial: {
      quote: 'The quality of candidates exceeded our expectations. Their technical vetting process is exceptional.',
      author: 'Head of Risk, Frankfurt Bank',
    },
  },
  {
    id: 'riyadh-healthcare',
    title: 'Riyadh Healthcare Network',
    client: 'Private Hospital Chain',
    location: 'Riyadh, Saudi Arabia',
    industry: 'Healthcare',
    challenge: 'Staff new 200-bed hospital with specialized medical professionals within 6 months.',
    solution: 'Comprehensive recruitment campaign targeting Indian medical professionals with Middle East experience.',
    results: [
      { label: 'Medical Staff', value: '85' },
      { label: 'Specialties', value: '15' },
      { label: 'DHA Licensed', value: '100%' },
      { label: 'On-Time Delivery', value: 'Yes' },
    ],
    image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=800&q=80',
    testimonial: {
      quote: 'They delivered when others couldn\'t. Their healthcare recruitment expertise is unmatched.',
      author: 'HR Director, Riyadh Hospital',
    },
  },
]

const globalStats = [
  { region: 'United Kingdom', placements: 320, flag: '🇬🇧' },
  { region: 'UAE', placements: 280, flag: '🇦🇪' },
  { region: 'Germany', placements: 185, flag: '🇩🇪' },
  { region: 'Saudi Arabia', placements: 150, flag: '🇸🇦' },
  { region: 'Netherlands', placements: 95, flag: '🇳🇱' },
  { region: 'Qatar', placements: 70, flag: '🇶🇦' },
  { region: 'Ireland', placements: 55, flag: '🇮🇪' },
  { region: 'Others', placements: 295, flag: '🌍' },
]

export default function CaseStudiesPage() {
  return (
    <>
      <Navigation />
      
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-20 bg-gradient-to-b from-cream-dark to-cream">
          <div className="container">
            <div className="max-w-4xl mx-auto text-center">
              <span className="badge mb-6">Success Stories</span>
              <h1 className="font-display text-fluid-hero font-bold text-brown mb-6 leading-tight">
                Proven Results<br />
                <span className="text-gradient">Across EMEA</span>
              </h1>
              <p className="text-fluid-xl text-gray-500 max-w-2xl mx-auto">
                Real stories of how we've helped companies build world-class teams 
                and professionals find their dream careers.
              </p>
            </div>
          </div>
        </section>

        {/* Global Footprint */}
        <section className="section bg-brown text-cream">
          <div className="container">
            <div className="text-center mb-12">
              <span className="text-sun text-sm uppercase tracking-widest font-medium">
                Global Reach
              </span>
              <h2 className="font-display text-fluid-4xl font-bold mt-4">
                1,500+ Placements Worldwide
              </h2>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
              {globalStats.map((stat) => (
                <div
                  key={stat.region}
                  className="bg-cream/5 rounded-xl p-4 text-center hover:bg-cream/10 transition-colors"
                >
                  <span className="text-2xl mb-2 block">{stat.flag}</span>
                  <div className="font-display text-2xl font-bold text-sun">
                    {stat.placements}+
                  </div>
                  <div className="text-gray-400 text-sm">{stat.region}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Case Studies Grid */}
        <section className="section">
          <div className="container">
            <div className="space-y-16">
              {caseStudies.map((study, index) => (
                <div
                  key={study.id}
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-8 items-center ${
                    index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                  }`}
                >
                  {/* Image */}
                  <div className={`relative ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                    <div className="aspect-[4/3] rounded-3xl overflow-hidden">
                      <img
                        src={study.image}
                        alt={study.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="absolute -bottom-4 left-4 bg-cream text-brown px-4 py-2 rounded-full font-bold text-sm shadow-large border border-gray-200">
                      <MapPin className="w-4 h-4 inline mr-1" />
                      {study.location}
                    </div>
                  </div>

                  {/* Content */}
                  <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                    <span className="text-emerald text-sm uppercase tracking-widest font-medium">
                      {study.industry}
                    </span>
                    <h3 className="font-display text-fluid-3xl font-bold text-brown mt-2 mb-4">
                      {study.title}
                    </h3>
                    <p className="text-gray-500 mb-4">
                      <strong className="text-brown">Client:</strong> {study.client}
                    </p>

                    <div className="mb-6">
                      <h4 className="font-bold text-brown mb-2">The Challenge</h4>
                      <p className="text-gray-500">{study.challenge}</p>
                    </div>

                    <div className="mb-6">
                      <h4 className="font-bold text-brown mb-2">Our Solution</h4>
                      <p className="text-gray-500">{study.solution}</p>
                    </div>

                    {/* Results Grid */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                      {study.results.map((result) => (
                        <div
                          key={result.label}
                          className="bg-cream-dark rounded-xl p-3 text-center"
                        >
                          <div className="font-display text-xl font-bold text-emerald">
                            {result.value}
                          </div>
                          <div className="text-gray-500 text-xs">{result.label}</div>
                        </div>
                      ))}
                    </div>

                    {/* Testimonial */}
                    <blockquote className="border-l-4 border-sun pl-4 italic text-gray-500">
                      &ldquo;{study.testimonial.quote}&rdquo;
                      <footer className="text-brown font-medium not-italic mt-2">
                        — {study.testimonial.author}
                      </footer>
                    </blockquote>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Interactive WebGL Map */}
        <section className="section bg-cream-dark">
          <div className="container">
            <div className="text-center mb-12">
              <span className="text-emerald text-sm uppercase tracking-widest font-medium">
                Talent Flow
              </span>
              <h2 className="font-display text-fluid-4xl font-bold text-brown mt-4">
                India to EMEA Pipeline
              </h2>
              <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
                Explore our interactive 3D globe showing talent flow from India to EMEA destinations. 
                Drag to rotate, scroll to explore.
              </p>
            </div>

            <div className="relative aspect-[2/1] min-h-[500px] bg-brown rounded-3xl overflow-hidden">
              <TalentFlowGlobe />
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section bg-gradient-to-br from-brown via-brown to-terracotta text-cream">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="font-display text-fluid-4xl font-bold mb-6">
                Ready to Write Your Success Story?
              </h2>
              <p className="text-fluid-lg text-cream/80 mb-10">
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
                  className="!text-cream hover:!text-brown hover:bg-cream/10"
                >
                  Explore Services
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  )
}