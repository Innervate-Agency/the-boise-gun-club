import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const textareaVariants = cva(
  "flex w-full rounded-lg border bg-transparent px-3 py-2 text-sm shadow-xs transition-all duration-200 outline-none placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50 min-h-[80px]",
  {
    variants: {
      variant: {
        default: "border-border/50 hover:border-border focus:border-primary focus:ring-2 focus:ring-primary/20",
        premium: "border-primary/30 bg-primary/5 hover:border-primary/50 focus:border-primary focus:ring-2 focus:ring-primary/30 focus:shadow-lg",
        glass: "bg-card/10 backdrop-blur-sm border-white/20 hover:border-white/30 focus:border-white/50 focus:ring-2 focus:ring-white/20 text-white placeholder:text-white/50",
        filled: "bg-muted border-transparent hover:bg-muted/80 focus:bg-card focus:border-primary focus:ring-2 focus:ring-primary/20",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement>,
    VariantProps<typeof textareaVariants> {}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, variant, ...props }, ref) => {
    return (
      <textarea
        className={cn(textareaVariants({ variant, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Textarea.displayName = "Textarea"

export { Textarea, textareaVariants }
