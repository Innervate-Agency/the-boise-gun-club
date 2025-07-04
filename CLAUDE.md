# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Common Commands

### Development
- `npm run dev` - Start development server at http://localhost:3000
- `npm run build` - Build production version
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run type-check` - Run TypeScript type checking

### Testing
- `npm test` - Run Jest tests
- `npm run test:watch` - Run tests in watch mode

### Image Optimization
- `npm run optimize-images` - Optimize all images (runs automatically before build)
- `npm run prebuild` - Pre-build optimization including images

### Analysis
- `npm run analyze` - Analyze bundle size with webpack-bundle-analyzer

## Project Architecture

### Tech Stack
- Next.js 15.3.2 with App Router
- React 19
- TypeScript with strict mode
- Tailwind CSS 4.0
- Framer Motion for animations
- Jest for testing

### Directory Structure
- `src/app/` - Next.js App Router pages and API routes
- `src/components/` - Reusable React components organized by feature
- `src/hooks/` - Custom React hooks
- `src/utils/` - Utility functions and helpers
- `src/types/` - TypeScript type definitions
- `src/data/` - Static content and configuration files
- `public/` - Static assets, images, and fonts

### Component Organization
Components are organized by feature area:
- `common/` - Shared components (Footer, Logo, SectionHeader)
- `effects/` - Animation and visual effects (ClayFragments, SmokeAnimation)
- `events/` - Calendar and event management
- `gallery/` - Photo gallery functionality
- `home/` - Homepage-specific components
- `layout/` - Layout components
- `membership/` - Membership-related components
- `navigation/` - Navigation and menu components
- `ui/` - Base UI components (Button, Card, etc.)

### Path Aliases
Configured in `tsconfig.json`:
- `@/*` - src/ directory
- `@components/*` - src/components/
- `@utils/*` - src/utils/
- `@styles/*` - src/styles/
- `@hooks/*` - src/hooks/
- `@types/*` - src/types/

### Content Management
Content is managed through:
- `src/data/content.json` - Static content data
- `src/hooks/useContent.ts` - Content fetching hook
- `/api/content` - Content API endpoint
- `src/types/content.ts` - Content type definitions

### Typography and Branding
- Headings: 'Refrigerator Deluxe' font (font-heading class)
- Body text: 'Museo Sans' font (font-body class)
- Premium fonts loaded via local .otf files with fallbacks
- Brand colors via CSS custom properties:
  - `--accent-primary` (leonard-yellow #F2CB05)
  - `--accent-secondary` (lahoma-orange #F28705)
  - Dark theme support with theme context

### Animation Standards
- All animations use Framer Motion
- Performance-optimized with 60fps targets
- Includes prefers-reduced-motion support
- Clay target physics-based animations
- Glassmorphism effects with 15-20% opacity

### Image Handling
- Next.js Image component for optimization
- WebP/AVIF formats with fallbacks
- Unsplash API integration for gallery images
- Custom image optimization script

### Security
- Content Security Policy configured
- Security headers in next.config.ts
- CSRF protection for API routes

### Performance
- Bundle splitting optimization
- Image optimization pipeline
- Font preloading for critical fonts
- Cache headers for static assets

### Testing
- Jest with React Testing Library
- jsdom test environment
- Component and utility testing setup

### Code Guidelines
- Always use descriptive variable names

## Project Progress

### Major Milestones
- Successfully completed 5 core pages with professional design and functionality:
  1. Homepage - Modern shadcn design with photo submission incentive
  2. Club Info - Comprehensive facilities, history, contact with interactive elements
  3. Membership - Professional pricing cards, benefits, testimonials, value calculator
  4. Rules & Safety - Complete 25+ safety rules, emergency procedures, AED locations
  5. Weekly Schedule - Interactive daily schedule, league info, weather policies

### Technical Foundation Achievements
- Fixed ParticleAnimation webpack errors
- Converted hardcoded colors to brand CSS variables
- Integrated theme & accessibility systems
- Used shadcn components throughout
- Implemented Rajdhani + Noto Sans typography
- Created responsive design with animations
- Established CSS variables from brand system

### Upcoming Development Tasks
- [ ] Integrate Chatwoot live chat system
- [ ] Setup Sanity.io CMS for director content management
- [ ] Integrate Discourse forum with SSO
- [ ] Implement Stripe payment system for memberships/events
- [ ] Create member portal with Supabase authentication
- [ ] Build photo submission incentive system
- [ ] Create additional schedule pages (competitions, training, reservations)

### Completed Tasks
- [x] Fix broken ParticleAnimation imports
- [x] Convert hardcoded colors to CSS variables
- [x] Rebuild /club-info page with shadcn components
- [x] Implement theme system with light/dark auto-switching
- [x] Create accessibility panel
- [x] Rebuild /membership page
- [x] Rebuild /rules page with comprehensive safety rules
- [x] Create /schedule pages with real functionality

## Project Session Summaries

### Foundation Phase Rebuild (May 2024)
- Comprehensive 32-page rebuild after 4 months of broken site development
- Critical portfolio comeback showcasing 20+ years of design expertise
- Core infrastructure fixes including:
  - Webpack ParticleAnimation import error resolution
  - Color system conversion to CSS variables
  - Theme and accessibility system integration
  - Component modernization with shadcn
- Delivered 5 portfolio-quality pages:
  1. Homepage with photo submission incentive
  2. Club Info with interactive facility showcase
  3. Membership with value calculator and testimonials
  4. Rules & Safety with comprehensive guidelines
  5. Weekly Schedule with interactive functionality
- Technical achievements:
  - Consistent brand system using 26-color palette
  - Standardized typography (Rajdhani + Noto Sans)
  - Mobile-first responsive design
  - Performance and accessibility optimizations
- Design philosophy maintained: professional, data-driven, open-source leveraged