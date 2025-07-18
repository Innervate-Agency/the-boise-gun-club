'use client';

import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { motion, useInView } from "framer-motion"
import { Star, Award, Target, Trophy, Crown } from "lucide-react"

import { cn } from "@/lib/utils"

const cardVariants = cva(
  "flex flex-col rounded-xl transition-stripe-fast relative overflow-hidden font-body",
  {
    variants: {
      variant: {
        default: "bg-cloudy-day-white dark:bg-ed-charcoal text-card-foreground shadow-sm hover:shadow-md",
        premium: "bg-card text-card-foreground border-[var(--color-leonard-yellow)]/20 shadow-premium group",
        elite: "bg-card text-card-foreground border-2 border-[var(--color-leonard-yellow)]/30 shadow-elite group",
        glass: "bg-card/10 backdrop-blur-sm text-card-foreground border-white/20 shadow-lg group",
        'glass-premium': "text-card-foreground shadow-lg group",
        'gradient-border': "border-transparent bg-clip-padding",
      },
      interactive: {
        true: "hover:shadow-md active:scale-[0.98] transition-stripe-fast cursor-pointer",
        false: "",
      },
      size: {
        xs: "p-3",
        sm: "p-4",
        md: "p-6",
        lg: "p-8",
        xl: "p-10"
      },
      elevation: {
        none: "shadow-none",
        sm: "shadow-sm",
        md: "shadow-md",
        lg: "shadow-lg",
        xl: "shadow-xl",
        "2xl": "shadow-2xl"
      },
      rounded: {
        none: "rounded-none",
        sm: "rounded-lg",
        md: "rounded-xl",
        lg: "rounded-2xl",
        full: "rounded-3xl"
      }
    },
    defaultVariants: {
      variant: "default",
      interactive: false,
      size: "md",
      elevation: "none",
      rounded: "md"
    },
  }
)

// Achievement level mapping for automatic variant selection
const achievementVariants = {
  'Novice': 'novice',
  'D': 'novice', 
  'C': 'marksman',
  'B': 'marksman',
  'A': 'expert',
  'AA': 'expert',
  'Master': 'master',
  'Legend': 'legend'
} as const

// Achievement icons mapping
const achievementIcons = {
  novice: Target,
  marksman: Star,
  expert: Award, 
  master: Trophy,
  legend: Crown
} as const

export interface CardProps extends React.ComponentProps<"div">, VariantProps<typeof cardVariants> {
  animate?: boolean
  achievement?: keyof typeof achievementVariants
  showAchievementIcon?: boolean
  glowOnHover?: boolean
  interactive?: boolean
}

