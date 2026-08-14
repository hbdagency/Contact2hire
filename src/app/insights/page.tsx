import Navigation from '@/components/layout/Navigation'
import Footer from '@/components/layout/Footer'
import Button from '@/components/ui/Button'
import Link from 'next/link'
import { Calendar, Clock, ArrowRight, TrendingUp, MapPin, Briefcase, Globe, Users, Building2, Plane, FileText, Award } from '@/components/ui/Icon'

const articles = [
  // Market Reports
  {
    id: 'emea-tech-hiring-2024',
    title: 'EMEA Tech Hiring Trends 2024: What Employers Need to Know',
    excerpt: 'The technology sector in EMEA is experiencing unprecedented growth. Indian tech professionals are in high demand, with a 40% increase in job postings from 2023. Here\'s how Contact to Hire can help you access this talent pool.',
    category: 'Market Report',
    date: '2024-01-15',
    readTime: '8 min',
    image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80',
    featured: true,
    howWeHelp: 'Our tech recruitment specialists have placed 450+ software engineers in EMEA companies, with an average time-to-fill of just 21 days.',
    stats: { views: 2450, shares: 180 },
  },
  {
    id: 'dubai-healthcare-guide',
    title: 'Healthcare Recruitment in Dubai: A Complete Guide for Employers',
    excerpt: 'Dubai\'s healthcare sector is expanding rapidly with new hospitals and clinics. We break down the licensing requirements, salary expectations, and how to source qualified Indian medical professionals.',
    category: 'Industry Guide',
    date: '2024-01-10',
    readTime: '12 min',
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=800&q=80',
    featured: true,
    howWeHelp: 'We\'ve successfully placed 220+ healthcare professionals in UAE hospitals, handling DHA licensing and relocation seamlessly.',
    stats: { views: 1890, shares: 145 },
  },
  {
    id: 'uk-skilled-worker-visa',
    title: 'UK Skilled Worker Visa: Complete Guide for Indian Professionals',
    excerpt: 'The UK Skilled Worker Visa is the primary route for Indian professionals to work in Britain. Learn about eligibility, sponsorship requirements, and how we streamline the process.',
    category: 'Relocation Guide',
    date: '2024-01-05',
    readTime: '15 min',
    image: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=800&q=80',
    featured: true,
    howWeHelp: 'Our visa support team has helped 500+ candidates successfully obtain UK work visas with a 100% success rate.',
    stats: { views: 3200, shares: 290 },
  },
  {
    id: 'germany-job-seeker-visa',
    title: 'Germany Job Seeker Visa: Your Pathway to Europe\'s Largest Economy',
    excerpt: 'Germany\'s Job Seeker Visa allows qualified professionals to search for work. Discover eligibility criteria, required documents, and how we connect you with German employers.',
    category: 'Relocation Guide',
    date: '2023-12-28',
    readTime: '10 min',
    image: 'https://images.unsplash.com/photo-1467269204594-9661b134dd2b?auto=format&fit=crop&w=800&q=80',
    featured: false,
    howWeHelp: 'We partner with 50+ German companies actively seeking Indian talent, particularly in engineering and IT sectors.',
    stats: { views: 2100, shares: 175 },
  },
  {
    id: 'fintech-talent-emea',
    title: 'Building Fintech Teams: How Indian Talent is Transforming EMEA Finance',
    excerpt: 'From London to Dubai, fintech companies are leveraging Indian talent for innovation. Learn about the skills in demand and salary benchmarks across EMEA markets.',
    category: 'Market Report',
    date: '2023-12-20',
    readTime: '7 min',
    image: 'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&w=800&q=80',
    featured: false,
    howWeHelp: 'Our fintech recruitment division has placed 120+ professionals in roles ranging from quantitative analysts to CTOs.',
    stats: { views: 1650, shares: 120 },
  },
  {
    id: 'saudi-vision-2030',
    title: 'Saudi Vision 2030: Massive Opportunities for Indian Professionals',
    excerpt: 'Saudi Arabia\'s transformation is creating unprecedented demand for skilled professionals. Explore the sectors with the highest demand and how to navigate the Saudi job market.',
    category: 'Market Report',
    date: '2023-12-15',
    readTime: '9 min',
    image: 'https://images.unsplash.com/photo-1586724237569-f3d0c1dee8c6?auto=format&fit=crop&w=800&q=80',
    featured: false,
    howWeHelp: 'We\'ve placed 150+ professionals in Saudi Arabia across healthcare, construction, and finance sectors.',
    stats: { views: 1980, shares: 165 },
  },
  {
    id: 'netherlands-tech-visa',
    title: 'Netherlands Tech Visa: Fast-Track Your European Tech Career',
    excerpt: 'The Dutch startup visa and tech visa programs offer accelerated paths for Indian tech professionals. Learn about the requirements and opportunities in Amsterdam\'s thriving tech scene.',
    category: 'Relocation Guide',
    date: '2023-12-10',
    readTime: '8 min',
    image: 'https://images.unsplash.com/photo-1534351590666-13e3e96b5017?auto=format&fit=crop&w=800&q=80',
    featured: false,
    howWeHelp: 'Our Amsterdam partners are actively hiring Indian developers, and we handle the entire relocation process.',
    stats: { views: 1450, shares: 95 },
  },
  {
    id: 'ireland-critical-skills',
    title: 'Ireland Critical Skills Visa: Gateway to European Tech',
    excerpt: 'Ireland\'s Critical Skills Employment Permit is designed for high-demand professions. Discover why Indian tech professionals are choosing Dublin as their European base.',
    category: 'Relocation Guide',
    date: '2023-12-05',
    readTime: '11 min',
    image: 'https://images.unsplash.com/photo-1501901609772-df0848060b33?auto=format&fit=crop&w=800&q=80',
    featured: false,
    howWeHelp: 'We\'ve helped 55+ professionals relocate to Ireland, with roles at major tech companies in Dublin.',
    stats: { views: 1320, shares: 88 },
  },
  {
    id: 'qatar-world-cup-legacy',
    title: 'Qatar Post-World Cup: Sustained Demand for Indian Professionals',
    excerpt: 'Despite the World Cup ending, Qatar\'s development continues. Explore the ongoing opportunities in construction, hospitality, and finance for Indian professionals.',
    category: 'Market Report',
    date: '2023-11-28',
    readTime: '6 min',
    image: 'https://images.unsplash.com/photo-1586724237569-f3d0c1dee8c6?auto=format&fit=crop&w=800&q=80',
    featured: false,
    howWeHelp: 'Our Qatar placements have grown 30% year-over-year, with 70+ successful placements in 2023.',
    stats: { views: 1180, shares: 72 },
  },
  {
    id: 'uae-golden-visa',
    title: 'UAE Golden Visa: Long-Term Residency for Indian Professionals',
    excerpt: 'The UAE Golden Visa offers 10-year residency for qualified professionals. Learn about eligibility categories and how to position yourself for this prestigious visa.',
    category: 'Relocation Guide',
    date: '2023-11-20',
    readTime: '9 min',
    image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=800&q=80',
    featured: false,
    howWeHelp: 'Many of our placed candidates have successfully obtained Golden Visas through their employers.',
    stats: { views: 2340, shares: 210 },
  },
  {
    id: 'manufacturing-germany',
    title: 'German Manufacturing: Opportunities for Indian Engineers',
    excerpt: 'Germany\'s manufacturing sector faces a skills shortage of 300,000 workers. Indian engineers with Industry 4.0 skills are in high demand.',
    category: 'Industry Guide',
    date: '2023-11-15',
    readTime: '7 min',
    image: 'https://images.unsplash.com/photo-1565043589221-1a6fd9ae45c7?auto=format&fit=crop&w=800&q=80',
    featured: false,
    howWeHelp: 'We\'ve placed 180+ manufacturing professionals in German companies, with German language support included.',
    stats: { views: 1560, shares: 125 },
  },
  {
    id: 'oil-gas-middle-east',
    title: 'Oil & Gas Sector in Middle East: Career Guide for Indian Engineers',
    excerpt: 'The Middle East remains a prime destination for Indian petroleum engineers. Understand the market dynamics, salary expectations, and career growth opportunities.',
    category: 'Industry Guide',
    date: '2023-11-08',
    readTime: '8 min',
    image: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=800&q=80',
    featured: false,
    howWeHelp: 'Our energy sector specialists have placed 370+ professionals in oil & gas roles across the Middle East.',
    stats: { views: 1890, shares: 156 },
  },
  {
    id: 'remote-work-emea',
    title: 'Remote Work Opportunities: Indian Professionals Working for EMEA Companies',
    excerpt: 'Remote work has opened new doors for Indian professionals. Learn about companies hiring remotely and how to navigate time zone and legal considerations.',
    category: 'Career Tips',
    date: '2023-11-01',
    readTime: '6 min',
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80',
    featured: false,
    howWeHelp: 'We facilitate remote work arrangements with proper contracts and compliance for 50+ active clients.',
    stats: { views: 2780, shares: 245 },
  },
  {
    id: 'salary-negotiation-emea',
    title: 'Salary Negotiation for EMEA Roles: A Guide for Indian Professionals',
    excerpt: 'Understanding salary benchmarks and negotiation tactics is crucial. Learn how to negotiate effectively for roles in UK, Germany, UAE, and other EMEA markets.',
    category: 'Career Tips',
    date: '2023-10-25',
    readTime: '7 min',
    image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=800&q=80',
    featured: false,
    howWeHelp: 'Our candidates negotiate 15-20% higher salaries on average with our guidance and market insights.',
    stats: { views: 3120, shares: 287 },
  },
  {
    id: 'cultural-adaptation-uk',
    title: 'Cultural Adaptation: Indian Professionals in the UK Workplace',
    excerpt: 'Success in the UK workplace requires understanding cultural nuances. This guide covers communication styles, workplace etiquette, and building professional relationships.',
    category: 'Career Tips',
    date: '2023-10-18',
    readTime: '8 min',
    image: 'https://images.unsplash.com/photo-1529156067168-079514df72d6?auto=format&fit=crop&w=800&q=80',
    featured: false,
    howWeHelp: 'We provide cultural training and ongoing support to ensure our candidates thrive in their new environments.',
    stats: { views: 1890, shares: 167 },
  },
  {
    id: 'dubai-real-estate-jobs',
    title: 'Dubai Real Estate Boom: Opportunities for Indian Professionals',
    excerpt: 'Dubai\'s real estate market is experiencing record growth. Explore career opportunities in property management, sales, and development for Indian professionals.',
    category: 'Industry Guide',
    date: '2023-10-10',
    readTime: '6 min',
    image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=800&q=80',
    featured: false,
    howWeHelp: 'We\'ve placed 45+ real estate professionals in Dubai firms, with RERA certification support.',
    stats: { views: 1340, shares: 98 },
  },
  {
    id: 'data-science-europe',
    title: 'Data Science Careers in Europe: Market Outlook for 2024',
    excerpt: 'European companies are investing heavily in data capabilities. Indian data scientists are among the most sought-after professionals. Here\'s what you need to know.',
    category: 'Market Report',
    date: '2023-10-03',
    readTime: '9 min',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80',
    featured: false,
    howWeHelp: 'Our data science placements have grown 60% year-over-year, with roles at Fortune 500 companies.',
    stats: { views: 2450, shares: 198 },
  },
  {
    id: 'cybersecurity-demand',
    title: 'Cybersecurity Skills Gap: Indian Professionals Filling EMEA Needs',
    excerpt: 'With cyber threats increasing, EMEA companies are urgently hiring cybersecurity professionals. Indian experts are well-positioned to fill this critical gap.',
    category: 'Market Report',
    date: '2023-09-25',
    readTime: '7 min',
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=800&q=80',
    featured: false,
    howWeHelp: 'We\'ve placed 85+ cybersecurity professionals in EMEA roles, with salaries ranging from €60K to €150K.',
    stats: { views: 1780, shares: 145 },
  },
  {
    id: 'nursing-uk-nhs',
    title: 'NHS Nursing Recruitment: Pathway for Indian Nurses',
    excerpt: 'The UK NHS continues to recruit Indian nurses to address staffing shortages. Learn about the NMC registration process and what to expect.',
    category: 'Industry Guide',
    date: '2023-09-18',
    readTime: '10 min',
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=800&q=80',
    featured: false,
    howWeHelp: 'We\'ve helped 120+ Indian nurses secure NHS positions with full NMC registration support.',
    stats: { views: 2890, shares: 256 },
  },
  {
    id: 'aviation-jobs-uae',
    title: 'Aviation Careers in UAE: Opportunities Beyond Pilots',
    excerpt: 'The UAE aviation sector offers diverse career opportunities beyond cockpit roles. Explore ground operations, engineering, and management positions.',
    category: 'Industry Guide',
    date: '2023-09-10',
    readTime: '6 min',
    image: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=800&q=80',
    featured: false,
    howWeHelp: 'Our aviation recruitment has placed 65+ professionals in UAE airlines and airports.',
    stats: { views: 1450, shares: 112 },
  },
  {
    id: 'interview-tips-emea',
    title: 'Interview Success: Tips for Indian Professionals Interviewing with EMEA Companies',
    excerpt: 'Interview styles vary across cultures. Prepare effectively for interviews with UK, German, and Middle Eastern employers with these proven strategies.',
    category: 'Career Tips',
    date: '2023-09-03',
    readTime: '8 min',
    image: 'https://images.unsplash.com/photo-1565439398536-85fa16d00d45?auto=format&fit=crop&w=800&q=80',
    featured: false,
    howWeHelp: 'Our interview coaching has helped candidates achieve a 78% success rate in final rounds.',
    stats: { views: 3450, shares: 312 },
  },
  {
    id: 'france-tech-visa',
    title: 'French Tech Visa: Joining Europe\'s Growing Startup Ecosystem',
    excerpt: 'France\'s Tech Visa program fast-tracks talent for startups. Discover opportunities in Paris\'s thriving tech scene and how to qualify.',
    category: 'Relocation Guide',
    date: '2023-08-28',
    readTime: '7 min',
    image: 'https://images.unsplash.com/photo-1502602898657-3e93160c0c0b?auto=format&fit=crop&w=800&q=80',
    featured: false,
    howWeHelp: 'We partner with French startups actively hiring Indian developers and product managers.',
    stats: { views: 1230, shares: 89 },
  },
  {
    id: 'construction-saudi',
    title: 'Saudi Construction Boom: Project Management Opportunities',
    excerpt: 'Mega-projects like NEOM and Qiddiya are creating massive demand for Indian construction professionals. Explore roles and salary expectations.',
    category: 'Industry Guide',
    date: '2023-08-20',
    readTime: '8 min',
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=80',
    featured: false,
    howWeHelp: 'We\'ve placed 95+ construction professionals in Saudi mega-projects with competitive packages.',
    stats: { views: 1670, shares: 134 },
  },
  {
    id: 'resume-tips-international',
    title: 'CV Writing for International Roles: Stand Out to EMEA Employers',
    excerpt: 'Your CV is your first impression. Learn how to format your resume for UK, European, and Middle Eastern employers to maximize your chances.',
    category: 'Career Tips',
    date: '2023-08-15',
    readTime: '6 min',
    image: 'https://images.unsplash.com/photo-1586281380349-632531db7ed4?auto=format&fit=crop&w=800&q=80',
    featured: false,
    howWeHelp: 'We provide professional CV optimization services that have increased interview rates by 40%.',
    stats: { views: 2890, shares: 267 },
  },
]

