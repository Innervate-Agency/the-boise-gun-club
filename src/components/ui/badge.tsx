import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { motion } from "framer-motion"

import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "inline-flex items-center justify-center rounded-full border font-medium w-fit whitespace-nowrap shrink-0 [&>svg]:pointer-events-none transition-fast relative overflow-hidden",
  {
    variants: {
      variant: {
        default: "border-border/50 bg-card text-card-foreground hover:bg-muted/80 hover:border-border",
        primary: "border-primary/30 bg-primary/10 text-primary hover:bg-primary/20 hover:border-primary/50",
        secondary: "border-muted-foreground/30 bg-muted text-muted-foreground hover:bg-muted/80",
        success: "border-brand-green/30 bg-brand-green/10 text-brand-green hover:bg-brand-green/20 hover:border-brand-green/50 dark:border-brand-green/30 dark:bg-brand-green/10 dark:text-brand-green dark:hover:bg-brand-green/20",
        warning: "border-leonard-yellow/50 bg-leonard-yellow/10 text-leonard-yellow hover:bg-leonard-yellow/20 hover:border-leonard-yellow/70 dark:border-leonard-yellow/50 dark:bg-leonard-yellow/10 dark:text-leonard-yellow dark:hover:bg-leonard-yellow/20",
        error: "border-brand-red/30 bg-brand-red/10 text-brand-red hover:bg-brand-red/20 hover:border-brand-red/50 dark:border-brand-red/30 dark:bg-brand-red/10 dark:text-brand-red dark:hover:bg-brand-red/20",
        info: "border-brand-blue/30 bg-brand-blue/10 text-brand-blue hover:bg-brand-blue/20 hover:border-brand-blue/50 dark:border-brand-blue/30 dark:bg-brand-blue/10 dark:text-brand-blue dark:hover:bg-brand-blue/20",
        premium: "bg-gradient-to-r from-leonard-yellow to-lahoma-orange text-black shadow-md border border-leonard-yellow/20 hover:shadow-lg hover:scale-[1.05] transition-smooth relative overflow-hidden group motion-reduce:hover:scale-100",
        elite: "bg-gradient-to-r from-leonard-yellow via-lahoma-orange to-leonard-yellow bg-[length:200%_100%] text-black shadow-lg border-2 border-leonard-yellow/30 animate-shimmer hover:shadow-xl hover:scale-[1.10] transition-smooth relative overflow-hidden group motion-reduce:animate-none motion-reduce:hover:scale-100",
        glass: "border-white/20 bg-card/10 backdrop-blur-sm text-card hover:bg-card/20 hover:border-white/30 dark:border-white/10 dark:bg-card/5 dark:hover:bg-card/10",
        outline: "border-border text-foreground hover:bg-accent hover:text-accent-foreground",
        destructive: "border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/90 shadow-sm",
      },
      size: {
        sm: "px-2 py-0.5 text-[10px] gap-1 [&>svg]:size-2.5",
        default: "px-2.5 py-1 text-xs gap-1.5 [&>svg]:size-3",
        lg: "px-3 py-1.5 text-sm gap-2 [&>svg]:size-3.5",
        xl: "px-4 py-2 text-base gap-2.5 [&>svg]:size-4",
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

interface BadgeProps extends React.ComponentProps<"span">, VariantProps<typeof badgeVariants> {
  asChild?: boolean
  animate?: boolean
  pulse?: boolean
  shimmer?: boolean
  icon?: React.ReactNode
  dismissible?: boolean
  onDismiss?: () => void
}

function Badge({
  className,
  variant = "default",
  size = "default",
  asChild = false,
  animate = false,
  pulse = false,
  shimmer = false,
  icon,
  dismissible = false,
  onDismiss,
  children,
  ...props
}: BadgeProps) {
  const Comp = asChild ? Slot : "span"

  const badgeContent = (
    <Comp
      data-slot="badge"
      className={cn(
        badgeVariants({ variant, size }),
        pulse && "animate-pulse",
        animate && "hover:scale-105 active:scale-95",
        className
      )}
      {...props}
    >
      {/* Premium badge glow effect */}
      {variant === 'premium' && (
        <div className="absolute inset-0 bg-gradient-to-r from-lahoma-orange/30 to-leonard-yellow/30 blur-md opacity-50 group-hover:opacity-70 transition-smooth -z-10" />
      )}
      
      {/* Elite badge shimmer effect */}
      {variant === 'elite' && (
        <div className="absolute inset-0 bg-gradient-to-r from-lahoma-orange/40 to-leonard-yellow/40 blur-lg opacity-60 group-hover:opacity-80 transition-smooth -z-10" />
      )}
      
      {/* Premium shimmer effect */}
      {variant === 'premium' && shimmer && (
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 animate-shimmer rounded-full" />
      )}
      
      {/* Icon */}
      {icon && (
        <span className="flex-shrink-0">
          {icon}
        </span>
      )}
      
      {/* Content */}
      <span className="relative z-10">{children}</span>
      
      {/* Dismissible button */}
      {dismissible && onDismiss && (
        <button
          type="button"
          onClick={onDismiss}
          className="ml-1 flex-shrink-0 hover:bg-primary/10 rounded-full p-0.5 transition-fast"
        >
          <svg className="h-2.5 w-2.5" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </button>
      )}
    </Comp>
  )

  if (animate) {
    return (
      <motion.div
        initial={animate ? { scale: 0.8, opacity: 0 } : false}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.8, opacity: 0 }}
        transition={{ duration: 0.2, ease: "easeOut" }}
        className="inline-block"
      >
        {badgeContent}
      </motion.div>
    )
  }

  return badgeContent
}

// Preset Badge Components for gun club scenarios
interface ClassificationBadgeProps extends Omit<BadgeProps, 'variant' | 'children'> {
  classification: 'Master' | 'AA' | 'A' | 'B' | 'C' | 'D' | 'Novice'
}

function ClassificationBadge({ classification, ...props }: ClassificationBadgeProps) {
  const getVariant = (classification: string): VariantProps<typeof badgeVariants>['variant'] => {
    switch (classification) {
      case 'Master': return 'premium'
      case 'AA': return 'success'
      case 'A': return 'warning' 
      case 'B': return 'info'
      case 'C': return 'secondary'
      case 'D': return 'outline'
      case 'Novice': return 'default'
      default: return 'default'
    }
  }

  return (
    <Badge
      variant={getVariant(classification)}
      shimmer={classification === 'Master'}
      {...props}
    >
      {classification}
    </Badge>
  )
}

interface StatusBadgeProps extends Omit<BadgeProps, 'variant' | 'children'> {
  status: 'Active' | 'Inactive' | 'Suspended' | 'Premium' | 'Trial' | 'Expired'
  showIcon?: boolean
}

function StatusBadge({ status, showIcon = true, ...props }: StatusBadgeProps) {
  const getVariant = (status: string): VariantProps<typeof badgeVariants>['variant'] => {
    switch (status) {
      case 'Active': return 'success'
      case 'Premium': return 'premium'
      case 'Trial': return 'info'
      case 'Inactive': return 'secondary'
      case 'Suspended': return 'warning'
      case 'Expired': return 'error'
      default: return 'default'
    }
  }

  const getIcon = (status: string) => {
    if (!showIcon) return null
    
    switch (status) {
      case 'Active': return <div className="w-2 h-2 bg-current rounded-full" />
      case 'Premium': return <div className="w-2 h-2 bg-current rounded-full animate-pulse" />
      case 'Trial': return <div className="w-2 h-2 bg-current rounded-full opacity-70" />
      case 'Inactive': return <div className="w-2 h-2 bg-current rounded-full opacity-50" />
      case 'Suspended': return <div className="w-2 h-2 bg-current rounded-full" />
      case 'Expired': return <div className="w-2 h-2 bg-current rounded-full" />
      default: return null
    }
  }

  return (
    <Badge
      variant={getVariant(status)}
      icon={getIcon(status)}
      pulse={status === 'Premium'}
      shimmer={status === 'Premium'}
      {...props}
    >
      {status}
    </Badge>
  )
}

interface ScoreBadgeProps extends Omit<BadgeProps, 'variant' | 'children'> {
  score: number
  maxScore: number
  showPercentage?: boolean
}

function ScoreBadge({ score, maxScore, showPercentage = false, ...props }: ScoreBadgeProps) {
  const percentage = (score / maxScore) * 100
  
  const getVariant = (percentage: number): VariantProps<typeof badgeVariants>['variant'] => {
    if (percentage >= 95) return 'premium'
    if (percentage >= 85) return 'success'
    if (percentage >= 70) return 'warning'
    if (percentage >= 50) return 'info'
    return 'error'
  }

  const displayText = showPercentage 
    ? `${Math.round(percentage)}%`
    : `${score}/${maxScore}`

  return (
    <Badge
      variant={getVariant(percentage)}
      shimmer={percentage >= 95}
      {...props}
    >
      {displayText}
    </Badge>
  )
}

export { 
  Badge, 
  ClassificationBadge,
  StatusBadge,
  ScoreBadge,
  badgeVariants,
  type BadgeProps,
  type ClassificationBadgeProps,
  type StatusBadgeProps,
  type ScoreBadgeProps
}
