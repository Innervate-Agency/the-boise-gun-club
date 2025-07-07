import type { Meta, StoryObj } from '@storybook/react'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Target, Trophy, Users, Calendar, Shield, Star, Award, Clock } from 'lucide-react'

const meta: Meta<typeof Card> = {
  title: 'Fusion/UI/Card',
  component: Card,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: 'Fusion card component following the exact pattern from /test/components with proper CSS variables, gradient headers, and gun club styling.',
      },
    },
  },
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof Card>

export const MembershipCard: Story = {
  render: () => (
    <Card className="w-80 border-0 shadow-lg bg-white dark:bg-[var(--ed-charcoal)] overflow-hidden">
      {/* Stripe-style gradient header */}
      <div className="h-24 bg-gradient-to-r from-lahoma-orange to-[var(--abe-red)] relative">
        <div className="absolute top-4 right-4">
          <Badge className="bg-white/20 text-white border-white/30">
            Most Popular
          </Badge>
        </div>
        <div className="absolute bottom-4 left-6">
          <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center">
            <Trophy className="h-5 w-5 text-white" />
          </div>
        </div>
        <div className="absolute bottom-4 right-6 text-right">
          <div className="text-2xl font-bold text-white">$75</div>
          <div className="text-xs text-white/80">per year</div>
        </div>
      </div>
      
      <CardHeader>
        <CardTitle className="text-xl font-heading font-bold text-[var(--text-primary)]">
          Elite Membership
        </CardTitle>
        <CardDescription className="font-body text-[var(--text-secondary)]">
          Full access to all facilities with member pricing
        </CardDescription>
      </CardHeader>
      
      <CardContent>
        <div className="space-y-2">
          <div className="flex justify-between text-[var(--text-primary)]">
            <span>Shooting Fee</span>
            <span className="font-semibold">$6/round</span>
          </div>
          <div className="flex justify-between text-sm text-[var(--text-secondary)]">
            <span>vs Daily Rate</span>
            <span className="line-through">$8/round</span>
          </div>
        </div>
      </CardContent>
      
      <CardFooter>
        <Button className="w-full">
          🏆 Join Today
        </Button>
      </CardFooter>
    </Card>
  ),
}

export const TournamentCard: Story = {
  render: () => (
    <Card className="w-80 border-0 shadow-lg bg-white dark:bg-[var(--ed-charcoal)] overflow-hidden">
      {/* Tournament gradient header */}
      <div className="h-24 bg-gradient-to-r from-leonard-yellow to-lahoma-orange relative">
        <div className="absolute top-4 right-4">
          <Badge className="bg-white/20 text-white border-white/30">
            Championship
          </Badge>
        </div>
        <div className="absolute bottom-4 left-6">
          <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center">
            <Award className="h-5 w-5 text-white" />
          </div>
        </div>
        <div className="absolute bottom-4 right-6 text-right">
          <div className="text-lg font-bold text-white">Dec 15</div>
          <div className="text-xs text-white/80">2025</div>
        </div>
      </div>
      
      <CardHeader>
        <CardTitle className="text-lg font-heading font-bold text-[var(--text-primary)]">
          Winter Championship
        </CardTitle>
        <CardDescription className="font-body text-[var(--text-secondary)]">
          Elite tournament with $5,000 prize pool and professional scoring.
        </CardDescription>
      </CardHeader>
      
      <CardContent>
        <div className="space-y-3">
          <div className="flex items-center gap-2 text-sm text-[var(--text-primary)]">
            <Calendar className="h-4 w-4 text-leonard-yellow" />
            <span>December 15th at 8:00 AM</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-[var(--text-primary)]">
            <Users className="h-4 w-4 text-leonard-yellow" />
            <span>48/64 registered participants</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-[var(--text-primary)]">
            <Trophy className="h-4 w-4 text-leonard-yellow" />
            <span>Prize pool: $5,000</span>
          </div>
        </div>
      </CardContent>
      
      <CardFooter>
        <Button className="w-full bg-gradient-to-r from-leonard-yellow to-lahoma-orange text-black font-semibold">
          🎯 Register Now
        </Button>
      </CardFooter>
    </Card>
  ),
}

export const EventCard: Story = {
  render: () => (
    <Card className="w-80 border-0 shadow-lg bg-white dark:bg-[var(--ed-charcoal)] overflow-hidden">
      {/* Event gradient header */}
      <div className="h-24 bg-gradient-to-r from-[var(--club-house-lawn-green)] to-[var(--owyhee-green)] relative">
        <div className="absolute top-4 right-4">
          <Badge className="bg-white/20 text-white border-white/30">
            Competition
          </Badge>
        </div>
        <div className="absolute bottom-4 left-6">
          <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center">
            <Target className="h-5 w-5 text-white" />
          </div>
        </div>
        <div className="absolute bottom-4 right-6 text-right">
          <div className="text-lg font-bold text-white">Dec 15</div>
          <div className="text-xs text-white/80">2025</div>
        </div>
      </div>
      
      <CardHeader>
        <CardTitle className="text-lg font-heading font-bold text-[var(--text-primary)]">
          Turkey Shoot Competition
        </CardTitle>
        <CardDescription className="font-body text-[var(--text-secondary)]">
          Traditional turkey shoot competition. Best score takes home the bird.
        </CardDescription>
      </CardHeader>
      
      <CardContent>
        <div className="space-y-3">
          <div className="flex items-center gap-2 text-sm text-[var(--text-primary)]">
            <Calendar className="h-4 w-4 text-[var(--club-house-lawn-green)]" />
            <span>December 15th at 10:00 AM</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-[var(--text-primary)]">
            <Users className="h-4 w-4 text-[var(--club-house-lawn-green)]" />
            <span>85 registered participants</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-[var(--text-primary)]">
            <Clock className="h-4 w-4 text-[var(--club-house-lawn-green)]" />
            <span>Registration closes Dec 10th</span>
          </div>
        </div>
      </CardContent>
      
      <CardFooter>
        <Button variant="outline" className="w-full border-[var(--club-house-lawn-green)] text-[var(--club-house-lawn-green)] hover:bg-[var(--club-house-lawn-green)] hover:text-white">
          📝 Register Now
        </Button>
      </CardFooter>
    </Card>
  ),
}

