# Contact2Hire - Modern Recruitment Agency Website

A modern, Awwwards-level React website for Contact to Hire, a recruitment agency bridging India's finest talent with EMEA opportunities.

## 🚀 Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Animations:** GSAP, CSS Animations
- **3D Graphics:** React Three Fiber (ready for implementation)
- **Fonts:** Playfair Display (Display), Inter (Body)

## 🎨 Design System

### Color Palette - "Warm Organic"

| Color | Hex | Usage |
|-------|-----|-------|
| Cream | `#FDF8F0` | Background |
| Brown | `#3C2415` | Typography, Borders |
| Emerald | `#0F5132` | Primary Accent |
| Royal Blue | `#1E3A8A` | Secondary Accent |
| Sun Yellow | `#F4B942` | CTAs |
| Terracotta | `#C75B39` | Hover States |

### Typography

- **Display:** Playfair Display - Bold, high-contrast serif for headings
- **Body:** Inter - Clean, geometric sans-serif for body text
- **Fluid Typography:** Responsive font sizes using CSS clamp()

## 📁 Project Structure

```
contact2hire/
├── src/
│   ├── app/                    # Next.js App Router pages
│   │   ├── page.tsx           # Home (Gateway)
│   │   ├── services/          # Services (Expertise)
│   │   ├── about/             # About Us (Evidence)
│   │   ├── case-studies/      # Portfolio
│   │   ├── insights/          # Blog (Intelligence)
│   │   ├── contact/           # Contact (Connection)
│   │   └── privacy/           # Privacy Policy
│   │
│   ├── components/
│   │   ├── layout/            # Navigation, Footer
│   │   ├── sections/          # Page sections
│   │   └── ui/                # Reusable UI components
│   │
│   └── app/globals.css        # Design system & global styles
│
├── plans/                      # Architecture documentation
└── public/                     # Static assets
```

## 🌐 Pages

1. **Home (Gateway)** - Hero, Metrics, Narrative, Featured Sectors, Client Marquee, CTA
2. **Services (Expertise)** - Service cards, Process section, EMEA deep dive
3. **About Us (Evidence)** - Timeline, India Advantage, Core Values, Team
4. **Case Studies (Portfolio)** - Global footprint map, Success stories, Testimonials
5. **Insights (Intelligence)** - Blog articles, Newsletter signup
6. **Contact (Connection)** - Dual forms, Global clock, Contact info

## 🛠️ Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## 🎯 Features

### Implemented
- ✅ Modern "Warm Organic" design system
- ✅ Responsive layout (mobile-first)
- ✅ Animated hero section with floating elements
- ✅ Animated counters for metrics
- ✅ Bento grid layout for sectors
- ✅ Client logo marquee
- ✅ Scroll-triggered timeline
- ✅ Dual contact forms (Employer/Candidate)
- ✅ Real-time global clock
- ✅ SEO optimization with JSON-LD schema
- ✅ GDPR-compliant privacy policy

### Ready for Enhancement
- 🔄 WebGL 3D globe for talent flow visualization
- 🔄 GSAP ScrollTrigger animations
- 🔄 Custom cursor effects
- 🔄 Smooth scroll (Lenis)
- 🔄 Page transitions

## 📊 SEO

- Server-side rendering for all pages
- JSON-LD structured data for EmploymentAgency
- Open Graph and Twitter Card meta tags
- Semantic HTML structure
- Optimized font loading

## 📝 Company Information

**Contact to Hire**  
D-13, Dhusali Society, Talavadi  
Nr-Hansol police chowky, Airport Road  
Ahmedabad – 382475, Gujarat – INDIA  

- **Phone:** +91-9601570167
- **Email:** info@contacttohire.in
- **Domain:** contacttohire.in

## 📜 License

© 2024 Contact to Hire. All rights reserved.
