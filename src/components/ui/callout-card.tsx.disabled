'use client';

import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const calloutCardVariants = cva(
  "rounded-lg transition-fast",
  {
    variants: {
      variant: {
        default: "gradient-border",
        subtle: "gradient-border-subtle",
        animated: "gradient-border-animated",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

interface CalloutCardProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof calloutCardVariants> {
  title?: string
  description?: string
}

const CalloutCard = React.forwardRef<HTMLDivElement, CalloutCardProps>(
  ({ className, variant, title, description, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(calloutCardVariants({ variant }), className)}
        {...props}
      >
        <div className="gradient-border-content">
          {title && (
            <h3 className="font-serif text-lg font-semibold mb-2 text-card-foreground">
              {title}
            </h3>
          )}
          {description && (
            <p className="font-body text-sm text-muted-foreground mb-3">
              {description}
            </p>
          )}
          {children}
        </div>
      </div>
    )
  }
)
CalloutCard.displayName = "CalloutCard"

// Preset variants for common use cases
const ImportantCallout = React.forwardRef<HTMLDivElement, CalloutCardProps>(
  ({ className, ...props }, ref) => (
    <CalloutCard 
      ref={ref}
      variant="animated"
      className={className}
      {...props}
    />
  )
)
ImportantCallout.displayName = "ImportantCallout"

const SubtleCallout = React.forwardRef<HTMLDivElement, CalloutCardProps>(
  ({ className, ...props }, ref) => (
    <CalloutCard 
      ref={ref}
      variant="subtle"
      className={className}
      {...props}
    />
  )
)
SubtleCallout.displayName = "SubtleCallout"

export {
  CalloutCard,
  ImportantCallout,
  SubtleCallout,
  calloutCardVariants,
  type CalloutCardProps
}