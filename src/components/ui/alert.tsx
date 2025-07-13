import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { motion, AnimatePresence } from "framer-motion"
import { X, CheckCircle, AlertTriangle, XCircle, Info, Zap } from "lucide-react"

import { cn } from "@/lib/utils"

const alertVariants = cva(
  "relative w-full rounded-xl text-sm grid has-[>svg]:grid-cols-[calc(var(--spacing)*5)_1fr] grid-cols-[0_1fr] has-[>svg]:gap-x-4 gap-y-1 items-start [&>svg]:size-5 [&>svg]:translate-y-0.5 transition-stripe-fast border relative overflow-hidden font-body",
  {
    variants: {
      variant: {
        default: "bg-card text-card-foreground border-border shadow-sm hover:shadow-md hover:button-lift",
        success: "bg-gradient-to-r from-brand-green/8 to-brand-green/5 text-brand-green border-brand-green/30 shadow-sm hover:shadow-md [&>svg]:text-brand-green data-card-shadow hover:data-card-shadow-hover",
        warning: "bg-gradient-to-r from-leonard-yellow/8 to-lahoma-orange/5 text-amber-800 dark:text-amber-200 border-leonard-yellow/30 shadow-sm hover:shadow-md [&>svg]:text-leonard-yellow data-card-shadow hover:data-card-shadow-hover",
        error: "bg-gradient-to-r from-brand-red/8 to-brand-red/5 text-red-800 dark:text-red-200 border-brand-red/30 shadow-sm hover:shadow-md [&>svg]:text-brand-red data-card-shadow hover:data-card-shadow-hover",
        info: "bg-gradient-to-r from-brand-blue/8 to-brand-blue/5 text-brand-blue border-brand-blue/30 shadow-sm hover:shadow-md [&>svg]:text-brand-blue data-card-shadow hover:data-card-shadow-hover",
        premium: "bg-gradient-to-r from-card via-card to-leonard-yellow/5 border-leonard-yellow/20 shadow-premium hover:shadow-premium-hover hover:scale-[1.02] transition-stripe-normal group text-foreground [&>svg]:text-lahoma-orange",
        elite: "bg-gradient-to-r from-card via-leonard-yellow/3 to-lahoma-orange/3 border-2 border-leonard-yellow/30 shadow-elite hover:shadow-elite-hover hover:scale-[1.05] transition-stripe-normal group animate-shimmer text-foreground [&>svg]:text-lahoma-orange",
        glass: "bg-card/10 backdrop-blur-sm border-white/20 shadow-lg hover:bg-card/20 hover:border-white/30 transition-stripe-fast text-card-foreground [&>svg]:text-card-foreground"
      },
      size: {
        sm: "px-4 py-3 text-xs",
        default: "px-6 py-4 text-sm",
        lg: "px-8 py-6 text-base",
        xl: "px-10 py-8 text-lg"
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

// Icon mapping for different alert types
const alertIcons = {
  default: Info,
  success: CheckCircle,
  warning: AlertTriangle,
  error: XCircle,
  info: Info,
  premium: Zap,
  elite: Zap,
  glass: Info,
} as const

interface AlertProps extends React.ComponentProps<"div">, VariantProps<typeof alertVariants> {
  dismissible?: boolean
  onDismiss?: () => void
  icon?: React.ComponentType<{ className?: string }> | false
  animate?: boolean
}

function Alert({
  className,
  variant = "default",
  size,
  dismissible = false,
  onDismiss,
  icon,
  animate = true,
  children,
  ...props
}: AlertProps) {
  const [isVisible, setIsVisible] = React.useState(true)
  
  const handleDismiss = () => {
    setIsVisible(false)
    setTimeout(() => onDismiss?.(), 300)
  }

  const IconComponent = icon === false ? null : icon || alertIcons[variant]

  const alertContent = (
    <div
      data-slot="alert"
      role="alert"
      className={cn(alertVariants({ variant, size }), className)}
      {...props}
    >
      {/* Premium Mica Effect */}
      {variant === 'premium' && (
        <>
          <div className="absolute inset-0 mica-premium opacity-40 group-hover:opacity-60 transition-stripe-normal -z-10" />
          <div className="absolute inset-0 bg-gradient-to-r from-leonard-yellow/3 to-lahoma-orange/3 blur-sm opacity-0 group-hover:opacity-100 transition-stripe-normal -z-10" />
        </>
      )}
      
      {/* Elite Mica Effect + Shimmer */}
      {variant === 'elite' && (
        <>
          <div className="absolute inset-0 mica-elite opacity-50 group-hover:opacity-70 transition-stripe-normal -z-10" />
          <div className="absolute inset-0 bg-gradient-to-r from-leonard-yellow/4 via-lahoma-orange/4 to-leonard-yellow/4 blur-md opacity-0 group-hover:opacity-100 transition-stripe-normal -z-10" />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/8 to-transparent animate-shimmer -z-10" />
        </>
      )}
      
      {/* Glass Effect */}
      {variant === 'glass' && (
        <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent backdrop-blur-sm -z-10" />
      )}
      
      {/* Icon */}
      {IconComponent && (
        <IconComponent className="relative z-10" />
      )}
      
      {/* Content wrapper with enhanced contrast for premium variants */}
      <div className={cn(
        "relative z-10 col-start-2 space-y-1",
        (variant === 'premium' || variant === 'elite') && "backdrop-blur-sm"
      )}>
        {children}
      </div>
      
      {/* Dismiss button */}
      {dismissible && (
        <button
          onClick={handleDismiss}
          className="absolute top-3 right-3 p-1 rounded-full hover:bg-muted/20 transition-stripe-fast opacity-70 hover:opacity-100 z-20"
          aria-label="Dismiss alert"
        >
          <X className="h-4 w-4" />
        </button>
      )}
    </div>
  )

  if (!animate) {
    return isVisible ? alertContent : null
  }

  return (
    <AnimatePresence mode="wait">
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: -20, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -20, scale: 0.95 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
        >
          {alertContent}
        </motion.div>
      )}
    </AnimatePresence>
  )
}

function AlertTitle({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="alert-title"
      className={cn(
        "font-heading font-semibold tracking-tight text-base leading-tight",
        className
      )}
      {...props}
    />
  )
}

function AlertDescription({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="alert-description"
      className={cn(
        "font-body text-sm leading-relaxed opacity-90",
        className
      )}
      {...props}
    />
  )
}

// Preset alert components for common use cases
function SuccessAlert({ children, ...props }: Omit<AlertProps, 'variant'>) {
  return (
    <Alert variant="success" {...props}>
      {children}
    </Alert>
  )
}

function WarningAlert({ children, ...props }: Omit<AlertProps, 'variant'>) {
  return (
    <Alert variant="warning" {...props}>
      {children}
    </Alert>
  )
}

function ErrorAlert({ children, ...props }: Omit<AlertProps, 'variant'>) {
  return (
    <Alert variant="error" {...props}>
      {children}
    </Alert>
  )
}

function InfoAlert({ children, ...props }: Omit<AlertProps, 'variant'>) {
  return (
    <Alert variant="info" {...props}>
      {children}
    </Alert>
  )
}

function PremiumAlert({ children, ...props }: Omit<AlertProps, 'variant'>) {
  return (
    <Alert variant="premium" {...props}>
      {children}
    </Alert>
  )
}

function EliteAlert({ children, ...props }: Omit<AlertProps, 'variant'>) {
  return (
    <Alert variant="elite" {...props}>
      {children}
    </Alert>
  )
}

function GlassAlert({ children, ...props }: Omit<AlertProps, 'variant'>) {
  return (
    <Alert variant="glass" {...props}>
      {children}
    </Alert>
  )
}

export { 
  Alert, 
  AlertTitle, 
  AlertDescription,
  SuccessAlert,
  WarningAlert,
  ErrorAlert,
  InfoAlert,
  PremiumAlert,
  EliteAlert,
  GlassAlert
}
