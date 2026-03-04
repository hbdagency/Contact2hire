# Theme Color Update - SNAPTURE Reference

## Color Palette Analysis from Reference Image

### Primary Colors
| Role | Color Name | Hex Value | Usage |
|------|-----------|-----------|-------|
| Primary Accent | `coral` | #FF6B35 | CTA buttons, highlights, active states |
| Primary Accent Hover | `coral-dark` | #E85A2E | Button hover states |
| Background | `cream` | #F8F5F0 | Main page background |
| Background Alt | `cream-dark` | #F0EBE3 | Section backgrounds, cards |
| Dark Background | `charcoal` | #1A1A1A | Footer, dark sections |
| Text Primary | `charcoal` | #2D2D2D | Main headings, body text |
| Text Secondary | `gray-500` | #6B6B6B | Secondary text, descriptions |

### Accent Colors (from reference image cards)
| Role | Color Name | Hex Value | Usage |
|------|-----------|-----------|-------|
| Sky Blue | `sky` | #A8D0E6 | Feature cards, info sections |
| Soft Mint | `mint` | #C8E6C9 | Success states, accent highlights |
| Warm Sand | `sand` | #E8DCC4 | Neutral accent backgrounds |

### Neutral Colors
| Role | Color Name | Hex Value | Usage |
|------|-----------|-----------|-------|
| White | `white` | #FFFFFF | Card backgrounds, buttons |
| Gray 100 | `gray-100` | #F5F5F5 | Light backgrounds |
| Gray 200 | `gray-200` | #E5E5E5 | Borders, dividers |
| Gray 300 | `gray-300` | #D4D4D4 | Disabled states |
| Gray 400 | `gray-400` | #A3A3A3 | Placeholder text |
| Gray 500 | `gray-500` | #6B6B6B | Secondary text |

---

## Color Mapping from Old to New

### Tailwind Config Color Mapping
```
OLD → NEW
sun (#F4B942) → coral (#FF6B35)
terracotta (#C75B39) → coral-dark (#E85A2E)
orange (#E07B39) → Remove (replaced by coral)
brown (#3C2415) → charcoal (#1A1A1A)
brown-light (#5A3D2B) → charcoal-light (#3D3D3D)
emerald (#0F5132) → sky (#A8D0E6)
emerald-light (#1A7A4C) → sky-dark (#87CEEB)
royal (#1E3A8A) → mint (#C8E6C9)
royal-light (#3B5998) → mint-dark (#98D8C8)
cream (#FDF8F0) → cream (#F8F5F0)
cream-dark (#F5EDE0) → cream-dark (#F0EBE3)
gray-100 (#F8F6F3) → gray-100 (#F5F5F5)
gray-200 (#E8E4DE) → gray-200 (#E5E5E5)
gray-300 (#D1CBC2) → gray-300 (#D4D4D4)
gray-400 (#A69F94) → gray-400 (#A3A3A3)
gray-500 (#736E66) → gray-500 (#6B6B6B)
```

---

## Component-Specific Updates

### Button Component
- **Primary**: bg-coral → hover:bg-coral-dark, text-white
- **Secondary**: text-charcoal → hover:text-coral, border-charcoal → hover:border-coral
- **Ghost**: text-charcoal → hover:text-coral, hover:bg-cream-dark

### Navigation
- **Logo**: Contact2Hire with "2" in coral color
- **Links**: text-charcoal → hover:text-coral
- **Active Link**: text-coral with coral underline
- **CTA Button**: bg-coral text-white
- **Mobile Menu**: bg-cream

### Footer
- **Background**: bg-charcoal
- **Text**: text-cream (primary), text-gray-300 (secondary)
- **Links**: text-gray-300 → hover:text-coral
- **Social Icons**: bg-cream/10 → hover:bg-coral hover:text-charcoal

