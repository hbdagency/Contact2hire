import Navigation from '@/components/layout/Navigation'
import Footer from '@/components/layout/Footer'
import Hero from '@/components/sections/Hero'
import Metrics from '@/components/sections/Metrics'
import SectorGrid from '@/components/sections/SectorGrid'
import ClientMarquee from '@/components/sections/ClientMarquee'
import Button from '@/components/ui/Button'
import { ArrowRight, Calendar, Clock } from '@/components/ui/Icon'
import dynamic from 'next/dynamic'
import Link from 'next/link'

// Dynamically import the 3D component to avoid SSR issues
const TalentFlowGlobe = dynamic(() => import('@/components/3d/TalentFlowGlobe'), {
  ssr: false,
  loading: () => (
    <div className="w-full h-[500px] flex items-center justify-center bg-brown rounded-3xl">
      <div className="text-center text-cream">
        <div className="animate-spin w-8 h-8 border-2 border-sun border-t-transparent rounded-full mx-auto mb-4" />
        <p className="text-gray-400 text-sm">Loading 3D Globe...</p>
      </div>
    </div>
  ),
})

// Featured articles for homepage
const featuredArticles = [
  {
    id: 'emea-tech-hiring-2024',
    title: 'EMEA Tech Hiring Trends 2024',
    excerpt: 'The technology sector in EMEA is experiencing unprecedented growth. Indian tech professionals are in high demand.',
    category: 'Market Report',
    date: '2024-01-15',
    readTime: '8 min',
    image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'uk-skilled-worker-visa',
    title: 'UK Skilled Worker Visa Guide',
    excerpt: 'Everything you need to know about the UK Skilled Worker Visa process for Indian professionals.',
    category: 'Relocation Guide',
    date: '2024-01-05',
    readTime: '15 min',
    image: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'dubai-healthcare-guide',
    title: 'Healthcare Recruitment in Dubai',
    excerpt: 'Navigate the complexities of hiring medical professionals for Dubai\'s growing healthcare sector.',
    category: 'Industry Guide',
    date: '2024-01-10',
    readTime: '12 min',
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=800&q=80',
  },
]

export default function Home() {
  return (
    <>
      <Navigation />
      
      <main>
        {/* Hero Section */}
        <Hero />
        
        {/* Metrics Section */}
        <Metrics />
        
        {/* Narrative Section */}
        <section className="section">
          <div className="container">
            <div className="max-w-4xl mx-auto text-center">
              <span className="text-emerald text-sm uppercase tracking-widest font-medium">
                Our Philosophy
              </span>
              <h2 className="font-display text-fluid-4xl font-bold text-brown mt-4 mb-8 leading-tight">
                We don't just find jobs.<br />
                We architect careers and build teams.
              </h2>
              <p className="text-fluid-lg text-gray-500 leading-relaxed mb-8">
                For over 5 years, Contact to Hire has been the bridge between India's 
                exceptional talent pool and EMEA's most ambitious companies. Our precision 
                hiring approach ensures the perfect match—every time.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button href="/about" variant="primary" size="md">
                  Our Story
                </Button>
                <Button href="/services" variant="secondary" size="md">
                  What We Do
                </Button>
              </div>
            </div>
          </div>
        </section>
        
        {/* 3D Globe Section */}
        <section className="section bg-cream-dark">
          <div className="container">
            <div className="text-center mb-12">
              <span className="text-emerald text-sm uppercase tracking-widest font-medium">
                Global Reach
              </span>
              <h2 className="font-display text-fluid-4xl font-bold text-brown mt-4">
                India to EMEA Talent Flow
              </h2>
              <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
                Explore our interactive 3D globe showing talent flow from India to EMEA destinations.
              </p>
            </div>
            <div className="relative h-[600px] bg-brown rounded-3xl overflow-hidden">
              <TalentFlowGlobe />
            </div>
          </div>
        </section>
        
        {/* Featured Sectors */}
        <SectorGrid />
        
        {/* Featured Articles */}
        <section className="section bg-cream-dark">
          <div className="container">
            <div className="flex items-center justify-between mb-12">
              <div>
                <span className="text-emerald text-sm uppercase tracking-widest font-medium">
                  Latest Insights
                </span>
                <h2 className="font-display text-fluid-4xl font-bold text-brown mt-4">
                  Featured Articles
                </h2>
              </div>
              <Button href="/insights" variant="secondary" size="md" icon={<ArrowRight className="w-4 h-4" />}>
                View All
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {featuredArticles.map((article) => (
                <Link
                  key={article.id}
                  href={`/insights/${article.id}`}
                  className="group bg-white rounded-2xl overflow-hidden border border-gray-200 hover:shadow-large transition-all duration-300"
                >
                  <div className="aspect-[16/9] relative overflow-hidden">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-emerald text-cream text-xs font-bold px-3 py-1 rounded-full">
                        {article.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-4 text-sm text-gray-400 mb-3">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {new Date(article.date).toLocaleDateString('en-US', {
                          month: 'short',
                          day: 'numeric',
                          year: 'numeric',
                        })}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {article.readTime}
                      </span>
                    </div>
                    <h3 className="font-display text-lg font-bold text-brown mb-2 group-hover:text-emerald transition-colors">
                      {article.title}
                    </h3>
                    <p className="text-gray-500 text-sm">
                      {article.excerpt}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
        
        {/* Client Logos Marquee */}
        <ClientMarquee />
        
        {/* CTA Section */}
        <section className="section bg-gradient-to-br from-brown via-brown to-terracotta text-cream relative overflow-hidden">
          {/* Background pattern */}
          <div className="absolute inset-0 opacity-10">
            <div 
              className="absolute inset-0"
              style={{
                backgroundImage: `radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)`,
                backgroundSize: '40px 40px'
              }}
            />
          </div>
          
          <div className="container relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="font-display text-fluid-4xl font-bold mb-6">
                Ready to Build Your Dream Team?
              </h2>
              <p className="text-fluid-lg text-cream/80 mb-10">
                Whether you're scaling your team or seeking your next career move, 
                we're here to make it happen.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button 
                  href="/contact?type=employer" 
                  variant="primary" 
                  size="lg"
                  icon={<ArrowRight className="w-5 h-5" />}
                >
                  Start Hiring Today
                </Button>
                <Button 
                  href="/contact?type=candidate" 
                  variant="ghost" 
                  size="lg"
                  className="!text-cream hover:!text-brown hover:bg-cream/10"
                >
                  Explore Opportunities
                </Button>
              </div>
            </div>
          </div>
          
          {/* Decorative elements */}
          <div className="absolute top-10 left-10 w-32 h-32 bg-sun/20 rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-10 w-48 h-48 bg-terracotta/20 rounded-full blur-3xl" />
        </section>
      </main>
      
      <Footer />
    </>
  )
}