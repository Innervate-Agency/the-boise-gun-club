"use client"

import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { motion } from "framer-motion"

import { cn } from "@/lib/utils"

const tableVariants = cva(
  "w-full caption-bottom text-sm border-separate border-spacing-0 rounded-xl overflow-hidden",
  {
    variants: {
      variant: {
        default: "bg-card border border-border/50",
        premium: "bg-gradient-to-br from-[var(--leonard-yellow)]/5 to-[var(--lahoma-orange)]/5 border border-[var(--leonard-yellow)]/30 shadow-xl",
        glass: "bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl",
        tournament: "bg-gradient-to-br from-[var(--brand-blue)]/5 to-[var(--brand-green)]/5 border border-[var(--brand-blue)]/30 shadow-xl",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

const tableRowVariants = cva(
  "transition-all duration-200 border-b border-border/30",
  {
    variants: {
      variant: {
        default: "hover:bg-muted/50 data-[state=selected]:bg-muted",
        premium: "hover:bg-[var(--leonard-yellow)]/10 data-[state=selected]:bg-[var(--lahoma-orange)]/20",
        glass: "hover:bg-white/10 data-[state=selected]:bg-white/20",
        tournament: "hover:bg-[var(--brand-blue)]/10 data-[state=selected]:bg-[var(--brand-green)]/20",
      },
      position: {
        none: "",
        first: "bg-gradient-to-r from-[var(--leonard-yellow)]/20 to-[var(--lahoma-orange)]/20 hover:from-[var(--leonard-yellow)]/30 hover:to-[var(--lahoma-orange)]/30",
        second: "bg-gradient-to-r from-gray-300/20 to-gray-400/20 hover:from-gray-300/30 hover:to-gray-400/30",
        third: "bg-gradient-to-r from-amber-600/20 to-amber-700/20 hover:from-amber-600/30 hover:to-amber-700/30",
      },
    },
    defaultVariants: {
      variant: "default",
      position: "none",
    },
  }
)

interface TableProps extends React.ComponentProps<"table">, VariantProps<typeof tableVariants> {
  animate?: boolean
}

function Table({ className, variant = "default", animate = false, ...props }: TableProps) {
  return (
    <div
      data-slot="table-container"
      className="relative w-full overflow-x-auto"
    >
      <table
        data-slot="table"
        className={cn(tableVariants({ variant }), className)}
        {...props}
      />
    </div>
  )
}

function TableHeader({ className, ...props }: React.ComponentProps<"thead">) {
  return (
    <thead
      data-slot="table-header"
      className={cn(
        "bg-gradient-to-r from-muted/80 to-muted/60 [&_tr]:border-b-2 [&_tr]:border-border/50",
        className
      )}
      {...props}
    />
  )
}

function TableBody({ className, ...props }: React.ComponentProps<"tbody">) {
  return (
    <tbody
      data-slot="table-body"
      className={cn("[&_tr:last-child]:border-0", className)}
      {...props}
    />
  )
}

function TableFooter({ className, ...props }: React.ComponentProps<"tfoot">) {
  return (
    <tfoot
      data-slot="table-footer"
      className={cn(
        "bg-gradient-to-r from-muted/80 to-muted/60 border-t-2 border-border/50 font-medium [&>tr]:last:border-b-0",
        className
      )}
      {...props}
    />
  )
}

interface TableRowProps extends React.ComponentProps<"tr">, VariantProps<typeof tableRowVariants> {}

function TableRow({ className, variant = "default", position = "none", ...props }: TableRowProps) {
  return (
    <tr
      data-slot="table-row"
      className={cn(tableRowVariants({ variant, position }), className)}
      {...props}
    />
  )
}

function TableHead({ className, ...props }: React.ComponentProps<"th">) {
  return (
    <th
      data-slot="table-head"
      className={cn(
        "text-card-foreground h-12 px-4 text-left align-middle font-heading font-bold text-sm uppercase tracking-wide whitespace-nowrap [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]",
        className
      )}
      {...props}
    />
  )
}

function TableCell({ className, ...props }: React.ComponentProps<"td">) {
  return (
    <td
      data-slot="table-cell"
      className={cn(
        "px-4 py-3 align-middle font-body [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]",
        className
      )}
      {...props}
    />
  )
}

function TableCaption({
  className,
  ...props
}: React.ComponentProps<"caption">) {
  return (
    <caption
      data-slot="table-caption"
      className={cn("text-muted-foreground mt-4 text-sm font-body", className)}
      {...props}
    />
  )
}

// Preset Table Components for gun club scenarios
interface LeaderboardTableProps {
  data: Array<{
    position: number
    name: string
    score: number
    maxScore?: number
    classification?: string
    location?: string
  }>
  variant?: VariantProps<typeof tableVariants>['variant']
}

function LeaderboardTable({ data, variant = "tournament" }: LeaderboardTableProps) {
  const getPositionEmoji = (position: number) => {
    switch (position) {
      case 1: return "🥇"
      case 2: return "🥈"
      case 3: return "🥉"
      default: return position.toString()
    }
  }

  const getPositionVariant = (position: number): VariantProps<typeof tableRowVariants>['position'] => {
    switch (position) {
      case 1: return "first"
      case 2: return "second"
      case 3: return "third"
      default: return "none"
    }
  }

  return (
    <Table variant={variant}>
      <TableHeader>
        <TableRow>
          <TableHead>Position</TableHead>
          <TableHead>Shooter</TableHead>
          <TableHead>Score</TableHead>
          <TableHead>Classification</TableHead>
          <TableHead>Location</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {data.map((shooter) => (
          <TableRow 
            key={shooter.name} 
            variant={variant}
            position={getPositionVariant(shooter.position)}
          >
            <TableCell className="font-bold">
              <div className="flex items-center gap-2">
                <span className="text-lg">{getPositionEmoji(shooter.position)}</span>
                {shooter.position > 3 && shooter.position}
              </div>
            </TableCell>
            <TableCell className="font-medium">{shooter.name}</TableCell>
            <TableCell>
              <span className="font-mono font-bold">
                {shooter.score}/{shooter.maxScore || 100}
              </span>
            </TableCell>
            <TableCell>
              <span className="px-2 py-1 bg-muted rounded text-xs font-medium">
                {shooter.classification || 'AA'}
              </span>
            </TableCell>
            <TableCell className="text-muted-foreground">{shooter.location || 'Boise, ID'}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}

function ScoreTable({ 
  scores, 
  variant = "premium" 
}: { 
  scores: Array<{ round: number, trap: number, skeet: number, sporting: number }>,
  variant?: VariantProps<typeof tableVariants>['variant']
}) {
  return (
    <Table variant={variant}>
      <TableHeader>
        <TableRow>
          <TableHead>Round</TableHead>
          <TableHead>Trap</TableHead>
          <TableHead>Skeet</TableHead>
          <TableHead>Sporting Clays</TableHead>
          <TableHead>Total</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {scores.map((score) => {
          const total = score.trap + score.skeet + score.sporting
          return (
            <TableRow key={score.round} variant={variant}>
              <TableCell className="font-bold">Round {score.round}</TableCell>
              <TableCell className="font-mono">{score.trap}/25</TableCell>
              <TableCell className="font-mono">{score.skeet}/25</TableCell>
              <TableCell className="font-mono">{score.sporting}/100</TableCell>
              <TableCell className="font-mono font-bold">{total}</TableCell>
            </TableRow>
          )
        })}
      </TableBody>
    </Table>
  )
}

export {
  Table,
  TableHeader,
  TableBody,
  TableFooter,
  TableHead,
  TableRow,
  TableCell,
  TableCaption,
  LeaderboardTable,
  ScoreTable,
  type LeaderboardTableProps,
  type TableProps,
  type TableRowProps
}
