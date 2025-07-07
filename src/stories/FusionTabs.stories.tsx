import type { Meta, StoryObj } from '@storybook/react'
import { Calendar, Trophy, Target, Users, Settings } from 'lucide-react'

import { 
  Tabs, 
  TabsList, 
  TabsTrigger, 
  TabsContent,
  EventTabs,
  ScoreboardTabs,
  ScheduleTabs
} from '@/components/ui/tabs'

const meta: Meta<typeof Tabs> = {
  title: 'Fusion/Navigation/Tabs',
  component: Tabs,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: 'Fusion tabs component with ClickUp + Stripe design system. Features premium variants, glassmorphism effects, and gun club presets.',
      },
    },
  },
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof Tabs>

export const Default: Story = {
  render: () => (
    <Tabs defaultValue="overview" className="w-full">
      <TabsList>
        <TabsTrigger value="overview">Overview</TabsTrigger>
        <TabsTrigger value="details">Details</TabsTrigger>
        <TabsTrigger value="settings">Settings</TabsTrigger>
      </TabsList>
      <TabsContent value="overview" className="mt-4">
        <div className="p-4 bg-muted rounded-lg">
          <h3 className="font-semibold mb-2">Overview</h3>
          <p className="text-sm text-muted-foreground">
            This is the overview tab content with default styling.
          </p>
        </div>
      </TabsContent>
      <TabsContent value="details" className="mt-4">
        <div className="p-4 bg-muted rounded-lg">
          <h3 className="font-semibold mb-2">Details</h3>
          <p className="text-sm text-muted-foreground">
            Detailed information goes here.
          </p>
        </div>
      </TabsContent>
      <TabsContent value="settings" className="mt-4">
        <div className="p-4 bg-muted rounded-lg">
          <h3 className="font-semibold mb-2">Settings</h3>
          <p className="text-sm text-muted-foreground">
            Configuration options are displayed here.
          </p>
        </div>
      </TabsContent>
    </Tabs>
  ),
}

export const Premium: Story = {
  render: () => (
    <Tabs defaultValue="tournaments" className="w-full">
      <TabsList variant="premium" size="lg">
        <TabsTrigger variant="premium" size="lg" value="tournaments">
          <Trophy className="size-4 mr-2" />
          Tournaments
        </TabsTrigger>
        <TabsTrigger variant="premium" size="lg" value="schedule">
          <Calendar className="size-4 mr-2" />
          Schedule
        </TabsTrigger>
        <TabsTrigger variant="premium" size="lg" value="members">
          <Users className="size-4 mr-2" />
          Members
        </TabsTrigger>
      </TabsList>
      <TabsContent value="tournaments" className="mt-6">
        <div className="p-6 bg-gradient-to-r from-[#F2CB05]/5 to-[#F28705]/5 rounded-xl border border-[#F2CB05]/20">
          <h3 className="font-bold text-lg mb-3 text-[#F2CB05]">Tournament Management</h3>
          <p className="text-sm text-muted-foreground">
            Premium tournament management interface with enhanced features and styling.
          </p>
        </div>
      </TabsContent>
      <TabsContent value="schedule" className="mt-6">
        <div className="p-6 bg-gradient-to-r from-[#F2CB05]/5 to-[#F28705]/5 rounded-xl border border-[#F2CB05]/20">
          <h3 className="font-bold text-lg mb-3 text-[#F2CB05]">Event Schedule</h3>
          <p className="text-sm text-muted-foreground">
            Comprehensive scheduling system with premium design elements.
          </p>
        </div>
      </TabsContent>
      <TabsContent value="members" className="mt-6">
        <div className="p-6 bg-gradient-to-r from-[#F2CB05]/5 to-[#F28705]/5 rounded-xl border border-[#F2CB05]/20">
          <h3 className="font-bold text-lg mb-3 text-[#F2CB05]">Member Portal</h3>
          <p className="text-sm text-muted-foreground">
            Advanced member management with premium styling and features.
          </p>
        </div>
      </TabsContent>
    </Tabs>
  ),
}

