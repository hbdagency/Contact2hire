export interface CaseStudy {
  id: string
  title: string
  client: string
  location: string
  region: 'Europe' | 'Middle East' | 'Africa'
  industry: string
  challenge: string
  solution: string
  overview: string
  approach: { title: string; description: string }[]
  results: { label: string; value: string }[]
  image: string
  testimonial: { quote: string; author: string }
}

export const caseStudies: CaseStudy[] = [
  {
    id: 'london-tech',
    title: 'London Tech Scale-Up',
    client: 'Series B Fintech Startup',
    location: 'London, UK',
    region: 'Europe',
    industry: 'Technology',
    challenge:
      'Rapidly scale engineering team from 15 to 65 within 8 months while maintaining quality and cultural fit.',
    solution:
      'Deployed dedicated RPO team with technical assessment capabilities. Created talent pipeline from Indian tech hubs.',
    overview:
      'A fast-growing London fintech needed to more than quadruple its engineering team in under a year — without diluting quality. We embedded a dedicated recruitment pod, built a continuous pipeline from Bangalore, Pune and Hyderabad tech hubs, and ran every candidate through rigorous technical and cultural-fit assessment. The team hit its growth targets on schedule, with a retention rate the client had never seen before.',
    approach: [
      {
        title: 'Pipeline build',
        description:
          'Mapped Indian tech hubs for fintech-specific skills and built a pipeline of 400+ screened engineers.',
      },
      {
        title: 'Technical vetting',
        description:
          'Pair-programming and system-design assessments run by senior engineers before client interviews.',
      },
      {
        title: 'Offer & relocation',
        description:
          'Managed offers, visa sponsorship and relocation logistics for candidates moving to London.',
      },
      {
        title: 'Onboarding support',
        description:
          '90-day check-ins with hiring managers to lock in early retention.',
      },
    ],
    results: [
      { label: 'Roles Filled', value: '50+' },
      { label: 'Time to Fill', value: '21 days' },
      { label: 'Retention Rate', value: '94%' },
      { label: 'Cost Savings', value: '40%' },
    ],
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80',
    testimonial: {
      quote:
        'Contact to Hire transformed our hiring process. Their understanding of both markets made scaling seamless.',
      author: 'CTO, London Fintech',
    },
  },
  {
    id: 'dubai-conglomerate',
    title: 'Dubai Conglomerate',
    client: 'Multi-Billion Dollar Holding',
    location: 'Dubai, UAE',
    region: 'Middle East',
    industry: 'Conglomerate',
    challenge:
      'Build entire leadership team for new healthcare division from scratch across 3 countries.',
    solution:
      'Executive search with global reach. Leveraged Indian healthcare leadership talent pool with EMEA experience.',
    overview:
      'A multi-billion-dollar holding company was launching a healthcare division spanning the UAE, Saudi Arabia and India — and needed an entire leadership bench built from zero. Working under strict confidentiality, we ran a global executive search for 12 senior roles, combining Indian healthcare leadership talent with executives who had proven EMEA operating experience. Every hire was assessed for regional regulatory awareness and cross-border management capability.',
    approach: [
      {
        title: 'Role architecture',
        description:
          'Defined the leadership blueprint across three countries with the board and division heads.',
      },
      {
        title: 'Off-market search',
        description:
          'Confidential outreach to senior healthcare leaders across India, GCC and Europe.',
      },
      {
        title: 'Board-level assessment',
        description:
          'Structured assessment panels with the client\u2019s board for every finalist.',
      },
      {
        title: 'Cross-border onboarding',
        description:
          'Coordinated visas, relocation and division-launch timing across three jurisdictions.',
      },
    ],
    results: [
      { label: 'Executives Placed', value: '12' },
      { label: 'Countries', value: '3' },
      { label: 'Avg. Salary', value: '$180K' },
      { label: 'Time to Productivity', value: '60 days' },
    ],
    image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=800&q=80',
    testimonial: {
      quote:
        'Their executive search capabilities are world-class. They found leaders who truly understand our vision.',
      author: 'CEO, Dubai Healthcare Division',
    },
  },
  {
    id: 'frankfurt-finance',
    title: 'Frankfurt Financial Services',
    client: 'Investment Bank',
    location: 'Frankfurt, Germany',
    region: 'Europe',
    industry: 'Finance',
    challenge:
      'Build quantitative analytics team with expertise in AI/ML for risk modeling.',
    solution:
      'Targeted search in Indian IITs and top engineering schools. Provided relocation and cultural integration support.',
    overview:
      'A Frankfurt investment bank needed a quantitative analytics team with deep AI/ML expertise for next-generation risk modelling. We ran a targeted campaign across India\u2019s top engineering institutions, sourcing PhD-level quants who could move the bank\u2019s modelling capability forward. Beyond placement, we managed visa sponsorship and a structured cultural-integration programme so the team was productive from day one.',
    approach: [
      {
        title: 'Talent targeting',
        description:
          'Sourced from IITs, IISc and leading quant programmes across India and Europe.',
      },
      {
        title: 'Technical deep-dive',
        description:
          'Case-based quant assessments covering stochastic modelling, ML and risk frameworks.',
      },
      {
        title: 'Visa & relocation',
        description:
          'Handled EU Blue Card processing and family relocation logistics end-to-end.',
      },
      {
        title: 'Cultural integration',
        description:
          'Language and workplace-culture onboarding to accelerate team cohesion in Frankfurt.',
      },
    ],
    results: [
      { label: 'Quants Placed', value: '25' },
      { label: 'PhD Holders', value: '80%' },
      { label: 'Visa Success', value: '100%' },
      { label: 'Avg. Tenure', value: '3+ years' },
    ],
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80',
    testimonial: {
      quote:
        'The quality of candidates exceeded our expectations. Their technical vetting process is exceptional.',
      author: 'Head of Risk, Frankfurt Bank',
    },
  },
  {
    id: 'nairobi-fintech',
    title: 'Nairobi Fintech Hub',
    client: 'Pan-African Fintech Platform',
    location: 'Nairobi, Kenya',
    region: 'Africa',
    industry: 'Fintech',
    challenge:
      'Scale product and engineering teams while competing with global tech firms for East African talent.',
    solution:
      'Blended senior Indian engineers with local East African talent using a remote-first delivery model.',
    overview:
      'A pan-African fintech scaling across Kenya, Nigeria and South Africa needed senior product and engineering firepower fast — but East Africa\u2019s senior talent market is fiercely competitive. We built a hybrid team: senior Indian engineers and product leaders paired with high-potential local East African talent, all working in a remote-first model across five countries. The blend brought deep platform experience in, while developing a loyal local core.',
    approach: [
      {
        title: 'Hybrid talent strategy',
        description:
          'Combined Indian senior engineers with local East African hires for depth and market knowledge.',
      },
      {
        title: 'Remote-first sourcing',
        description:
          'Screened for distributed-work capability across Kenya, Nigeria, South Africa and India.',
      },
      {
        title: 'Slack-based onboarding',
        description:
          'Structured async onboarding so teams in five time zones shipped together from week one.',
      },
      {
        title: 'Local market insight',
        description:
          'Advised on East African salary bands, benefits and regulatory nuances for hiring.',
      },
    ],
    results: [
      { label: 'Engineers Placed', value: '35+' },
      { label: 'Time to Fill', value: '18 days' },
      { label: 'Retention Rate', value: '91%' },
      { label: 'Countries Covered', value: '5' },
    ],
    image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=800&q=80',
    testimonial: {
      quote:
        'They built us a team that blends global engineering depth with true African market understanding.',
      author: 'CPO, Pan-African Fintech',
    },
  },
  {
    id: 'riyadh-healthcare',
    title: 'Riyadh Healthcare Network',
    client: 'Private Hospital Chain',
    location: 'Riyadh, Saudi Arabia',
    region: 'Middle East',
    industry: 'Healthcare',
    challenge:
      'Staff new 200-bed hospital with specialized medical professionals within 6 months.',
    solution:
      'Comprehensive recruitment campaign targeting Indian medical professionals with Middle East experience.',
    overview:
      'A private hospital chain needed to fully staff a new 200-bed Riyadh hospital — 85 medical professionals across 15 specialties — in just six months. We ran a coordinated campaign across India\u2019s nursing and medical colleges and tapped experienced professionals already licensed in the GCC. Every placement came with full licensing coordination, credential verification and relocation management, so the hospital opened on schedule.',
    approach: [
      {
        title: 'Licensing-first sourcing',
        description:
          'Prioritised candidates with valid or fast-trackable Saudi and GCC healthcare licences.',
      },
      {
        title: 'Credential verification',
        description:
          'Primary-source verification of qualifications for every medical professional placed.',
      },
      {
        title: 'Campaign coordination',
        description:
          'Ran assessment centres in three Indian cities to fill 15 specialties in parallel.',
      },
      {
        title: 'Relocation management',
        description:
          'Managed visas, flights, housing and hospital onboarding for all 85 hires.',
      },
    ],
    results: [
      { label: 'Medical Staff', value: '85' },
      { label: 'Specialties', value: '15' },
      { label: 'DHA Licensed', value: '100%' },
      { label: 'On-Time Delivery', value: 'Yes' },
    ],
    image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=800&q=80',
    testimonial: {
      quote:
        'They delivered when others couldn\u2019t. Their healthcare recruitment expertise is unmatched.',
      author: 'HR Director, Riyadh Hospital',
    },
  },
]

export function getCaseStudy(id: string): CaseStudy | undefined {
  return caseStudies.find((s) => s.id === id)
}
