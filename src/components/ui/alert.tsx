import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { motion, AnimatePresence } from "framer-motion"
import { X, CheckCircle, AlertTriangle, XCircle, Info, Zap } from "lucide-react"

import { cn } from "@/lib/utils"

const alertVariants = cva(
  "relative w-full rounded-xl px-6 py-4 text-sm grid has-[>svg]:grid-cols-[calc(var(--spacing)*5)_1fr] grid-cols-[0_1fr] has-[>svg]:gap-x-4 gap-y-1 items-start [&>svg]:size-5 [&>svg]:translate-y-0.5 transition-all duration-300 ease-out shadow-lg hover:shadow-xl backdrop-blur-sm border overflow-hidden",
  {
    variants: {
      variant: {
        default: "bg-card/95 text-card-foreground border-border/20",
        success: "bg-gradient-to-r from-brand-green/10 to-brand-green-light/10 text-brand-green border-brand-green/20 [&>svg]:text-brand-green",
        warning: "bg-gradient-to-r from-leonard-yellow/10 to-lahoma-orange/10 text-amber-800 dark:text-amber-200 border-leonard-yellow/20 [&>svg]:text-leonard-yellow",
        error: "bg-gradient-to-r from-red-500/10 to-brand-red-action/10 text-red-800 dark:text-red-200 border-red-500/20 [&>svg]:text-red-500",
        info: "bg-gradient-to-r from-brand-blue/10 to-brand-blue-dark/10 text-brand-blue border-brand-blue/20 [&>svg]:text-brand-blue",
        premium: "bg-gradient-to-r from-leonard-yellow/15 to-lahoma-orange/15 text-amber-900 dark:text-amber-100 border-leonard-yellow/30 [&>svg]:text-lahoma-orange relative before:absolute before:inset-0 before:bg-gradient-to-br before:from-leonard-yellow/5 before:to-lahoma-orange/5 before:opacity-50",
      },
      size: {
        default: "px-6 py-4",
        sm: "px-4 py-3 text-sm",
        lg: "px-8 py-6 text-base",
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
      {/* Background gradient overlay for premium variant */}
      {variant === 'premium' && (
        <div className="absolute inset-0 bg-gradient-to-br from-leonard-yellow/10 via-transparent to-lahoma-orange/10 pointer-events-none" />
      )}
      
      {/* Icon */}
      {IconComponent && (
        <IconComponent className="relative z-10" />
      )}
      
      {/* Content */}
      <div className="relative z-10 col-start-2 space-y-1">
        {children}
      </div>
      
      {/* Dismiss button */}
      {dismissible && (
        <button
          onClick={handleDismiss}
          className="absolute top-3 right-3 p-1 rounded-full hover:bg-black/10 dark:hover:bg-white/10 transition-colors duration-200 opacity-70 hover:opacity-100"
          aria-label="Dismiss alert"
        >
          <X className="h-4 w-4" />
        </button>
      )}
      
      {/* Subtle animation shimmer for premium variant */}
      {variant === 'premium' && (
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12 -translate-x-full animate-shimmer pointer-events-none" />
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

export { 
  Alert, 
  AlertTitle, 
  AlertDescription,
  SuccessAlert,
  WarningAlert,
  ErrorAlert,
  InfoAlert,
  PremiumAlert
}
