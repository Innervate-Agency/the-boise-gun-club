"use client"

import * as React from "react"
import * as CheckboxPrimitive from "@radix-ui/react-checkbox"
import { CheckIcon } from "lucide-react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const checkboxVariants = cva(
  "peer h-4 w-4 shrink-0 rounded-sm border shadow-xs transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 [transition:var(--transition-fast)] relative overflow-hidden",
  {
    variants: {
      variant: {
        default: "border-border bg-background data-[state=checked]:bg-color-leonard-yellow data-[state=checked]:text-black data-[state=checked]:border-color-leonard-yellow focus-visible:ring-color-leonard-yellow/50",
        premium: "border-color-leonard-yellow/30 bg-gradient-to-r from-color-leonard-yellow/5 to-color-lahoma-orange/5 data-[state=checked]:bg-gradient-to-r data-[state=checked]:from-color-leonard-yellow data-[state=checked]:to-color-lahoma-orange data-[state=checked]:text-black data-[state=checked]:border-color-leonard-yellow/50 focus-visible:ring-color-leonard-yellow/50 hover:border-color-leonard-yellow/50 hover:shadow-md",
        elite: "border-color-leonard-yellow/40 bg-gradient-to-r from-color-leonard-yellow/8 to-color-lahoma-orange/8 data-[state=checked]:bg-gradient-to-r data-[state=checked]:from-color-leonard-yellow data-[state=checked]:via-color-lahoma-orange data-[state=checked]:to-color-leonard-yellow data-[state=checked]:bg-[length:200%_100%] data-[state=checked]:text-black data-[state=checked]:border-color-leonard-yellow/60 focus-visible:ring-color-leonard-yellow/60 hover:border-color-leonard-yellow/60 hover:shadow-lg animate-shimmer",
        glass: "border-white/30 bg-white/10 backdrop-blur-sm data-[state=checked]:bg-white/30 data-[state=checked]:text-white data-[state=checked]:border-white/50 focus-visible:ring-white/50",
      },
      size: {
        sm: "h-3 w-3",
        default: "h-4 w-4",
        lg: "h-5 w-5",
        xl: "h-6 w-6",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface CheckboxProps
  extends React.ComponentProps<typeof CheckboxPrimitive.Root>,
    VariantProps<typeof checkboxVariants> {}

const Checkbox = React.forwardRef<
  React.ElementRef<typeof CheckboxPrimitive.Root>,
  CheckboxProps
>(({ className, variant, size, ...props }, ref) => (
  <CheckboxPrimitive.Root
    ref={ref}
    className={cn(checkboxVariants({ variant, size }), className)}
    {...props}
  >
    {/* Elite shimmer effect */}
    {variant === 'elite' && (
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 animate-shimmer rounded-sm" />
    )}
    
    <CheckboxPrimitive.Indicator
      className={cn(
        "flex items-center justify-center text-current relative z-10",
        size === 'sm' && "[&_svg]:h-2.5 [&_svg]:w-2.5",
        size === 'default' && "[&_svg]:h-3 [&_svg]:w-3",
        size === 'lg' && "[&_svg]:h-4 [&_svg]:w-4",
        size === 'xl' && "[&_svg]:h-5 [&_svg]:w-5"
      )}
    >
      <CheckIcon className="h-4 w-4" />
    </CheckboxPrimitive.Indicator>
  </CheckboxPrimitive.Root>
))
Checkbox.displayName = CheckboxPrimitive.Root.displayName

export { Checkbox, checkboxVariants }
