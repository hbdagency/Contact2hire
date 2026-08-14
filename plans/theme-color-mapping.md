# Theme Color Update - High-Contrast Digital Agency / Neo-Brutalist SaaS

## Color Palette

### Primary & Accent Colors
| Token Name | Hex Code | Usage |
|------|-----------|-------|
| `brand.lime` | `#D2FF00` | Primary highlights, text accent, badge borders, focus states |
| `brand.lime-muted` | `#C4EE12` | Subtle background graphics & watermarks |
| `brand.violet` | `#6332F6` | Floating CTA stamps, active cards, badge fills |
| `brand.violet-dark` | `#4F24CC` | Hover/active states for violet components |

### Neutral Surfaces & Backgrounds
| Token Name | Hex Code | Usage |
|------|-----------|-------|
| `surface.dark` | `#0E0F11` | Dark container card sections (Expertise, CTA footer) |
| `surface.dark-card` | `#1A1B1E` | Default dark mode cards (Market Research, Branding) |
| `surface.light` | `#F8F9FA` | Main page background for hero & case studies |
| `surface.white` | `#FFFFFF` | Work preview cards, navbar background |
| `border.dark` | `#26282D` | Dark card outline |
| `border.light` | `#E5E7EB` | Light divider |

### Typography Colors
| Token Name | Hex Code | Usage |
|------|-----------|-------|
| `text-primary-dark` | `#0D0E11` | Headings and primary copy on light backgrounds |
| `text-primary-light` | `#FFFFFF` | Headings and primary copy on dark backgrounds |
| `text-secondary` | `#6B7280` | Subtitles, body text, metadata on light backgrounds |
| `text-secondary-dark` | `#9CA3AF` | Subtitles, body text on dark cards |
| `text-muted-logos` | `#8A8F98` | Greyscale partner / client brand logos |

---

## Color Mapping from Old to New

### Tailwind Config Color Mapping
```
OLD → NEW
coral (#FF6B35) → brand.violet (#6332F6)
coral-dark (#E85A2E) → brand.violet-dark (#4F24CC)
charcoal (#1A1A1A) → surface.dark (#0E0F11)
charcoal-light (#3D3D3D) → surface.dark-card (#1A1B1E)
cream (#F8F5F0) → surface.light (#F8F9FA)
cream-dark (#F0EBE3) → gray-100 (#F8F9FA)
sun (#FF6B35) → brand.lime (#D2FF00)
terracotta (#E85A2E) → brand.violet-dark (#4F24CC)
sky (#A8D0E6) → brand.lime (#D2FF00)
sky-dark (#87CEEB) → brand.lime-muted (#C4EE12)
mint (#C8E6C9) → brand.violet (#6332F6)
mint-dark (#98D8C8) → brand.violet-dark (#4F24CC)
emerald (#A8D0E6) → brand.lime (#D2FF00)
emerald-light (#87CEEB) → brand.lime-muted (#C4EE12)
royal (#C8E6C9) → brand.violet (#6332F6)
royal-light (#98D8C8) → brand.violet-dark (#4F24CC)
brown (#1A1A1A) → surface.dark (#0E0F11)
brown-light (#3D3D3D) → surface.dark-card (#1A1B1E)
gray-100 (#F5F5F5) → gray-100 (#F8F9FA)
gray-200 (#E5E5E5) → gray-200 (#E5E7EB)
gray-300 (#D4D4D4) → gray-300 (#D1D5DB)
gray-400 (#A3A3A3) → gray-400 (#9CA3AF)
gray-500 (#6B6B6B) → gray-500 (#6B7280)
```

---

## Component-Specific Updates

### Button Component
- **Primary**: bg-brand-violet → hover:bg-brand-violet-dark, text-white
- **Secondary**: text-gray-900 → hover:text-brand-violet, border-gray-900 → hover:border-brand-violet
- **Ghost**: text-gray-900 → hover:text-brand-violet, hover:bg-gray-100

### Navigation
- **Logo**: Contact2Hire with "2" in brand-lime on dark background
- **Links**: text-gray-700 → hover:text-brand-violet
- **Active Link**: text-brand-violet with brand-violet underline
- **CTA Button**: bg-brand-violet text-white rounded-full
- **Mobile Menu**: bg-white

