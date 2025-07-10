# Fusion Component Upgrade Strategy

## Components Needing Fusion Upgrade (60+ components)

### High Priority (Core UI) - Batch 1 (15 components)
1. ✅ input.tsx - DONE (already has fusion design)
2. ✅ alert.tsx - DONE (already has fusion design)  
3. ✅ select.tsx - DONE (just upgraded)
4. textarea.tsx - NEEDS UPGRADE
5. checkbox.tsx - NEEDS UPGRADE
6. radio-group.tsx - NEEDS UPGRADE
7. switch.tsx - NEEDS UPGRADE
8. dialog.tsx - NEEDS UPGRADE
9. sheet.tsx - NEEDS UPGRADE
10. dropdown-menu.tsx - NEEDS UPGRADE
11. popover.tsx - NEEDS UPGRADE
12. tabs.tsx - NEEDS UPGRADE
13. accordion.tsx - NEEDS UPGRADE
14. table.tsx - NEEDS UPGRADE
15. pagination.tsx - NEEDS UPGRADE

### Medium Priority (Layout & Navigation) - Batch 2 (15 components)
16. menubar.tsx
17. breadcrumb.tsx
18. command.tsx
19. hover-card.tsx
20. tooltip.tsx
21. separator.tsx
22. scroll-area.tsx
23. resizable.tsx
24. collapsible.tsx
25. context-menu.tsx
26. drawer.tsx
27. form.tsx
28. label.tsx
29. skeleton.tsx
30. progress.tsx

### Lower Priority (Specialized) - Batch 3 (15+ components)
31. slider.tsx
32. toggle.tsx
33. toggle-group.tsx
34. calendar.tsx
35. carousel.tsx
36. chart.tsx
37. aspect-ratio.tsx
38. avatar.tsx
39. sonner.tsx
40. input-otp.tsx
41. blog-article.tsx
42. breadcrumb-hero.tsx
43. contact-form.tsx
44. faq-accordion.tsx
45. feature-grid.tsx

### Custom/Complex Components - Batch 4 (20+ components)
46. gallery-showcase.tsx
47. mega-hero.tsx (already fusion)
48. page-hero.tsx
49. pricing-table.tsx
50. site-footer.tsx (already fusion)
51. site-navigation.tsx
52. stats-showcase.tsx
53. testimonial-carousel.tsx (already fusion)
54. floating-background.tsx (already fusion)
55. navigation-fusion.tsx
56. AccessibilityFAB.tsx
57. AnimatedSplashCard.tsx
58. FacilityCard.tsx
59. LoadingSpinner.tsx
60. NewThemeToggle.tsx
61. StatCard.tsx
62. ThemeContext.tsx
63. UnsplashImage.tsx

## Fusion Design Pattern Template

### 1. CVA Variants Structure
```tsx
const componentVariants = cva(
  "base-classes-with-transitions-and-effects",
  {
    variants: {
      variant: {
        default: "standard-shadcn-styling",
        premium: "gradient-from-leonard-yellow-to-lahoma-orange-effects",
        glass: "glassmorphism-backdrop-blur-white-opacity",
        outline: "transparent-bg-with-border",
        filled: "muted-background",
      },
      size: {
        sm: "small-dimensions",
        default: "standard-dimensions", 
        lg: "large-dimensions",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)
```

### 2. Component Interface Pattern
```tsx
interface ComponentProps extends 
  React.ComponentProps<"element">,
  VariantProps<typeof componentVariants> {
  // Fusion-specific props
  leftIcon?: React.ReactNode
  rightIcon?: React.ReactNode
  loading?: boolean
  animate?: boolean
  glassmorphism?: boolean
}
```

### 3. CSS Variables Usage
- Replace ALL hardcoded colors with CSS variables
- Primary: `var(--leonard-yellow)`, `var(--lahoma-orange)`
- States: `var(--brand-green)`, `var(--brand-red-action)`, `var(--brand-blue)`
- Backgrounds: `var(--card)`, `var(--bg-primary)`, `var(--muted)`

### 4. Animation & Effects
- Framer Motion for complex animations
- CSS transitions for micro-interactions
- Hover effects: scale, glow, color shifts
- Focus states: ring effects, border changes

### 5. Gun Club Presets
- Create preset components for common use cases
- Example: `ClassificationSelect`, `RangeSelect`, `TournamentDialog`

## Storybook Story Template

### Required Stories for Each Component
1. **Default** - Basic usage
2. **All Variants** - Show default, premium, glass, outline, filled
3. **Sizes** - Show sm, default, lg
4. **With Icons** - Demonstrate icon support
5. **Gun Club Examples** - Real-world use cases
6. **Interactive States** - Loading, error, success, disabled

### Story Organization
- Title: `'Components/UI/ComponentName'`
- Comprehensive examples showing fusion design
- Gun club specific use cases
- Real-world form examples