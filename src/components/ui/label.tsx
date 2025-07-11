"use client"

import * as React from "react"
import * as LabelPrimitive from "@radix-ui/react-label"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const labelVariants = cva(
  "flex items-center gap-2 text-sm leading-none font-medium select-none transition-fast relative overflow-hidden group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "text-foreground",
        premium: "text-black bg-gradient-to-r from-leonard-yellow to-lahoma-orange bg-clip-text text-transparent font-semibold",
        elite: "text-black bg-gradient-to-r from-leonard-yellow via-lahoma-orange to-leonard-yellow bg-[length:200%_100%] bg-clip-text text-transparent font-bold animate-shimmer",
        glass: "text-card bg-card/10 backdrop-blur-sm px-2 py-1 rounded border border-white/20 dark:border-white/10",
      }
    },
    defaultVariants: {
      variant: "default"
    }
  }
)

interface LabelProps 
  extends React.ComponentProps<typeof LabelPrimitive.Root>, 
  VariantProps<typeof labelVariants> {}

function Label({
  className,
  variant,
  children,
  ...props
}: LabelProps) {
  return (
    <LabelPrimitive.Root
      data-slot="label"
      className={cn(labelVariants({ variant }), className)}
      {...props}
    >
      {/* Premium glow effect */}
      {variant === 'premium' && (
        <div className="absolute inset-0 bg-gradient-to-r from-lahoma-orange/30 to-leonard-yellow/30 blur-md opacity-50 group-hover:opacity-70 transition-smooth -z-10" />
      )}
      
      {/* Elite shimmer effect */}
      {variant === 'elite' && (
        <div className="absolute inset-0 bg-gradient-to-r from-lahoma-orange/40 to-leonard-yellow/40 blur-lg opacity-60 group-hover:opacity-80 transition-smooth -z-10" />
      )}
      
      {children}
    </LabelPrimitive.Root>
  )
}

export { Label }
