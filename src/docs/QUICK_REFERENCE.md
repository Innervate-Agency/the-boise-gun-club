# QUICK REFERENCE - CRITICAL STANDARDS
**Copy-paste this for any AI assistant working on this project**

## 🎨 COMPLETE BRAND COLOR PALETTE (26 COLORS)
**All colors already implemented in globals.css - USE THESE ONLY**

### Primary Brand Colors
```css
bg-leonard-yellow         #F2CB05  (Primary accent)
bg-lahoma-orange          #F28705  (Secondary accent)
bg-rich-black             #0A0A0A  (Primary text)
bg-pure-white             #FFFFFF  (Clean backgrounds)
```

### Light Theme - "Spring Day Along The East Fork of The Owyhee River"
```css
bg-cloudy-day-white       #f8f6f1  (Warm light background)
bg-overcast               #ede7de  (Muted light surface)
bg-sand-dune-brown        #c08051  (Earth tone accent)
bg-craters-of-the-moon    #372103  (Dark text/accents)
bg-desert-cliff-brown     #693e21  (Secondary text)
bg-clay-pidgeon-orange    #F23005  (Action/error states)
bg-gunclub-orange         #f07b1d  (Vibrant accent)
bg-wildeye-susan-yellow   #E3C03C  (Subtle highlight)
bg-idaho-sky-blue         #5198cd  (Info/link states)
bg-snake-river-blue       #3c81c0  (Deep blue accent)
bg-owyhee-field-green     #6f7822  (Success/nature)
bg-boise-yard-green       #909233  (Muted green accent)
bg-scoring-bench-red      #8C394B  (Warning/urgent)
```

### Dark Theme - "Misty Fall Morning in the Cascades"
```css
bg-kent-slate-gray        #2F3135  (Dark background)
bg-ed-charcoal            #4B4B4B  (Elevated surfaces)
bg-pidgeon-clay-gray      #494657  (Muted dark surface)
bg-chester-white          #FDFDFD  (High contrast text)
bg-don-gray               #EEF1F7  (Secondary text)
bg-jerry-orange           #F25C05  (Dark theme accent)
bg-abe-red                #F23005  (Dark theme alerts)
bg-clubhouse-roof-blue    #4982A6  (Dark theme info)
bg-clubhouse-walk-gray    #C9D2EF  (Dark theme muted)
bg-clubhouse-lawn-green   #3F6331  (Dark theme success)
```

### Legacy Compatibility (Same as above, different names)
```css
bg-brand-blue             #5198cd  (= idaho-sky-blue)
bg-brand-green            #6f7822  (= owyhee-field-green)
bg-brand-red              #8C394B  (= scoring-bench-red)
```

## 📝 TYPOGRAPHY RULES
```tsx
H1-H2: font-heading (Rajdhani, max weight 700)
H3-H6 + Body: font-sans (Noto Sans)
Editorial: font-serif (Noto Serif, italic)
```

## ⚡ TAILWIND V4 SYNTAX
```tsx
// ✅ CORRECT
bg-leonard-yellow
text-lahoma-orange/50
border-brand-blue/30

// ❌ FORBIDDEN
bg-[#F2CB05]
bg-[var(--color-leonard-yellow)]
style={{color: '#F28705'}}
```

## 🏗️ TECH STACK
- Next.js 15 + React 19
- TypeScript (strict mode)
- Tailwind v4 (CSS-first)
- shadcn/ui + CVA pattern
- Framer Motion 12+ (Motion for React)

## 🚫 NEVER DO
1. Hardcode hex colors
2. Use inline styles  
3. Right-align text
4. Use emojis in UI
5. Link external images
6. Break typography hierarchy
7. Use font-weight 800
8. Add !important CSS

## ✅ ALWAYS DO
1. Use established brand colors
2. Follow CVA component pattern
3. Left-align text (50/50 divs if needed)
4. Use Lucide React icons
5. Reference /public/images/ only
6. Respect prefers-reduced-motion
7. Maintain 4.5:1 contrast ratio
8. Follow Server/Client component patterns

## 🎯 PREMIUM/ELITE PATTERNS (ALREADY IMPLEMENTED)
```tsx
// CORRECT - Use existing premium/elite classes from globals.css
const variants = cva("base-classes", {
  variants: {
    variant: {
      premium: "bg-gradient-premium shadow-premium mica-premium animate-shimmer",
      elite: "bg-gradient-elite shadow-elite mica-elite"
    }
  }
})

// AVAILABLE EFFECTS (all in globals.css):
bg-gradient-premium          // Leonard Yellow → Lahoma Orange
bg-gradient-elite           // Enhanced premium with stronger effect
shadow-premium              // Sophisticated elevation
shadow-elite               // Maximum elevation
mica-premium               // Windows 11 Mica with brand bleeding
mica-elite                 // Enhanced Mica with noise
animate-shimmer            // Subtle shimmer animation
transition-stripe-fast     // 150ms Stripe-style transitions
glass-premium              // Glassmorphism variant
```

**ENFORCEMENT: Read existing component implementation FIRST, then enhance following established patterns.** 