const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ 
    className, 
    variant, 
    size,
    elevation,
    rounded,
    animate = false,
    achievement,
    showAchievementIcon = false,
    glowOnHover = false,
    interactive = false,
    children,
    ...props 
  }, ref) => {
    const cardRef = React.useRef<HTMLDivElement>(null)
    const isInView = useInView(cardRef, { once: true, margin: "-10%" })
    
    // Auto-select variant based on achievement if provided
    const finalVariant = achievement && achievementVariants[achievement] 
      ? achievementVariants[achievement] as any
      : variant
    
    // Get achievement icon if needed
    const AchievementIcon = showAchievementIcon && finalVariant && achievementIcons[finalVariant as keyof typeof achievementIcons]
      ? achievementIcons[finalVariant as keyof typeof achievementIcons]
      : null

    const motionVariants = {
      hidden: { 
        opacity: 0, 
        y: 20, 
        scale: 0.95
      },
      visible: { 
        opacity: 1, 
        y: 0, 
        scale: 1,
        transition: {
          duration: 0.15,
          ease: [0.215, 0.61, 0.355, 1],
          staggerChildren: 0.05
        }
      }
    }
    
    const glowVariants = {
      initial: { boxShadow: "0 0 0 rgba(242, 203, 5, 0)" },
      hover: { 
        boxShadow: "0 0 20px rgba(242, 203, 5, 0.4), 0 0 40px rgba(242, 135, 5, 0.2)",
        transition: { duration: 0.3 }
      }
    }

    const Comp = "div" // Disabled motion.div to fix TypeScript drag event conflicts
    const motionProps = animate ? {
      ref: cardRef,
      variants: motionVariants,
      initial: "hidden",
      animate: isInView ? "visible" : "hidden",
      whileHover: glowOnHover ? glowVariants.hover : undefined
    } : {}

    return (
      <Comp
        ref={ref}
        data-slot="card"
        className={cn(
          cardVariants({ variant: finalVariant, size, elevation, rounded }),
          interactive && "cursor-pointer select-none",
          className
        )}
        {...motionProps}
        {...props}
      >
        {/* Premium/Elite Mica Effects */}
        {(finalVariant === 'premium' || finalVariant === 'glass-premium') && (
          <>
            <div className="absolute inset-0 mica-premium opacity-30 group-hover:opacity-50 transition-stripe-normal -z-10" />
            <div className="absolute inset-0 leonard-bleed-light opacity-40 group-hover:opacity-60 transition-stripe-normal -z-10" />
            <div className="absolute inset-0 lahoma-bleed-light blur-sm opacity-0 group-hover:opacity-100 transition-stripe-normal -z-10" />
          </>
        )}
        
        {(finalVariant === 'elite' || finalVariant === 'glass-elite' || finalVariant === 'legend') && (
          <>
            <div className="absolute inset-0 mica-elite opacity-40 group-hover:opacity-60 transition-stripe-normal -z-10" />
            <div className="absolute inset-0 leonard-bleed-medium opacity-50 group-hover:opacity-70 transition-stripe-normal -z-10" />
            <div className="absolute inset-0 lahoma-bleed-medium blur-md opacity-0 group-hover:opacity-100 transition-stripe-normal -z-10" />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/8 to-transparent animate-shimmer opacity-60 group-hover:opacity-100 transition-stripe-normal -z-10" />
          </>
        )}
        
        {/* Master level special effects */}
        {finalVariant === 'master' && (
          <>
            <div className="absolute inset-0 bg-gradient-to-r from-wildeye-susan-yellow/10 to-gunclub-orange/10 opacity-30 group-hover:opacity-50 transition-stripe-normal -z-10" />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/6 to-transparent animate-shimmer opacity-40 group-hover:opacity-70 transition-stripe-normal -z-10" />
          </>
        )}
        
        {/* Clay shooting themed effects */}
        {finalVariant === 'clay' && (
          <>
            <div className="absolute inset-0 bg-gradient-to-r from-clay-pidgeon-orange/10 to-jerry-orange/10 opacity-40 group-hover:opacity-60 transition-stripe-normal -z-10" />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-shimmer opacity-50 group-hover:opacity-80 transition-stripe-normal -z-10" />
          </>
        )}
        
        {/* Landscape themed subtle effects */}
        {(finalVariant === 'owyhee' || finalVariant === 'spring' || finalVariant === 'cascade' || finalVariant === 'desert') && (
          <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-stripe-normal -z-10" />
        )}
        
        {/* Achievement Icon */}
        {AchievementIcon && (
          <div className="absolute top-4 right-4 z-20">
            <AchievementIcon className={cn(
              "w-5 h-5 opacity-70 group-hover:opacity-100 transition-stripe-fast",
              finalVariant === 'legend' && "text-leonard-yellow",
              finalVariant === 'master' && "text-gunclub-orange",
              finalVariant === 'expert' && "text-owyhee-field-green",
              finalVariant === 'marksman' && "text-idaho-sky-blue",
              finalVariant === 'novice' && "text-desert-cliff-brown"
            )} />
          </div>
        )}
        
        {/* Content wrapper with enhanced contrast for special variants */}
        <div className={cn(
          "relative z-10",
          (finalVariant === 'premium' || finalVariant === 'elite' || finalVariant === 'glass-premium' || finalVariant === 'glass-elite') && "backdrop-blur-sm"
        )}>
          {children}
        </div>
      </Comp>
    )
  }
)
Card.displayName = "Card"

function CardHeader({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-header"
      className={cn(
        "@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6",
        className
      )}
      {...props}
    />
  )
}

function CardTitle({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-title"
      className={cn("leading-none font-semibold text-card-foreground dark:text-card-foreground", className)}
      {...props}
    />
  )
}

function CardDescription({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-description"
      className={cn("text-muted-foreground dark:text-muted-foreground text-sm", className)}
      {...props}
    />
  )
}

function CardAction({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-action"
      className={cn(
        "col-start-2 row-span-2 row-start-1 self-start justify-self-end",
        className
      )}
      {...props}
    />
  )
}

function CardContent({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-content"
      className={cn("", className)}
      {...props}
    />
  )
}

function CardFooter({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-footer"
      className={cn("flex items-center [.border-t]:pt-6", className)}
      {...props}
    />
  )
}

// ================== PRESET CARD COMPONENTS ================== //

