"use client"

import * as React from "react"
import * as ProgressPrimitive from "@radix-ui/react-progress"
import { cva, type VariantProps } from "class-variance-authority"
import { motion, AnimatePresence } from "framer-motion"

import { cn } from "@/lib/utils"

const progressVariants = cva(
  "relative w-full overflow-hidden transition-all duration-300",
  {
    variants: {
      variant: {
        default: "bg-muted",
        success: "bg-brand-green/20",
        warning: "bg-leonard-yellow/20", 
        error: "bg-red-500/20",
        info: "bg-brand-blue/20",
        premium: "bg-gradient-to-r from-leonard-yellow/20 to-lahoma-orange/20 border border-leonard-yellow/30",
        glass: "bg-[var(--card)]/10 backdrop-blur-sm border border-white/20",
      },
      size: {
        sm: "h-1.5 rounded-full",
        default: "h-2.5 rounded-full",
        lg: "h-4 rounded-lg",
        xl: "h-6 rounded-xl",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

const progressIndicatorVariants = cva(
  "h-full flex-1 transition-all duration-500 ease-out relative overflow-hidden",
  {
    variants: {
      variant: {
        default: "bg-primary",
        success: "bg-gradient-to-r from-brand-green to-brand-green-light",
        warning: "bg-gradient-to-r from-leonard-yellow to-lahoma-orange",
        error: "bg-gradient-to-r from-red-500 to-brand-red-action",
        info: "bg-gradient-to-r from-brand-blue to-brand-blue-dark",
        premium: "bg-gradient-to-r from-leonard-yellow via-lahoma-orange to-leonard-yellow bg-[length:200%_100%]",
        glass: "bg-gradient-to-r from-white/60 to-white/40 backdrop-blur-sm",
      },
      size: {
        sm: "rounded-full",
        default: "rounded-full", 
        lg: "rounded-lg",
        xl: "rounded-xl",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

interface ProgressProps extends React.ComponentProps<typeof ProgressPrimitive.Root>, VariantProps<typeof progressVariants> {
  showLabel?: boolean
  label?: string
  showPercentage?: boolean
  animate?: boolean
  shimmer?: boolean
}

function Progress({
  className,
  variant = "default",
  size = "default",
  value = 0,
  showLabel = false,
  label,
  showPercentage = false,
  animate = true,
  shimmer = false,
  ...props
}: ProgressProps) {
  const [displayValue, setDisplayValue] = React.useState(0)
  
  React.useEffect(() => {
    if (animate) {
      const timer = setTimeout(() => {
        setDisplayValue(value || 0)
      }, 100)
      return () => clearTimeout(timer)
    } else {
      setDisplayValue(value || 0)
    }
  }, [value, animate])

  return (
    <div className="space-y-2">
      {/* Label and percentage */}
      {(showLabel || showPercentage) && (
        <div className="flex justify-between items-center text-sm">
          {showLabel && (
            <span className="font-medium text-card-foreground">
              {label || "Progress"}
            </span>
          )}
          {showPercentage && (
            <span className="font-mono text-muted-foreground">
              {Math.round(displayValue)}%
            </span>
          )}
        </div>
      )}
      
      {/* Progress bar */}
      <ProgressPrimitive.Root
        data-slot="progress"
        className={cn(progressVariants({ variant, size }), className)}
        value={displayValue}
        {...props}
      >
        <ProgressPrimitive.Indicator
          data-slot="progress-indicator"
          className={cn(progressIndicatorVariants({ variant, size }))}
          style={{ 
            transform: `translateX(-${100 - displayValue}%)`,
            ...(variant === 'premium' && shimmer ? {
              backgroundPosition: displayValue > 50 ? '100% 0' : '0% 0',
              transition: 'transform 0.5s ease-out, background-position 2s ease-in-out'
            } : {})
          }}
        >
          {/* Premium shimmer effect */}
          {variant === 'premium' && shimmer && (
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent transform -skew-x-12 animate-shimmer" />
          )}
          
          {/* Glass effect enhancement */}
          {variant === 'glass' && (
            <div className="absolute inset-0 bg-gradient-to-t from-white/20 to-transparent" />
          )}
        </ProgressPrimitive.Indicator>
      </ProgressPrimitive.Root>
    </div>
  )
}

// Circular Progress Component
interface CircularProgressProps {
  value?: number
  size?: number
  strokeWidth?: number
  variant?: VariantProps<typeof progressVariants>['variant']
  showPercentage?: boolean
  label?: string
  className?: string
}

function CircularProgress({
  value = 0,
  size = 80,
  strokeWidth = 8,
  variant = "default",
  showPercentage = true,
  label,
  className
}: CircularProgressProps) {
  const radius = (size - strokeWidth) / 2
  const circumference = radius * 2 * Math.PI
  const strokeDasharray = circumference
  const strokeDashoffset = circumference - (value / 100) * circumference

  const getStrokeColor = (variant: string) => {
    switch (variant) {
      case 'success': return 'url(#success-gradient)'
      case 'warning': return 'url(#warning-gradient)'
      case 'error': return 'url(#error-gradient)'
      case 'info': return 'url(#info-gradient)'
      case 'premium': return 'url(#premium-gradient)'
      case 'glass': return 'rgba(255, 255, 255, 0.6)'
      default: return 'var(--primary)'
    }
  }

  return (
    <div className={cn("relative flex items-center justify-center", className)}>
      <svg
        width={size}
        height={size}
        className="transform -rotate-90"
      >
        <defs>
          <linearGradient id="success-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="var(--brand-green)" />
            <stop offset="100%" stopColor="var(--brand-green-light)" />
          </linearGradient>
          <linearGradient id="warning-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="var(--leonard-yellow)" />
            <stop offset="100%" stopColor="var(--lahoma-orange)" />
          </linearGradient>
          <linearGradient id="error-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#ef4444" />
            <stop offset="100%" stopColor="var(--brand-red-action)" />
          </linearGradient>
          <linearGradient id="info-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="var(--brand-blue)" />
            <stop offset="100%" stopColor="var(--brand-blue-dark)" />
          </linearGradient>
          <linearGradient id="premium-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="var(--leonard-yellow)" />
            <stop offset="50%" stopColor="var(--lahoma-orange)" />
            <stop offset="100%" stopColor="var(--leonard-yellow)" />
          </linearGradient>
        </defs>
        
        {/* Background circle */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke="currentColor"
          strokeWidth={strokeWidth}
          fill="none"
          className="text-muted/30"
        />
        
        {/* Progress circle */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke={getStrokeColor(variant)}
          strokeWidth={strokeWidth}
          fill="none"
          strokeLinecap="round"
          strokeDasharray={strokeDasharray}
          strokeDashoffset={strokeDashoffset}
          className="transition-all duration-500 ease-out"
        />
      </svg>
      
      {/* Center content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        {showPercentage && (
          <span className="text-lg font-bold font-mono text-card-foreground">
            {Math.round(value)}%
          </span>
        )}
        {label && (
          <span className="text-xs text-muted-foreground font-medium">
            {label}
          </span>
        )}
      </div>
    </div>
  )
}

// Preset Progress Components for gun club scenarios
interface ScoreProgressProps {
  score: number
  maxScore: number
  label?: string
  variant?: VariantProps<typeof progressVariants>['variant']
  size?: VariantProps<typeof progressVariants>['size']
}

function ScoreProgress({ score, maxScore, label, variant = "success", size = "default" }: ScoreProgressProps) {
  const percentage = (score / maxScore) * 100
  
  return (
    <Progress
      value={percentage}
      variant={variant}
      size={size}
      showLabel
      showPercentage
      label={label || `${score}/${maxScore}`}
      animate
      shimmer={percentage > 90}
    />
  )
}

function TournamentProgress({ current, total, label }: { current: number, total: number, label?: string }) {
  const percentage = (current / total) * 100
  
  return (
    <Progress
      value={percentage}
      variant="premium"
      size="lg"
      showLabel
      showPercentage
      label={label || `Round ${current} of ${total}`}
      animate
      shimmer
    />
  )
}

function MembershipProgress({ daysActive, totalDays }: { daysActive: number, totalDays: number }) {
  const percentage = (daysActive / totalDays) * 100
  
  return (
    <Progress
      value={percentage}
      variant="info"
      showLabel
      showPercentage
      label={`Membership: ${daysActive} days active`}
      animate
    />
  )
}

export { 
  Progress, 
  CircularProgress,
  ScoreProgress,
  TournamentProgress,
  MembershipProgress,
  type ProgressProps,
  type CircularProgressProps,
  type ScoreProgressProps
}
