'use client';

import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"

import { cn } from "@/lib/utils"

const cardVariants = cva(
  "bg-card text-card-foreground flex flex-col gap-6 rounded-xl border transition-fast hover:shadow-md",
  {
    variants: {
      variant: {
        default: "py-6 border-muted shadow-sm hover:shadow-md dark:border-muted",
        glass: "py-6 border-white/20 shadow-lg relative overflow-hidden group backdrop-blur-md bg-card/10 hover:bg-card/20 dark:bg-card/10 dark:border-white/10 dark:hover:bg-card/20",
        gradient: "bg-gradient-to-br from-leonard-yellow/5 to-lahoma-orange/5 py-6 border-leonard-yellow/20 shadow-sm hover:shadow-md dark:from-leonard-yellow/5 dark:to-lahoma-orange/5 dark:border-leonard-yellow/20",
        fusion: "overflow-hidden border-0 backdrop-blur-xl bg-card/80 shadow-md hover:shadow-lg transition-fast dark:bg-card/80",
        solid: "bg-card shadow-lg py-6 border-muted hover:shadow-xl dark:bg-card dark:border-muted",
        animated: "py-6 border-muted shadow-sm hover:shadow-md dark:border-muted",
        professional: "bg-card py-6 border-muted shadow-sm hover:shadow-lg hover:scale-[1.02] transition-all duration-200 dark:bg-card dark:border-muted"
      },
      padding: {
        none: "",
        sm: "p-4",
        md: "p-6", 
        lg: "p-8"
      },
      intensity: {
        subtle: "backdrop-blur-sm bg-card/50 border-muted/10 dark:bg-card/50 dark:border-muted/10",
        medium: "backdrop-blur-md bg-card/70 border-muted/20 dark:bg-card/70 dark:border-muted/20",
        premium: "backdrop-blur-xl bg-card/80 border-muted/30 dark:bg-card/80 dark:border-muted/30"
      }
    },
    defaultVariants: {
      variant: "default",
      padding: "md",
      intensity: "medium"
    },
  }
)

export interface CardProps extends React.ComponentProps<"div">, VariantProps<typeof cardVariants> {
  // Animation props
  animate?: boolean
  inView?: boolean
  // Fusion props
  headerGradient?: string
  splashColor?: string
  title?: string
  description?: string
  badge?: string
  hoverEffect?: boolean
}

const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ 
    className, 
    variant, 
    padding,
    intensity,
    animate = false,
    inView = true,
    headerGradient = "from-accent-primary to-accent-secondary",
    splashColor = "accent-tertiary",
    title,
    description,
    badge,
    hoverEffect = true,
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
          cardVariants({ variant, padding, intensity }),
          className
        )}
        {...motionProps}
        {...props}
      >
        {/* Glass card gradient overlay */}
        {variant === "glass" && (
          <div className="absolute inset-0 bg-gradient-to-br from-leonard-yellow/10 via-transparent to-lahoma-orange/10 opacity-0 group-hover:opacity-100 transition-smooth" />
        )}
        
        {/* Fusion card floating splash */}
        {variant === "fusion" && (
          <div className={cn(
            "absolute -top-12 -right-12 w-24 h-24 rounded-full opacity-30 blur-xl",
            `bg-${splashColor}`
          )} />
        )}
        
        {/* Fusion card header */}
        {variant === "fusion" && (title || description || badge) && (
          <CardHeader className="relative z-10">
            <div className="flex items-start justify-between">
              <div className="space-y-1">
                {title && (
                  <CardTitle className={cn(
                    "text-xl font-bold bg-gradient-to-r bg-clip-text text-transparent",
                    headerGradient
                  )}>
                    {title}
                  </CardTitle>
                )}
                {description && (
                  <CardDescription className="text-muted-foreground dark:text-muted-foreground">
                    {description}
                  </CardDescription>
                )}
              </div>
              {badge && (
                <Badge variant="premium" className="shrink-0">
                  {badge}
                </Badge>
              )}
            </div>
          </CardHeader>
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
        "@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6",
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
      className={cn("px-6", className)}
      {...props}
    />
  )
}

function CardFooter({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-footer"
      className={cn("flex items-center px-6 [.border-t]:pt-6", className)}
      {...props}
    />
  )
}

// Preset Card Components
const GlassCard = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, children, ...props }, ref) => (
    <Card 
      ref={ref}
      variant="glass" 
      animate={true}
      className={className}
      {...props}
    >
      {children}
    </Card>
  )
)
GlassCard.displayName = "GlassCard"

const AnimatedCard = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, children, ...props }, ref) => (
    <Card 
      ref={ref}
      variant="animated"
      animate={true}
      className={className}
      {...props}
    >
      {children}
    </Card>
  )
)
AnimatedCard.displayName = "AnimatedCard"

const GradientCard = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, children, ...props }, ref) => (
    <Card 
      ref={ref}
      variant="gradient"
      className={className}
      {...props}
    >
      {children}
    </Card>
  )
)
GradientCard.displayName = "GradientCard"

const GlassFusionCard = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, children, ...props }, ref) => (
    <Card 
      ref={ref}
      variant="fusion"
      intensity="premium"
      className={className}
      {...props}
    >
      {children}
    </Card>
  )
)
GlassFusionCard.displayName = "GlassFusionCard"

const ProfessionalCard = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, children, ...props }, ref) => (
    <Card 
      ref={ref}
      variant="professional"
      className={className}
      {...props}
    >
      {children}
    </Card>
  )
)
ProfessionalCard.displayName = "ProfessionalCard"

export {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardAction,
  CardDescription,
  CardContent,
  // Preset exports
  GlassCard,
  AnimatedCard,
  GradientCard,
  GlassFusionCard,
  ProfessionalCard
}