
Boise Gun Club Design System

Complete Development Foundation for 32+ Pages
🚦 CRITICAL RULES - READ FIRST
❌ NEVER DO THIS:

    style={{ fontFamily: 'Rajdhani' }} - No inline styles for fonts
    style={{ color: '#F28705' }} - No inline styles for colors
    className="text-[#F28705]" - No hardcoded color values
    <button> - No direct button elements for UI
    Right-aligned text - Always left-align content
    External images - Only use /public/images/ directory
    Emojis in UI - Use Lucide React icons only

✅ ALWAYS DO THIS:

    className="font-heading" - Use established font classes
    className="text-[var(--lahoma-orange)]" - Use CSS variables
    <Button variant="default"> - Use design system components
    className="text-gray-900 dark:text-white" - Proper contrast
    className="text-white dark:text-white" - For colored backgrounds
    className="text-gray-600 dark:text-gray-300" - For secondary text

🎨 Official Brand System (26 Colors)
Dark Theme: "Misty Fall Morning in the Cascades"

--leonard-yellow: #F2CB05;

--lahoma-orange: #F28705;        /* PRIMARY ACCENT */

--jerry-orange: #F25C05;

--abe-red: #F23005;              /* ACTION/CTA */

--don-gray: #EEF1F7;

--ed-charcoal: #4B4B4B;

--chester-white: #FDFDFD;

--kent-slate-gray: #2F3135;

--scoring-bench-red: #8C394B;

--pigeon-clay-gray: #494657;

--club-house-roof-blue: #4982A6;

--club-house-lawn-green: #3F6331;

--club-house-walk-gray: #C9D2EF;

Light Theme: "Spring Day Along The East Fork of The Owyhee River"

--craters-moon: #372103;

--owyhee-green: #6f7822;         /* SUCCESS */

--idaho-sky-blue: #5198cd;

--clay-pidgeon-orange: #F23005;  /* PRIMARY ACCENT */

--desert-cliff-brown: #693e21;

--boise-yard-green: #909233;

--wildeye-susan-yellow: #E3C03C;

--sand-dune-brown: #c08051;

--scoring-bench-red: #8C394B;

--snakeriver-blue: #3c81c0;

--cloudy-day-white: #f8f6f1;

--overcast: #ede7de;

--gunclub-orange: #f07b1d;

