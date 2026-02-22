import Navigation from '@/components/layout/Navigation'
import Footer from '@/components/layout/Footer'
import Button from '@/components/ui/Button'
import { Target, Zap, Heart, Globe, Check, ArrowRight } from '@/components/ui/Icon'

const timeline = [
  {
    year: '2019',
    title: 'The Beginning',
    description: 'Founded in Ahmedabad with a vision to bridge Indian talent with EMEA opportunities. Secured our first placement in Dubai within 3 months.',
    stats: { placements: 25, clients: 8 },
  },
  {
    year: '2020',
    title: 'Dubai Expansion',
    description: 'Established strong partnerships in the UAE market. Despite global challenges, we placed 100+ candidates in Middle East roles.',
    stats: { placements: 150, clients: 45 },
  },
  {
    year: '2021',
    title: '500+ Milestone',
    description: 'Crossed 500 successful placements. Expanded services to include RPO for enterprise clients in London and Frankfurt.',
    stats: { placements: 520, clients: 120 },
  },
  {
    year: '2022',
    title: 'European Growth',
    description: 'Formed strategic alliances with UK and German recruitment firms. Launched specialized healthcare and fintech divisions.',
    stats: { placements: 850, clients: 195 },
  },
  {
    year: '2023',
    title: '1000+ Placements',
    description: 'Achieved our milestone of 1000+ placements. Recognized as a leading India-EMEA recruitment specialist.',
    stats: { placements: 1200, clients: 260 },
  },
  {
    year: '2024',
    title: '1500+ & Growing',
    description: 'Crossed 1500+ placements with 300+ satisfied clients. Continuing to expand our reach across EMEA.',
    stats: { placements: 1550, clients: 315 },
  },
]

const values = [
  {
    icon: Target,
    title: 'Precision',
    description: 'Every placement is carefully matched. We don\'t just fill positions—we find the perfect fit.',
  },
  {
    icon: Zap,
    title: 'Speed',
    description: 'Time is money. Our efficient processes ensure quick turnarounds without compromising quality.',
  },
  {
    icon: Heart,
    title: 'Integrity',
    description: 'Transparent communication and honest guidance. We build lasting relationships, not just transactions.',
  },
  {
    icon: Globe,
    title: 'Diversity',
    description: 'We champion inclusive hiring and help companies build diverse, high-performing teams.',
  },
]

const team = [
  {
    name: 'Priya Sharma',
    role: 'Founder & CEO',
    bio: '15+ years in international recruitment with a passion for connecting talent with opportunity.',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80',
  },
  {
    name: 'Rajesh Patel',
    role: 'Head of EMEA Operations',
    bio: 'Expert in European labor markets with deep connections across UK and Germany.',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=400&q=80',
  },
  {
    name: 'Aisha Khan',
    role: 'Executive Search Lead',
    bio: 'Specializes in C-suite placements with a track record of placing 50+ executives.',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=400&q=80',
  },
  {
    name: 'Vikram Singh',
    role: 'RPO Director',
    bio: 'Leads our enterprise RPO solutions, managing teams of 20+ recruiters.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80',
  },
]

