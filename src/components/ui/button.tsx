import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium font-body transition-fast disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:ring-2 focus-visible:ring-leonard-yellow focus-visible:ring-offset-2 focus-visible:ring-offset-background active:scale-98 relative overflow-hidden",
  {
    variants: {
      variant: {
        default: "bg-leonard-yellow text-black shadow-sm hover:bg-lahoma-orange hover:shadow-md focus-visible:ring-leonard-yellow/50 dark:bg-leonard-yellow dark:text-black dark:hover:bg-lahoma-orange",
        primary: "bg-leonard-yellow text-black shadow-sm hover:bg-lahoma-orange hover:shadow-md focus-visible:ring-leonard-yellow/50 dark:bg-leonard-yellow dark:text-black dark:hover:bg-lahoma-orange",
        destructive:
          "bg-brand-red text-white shadow-sm hover:bg-brand-red/90 hover:shadow-md focus-visible:ring-brand-red/50 dark:bg-brand-red dark:hover:bg-brand-red/90",
        outline:
          "border border-muted bg-background shadow-sm hover:bg-muted/50 hover:shadow-md focus-visible:ring-leonard-yellow/50 dark:bg-background dark:border-muted dark:hover:bg-muted/50",
        secondary:
          "bg-muted text-muted-foreground shadow-sm hover:bg-muted/80 hover:shadow-md focus-visible:ring-leonard-yellow/50 dark:bg-muted dark:text-muted-foreground dark:hover:bg-muted/80",
        ghost:
          "hover:bg-muted/50 hover:text-foreground focus-visible:ring-leonard-yellow/50 dark:hover:bg-muted/50",
        link: "text-leonard-yellow underline-offset-4 hover:underline focus-visible:ring-leonard-yellow/50",
        premium: "bg-gradient-to-r from-leonard-yellow to-lahoma-orange text-black shadow-lg hover:shadow-xl hover:scale-105 focus-visible:ring-leonard-yellow/50 border border-leonard-yellow/20 dark:from-leonard-yellow dark:to-lahoma-orange dark:text-black",
      },
      size: {
        default: "h-9 px-4 py-2 has-[>svg]:px-3",
        sm: "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
        lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
        icon: "size-9",
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
  const Comp = asChild ? Slot : "button"
  const isDisabled = disabled || loading

  return (
    <Comp
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
    </Comp>
  )
}

export { Button, buttonVariants }
