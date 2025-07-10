"use client"

import * as React from "react"
import * as SelectPrimitive from "@radix-ui/react-select"
import { cva, type VariantProps } from "class-variance-authority"
import { motion } from "framer-motion"
import { CheckIcon, ChevronDownIcon, ChevronUpIcon } from "lucide-react"

import { cn } from "@/lib/utils"

const selectTriggerVariants = cva(
  "flex w-full items-center justify-between gap-2 rounded-lg border transition-all duration-200 outline-none font-body px-3 py-2 text-sm whitespace-nowrap shadow-xs disabled:cursor-not-allowed disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
  {
    variants: {
      variant: {
        default: "bg-card border-border/50 hover:border-border focus:border-[var(--color-lahoma-orange)] focus:ring-2 focus:ring-[var(--color-lahoma-orange)]/20 data-[placeholder]:text-muted-foreground",
        premium: "bg-gradient-to-r from-[var(--color-leonard-yellow)]/5 to-[var(--color-lahoma-orange)]/5 border-[var(--color-leonard-yellow)]/30 hover:border-[var(--color-leonard-yellow)]/50 focus:border-[var(--color-lahoma-orange)] focus:ring-2 focus:ring-[var(--color-lahoma-orange)]/30 focus:shadow-lg data-[placeholder]:text-muted-foreground",
        glass: "bg-[var(--card)]/10 backdrop-blur-sm border-white/20 hover:border-white/30 focus:border-white/50 focus:ring-2 focus:ring-white/20 data-[placeholder]:text-white/50",
        outline: "bg-transparent border-border hover:border-border/80 focus:border-[var(--color-lahoma-orange)] focus:ring-2 focus:ring-[var(--color-lahoma-orange)]/20 data-[placeholder]:text-muted-foreground",
        filled: "bg-muted border-transparent hover:bg-muted/80 focus:bg-card focus:border-[var(--color-lahoma-orange)] focus:ring-2 focus:ring-[var(--color-lahoma-orange)]/20 data-[placeholder]:text-muted-foreground",
      },
      size: {
        sm: "h-8 px-3 text-sm",
        default: "h-10 px-3 text-sm",
        lg: "h-12 px-4 text-base",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

const selectContentVariants = cva(
  "relative z-50 max-h-96 min-w-[8rem] overflow-hidden rounded-lg border shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
  {
    variants: {
      variant: {
        default: "bg-popover text-popover-foreground border-border",
        premium: "bg-gradient-to-b from-card to-card/95 backdrop-blur-md border-[var(--color-leonard-yellow)]/20 shadow-2xl",
        glass: "bg-[var(--card)]/10 backdrop-blur-md border-white/20 shadow-2xl text-[var(--card)]",
        outline: "bg-popover text-popover-foreground border-border",
        filled: "bg-muted text-foreground border-border",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

const selectItemVariants = cva(
  "relative flex w-full cursor-default items-center gap-2 rounded-sm py-2 pr-8 pl-3 text-sm outline-hidden select-none transition-colors data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
  {
    variants: {
      variant: {
        default: "hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
        premium: "hover:bg-gradient-to-r hover:from-[var(--color-leonard-yellow)]/10 hover:to-[var(--color-lahoma-orange)]/10 focus:bg-gradient-to-r focus:from-[var(--color-leonard-yellow)]/20 focus:to-[var(--color-lahoma-orange)]/20",
        glass: "hover:bg-[var(--card)]/20 focus:bg-[var(--card)]/30 text-[var(--card)]",
        outline: "hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
        filled: "hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

interface SelectProps extends React.ComponentProps<typeof SelectPrimitive.Root> {
  variant?: VariantProps<typeof selectTriggerVariants>["variant"]
}

function Select({ variant = "default", ...props }: SelectProps) {
  return (
    <SelectPrimitive.Root data-slot="select" data-variant={variant} {...props} />
  )
}

function SelectGroup({
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Group>) {
  return <SelectPrimitive.Group data-slot="select-group" {...props} />
}

function SelectValue({
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Value>) {
  return <SelectPrimitive.Value data-slot="select-value" {...props} />
}

interface SelectTriggerProps extends 
  React.ComponentProps<typeof SelectPrimitive.Trigger>,
  VariantProps<typeof selectTriggerVariants> {
  leftIcon?: React.ReactNode
}

function SelectTrigger({
  className,
  variant = "default",
  size = "default",
  leftIcon,
  children,
  ...props
}: SelectTriggerProps) {
  return (
    <SelectPrimitive.Trigger
      data-slot="select-trigger"
      data-variant={variant}
      data-size={size}
      className={cn(selectTriggerVariants({ variant, size }), className)}
      {...props}
    >
      <div className="flex items-center gap-2 flex-1">
        {leftIcon && (
          <span className="flex-shrink-0 text-muted-foreground">
            {leftIcon}
          </span>
        )}
        {children}
      </div>
      <SelectPrimitive.Icon asChild>
        <ChevronDownIcon className="size-4 opacity-50 transition-transform duration-200 data-[state=open]:rotate-180" />
      </SelectPrimitive.Icon>
    </SelectPrimitive.Trigger>
  )
}

interface SelectContentProps extends 
  React.ComponentProps<typeof SelectPrimitive.Content>,
  VariantProps<typeof selectContentVariants> {}

function SelectContent({
  className,
  variant = "default",
  children,
  position = "popper",
  ...props
}: SelectContentProps) {
  // Get variant from parent Select if not explicitly set
  const parentVariant = React.useContext(SelectVariantContext) || variant

  return (
    <SelectPrimitive.Portal>
      <SelectPrimitive.Content
        data-slot="select-content"
        data-variant={parentVariant}
        className={cn(
          selectContentVariants({ variant: parentVariant }),
          position === "popper" &&
            "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",
          className
        )}
        position={position}
        {...props}
      >
        <SelectScrollUpButton variant={parentVariant} />
        <SelectPrimitive.Viewport
          className={cn(
            "p-1",
            position === "popper" &&
              "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]"
          )}
        >
          <SelectVariantProvider value={parentVariant}>
            {children}
          </SelectVariantProvider>
        </SelectPrimitive.Viewport>
        <SelectScrollDownButton variant={parentVariant} />
      </SelectPrimitive.Content>
    </SelectPrimitive.Portal>
  )
}

function SelectLabel({
  className,
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Label>) {
  return (
    <SelectPrimitive.Label
      data-slot="select-label"
      className={cn("text-muted-foreground px-3 py-2 text-xs font-medium tracking-wide uppercase", className)}
      {...props}
    />
  )
}

interface SelectItemProps extends 
  React.ComponentProps<typeof SelectPrimitive.Item>,
  VariantProps<typeof selectItemVariants> {
  icon?: React.ReactNode
}

function SelectItem({
  className,
  variant,
  icon,
  children,
  ...props
}: SelectItemProps) {
  const parentVariant = React.useContext(SelectVariantContext) || variant || "default"

  return (
    <SelectPrimitive.Item
      data-slot="select-item"
      data-variant={parentVariant}
      className={cn(selectItemVariants({ variant: parentVariant }), className)}
      {...props}
    >
      <div className="flex items-center gap-2 flex-1">
        {icon && (
          <span className="flex-shrink-0">
            {icon}
          </span>
        )}
        <SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
      </div>
      <span className="absolute right-2 flex size-3.5 items-center justify-center">
        <SelectPrimitive.ItemIndicator>
          <CheckIcon className="size-4" />
        </SelectPrimitive.ItemIndicator>
      </span>
    </SelectPrimitive.Item>
  )
}

function SelectSeparator({
  className,
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Separator>) {
  return (
    <SelectPrimitive.Separator
      data-slot="select-separator"
      className={cn("bg-border pointer-events-none -mx-1 my-1 h-px", className)}
      {...props}
    />
  )
}

interface SelectScrollButtonProps extends 
  React.ComponentProps<typeof SelectPrimitive.ScrollUpButton> {
  variant?: VariantProps<typeof selectContentVariants>["variant"]
}

function SelectScrollUpButton({
  className,
  variant = "default",
  ...props
}: SelectScrollButtonProps) {
  return (
    <SelectPrimitive.ScrollUpButton
      data-slot="select-scroll-up-button"
      className={cn(
        "flex cursor-default items-center justify-center py-1",
        className
      )}
      {...props}
    >
      <ChevronUpIcon className="size-4" />
    </SelectPrimitive.ScrollUpButton>
  )
}

function SelectScrollDownButton({
  className,
  variant = "default",
  ...props
}: SelectScrollButtonProps) {
  return (
    <SelectPrimitive.ScrollDownButton
      data-slot="select-scroll-down-button"
      className={cn(
        "flex cursor-default items-center justify-center py-1",
        className
      )}
      {...props}
    >
      <ChevronDownIcon className="size-4" />
    </SelectPrimitive.ScrollDownButton>
  )
}

// Context for passing variant down to child components
const SelectVariantContext = React.createContext<string | null>(null)
const SelectVariantProvider = SelectVariantContext.Provider

// Preset Select Components for gun club scenarios
interface ClassificationSelectProps extends Omit<SelectProps, 'children'> {
  placeholder?: string
  onValueChange?: (value: string) => void
  value?: string
}

function ClassificationSelect({ placeholder = "Select classification...", ...props }: ClassificationSelectProps) {
  return (
    <Select variant="premium" {...props}>
      <SelectTrigger>
        <SelectValue placeholder={placeholder} />
      </SelectTrigger>
      <SelectContent>
        <SelectLabel>Shooter Classifications</SelectLabel>
        <SelectItem value="master">Master Class</SelectItem>
        <SelectItem value="aa">AA Class</SelectItem>
        <SelectItem value="a">A Class</SelectItem>
        <SelectItem value="b">B Class</SelectItem>
        <SelectItem value="c">C Class</SelectItem>
        <SelectItem value="d">D Class</SelectItem>
        <SelectItem value="novice">Novice</SelectItem>
      </SelectContent>
    </Select>
  )
}

interface RangeSelectProps extends Omit<SelectProps, 'children'> {
  placeholder?: string
  onValueChange?: (value: string) => void
  value?: string
}

function RangeSelect({ placeholder = "Select range...", ...props }: RangeSelectProps) {
  return (
    <Select {...props}>
      <SelectTrigger>
        <SelectValue placeholder={placeholder} />
      </SelectTrigger>
      <SelectContent>
        <SelectLabel>Available Ranges</SelectLabel>
        <SelectItem value="trap1">Trap Range 1</SelectItem>
        <SelectItem value="trap2">Trap Range 2</SelectItem>
        <SelectItem value="trap3">Trap Range 3</SelectItem>
        <SelectSeparator />
        <SelectItem value="skeet1">Skeet Range 1</SelectItem>
        <SelectItem value="skeet2">Skeet Range 2</SelectItem>
        <SelectSeparator />
        <SelectItem value="sporting">Sporting Clays</SelectItem>
        <SelectItem value="pistol">Pistol Range</SelectItem>
      </SelectContent>
    </Select>
  )
}

export {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectScrollDownButton,
  SelectScrollUpButton,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
  ClassificationSelect,
  RangeSelect,
  selectTriggerVariants,
  selectContentVariants,
  selectItemVariants,
}