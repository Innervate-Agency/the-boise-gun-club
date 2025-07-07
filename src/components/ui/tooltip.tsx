"use client"

import * as React from "react"
import * as TooltipPrimitive from "@radix-ui/react-tooltip"
import { cva, type VariantProps } from "class-variance-authority"
import { motion, AnimatePresence } from "framer-motion"

import { cn } from "@/lib/utils"

const tooltipVariants = cva(
  "z-50 w-fit origin-(--radix-tooltip-content-transform-origin) rounded-xl px-3 py-2 text-xs text-balance font-medium shadow-lg border backdrop-blur-sm relative overflow-hidden",
  {
    variants: {
      variant: {
        default: "bg-card text-card-foreground border-border/50",
        primary: "bg-primary text-primary-foreground border-primary/30",
        success: "bg-brand-green text-white border-brand-green/30",
        warning: "bg-leonard-yellow text-white border-leonard-yellow/30",
        error: "bg-red-500 text-white border-red-500/30",
        info: "bg-brand-blue text-white border-brand-blue/30",
        premium: "bg-gradient-to-r from-leonard-yellow to-lahoma-orange text-white border-leonard-yellow/50 shadow-xl",
        glass: "bg-white/10 backdrop-blur-xl text-white border-white/20",
        dark: "bg-gray-900 text-white border-gray-700",
      },
      size: {
        sm: "px-2 py-1 text-[10px]",
        default: "px-3 py-2 text-xs",
        lg: "px-4 py-3 text-sm",
        xl: "px-5 py-4 text-base max-w-xs",
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

const tooltipArrowVariants = cva(
  "z-50 size-2.5 translate-y-[calc(-50%_-_2px)] rotate-45 rounded-[2px]",
  {
    variants: {
      variant: {
        default: "bg-card fill-card border-border/50",
        primary: "bg-primary fill-primary border-primary/30",
        success: "bg-brand-green fill-brand-green border-brand-green/30",
        warning: "bg-leonard-yellow fill-leonard-yellow border-leonard-yellow/30",
        error: "bg-red-500 fill-red-500 border-red-500/30",
        info: "bg-brand-blue fill-brand-blue border-brand-blue/30",
        premium: "bg-leonard-yellow fill-leonard-yellow border-leonard-yellow/50",
        glass: "bg-white/10 fill-white/10 border-white/20 backdrop-blur-xl",
        dark: "bg-gray-900 fill-gray-900 border-gray-700",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

function TooltipProvider({
  delayDuration = 0,
  ...props
}: React.ComponentProps<typeof TooltipPrimitive.Provider>) {
  return (
    <TooltipPrimitive.Provider
      data-slot="tooltip-provider"
      delayDuration={delayDuration}
      {...props}
    />
  )
}

function Tooltip({
  ...props
}: React.ComponentProps<typeof TooltipPrimitive.Root>) {
  return (
    <TooltipProvider>
      <TooltipPrimitive.Root data-slot="tooltip" {...props} />
    </TooltipProvider>
  )
}

function TooltipTrigger({
  ...props
}: React.ComponentProps<typeof TooltipPrimitive.Trigger>) {
  return <TooltipPrimitive.Trigger data-slot="tooltip-trigger" {...props} />
}

interface TooltipContentProps extends React.ComponentProps<typeof TooltipPrimitive.Content>, VariantProps<typeof tooltipVariants> {
  showArrow?: boolean
  animate?: boolean
  shimmer?: boolean
  icon?: React.ReactNode
}

function TooltipContent({
  className,
  variant = "default",
  size = "default",
  sideOffset = 8,
  showArrow = true,
  animate = true,
  shimmer = false,
  icon,
  children,
  ...props
}: TooltipContentProps) {
  const content = (
    <TooltipPrimitive.Content
      data-slot="tooltip-content"
      sideOffset={sideOffset}
      className={cn(
        tooltipVariants({ variant, size }),
        animate && "animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
        className
      )}
      {...props}
    >
      {/* Premium shimmer effect */}
      {variant === 'premium' && shimmer && (
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 animate-shimmer rounded-xl" />
      )}
      
      {/* Content */}
      <div className="flex items-center gap-2 relative z-10">
        {icon && (
          <span className="flex-shrink-0 text-current opacity-90">
            {icon}
          </span>
        )}
        <span>{children}</span>
      </div>
      
      {/* Arrow */}
      {showArrow && (
        <TooltipPrimitive.Arrow 
          className={cn(tooltipArrowVariants({ variant }))} 
        />
      )}
    </TooltipPrimitive.Content>
  )

  return (
    <TooltipPrimitive.Portal>
      {content}
    </TooltipPrimitive.Portal>
  )
}

// Preset Tooltip Components for gun club scenarios
interface InfoTooltipProps {
  children: React.ReactNode
  content: string
  variant?: VariantProps<typeof tooltipVariants>['variant']
  size?: VariantProps<typeof tooltipVariants>['size']
  icon?: React.ReactNode
}

function InfoTooltip({ 
  children, 
  content, 
  variant = "info", 
  size = "default",
  icon,
  ...props 
}: InfoTooltipProps) {
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        {children}
      </TooltipTrigger>
      <TooltipContent variant={variant} size={size} icon={icon} {...props}>
        {content}
      </TooltipContent>
    </Tooltip>
  )
}

interface ScoreTooltipProps {
  children: React.ReactNode
  score: number
  maxScore: number
  discipline?: string
  date?: string
}

function ScoreTooltip({ 
  children, 
  score, 
  maxScore, 
  discipline = "Shooting",
  date,
  ...props 
}: ScoreTooltipProps) {
  const percentage = Math.round((score / maxScore) * 100)
  
  const getVariant = (percentage: number): VariantProps<typeof tooltipVariants>['variant'] => {
    if (percentage >= 95) return 'premium'
    if (percentage >= 85) return 'success'
    if (percentage >= 70) return 'warning'
    return 'info'
  }

  return (
    <Tooltip>
      <TooltipTrigger asChild>
        {children}
      </TooltipTrigger>
      <TooltipContent 
        variant={getVariant(percentage)} 
        size="lg"
        shimmer={percentage >= 95}
        {...props}
      >
        <div className="space-y-1">
          <div className="font-semibold">{discipline} Score</div>
          <div>{score}/{maxScore} ({percentage}%)</div>
          {date && <div className="text-xs opacity-80">{date}</div>}
        </div>
      </TooltipContent>
    </Tooltip>
  )
}

interface RuleTooltipProps {
  children: React.ReactNode
  ruleNumber: number
  ruleText: string
  severity?: 'info' | 'warning' | 'error'
}

function RuleTooltip({ 
  children, 
  ruleNumber, 
  ruleText, 
  severity = 'info',
  ...props 
}: RuleTooltipProps) {
  const getVariant = (severity: string): VariantProps<typeof tooltipVariants>['variant'] => {
    switch (severity) {
      case 'warning': return 'warning'
      case 'error': return 'error'
      default: return 'info'
    }
  }

  return (
    <Tooltip>
      <TooltipTrigger asChild>
        {children}
      </TooltipTrigger>
      <TooltipContent variant={getVariant(severity)} size="xl" {...props}>
        <div className="space-y-2">
          <div className="font-semibold">Rule #{ruleNumber}</div>
          <div className="text-sm leading-relaxed">{ruleText}</div>
        </div>
      </TooltipContent>
    </Tooltip>
  )
}

export { 
  Tooltip, 
  TooltipTrigger, 
  TooltipContent, 
  TooltipProvider,
  InfoTooltip,
  ScoreTooltip,
  RuleTooltip,
  type TooltipContentProps,
  type InfoTooltipProps,
  type ScoreTooltipProps,
  type RuleTooltipProps
}
