"use client"

import * as React from "react"
import * as TabsPrimitive from "@radix-ui/react-tabs"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const tabsListVariants = cva(
  "inline-flex items-center justify-center p-1 transition-fast relative overflow-hidden",
  {
    variants: {
      variant: {
        default: "bg-muted text-muted-foreground rounded-lg h-9",
        premium: "bg-gradient-to-r from-leonard-yellow/10 to-lahoma-orange/10 backdrop-blur-sm border border-leonard-yellow/20 rounded-xl h-10 shadow-md hover:shadow-lg group",
        elite: "bg-gradient-to-r from-leonard-yellow/15 via-lahoma-orange/15 to-leonard-yellow/15 bg-[length:200%_100%] backdrop-blur-sm border-2 border-leonard-yellow/30 rounded-xl h-10 shadow-lg hover:shadow-xl animate-shimmer group",
        glass: "border-white/20 bg-card/10 backdrop-blur-md text-card hover:bg-card/20 hover:border-white/30 dark:border-white/10 dark:bg-card/5 dark:hover:bg-card/10 rounded-xl h-10 shadow-lg",
        minimal: "bg-transparent border-b border-border h-auto p-0",
      },
      size: {
        sm: "h-8 text-xs",
        md: "h-9 text-sm",
        lg: "h-10 text-base",
        xl: "h-12 text-lg",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "md",
    },
  }
)

const tabsTriggerVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap font-medium transition-fast disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "data-[state=active]:bg-background dark:data-[state=active]:text-foreground focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:outline-ring dark:data-[state=active]:border-input dark:data-[state=active]:bg-input/30 text-foreground dark:text-muted-foreground h-[calc(100%-1px)] flex-1 gap-1.5 rounded-md border border-transparent px-2 py-1 text-sm focus-visible:ring-[3px] focus-visible:outline-1 data-[state=active]:shadow-sm [&_svg:not([class*='size-'])]:size-4",
        premium: "data-[state=active]:bg-gradient-to-r data-[state=active]:from-leonard-yellow data-[state=active]:to-lahoma-orange data-[state=active]:text-black data-[state=active]:shadow-lg hover:bg-card/10 flex-1 gap-2 rounded-lg px-4 py-2 text-sm font-semibold transition-smooth data-[state=active]:scale-[1.05] [&_svg:not([class*='size-'])]:size-4",
        elite: "data-[state=active]:bg-gradient-to-r data-[state=active]:from-leonard-yellow data-[state=active]:via-lahoma-orange data-[state=active]:to-leonard-yellow data-[state=active]:text-black data-[state=active]:shadow-xl hover:bg-card/10 flex-1 gap-2 rounded-lg px-4 py-2 text-sm font-semibold transition-smooth data-[state=active]:scale-[1.05] [&_svg:not([class*='size-'])]:size-4",
        glass: "data-[state=active]:bg-card/20 data-[state=active]:backdrop-blur-sm data-[state=active]:border-white/30 data-[state=active]:shadow-lg hover:bg-card/10 flex-1 gap-2 rounded-lg border border-transparent px-4 py-2 text-sm font-medium transition-fast [&_svg:not([class*='size-'])]:size-4",
        minimal: "data-[state=active]:text-leonard-yellow data-[state=active]:border-b-2 data-[state=active]:border-leonard-yellow hover:text-lahoma-orange px-4 py-2 text-sm font-medium transition-fast rounded-none border-b-2 border-transparent [&_svg:not([class*='size-'])]:size-4",
      },
      size: {
        sm: "h-7 px-2 text-xs [&_svg:not([class*='size-'])]:size-3",
        md: "h-8 px-3 text-sm [&_svg:not([class*='size-'])]:size-4",
        lg: "h-9 px-4 text-base [&_svg:not([class*='size-'])]:size-4",
        xl: "h-10 px-6 text-lg [&_svg:not([class*='size-'])]:size-5",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "md",
    },
  }
)

interface TabsProps extends React.ComponentProps<typeof TabsPrimitive.Root> {
  variant?: VariantProps<typeof tabsListVariants>["variant"]
  size?: VariantProps<typeof tabsListVariants>["size"]
}

function Tabs({
  className,
  variant,
  size,
  ...props
}: TabsProps) {
  return (
    <TabsPrimitive.Root
      data-slot="tabs"
      className={cn("flex flex-col gap-2", className)}
      {...props}
    />
  )
}

interface TabsListProps extends React.ComponentProps<typeof TabsPrimitive.List> {
  variant?: VariantProps<typeof tabsListVariants>["variant"]
  size?: VariantProps<typeof tabsListVariants>["size"]
}

function TabsList({
  className,
  variant = "default",
  size = "md",
  children,
  ...props
}: TabsListProps) {
  return (
    <TabsPrimitive.List
      data-slot="tabs-list"
      className={cn(tabsListVariants({ variant, size }), className)}
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
    </TabsPrimitive.List>
  )
}

interface TabsTriggerProps extends React.ComponentProps<typeof TabsPrimitive.Trigger> {
  variant?: VariantProps<typeof tabsTriggerVariants>["variant"]
  size?: VariantProps<typeof tabsTriggerVariants>["size"]
}

function TabsTrigger({
  className,
  variant = "default",
  size = "md",
  ...props
}: TabsTriggerProps) {
  return (
    <TabsPrimitive.Trigger
      data-slot="tabs-trigger"
      className={cn(tabsTriggerVariants({ variant, size }), className)}
      {...props}
    />
  )
}

function TabsContent({
  className,
  ...props
}: React.ComponentProps<typeof TabsPrimitive.Content>) {
  return (
    <TabsPrimitive.Content
      data-slot="tabs-content"
      className={cn("flex-1 outline-none", className)}
      {...props}
    />
  )
}

// Gun Club Preset Components
interface EventTabsProps extends TabsProps {
  eventType?: "tournament" | "league" | "practice"
}

function EventTabs({ eventType = "tournament", ...props }: EventTabsProps) {
  const getVariant = () => {
    switch (eventType) {
      case "tournament": return "tournament"
      case "league": return "premium"
      case "practice": return "glass"
      default: return "default"
    }
  }

  return <Tabs variant={getVariant()} {...props} />
}

function ScoreboardTabs(props: TabsProps) {
  return <Tabs variant="tournament" size="lg" {...props} />
}

function ScheduleTabs(props: TabsProps) {
  return <Tabs variant="premium" size="md" {...props} />
}

export { 
  Tabs, 
  TabsList, 
  TabsTrigger, 
  TabsContent,
  EventTabs,
  ScoreboardTabs,
  ScheduleTabs,
  tabsListVariants,
  tabsTriggerVariants 
}
