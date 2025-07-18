# Design System: Visual Standards

This document defines the visual design standards and aesthetic guidelines for the Boise Gun Club v4 project. It combines Stripe-inspired precision with ClickUp-inspired vibrancy, tailored for a professional gun club context.

## 1. Brand Identity & Philosophy

### 1.1. Design Principles

- **Professional Authority First:** Maintain credibility and safety-focused messaging
- **Modern Sophistication:** Contemporary design without being flashy or distracting
- **Balanced Enhancement:** Use effects to enhance, not overwhelm the content
- **Leading-Edge Execution:** Push the boundaries of web design while remaining accessible

### 1.2. Target Aesthetic

- **Stripe-Inspired Foundation:** Precise timing, layered shadows, subtle interactions
- **ClickUp-Inspired Accents:** Selective glassmorphism, tasteful gradients, color splashes
- **Gun Club Context:** Earth tones, professional hierarchy, clear information structure
- **Flagship Quality:** Suitable for showcasing at innervate.agency as a design exemplar

## 2. Typography System

### 2.1. Font Stack

**Primary Fonts:**

- **Rajdhani:** Display font for titles and H1 headings
- **Noto Sans:** Body text and H4-H6 headings
- **Noto Serif:** Editorial font for H2-H3 headings (adds texture and sophistication)

**Fallback Stack:**

```css
--font-heading: "Rajdhani", "Arial Black", sans-serif;
--font-body: "Noto Sans", "Helvetica", "Arial", sans-serif;
--font-serif: "Noto Serif", "Georgia", "Times New Roman", serif;
```

### 2.2. Typography Hierarchy

#### 2.2.1. Headings

**H1 - Brand Titles (Rajdhani)**

- **Font:** Rajdhani (font-heading)
- **Weight:** 700 (bold) for primary word, 300 (light) for secondary word
- **Case:** ALL CAPS
- **Usage:** Hero sections, main page titles, brand elements

**H2 - Major Sections (Rajdhani)**

- **Font:** Rajdhani (font-heading)
- **Weight:** 600 (semibold)
- **Case:** Standard capitalization
- **Usage:** Section headers, page titles, major content divisions

- Standard capitalization, can be used multiple times per page
- Font-weight: 600 for professional hierarchy
- Usage: Section headers, page titles, major content divisions

**H3 - Sub-Sections (Noto Sans)**

- **Font:** Noto Sans (font-body)
- **Weight:** 700 (bold)
- **Case:** Standard capitalization
- **Usage:** Sub-sections, important content divisions

**H4-H6 - Content Hierarchy (Noto Sans)**

- **Font:** Noto Sans (font-body)
- **Weight:** 600 (semibold)
- **Case:** Standard capitalization
- **Usage:** All standard content headings, subsections, supporting text

### 2.3. Body Text

- **Font:** Noto Sans (font-body)
- **Weight:** 400 (regular)
- **Case:** Standard capitalization
- **Usage:** Paragraphs, lists, form labels, descriptions

### 2.4. Editorial Subtitles

- **Font:** Noto Serif (font-serif)
- **Weight:** 400 (regular)

- Always full caps with strategic weight variations
- Example: "BOISE" (font-weight: 700) + "GUNCLUB" (font-weight: 300)
- Usage: Hero sections, main page titles, brand elements


## 3. Color System

### 3.1. Brand Colors

**Primary Palette:**

- **Leonard Yellow:** `#F2CB05` - Primary accent, call-to-action elements
- **Lahoma Orange:** `#F28705` - Secondary accent, hover states, energy
- **Rich Black:** `#0A0A0A` - Primary text, strong contrast elements
- **Pure White:** `#FFFFFF` - Background, negative space, clean contrast

**Extended Palette:**

- **Brand Blue:** `#5198cd` - Information, links, professional accents
- **Brand Green:** `#6f7822` - Success states, nature elements, safety
- **Brand Red:** `#8C394B` - Error states, urgent actions, warnings

### 3.2. Contextual Colors

**Light Theme:**

- Background: `#f8f6f1` (warm, inviting)
- Card backgrounds: `#ffffff` (clean, professional)
- Text: `#372103` (warm black, easier on eyes)
- Muted text: `#693e21` (secondary information)

**Dark Theme:**

- Background: `#2F3135` (sophisticated dark)
- Card backgrounds: `#4B4B4B` (elevated surfaces)
- Text: `#FDFDFD` (high contrast white)
- Muted text: `#EEF1F7` (secondary information)

## 4. Stripe-Inspired Precision

### 4.1. Timing & Transitions

**Standard Transitions:**

- **Fast:** `150ms cubic-bezier(0.215, 0.61, 0.355, 1)` - Hover states, focus rings
- **Smooth:** `300ms cubic-bezier(0.215, 0.61, 0.355, 1)` - Modal appearances, page transitions

**Usage Guidelines:**

- Button hover states: 150ms
- Card elevation changes: 150ms
- Modal/dialog appearances: 300ms
- Page transitions: 300ms

