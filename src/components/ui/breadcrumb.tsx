import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { ChevronRight, MoreHorizontal, Home, Target, Trophy, Calendar } from "lucide-react"
import { motion } from "framer-motion"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const breadcrumbVariants = cva(
  "transition-fast relative overflow-hidden",
  {
    variants: {
      variant: {
        default: "",
        premium: "bg-gradient-to-r from-leonard-yellow/5 to-lahoma-orange/5 backdrop-blur-sm border border-leonard-yellow/10 rounded-lg p-3 shadow-md hover:shadow-lg group",
        elite: "bg-gradient-to-r from-leonard-yellow/10 via-lahoma-orange/10 to-leonard-yellow/10 bg-[length:200%_100%] backdrop-blur-sm border-2 border-leonard-yellow/20 rounded-lg p-3 shadow-lg hover:shadow-xl animate-shimmer group",
        glass: "border-white/20 bg-card/10 backdrop-blur-md text-card hover:bg-card/20 hover:border-white/30 dark:border-white/10 dark:bg-card/5 dark:hover:bg-card/10 rounded-lg p-3 shadow-lg",
        minimal: "border-b border-border pb-2",
      },
      size: {
        sm: "text-xs gap-1",
        md: "text-sm gap-1.5",
        lg: "text-base gap-2",
        xl: "text-lg gap-2.5",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "md",
    },
  }
)

const breadcrumbListVariants = cva(
  "flex flex-wrap items-center break-words transition-fast",
  {
    variants: {
      variant: {
        default: "text-muted-foreground",
        premium: "text-foreground",
        elite: "text-foreground font-semibold",
        glass: "text-card",
        minimal: "text-muted-foreground",
      },
      size: {
        sm: "gap-1 text-xs",
        md: "gap-1.5 text-sm sm:gap-2.5",
        lg: "gap-2 text-base sm:gap-3",
        xl: "gap-2.5 text-lg sm:gap-3.5",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "md",
    },
  }
)

const breadcrumbLinkVariants = cva(
  "transition-all duration-300 hover:scale-105 active:scale-95",
  {
    variants: {
      variant: {
        default: "hover:text-foreground",
        premium: "hover:text-[var(--color-leonard-yellow)] hover:drop-shadow-sm",
        glass: "hover:text-[var(--card)] hover:drop-shadow-sm",
        tournament: "hover:text-[var(--color-leonard-yellow)] hover:drop-shadow-md font-medium",
        minimal: "hover:text-foreground",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

const breadcrumbPageVariants = cva(
  "font-normal transition-all duration-300",
  {
    variants: {
      variant: {
        default: "text-foreground",
        premium: "text-leonard-yellow font-semibold drop-shadow-sm",
        elite: "text-leonard-yellow font-bold drop-shadow-md",
        glass: "text-card font-medium drop-shadow-sm",
        minimal: "text-foreground",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

interface BreadcrumbProps extends React.ComponentProps<"nav"> {
  variant?: VariantProps<typeof breadcrumbVariants>["variant"]
  size?: VariantProps<typeof breadcrumbVariants>["size"]
}

function Breadcrumb({ className, variant = "default", size = "md", children, ...props }: BreadcrumbProps) {
  return (
    <nav 
      aria-label="breadcrumb" 
      data-slot="breadcrumb" 
      className={cn(breadcrumbVariants({ variant, size }), className)}
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
    </nav>
  )
}

interface BreadcrumbListProps extends React.ComponentProps<"ol"> {
  variant?: VariantProps<typeof breadcrumbListVariants>["variant"]
  size?: VariantProps<typeof breadcrumbListVariants>["size"]
}

function BreadcrumbList({ className, variant = "default", size = "md", ...props }: BreadcrumbListProps) {
  return (
    <ol
      data-slot="breadcrumb-list"
      className={cn(breadcrumbListVariants({ variant, size }), className)}
      {...props}
    />
  )
}

function BreadcrumbItem({ className, ...props }: React.ComponentProps<"li">) {
  return (
    <li
      data-slot="breadcrumb-item"
      className={cn("inline-flex items-center gap-1.5", className)}
      {...props}
    />
  )
}

interface BreadcrumbLinkProps extends React.ComponentProps<"a"> {
  asChild?: boolean
  variant?: VariantProps<typeof breadcrumbLinkVariants>["variant"]
}

function BreadcrumbLink({
  asChild,
  className,
  variant = "default",
  ...props
}: BreadcrumbLinkProps) {
  const Comp = asChild ? Slot : "a"

  return (
    <Comp
      data-slot="breadcrumb-link"
      className={cn(breadcrumbLinkVariants({ variant }), className)}
      {...props}
    />
  )
}

interface BreadcrumbPageProps extends React.ComponentProps<"span"> {
  variant?: VariantProps<typeof breadcrumbPageVariants>["variant"]
}

function BreadcrumbPage({ className, variant = "default", ...props }: BreadcrumbPageProps) {
  return (
    <span
      data-slot="breadcrumb-page"
      role="link"
      aria-disabled="true"
      aria-current="page"
      className={cn(breadcrumbPageVariants({ variant }), className)}
      {...props}
    />
  )
}

interface BreadcrumbSeparatorProps extends React.ComponentProps<"li"> {
  variant?: VariantProps<typeof breadcrumbVariants>["variant"]
}

function BreadcrumbSeparator({
  children,
  className,
  variant = "default",
  ...props
}: BreadcrumbSeparatorProps) {
  const getSeparatorColor = () => {
    switch (variant) {
      case "premium": return "text-[var(--color-leonard-yellow)]/60"
      case "glass": return "text-[var(--card)]/40"
      case "tournament": return "text-[var(--color-leonard-yellow)]/80"
      default: return "text-muted-foreground"
    }
  }

  return (
    <li
      data-slot="breadcrumb-separator"
      role="presentation"
      aria-hidden="true"
      className={cn("[&>svg]:size-3.5 transition-all duration-300", getSeparatorColor(), className)}
      {...props}
    >
      {children ?? <ChevronRight />}
    </li>
  )
}

function BreadcrumbEllipsis({
  className,
  ...props
}: React.ComponentProps<"span">) {
  return (
    <span
      data-slot="breadcrumb-ellipsis"
      role="presentation"
      aria-hidden="true"
      className={cn("flex size-9 items-center justify-center", className)}
      {...props}
    >
      <MoreHorizontal className="size-4" />
      <span className="sr-only">More</span>
    </span>
  )
}

// Gun Club Preset Components
interface SectionBreadcrumbProps extends BreadcrumbProps {
  section?: "tournament" | "schedule" | "membership" | "rules"
}

function SectionBreadcrumb({ section = "tournament", ...props }: SectionBreadcrumbProps) {
  const getVariant = () => {
    switch (section) {
      case "tournament": return "tournament"
      case "schedule": return "premium"
      case "membership": return "glass"
      case "rules": return "minimal"
      default: return "default"
    }
  }

  return <Breadcrumb variant={getVariant()} {...props} />
}

function TournamentBreadcrumb(props: BreadcrumbProps) {
  return <Breadcrumb variant="tournament" size="lg" {...props} />
}

function AdminBreadcrumb(props: BreadcrumbProps) {
  return <Breadcrumb variant="premium" size="md" {...props} />
}

// Preset breadcrumb items with icons
function HomeBreadcrumbItem({ children, ...props }: React.ComponentProps<"li">) {
  return (
    <BreadcrumbItem {...props}>
      <Home className="size-4" />
      {children}
    </BreadcrumbItem>
  )
}

function TournamentBreadcrumbItem({ children, ...props }: React.ComponentProps<"li">) {
  return (
    <BreadcrumbItem {...props}>
      <Trophy className="size-4" />
      {children}
    </BreadcrumbItem>
  )
}

function ScheduleBreadcrumbItem({ children, ...props }: React.ComponentProps<"li">) {
  return (
    <BreadcrumbItem {...props}>
      <Calendar className="size-4" />
      {children}
    </BreadcrumbItem>
  )
}

function RangeBreadcrumbItem({ children, ...props }: React.ComponentProps<"li">) {
  return (
    <BreadcrumbItem {...props}>
      <Target className="size-4" />
      {children}
    </BreadcrumbItem>
  )
}

export {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
  BreadcrumbEllipsis,
  SectionBreadcrumb,
  TournamentBreadcrumb,
  AdminBreadcrumb,
  HomeBreadcrumbItem,
  TournamentBreadcrumbItem,
  ScheduleBreadcrumbItem,
  RangeBreadcrumbItem,
  breadcrumbVariants,
  breadcrumbListVariants,
  breadcrumbLinkVariants,
  breadcrumbPageVariants,
}
