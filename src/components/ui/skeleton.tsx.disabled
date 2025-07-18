import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { motion } from "framer-motion"

import { cn } from "@/lib/utils"

const skeletonVariants = cva(
  "relative overflow-hidden rounded-md transition-stripe-fast",
  {
    variants: {
      variant: {
        default: "bg-muted animate-pulse",
        shimmer: "bg-gradient-to-r from-muted via-muted/50 to-muted bg-[length:200%_100%] animate-shimmer",
        premium: "bg-gradient-to-r from-muted via-leonard-yellow/10 to-muted bg-[length:200%_100%] animate-shimmer shadow-premium border border-leonard-yellow/10 group",
        elite: "bg-gradient-to-r from-muted via-leonard-yellow/15 via-lahoma-orange/10 to-muted bg-[length:300%_100%] animate-shimmer shadow-elite border-2 border-leonard-yellow/15 group",
        glass: "bg-card/10 backdrop-blur-sm border border-white/20 animate-pulse",
        wave: "bg-muted overflow-hidden"
      },
      size: {
        sm: "h-4",
        default: "h-6",
        lg: "h-8",
        xl: "h-12"
      },
      rounded: {
        none: "rounded-none",
        sm: "rounded-sm",
        default: "rounded-md",
        lg: "rounded-lg",
        xl: "rounded-xl",
        full: "rounded-full"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default",
      rounded: "default"
    }
  }
)

interface SkeletonProps extends React.ComponentProps<"div">, VariantProps<typeof skeletonVariants> {
  animate?: boolean
  pulseColor?: string
}

function Skeleton({ 
  className, 
  variant = "default",
  size,
  rounded,
  animate = true,
  pulseColor,
  ...props 
}: SkeletonProps) {
  const skeletonContent = (
    <div
      data-slot="skeleton"
      className={cn(
        skeletonVariants({ variant, size, rounded }),
        className
      )}
      style={pulseColor ? { 
        backgroundColor: pulseColor,
        opacity: 0.3 
      } : undefined}
      {...props}
    >
      {/* Premium skeleton with subtle glow */}
      {variant === 'premium' && (
        <>
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-leonard-yellow/20 to-transparent animate-shimmer opacity-0 group-hover:opacity-60 transition-stripe-normal" />
          <div className="absolute inset-0 leonard-bleed-light opacity-30 group-hover:opacity-50 transition-stripe-normal" />
        </>
      )}
      
      {/* Elite skeleton with enhanced effects */}
      {variant === 'elite' && (
        <>
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-leonard-yellow/25 via-lahoma-orange/20 to-transparent animate-shimmer opacity-40 group-hover:opacity-80 transition-stripe-normal" />
          <div className="absolute inset-0 leonard-bleed-medium opacity-40 group-hover:opacity-60 transition-stripe-normal" />
          <div className="absolute inset-0 lahoma-bleed-light opacity-20 group-hover:opacity-40 transition-stripe-normal" />
        </>
      )}
      
      {/* Wave animation for wave variant */}
      {variant === 'wave' && (
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent transform -skew-x-12 animate-pulse" />
      )}
    </div>
  )

  if (!animate) {
    return skeletonContent
  }

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
    >
      {skeletonContent}
    </motion.div>
  )
}

// Preset Skeleton Components for common use cases
function TextSkeleton({ lines = 3, className, ...props }: { lines?: number } & Omit<SkeletonProps, 'variant'>) {
  return (
    <div className={cn("space-y-2", className)}>
      {Array.from({ length: lines }).map((_, i) => (
        <Skeleton 
          key={i}
          variant="shimmer"
          className={cn(
            "h-4",
            i === lines - 1 && "w-3/4" // Make last line shorter
          )}
          {...props}
        />
      ))}
    </div>
  )
}

function CardSkeleton({ className, ...props }: Omit<SkeletonProps, 'variant'>) {
  return (
    <div className={cn("space-y-4 p-6 border rounded-lg", className)}>
      <Skeleton variant="shimmer" className="h-4 w-1/2" {...props} />
      <TextSkeleton lines={2} {...props} />
      <Skeleton variant="shimmer" className="h-8 w-24" {...props} />
    </div>
  )
}

function AvatarSkeleton({ className, ...props }: Omit<SkeletonProps, 'variant' | 'rounded'>) {
  return (
    <Skeleton 
      variant="shimmer"
      rounded="full"
      className={cn("h-10 w-10", className)}
      {...props}
    />
  )
}

function TableSkeleton({ rows = 5, cols = 4, className, ...props }: { rows?: number; cols?: number } & Omit<SkeletonProps, 'variant'>) {
  return (
    <div className={cn("space-y-3", className)}>
      {/* Header */}
      <div className="grid gap-4" style={{ gridTemplateColumns: `repeat(${cols}, 1fr)` }}>
        {Array.from({ length: cols }).map((_, i) => (
          <Skeleton key={i} variant="premium" className="h-4" {...props} />
        ))}
      </div>
      
      {/* Rows */}
      {Array.from({ length: rows }).map((_, rowIndex) => (
        <div key={rowIndex} className="grid gap-4" style={{ gridTemplateColumns: `repeat(${cols}, 1fr)` }}>
          {Array.from({ length: cols }).map((_, colIndex) => (
            <Skeleton key={colIndex} variant="shimmer" className="h-4" {...props} />
          ))}
        </div>
      ))}
    </div>
  )
}

// Gun Club Specific Skeletons
function ScoreCardSkeleton({ className, ...props }: Omit<SkeletonProps, 'variant'>) {
  return (
    <div className={cn("space-y-4 p-4 border rounded-lg", className)}>
      <div className="flex items-center justify-between">
        <Skeleton variant="premium" className="h-6 w-32" {...props} />
        <Skeleton variant="elite" className="h-8 w-16" rounded="full" {...props} />
      </div>
      <div className="grid grid-cols-5 gap-2">
        {Array.from({ length: 25 }).map((_, i) => (
          <Skeleton key={i} variant="shimmer" className="h-8 w-8" rounded="sm" {...props} />
        ))}
      </div>
    </div>
  )
}

function MemberCardSkeleton({ className, ...props }: Omit<SkeletonProps, 'variant'>) {
  return (
    <div className={cn("space-y-4 p-6 border rounded-lg", className)}>
      <div className="flex items-center gap-4">
        <AvatarSkeleton className="h-16 w-16" {...props} />
        <div className="space-y-2 flex-1">
          <Skeleton variant="premium" className="h-5 w-32" {...props} />
          <Skeleton variant="shimmer" className="h-4 w-24" {...props} />
        </div>
      </div>
      <div className="grid grid-cols-3 gap-4">
        <div className="text-center space-y-2">
          <Skeleton variant="elite" className="h-8 w-12 mx-auto" {...props} />
          <Skeleton variant="shimmer" className="h-3 w-16 mx-auto" {...props} />
        </div>
        <div className="text-center space-y-2">
          <Skeleton variant="elite" className="h-8 w-12 mx-auto" {...props} />
          <Skeleton variant="shimmer" className="h-3 w-16 mx-auto" {...props} />
        </div>
        <div className="text-center space-y-2">
          <Skeleton variant="elite" className="h-8 w-12 mx-auto" {...props} />
          <Skeleton variant="shimmer" className="h-3 w-16 mx-auto" {...props} />
        </div>
      </div>
    </div>
  )
}

export { 
  Skeleton,
  TextSkeleton,
  CardSkeleton,
  AvatarSkeleton,
  TableSkeleton,
  ScoreCardSkeleton,
  MemberCardSkeleton,
  skeletonVariants,
  type SkeletonProps
}
