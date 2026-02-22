import Navigation from '@/components/layout/Navigation'
import Footer from '@/components/layout/Footer'
import Button from '@/components/ui/Button'
import { Globe, Briefcase, TrendingUp, Sparkles, Check, ArrowRight } from '@/components/ui/Icon'

const services = [
  {
    id: 'emea',
    title: 'EMEA Specialization',
    subtitle: 'Regional Expertise',
    description: 'Deep understanding of European and Middle Eastern labor laws, cultural nuances, and market dynamics. We navigate the complexities so you don\'t have to.',
    features: [
      'European Labor Law Compliance',
      'Middle East Work Culture Integration',
      'Visa & Relocation Support',
      'Cultural Training Programs',
      'Local Market Intelligence',
    ],
    stats: { placements: 850, countries: 15 },
    icon: Globe,
  },
  {
    id: 'executive',
    title: 'Executive Search',
    subtitle: 'White-Glove Service',
    description: 'Confidential, thorough executive recruitment for C-suite and senior leadership positions. We find leaders who transform organizations.',
    features: [
      'C-Suite Recruitment',
      'Board Level Placements',
      'Confidential Search',
      'Leadership Assessment',
      'Compensation Consulting',
    ],
    stats: { placements: 120, avgTime: '45 days' },
    icon: Briefcase,
  },
  {
    id: 'rpo',
    title: 'RPO Services',
    subtitle: 'Scale-Up Solutions',
    description: 'Comprehensive Recruitment Process Outsourcing for companies scaling their teams. We become your dedicated talent acquisition partner.',
    features: [
      'End-to-End Recruitment',
      'Dedicated Recruiting Team',
      'Process Optimization',
      'Technology Integration',
      'Reporting & Analytics',
    ],
    stats: { clients: 45, hires: '500+/year' },
    icon: TrendingUp,
  },
  {
    id: 'curating',
    title: 'Candidate Curating',
    subtitle: 'Quality Over Quantity',
    description: 'Rigorous vetting process ensuring only the most qualified candidates reach your desk. Our multi-stage assessment guarantees excellence.',
    features: [
      'Skills Assessment',
      'Cultural Fit Evaluation',
      'Reference Verification',
      'Background Checks',
      'Technical Testing',
    ],
    stats: { passRate: '8%', qualityScore: '98%' },
    icon: Sparkles,
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

export default function ServicesPage() {
  return (
    <>
      <Navigation />
      
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-20 bg-gradient-to-b from-cream-dark to-cream">
          <div className="container">
            <div className="max-w-4xl mx-auto text-center">
              <span className="badge mb-6">Our Expertise</span>
              <h1 className="font-display text-fluid-hero font-bold text-brown mb-6 leading-tight">
                Specialized Recruitment<br />
                <span className="text-gradient">Solutions</span>
              </h1>
              <p className="text-fluid-xl text-gray-500 max-w-2xl mx-auto">
                Tailored recruitment services designed for the India-EMEA corridor. 
                From executive search to RPO, we deliver exceptional talent.
              </p>
            </div>
          </div>
        </section>

        {/* Services Cards */}
        <section className="section">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {services.map((service) => {
                const IconComponent = service.icon
                return (
                  <div
                    key={service.id}
                    id={service.id}
                    className="card-bento p-8 lg:p-10 group hover:bg-brown transition-all duration-500"
                  >
                    <div className="flex items-start justify-between mb-6">
                      <div>
                        <span className="text-sm uppercase tracking-widest text-gray-400 group-hover:text-gray-400 transition-colors">
                          {service.subtitle}
                        </span>
                        <h3 className="font-display text-fluid-2xl font-bold text-brown group-hover:text-cream transition-colors mt-2">
                          {service.title}
                        </h3>
                      </div>
                      <div className="w-14 h-14 rounded-2xl bg-emerald/10 group-hover:bg-sun/20 flex items-center justify-center transition-colors">
                        <IconComponent className="w-7 h-7 text-emerald group-hover:text-sun transition-colors" />
                      </div>
                    </div>
                    
                    <p className="text-gray-500 group-hover:text-gray-300 transition-colors mb-6">
                      {service.description}
                    </p>
                    
                    <ul className="space-y-3 mb-6">
                      {service.features.map((feature) => (
                        <li
                          key={feature}
                          className="flex items-center gap-3 text-brown group-hover:text-cream transition-colors"
                        >
                          <Check className="w-5 h-5 text-emerald group-hover:text-sun transition-colors flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>

                    {/* Stats */}
                    <div className="flex gap-6 pt-4 border-t border-gray-200 group-hover:border-cream/20 transition-colors">
                      {Object.entries(service.stats).map(([key, value]) => (
                        <div key={key}>
                          <div className="font-display text-xl font-bold text-emerald group-hover:text-sun transition-colors">
                            {value}
                          </div>
                          <div className="text-xs text-gray-400 group-hover:text-gray-300 transition-colors">
                            {key === 'placements' ? 'Placements' : 
                             key === 'countries' ? 'Countries' :
                             key === 'clients' ? 'Active Clients' :
                             key === 'avgTime' ? 'Avg. Time' :
                             key === 'hires' ? 'Annual Hires' :
                             key === 'passRate' ? 'Pass Rate' : 'Quality Score'}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="section bg-brown text-cream">
          <div className="container">
            <div className="text-center mb-16">
              <span className="text-sun text-sm uppercase tracking-widest font-medium">
                Our Approach
              </span>
              <h2 className="font-display text-fluid-4xl font-bold mt-4">
                How We Work
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {process.map((item, index) => (
                <div key={item.step} className="relative">
                  {/* Connector line */}
                  {index < process.length - 1 && (
                    <div className="hidden lg:block absolute top-8 left-1/2 w-full h-0.5 bg-cream/20">
                      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 bg-sun rounded-full" />
                    </div>
                  )}
                  
                  <div className="text-center">
                    <span className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-sun/20 text-sun font-display text-2xl font-bold mb-4">
                      {item.step}
                    </span>
                    <h3 className="font-display text-fluid-xl font-bold mb-2">
                      {item.title}
                    </h3>
                    <p className="text-gray-300 mb-2">
                      {item.description}
                    </p>
                    <span className="text-xs text-sun font-medium">
                      {item.duration}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* EMEA Deep Dive */}
        <section className="section">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <span className="text-emerald text-sm uppercase tracking-widest font-medium">
                  Regional Expertise
                </span>
                <h2 className="font-display text-fluid-4xl font-bold text-brown mt-4 mb-6">
                  The EMEA Advantage
                </h2>
                <p className="text-gray-500 text-lg mb-8">
                  Our strategic location in India positions us perfectly to bridge the gap 
                  between Indian talent and EMEA opportunities. We understand both worlds 
                  and help you navigate the complexities.
                </p>
                
                <div className="space-y-4">
                  {[
                    { title: 'European Labor Laws', desc: 'GDPR compliance, work permits, and employment regulations across 27 EU countries' },
                    { title: 'Middle East Culture', desc: 'Understanding business etiquette, workplace norms, and regional expectations' },
                    { title: 'Visa & Relocation', desc: 'End-to-end support for international moves, including documentation and settling-in' },
                    { title: 'Cultural Integration', desc: 'Pre-departure training and ongoing support for seamless adaptation' },
                  ].map((item) => (
                    <div key={item.title} className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-full bg-emerald/10 flex items-center justify-center flex-shrink-0">
                        <Check className="w-5 h-5 text-emerald" />
                      </div>
                      <div>
                        <h4 className="font-bold text-brown">{item.title}</h4>
                        <p className="text-gray-500 text-sm">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="relative">
                <div className="aspect-square rounded-3xl overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1526470608268-f674ce90ebd4?auto=format&fit=crop&w=800&q=80"
                    alt="Global business"
                    className="w-full h-full object-cover"
                  />
                </div>
                
                {/* Floating badges */}
                <div className="absolute -top-4 -right-4 bg-sun text-brown px-4 py-2 rounded-full font-bold text-sm shadow-large">
                  🇮🇳 India HQ
                </div>
                <div className="absolute -bottom-4 -left-4 bg-cream text-brown px-4 py-2 rounded-full font-bold text-sm shadow-large border border-gray-200">
                  🌍 15+ EMEA Countries
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section bg-gradient-to-br from-brown via-brown to-terracotta text-cream">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="font-display text-fluid-4xl font-bold mb-6">
                Ready to Transform Your Hiring?
              </h2>
              <p className="text-fluid-lg text-cream/80 mb-10">
                Let's discuss how our specialized services can help you find 
                the perfect talent for your organization.
              </p>
              <Button
                href="/contact?type=employer"
                variant="primary"
                size="lg"
                icon={<ArrowRight className="w-5 h-5" />}
              >
                Schedule a Consultation
              </Button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  )
}