"use client"

import * as React from "react"
import * as AccordionPrimitive from "@radix-ui/react-accordion"
import { ChevronDownIcon } from "lucide-react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const accordionVariants = cva(
  "w-full",
  {
    variants: {
      variant: {
        default: "",
        premium: "space-y-2",
        elite: "space-y-3",
        glass: "space-y-2",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

interface AccordionProps extends React.ComponentProps<typeof AccordionPrimitive.Root>, VariantProps<typeof accordionVariants> {}

function Accordion({ className, variant, ...props }: AccordionProps) {
  return (
    <AccordionPrimitive.Root 
      data-slot="accordion" 
      className={cn(accordionVariants({ variant }), className)}
      {...props} 
    />
  )
}

const accordionItemVariants = cva(
  "border-b last:border-b-0 [transition:var(--transition-fast)]",
  {
    variants: {
      variant: {
        default: "border-border",
        premium: "border-color-leonard-yellow/20 rounded-lg bg-gradient-to-r from-color-leonard-yellow/5 to-color-lahoma-orange/5 backdrop-blur-sm border shadow-sm hover:shadow-md [&:not(:last-child)]:mb-2 last:mb-0",
        elite: "border-color-leonard-yellow/30 rounded-xl bg-gradient-to-r from-color-leonard-yellow/8 to-color-lahoma-orange/8 backdrop-blur-md border-2 shadow-lg hover:shadow-xl relative overflow-hidden [&:not(:last-child)]:mb-3 last:mb-0",
        glass: "border-white/20 rounded-lg bg-white/5 backdrop-blur-xl border shadow-lg hover:shadow-xl [&:not(:last-child)]:mb-2 last:mb-0",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

interface AccordionItemProps extends React.ComponentProps<typeof AccordionPrimitive.Item>, VariantProps<typeof accordionItemVariants> {}

function AccordionItem({ className, variant, ...props }: AccordionItemProps) {
  return (
    <AccordionPrimitive.Item
      data-slot="accordion-item"
      className={cn(accordionItemVariants({ variant }), className)}
      {...props}
    />
  )
}

const accordionTriggerVariants = cva(
  "focus-visible:border-ring focus-visible:ring-ring/50 flex flex-1 items-start justify-between gap-4 py-4 text-left text-sm font-medium transition-all outline-none disabled:pointer-events-none disabled:opacity-50 [&[data-state=open]>svg]:rotate-180 [transition:var(--transition-fast)]",
  {
    variants: {
      variant: {
        default: "hover:underline rounded-md",
        premium: "hover:text-color-leonard-yellow focus-visible:ring-color-leonard-yellow/50 px-4 rounded-lg font-semibold tracking-wide",
        elite: "hover:text-color-lahoma-orange focus-visible:ring-color-lahoma-orange/60 px-6 rounded-xl font-bold tracking-wide text-base relative group",
        glass: "hover:text-white focus-visible:ring-white/50 px-4 rounded-lg font-semibold text-white/90",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

interface AccordionTriggerProps extends React.ComponentProps<typeof AccordionPrimitive.Trigger>, VariantProps<typeof accordionTriggerVariants> {}

function AccordionTrigger({ className, variant, children, ...props }: AccordionTriggerProps) {
  return (
    <AccordionPrimitive.Header className="flex">
      <AccordionPrimitive.Trigger
        data-slot="accordion-trigger"
        className={cn(accordionTriggerVariants({ variant }), className)}
        {...props}
      >
        {/* Elite shimmer effect */}
        {variant === 'elite' && (
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12 group-hover:animate-shimmer rounded-xl" />
        )}
        
        <div className="relative z-10 flex-1">
          {children}
        </div>
        
        <ChevronDownIcon className={cn(
          "pointer-events-none size-4 shrink-0 translate-y-0.5 transition-transform duration-200 relative z-10",
          variant === 'default' ? "text-muted-foreground" : "text-current"
        )} />
      </AccordionPrimitive.Trigger>
    </AccordionPrimitive.Header>
  )
}

const accordionContentVariants = cva(
  "data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down overflow-hidden text-sm",
  {
    variants: {
      variant: {
        default: "",
        premium: "text-muted-foreground",
        elite: "text-muted-foreground",
        glass: "text-white/80",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

interface AccordionContentProps extends React.ComponentProps<typeof AccordionPrimitive.Content>, VariantProps<typeof accordionContentVariants> {}

function AccordionContent({ className, variant, children, ...props }: AccordionContentProps) {
  return (
    <AccordionPrimitive.Content
      data-slot="accordion-content"
      className={cn(accordionContentVariants({ variant }))}
      {...props}
    >
      <div className={cn(
        "pt-0 pb-4",
        variant === 'premium' && "px-4",
        variant === 'elite' && "px-6 pb-6",
        variant === 'glass' && "px-4",
        className
      )}>
        {children}
      </div>
    </AccordionPrimitive.Content>
  )
}

// Context for passing variant down to child components
const AccordionVariantContext = React.createContext<string | null>(null)

// Enhanced Accordion with variant context
interface EnhancedAccordionProps extends AccordionProps {}

function EnhancedAccordion({ variant = "default", children, ...props }: EnhancedAccordionProps) {
  return (
    <AccordionVariantContext.Provider value={variant}>
      <Accordion variant={variant} {...props}>
        {React.Children.map(children, (child) => {
          if (React.isValidElement(child) && child.type === AccordionItem) {
            return React.cloneElement(child, { variant } as any)
          }
          return child
        })}
      </Accordion>
    </AccordionVariantContext.Provider>
  )
}

// Auto-variant child components
function AutoAccordionItem(props: AccordionItemProps) {
  const variant = React.useContext(AccordionVariantContext) || "default"
  return <AccordionItem variant={variant as any} {...props} />
}

function AutoAccordionTrigger(props: AccordionTriggerProps) {
  const variant = React.useContext(AccordionVariantContext) || "default"
  return <AccordionTrigger variant={variant as any} {...props} />
}

function AutoAccordionContent(props: AccordionContentProps) {
  const variant = React.useContext(AccordionVariantContext) || "default"
  return <AccordionContent variant={variant as any} {...props} />
}

export { 
  Accordion, 
  AccordionItem, 
  AccordionTrigger, 
  AccordionContent,
  EnhancedAccordion,
  AutoAccordionItem,
  AutoAccordionTrigger,
  AutoAccordionContent,
  accordionVariants,
  accordionItemVariants,
  accordionTriggerVariants,
  accordionContentVariants
}
