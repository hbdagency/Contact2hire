import Navigation from '@/components/layout/Navigation'
import Footer from '@/components/layout/Footer'
import Button from '@/components/ui/Button'
import { Calendar, Clock, ArrowLeft, Share2, Linkedin, Twitter, Facebook } from '@/components/ui/Icon'
import { notFound } from 'next/navigation'

// All articles data
const articles = [
  {
    id: 'emea-tech-hiring-2024',
    title: 'EMEA Tech Hiring Trends 2024: What Employers Need to Know',
    excerpt: 'The technology sector in EMEA is experiencing unprecedented growth. Indian tech professionals are in high demand, with a 40% increase in job postings from 2023. Here\'s how Contact to Hire can help you access this talent pool.',
    category: 'Market Report',
    date: '2024-01-15',
    readTime: '8 min',
    image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1200&q=80',
    howWeHelp: 'Our tech recruitment specialists have placed 450+ software engineers in EMEA companies, with an average time-to-fill of just 21 days.',
    content: `
      <p>The EMEA technology sector continues to show remarkable resilience and growth in 2024. Despite global economic uncertainties, companies across Europe, the Middle East, and Africa are aggressively expanding their tech teams.</p>
      
      <h2>Key Trends Shaping Tech Hiring</h2>
      
      <h3>1. Remote-First Becomes the Norm</h3>
      <p>Post-pandemic, most EMEA tech companies have embraced remote or hybrid work models. This opens doors for Indian tech professionals who can now work for European companies without relocating immediately.</p>
      
      <h3>2. AI and Machine Learning Dominate</h3>
      <p>There's a 300% increase in demand for AI/ML engineers compared to 2022. Indian engineers with expertise in Python, TensorFlow, and PyTorch are particularly sought after.</p>
      
      <h3>3. Cybersecurity Skills Gap</h3>
      <p>With increasing cyber threats, companies are urgently hiring security professionals. CISSP-certified professionals from India are commanding premium salaries in the UK and Germany.</p>
      
      <h2>Salary Benchmarks for Indian Tech Professionals</h2>
      <ul>
        <li><strong>Software Engineer (UK):</strong> £50,000 - £80,000</li>
        <li><strong>Data Scientist (Germany):</strong> €55,000 - €90,000</li>
        <li><strong>DevOps Engineer (Netherlands):</strong> €60,000 - €85,000</li>
        <li><strong>Tech Lead (Dubai):</strong> AED 25,000 - 40,000/month</li>
      </ul>
      
      <h2>How Contact to Hire Can Help</h2>
      <p>With our deep network across Indian tech hubs and strong relationships with EMEA employers, we bridge the gap between talent and opportunity. Our tech recruitment specialists have placed 450+ software engineers in EMEA companies, with an average time-to-fill of just 21 days.</p>
    `,
    stats: { views: 2450, shares: 180 },
  },
  {
    id: 'uk-skilled-worker-visa',
    title: 'UK Skilled Worker Visa: Complete Guide for Indian Professionals',
    excerpt: 'The UK Skilled Worker Visa is the primary route for Indian professionals to work in Britain. Learn about eligibility, sponsorship requirements, and how we streamline the process.',
    category: 'Relocation Guide',
    date: '2024-01-05',
    readTime: '15 min',
    image: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=1200&q=80',
    howWeHelp: 'Our visa support team has helped 500+ candidates successfully obtain UK work visas with a 100% success rate.',
    content: `
      <p>The UK Skilled Worker Visa has become the primary pathway for Indian professionals seeking to work in Britain. This comprehensive guide covers everything you need to know about the application process.</p>
      
      <h2>Eligibility Requirements</h2>
      <ul>
        <li>Job offer from a UK employer with a sponsor license</li>
        <li>Job at appropriate skill level (RQF Level 3 or above)</li>
        <li>English language proficiency (IELTS 6.0 or equivalent)</li>
        <li>Minimum salary threshold (£26,200 or going rate for the job)</li>
      </ul>
      
      <h2>The Application Process</h2>
      
      <h3>Step 1: Secure a Job Offer</h3>
      <p>The first step is securing a job offer from a UK employer who holds a sponsor license. This is where Contact to Hire excels – we connect you with verified employers actively seeking Indian talent.</p>
      
      <h3>Step 2: Certificate of Sponsorship (CoS)</h3>
      <p>Once you accept the offer, your employer will assign a Certificate of Sponsorship. This is a digital document with a reference number you'll need for your visa application.</p>
      
      <h3>Step 3: Visa Application</h3>
      <p>Submit your application online, pay the fees, and book your biometric appointment. Processing typically takes 3-8 weeks.</p>
      
      <h2>Costs Involved</h2>
      <ul>
        <li>Visa application fee: £719 - £1,500 (depending on circumstances)</li>
        <li>Healthcare surcharge: £624 per year</li>
        <li>Biometric enrollment: Included in application fee</li>
      </ul>
      
      <h2>How Contact to Hire Helps</h2>
      <p>Our visa support team has helped 500+ candidates successfully obtain UK work visas with a 100% success rate. We provide end-to-end assistance from job placement to visa approval.</p>
    `,
    stats: { views: 3200, shares: 290 },
  },
  {
    id: 'dubai-healthcare-guide',
    title: 'Healthcare Recruitment in Dubai: A Complete Guide for Employers',
    excerpt: 'Dubai\'s healthcare sector is expanding rapidly with new hospitals and clinics. We break down the licensing requirements, salary expectations, and how to source qualified Indian medical professionals.',
    category: 'Industry Guide',
    date: '2024-01-10',
    readTime: '12 min',
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1200&q=80',
    howWeHelp: 'We\'ve successfully placed 220+ healthcare professionals in UAE hospitals, handling DHA licensing and relocation seamlessly.',
    content: `
      <p>Dubai's healthcare sector is experiencing unprecedented growth, driven by medical tourism, population expansion, and government investment in world-class facilities.</p>
      
      <h2>Licensing Requirements</h2>
      
      <h3>DHA License (Dubai Health Authority)</h3>
      <p>Required for all healthcare professionals working in Dubai. The process includes:</p>
      <ul>
        <li>Primary source verification of qualifications</li>
        <li>Good standing certificate from home country</li>
        <li>Professional exam (for certain categories)</li>
        <li>Language proficiency requirements</li>
      </ul>
      
      <h3>MOH License</h3>
      <p>Required for healthcare professionals working in other emirates (Sharjah, Ajman, etc.)</p>
      
      <h2>Salary Expectations</h2>
      <ul>
        <li><strong>Specialist Doctor:</strong> AED 35,000 - 60,000/month</li>
        <li><strong>General Practitioner:</strong> AED 20,000 - 35,000/month</li>
        <li><strong>Registered Nurse:</strong> AED 8,000 - 15,000/month</li>
        <li><strong>Pharmacist:</strong> AED 10,000 - 18,000/month</li>
      </ul>
      
      <h2>Why Source from India?</h2>
      <p>India produces over 50,000 medical graduates annually. Indian healthcare professionals are known for:</p>
      <ul>
        <li>Strong clinical skills</li>
        <li>English proficiency</li>
        <li>Adaptability to diverse work environments</li>
        <li>Experience with high patient volumes</li>
      </ul>
      
      <h2>How Contact to Hire Can Help</h2>
      <p>We've successfully placed 220+ healthcare professionals in UAE hospitals, handling DHA licensing and relocation seamlessly. Our network includes specialists across all major medical fields.</p>
    `,
    stats: { views: 1890, shares: 145 },
  },
]

