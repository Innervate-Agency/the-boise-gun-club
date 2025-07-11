import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg text-sm font-medium font-body transition-stripe-fast disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:ring-2 focus-visible:ring-leonard-yellow focus-visible:ring-offset-2 focus-visible:ring-offset-background active:button-press relative overflow-hidden",
  {
    variants: {
      variant: {
        default: "bg-leonard-yellow text-black shadow-sm hover:bg-lahoma-orange hover:shadow-md hover:button-lift focus-visible:ring-leonard-yellow/50 dark:bg-leonard-yellow dark:text-black dark:hover:bg-lahoma-orange",
        primary: "bg-leonard-yellow text-black shadow-sm hover:bg-lahoma-orange hover:shadow-md hover:button-lift focus-visible:ring-leonard-yellow/50 dark:bg-leonard-yellow dark:text-black dark:hover:bg-lahoma-orange",
        destructive:
          "bg-brand-red text-white shadow-sm hover:bg-brand-red/90 hover:shadow-md focus-visible:ring-brand-red/50 dark:bg-brand-red dark:hover:bg-brand-red/90",
        outline:
          "border border-border bg-background shadow-sm hover:bg-muted/50 hover:shadow-md focus-visible:ring-leonard-yellow/50 dark:bg-background dark:border-border dark:hover:bg-muted/50",
        secondary:
          "bg-muted text-muted-foreground shadow-sm hover:bg-muted/80 hover:shadow-md focus-visible:ring-leonard-yellow/50 dark:bg-muted dark:text-muted-foreground dark:hover:bg-muted/80",
        ghost:
          "hover:bg-muted/50 hover:text-foreground focus-visible:ring-leonard-yellow/50 dark:hover:bg-muted/50",
        link: "text-leonard-yellow underline-offset-4 hover:underline focus-visible:ring-leonard-yellow/50",
        premium: "bg-gradient-to-r from-leonard-yellow to-lahoma-orange text-black shadow-premium hover:shadow-premium-hover hover:scale-[1.02] hover:button-lift focus-visible:ring-leonard-yellow/50 border border-leonard-yellow/20 dark:from-leonard-yellow dark:to-lahoma-orange dark:text-black relative overflow-hidden group motion-reduce:hover:scale-100 transition-stripe-normal",
        elite: "bg-gradient-to-r from-leonard-yellow via-lahoma-orange to-leonard-yellow bg-[length:200%_100%] text-black shadow-elite hover:shadow-elite-hover hover:scale-[1.05] hover:button-lift focus-visible:ring-leonard-yellow/50 border-2 border-leonard-yellow/30 animate-shimmer relative overflow-hidden group motion-reduce:animate-none motion-reduce:hover:scale-100 transition-stripe-normal",
      },
      size: {
        default: "h-10 px-4 py-2 gap-2 has-[>svg]:px-3",
        sm: "h-8 px-3 py-1.5 gap-1.5 has-[>svg]:px-2.5 text-xs",
        lg: "h-12 px-6 py-3 gap-2.5 has-[>svg]:px-5 text-base",
        xl: "h-14 px-8 py-4 gap-3 has-[>svg]:px-7 text-lg",
        icon: "size-10 p-0",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

interface ButtonProps extends React.ComponentProps<"button">, VariantProps<typeof buttonVariants> {
  asChild?: boolean
  loading?: boolean
  icon?: React.ReactNode
  iconPosition?: 'left' | 'right'
  effect?: 'none' | 'lift' | 'glow' | 'pulse' | 'shimmer'
}

function Button({
  className,
  variant,
  size,
  asChild = false,
  loading = false,
  icon,
  iconPosition = 'left',
  effect = 'none',
  children,
  disabled,
  ...props
}: ButtonProps) {
  const isDisabled = disabled || loading

  if (asChild) {
    // When asChild is true, we need to pass all styles and props to the single child
    return (
      <Slot
        className={cn(
          buttonVariants({ variant, size }),
          effect === 'lift' && 'hover:scale-105 hover:shadow-lg',
          effect === 'glow' && 'hover:shadow-lg hover:shadow-primary/25',
          effect === 'pulse' && 'animate-pulse',
          effect === 'shimmer' && 'relative overflow-hidden',
          className
        )}
        data-disabled={isDisabled}
        {...props}
      >
        {children}
      </Slot>
    )
  }

  return (
    <button
      data-slot="button"
      className={cn(
        buttonVariants({ variant, size }),
        effect === 'lift' && 'hover:scale-105 hover:shadow-lg',
        effect === 'glow' && 'hover:shadow-lg hover:shadow-primary/25',
        effect === 'pulse' && 'animate-pulse',
        effect === 'shimmer' && 'relative overflow-hidden',
        className
      )}
      disabled={isDisabled}
      {...props}
    >
      {/* Shimmer effect */}
      {effect === 'shimmer' && (
        <div className="absolute inset-0 -translate-x-full animate-shimmer bg-gradient-to-r from-transparent via-white/20 to-transparent" />
      )}
      
      {/* Premium button with subtle Mica effect */}
      {variant === 'premium' && (
        <>
          <div className="absolute inset-0 mica-premium opacity-0 group-hover:opacity-30 transition-stripe-normal -z-10" />
          <div className="absolute inset-0 bg-gradient-to-r from-lahoma-orange/40 to-leonard-yellow/40 blur-md opacity-0 group-hover:opacity-25 transition-stripe-normal -z-10" />
        </>
      )}
      
      {/* Elite button with enhanced Mica effect */}
      {variant === 'elite' && (
        <>
          <div className="absolute inset-0 mica-elite opacity-20 group-hover:opacity-40 transition-stripe-normal -z-10" />
          <div className="absolute inset-0 bg-gradient-to-r from-lahoma-orange/30 via-leonard-yellow/30 to-lahoma-orange/30 blur-lg opacity-30 group-hover:opacity-50 transition-stripe-normal -z-10" />
        </>
      )}
      
      {/* Loading spinner */}
      {loading && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
        </div>
      )}
      
      {/* Content wrapper */}
      <div className={cn(
        'flex items-center gap-2',
        loading && 'opacity-0'
      )}>
        {icon && iconPosition === 'left' && (
          <span className="flex-shrink-0">
            {icon}
          </span>
        )}
        
        {children}
        
        {icon && iconPosition === 'right' && (
          <span className="flex-shrink-0">
            {icon}
          </span>
        )}
      </div>
    </button>
  )
}

export { Button, buttonVariants }