export const Glass: Story = {
  render: () => (
    <div className="bg-gradient-to-br from-slate-900 to-slate-800 p-8 rounded-xl">
      <Tabs defaultValue="range" className="w-full">
        <TabsList variant="glass" size="lg">
          <TabsTrigger variant="glass" size="lg" value="range">
            <Target className="size-4 mr-2" />
            Range Status
          </TabsTrigger>
          <TabsTrigger variant="glass" size="lg" value="safety">
            <Settings className="size-4 mr-2" />
            Safety Rules
          </TabsTrigger>
          <TabsTrigger variant="glass" size="lg" value="equipment">
            Equipment
          </TabsTrigger>
        </TabsList>
        <TabsContent value="range" className="mt-6">
          <div className="p-6 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20">
            <h3 className="font-bold text-lg mb-3 text-white">Range Status</h3>
            <p className="text-sm text-white/80">
              Live range status with glassmorphism design for modern interface.
            </p>
          </div>
        </TabsContent>
        <TabsContent value="safety" className="mt-6">
          <div className="p-6 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20">
            <h3 className="font-bold text-lg mb-3 text-white">Safety Protocol</h3>
            <p className="text-sm text-white/80">
              Comprehensive safety guidelines with premium glass styling.
            </p>
          </div>
        </TabsContent>
        <TabsContent value="equipment" className="mt-6">
          <div className="p-6 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20">
            <h3 className="font-bold text-lg mb-3 text-white">Equipment Status</h3>
            <p className="text-sm text-white/80">
              Equipment availability and maintenance information.
            </p>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  ),
}

export const Tournament: Story = {
  render: () => (
    <div className="bg-gradient-to-br from-slate-900 to-slate-700 p-8 rounded-xl">
      <Tabs defaultValue="leaderboard" className="w-full">
        <TabsList variant="tournament" size="xl">
          <TabsTrigger variant="tournament" size="xl" value="leaderboard">
            <Trophy className="size-5 mr-2" />
            Leaderboard
          </TabsTrigger>
          <TabsTrigger variant="tournament" size="xl" value="scores">
            Scores
          </TabsTrigger>
          <TabsTrigger variant="tournament" size="xl" value="rounds">
            Rounds
          </TabsTrigger>
        </TabsList>
        <TabsContent value="leaderboard" className="mt-8">
          <div className="p-8 bg-gradient-to-r from-slate-800/90 to-slate-700/90 rounded-xl border border-[#F2CB05]/30">
            <h3 className="font-bold text-xl mb-4 text-[#F2CB05]">Tournament Leaderboard</h3>
            <p className="text-sm text-slate-200">
              Professional tournament interface with premium styling and enhanced visibility.
            </p>
          </div>
        </TabsContent>
        <TabsContent value="scores" className="mt-8">
          <div className="p-8 bg-gradient-to-r from-slate-800/90 to-slate-700/90 rounded-xl border border-[#F2CB05]/30">
            <h3 className="font-bold text-xl mb-4 text-[#F2CB05]">Score Management</h3>
            <p className="text-sm text-slate-200">
              Advanced scoring system with tournament-grade presentation.
            </p>
          </div>
        </TabsContent>
        <TabsContent value="rounds" className="mt-8">
          <div className="p-8 bg-gradient-to-r from-slate-800/90 to-slate-700/90 rounded-xl border border-[#F2CB05]/30">
            <h3 className="font-bold text-xl mb-4 text-[#F2CB05]">Round Information</h3>
            <p className="text-sm text-slate-200">
              Detailed round tracking with professional tournament styling.
            </p>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  ),
}

export const Minimal: Story = {
  render: () => (
    <Tabs defaultValue="info" className="w-full">
      <TabsList variant="minimal">
        <TabsTrigger variant="minimal" value="info">Information</TabsTrigger>
        <TabsTrigger variant="minimal" value="contact">Contact</TabsTrigger>
        <TabsTrigger variant="minimal" value="about">About</TabsTrigger>
      </TabsList>
      <TabsContent value="info" className="mt-4">
        <div className="p-4 border-t border-border">
          <h3 className="font-semibold mb-2">Information</h3>
          <p className="text-sm text-muted-foreground">
            Clean minimal design for simple navigation needs.
          </p>
        </div>
      </TabsContent>
      <TabsContent value="contact" className="mt-4">
        <div className="p-4 border-t border-border">
          <h3 className="font-semibold mb-2">Contact Information</h3>
          <p className="text-sm text-muted-foreground">
            Contact details with minimal styling approach.
          </p>
        </div>
      </TabsContent>
      <TabsContent value="about" className="mt-4">
        <div className="p-4 border-t border-border">
          <h3 className="font-semibold mb-2">About Us</h3>
          <p className="text-sm text-muted-foreground">
            Information about our organization in minimal design.
          </p>
        </div>
      </TabsContent>
    </Tabs>
  ),
}

