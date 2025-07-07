"use client"

import * as React from "react"
import * as TabsPrimitive from "@radix-ui/react-tabs"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const tabsListVariants = cva(
  "inline-flex items-center justify-center p-1 transition-all duration-300",
  {
    variants: {
      variant: {
        default: "bg-muted text-muted-foreground rounded-lg h-9",
        premium: "bg-gradient-to-r from-leonard-yellow/10 to-lahoma-orange/10 backdrop-blur-sm border border-leonard-yellow/20 rounded-xl h-10 shadow-lg",
        glass: "bg-white/5 backdrop-blur-md border border-white/10 rounded-xl h-10 shadow-xl",
        tournament: "bg-gradient-to-r from-slate-900/90 to-slate-800/90 backdrop-blur-sm border border-leonard-yellow/30 rounded-xl h-12 shadow-2xl",
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
  "inline-flex items-center justify-center whitespace-nowrap font-medium transition-all duration-300 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "data-[state=active]:bg-background dark:data-[state=active]:text-foreground focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:outline-ring dark:data-[state=active]:border-input dark:data-[state=active]:bg-input/30 text-foreground dark:text-muted-foreground h-[calc(100%-1px)] flex-1 gap-1.5 rounded-md border border-transparent px-2 py-1 text-sm focus-visible:ring-[3px] focus-visible:outline-1 data-[state=active]:shadow-sm [&_svg:not([class*='size-'])]:size-4",
        premium: "data-[state=active]:bg-gradient-to-r data-[state=active]:from-leonard-yellow data-[state=active]:to-lahoma-orange data-[state=active]:text-black data-[state=active]:shadow-lg hover:bg-white/10 flex-1 gap-2 rounded-lg px-4 py-2 text-sm font-semibold transition-all duration-300 data-[state=active]:transform data-[state=active]:scale-105 [&_svg:not([class*='size-'])]:size-4",
        glass: "data-[state=active]:bg-white/20 data-[state=active]:backdrop-blur-sm data-[state=active]:border-white/30 data-[state=active]:shadow-lg hover:bg-white/10 flex-1 gap-2 rounded-lg border border-transparent px-4 py-2 text-sm font-medium transition-all duration-300 [&_svg:not([class*='size-'])]:size-4",
        tournament: "data-[state=active]:bg-gradient-to-r data-[state=active]:from-leonard-yellow data-[state=active]:to-lahoma-orange data-[state=active]:text-black data-[state=active]:shadow-xl hover:bg-white/5 flex-1 gap-2 rounded-lg px-6 py-3 text-sm font-bold transition-all duration-300 data-[state=active]:transform data-[state=active]:scale-105 [&_svg:not([class*='size-'])]:size-5",
        minimal: "data-[state=active]:text-leonard-yellow data-[state=active]:border-b-2 data-[state=active]:border-leonard-yellow hover:text-lahoma-orange px-4 py-2 text-sm font-medium transition-all duration-300 rounded-none border-b-2 border-transparent [&_svg:not([class*='size-'])]:size-4",
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
  ...props
}: TabsListProps) {
  return (
    <TabsPrimitive.List
      data-slot="tabs-list"
      className={cn(tabsListVariants({ variant, size }), className)}
      {...props}
    />
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