export async function generateStaticParams() {
  return articles.map((article) => ({
    slug: article.id,
  }))
}

export default function ArticlePage({ params }: { params: { slug: string } }) {
  const article = articles.find(a => a.id === params.slug)
  
  if (!article) {
    notFound()
  }

  return (
    <>
      <Navigation />
      
      <main>
        {/* Hero */}
        <section className="pt-32 pb-12 bg-gradient-to-b from-cream-dark to-cream">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <Button href="/insights" variant="ghost" size="sm" icon={<ArrowLeft className="w-4 h-4" />}>
                Back to Insights
              </Button>
              
              <span className="inline-block bg-emerald text-cream text-xs font-bold px-3 py-1 rounded-full mt-6">
                {article.category}
              </span>
              
              <h1 className="font-display text-fluid-4xl font-bold text-brown mt-4 mb-6">
                {article.title}
              </h1>
              
              <div className="flex items-center gap-6 text-gray-500 mb-8">
                <span className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  {new Date(article.date).toLocaleDateString('en-US', {
                    month: 'long',
                    day: 'numeric',
                    year: 'numeric',
                  })}
                </span>
                <span className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  {article.readTime} read
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Image */}
        <section className="pb-12">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <div className="aspect-[2/1] rounded-2xl overflow-hidden">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="pb-16">
          <div className="container">
            <div className="max-w-3xl mx-auto">
              {/* How we help box */}
              <div className="bg-sun/10 border border-sun/20 rounded-xl p-6 mb-8">
                <p className="text-brown font-medium">
                  <strong className="text-emerald">How we help:</strong> {article.howWeHelp}
                </p>
              </div>

              {/* Article content */}
              <div 
                className="prose prose-lg max-w-none prose-headings:font-display prose-headings:text-brown prose-p:text-gray-600 prose-a:text-emerald prose-a:no-underline hover:prose-a:underline prose-ul:text-gray-600 prose-li:marker:text-emerald"
                dangerouslySetInnerHTML={{ __html: article.content }}
              />

              {/* Share */}
              <div className="mt-12 pt-8 border-t border-gray-200">
                <div className="flex items-center justify-between">
                  <span className="text-gray-500 flex items-center gap-2">
                    <Share2 className="w-5 h-5" />
                    Share this article
                  </span>
                  <div className="flex gap-3">
                    <a href="#" className="w-10 h-10 rounded-full bg-blue-600 text-cream flex items-center justify-center hover:bg-blue-700 transition-colors">
                      <Linkedin className="w-5 h-5" />
                    </a>
                    <a href="#" className="w-10 h-10 rounded-full bg-sky-500 text-cream flex items-center justify-center hover:bg-sky-600 transition-colors">
                      <Twitter className="w-5 h-5" />
                    </a>
                    <a href="#" className="w-10 h-10 rounded-full bg-blue-800 text-cream flex items-center justify-center hover:bg-blue-900 transition-colors">
                      <Facebook className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="section bg-gradient-to-br from-brown via-brown to-terracotta text-cream">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="font-display text-fluid-3xl font-bold mb-6">
                Ready to Take the Next Step?
              </h2>
              <p className="text-cream/80 mb-8">
                Let our experts help you navigate your career journey or hiring needs.
              </p>
              <Button href="/contact" variant="primary" size="lg">
                Contact Us Today
              </Button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  )
}