// Idaho Landscape Cards
const OwyheeCard = React.forwardRef<HTMLDivElement, Omit<CardProps, 'variant'>>(
  ({ className, children, ...props }, ref) => (
    <Card ref={ref} variant="owyhee" className={cn("group", className)} {...props}>
      {children}
    </Card>
  )
)
OwyheeCard.displayName = "OwyheeCard"

const SpringCard = React.forwardRef<HTMLDivElement, Omit<CardProps, 'variant'>>(
  ({ className, children, ...props }, ref) => (
    <Card ref={ref} variant="spring" className={cn("group", className)} {...props}>
      {children}
    </Card>
  )
)
SpringCard.displayName = "SpringCard"

const CascadeCard = React.forwardRef<HTMLDivElement, Omit<CardProps, 'variant'>>(
  ({ className, children, ...props }, ref) => (
    <Card ref={ref} variant="cascade" className={cn("group", className)} {...props}>
      {children}
    </Card>
  )
)
CascadeCard.displayName = "CascadeCard"

// Clay Shooting Themed Cards
const ClayCard = React.forwardRef<HTMLDivElement, Omit<CardProps, 'variant'>>(
  ({ className, children, ...props }, ref) => (
    <Card ref={ref} variant="clay" className={cn("group", className)} animate glowOnHover {...props}>
      {children}
    </Card>
  )
)
ClayCard.displayName = "ClayCard"

const ScoringCard = React.forwardRef<HTMLDivElement, Omit<CardProps, 'variant'>>(
  ({ className, children, ...props }, ref) => (
    <Card ref={ref} variant="scoring" className={cn("group", className)} {...props}>
      {children}
    </Card>
  )
)
ScoringCard.displayName = "ScoringCard"

// Achievement Level Cards
const AchievementCard = React.forwardRef<HTMLDivElement, Omit<CardProps, 'variant'> & { level: keyof typeof achievementVariants }>(
  ({ level, className, children, showAchievementIcon = true, ...props }, ref) => (
    <Card 
      ref={ref} 
      achievement={level}
      showAchievementIcon={showAchievementIcon}
      className={cn("group", className)} 
      animate
      interactive
      {...props}
    >
      {children}
    </Card>
  )
)
AchievementCard.displayName = "AchievementCard"

// Premium Fusion Cards
const PremiumCard = React.forwardRef<HTMLDivElement, Omit<CardProps, 'variant'>>(
  ({ className, children, ...props }, ref) => (
    <Card ref={ref} variant="premium" className={cn("group", className)} animate {...props}>
      {children}
    </Card>
  )
)
PremiumCard.displayName = "PremiumCard"

const EliteCard = React.forwardRef<HTMLDivElement, Omit<CardProps, 'variant'>>(
  ({ className, children, ...props }, ref) => (
    <Card ref={ref} variant="elite" className={cn("group", className)} animate glowOnHover {...props}>
      {children}
    </Card>
  )
)
EliteCard.displayName = "EliteCard"

const LegendCard = React.forwardRef<HTMLDivElement, Omit<CardProps, 'variant'>>(
  ({ className, children, ...props }, ref) => (
    <Card ref={ref} variant="legend" className={cn("group", className)} animate glowOnHover showAchievementIcon {...props}>
      {children}
    </Card>
  )
)
LegendCard.displayName = "LegendCard"

// Glass Effect Cards
const GlassCard = React.forwardRef<HTMLDivElement, Omit<CardProps, 'variant'>>(
  ({ className, children, ...props }, ref) => (
    <Card ref={ref} variant="glass" className={cn("group", className)} {...props}>
      {children}
    </Card>
  )
)
GlassCard.displayName = "GlassCard"

const GlassPremiumCard = React.forwardRef<HTMLDivElement, Omit<CardProps, 'variant'>>(
  ({ className, children, ...props }, ref) => (
    <Card ref={ref} variant="glass-premium" className={cn("group", className)} animate {...props}>
      {children}
    </Card>
  )
)
GlassPremiumCard.displayName = "GlassPremiumCard"

// Gun Club Specific Cards
interface MemberCardProps extends Omit<CardProps, 'variant'> {
  memberLevel?: keyof typeof achievementVariants
  memberName?: string
  memberNumber?: string
}

