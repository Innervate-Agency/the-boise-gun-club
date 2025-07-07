import type { Meta, StoryObj } from '@storybook/react'
import { ChevronRight, Home, Trophy, Calendar, Target, Settings } from 'lucide-react'

import { 
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
  RangeBreadcrumbItem
} from '@/components/ui/breadcrumb'

const meta: Meta<typeof Breadcrumb> = {
  title: 'Fusion/Navigation/Breadcrumb',
  component: Breadcrumb,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: 'Fusion breadcrumb component with ClickUp + Stripe design system. Features premium variants, glassmorphism effects, and gun club presets.',
      },
    },
  },
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof Breadcrumb>

export const Default: Story = {
  render: () => (
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink href="/">Home</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbLink href="/events">Events</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbPage>Tournament Results</BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  ),
}

export const Premium: Story = {
  render: () => (
    <Breadcrumb variant="premium" size="lg">
      <BreadcrumbList variant="premium" size="lg">
        <BreadcrumbItem>
          <BreadcrumbLink variant="premium" href="/">
            <Home className="size-4 mr-2" />
            Gun Club
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator variant="premium" />
        <BreadcrumbItem>
          <BreadcrumbLink variant="premium" href="/tournaments">
            <Trophy className="size-4 mr-2" />
            Tournaments
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator variant="premium" />
        <BreadcrumbItem>
          <BreadcrumbLink variant="premium" href="/tournaments/2024">
            2024 Season
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator variant="premium" />
        <BreadcrumbItem>
          <BreadcrumbPage variant="premium">Spring Championship</BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  ),
}

export const Glass: Story = {
  render: () => (
    <div className="bg-gradient-to-br from-slate-900 to-slate-800 p-8 rounded-xl">
      <Breadcrumb variant="glass" size="lg">
        <BreadcrumbList variant="glass" size="lg">
          <BreadcrumbItem>
            <BreadcrumbLink variant="glass" href="/">
              <Home className="size-4 mr-2" />
              Dashboard
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator variant="glass" />
          <BreadcrumbItem>
            <BreadcrumbLink variant="glass" href="/range">
              <Target className="size-4 mr-2" />
              Range Status
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator variant="glass" />
          <BreadcrumbItem>
            <BreadcrumbPage variant="glass">Live Monitoring</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
    </div>
  ),
}

export const Tournament: Story = {
  render: () => (
    <div className="bg-gradient-to-br from-slate-900 to-slate-700 p-8 rounded-xl">
      <Breadcrumb variant="tournament" size="xl">
        <BreadcrumbList variant="tournament" size="xl">
          <BreadcrumbItem>
            <BreadcrumbLink variant="tournament" href="/">
              <Home className="size-5 mr-2" />
              Competition Center
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator variant="tournament" />
          <BreadcrumbItem>
            <BreadcrumbLink variant="tournament" href="/tournaments">
              <Trophy className="size-5 mr-2" />
              Elite Tournaments
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator variant="tournament" />
          <BreadcrumbItem>
            <BreadcrumbLink variant="tournament" href="/tournaments/championship">
              National Championship
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator variant="tournament" />
          <BreadcrumbItem>
            <BreadcrumbPage variant="tournament">Final Results</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
    </div>
  ),
}

export const Minimal: Story = {
  render: () => (
    <Breadcrumb variant="minimal">
      <BreadcrumbList variant="minimal">
        <BreadcrumbItem>
          <BreadcrumbLink variant="minimal" href="/">Home</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator variant="minimal" />
        <BreadcrumbItem>
          <BreadcrumbLink variant="minimal" href="/about">About</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator variant="minimal" />
        <BreadcrumbItem>
          <BreadcrumbPage variant="minimal">Contact</BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  ),
}

export const WithEllipsis: Story = {
  render: () => (
    <Breadcrumb variant="premium" size="md">
      <BreadcrumbList variant="premium" size="md">
        <BreadcrumbItem>
          <BreadcrumbLink variant="premium" href="/">
            <Home className="size-4 mr-2" />
            Home
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator variant="premium" />
        <BreadcrumbItem>
          <BreadcrumbEllipsis />
        </BreadcrumbItem>
        <BreadcrumbSeparator variant="premium" />
        <BreadcrumbItem>
          <BreadcrumbLink variant="premium" href="/tournaments">Tournaments</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator variant="premium" />
        <BreadcrumbItem>
          <BreadcrumbLink variant="premium" href="/tournaments/2024">2024</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator variant="premium" />
        <BreadcrumbItem>
          <BreadcrumbPage variant="premium">Championship Finals</BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  ),
}