### 4.2. Shadow System

**Layered Elevation:**

```css
--shadow-sm: 0 2px 4px -1px rgba(50,50,93,.25);
--shadow-md: 0 4px 8px -2px rgba(50,50,93,.25);
--shadow-lg: 0 8px 16px -4px rgba(50,50,93,.25);
--shadow-xl: 0 16px 32px -8px rgba(50,50,93,.25);
```

**Application:**

- Cards: `shadow-sm` default, `shadow-md` hover
- Buttons: `shadow-sm` default, `shadow-lg` premium variants
- Modals: `shadow-xl` for strong elevation
- Tooltips: `shadow-md` for subtle floating

### 4.3. Micro-Interactions

**Button States:**

- Hover: Subtle color shift + shadow elevation
- Active: Slight scale reduction (0.98) + shadow reduction
- Focus: Outline ring with brand color
- Loading: Spinner with fade-in animation

**Form Elements:**

- Focus: Floating label animation + border color change
- Validation: Smooth error/success state transitions
- Input: Subtle border radius and shadow on focus

## 5. ClickUp-Inspired Vibrancy

### 5.1. Glassmorphism (Selective Use)

**When to Use:**

- Hero sections with background imagery
- Premium membership cards
- Special announcement banners
- Modal overlays

**Implementation:**

```css
.glass-subtle { backdrop-blur: 4px; background: rgba(255,255,255,0.1); }
.glass-medium { backdrop-blur: 8px; background: rgba(255,255,255,0.15); }
.glass-premium { backdrop-blur: 16px; background: rgba(255,255,255,0.2); }
```

### 5.2. Gradient System

**Subtle Gradients (Professional):**

- Background overlays: Linear gradients with 5-10% opacity
- Button accents: Subtle Leonard Yellow to Lahoma Orange
- Card borders: Animated gradients for special content

**Implementation:**

```css
.gradient-subtle { background: linear-gradient(45deg, #F2CB05/5%, #F28705/5%); }
.gradient-accent { background: linear-gradient(45deg, #F2CB05, #F28705); }
.gradient-border { border-image: linear-gradient(45deg, #F2CB05, #F28705) 1; }
```

### 5.3. Color Splash Elements

**Floating Background Elements:**

- Subtle color orbs with blur effects
- Earth-tone palette appropriate for gun club context
- Animated movement with reduced motion respect

**Usage Guidelines:**

- Maximum 2-3 splash elements per screen
- Opacity: 10-20% to avoid overwhelming content
- Colors: Muted versions of brand palette

## 6. Component-Specific Guidelines

### 6.1. Button Design

**Primary Button:**

- Leonard Yellow background with subtle shadow
- Hover: Lahoma Orange with shadow elevation
- Typography: Noto Sans, semibold weight
- Padding: Comfortable touch targets (min 44px height)

**Premium Button:**

- Gradient background with shimmer effect
- Enhanced shadow system for elevation
- Subtle scale animation on hover
- Reserved for high-value actions

### 6.2. Card Design

**Standard Card:**

- Clean white background with subtle shadow
- Rounded corners (8px) for modern feel
- Proper content padding and spacing
- Hover state with shadow elevation

**Glass Card:**

- Backdrop blur with transparent background
- Subtle border with brand color accent
- Use only over background imagery
- Enhanced typography contrast

### 6.3. Navigation Design

**Primary Navigation:**

- Clear hierarchy with Rajdhani headings
- Smooth transitions between states
- Proper focus indicators for accessibility
- Responsive design for all devices

**Breadcrumb Navigation:**

- Noto Sans for consistency
- Subtle separators with brand accent
- Hover states on interactive elements
- Clear current page indication

## 7. Layout & Spacing

### 7.1. Grid System

**Container Widths:**

- Mobile: 100% with 16px padding
- Tablet: 90% with max-width 768px
- Desktop: 80% with max-width 1200px
- Large: 70% with max-width 1440px

**Spacing Scale:**

- xs: 4px
- sm: 8px
- md: 16px
- lg: 24px
- xl: 32px
- 2xl: 48px
- 3xl: 64px

### 7.2. Content Hierarchy

**Section Spacing:**

- Between major sections: 64px (3xl)
- Between components: 32px (xl)
- Between related elements: 16px (md)
- Between text lines: 8px (sm)

## 8. Animation & Motion

### 8.1. Scroll Effects (Balanced Approach)

**Progressive Disclosure:**

- Fade-in on scroll with intersection observer
- Subtle upward movement (20px) on reveal
- Staggered animations for grouped elements
- Respect `prefers-reduced-motion` setting

**Parallax Elements:**

- Subtle background movement (0.5x scroll speed)
- Limited to hero sections and feature highlights
- No motion sickness inducing effects
- Always optional/disableable

### 8.2. Loading States

**Skeleton Screens:**

- Gradient shimmer animation
- Proper content shape approximation
- Smooth transition to actual content
- Consistent with overall design system

