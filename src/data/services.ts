export interface Service {
  slug: string
  /** Card title with the mockup's line break, e.g. "Market\nresearch" */
  cardTitle: string
  title: string
  tagline: string
  description: string
  overview: string
  image: string
  dark: boolean
  icon: string
  features: { title: string; description: string }[]
  outcomes: string[]
  industries: string[]
}

export const services: Service[] = [
  {
    slug: 'market-research',
    cardTitle: 'Market\nresearch',
    title: 'Market Research',
    tagline: 'Data-backed hiring intelligence that sharpens every decision.',
    description:
      'Blends talent market data and hiring trends to confirm and sharpen your recruitment strategy.',
    overview:
      'Before we search, we study. Our market research practice combines live salary benchmarks, talent availability maps, competitor hiring intelligence, and regional demand trends across EMEA. The result is a recruitment strategy your team can defend — one built on evidence, not guesswork — and a clear picture of exactly where the right talent lives, what it costs, and how fast you can realistically hire it.',
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=900&q=80',
    dark: true,
    icon: 'search',
    features: [
      {
        title: 'Talent market mapping',
        description:
          'We map where your target skills live — from Indian tech hubs to EMEA corridors — and size the available talent pool for every role.',
      },
      {
        title: 'Salary & comp benchmarking',
        description:
          'Live, role-by-role compensation data across UK, EU, GCC and India so your offers win without overpaying.',
      },
      {
        title: 'Demand forecasting',
        description:
          'We model hiring demand 6-18 months out, flagging skills shortages and seasonal swings before they become roadblocks.',
      },
      {
        title: 'Location & remote strategy',
        description:
          'On-site, hybrid, remote or nearshore — we recommend the sourcing model that hits your budget, timeline and compliance needs.',
      },
    ],
    outcomes: [
      'Salary bands validated against live market data',
      'Shortlists that fit your budget and hiring timeline',
      'A hiring plan backed by evidence, not guesswork',
      'Clear go/no-go signals before you commit budget',
    ],
    industries: ['Technology', 'Finance', 'Healthcare', 'Manufacturing', 'Energy'],
  },
  {
    slug: 'executive-search',
    cardTitle: 'Executive\nSearch',
    title: 'Executive Search',
    tagline: 'Confidential leadership search and C-suite placement across EMEA.',
    description:
      'Confidential search, leadership assessment and C-suite placement across EMEA markets.',
    overview:
      'Finding a leader is different from filling a role. Our executive search practice runs quiet, targeted campaigns for CXOs, directors and senior specialists — leveraging deep relationships with proven leaders across India and EMEA. Every shortlist is built on structured leadership assessment, reference verification, and cultural-fit validation, so the person you hire doesn\u2019t just perform — they stay and grow your business.',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=900&q=80',
    dark: false,
    icon: 'user-check',
    features: [
      {
        title: 'Confidential search',
        description:
          'Discreet, off-market search that protects your company and current leadership while we work.',
      },
      {
        title: 'Leadership assessment',
        description:
          'Structured psychometric and behavioural assessment to validate capability, EQ and cultural fit.',
      },
      {
        title: 'Succession planning',
        description:
          'We map internal bench strength and external alternatives so the board always has options.',
      },
      {
        title: 'Negotiation & onboarding',
        description:
          'Offer strategy, contract negotiation and a 90-day onboarding plan that de-risks every hire.',
      },
    ],
    outcomes: [
      'C-suite and senior hires placed across EMEA markets',
      'Shortlists delivered within agreed timelines — quietly',
      'Offer acceptances that hold, with 90-day onboarding support',
      'Retention rates well above market average',
    ],
    industries: ['Technology', 'Banking & Finance', 'Healthcare', 'Energy', 'Conglomerates'],
  },
  {
    slug: 'branding-strategies',
    cardTitle: 'Branding\nstrategies',
    title: 'Branding Strategies',
    tagline: 'Employer branding that attracts the talent you want — not just the talent available.',
    description:
      'Builds employer recognition and trust with candidates and future talent pools.',
    overview:
      'Great candidates choose great employers. Our branding practice shapes how your company shows up in the talent market — your employer value proposition, careers messaging, candidate experience and digital presence. We make your organisation visible, credible and attractive to the senior professionals and future leaders you want to hire, so recruitment stops being a scramble and starts being a magnet.',
    image: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=900&q=80',
    dark: true,
    icon: 'sparkles',
    features: [
      {
        title: 'Employer value proposition',
        description:
          'We define what makes you different as an employer and turn it into messaging candidates remember.',
      },
      {
        title: 'Candidate experience design',
        description:
          'From first touch to offer, we map and improve every step of the journey candidates experience.',
      },
      {
        title: 'Digital employer brand',
        description:
          'Careers pages, social presence and employee advocacy that put your story in front of the right people.',
      },
      {
        title: 'Talent pool nurturing',
        description:
          'Ongoing engagement with past candidates and future talent so your pipeline is always warm.',
      },
    ],
    outcomes: [
      'A distinct employer brand candidates recognise and trust',
      'Higher response rates on outreach and job postings',
      'Reduced cost-per-hire through inbound candidate interest',
      'A talent community that stays engaged between hiring cycles',
    ],
    industries: ['Technology', 'Finance', 'Healthcare', 'Consumer', 'Industrial'],
  },
]

export function getService(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug)
}