export default function AboutPage() {
  return (
    <>
      <Navigation />
      
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-20 bg-gradient-to-b from-cream-dark to-cream">
          <div className="container">
            <div className="max-w-4xl mx-auto text-center">
              <span className="badge mb-6">Our Story</span>
              <h1 className="font-display text-fluid-hero font-bold text-brown mb-6 leading-tight">
                5+ Years of<br />
                <span className="text-gradient">Bridging Talent</span>
              </h1>
              <p className="text-fluid-xl text-gray-500 max-w-2xl mx-auto">
                From a small office in Ahmedabad to becoming a trusted partner for 
                300+ companies across EMEA. This is our journey.
              </p>
            </div>
          </div>
        </section>

        {/* Timeline Section */}
        <section className="section">
          <div className="container">
            <div className="text-center mb-16">
              <span className="text-emerald text-sm uppercase tracking-widest font-medium">
                Our Journey
              </span>
              <h2 className="font-display text-fluid-4xl font-bold text-brown mt-4">
                Growing Together
              </h2>
            </div>

            <div className="relative max-w-4xl mx-auto">
              {/* Timeline line */}
              <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gray-200 -translate-x-1/2" />

              {timeline.map((item, index) => (
                <div
                  key={item.year}
                  className={`relative flex items-center mb-12 ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* Year badge */}
                  <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-20 h-20 rounded-full bg-emerald text-cream flex items-center justify-center font-display text-lg font-bold z-10 shadow-large">
                    {item.year}
                  </div>

                  {/* Content */}
                  <div className={`ml-28 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-16 md:text-right' : 'md:pl-16'}`}>
                    <h3 className="font-display text-fluid-xl font-bold text-brown mb-2">
                      {item.title}
                    </h3>
                    <p className="text-gray-500 mb-3">
                      {item.description}
                    </p>
                    <div className={`flex gap-4 text-sm ${index % 2 === 0 ? 'md:justify-end' : ''}`}>
                      <span className="text-emerald font-bold">{item.stats.placements}+ placements</span>
                      <span className="text-gray-400">{item.stats.clients}+ clients</span>
                    </div>
                  </div>

                  {/* Spacer for opposite side */}
                  <div className="hidden md:block md:w-1/2" />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* India Advantage Section */}
        <section className="section bg-brown text-cream">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <span className="text-sun text-sm uppercase tracking-widest font-medium">
                  Strategic Location
                </span>
                <h2 className="font-display text-fluid-4xl font-bold mt-4 mb-6">
                  The India Advantage
                </h2>
                <p className="text-gray-300 text-lg mb-8">
                  India is home to one of the world's largest and most diverse talent pools. 
                  Our strategic location gives us unparalleled access to this resource while 
                  maintaining deep connections across EMEA.
                </p>
                
                <div className="grid grid-cols-2 gap-6">
                  {[
                    { value: '1.4M+', label: 'Engineering Graduates/Year' },
                    { value: '65%', label: 'English Proficiency' },
                    { value: '12+', label: 'Time Zones Covered' },
                    { value: '40%', label: 'Cost Efficiency' },
                  ].map((stat) => (
                    <div key={stat.label} className="text-center p-4 bg-cream/5 rounded-xl">
                      <div className="font-display text-3xl font-bold text-sun">
                        {stat.value}
                      </div>
                      <div className="text-gray-400 text-sm mt-1">
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="relative">
                <div className="aspect-video rounded-3xl overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&w=800&q=80"
                    alt="India"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-4 -right-4 bg-sun text-brown px-6 py-3 rounded-full font-bold shadow-large">
                  🇮🇳 India to EMEA
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Core Values */}
        <section className="section">
          <div className="container">
            <div className="text-center mb-16">
              <span className="text-emerald text-sm uppercase tracking-widest font-medium">
                What We Stand For
              </span>
              <h2 className="font-display text-fluid-4xl font-bold text-brown mt-4">
                Core Values
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value) => {
                const IconComponent = value.icon
                return (
                  <div
                    key={value.title}
                    className="text-center p-8 rounded-2xl bg-white border border-gray-200 hover:shadow-large transition-all duration-300 hover:-translate-y-2"
                  >
                    <div className="w-16 h-16 rounded-2xl bg-emerald/10 flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="w-8 h-8 text-emerald" />
                    </div>
                    <h3 className="font-display text-fluid-xl font-bold text-brown mb-2">
                      {value.title}
                    </h3>
                    <p className="text-gray-500 text-sm">
                      {value.description}
                    </p>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="section bg-cream-dark">
          <div className="container">
            <div className="text-center mb-16">
              <span className="text-emerald text-sm uppercase tracking-widest font-medium">
                The People Behind the Placements
              </span>
              <h2 className="font-display text-fluid-4xl font-bold text-brown mt-4">
                Meet the Curators
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {team.map((member) => (
                <div
                  key={member.name}
                  className="group relative overflow-hidden rounded-2xl bg-white"
                >
                  {/* Image */}
                  <div className="aspect-[3/4] relative overflow-hidden">
                    <img 
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    {/* Hover overlay */}
                    <div className="absolute inset-0 bg-brown/90 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <p className="text-cream text-sm text-center px-4">
                        {member.bio}
                      </p>
                    </div>
                  </div>
                  
                  <div className="p-6 text-center">
                    <h3 className="font-display text-lg font-bold text-brown">
                      {member.name}
                    </h3>
                    <p className="text-emerald text-sm font-medium">
                      {member.role}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section bg-gradient-to-br from-brown via-brown to-terracotta text-cream">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="font-display text-fluid-4xl font-bold mb-6">
                Join Our Story
              </h2>
              <p className="text-fluid-lg text-cream/80 mb-10">
                Whether you're a company looking for talent or a professional 
                seeking your next opportunity, we'd love to hear from you.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button
                  href="/contact?type=employer"
                  variant="primary"
                  size="lg"
                  icon={<ArrowRight className="w-5 h-5" />}
                >
                  Hire With Us
                </Button>
                <Button
                  href="/contact?type=candidate"
                  variant="ghost"
                  size="lg"
                  className="!text-cream hover:!text-brown hover:bg-cream/10"
                >
                  Find a Job
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