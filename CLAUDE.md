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

### Storybook
- `npm run storybook` - Start Storybook development server at http://localhost:6006
- `npm run build-storybook` - Build static Storybook for deployment

### Analysis
- `npm run analyze` - Analyze bundle size with webpack-bundle-analyzer

## Project Architecture

### Tech Stack
- Next.js 15.3.5 with App Router and Turbopack optimization
- React 19
- TypeScript with strict mode
- Tailwind CSS 4.1.10 with CSS variables
- shadcn/ui component library (47+ components)
- Radix UI primitives for accessibility
- Framer Motion for animations
- Jest with React Testing Library for testing
- Storybook 9.0.15 for component development

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
Configured in `tsconfig.json` and `next.config.ts`:
- `@/*` - src/ directory
- `@components/*` - src/components/
- `@utils/*` - src/utils/
- `@styles/*` - src/styles/
- `@hooks/*` - src/hooks/
- `@lib/*` - src/lib/
- `@types/*` - src/types/

### Content Management
Content is managed through:
- `src/data/content.json` - Static content data
- `src/hooks/useContent.ts` - Content fetching hook
- `/api/content` - Content API endpoint
- `src/types/content.ts` - Content type definitions

### Typography and Branding
- Headings: 'Rajdhani' font (font-heading class) - Display font for H1-H2 titles
- Body text: 'Noto Sans' font (font-body class) - Body text and H3-H6 headings  
- Editorial: 'Noto Serif' font (editorial-subtitle class) - Special subtitles for texture
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

### Testing & Development
- Jest with React Testing Library for unit/integration tests
- Storybook with comprehensive component stories and documentation
- Vitest integration for additional testing capabilities
- jsdom test environment for browser simulation
- Playwright for end-to-end testing capabilities

### Component Architecture
- shadcn/ui as the foundation with custom "fusion" variants
- Class Variance Authority (CVA) for component variants
- Consistent use of CSS custom properties for theming
- All components support both light and dark themes
- Premium/Elite variants with enhanced visual effects

### Development Standards
- TypeScript strict mode enforced
- ESLint with Next.js configuration
- No use of `!important` CSS declarations
- Component stories required for all UI components
- Comprehensive error boundaries and loading states

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
- [ ] **COMPONENT ENHANCEMENT PHASE** (Ready to proceed):
  - [ ] Enhance remaining ~40 shadcn components with Premium/Elite fusion variants
  - [ ] Update all Storybook stories with variant showcases
  - [ ] Performance optimization and bundle analysis
- [ ] **REMAINING TECHNICAL DEBT**:
  - [ ] Resolve 7 security vulnerabilities (npm audit fix --force) 
  - [ ] Clean up 200+ lines of commented CSS in themes.css
  - [ ] Add barrel exports (index.ts files) for cleaner imports
- [ ] **FEATURE DEVELOPMENT**:
  - [ ] Build remaining 25+ pages using established fusion component patterns
  - [ ] Integrate Strapi CMS (migrated from Sanity)
  - [ ] Integrate Chatwoot live chat system
  - [ ] Integrate Discourse forum with SSO
  - [ ] Implement Stripe payment system for memberships/events
  - [ ] Create member portal with Supabase authentication

### Session Automation Features ✅
- **Auto Context Management**: Trigger compaction at 10% context remaining
- **Auto Documentation**: Update PRECOMPACT_CHANGELOG.md and CHANGELOG.md automatically
- **Auto Git Workflow**: Commit after todo list completion
- **Session Continuity**: Comprehensive pre/post compaction logs for seamless handoffs

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
- [x] **Foundation Phase 13**: **CRITICAL** - Documentation system overhaul ✅
  - [x] Research and implement July 2025 best practices
  - [x] Fix font-weight 800 error causing dev server failures
  - [x] Resolve React.Children.only error in Button component
  - [x] Fix Storybook /index.json indexing errors
  - [x] Remove lingering smoke background effects
  - [x] Eliminate all !important CSS hacks
  - [x] Establish authoritative CODE_GUIDELINES.md and DESIGN_SYSTEM.md
  - [x] Archive conflicting documentation
  - [x] Create session automation system

### Current Project Health Score: 9.0/10
- **Configuration**: 9/10 (Professional with 2025 standards compliance)
- **Styling**: 9/10 (Tailwind v4 best practices, enhanced animations)  
- **Components**: 8.5/10 (Enhanced fusion system, proper Mica effects, ready for research phase)
- **TypeScript**: 7/10 (Strict mode working, most critical issues resolved)
- **Build System**: 9/10 (Font loading fixed, dev server stable)
- **Dependencies**: 6/10 (Security issues still need addressing)
- **Documentation**: 10/10 (Storybook working, research-backed, authoritative)

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

### Storybook Documentation & Animation Enhancement (July 2025)  
- **Critical Fix**: Resolved Storybook 9.x MDX import errors blocking all documentation
- **Animation System**: Added complete Stripe-inspired micro-interactions and Windows 11 Mica effects
- **Component Analysis**: Comprehensive audit of existing fusion implementations revealing shallow patterns
- **Research Preparation**: Identified need for deep ClickUp.com and Stripe.com design system analysis
- **Technical achievements**:
  - Fixed `@storybook/addon-docs/blocks` import path for Meta component
  - Added Stripe timing utilities: `transition-stripe-fast` (150ms) and `transition-stripe-normal` (300ms)
  - Implemented `hover:button-lift`, `active:button-press` micro-interactions  
  - Created premium shadow system with brand colors: `shadow-premium`, `shadow-elite`
  - Added Windows 11 Mica noise patterns: `mica-premium`, `mica-elite`
  - Enhanced Button component with proper Leonard Yellow to Lahoma Orange gradients
- **Project Health**: Upgraded to 9.0/10 with improved component system and working documentation

### Latest Session Achievements (July 2025)
- **SPLASH PAGE CARD ENHANCEMENT**: Complete visual upgrade of feature cards with professional interactions
  - Enhanced card titles from text-2xl to text-3xl with font-bold for better visual hierarchy
  - Improved card spacing from gap-8 to gap-12 for better breathing room
  - Enhanced shadow system: shadow-lg default with hover:shadow-2xl and black/20 opacity
  - Animated border system: top border initially, bottom border appears on hover
  - Internal glow effect with subtle white gradient overlay on hover
  - Pure white cards in light mode, proper dark theme support with bg-card theming
  - Git commit: 480386d "feat: Enhance splash page feature cards with professional interactions"

## Development Workflow Memories
- Always assume that the dev server is running, I follow along with the work we are doing by having it running.