### Hero Section
- **Background**: bg-cream
- **Decorative blur**: bg-coral/10, bg-sky/10
- **Floating elements**: bg-coral, bg-coral-dark/50, bg-sky
- **Headings**: text-charcoal
- **Subtext**: text-gray-500

### Metrics Section
- **Background**: bg-charcoal
- **Label text**: text-cream/80
- **Counter numbers**: text-coral

### Job Ticker
- **Background**: bg-charcoal
- **Ticker badge**: bg-coral text-white
- **Job items**: bg-cream/10 → hover:bg-cream/20
- **Arrow icon**: text-coral

### Cards (SectorGrid, Services)
- **Background**: bg-white
- **Border**: border-gray-200
- **Hover**: hover:border-coral, hover:shadow-large
- **Icon background**: bg-coral/10 or bg-sky/10
- **Icon color**: text-coral or text-sky

### Form Elements
- **Input focus**: border-coral, ring-coral/20
- **Submit button**: bg-coral

### CTA Sections
- **Background gradient**: from-charcoal via-charcoal to-coral

---

## CSS Custom Properties Update

```css
:root {
  /* Base Colors */
  --color-cream: #F8F5F0;
  --color-cream-dark: #F0EBE3;
  
  /* Primary - Charcoal */
  --color-charcoal: #1A1A1A;
  --color-charcoal-light: #3D3D3D;
  
  /* Primary Accent - Coral */
  --color-coral: #FF6B35;
  --color-coral-dark: #E85A2E;
  
  /* Secondary Accents */
  --color-sky: #A8D0E6;
  --color-sky-dark: #87CEEB;
  --color-mint: #C8E6C9;
  --color-mint-dark: #98D8C8;
  --color-sand: #E8DCC4;
  
  /* Neutrals */
  --color-white: #FFFFFF;
  --color-gray-100: #F5F5F5;
  --color-gray-200: #E5E5E5;
  --color-gray-300: #D4D4D4;
  --color-gray-400: #A3A3A3;
  --color-gray-500: #6B6B6B;
}
```

---

## Tailwind Config Update

```typescript
colors: {
  // Base Colors
  cream: {
    DEFAULT: '#F8F5F0',
    dark: '#F0EBE3',
  },
  // Primary - Charcoal
  charcoal: {
    DEFAULT: '#1A1A1A',
    light: '#3D3D3D',
  },
  // Primary Accent - Coral
  coral: {
    DEFAULT: '#FF6B35',
    dark: '#E85A2E',
  },
  // Secondary Accents
  sky: {
    DEFAULT: '#A8D0E6',
    dark: '#87CEEB',
  },
  mint: {
    DEFAULT: '#C8E6C9',
    dark: '#98D8C8',
  },
  sand: '#E8DCC4',
  // Neutrals
  gray: {
    100: '#F5F5F5',
    200: '#E5E5E5',
    300: '#D4D4D4',
    400: '#A3A3A3',
    500: '#6B6B6B',
  },
}
```

---

## Implementation Notes

1. **Global Search/Replace Strategy**:
   - Replace `bg-sun` → `bg-coral`
   - Replace `text-sun` → `text-coral`
   - Replace `bg-brown` → `bg-charcoal`
   - Replace `text-brown` → `text-charcoal`
   - Replace `hover:text-emerald` → `hover:text-coral`
   - Replace `border-brown` → `border-charcoal`
   - Replace `text-emerald` → `text-sky` (for accent text)
   - Replace `bg-emerald` → `bg-sky` (for accent backgrounds)
   - Replace `bg-terracotta` → `bg-coral-dark`

2. **Shadow Colors**: Update shadow tints from brown-based to charcoal-based

3. **Gradients**: Update gradient definitions to use new colors

4. **Focus States**: Update focus-visible:ring-emerald → focus-visible:ring-coral

5. **Selection**: Update selection bg from sun to coral

6. **Scrollbar**: Update scrollbar colors to use charcoal

7. **3D Globe**: Update globe colors (sun → coral, emerald → sky)