export const StatCard: Story = {
  render: () => (
    <Card className="w-60 border-0 shadow-lg bg-white dark:bg-[var(--ed-charcoal)] overflow-hidden">
      <div className="h-20 bg-gradient-to-r from-[var(--club-house-roof-blue)] to-[var(--club-house-walk-gray)] relative">
        <div className="absolute bottom-4 left-6">
          <div className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center">
            <Trophy className="h-4 w-4 text-white" />
          </div>
        </div>
      </div>
      
      <CardContent className="p-6 text-center">
        <div className="text-3xl font-bold text-[var(--text-primary)] mb-1 font-heading">
          1,200+
        </div>
        <div className="text-sm text-[var(--text-secondary)] font-body">
          Active Members
        </div>
      </CardContent>
    </Card>
  ),
}

export const SafetyCard: Story = {
  render: () => (
    <Card className="w-80 border-0 shadow-lg bg-white dark:bg-[var(--ed-charcoal)] overflow-hidden">
      <div className="h-24 bg-gradient-to-r from-[var(--abe-red)] to-[var(--brand-red-action)] relative">
        <div className="absolute top-4 right-4">
          <Badge className="bg-white/20 text-white border-white/30">
            Critical
          </Badge>
        </div>
        <div className="absolute bottom-4 left-6">
          <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center">
            <Shield className="h-5 w-5 text-white" />
          </div>
        </div>
      </div>
      
      <CardHeader>
        <CardTitle className="text-lg font-heading font-bold text-[var(--abe-red)]">
          Safety Protocol
        </CardTitle>
        <CardDescription className="font-body text-[var(--text-secondary)]">
          Essential safety rules for all participants
        </CardDescription>
      </CardHeader>
      
      <CardContent>
        <ul className="space-y-2 text-sm text-[var(--text-primary)]">
          <li className="flex items-center gap-2">
            <div className="w-2 h-2 bg-[var(--abe-red)] rounded-full"></div>
            Eye & ear protection required
          </li>
          <li className="flex items-center gap-2">
            <div className="w-2 h-2 bg-[var(--abe-red)] rounded-full"></div>
            Shotgun ammunition only
          </li>
          <li className="flex items-center gap-2">
            <div className="w-2 h-2 bg-[var(--abe-red)] rounded-full"></div>
            Follow range officer commands
          </li>
        </ul>
      </CardContent>
      
      <CardFooter>
        <Button variant="outline" className="w-full border-[var(--abe-red)] text-[var(--abe-red)] hover:bg-[var(--abe-red)] hover:text-white">
          📋 View All Rules
        </Button>
      </CardFooter>
    </Card>
  ),
}

export const GlassCard: Story = {
  render: () => (
    <div className="bg-gradient-to-br from-slate-900 to-slate-800 p-8 rounded-xl">
      <Card className="w-80 border-0 shadow-2xl bg-white/10 backdrop-blur-md overflow-hidden">
        <div className="h-24 bg-gradient-to-r from-white/20 to-white/10 relative backdrop-blur-sm">
          <div className="absolute top-4 right-4">
            <Badge className="bg-white/20 text-white border-white/30">
              Premium
            </Badge>
          </div>
          <div className="absolute bottom-4 left-6">
            <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center">
              <Star className="h-5 w-5 text-white" />
            </div>
          </div>
          <div className="absolute bottom-4 right-6 text-right">
            <div className="text-lg font-bold text-white">Live</div>
            <div className="text-xs text-white/80">status</div>
          </div>
        </div>
        
        <CardHeader>
          <CardTitle className="text-lg font-heading font-bold text-white">
            Range Control
          </CardTitle>
          <CardDescription className="font-body text-white/80">
            Real-time monitoring and safety systems
          </CardDescription>
        </CardHeader>
        
        <CardContent>
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-sm text-white">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span>All ranges operational</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-white">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span>Safety systems active</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-white">
              <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></div>
              <span>Weather monitoring</span>
            </div>
          </div>
        </CardContent>
        
        <CardFooter>
          <Button className="w-full bg-white/20 hover:bg-white/30 text-white border-white/30">
            🎯 View Dashboard
          </Button>
        </CardFooter>
      </Card>
    </div>
  ),
}

export const CompactCard: Story = {
  render: () => (
    <Card className="w-64 border-0 shadow-lg bg-white dark:bg-[var(--ed-charcoal)] overflow-hidden">
      <div className="h-16 bg-gradient-to-r from-leonard-yellow to-lahoma-orange relative">
        <div className="absolute bottom-3 left-4">
          <div className="w-6 h-6 bg-white/20 backdrop-blur-sm rounded-md flex items-center justify-center">
            <Target className="h-3 w-3 text-white" />
          </div>
        </div>
        <div className="absolute bottom-3 right-4 text-right">
          <div className="text-sm font-bold text-white">42</div>
          <div className="text-xs text-white/80">active</div>
        </div>
      </div>
      
      <CardContent className="p-4">
        <div className="text-center">
          <div className="text-lg font-bold text-[var(--text-primary)] font-heading">
            Range Activity
          </div>
          <div className="text-xs text-[var(--text-secondary)] font-body">
            Current shooters
          </div>
        </div>
      </CardContent>
    </Card>
  ),
}