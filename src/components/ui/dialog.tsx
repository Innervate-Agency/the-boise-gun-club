"use client"

import * as React from "react"
import * as DialogPrimitive from "@radix-ui/react-dialog"
import { XIcon } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const dialogVariants = cva(
  "fixed top-[50%] left-[50%] z-50 grid w-full translate-x-[-50%] translate-y-[-50%] gap-6 border shadow-2xl duration-300 rounded-2xl overflow-hidden",
  {
    variants: {
      variant: {
        default: "bg-card/95 backdrop-blur-xl border-border/20",
        glass: "bg-white/10 backdrop-blur-2xl border-white/20 dark:bg-black/10 dark:border-white/10",
        premium: "bg-gradient-to-br from-leonard-yellow/5 to-lahoma-orange/5 backdrop-blur-2xl border-leonard-yellow/20 relative before:absolute before:inset-0 before:bg-gradient-to-br before:from-leonard-yellow/10 before:to-lahoma-orange/10 before:opacity-50",
        solid: "bg-card border-border shadow-2xl",
      },
      size: {
        sm: "max-w-[400px] p-4",
        default: "max-w-[500px] p-6", 
        lg: "max-w-[700px] p-8",
        xl: "max-w-[900px] p-10",
        full: "max-w-[95vw] max-h-[95vh] p-6",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

const overlayVariants = cva(
  "fixed inset-0 z-50 transition-all duration-300",
  {
    variants: {
      variant: {
        default: "bg-black/50 backdrop-blur-sm",
        glass: "bg-black/30 backdrop-blur-lg",
        premium: "bg-gradient-to-br from-black/40 to-black/60 backdrop-blur-lg",
        solid: "bg-black/75",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

function Dialog({
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Root>) {
  return <DialogPrimitive.Root data-slot="dialog" {...props} />
}

function DialogTrigger({
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Trigger>) {
  return <DialogPrimitive.Trigger data-slot="dialog-trigger" {...props} />
}

function DialogPortal({
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Portal>) {
  return <DialogPrimitive.Portal data-slot="dialog-portal" {...props} />
}

function DialogClose({
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Close>) {
  return <DialogPrimitive.Close data-slot="dialog-close" {...props} />
}

interface DialogOverlayProps extends React.ComponentProps<typeof DialogPrimitive.Overlay>, VariantProps<typeof overlayVariants> {}

function DialogOverlay({
  className,
  variant,
  ...props
}: DialogOverlayProps) {
  return (
    <DialogPrimitive.Overlay
      data-slot="dialog-overlay"
      className={cn(
        overlayVariants({ variant }),
        "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
        className
      )}
      {...props}
    />
  )
}

interface DialogContentProps extends React.ComponentProps<typeof DialogPrimitive.Content>, VariantProps<typeof dialogVariants> {
  showCloseButton?: boolean
  animate?: boolean
}

function DialogContent({
  className,
  children,
  variant = "default",
  size = "default", 
  showCloseButton = true,
  animate = true,
  ...props
}: DialogContentProps) {
  const contentElement = (
    <DialogPrimitive.Content
      data-slot="dialog-content"
      className={cn(
        dialogVariants({ variant, size }),
        "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95",
        className
      )}
      {...props}
    >
      {/* Premium shimmer effect */}
      {variant === 'premium' && (
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent transform -skew-x-12 -translate-x-full animate-shimmer pointer-events-none" />
      )}
      
      {/* Glass effect enhancement */}
      {variant === 'glass' && (
        <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent pointer-events-none" />
      )}
      
      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
      
      {/* Enhanced close button */}
      {showCloseButton && (
        <DialogPrimitive.Close
          data-slot="dialog-close"
          className={cn(
            "absolute top-4 right-4 p-2 rounded-full transition-all duration-200 z-20",
            "opacity-70 hover:opacity-100 hover:scale-110",
            "bg-black/10 hover:bg-black/20 dark:bg-white/10 dark:hover:bg-white/20",
            "backdrop-blur-sm border border-white/20",
            "focus:ring-2 focus:ring-lahoma-orange/50 focus:ring-offset-2 focus:outline-none",
            "[&_svg]:size-4 [&_svg]:shrink-0"
          )}
        >
          <XIcon />
          <span className="sr-only">Close</span>
        </DialogPrimitive.Close>
      )}
    </DialogPrimitive.Content>
  )

  return (
    <DialogPortal data-slot="dialog-portal">
      <DialogOverlay variant={variant} />
      {animate ? (
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: -20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: -20 }}
          transition={{ duration: 0.2, ease: "easeOut" }}
          className="contents"
        >
          {contentElement}
        </motion.div>
      ) : (
        contentElement
      )}
    </DialogPortal>
  )
}

function DialogHeader({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="dialog-header"
      className={cn("flex flex-col gap-3 text-center sm:text-left", className)}
      {...props}
    />
  )
}

function DialogFooter({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="dialog-footer"
      className={cn(
        "flex flex-col-reverse gap-3 sm:flex-row sm:justify-end pt-4 border-t border-border/20",
        className
      )}
      {...props}
    />
  )
}

function DialogTitle({
  className,
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Title>) {
  return (
    <DialogPrimitive.Title
      data-slot="dialog-title"
      className={cn(
        "text-xl font-heading font-bold tracking-tight text-card-foreground leading-tight",
        className
      )}
      {...props}
    />
  )
}

function DialogDescription({
  className,
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Description>) {
  return (
    <DialogPrimitive.Description
      data-slot="dialog-description"
      className={cn(
        "text-muted-foreground font-body text-sm leading-relaxed",
        className
      )}
      {...props}
    />
  )
}

// Preset Dialog Components for common use cases
interface PresetDialogProps {
  children: React.ReactNode
  trigger?: React.ReactNode
  title?: string
  description?: string
  size?: VariantProps<typeof dialogVariants>['size']
  className?: string
}

function GlassDialog({ children, trigger, title, description, size = "default", className }: PresetDialogProps) {
  return (
    <Dialog>
      {trigger && <DialogTrigger asChild>{trigger}</DialogTrigger>}
      <DialogContent variant="glass" size={size} className={className}>
        {(title || description) && (
          <DialogHeader>
            {title && <DialogTitle>{title}</DialogTitle>}
            {description && <DialogDescription>{description}</DialogDescription>}
          </DialogHeader>
        )}
        {children}
      </DialogContent>
    </Dialog>
  )
}

function PremiumDialog({ children, trigger, title, description, size = "default", className }: PresetDialogProps) {
  return (
    <Dialog>
      {trigger && <DialogTrigger asChild>{trigger}</DialogTrigger>}
      <DialogContent variant="premium" size={size} className={className}>
        {(title || description) && (
          <DialogHeader>
            {title && <DialogTitle>{title}</DialogTitle>}
            {description && <DialogDescription>{description}</DialogDescription>}
          </DialogHeader>
        )}
        {children}
      </DialogContent>
    </Dialog>
  )
}

function SolidDialog({ children, trigger, title, description, size = "default", className }: PresetDialogProps) {
  return (
    <Dialog>
      {trigger && <DialogTrigger asChild>{trigger}</DialogTrigger>}
      <DialogContent variant="solid" size={size} className={className}>
        {(title || description) && (
          <DialogHeader>
            {title && <DialogTitle>{title}</DialogTitle>}
            {description && <DialogDescription>{description}</DialogDescription>}
          </DialogHeader>
        )}
        {children}
      </DialogContent>
    </Dialog>
  )
}

export {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogOverlay,
  DialogPortal,
  DialogTitle,
  DialogTrigger,
  // Preset components
  GlassDialog,
  PremiumDialog,
  SolidDialog,
  // Types
  type DialogContentProps,
  type DialogOverlayProps,
  type PresetDialogProps,
}
