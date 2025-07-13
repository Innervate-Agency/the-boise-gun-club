# Component Fusion Template: Stripe × ClickUp × Windows 11 Mica

## The Triple Fusion Philosophy

This template combines three world-class design systems:

1. **Stripe Precision**: Micro-interactions, timing, shadows, professional restraint
2. **ClickUp Vibrancy**: Strategic gradients, energy, productive workflows
3. **Windows 11 Mica**: Opaque glass with colorful noise, material depth

## Core Design Rules

### 1. Color Application (Idaho Scenery Palette)
- **Leonard Yellow** (#F2CB05): Primary accent, captured from Idaho sunset
- **Lahoma Orange** (#F28705): Secondary accent, autumn aspen leaves
- **Cream Background** (#f8f6f1): Not pure white - think aged paper, warm
- **Rich Earth Text** (#372103): Deep brown, like rich Idaho soil

### 2. Component Variants

#### Default Variant
- Clean, professional baseline
- Subtle shadows and proper spacing
- Stripe-inspired micro-interactions

#### Premium Variant
- Sophisticated enhancement without overwhelming
- Subtle Leonard Yellow → Lahoma Orange gradients (3-5% opacity)
- Mica premium effects with noise patterns
- Scale hover: 1.02x

#### Elite Variant
- Maximum impact while maintaining professionalism
- Animated gradient borders with shimmer
- Enhanced Mica effects with multiple noise layers
- Scale hover: 1.05x

#### Glass Variant
- Opaque glass with backdrop blur
- For overlays, hero sections, premium cards
- Windows 11 Mica approach (NOT transparent)

### 3. Exact CVA Pattern

```tsx
const componentVariants = cva(
  "base-classes transition-stripe-fast relative overflow-hidden",
  {
    variants: {
      variant: {
        default: "border-border bg-card text-card-foreground shadow-sm hover:shadow-md hover:button-lift",
        premium: "bg-gradient-to-r from-card via-card to-leonard-yellow/5 border-leonard-yellow/20 shadow-premium hover:shadow-premium-hover hover:scale-[1.02] transition-stripe-normal group",
        elite: "bg-gradient-to-r from-card via-leonard-yellow/3 to-lahoma-orange/3 border-2 border-leonard-yellow/30 shadow-elite hover:shadow-elite-hover hover:scale-[1.05] transition-stripe-normal group animate-shimmer",
        glass: "bg-card/10 backdrop-blur-sm border-white/20 shadow-lg hover:bg-card/20 hover:border-white/30 transition-stripe-fast"
      }
    }
  }
)
```

### 4. Required Effects Implementation

```tsx
{/* Premium Mica Effect */}
{variant === 'premium' && (
  <>
    <div className="absolute inset-0 mica-premium opacity-40 group-hover:opacity-60 transition-stripe-normal -z-10" />
    <div className="absolute inset-0 bg-gradient-to-r from-leonard-yellow/3 to-lahoma-orange/3 blur-sm opacity-0 group-hover:opacity-100 transition-stripe-normal -z-10" />
  </>
)}

{/* Elite Mica Effect + Shimmer */}
{variant === 'elite' && (
  <>
    <div className="absolute inset-0 mica-elite opacity-50 group-hover:opacity-70 transition-stripe-normal -z-10" />
    <div className="absolute inset-0 bg-gradient-to-r from-leonard-yellow/4 via-lahoma-orange/4 to-leonard-yellow/4 blur-md opacity-0 group-hover:opacity-100 transition-stripe-normal -z-10" />
    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/8 to-transparent animate-shimmer -z-10" />
  </>
)}

{/* Glass Effect */}
{variant === 'glass' && (
  <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent backdrop-blur-sm -z-10" />
)}
```

### 5. Spacing & Timing (Stripe Standards)

```tsx
// Transitions
transition-stripe-fast: 150ms cubic-bezier(0.215, 0.61, 0.355, 1)
transition-stripe-normal: 300ms cubic-bezier(0.215, 0.61, 0.355, 1)

// Hover Effects
hover:scale-[1.02] // Premium
hover:scale-[1.05] // Elite
hover:button-lift // 1px translateY
hover:shadow-premium-hover // Color-aware shadow

// Active States
active:scale-98 // Button press
active:button-press // Combined transform
```

### 6. Typography Integration

```tsx
// Headings
font-heading // Rajdhani for display
font-body // Noto Sans for content
font-serif // Noto Serif for editorial

// Weights
font-bold // 700 for impact
font-semibold // 600 for hierarchy
font-medium // 500 for labels
font-normal // 400 for body
font-light // 300 for elegance
```

### 7. Shadow System (Stripe-Inspired)

```tsx
// Default shadows
shadow-sm // Subtle elevation
shadow-md // Standard cards
shadow-lg // Modals, dropdowns
shadow-xl // Major elevation

// Premium shadows (color-aware)
shadow-premium // Leonard Yellow tint
shadow-premium-hover // Enhanced on hover
shadow-elite // Lahoma Orange tint
shadow-elite-hover // Enhanced on hover
```

### 8. Critical Implementation Rules

1. **NEVER use old Tailwind syntax**: `bg-[var(--color)]` ❌
2. **ALWAYS use direct utility**: `bg-leonard-yellow` ✅
3. **ALWAYS include `group` class** for hover effects
4. **ALWAYS add `relative overflow-hidden`** for effects
5. **ALWAYS respect `motion-reduce:`** for accessibility
6. **ALWAYS use `-z-10`** for background effects
7. **ALWAYS include proper contrast** in text layers

### 9. Gun Club Context Guidelines

- **Professional Authority**: Effects enhance, never distract
- **Safety First**: Clear information hierarchy maintained
- **Sophisticated Restraint**: No overwhelming gradients
- **Idaho Character**: Earth tones, natural progression
- **Trust Building**: Reliable, consistent interactions

### 10. Component Enhancement Checklist

- [ ] CVA pattern implemented correctly
- [ ] All four variants: default, premium, elite, glass
- [ ] Proper size variants: sm, default, lg, xl
- [ ] Mica effects with noise patterns
- [ ] Stripe-inspired micro-interactions
- [ ] ClickUp gradient hints (3-5% opacity)
- [ ] Proper z-index layering
- [ ] Accessibility considerations
- [ ] Dark mode support
- [ ] Motion-reduce support
- [ ] Storybook story with all variants

### 11. Quality Standards

**This is flagship-level work. Every component should:**
- Feel like it belongs in a Stripe product
- Have the energy of ClickUp's interface
- Display the material depth of Windows 11
- Maintain the professional authority of a gun club
- Showcase the natural beauty of Idaho

**Result**: Components that are so well-crafted they could be featured in design system showcases.

---

## Template Application Example

```tsx
// Example: Enhanced Badge Component
import { cva, type VariantProps } from "class-variance-authority"

const badgeVariants = cva(
  "inline-flex items-center justify-center rounded-full border font-medium transition-stripe-fast relative overflow-hidden",
  {
    variants: {
      variant: {
        default: "border-border bg-card text-card-foreground shadow-sm hover:shadow-md",
        premium: "bg-gradient-to-r from-card via-card to-leonard-yellow/5 border-leonard-yellow/20 shadow-premium hover:shadow-premium-hover hover:scale-[1.02] group",
        elite: "bg-gradient-to-r from-leonard-yellow/3 via-lahoma-orange/3 to-leonard-yellow/3 border-2 border-leonard-yellow/30 shadow-elite hover:shadow-elite-hover hover:scale-[1.05] group animate-shimmer",
        glass: "bg-card/10 backdrop-blur-sm border-white/20 shadow-lg hover:bg-card/20"
      },
      size: {
        sm: "px-2 py-0.5 text-xs",
        default: "px-2.5 py-1 text-sm",
        lg: "px-3 py-1.5 text-base",
        xl: "px-4 py-2 text-lg"
      }
    }
  }
)

// Effects implementation
{variant === 'premium' && (
  <div className="absolute inset-0 mica-premium opacity-40 group-hover:opacity-60 transition-stripe-normal -z-10" />
)}

{variant === 'elite' && (
  <>
    <div className="absolute inset-0 mica-elite opacity-50 group-hover:opacity-70 transition-stripe-normal -z-10" />
    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/8 to-transparent animate-shimmer -z-10" />
  </>
)}
```

This template ensures every component is enhanced to flagship quality while maintaining the professional character appropriate for a gun club website.
