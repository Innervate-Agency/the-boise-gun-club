'use client';

import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { motion } from "framer-motion"

import { cn } from "@/lib/utils"

const cardVariants = cva(
  "bg-card text-card-foreground flex flex-col rounded-xl border transition-stripe-fast relative overflow-hidden",
  {
    variants: {
      variant: {
        default: "border-border bg-card hover:bg-muted/80 shadow-sm hover:shadow-md hover:button-lift",
        glass: "border-white/20 bg-card/10 backdrop-blur-sm text-card hover:bg-card/20 hover:border-white/30 dark:border-white/10 dark:bg-card/5 dark:hover:bg-card/10 shadow-lg hover:shadow-xl transition-stripe-normal",
        premium: "bg-gradient-to-r from-leonard-yellow to-lahoma-orange text-black shadow-premium border border-leonard-yellow/20 hover:shadow-premium-hover hover:scale-[1.02] hover:button-lift transition-stripe-normal group",
        elite: "bg-gradient-to-r from-leonard-yellow via-lahoma-orange to-leonard-yellow bg-[length:200%_100%] text-black shadow-elite border-2 border-leonard-yellow/30 animate-shimmer hover:shadow-elite-hover hover:scale-[1.05] hover:button-lift transition-stripe-normal group"
      },
      size: {
        sm: "p-4",
        md: "p-6", 
        lg: "p-8"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "md"
    },
  }
)

export interface CardProps extends React.ComponentProps<"div">, VariantProps<typeof cardVariants> {
  animate?: boolean
}

const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ 
    className, 
    variant, 
    size,
    animate = false,
    children,
    ...props 
  }, ref) => {
    const [isInView, setIsInView] = React.useState(false)
    const observerRef = React.useRef<HTMLDivElement>(null)

    React.useEffect(() => {
      if (!animate) return

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setIsInView(true)
            observer.unobserve(entry.target)
          }
        },
        {
          rootMargin: '0px',
          threshold: 0.1,
        }
      )

      if (observerRef.current) {
        observer.observe(observerRef.current)
      }

      return () => {
        if (observerRef.current) {
          observer.unobserve(observerRef.current)
        }
      }
    }, [animate])

    const motionVariants = {
      hidden: { opacity: 0, y: 20 },
      visible: { opacity: 1, y: 0 }
    }

    const Comp = animate ? motion.div : "div"
    const motionProps = animate ? {
      ref: observerRef,
      variants: motionVariants,
      initial: "hidden",
      animate: isInView ? "visible" : "hidden",
      transition: { duration: 0.6 }
    } : {}

    return (
      <Comp
        ref={ref}
        data-slot="card"
        className={cn(
          cardVariants({ variant, size }),
          className
        )}
        {...motionProps}
        {...props}
      >
        {/* Premium card with subtle Mica and gradient hint */}
        {variant === 'premium' && (
          <>
            <div className="absolute inset-0 mica-premium opacity-0 group-hover:opacity-20 transition-stripe-normal -z-10" />
            <div className="absolute inset-0 gradient-hint-bg opacity-80 group-hover:opacity-100 transition-stripe-normal -z-10" />
            <div className="absolute inset-0 bg-gradient-to-r from-lahoma-orange/20 to-leonard-yellow/20 blur-sm opacity-0 group-hover:opacity-40 transition-stripe-normal -z-10" />
          </>
        )}
        
        {/* Elite card with enhanced Mica and gradient effects */}
        {variant === 'elite' && (
          <>
            <div className="absolute inset-0 mica-elite opacity-10 group-hover:opacity-30 transition-stripe-normal -z-10" />
            <div className="absolute inset-0 bg-gradient-to-r from-lahoma-orange/25 to-leonard-yellow/25 blur-md opacity-40 group-hover:opacity-60 transition-stripe-normal -z-10" />
            <div className="absolute inset-0 gradient-hint-border opacity-50 group-hover:opacity-80 transition-stripe-normal -z-10" />
          </>
        )}
        
        {/* Content wrapper */}
        <div className="relative z-10">
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

// Preset Card Components following the design system
const PremiumCard = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, children, ...props }, ref) => (
    <Card 
      ref={ref}
      variant="premium"
      className={cn("group", className)}
      {...props}
    >
      {children}
    </Card>
  )
)
PremiumCard.displayName = "PremiumCard"

const EliteCard = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, children, ...props }, ref) => (
    <Card 
      ref={ref}
      variant="elite"
      className={cn("group", className)}
      {...props}
    >
      {children}
    </Card>
  )
)
EliteCard.displayName = "EliteCard"

const GlassCard = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, children, ...props }, ref) => (
    <Card 
      ref={ref}
      variant="glass" 
      className={className}
      {...props}
    >
      {children}
    </Card>
  )
)
GlassCard.displayName = "GlassCard"

export {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardAction,
  CardDescription,
  CardContent,
  // Preset exports following design system
  PremiumCard,
  EliteCard,
  GlassCard
}

// Example Usage:
// <PremiumCard>
//   <CardContent>
//     Premium fusion card with Leonard Yellow to Lahoma Orange gradient
//   </CardContent>
// </PremiumCard>

// <EliteCard>
//   <CardContent>
//     Elite fusion card with shimmer animation and enhanced gradients
//   </CardContent>
// </EliteCard>