Color Usage Rules

    ✅ Always use CSS variables: bg-[var(--lahoma-orange)]
    ❌ NEVER use hardcoded Tailwind colors: bg-orange-500
    ✅ Primary accent: --lahoma-orange (#F28705)
    ✅ Action/CTA: --abe-red (#F23005)
    ✅ Success: --owyhee-green (#6f7822)

📝 Typography System
Official Fonts (Google Fonts)

font-heading     /* Rajdhani for headings/titles/logo */

font-body        /* Noto Sans for body text */

Typography Rules

    Headings/Titles/Logo: Rajdhani font family ONLY
    Body Text: Noto Sans font family ONLY
    Font Weight: 300 (light) for body text
    Text Alignment: Always left-aligned (NEVER right-align)

Usage Examples

<h1 className="font-heading font-bold">Core Components</h1>

<p className="font-body font-light">Description text here</p>

❌ Never Use:

    font-['Rajdhani']
    style={{ fontFamily: 'Rajdhani' }}
    Right-aligned text
    Any other font families

🏗️ Project Context & Foundation
Tech Stack (Next.js 15 + React 19)

    Framework: Next.js 15.3.2 with App Router
    Runtime: React 19.0.0 + React DOM 19.0.0
    Language: TypeScript (strict mode)
    Styling: TailwindCSS 4.0 + CSS custom properties
    Animation: Framer Motion 11.11.17 (NO inline CSS)
    Icons: Lucide React 0.517.0 + React Icons 5.5.0
    Testing: Jest 29.7.0 + React Testing Library

Business Context

    Club: Boise Gun Club (Founded 1898, 320 acres, 1200+ members)
    Focus: Family-friendly shotgun sports ONLY (trap, skeet, sporting clays)
    Transformation: From hardcore industrial → welcoming community facility
    Deadline: Monday July 7, 2025 (Board Presentation)

🎯 Site Structure (32+ Pages)
Main Navigation (5 Clean Items)

    Home (/) - Hero, events, pricing, featured content
    Club Info (/club-info) - History, facilities, contact form, map
    Membership (/membership) - $75 annual, benefits, pricing
    Forums (/forum) - Community discussions
    Club Services (Mega Menu) - All member services

Club Services Mega Menu
Schedule & Activities

    Weekly Schedule (/schedule/weekly)
    Competition Calendar (/schedule/competitions)
    Training Sessions (/schedule/training)
    Range Reservations (/schedule/reservations)

Member Services

    Member Portal (/members/portal)
    Payment Center (/members/billing)
    Member Directory (/members/directory)
    Volunteer Opportunities (/members/volunteer)

Safety & Operations

    Rules & Safety (/rules) - 25+ comprehensive rules
    Emergency Info (/emergency) - AED locations, procedures
    Weather Conditions (/weather) - Live forecast, policies
    Range Status (/ranges/status) - Real-time availability

Special Features

    Club Museum (/museum) - Timeline 1973-2023
    Event Calendar (/events) - Dynamic event system

🧩 Component Patterns
Button Usage (Gun Club Examples)

// ✅ Correct - Gun Club Specific

<Button variant="default" size="lg">Join The Elite</Button>

<Button variant="outline">Emergency Stop</Button>

<Button variant="destructive">Book Range Time</Button>



// ❌ Wrong  

<button className="bg-orange-500">Click Me</button>

Card Pattern (Stripe + ClickUp Inspired)

// ✅ Correct - Stripe Cards with ClickUp Gradients

<Card className="rounded-xl overflow-hidden">

  <div className="h-24 bg-gradient-to-r from-[var(--lahoma-orange)] to-[var(--abe-red)] relative rounded-t-xl">

    <Badge className="bg-white/20 text-white border-white/30">Most Popular</Badge>

  </div>

  <CardHeader>

    <CardTitle className="font-heading text-gray-900 dark:text-white">

      Elite Membership

    </CardTitle>

    <CardDescription className="font-body text-gray-600 dark:text-gray-300">

      $75/year + $6 per round

    </CardDescription>

  </CardHeader>

  <CardContent>

    <Button className="w-full bg-[var(--lahoma-orange)] hover:bg-[var(--abe-red)]">

      Join Today

    </Button>

  </CardContent>

</Card>

Glass Effects (Windows 11 Mica Style)

.glass-mica {

  background: rgba(42, 35, 28, 0.35);

  backdrop-filter: blur(20px);

  -webkit-backdrop-filter: blur(20px);

  border: 1px solid rgba(210, 105, 30, 0.2);

  position: relative;

}



.glass-mica::before {

  content: '';

  position: absolute;

  inset: 0;

  background-image: 

    radial-gradient(circle at 25% 25%, rgba(255,255,255,0.1) 0%, transparent 25%),

    radial-gradient(circle at 75% 75%, rgba(255,255,255,0.05) 0%, transparent 25%);

  pointer-events: none;

  border-radius: inherit;

}

🏗️ Component Categories
Core Components (Orange Theme)

    Colors: Orange to Red gradient (from-[var(--lahoma-orange)] to-[var(--abe-red)])
    Use Case: Essential UI building blocks
    Examples: Button, Card, Badge, Input

Form Components (Blue Theme)

    Colors: Blue gradients (from-[var(--idaho-sky-blue)] to-[var(--snakeriver-blue)])
    Use Case: Form inputs and validation
    Examples: Input, Select, Checkbox, Radio

Data Display (Green Theme)

    Colors: Green gradients (from-[var(--owyhee-green)] to-[var(--club-house-lawn-green)])
    Use Case: Tables, charts, statistics
    Examples: DataTable, Chart, Progress, Stats

Navigation (Yellow Theme)

    Colors: Yellow gradients (from-[var(--leonard-yellow)] to-[var(--wildeye-susan-yellow)])
    Use Case: Navigation patterns
    Examples: Menu, Breadcrumbs, Tabs

Feedback (Red Theme)

    Colors: Red gradients (from-[var(--abe-red)] to-[var(--scoring-bench-red)])
    Use Case: Loading, alerts, notifications
    Examples: Loading, Alert, Toast, Modal

Gaming Elements (Orange-Red Theme)

    Colors: Orange-Red gradients
    Use Case: Gamification and achievements
    Examples: Leaderboard, Badges, Scoring, Achievement System

📸 Photo Collection Strategy
"Share Your Shot, Become Our Hero!" Program

    Hero Homepage Feature: Monthly rotation of member photos
    Member Spotlight: Photo + story in newsletter
    Social Media Features: Instagram/Facebook highlights
    Photo Contest Prizes: Quarterly competitions
    Legacy Gallery: Best photos become club history

Photo Categories

    Action Shots: Members shooting, competitions
    Achievement Moments: Perfect rounds, trophies, celebrations
    Family & Friends: Multi-generational shooting
    Facility Beauty: Scenic range views
    Historical Moments: Events, milestones, traditions

🎯 Shotgun Sports Terminology (CORRECT)
Disciplines

    Trap: 25 targets, stations/posts, straight/handicap
    Skeet: High house/low house, 8 stations
    Sporting Clays: 15 stations, varied presentations

Scoring & Organizations

    Perfect Round: 25/25 (NOT 100%)
    ATA: American Trap Association
    NSSA: National Skeet Shooting Association
    NSCA: National Sporting Clays Association
    Equipment: Clay targets/pigeons (NOT paper targets)

📋 Development Checklist

Before creating any component:

    [ ] Use <Button> component, never <button>
    [ ] Use font-heading and font-body classes
    [ ] Use text-gray-900 dark:text-white for readable text
    [ ] Use bg-[var(--lahoma-orange)] instead of hardcoded colors
    [ ] Add rounded-xl for card corners
    [ ] Include proper dark mode variants
    [ ] Test in both light and dark themes
    [ ] Follow shotgun sports terminology
    [ ] Use family-friendly language
    [ ] Include internal links for SEO

🎨 Text Contrast System (CRITICAL)
Universal Text Contrast Classes

These solve the white-on-white text problem permanently:

// 🎯 Primary Text (Headings, Titles)

className="text-gray-900 dark:text-white"



// 🎯 Secondary Text (Descriptions, Captions)  

className="text-gray-600 dark:text-gray-300"



// 🎯 Text on Colored Backgrounds (Buttons, Cards with gradients)

className="text-white dark:text-white"



// 🎯 Link Text

className="text-[var(--lahoma-orange)] hover:text-[var(--abe-red)] dark:text-[var(--leonard-yellow)]"



// 🎯 Muted Text (Timestamps, Helper text)

className="text-gray-500 dark:text-gray-400"



// 🎯 Success Text

className="text-[var(--owyhee-green)] dark:text-green-400"



// 🎯 Error Text

className="text-[var(--abe-red)] dark:text-red-400"

Button Text Contrast Rules

// ✅ Correct - All buttons with colored backgrounds

<Button className="bg-[var(--lahoma-orange)] hover:bg-[var(--abe-red)] text-white dark:text-white">

  Join The Elite

</Button>



// ✅ Correct - Outline buttons  

<Button variant="outline" className="text-gray-900 dark:text-white border-gray-300 dark:border-gray-600">

  Learn More

</Button>



// ❌ Wrong - Will cause white-on-white text

<Button className="bg-[var(--lahoma-orange)]">Join The Elite</Button>

Card Text Contrast Rules

// ✅ Correct - Card with gradient header

<Card className="rounded-xl overflow-hidden">

  <div className="h-24 bg-gradient-to-r from-[var(--lahoma-orange)] to-[var(--abe-red)]">

    <Badge className="bg-white/20 text-white border-white/30">Most Popular</Badge>

  </div>

  <CardHeader>

    <CardTitle className="font-heading text-gray-900 dark:text-white">

      Elite Membership

    </CardTitle>

    <CardDescription className="font-body text-gray-600 dark:text-gray-300">

      $75/year + $6 per round

    </CardDescription>

  </CardHeader>

</Card>

Badge Text Contrast Rules

// ✅ Correct - Badge on gradient backgrounds

<Badge className="bg-white/20 text-white border-white/30">Most Popular</Badge>



// ✅ Correct - Badge on light backgrounds

<Badge className="bg-[var(--lahoma-orange)] text-white dark:text-white">New</Badge>



// ✅ Correct - Outline badge

<Badge variant="outline" className="text-gray-900 dark:text-white border-gray-300 dark:border-gray-600">

  Limited Time

</Badge>

🚨 Common Mistakes to Avoid

    White text on white background
        ❌ text-white in light mode
        ✅ text-gray-900 dark:text-white

    Invisible badges on gradients
        ❌ bg-green-500 text-green-500 on green gradient
        ✅ bg-white/20 text-white border-white/30 on any gradient

    Square card corners
        ❌ Default card styling
        ✅ rounded-xl overflow-hidden + rounded-t-xl for header

    Inline gradient styling
        ❌ style={{ background: 'linear-gradient(...)' }}
        ✅ Tailwind gradient classes or CSS variables

    Wrong terminology
        ❌ "Rifle range" or "paper targets"
        ✅ "Shotgun sports" and "clay targets"

🚀 Fusion Component Patterns (Stripe + ClickUp)
Glass Fusion Card - Ultimate Card System

import { GlassFusionCard } from '@/components/ui/glass-fusion-card';



// ✅ Standard membership card

<GlassFusionCard

  title="Elite Membership"

  description="$75/year + $6 per round"

  badge="Most Popular"

  variant="gradient"

  intensity="premium"

  hoverEffect={true}

  className="text-white dark:text-white"

>

  <Button className="w-full bg-white/20 hover:bg-white/30 text-white dark:text-white">

    Join Today

  </Button>

</GlassFusionCard>



// ✅ Variants available

variant="gradient" | "glass" | "mica" | "neon"

intensity="subtle" | "medium" | "premium" | "extreme"

Premium Button - Enhanced Button System

import { PremiumButton } from '@/components/ui/premium-button';



// ✅ Main CTA button

<PremiumButton

  effect="lift"

  intensity="premium"

  glow={true}

  className="text-white dark:text-white"

>

  Join The Elite

</PremiumButton>



// ✅ Available effects

effect="none" | "lift" | "glow" | "pulse" | "shimmer"

intensity="subtle" | "medium" | "premium"

Floating Background - Automated Color Splashes

import { FloatingBackground } from '@/components/ui/floating-background';



// ✅ Gun club preset

<FloatingBackground 

  preset="gunclub" 

  intensity="medium"

  className="absolute inset-0 -z-10"

/>



// ✅ Available presets

preset="warm" | "cool" | "mixed" | "gunclub"

intensity="subtle" | "medium" | "strong"

Mega Hero - Complete Hero Sections

import { MegaHero } from '@/components/ui/mega-hero';



// ✅ Homepage hero

<MegaHero

  title="Welcome to Boise Gun Club"

  subtitle="Premium shotgun sports since 1898"

  ctaText="Join The Elite"

  ctaLink="/membership"

  backgroundImage="/images/hero-bg.jpg"

  variant="gradient"

  intensity="premium"

/>

Pricing Fusion - Premium Pricing Cards

import { PricingFusion } from '@/components/ui/pricing-fusion';



// ✅ Membership pricing

<PricingFusion

  title="Elite Membership"

  price="$75"

  period="year"

  features={[

    "Priority range access",

    "Clubhouse privileges", 

    "$6/round vs $8 daily rate",

    "Competition entry discounts"

  ]}

  popular={true}

  className="text-white dark:text-white"

/>

Stats Fusion - Statistics Display

import { StatsFusion } from '@/components/ui/stats-fusion';



// ✅ Club statistics

<StatsFusion

  stats={[

    { label: "Members", value: "1,200+", icon: "users" },

    { label: "Acres", value: "320", icon: "map" },

    { label: "Founded", value: "1898", icon: "calendar" }

  ]}

  variant="gradient"

  className="text-white dark:text-white"

/>

Navigation Fusion - Glass Navigation

import { NavigationFusion } from '@/components/ui/navigation-fusion';



// ✅ Main navigation

<NavigationFusion

  items={[

    { label: "Home", href: "/" },

    { label: "Club Info", href: "/club-info" },

    { label: "Membership", href: "/membership" }

  ]}

  variant="glass"

  className="text-gray-900 dark:text-white"

/>

Color Splash Effects - ClickUp Style

// ✅ Manual color splashes

<div className="relative">

  <div className="absolute top-0 left-0 w-80 h-80 bg-[var(--lahoma-orange)]/15 rounded-full blur-3xl animate-pulse" />

  <div className="absolute bottom-0 right-0 w-60 h-60 bg-[var(--leonard-yellow)]/12 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '2s' }} />

  <div className="relative z-10 text-gray-900 dark:text-white">

    {/* Content here */}

  </div>

</div>

Glassmorphism Effects - Windows 11 Mica

// ✅ Glass effect classes

<div className="glass-mica text-white dark:text-white">

  <h3 className="font-heading text-white dark:text-white">Glass Card</h3>

  <p className="text-white/80 dark:text-white/80">With subtle transparency</p>

</div>



// CSS applied automatically via .glass-mica class

🎯 Quick Reference
Standard Card Pattern

<Card className="rounded-xl overflow-hidden">

  <div className="h-24 bg-gradient-to-r from-[var(--lahoma-orange)] to-[var(--abe-red)] relative rounded-t-xl">

    <Badge className="bg-white/20 text-white border-white/30">Most Popular</Badge>

  </div>

  <CardHeader>

    <CardTitle className="font-heading text-gray-900 dark:text-white">

      Elite Membership

    </CardTitle>

    <CardDescription className="font-body text-gray-600 dark:text-gray-300">

      $75/year + $6 per round vs $8 daily rate

    </CardDescription>

  </CardHeader>

  <CardContent>

    <Button className="w-full bg-[var(--lahoma-orange)] hover:bg-[var(--abe-red)]">

      Join The Elite

    </Button>

  </CardContent>

</Card>

Facility Information

    10 Trap Fields (ATA regulation)
    5 Skeet Fields (NSSA regulation)
    15-Station Sporting Clays (NSCA compliant)
    Clubhouse & Pro Shop
    Founded 1898, 320 acres, 1200+ members

Pricing Structure

    Annual Membership: $75
    Member Rate: $6/round
    Daily Rate: $8/round
    Savings: $2/round + priority access + clubhouse privileges

🏆 Success Metrics

This design system enables:

    Consistent branding across all 32+ pages
    Rapid development following established patterns
    Professional quality matching modern standards
    Accessibility compliance with WCAG 2.1
    Performance optimization with 60fps animations
    Context preservation between development sessions

🎯 Remember: We can build 30 pages in an afternoon by following these patterns exactly and maintaining the established foundation.
