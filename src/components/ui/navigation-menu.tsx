import * as React from "react"
import * as NavigationMenuPrimitive from "@radix-ui/react-navigation-menu"
import { cva, type VariantProps } from "class-variance-authority"
import { ChevronDownIcon, Home, Trophy, Calendar, Target, Users, Shield } from "lucide-react"
import { motion } from "framer-motion"

import { cn } from "@/lib/utils"

const navigationMenuVariants = cva(
  "group/navigation-menu relative flex max-w-max flex-1 items-center justify-center transition-all duration-300",
  {
    variants: {
      variant: {
        default: "",
        premium: "bg-gradient-to-r from-[var(--leonard-yellow)]/5 to-[var(--lahoma-orange)]/5 backdrop-blur-sm rounded-xl p-2 shadow-lg",
        glass: "bg-[var(--card)]/5 backdrop-blur-md rounded-xl p-2 shadow-xl",
        tournament: "bg-gradient-to-r from-slate-900/50 to-slate-800/50 backdrop-blur-sm rounded-xl p-3 shadow-2xl",
        minimal: "border-b border-border pb-2",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

interface NavigationMenuProps extends React.ComponentProps<typeof NavigationMenuPrimitive.Root> {
  viewport?: boolean
  variant?: VariantProps<typeof navigationMenuVariants>["variant"]
}

function NavigationMenu({
  className,
  children,
  viewport = true,
  variant = "default",
  ...props
}: NavigationMenuProps) {
  return (
    <NavigationMenuPrimitive.Root
      data-slot="navigation-menu"
      data-viewport={viewport}
      className={cn(navigationMenuVariants({ variant }), className)}
      {...props}
    >
      {children}
      {viewport && <NavigationMenuViewport variant={variant} />}
    </NavigationMenuPrimitive.Root>
  )
}

const navigationMenuListVariants = cva(
  "group flex flex-1 list-none items-center justify-center transition-all duration-300",
  {
    variants: {
      variant: {
        default: "gap-1",
        premium: "gap-2",
        glass: "gap-2",
        tournament: "gap-3",
        minimal: "gap-1",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

interface NavigationMenuListProps extends React.ComponentProps<typeof NavigationMenuPrimitive.List> {
  variant?: VariantProps<typeof navigationMenuListVariants>["variant"]
}

function NavigationMenuList({
  className,
  variant = "default",
  ...props
}: NavigationMenuListProps) {
  return (
    <NavigationMenuPrimitive.List
      data-slot="navigation-menu-list"
      className={cn(navigationMenuListVariants({ variant }), className)}
      {...props}
    />
  )
}

function NavigationMenuItem({
  className,
  ...props
}: React.ComponentProps<typeof NavigationMenuPrimitive.Item>) {
  return (
    <NavigationMenuPrimitive.Item
      data-slot="navigation-menu-item"
      className={cn("relative", className)}
      {...props}
    />
  )
}

const navigationMenuTriggerStyle = cva(
  "group inline-flex w-max items-center justify-center font-medium disabled:pointer-events-none disabled:opacity-50 outline-none transition-all duration-300",
  {
    variants: {
      variant: {
        default: "h-9 rounded-md bg-background px-4 py-2 text-sm hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground data-[state=open]:hover:bg-accent data-[state=open]:text-accent-foreground data-[state=open]:focus:bg-accent data-[state=open]:bg-accent/50 focus-visible:ring-ring/50 focus-visible:ring-[3px] focus-visible:outline-1",
        premium: "h-10 rounded-lg px-5 py-2.5 text-sm font-semibold hover:bg-gradient-to-r hover:from-[var(--leonard-yellow)]/20 hover:to-[var(--lahoma-orange)]/20 data-[state=open]:bg-gradient-to-r data-[state=open]:from-[var(--leonard-yellow)] data-[state=open]:to-[var(--lahoma-orange)] data-[state=open]:text-[var(--text-primary)] transform hover:scale-105 active:scale-95",
        glass: "h-10 rounded-lg px-5 py-2.5 text-sm font-medium hover:bg-[var(--card)]/20 data-[state=open]:bg-[var(--card)]/30 data-[state=open]:backdrop-blur-sm transform hover:scale-105 active:scale-95",
        tournament: "h-12 rounded-lg px-6 py-3 text-sm font-bold hover:bg-gradient-to-r hover:from-[var(--leonard-yellow)]/30 hover:to-[var(--lahoma-orange)]/30 data-[state=open]:bg-gradient-to-r data-[state=open]:from-[var(--leonard-yellow)] data-[state=open]:to-[var(--lahoma-orange)] data-[state=open]:text-[var(--text-primary)] transform hover:scale-105 active:scale-95",
        minimal: "h-9 rounded-none px-4 py-2 text-sm hover:text-[var(--leonard-yellow)] data-[state=open]:text-[var(--leonard-yellow)] data-[state=open]:border-b-2 data-[state=open]:border-[var(--leonard-yellow)]",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

interface NavigationMenuTriggerProps extends React.ComponentProps<typeof NavigationMenuPrimitive.Trigger> {
  variant?: VariantProps<typeof navigationMenuTriggerStyle>["variant"]
}

function NavigationMenuTrigger({
  className,
  children,
  variant = "default",
  ...props
}: NavigationMenuTriggerProps) {
  return (
    <NavigationMenuPrimitive.Trigger
      data-slot="navigation-menu-trigger"
      className={cn(navigationMenuTriggerStyle({ variant }), "group", className)}
      {...props}
    >
      {children}{" "}
      <ChevronDownIcon
        className="relative top-[1px] ml-1 size-3 transition duration-300 group-data-[state=open]:rotate-180"
        aria-hidden="true"
      />
    </NavigationMenuPrimitive.Trigger>
  )
}

function NavigationMenuContent({
  className,
  ...props
}: React.ComponentProps<typeof NavigationMenuPrimitive.Content>) {
  return (
    <NavigationMenuPrimitive.Content
      data-slot="navigation-menu-content"
      className={cn(
        "data-[motion^=from-]:animate-in data-[motion^=to-]:animate-out data-[motion^=from-]:fade-in data-[motion^=to-]:fade-out data-[motion=from-end]:slide-in-from-right-52 data-[motion=from-start]:slide-in-from-left-52 data-[motion=to-end]:slide-out-to-right-52 data-[motion=to-start]:slide-out-to-left-52 top-0 left-0 w-full p-2 pr-2.5 md:absolute md:w-auto",
        "group-data-[viewport=false]/navigation-menu:bg-popover group-data-[viewport=false]/navigation-menu:text-popover-foreground group-data-[viewport=false]/navigation-menu:data-[state=open]:animate-in group-data-[viewport=false]/navigation-menu:data-[state=closed]:animate-out group-data-[viewport=false]/navigation-menu:data-[state=closed]:zoom-out-95 group-data-[viewport=false]/navigation-menu:data-[state=open]:zoom-in-95 group-data-[viewport=false]/navigation-menu:data-[state=open]:fade-in-0 group-data-[viewport=false]/navigation-menu:data-[state=closed]:fade-out-0 group-data-[viewport=false]/navigation-menu:top-full group-data-[viewport=false]/navigation-menu:mt-1.5 group-data-[viewport=false]/navigation-menu:overflow-hidden group-data-[viewport=false]/navigation-menu:rounded-md group-data-[viewport=false]/navigation-menu:border group-data-[viewport=false]/navigation-menu:shadow group-data-[viewport=false]/navigation-menu:duration-200 **:data-[slot=navigation-menu-link]:focus:ring-0 **:data-[slot=navigation-menu-link]:focus:outline-none",
        className
      )}
      {...props}
    />
  )
}

const navigationMenuViewportVariants = cva(
  "origin-top-center data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-90 relative mt-1.5 h-[var(--radix-navigation-menu-viewport-height)] w-full overflow-hidden border shadow md:w-[var(--radix-navigation-menu-viewport-width)]",
  {
    variants: {
      variant: {
        default: "bg-popover text-popover-foreground rounded-md",
        premium: "bg-gradient-to-b from-white/95 to-white/90 dark:from-slate-900/95 dark:to-slate-800/90 backdrop-blur-md border-[var(--leonard-yellow)]/20 rounded-xl shadow-2xl",
        glass: "bg-[var(--card)]/10 backdrop-blur-md border-white/20 rounded-xl shadow-2xl text-[var(--card)]",
        tournament: "bg-gradient-to-b from-slate-900/95 to-slate-800/95 backdrop-blur-md border-[var(--leonard-yellow)]/30 rounded-xl shadow-2xl text-[var(--card)]",
        minimal: "bg-popover text-popover-foreground rounded-md",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

interface NavigationMenuViewportProps extends React.ComponentProps<typeof NavigationMenuPrimitive.Viewport> {
  variant?: VariantProps<typeof navigationMenuViewportVariants>["variant"]
}

function NavigationMenuViewport({
  className,
  variant = "default",
  ...props
}: NavigationMenuViewportProps) {
  return (
    <div
      className={cn(
        "absolute top-full left-0 isolate z-50 flex justify-center"
      )}
    >
      <NavigationMenuPrimitive.Viewport
        data-slot="navigation-menu-viewport"
        className={cn(navigationMenuViewportVariants({ variant }), className)}
        {...props}
      />
    </div>
  )
}

const navigationMenuLinkVariants = cva(
  "flex flex-col gap-1 text-sm transition-all outline-none [&_svg:not([class*='size-'])]:size-4",
  {
    variants: {
      variant: {
        default: "data-[active=true]:focus:bg-accent data-[active=true]:hover:bg-accent data-[active=true]:bg-accent/50 data-[active=true]:text-accent-foreground hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus-visible:ring-ring/50 [&_svg:not([class*='text-'])]:text-muted-foreground rounded-sm p-2 focus-visible:ring-[3px] focus-visible:outline-1",
        premium: "data-[active=true]:bg-gradient-to-r data-[active=true]:from-[var(--leonard-yellow)]/20 data-[active=true]:to-[var(--lahoma-orange)]/20 hover:bg-gradient-to-r hover:from-[var(--leonard-yellow)]/10 hover:to-[var(--lahoma-orange)]/10 focus:bg-gradient-to-r focus:from-[var(--leonard-yellow)]/20 focus:to-[var(--lahoma-orange)]/20 rounded-lg p-3 font-medium transform hover:scale-105 active:scale-95",
        glass: "data-[active=true]:bg-[var(--card)]/30 hover:bg-[var(--card)]/20 focus:bg-[var(--card)]/30 rounded-lg p-3 font-medium transform hover:scale-105 active:scale-95",
        tournament: "data-[active=true]:bg-gradient-to-r data-[active=true]:from-[var(--leonard-yellow)]/30 data-[active=true]:to-[var(--lahoma-orange)]/30 hover:bg-gradient-to-r hover:from-[var(--leonard-yellow)]/20 hover:to-[var(--lahoma-orange)]/20 focus:bg-gradient-to-r focus:from-[var(--leonard-yellow)]/30 focus:to-[var(--lahoma-orange)]/30 rounded-lg p-3 font-semibold transform hover:scale-105 active:scale-95",
        minimal: "data-[active=true]:text-[var(--leonard-yellow)] hover:text-[var(--leonard-yellow)] focus:text-[var(--leonard-yellow)] rounded-none p-2",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

interface NavigationMenuLinkProps extends React.ComponentProps<typeof NavigationMenuPrimitive.Link> {
  variant?: VariantProps<typeof navigationMenuLinkVariants>["variant"]
}

function NavigationMenuLink({
  className,
  variant = "default",
  ...props
}: NavigationMenuLinkProps) {
  return (
    <NavigationMenuPrimitive.Link
      data-slot="navigation-menu-link"
      className={cn(navigationMenuLinkVariants({ variant }), className)}
      {...props}
    />
  )
}

function NavigationMenuIndicator({
  className,
  ...props
}: React.ComponentProps<typeof NavigationMenuPrimitive.Indicator>) {
  return (
    <NavigationMenuPrimitive.Indicator
      data-slot="navigation-menu-indicator"
      className={cn(
        "data-[state=visible]:animate-in data-[state=hidden]:animate-out data-[state=hidden]:fade-out data-[state=visible]:fade-in top-full z-[1] flex h-1.5 items-end justify-center overflow-hidden",
        className
      )}
      {...props}
    >
      <div className="bg-border relative top-[60%] h-2 w-2 rotate-45 rounded-tl-sm shadow-md" />
    </NavigationMenuPrimitive.Indicator>
  )
}

// Gun Club Preset Components
interface SiteNavigationProps extends NavigationMenuProps {
  section?: "main" | "admin" | "tournament" | "member"
}

function SiteNavigation({ section = "main", ...props }: SiteNavigationProps) {
  const getVariant = () => {
    switch (section) {
      case "main": return "default"
      case "admin": return "tournament"
      case "tournament": return "premium"
      case "member": return "glass"
      default: return "default"
    }
  }

  return <NavigationMenu variant={getVariant()} {...props} />
}

function MainNavigation(props: NavigationMenuProps) {
  return <NavigationMenu variant="default" {...props} />
}

function AdminNavigation(props: NavigationMenuProps) {
  return <NavigationMenu variant="tournament" {...props} />
}

function TournamentNavigation(props: NavigationMenuProps) {
  return <NavigationMenu variant="premium" {...props} />
}

// Preset navigation items with icons
function HomeNavigationItem({ children, ...props }: React.ComponentProps<"li">) {
  return (
    <NavigationMenuItem {...props}>
      <Home className="size-4" />
      {children}
    </NavigationMenuItem>
  )
}

function TournamentNavigationItem({ children, ...props }: React.ComponentProps<"li">) {
  return (
    <NavigationMenuItem {...props}>
      <Trophy className="size-4" />
      {children}
    </NavigationMenuItem>
  )
}

function ScheduleNavigationItem({ children, ...props }: React.ComponentProps<"li">) {
  return (
    <NavigationMenuItem {...props}>
      <Calendar className="size-4" />
      {children}
    </NavigationMenuItem>
  )
}

function MembershipNavigationItem({ children, ...props }: React.ComponentProps<"li">) {
  return (
    <NavigationMenuItem {...props}>
      <Users className="size-4" />
      {children}
    </NavigationMenuItem>
  )
}

function SafetyNavigationItem({ children, ...props }: React.ComponentProps<"li">) {
  return (
    <NavigationMenuItem {...props}>
      <Shield className="size-4" />
      {children}
    </NavigationMenuItem>
  )
}

function RangeNavigationItem({ children, ...props }: React.ComponentProps<"li">) {
  return (
    <NavigationMenuItem {...props}>
      <Target className="size-4" />
      {children}
    </NavigationMenuItem>
  )
}

export {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuContent,
  NavigationMenuTrigger,
  NavigationMenuLink,
  NavigationMenuIndicator,
  NavigationMenuViewport,
  SiteNavigation,
  MainNavigation,
  AdminNavigation,
  TournamentNavigation,
  HomeNavigationItem,
  TournamentNavigationItem,
  ScheduleNavigationItem,
  MembershipNavigationItem,
  SafetyNavigationItem,
  RangeNavigationItem,
  navigationMenuTriggerStyle,
  navigationMenuVariants,
  navigationMenuListVariants,
  navigationMenuViewportVariants,
  navigationMenuLinkVariants,
}
