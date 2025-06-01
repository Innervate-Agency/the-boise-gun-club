# Boise Gun Club - Design System Reference
**DO NOT MODIFY WITHOUT EXPLICIT APPROVAL**

## Theme Concept
**Dark Theme: "Early Fall Morning in Idaho Cascades"**
- Misty morning hunting vibes
- Warm, inviting, natural atmosphere
- Think deer hunting at dawn in the mountains

**Light Theme: "Spring Mountain Morning"** 
- Fresh, bright, optimistic
- Clean mountain air and new growth
- Welcoming and accessible

## Color Palette

### Dark Theme (Fall Hunting)
```css
--bg-primary: #1a1611;           /* Deep forest floor */
--bg-secondary: #2d251e;         /* Rich earth */
--bg-tertiary: #3a312a;          /* Weathered wood */

--text-primary: #f5f2eb;         /* Soft morning light */
--text-secondary: #d4c4a8;       /* Warm mist */
--text-muted: #a89680;           /* Distant fog */

--accent-primary: #d2691e;       /* Autumn orange */
--accent-secondary: #8b4513;     /* Saddle brown */
--accent-tertiary: #cd853f;      /* Peru/warm copper */
--accent-quaternary: #5d4037;    /* Dark wood */

--nature-moss: #2e5e3e;          /* Deep forest moss */
--nature-pine: #1b3b1b;          /* Pine shadow */
--nature-cream: #f4f1e8;         /* Birch bark */
--nature-rust: #a0522d;          /* Autumn rust */
--nature-mist: #e8e0d6;          /* Morning mist */

--glass-bg: rgba(42, 35, 28, 0.35);
--glass-border: rgba(210, 105, 30, 0.2);
--glass-noise: rgba(255, 255, 255, 0.03);
```

### Light Theme (Spring Mountain)
```css
--bg-primary: #fafcf9;           /* Fresh snow/clean air */
--bg-secondary: #f0f4ee;         /* Mountain clouds */
--bg-tertiary: #e8f0e6;          /* New spring growth */

--text-primary: #2d3e2d;         /* Deep forest green */
--text-secondary: #4a5c4a;       /* Evergreen shadow */
--text-muted: #6b7a6b;           /* Distant peaks */

--accent-primary: #4a90e2;       /* Clear mountain sky */
--accent-secondary: #7bb3f0;     /* Alpine lake */
--accent-tertiary: #9cc5f4;      /* High clouds */
--accent-quaternary: #2e5e3e;    /* Deep forest */

--nature-fresh: #68b368;         /* New growth green */
--nature-sky: #87ceeb;           /* Sky blue */
--nature-bloom: #dda0dd;         /* Spring wildflowers */
--nature-clean: #ffffff;         /* Pure mountain snow */
--nature-stone: #a8a8a8;         /* Granite peaks */

--glass-bg: rgba(255, 255, 255, 0.25);
--glass-border: rgba(74, 144, 226, 0.2);
--glass-noise: rgba(0, 0, 0, 0.02);
```

## Typography
- **Headings**: "Refrigerator Deluxe" (outdoor signage feel)
- **Body**: "Museo Sans" (clean, readable)
- **Base size**: 18px minimum for accessibility
- **Line height**: 1.6 for body, 1.2 for headings
- **Letter spacing**: Slightly tight on headings (-0.02em)

## Glass Effects (Windows 11 Mica Style)
```css
.glass-mica {
  background: var(--glass-bg);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border: 1px solid var(--glass-border);
  position: relative;
}

.glass-mica::before {
  content: '';
  position: absolute;
  inset: 0;
  background-image: 
    radial-gradient(circle at 25% 25%, rgba(255,255,255,0.1) 0%, transparent 25%),
    radial-gradient(circle at 75% 75%, rgba(255,255,255,0.05) 0%, transparent 25%),
    url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.15'/%3E%3C/svg%3E");
  pointer-events: none;
  border-radius: inherit;
}
```

## Spacing System
- **Section spacing**: 6rem vertical minimum
- **Card spacing**: 2rem internal padding
- **Element spacing**: 1.5rem between related elements
- **Micro spacing**: 0.75rem for tight groupings

## Animation Principles
- **Subtle and natural**: Like morning mist movement
- **Performance first**: 60fps, hardware accelerated
- **Purposeful**: Each animation should enhance UX
- **Consistent timing**: 0.3s standard, 0.6s for complex

## Component Structure
Each section MUST include:
1. H2 main title
2. H3 subtitle 
3. Descriptive paragraph
4. Internal links to related pages
5. Proper semantic markup for SEO

## Effects to Remove
- ❌ Heavy smoke effects
- ❌ Harsh industrial vibes  
- ❌ Overly dark backgrounds
- ❌ Cramped sections

## Effects to Enhance
- ✅ Soft morning mist
- ✅ Natural gradients
- ✅ Mica glass texture
- ✅ Generous whitespace
- ✅ Warm, welcoming atmosphere