export const EventTabsPreset: Story = {
  render: () => (
    <EventTabs eventType="tournament" defaultValue="current" className="w-full">
      <TabsList variant="tournament" size="lg">
        <TabsTrigger variant="tournament" size="lg" value="current">
          Current Events
        </TabsTrigger>
        <TabsTrigger variant="tournament" size="lg" value="upcoming">
          Upcoming
        </TabsTrigger>
        <TabsTrigger variant="tournament" size="lg" value="past">
          Past Events
        </TabsTrigger>
      </TabsList>
      <TabsContent value="current" className="mt-6">
        <div className="p-6 bg-gradient-to-r from-slate-900/50 to-slate-800/50 rounded-xl border border-[#F2CB05]/20">
          <h3 className="font-bold text-lg mb-3 text-[#F2CB05]">Current Tournament Events</h3>
          <p className="text-sm text-slate-200">
            Live tournament events with real-time updates and premium styling.
          </p>
        </div>
      </TabsContent>
      <TabsContent value="upcoming" className="mt-6">
        <div className="p-6 bg-gradient-to-r from-slate-900/50 to-slate-800/50 rounded-xl border border-[#F2CB05]/20">
          <h3 className="font-bold text-lg mb-3 text-[#F2CB05]">Upcoming Events</h3>
          <p className="text-sm text-slate-200">
            Scheduled tournaments and events with advanced preview features.
          </p>
        </div>
      </TabsContent>
      <TabsContent value="past" className="mt-6">
        <div className="p-6 bg-gradient-to-r from-slate-900/50 to-slate-800/50 rounded-xl border border-[#F2CB05]/20">
          <h3 className="font-bold text-lg mb-3 text-[#F2CB05]">Event History</h3>
          <p className="text-sm text-slate-200">
            Complete archive of past tournaments with detailed statistics.
          </p>
        </div>
      </TabsContent>
    </EventTabs>
  ),
}

export const ScoreboardTabsPreset: Story = {
  render: () => (
    <div className="bg-gradient-to-br from-slate-900 to-slate-800 p-8 rounded-xl">
      <ScoreboardTabs defaultValue="overall" className="w-full">
        <TabsList variant="tournament" size="lg">
          <TabsTrigger variant="tournament" size="lg" value="overall">
            Overall Standings
          </TabsTrigger>
          <TabsTrigger variant="tournament" size="lg" value="division">
            By Division
          </TabsTrigger>
          <TabsTrigger variant="tournament" size="lg" value="class">
            By Class
          </TabsTrigger>
        </TabsList>
        <TabsContent value="overall" className="mt-6">
          <div className="p-6 bg-gradient-to-r from-slate-800/90 to-slate-700/90 rounded-xl border border-[#F2CB05]/30">
            <h3 className="font-bold text-xl mb-4 text-[#F2CB05]">Overall Tournament Standings</h3>
            <p className="text-sm text-slate-200">
              Complete tournament leaderboard with professional presentation.
            </p>
          </div>
        </TabsContent>
        <TabsContent value="division" className="mt-6">
          <div className="p-6 bg-gradient-to-r from-slate-800/90 to-slate-700/90 rounded-xl border border-[#F2CB05]/30">
            <h3 className="font-bold text-xl mb-4 text-[#F2CB05]">Division Rankings</h3>
            <p className="text-sm text-slate-200">
              Detailed division-specific standings and statistics.
            </p>
          </div>
        </TabsContent>
        <TabsContent value="class" className="mt-6">
          <div className="p-6 bg-gradient-to-r from-slate-800/90 to-slate-700/90 rounded-xl border border-[#F2CB05]/30">
            <h3 className="font-bold text-xl mb-4 text-[#F2CB05]">Class Competition</h3>
            <p className="text-sm text-slate-200">
              Class-based competition results with enhanced visualization.
            </p>
          </div>
        </TabsContent>
      </ScoreboardTabs>
    </div>
  ),
}