### Footer
- **Background**: bg-surface-dark
- **Text**: text-white (primary), text-gray-400 (secondary)
- **Links**: text-gray-400 → hover:text-brand-lime
- **Social Icons**: bg-white/10 → hover:bg-brand-lime hover:text-gray-900

### Hero Section
- **Background**: bg-surface-light
- **Eyebrow badge**: bg-brand-violet/10 text-brand-violet
- **Headings**: text-gray-900 font-extrabold
- **Highlight**: bg-brand-lime behind key words
- **Subtext**: text-gray-500
- **Stats**: text-brand-violet font-extrabold

### Metrics Section
- **Container**: bg-surface-dark rounded-[28px]
- **Label text**: text-white/80
- **Counter numbers**: text-brand-lime

### Job Ticker
- **Background**: bg-surface-dark
- **Ticker badge**: bg-brand-lime text-gray-900
- **Job items**: bg-white/10 → hover:bg-white/20
- **Arrow icon**: text-brand-lime

### Cards (SectorGrid, Services)
- **Background**: bg-surface-dark-card or bg-brand-violet (featured)
- **Border**: border-white/20
- **Hover**: hover:shadow-large, hover:-translate-y-1
- **Icon background**: bg-brand-lime/10
- **Icon color**: text-brand-lime

### Form Elements
- **Input focus**: border-brand-violet, ring-brand-violet/20
- **Submit button**: bg-brand-violet

### CTA Sections
- **Background**: bg-surface-dark rounded-[28px]
- **Decorative**: bg-brand-lime/5, bg-brand-violet/10 blur circles

---

## CSS Custom Properties Update

```css
:root {
  /* Brand Accents */
  --accent-lime: #D2FF00;
  --accent-lime-muted: #C4EE12;
  --accent-violet: #6332F6;
  --accent-violet-dark: #4F24CC;

  /* Surfaces */
  --surface-dark: #0E0F11;
  --surface-dark-card: #1A1B1E;
  --surface-light: #F8F9FA;
  --surface-white: #FFFFFF;

  /* Borders */
  --border-dark: #26282D;
  --border-light: #E5E7EB;

  /* Typography Colors */
  --text-primary-dark: #0D0E11;
  --text-primary-light: #FFFFFF;
  --text-secondary: #6B7280;
  --text-secondary-dark: #9CA3AF;
  --text-muted-logos: #8A8F98;
}
```

---

## Tailwind Config Update

```typescript
colors: {
  brand: {
    lime: '#D2FF00',
    'lime-muted': '#C4EE12',
    violet: '#6332F6',
    'violet-dark': '#4F24CC',
  },
  surface: {
    dark: '#0E0F11',
    'dark-card': '#1A1B1E',
    light: '#F8F9FA',
    white: '#FFFFFF',
  },
  border: {
    dark: '#26282D',
    light: '#E5E7EB',
  },
}
```

---

## Implementation Notes

1. **Global Search/Replace Strategy**:
   - Replace `bg-coral` → `bg-brand-violet`
   - Replace `text-coral` → `text-brand-violet`
   - Replace `bg-charcoal` → `bg-surface-dark`
   - Replace `text-charcoal` → `text-gray-900`
   - Replace `bg-cream` → `bg-surface-light`
   - Replace `text-cream` → `text-white`
   - Replace `bg-sun` → `bg-brand-lime`
   - Replace `text-sun` → `text-brand-lime`
   - Replace `bg-emerald` → `bg-brand-lime`
   - Replace `text-emerald` → `text-brand-violet`
   - Replace `bg-brown` → `bg-surface-dark`
   - Replace `text-brown` → `text-gray-900`

2. **Font Family**: Playfair Display → Plus Jakarta Sans (display), Inter (body)

3. **Border Radius**: rounded-2xl → 20px, rounded-3xl → 28px, rounded-4xl → 36px

4. **Shadows**: Updated to use rgba(0, 0, 0, ...) based shadows

5. **Focus States**: focus-visible:ring-brand-violet

6. **Selection**: bg-brand-lime, text-surface-dark

7. **3D Globe**: Updated to use brand-lime (#D2FF00) and brand-violet (#6332F6)