export const SectionBreadcrumbPreset: Story = {
  render: () => (
    <div className="space-y-6">
      <div>
        <h3 className="font-semibold mb-4">Tournament Section</h3>
        <SectionBreadcrumb section="tournament">
          <BreadcrumbList variant="tournament">
            <BreadcrumbItem>
              <BreadcrumbLink variant="tournament" href="/">Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator variant="tournament" />
            <BreadcrumbItem>
              <BreadcrumbPage variant="tournament">Tournament Management</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </SectionBreadcrumb>
      </div>
      
      <div>
        <h3 className="font-semibold mb-4">Schedule Section</h3>
        <SectionBreadcrumb section="schedule">
          <BreadcrumbList variant="premium">
            <BreadcrumbItem>
              <BreadcrumbLink variant="premium" href="/">Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator variant="premium" />
            <BreadcrumbItem>
              <BreadcrumbPage variant="premium">Event Schedule</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </SectionBreadcrumb>
      </div>
      
      <div className="bg-gradient-to-br from-slate-900 to-slate-800 p-6 rounded-xl">
        <h3 className="font-semibold mb-4 text-white">Membership Section</h3>
        <SectionBreadcrumb section="membership">
          <BreadcrumbList variant="glass">
            <BreadcrumbItem>
              <BreadcrumbLink variant="glass" href="/">Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator variant="glass" />
            <BreadcrumbItem>
              <BreadcrumbPage variant="glass">Member Portal</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </SectionBreadcrumb>
      </div>
      
      <div>
        <h3 className="font-semibold mb-4">Rules Section</h3>
        <SectionBreadcrumb section="rules">
          <BreadcrumbList variant="minimal">
            <BreadcrumbItem>
              <BreadcrumbLink variant="minimal" href="/">Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator variant="minimal" />
            <BreadcrumbItem>
              <BreadcrumbPage variant="minimal">Safety Rules</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </SectionBreadcrumb>
      </div>
    </div>
  ),
}

export const TournamentBreadcrumbPreset: Story = {
  render: () => (
    <div className="bg-gradient-to-br from-slate-900 to-slate-700 p-8 rounded-xl">
      <TournamentBreadcrumb>
        <BreadcrumbList variant="tournament" size="lg">
          <TournamentBreadcrumbItem>
            <BreadcrumbLink variant="tournament" href="/">
              Competition Hub
            </BreadcrumbLink>
          </TournamentBreadcrumbItem>
          <BreadcrumbSeparator variant="tournament" />
          <TournamentBreadcrumbItem>
            <BreadcrumbLink variant="tournament" href="/tournaments">
              Elite Series
            </BreadcrumbLink>
          </TournamentBreadcrumbItem>
          <BreadcrumbSeparator variant="tournament" />
          <TournamentBreadcrumbItem>
            <BreadcrumbPage variant="tournament">Grand Prix Final</BreadcrumbPage>
          </TournamentBreadcrumbItem>
        </BreadcrumbList>
      </TournamentBreadcrumb>
    </div>
  ),
}

export const AdminBreadcrumbPreset: Story = {
  render: () => (
    <AdminBreadcrumb>
      <BreadcrumbList variant="premium" size="md">
        <BreadcrumbItem>
          <BreadcrumbLink variant="premium" href="/admin">
            <Settings className="size-4 mr-2" />
            Admin Panel
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator variant="premium" />
        <BreadcrumbItem>
          <BreadcrumbLink variant="premium" href="/admin/users">User Management</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator variant="premium" />
        <BreadcrumbItem>
          <BreadcrumbPage variant="premium">Edit Profile</BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </AdminBreadcrumb>
  ),
}