export const ScheduleTabsPreset: Story = {
  render: () => (
    <ScheduleTabs defaultValue="weekly" className="w-full">
      <TabsList variant="premium" size="md">
        <TabsTrigger variant="premium" size="md" value="weekly">
          <Calendar className="size-4 mr-2" />
          Weekly
        </TabsTrigger>
        <TabsTrigger variant="premium" size="md" value="monthly">
          Monthly
        </TabsTrigger>
        <TabsTrigger variant="premium" size="md" value="events">
          <Trophy className="size-4 mr-2" />
          Events
        </TabsTrigger>
      </TabsList>
      <TabsContent value="weekly" className="mt-4">
        <div className="p-4 bg-gradient-to-r from-[#F2CB05]/5 to-[#F28705]/5 rounded-lg border border-[#F2CB05]/20">
          <h3 className="font-semibold mb-2 text-[#F2CB05]">Weekly Schedule</h3>
          <p className="text-sm text-muted-foreground">
            Weekly shooting schedule with premium styling and enhanced features.
          </p>
        </div>
      </TabsContent>
      <TabsContent value="monthly" className="mt-4">
        <div className="p-4 bg-gradient-to-r from-[#F2CB05]/5 to-[#F28705]/5 rounded-lg border border-[#F2CB05]/20">
          <h3 className="font-semibold mb-2 text-[#F2CB05]">Monthly Overview</h3>
          <p className="text-sm text-muted-foreground">
            Monthly calendar view with special events and competitions highlighted.
          </p>
        </div>
      </TabsContent>
      <TabsContent value="events" className="mt-4">
        <div className="p-4 bg-gradient-to-r from-[#F2CB05]/5 to-[#F28705]/5 rounded-lg border border-[#F2CB05]/20">
          <h3 className="font-semibold mb-2 text-[#F2CB05]">Special Events</h3>
          <p className="text-sm text-muted-foreground">
            Tournament schedules and special shooting events with premium design.
          </p>
        </div>
      </TabsContent>
    </ScheduleTabs>
  ),
}

export const Sizes: Story = {
  render: () => (
    <div className="space-y-8">
      <div>
        <h3 className="font-semibold mb-4">Small Size</h3>
        <Tabs defaultValue="tab1" className="w-full">
          <TabsList variant="premium" size="sm">
            <TabsTrigger variant="premium" size="sm" value="tab1">Small</TabsTrigger>
            <TabsTrigger variant="premium" size="sm" value="tab2">Tab</TabsTrigger>
            <TabsTrigger variant="premium" size="sm" value="tab3">Example</TabsTrigger>
          </TabsList>
          <TabsContent value="tab1" className="mt-4">
            <div className="p-4 bg-muted rounded-lg">
              <p className="text-sm">Small size tab content</p>
            </div>
          </TabsContent>
        </Tabs>
      </div>
      
      <div>
        <h3 className="font-semibold mb-4">Medium Size (Default)</h3>
        <Tabs defaultValue="tab1" className="w-full">
          <TabsList variant="premium" size="md">
            <TabsTrigger variant="premium" size="md" value="tab1">Medium</TabsTrigger>
            <TabsTrigger variant="premium" size="md" value="tab2">Tab</TabsTrigger>
            <TabsTrigger variant="premium" size="md" value="tab3">Example</TabsTrigger>
          </TabsList>
          <TabsContent value="tab1" className="mt-4">
            <div className="p-4 bg-muted rounded-lg">
              <p className="text-sm">Medium size tab content</p>
            </div>
          </TabsContent>
        </Tabs>
      </div>
      
      <div>
        <h3 className="font-semibold mb-4">Large Size</h3>
        <Tabs defaultValue="tab1" className="w-full">
          <TabsList variant="premium" size="lg">
            <TabsTrigger variant="premium" size="lg" value="tab1">Large</TabsTrigger>
            <TabsTrigger variant="premium" size="lg" value="tab2">Tab</TabsTrigger>
            <TabsTrigger variant="premium" size="lg" value="tab3">Example</TabsTrigger>
          </TabsList>
          <TabsContent value="tab1" className="mt-4">
            <div className="p-4 bg-muted rounded-lg">
              <p className="text-sm">Large size tab content</p>
            </div>
          </TabsContent>
        </Tabs>
      </div>
      
      <div>
        <h3 className="font-semibold mb-4">Extra Large Size</h3>
        <Tabs defaultValue="tab1" className="w-full">
          <TabsList variant="premium" size="xl">
            <TabsTrigger variant="premium" size="xl" value="tab1">Extra Large</TabsTrigger>
            <TabsTrigger variant="premium" size="xl" value="tab2">Tab</TabsTrigger>
            <TabsTrigger variant="premium" size="xl" value="tab3">Example</TabsTrigger>
          </TabsList>
          <TabsContent value="tab1" className="mt-4">
            <div className="p-4 bg-muted rounded-lg">
              <p className="text-sm">Extra large size tab content</p>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  ),
}