const MemberCard = React.forwardRef<HTMLDivElement, MemberCardProps>(
  ({ memberLevel = 'Novice', memberName, memberNumber, className, children, ...props }, ref) => (
    <Card 
      ref={ref}
      achievement={memberLevel}
      showAchievementIcon
      className={cn("group member-card", className)}
      animate
      interactive
      {...props}
    >
      <div className="space-y-4">
        {(memberName || memberNumber) && (
          <div className="flex items-center justify-between">
            {memberName && (
              <h3 className="font-heading font-semibold text-lg">{memberName}</h3>
            )}
            {memberNumber && (
              <span className="text-sm opacity-70 font-mono">#{memberNumber}</span>
            )}
          </div>
        )}
        {children}
      </div>
    </Card>
  )
)
MemberCard.displayName = "MemberCard"

interface ScoreCardProps extends Omit<CardProps, 'variant'> {
  discipline?: string
  score?: number
  maxScore?: number
  date?: string
}

const ScoreCard = React.forwardRef<HTMLDivElement, ScoreCardProps>(
  ({ discipline, score, maxScore = 25, date, className, children, ...props }, ref) => {
    const percentage = score ? (score / maxScore) * 100 : 0
    const level = percentage >= 95 ? 'Master' : percentage >= 85 ? 'AA' : percentage >= 70 ? 'A' : percentage >= 50 ? 'B' : 'C'
    
    return (
      <Card 
        ref={ref}
        variant="clay"
        className={cn("group score-card", className)}
        animate
        interactive
        {...props}
      >
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            {discipline && (
              <h3 className="font-heading font-semibold">{discipline}</h3>
            )}
            {date && (
              <span className="text-sm opacity-70">{date}</span>
            )}
          </div>
          
          {score !== undefined && (
            <div className="flex items-center justify-between">
              <span className="text-2xl font-bold font-heading">{score}/{maxScore}</span>
              <span className={cn(
                "px-2 py-1 rounded-full text-xs font-semibold",
                percentage >= 95 && "bg-gradient-master text-chester-white",
                percentage >= 85 && percentage < 95 && "bg-gradient-expert text-chester-white", 
                percentage >= 70 && percentage < 85 && "bg-gradient-marksman text-chester-white",
                percentage < 70 && "bg-gradient-novice text-craters-of-the-moon"
              )}>
                {level}
              </span>
            </div>
          )}
          
          {children}
        </div>
      </Card>
    )
  }
)
ScoreCard.displayName = "ScoreCard"

export {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardAction,
  CardDescription,
  CardContent,
  
  // Idaho Landscape Cards
  OwyheeCard,
  SpringCard, 
  CascadeCard,
  
  // Clay Shooting Themed Cards
  ClayCard,
  ScoringCard,
  
  // Achievement Level Cards
  AchievementCard,
  
  // Premium Fusion Cards
  PremiumCard,
  EliteCard,
  LegendCard,
  
  // Glass Effect Cards
  GlassCard,
  GlassPremiumCard,
  
  // Gun Club Specific Cards
  MemberCard,
  ScoreCard,
  
  // Types and utilities
  cardVariants,
  achievementVariants,
  type CardProps,
  type MemberCardProps,
  type ScoreCardProps
}

// ================== USAGE EXAMPLES ================== //

// Idaho Landscape Cards:
// <OwyheeCard>
//   <CardContent>Beautiful Idaho Sky Blue to Owyhee Field Green gradient</CardContent>
// </OwyheeCard>

// <SpringCard>
//   <CardContent>Warm spring day colors from Cloudy Day White to Sand Dune Brown</CardContent>
// </SpringCard>

// Achievement Cards with Auto-Icons:
// <AchievementCard level="Master">
//   <CardContent>Automatically uses Master gradient with Trophy icon</CardContent>
// </AchievementCard>

// <LegendCard>
//   <CardContent>Elite Legend card with Crown icon and full gradient spectrum</CardContent>
// </LegendCard>

// Clay Shooting Themed:
// <ClayCard>
//   <CardContent>Clay Pidgeon Orange explosion gradient with shimmer</CardContent>
// </ClayCard>

// Gun Club Specific:
// <MemberCard memberLevel="AA" memberName="John Doe" memberNumber="12345">
//   <CardContent>Member details with achievement-based styling</CardContent>
// </MemberCard>

// <ScoreCard discipline="Trap" score={23} maxScore={25} date="2024-01-13">
//   <CardContent>Automatic grade calculation and achievement styling</CardContent>
// </ScoreCard>

// Glass Effects:
// <GlassPremiumCard>
//   <CardContent>Premium glass with Mica effects and Leonard Yellow bleeding</CardContent>
// </GlassPremiumCard>