# Component Enhancement Template

## EXACT PATTERN FOR PREMIUM/ELITE VARIANTS

Based on successful Badge component implementation following DESIGN_SYSTEM.md specifications.

### CVA Pattern Template:
```tsx
import { cva, type VariantProps } from "class-variance-authority"

const componentVariants = cva(
  "base-classes transition-fast relative overflow-hidden",
  {
    variants: {
      variant: {
        default: "border-border bg-card text-card-foreground hover:bg-muted/80",
        premium: "bg-gradient-to-r from-leonard-yellow to-lahoma-orange text-black shadow-md border border-leonard-yellow/20 hover:shadow-lg hover:scale-[1.05] transition-smooth relative overflow-hidden group",
        elite: "bg-gradient-to-r from-leonard-yellow via-lahoma-orange to-leonard-yellow bg-[length:200%_100%] text-black shadow-lg border-2 border-leonard-yellow/30 animate-shimmer hover:shadow-xl hover:scale-[1.10] transition-smooth relative overflow-hidden group",
        glass: "border-white/20 bg-card/10 backdrop-blur-sm text-card hover:bg-card/20 hover:border-white/30 dark:border-white/10 dark:bg-card/5 dark:hover:bg-card/10"
      }
    },
    defaultVariants: {
      variant: "default"
    }
  }
)
```

### Required Effects:
```tsx
{/* Premium glow effect */}
{variant === 'premium' && (
  <div className="absolute inset-0 bg-gradient-to-r from-lahoma-orange/30 to-leonard-yellow/30 blur-md opacity-50 group-hover:opacity-70 transition-smooth -z-10" />
)}

{/* Elite shimmer effect */}
{variant === 'elite' && (
  <div className="absolute inset-0 bg-gradient-to-r from-lahoma-orange/40 to-leonard-yellow/40 blur-lg opacity-60 group-hover:opacity-80 transition-smooth -z-10" />
)}
```

### CRITICAL RULES:
1. **Use correct Tailwind v4 syntax**: `from-leonard-yellow` NOT `from-(--color-leonard-yellow)`
2. **Use design system utilities**: `transition-fast`, `shadow-md`, etc.
3. **Include group class** for hover effects
4. **Add overflow-hidden** and **relative** for proper effects
5. **Use proper opacity levels**: 30-40% for backgrounds, 50-80% for glows

### Color Application:
- **Premium**: Leonard Yellow to Lahoma Orange gradient
- **Elite**: Leonard Yellow → Lahoma Orange → Leonard Yellow with shimmer
- **Glass**: Proper backdrop-blur with white/card backgrounds
- **Default**: Standard card/border colors

### Shadow Progression:
- **Default**: No shadow or shadow-sm
- **Premium**: shadow-md → shadow-lg on hover  
- **Elite**: shadow-lg → shadow-xl on hover
- **Glass**: shadow-lg for floating effect

This template MUST be applied exactly to each component without deviation.