export const IconBreadcrumbItems: Story = {
  render: () => (
    <Breadcrumb variant="premium" size="lg">
      <BreadcrumbList variant="premium" size="lg">
        <HomeBreadcrumbItem>
          <BreadcrumbLink variant="premium" href="/">Gun Club Home</BreadcrumbLink>
        </HomeBreadcrumbItem>
        <BreadcrumbSeparator variant="premium" />
        <ScheduleBreadcrumbItem>
          <BreadcrumbLink variant="premium" href="/schedule">Event Calendar</BreadcrumbLink>
        </ScheduleBreadcrumbItem>
        <BreadcrumbSeparator variant="premium" />
        <RangeBreadcrumbItem>
          <BreadcrumbLink variant="premium" href="/range">Range Schedule</BreadcrumbLink>
        </RangeBreadcrumbItem>
        <BreadcrumbSeparator variant="premium" />
        <BreadcrumbItem>
          <BreadcrumbPage variant="premium">Today's Sessions</BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  ),
}

export const Sizes: Story = {
  render: () => (
    <div className="space-y-6">
      <div>
        <h3 className="font-semibold mb-4">Small Size</h3>
        <Breadcrumb variant="premium" size="sm">
          <BreadcrumbList variant="premium" size="sm">
            <BreadcrumbItem>
              <BreadcrumbLink variant="premium" href="/">Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator variant="premium" />
            <BreadcrumbItem>
              <BreadcrumbLink variant="premium" href="/events">Events</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator variant="premium" />
            <BreadcrumbItem>
              <BreadcrumbPage variant="premium">Small Breadcrumb</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>
      
      <div>
        <h3 className="font-semibold mb-4">Medium Size (Default)</h3>
        <Breadcrumb variant="premium" size="md">
          <BreadcrumbList variant="premium" size="md">
            <BreadcrumbItem>
              <BreadcrumbLink variant="premium" href="/">Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator variant="premium" />
            <BreadcrumbItem>
              <BreadcrumbLink variant="premium" href="/events">Events</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator variant="premium" />
            <BreadcrumbItem>
              <BreadcrumbPage variant="premium">Medium Breadcrumb</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>
      
      <div>
        <h3 className="font-semibold mb-4">Large Size</h3>
        <Breadcrumb variant="premium" size="lg">
          <BreadcrumbList variant="premium" size="lg">
            <BreadcrumbItem>
              <BreadcrumbLink variant="premium" href="/">Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator variant="premium" />
            <BreadcrumbItem>
              <BreadcrumbLink variant="premium" href="/events">Events</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator variant="premium" />
            <BreadcrumbItem>
              <BreadcrumbPage variant="premium">Large Breadcrumb</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>
      
      <div>
        <h3 className="font-semibold mb-4">Extra Large Size</h3>
        <Breadcrumb variant="premium" size="xl">
          <BreadcrumbList variant="premium" size="xl">
            <BreadcrumbItem>
              <BreadcrumbLink variant="premium" href="/">Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator variant="premium" />
            <BreadcrumbItem>
              <BreadcrumbLink variant="premium" href="/events">Events</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator variant="premium" />
            <BreadcrumbItem>
              <BreadcrumbPage variant="premium">Extra Large Breadcrumb</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>
    </div>
  ),
}

export const CustomSeparators: Story = {
  render: () => (
    <div className="space-y-6">
      <div>
        <h3 className="font-semibold mb-4">Default Chevron</h3>
        <Breadcrumb variant="premium">
          <BreadcrumbList variant="premium">
            <BreadcrumbItem>
              <BreadcrumbLink variant="premium" href="/">Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator variant="premium" />
            <BreadcrumbItem>
              <BreadcrumbPage variant="premium">Default Separator</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>
      
      <div>
        <h3 className="font-semibold mb-4">Custom Slash Separator</h3>
        <Breadcrumb variant="premium">
          <BreadcrumbList variant="premium">
            <BreadcrumbItem>
              <BreadcrumbLink variant="premium" href="/">Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator variant="premium">
              <span className="text-[#F2CB05]">/</span>
            </BreadcrumbSeparator>
            <BreadcrumbItem>
              <BreadcrumbPage variant="premium">Custom Separator</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>
      
      <div>
        <h3 className="font-semibold mb-4">Custom Bullet Separator</h3>
        <Breadcrumb variant="premium">
          <BreadcrumbList variant="premium">
            <BreadcrumbItem>
              <BreadcrumbLink variant="premium" href="/">Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator variant="premium">
              <span className="text-[#F2CB05] font-bold">•</span>
            </BreadcrumbSeparator>
            <BreadcrumbItem>
              <BreadcrumbPage variant="premium">Bullet Separator</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>
    </div>
  ),
}