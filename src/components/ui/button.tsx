import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg text-sm font-medium font-body [transition:var(--transition-fast)] disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:ring-2 focus-visible:ring-(--color-leonard-yellow) focus-visible:ring-offset-2 focus-visible:ring-offset-background active:scale-[0.98] relative overflow-hidden",
  {
    variants: {
      variant: {
        default: "bg-(--color-leonard-yellow) text-black [box-shadow:var(--shadow-sm)] hover:bg-(--color-lahoma-orange) hover:[box-shadow:var(--shadow-md)] focus-visible:ring-(--color-leonard-yellow)/50 dark:bg-(--color-leonard-yellow) dark:text-black dark:hover:bg-(--color-lahoma-orange)",
        primary: "bg-(--color-leonard-yellow) text-black [box-shadow:var(--shadow-sm)] hover:bg-(--color-lahoma-orange) hover:[box-shadow:var(--shadow-md)] focus-visible:ring-(--color-leonard-yellow)/50 dark:bg-(--color-leonard-yellow) dark:text-black dark:hover:bg-(--color-lahoma-orange)",
        destructive:
          "bg-(--color-brand-red) text-white [box-shadow:var(--shadow-sm)] hover:bg-(--color-brand-red)/90 hover:[box-shadow:var(--shadow-md)] focus-visible:ring-(--color-brand-red)/50 dark:bg-(--color-brand-red) dark:hover:bg-(--color-brand-red)/90",
        outline:
          "border border-border bg-background [box-shadow:var(--shadow-sm)] hover:bg-muted/50 hover:[box-shadow:var(--shadow-md)] focus-visible:ring-(--color-leonard-yellow)/50 dark:bg-background dark:border-border dark:hover:bg-muted/50",
        secondary:
          "bg-muted text-muted-foreground [box-shadow:var(--shadow-sm)] hover:bg-muted/80 hover:[box-shadow:var(--shadow-md)] focus-visible:ring-(--color-leonard-yellow)/50 dark:bg-muted dark:text-muted-foreground dark:hover:bg-muted/80",
        ghost:
          "hover:bg-muted/50 hover:text-foreground focus-visible:ring-(--color-leonard-yellow)/50 dark:hover:bg-muted/50",
        link: "text-(--color-leonard-yellow) underline-offset-4 hover:underline focus-visible:ring-(--color-leonard-yellow)/50",
        premium: "bg-gradient-to-r from-(--color-leonard-yellow) to-(--color-lahoma-orange) text-black [box-shadow:var(--shadow-md)] hover:[box-shadow:var(--shadow-lg)] hover:scale-[1.02] focus-visible:ring-(--color-leonard-yellow)/50 border border-(--color-leonard-yellow)/20 dark:from-(--color-leonard-yellow) dark:to-(--color-lahoma-orange) dark:text-black relative overflow-hidden group motion-reduce:hover:scale-100",
        elite: "bg-gradient-to-r from-(--color-leonard-yellow) via-(--color-lahoma-orange) to-(--color-leonard-yellow) bg-[length:200%_100%] text-black [box-shadow:var(--shadow-lg)] hover:[box-shadow:var(--shadow-xl)] hover:scale-[1.05] focus-visible:ring-(--color-leonard-yellow)/50 border-2 border-(--color-leonard-yellow)/30 animate-shimmer relative overflow-hidden group motion-reduce:animate-none motion-reduce:hover:scale-100",
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
      
      {/* Premium button glow effect */}
      {variant === 'premium' && (
        <div className="absolute inset-0 bg-gradient-to-r from-(--color-lahoma-orange)/60 to-(--color-brand-red)/40 blur-lg opacity-0 group-hover:opacity-40 [transition:var(--transition-smooth)] -z-10" />
      )}
      
      {/* Elite button animated background */}
      {variant === 'elite' && (
        <div className="absolute inset-0 bg-gradient-to-r from-(--color-lahoma-orange)/30 via-(--color-brand-red)/20 to-(--color-lahoma-orange)/30 blur-xl opacity-40 group-hover:opacity-70 [transition:var(--transition-smooth)] -z-10" />
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
