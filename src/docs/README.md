# The Boise Gun Club: A Treasure Valley Firearm & Firearm Sport Collective

> Production repository for the regional firearms community platform serving vendors, enthusiasts, and businesses throughout Treasure Valley

## 🎯 Project Overview

This is the production build transforming traditional gun club representation into a comprehensive firearms ecosystem for the entire Treasure Valley region. Built with Next.js 15 and a sophisticated triple-fusion design system.

### Core Platform Features
- **Business Directory** - Gun shops, ranges, gunsmiths, instructors
- **Community Forum** - Discussion, marketplace, event coordination  
- **Event Calendar** - Unified scheduling for all local clubs
- **Content Hub** - Gun wiki, reviews, Idaho law guides
- **Service Booking** - Instructor scheduling, range reservations

## 🏗️ Technical Foundation

### Tech Stack
- **Next.js 15.4.1** with App Router
- **React 19.1** with TypeScript strict mode
- **Tailwind CSS v4** with CSS-first configuration
- **shadcn/ui** component library with enhanced variants
- **Framer Motion 12+** for animations
- **Storybook 9.0.8** for component documentation

### Design System
Triple fusion aesthetic combining:
- **Stripe-inspired precision** - 150ms timing, layered shadows, micro-interactions
- **ClickUp-inspired vibrancy** - Strategic gradients, selective glassmorphism
- **Windows 11 Mica depth** - Professional material effects with brand bleeding

### Typography Hierarchy
- **Rajdhani** - Headings and titles (font-heading)
- **Noto Sans** - Body text and UI elements (font-body)  
- **Noto Serif** - Editorial content and subtitles (font-serif)

## 🎨 Brand System

**Primary Brand Colors:**
- Leonard Yellow: `#F2CB05` (Primary accent)
- Lahoma Orange: `#F28705` (Secondary accent)

**26-Color Idaho Landscape Palette:**
From Cloudy Day White (`#f8f6f1`) to Clubhouse Lawn Green (`#3F6331`) - complete regional theme system documented in `src/docs/QUICK_REFERENCE.md`

## 🚀 Development Commands

```bash
# Development server
npm run dev

# Production build  
npm run build

# Component documentation
npm run storybook

# Type checking
npm run type-check

# Code linting
npm run lint

# Component playground
# Visit /test/components for live testing
```

## 📁 Architecture

```
src/
├── app/              # Next.js App Router
│   ├── test/         # Component playground (preserved)
│   │   └── components/
│   ├── layout.tsx    # Root layout
│   └── page.tsx      # Splash page
├── components/       # React components
│   ├── ui/          # Enhanced shadcn/ui components
│   ├── common/      # Shared components
│   └── [feature]/   # Feature-specific components
├── docs/            # Comprehensive documentation
│   ├── DESIGN_SYSTEM.md
│   ├── CODE_GUIDELINES.md
│   ├── QUICK_REFERENCE.md
│   └── BUSINESS_PIVOT_CONTEXT.md
├── lib/             # Utilities and helpers
├── hooks/           # Custom React hooks
├── types/           # TypeScript definitions
└── stories/         # Storybook documentation
```

## 🎯 Component System

### Enhanced shadcn/ui Components
All base components enhanced with regional firearms context:

**Card Variants:**
- `VendorCard` - Business listings (Idaho Sky Blue accent)
- `ServiceCard` - Service providers (Owyhee Field Green accent)  
- `MarketplaceCard` - Gear/accessory sales (Gunclub Orange accent)
- `DirectoryCard` - Community directory (Lahoma Orange accent)

**Premium Effects:**
- `premium` - Sophisticated elevation with Mica effects
- `elite` - Maximum sophistication with shimmer animations
- `glass-premium` - Professional glassmorphism variants

### Component Playground
Access `/test/components` for live component testing outside of Storybook - essential for full integration testing.

## 📖 Documentation

- **Design System:** `src/docs/DESIGN_SYSTEM.md` - Complete visual standards
- **Code Guidelines:** `src/docs/CODE_GUIDELINES.md` - Technical implementation standards  
- **Quick Reference:** `src/docs/QUICK_REFERENCE.md` - 26-color system and patterns
- **Business Context:** `src/docs/BUSINESS_PIVOT_CONTEXT.md` - Regional platform vision

## 🎯 Current Status

**Phase:** Foundation Complete
- ✅ Triple fusion design system implemented
- ✅ Enhanced shadcn/ui component library
- ✅ Regional firearms hub variants
- ✅ Professional splash page skeleton
- ✅ Component playground preserved
- ✅ Storybook documentation system
- 🔄 Ready for component enhancement session
- 📅 Business directory implementation
- 📅 Community forum integration

## 🏆 Business Context

**Domain Authority:** 8+ years of established presence
**Legal Position:** Bulletproof domain ownership
**Market Opportunity:** Treasure Valley's first comprehensive firearms platform
**Design Standard:** Innervate Agency flagship showcase

---

**Professional Platform** - Transforming regional firearms community engagement through sophisticated design and technical excellence.