const categories = [
  { name: 'All', count: 24 },
  { name: 'Market Report', count: 6 },
  { name: 'Relocation Guide', count: 6 },
  { name: 'Industry Guide', count: 6 },
  { name: 'Career Tips', count: 6 },
]

const popularTags = [
  'UK Visa', 'Dubai Jobs', 'Tech Careers', 'Healthcare', 
  'Germany', 'Saudi Arabia', 'Finance', 'Remote Work',
]

export default function InsightsPage() {
  const featuredArticles = articles.filter(a => a.featured)
  const regularArticles = articles.filter(a => !a.featured)

  return (
    <>
      <Navigation />
      
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-20 bg-white">
          <div className="container">
            <div className="max-w-4xl mx-auto text-center">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-brand-violet/10 text-brand-violet text-xs font-bold uppercase tracking-widest rounded-full mb-6">
                Insights & Resources
              </span>
              <h1 className="font-display text-fluid-hero font-extrabold text-gray-900 mb-6 leading-tight">
                Knowledge Hub<br />
                <span className="text-gradient">For Talent & Employers</span>
              </h1>
              <p className="text-fluid-xl text-gray-500 max-w-2xl mx-auto">
                Expert insights on EMEA hiring trends, relocation guides, and 
                career advice for Indian professionals. Learn how Contact to Hire 
                can accelerate your journey.
              </p>
            </div>
          </div>
        </section>

        {/* Featured Articles */}
        <section className="section">
          <div className="container">
            <div className="flex items-center justify-between mb-8">
              <h2 className="font-display text-fluid-2xl font-extrabold text-gray-900">
                Featured Articles
              </h2>
              <span className="text-brand-violet text-sm font-medium">
                Latest Updates
              </span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
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
                      <span className="bg-brand-lime text-gray-900 text-xs font-bold px-3 py-1 rounded-full">
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
                    <h3 className="font-display text-lg font-extrabold text-gray-900 mb-2 group-hover:text-brand-violet transition-colors line-clamp-2">
                      {article.title}
                    </h3>
                    <p className="text-gray-500 text-sm mb-4 line-clamp-2">
                      {article.excerpt}
                    </p>
                    <div className="bg-brand-lime/10 rounded-lg p-3 mb-4">
                      <p className="text-gray-900 text-sm font-medium">
                        <strong className="text-brand-violet">How we help:</strong> {article.howWeHelp}
                      </p>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-400">
                        {article.stats.views.toLocaleString()} views
                      </span>
                      <span className="text-brand-violet font-medium text-sm flex items-center gap-1 group-hover:gap-2 transition-all">
                        Read More <ArrowRight className="w-4 h-4" />
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Main Content Grid */}
        <section className="section bg-white">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
              {/* Articles List */}
              <div className="lg:col-span-3">
                <h2 className="font-display text-fluid-2xl font-extrabold text-gray-900 mb-8">
                  All Articles
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {regularArticles.map((article) => (
                    <Link
                      key={article.id}
                      href={`/insights/${article.id}`}
                      className="group bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-medium transition-all duration-300"
                    >
                      <div className="aspect-[16/10] relative overflow-hidden">
                        <img
                          src={article.image}
                          alt={article.title}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        <div className="absolute top-3 left-3">
                          <span className="bg-surface-dark/80 text-white text-xs font-bold px-2 py-1 rounded-full">
                            {article.category}
                          </span>
                        </div>
                      </div>
                      <div className="p-5">
                        <div className="flex items-center gap-3 text-xs text-gray-400 mb-2">
                          <span>{new Date(article.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}</span>
                          <span>•</span>
                          <span>{article.readTime}</span>
                        </div>
                        <h3 className="font-display text-base font-extrabold text-gray-900 mb-2 group-hover:text-brand-violet transition-colors line-clamp-2">
                          {article.title}
                        </h3>
                        <p className="text-gray-500 text-sm line-clamp-2 mb-3">
                          {article.excerpt}
                        </p>
                        <div className="bg-brand-lime/5 rounded-lg p-2">
                          <p className="text-gray-900 text-xs line-clamp-2">
                            <strong className="text-brand-violet">How we help:</strong> {article.howWeHelp}
                          </p>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Sidebar */}
              <div className="lg:col-span-1">
                {/* Categories */}
                <div className="bg-white rounded-xl p-6 border border-gray-200 mb-6">
                  <h3 className="font-display text-lg font-extrabold text-gray-900 mb-4">
                    Categories
                  </h3>
                  <ul className="space-y-2">
                    {categories.map((cat) => (
                      <li key={cat.name}>
                        <button className="w-full flex items-center justify-between py-2 px-3 rounded-lg hover:bg-gray-100 transition-colors text-left">
                          <span className="text-gray-600">{cat.name}</span>
                          <span className="text-gray-400 text-sm">{cat.count}</span>
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Popular Tags */}
                <div className="bg-white rounded-xl p-6 border border-gray-200 mb-6">
                  <h3 className="font-display text-lg font-extrabold text-gray-900 mb-4">
                    Popular Tags
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {popularTags.map((tag) => (
                      <span
                        key={tag}
                        className="bg-gray-100 text-gray-900 text-sm px-3 py-1 rounded-full hover:bg-brand-violet hover:text-white transition-colors cursor-pointer"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Newsletter CTA */}
                <div className="bg-surface-dark rounded-xl p-6 text-white">
                  <h3 className="font-display text-lg font-extrabold mb-2">
                    Stay Updated
                  </h3>
                  <p className="text-gray-400 text-sm mb-4">
                    Get the latest insights delivered to your inbox.
                  </p>
                  <input
                    type="email"
                    placeholder="Your email"
                    className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 mb-3 focus:outline-none focus:border-brand-lime"
                  />
                  <Button variant="primary" className="w-full">
                    Subscribe
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Quick Stats */}
        <section className="section">
          <div className="container">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { icon: TrendingUp, value: '24', label: 'Expert Articles' },
                { icon: MapPin, value: '15+', label: 'Countries Covered' },
                { icon: Briefcase, value: '100+', label: 'Career Tips' },
                { icon: Users, value: '10K+', label: 'Monthly Readers' },
              ].map((stat) => {
                const IconComponent = stat.icon
                return (
                  <div key={stat.label} className="text-center">
                    <div className="w-14 h-14 rounded-2xl bg-brand-lime/10 flex items-center justify-center mx-auto mb-3">
                      <IconComponent className="w-7 h-7 text-brand-lime" />
                    </div>
                    <div className="font-display text-3xl font-extrabold text-gray-900">
                      {stat.value}
                    </div>
                    <div className="text-gray-500 text-sm">{stat.label}</div>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section">
          <div className="container">
            <div className="bg-surface-dark rounded-[28px] px-8 py-16 lg:px-16 text-center relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-brand-lime/5 rounded-full blur-3xl" />
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand-violet/10 rounded-full blur-3xl" />
              
              <div className="relative z-10 max-w-3xl mx-auto">
                <h2 className="font-display text-fluid-4xl font-extrabold text-white mb-6">
                  Need Personalized Guidance?
                </h2>
                <p className="text-fluid-lg text-gray-400 mb-10">
                  Our recruitment experts are here to help you navigate your career 
                  or hiring journey across EMEA.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <Button
                    href="/contact?type=candidate"
                    variant="primary"
                    size="lg"
                    icon={<ArrowRight className="w-5 h-5" />}
                  >
                    Career Consultation
                  </Button>
                  <Button
                    href="/contact?type=employer"
                    variant="ghost"
                    size="lg"
                    className="!text-white hover:!text-brand-lime hover:bg-white/10"
                  >
                    Hiring Inquiry
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