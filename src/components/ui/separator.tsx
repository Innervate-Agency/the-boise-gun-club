"use client"

import * as React from "react"
import * as SeparatorPrimitive from "@radix-ui/react-separator"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const separatorVariants = cva(
  "shrink-0 transition-stripe-fast relative overflow-hidden",
  {
    variants: {
      variant: {
        default: "bg-border data-[orientation=horizontal]:h-px data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-px",
        premium: "bg-gradient-to-r from-transparent via-leonard-yellow to-transparent data-[orientation=horizontal]:h-0.5 data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-0.5 shadow-premium opacity-80 hover:opacity-100 group",
        elite: "bg-gradient-to-r from-leonard-yellow via-lahoma-orange to-leonard-yellow data-[orientation=horizontal]:h-px data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-px shadow-elite animate-shimmer group",
        glass: "bg-white/20 backdrop-blur-sm border-white/10 data-[orientation=horizontal]:h-px data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-px",
        dashed: "border-t border-dashed border-border data-[orientation=horizontal]:h-0 data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-0 data-[orientation=vertical]:border-t-0 data-[orientation=vertical]:border-l",
        thick: "bg-border data-[orientation=horizontal]:h-1 data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-1"
      },
      spacing: {
        none: "my-0",
        sm: "my-2",
        md: "my-4",
        lg: "my-6",
        xl: "my-8"
      }
    },
    defaultVariants: {
      variant: "default",
      spacing: "md"
    }
  }
)

interface SeparatorProps extends React.ComponentProps<typeof SeparatorPrimitive.Root>, VariantProps<typeof separatorVariants> {
  label?: string
  icon?: React.ReactNode
}

function Separator({
  className,
  variant = "default",
  spacing = "md",
  orientation = "horizontal",
  decorative = true,
  label,
  icon,
  ...props
}: SeparatorProps) {
  if (label || icon) {
    return (
      <div className={cn(
        "flex items-center gap-4",
        spacing === "sm" && "my-2",
        spacing === "md" && "my-4",
        spacing === "lg" && "my-6",
        spacing === "xl" && "my-8"
      )}>
        <SeparatorPrimitive.Root
          data-slot="separator"
          decorative={decorative}
          orientation={orientation}
          className={cn(
            separatorVariants({ variant, spacing: "none" }),
            "flex-1",
            className
          )}
          {...props}
        >
          {/* Premium separator glow */}
          {variant === 'premium' && (
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-leonard-yellow/50 to-transparent opacity-0 group-hover:opacity-60 transition-stripe-normal blur-sm" />
          )}
          
          {/* Elite separator shimmer */}
          {variant === 'elite' && (
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer" />
          )}
        </SeparatorPrimitive.Root>
        
        {/* Label or Icon */}
        {(label || icon) && (
          <div className="flex items-center gap-2 px-2 text-sm text-muted-foreground">
            {icon && <span className="text-leonard-yellow">{icon}</span>}
            {label && <span className="font-medium">{label}</span>}
          </div>
        )}
        
        <SeparatorPrimitive.Root
          data-slot="separator"
          decorative={decorative}
          orientation={orientation}
          className={cn(
            separatorVariants({ variant, spacing: "none" }),
            "flex-1",
            className
          )}
          {...props}
        >
          {/* Premium separator glow */}
          {variant === 'premium' && (
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-leonard-yellow/50 to-transparent opacity-0 group-hover:opacity-60 transition-stripe-normal blur-sm" />
          )}
          
          {/* Elite separator shimmer */}
          {variant === 'elite' && (
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer" />
          )}
        </SeparatorPrimitive.Root>
      </div>
    )
  }

  return (
    <SeparatorPrimitive.Root
      data-slot="separator"
      decorative={decorative}
      orientation={orientation}
      className={cn(
        separatorVariants({ variant, spacing }),
        className
      )}
      {...props}
    >
      {/* Premium separator glow */}
      {variant === 'premium' && (
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-leonard-yellow/50 to-transparent opacity-0 group-hover:opacity-60 transition-stripe-normal blur-sm" />
      )}
      
      {/* Elite separator shimmer */}
      {variant === 'elite' && (
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer" />
      )}
    </SeparatorPrimitive.Root>
  )
}

// Preset Separator Components
function PremiumSeparator({ className, ...props }: Omit<SeparatorProps, 'variant'>) {
  return (
    <Separator 
      variant="premium" 
      className={cn("group", className)}
      {...props} 
    />
  )
}

function EliteSeparator({ className, ...props }: Omit<SeparatorProps, 'variant'>) {
  return (
    <Separator 
      variant="elite" 
      className={cn("group", className)}
      {...props} 
    />
  )
}

function GlassSeparator({ className, ...props }: Omit<SeparatorProps, 'variant'>) {
  return (
    <Separator 
      variant="glass" 
      className={className}
      {...props} 
    />
  )
}

export { 
  Separator, 
  PremiumSeparator, 
  EliteSeparator, 
  GlassSeparator,
  separatorVariants,
  type SeparatorProps
}