**Micro-Interactions:**

- Button press feedback (subtle scale)
- Form field focus animations
- Success/error state transitions
- Tooltip appearances

## 9. Accessibility Standards

### 9.1. Color Contrast

**WCAG AA Compliance:**

- Text on background: 4.5:1 minimum ratio
- Large text: 3:1 minimum ratio
- Interactive elements: Clear focus indicators
- Color not sole information indicator

### 9.2. Motion Sensitivity

**Reduced Motion Support:**

- Respect `prefers-reduced-motion: reduce`
- Provide static alternatives for animations
- Maintain functionality without motion
- Essential animations only when needed

### 9.3. Keyboard Navigation

**Focus Management:**

- Visible focus indicators on all interactive elements
- Logical tab order throughout interface
- Skip links for main content areas
- Proper ARIA labels and roles

## 10. Implementation Notes

### 10.1. CSS Custom Properties & Tailwind v4 Syntax

All design tokens must be defined as CSS custom properties in `globals.css`:

```css
@theme {
  --color-leonard-yellow: #F2CB05;
  --color-lahoma-orange: #F28705;
  --font-heading: "Rajdhani", sans-serif;
  --font-body: "Noto Sans", sans-serif;
  --font-serif: "Noto Serif", serif;
  --transition-fast: 150ms cubic-bezier(0.215, 0.61, 0.355, 1);
  --shadow-sm: 0 2px 4px -1px rgba(50,50,93,.25);
}
```

**CRITICAL: Tailwind v4 Modern Syntax (2025 Standard)**

When referencing CSS custom properties defined with `@theme`, use the **direct utility class syntax**:

```html
<!-- ✅ CORRECT: v4 Direct Utility Syntax -->
<div class="bg-leonard-yellow">
<div class="border-leonard-yellow/30">
<div class="text-lahoma-orange">

<!-- ❌ FORBIDDEN: All old syntax variations -->
<div class="bg-(--color-leonard-yellow)">
<div class="bg-[var(--color-leonard-yellow)]">
<div class="bg-[--color-leonard-yellow]">
<div class="bg-color-leonard-yellow">
```

**With Opacity Modifiers:**

```html
<div class="bg-leonard-yellow/20">
<div class="border-lahoma-orange/50">
<div class="shadow-md">
```

**Theme-Aware Color References:**

```html
<div class="bg-card text-text">
<div class="border-primary hover:bg-primary/10">
```

### 10.2. Component Documentation

Each component must include:

- Design rationale and usage guidelines
- Accessibility considerations
- Performance implications
- Responsive behavior
- Dark mode support

## 11. Design System Integration Summary

### 11.1. Triple Fusion Achievement

This design system successfully integrates three world-class design philosophies:

**Stripe Precision (Technical Excellence):**

- 150ms cubic-bezier transitions for micro-interactions
- Sophisticated shadow elevation system
- Form field focus states with shadow rings
- Button press feedback (scale 0.98)
- Professional timing and easing curves

**ClickUp Vibrancy (Productive Energy):**

- Strategic gradient hints at 3-5% opacity
- Professional color splash effects behind premium content
- Tabbed interfaces and progressive disclosure patterns
- Animated gradient borders for special components
- Visual hierarchy through selective color application

**Windows 11 Mica (Material Depth):**

- Opaque glass effects with colorful noise textures
- Brand-aware noise patterns using Leonard Yellow/Lahoma Orange
- Material depth through layered background effects
- Dynamic color adaptation for light/dark themes
- Sophisticated backdrop blur with noise integration

### 11.2. Professional Implementation Standards

**Restraint and Sophistication:**

- No overwhelming gradient backgrounds (avoided "2004 Photoshop" effects)
- Subtle opacity levels maintain content readability
- Professional timing prevents jarring animations
- Brand colors applied strategically, not universally
- Accessibility preserved through proper contrast ratios

**Gun Club Context Appropriateness:**

- Professional authority maintained through restrained effects
- Safety-focused messaging never compromised by visual elements
- Earth-tone palette integration with modern design trends
- Clear information hierarchy for range rules and procedures
- Trust-building through sophisticated, not flashy, design

### 11.3. Technical Implementation

**CSS Architecture:**

- All design tokens defined in CSS custom properties
- Tailwind v4 syntax compliance throughout
- Performance-optimized animations (GPU-accelerated)
- Reduced motion support for accessibility
- Modular component architecture following shadcn/ui patterns

**Component Enhancement:**

- Button: Stripe micro-interactions + ClickUp gradients + Mica textures
- Card: Professional material depth with gradient hints
- Badge: Status indicators with data visualization shadows
- Form fields: Enhanced focus states with shadow rings
- Navigation: Subtle effects that guide without distracting

This design system represents the visual standards for creating a flagship-quality website that balances professional authority with modern sophistication, suitable for showcase at innervate.agency as a premier example of thoughtful design system integration.
