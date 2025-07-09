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
- Headings: 'Rajdhani' font (font-heading class) - Display font for titles and H1
- Body text: 'Noto Sans' font (font-body class) - Body text and H4-H6 headings  
- Editorial: 'Noto Serif' font (font-serif class) - H2-H3 headings for texture
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

### Technical Foundation Achievements (Latest Session)
- **Complete shadcn/ui component library** (47+ components installed)
- **Storybook 9.0.15** with proper dark/light mode support working
- **Fusion component system**: GlassFusionCard, PremiumButton, FloatingBackground
- **Design system secured**: Comprehensive DesignSystem.mdx with text contrast rules
- **Button premium variant** using CVA (Class Variance Authority) best practices
- **Fixed white text on white background** issues using proper CSS specificity
- **Context preservation prompt** created for future AI sessions
- **Project organization**: Cleaned up root directory, moved docs to _project-docs/

### Upcoming Development Tasks
- [ ] **CRITICAL FIXES BEFORE 30-PAGE BUILD**:
  - [ ] Fix 64 TypeScript errors (background pattern "mist", button variants, Badge size property)
  - [ ] Resolve 7 security vulnerabilities (npm audit fix --force)
  - [ ] Fix missing Sanity CMS dependencies
  - [ ] Clean up 200+ lines of commented CSS in themes.css
  - [ ] Add barrel exports (index.ts files) for cleaner imports
- [ ] Build remaining 25+ pages using established fusion component patterns
- [ ] Integrate Chatwoot live chat system
- [ ] Setup Sanity.io CMS for director content management
- [ ] Integrate Discourse forum with SSO
- [ ] Implement Stripe payment system for memberships/events
- [ ] Create member portal with Supabase authentication

### Completed Tasks
- [x] **Foundation Phase 1**: Fix broken ParticleAnimation imports
- [x] **Foundation Phase 2**: Convert hardcoded colors to CSS variables
- [x] **Foundation Phase 3**: Rebuild /club-info page with shadcn components
- [x] **Foundation Phase 4**: Implement theme system with light/dark auto-switching
- [x] **Foundation Phase 5**: Create accessibility panel
- [x] **Foundation Phase 6**: Rebuild /membership page
- [x] **Foundation Phase 7**: Rebuild /rules page with comprehensive safety rules
- [x] **Foundation Phase 8**: Create /schedule pages with real functionality
- [x] **Foundation Phase 9**: Install complete shadcn/ui library + Storybook
- [x] **Foundation Phase 10**: Build Stripe+ClickUp fusion component system
- [x] **Foundation Phase 11**: Fix Storybook theming and text contrast issues
- [x] **Foundation Phase 12**: Comprehensive project audit completed

### Current Project Health Score: 6.8/10
- **Configuration**: 8/10 (Professional but needs security fixes)
- **Styling**: 7/10 (Good foundation but needs cleanup)
- **Components**: 7/10 (Well-structured but needs optimization)
- **TypeScript**: 5/10 (64 errors need fixing before scaling)
- **Build System**: 8/10 (Works but needs quality improvements)
- **Dependencies**: 6/10 (Security issues need addressing)

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
  - Standardized typography (Rajdhani + Noto Sans + Noto Serif)
  - Mobile-first responsive design
  - Performance and accessibility optimizations
- Design philosophy maintained: professional, data-driven, open-source leveraged