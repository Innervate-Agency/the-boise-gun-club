





















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
