import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Target, Trophy, Users, Calendar } from 'lucide-react';

const meta: Meta<typeof Card> = {
  title: 'Components/UI/Card',
  component: Card,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Stripe-inspired card component built with shadcn/ui. Features gradient headers, clean layouts, and gun club specific content patterns.',
      },
    },
    backgrounds: {
      default: 'light',
      values: [
        { name: 'light', value: '#f8f6f1' },
        { name: 'dark', value: '#2F3135' },
      ],
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

// Basic card layouts
export const SimpleCard: Story = {
  render: () => (
    <Card className="w-80">
      <CardHeader>
        <CardTitle>Range Hours</CardTitle>
        <CardDescription>Current operating schedule</CardDescription>
      </CardHeader>
      <CardContent>
        <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
        <p>Saturday - Sunday: 8:00 AM - 8:00 PM</p>
      </CardContent>
    </Card>
  ),
};

export const MembershipCard: Story = {
  render: () => (
    <Card className="w-80 border-0 shadow-lg bg-white overflow-hidden">
      {/* Stripe-style gradient header */}
      <div className="h-24 bg-gradient-to-r from-[#F28705] to-[#F25C05] relative">
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
        <CardTitle className="text-xl font-['Rajdhani'] font-bold">
          Elite Membership
        </CardTitle>
        <CardDescription className="font-['Noto Sans']">
          Full access to all facilities with member pricing
        </CardDescription>
      </CardHeader>
      
      <CardContent>
        <div className="space-y-2">
          <div className="flex justify-between">
            <span>Shooting Fee</span>
            <span className="font-semibold">$6/round</span>
          </div>
          <div className="flex justify-between text-sm text-muted-foreground">
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
  parameters: {
    docs: {
      description: {
        story: 'Membership pricing card with Stripe-inspired gradient header and clear value proposition.',
      },
    },
  },
};

export const EventCard: Story = {
  render: () => (
    <Card className="w-80 border-0 shadow-lg bg-white overflow-hidden">
      {/* Event gradient header */}
      <div className="h-24 bg-gradient-to-r from-[#6f7822] to-[#3F6331] relative">
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
        <CardTitle className="text-lg font-['Rajdhani'] font-bold">
          Winter Turkey Shoot
        </CardTitle>
        <CardDescription className="font-['Noto Sans']">
          Traditional turkey shoot competition. Best score takes home the bird.
        </CardDescription>
      </CardHeader>
      
      <CardContent>
        <div className="space-y-3">
          <div className="flex items-center gap-2 text-sm">
            <Calendar className="h-4 w-4 text-muted-foreground" />
            <span>December 15th at 10:00 AM</span>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <Users className="h-4 w-4 text-muted-foreground" />
            <span>85 registered participants</span>
          </div>
        </div>
      </CardContent>
      
      <CardFooter>
        <Button variant="outline" className="w-full">
          📝 Register Now
        </Button>
      </CardFooter>
    </Card>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Event card showing competition details with participant count and registration CTA.',
      },
    },
  },
};

export const StatCard: Story = {
  render: () => (
    <Card className="w-60 border-0 shadow-lg bg-white overflow-hidden">
      <div className="h-20 bg-gradient-to-r from-[#5198cd] to-[#4982A6] relative">
        <div className="absolute bottom-4 left-6">
          <div className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center">
            <Trophy className="h-4 w-4 text-white" />
          </div>
        </div>
      </div>
      
      <CardContent className="p-6 text-center">
        <div className="text-3xl font-bold text-[#2F3135] mb-1 font-['Rajdhani']">
          1,200+
        </div>
        <div className="text-sm text-muted-foreground font-['Noto Sans']">
          Active Members
        </div>
      </CardContent>
    </Card>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Statistics card for displaying key metrics about the gun club.',
      },
    },
  },
};

export const SafetyCard: Story = {
  render: () => (
    <Card className="w-80 border-0 shadow-lg bg-white overflow-hidden">
      <div className="h-24 bg-gradient-to-r from-[#F23005] to-[#8C394B] relative">
        <div className="absolute top-4 right-4">
          <Badge className="bg-white/20 text-white border-white/30">
            Critical
          </Badge>
        </div>
        <div className="absolute bottom-4 left-6">
          <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center">
            <span className="text-white font-bold">⚠️</span>
          </div>
        </div>
      </div>
      
      <CardHeader>
        <CardTitle className="text-lg font-['Rajdhani'] font-bold text-[#F23005]">
          Safety Protocol
        </CardTitle>
        <CardDescription className="font-['Noto Sans']">
          Essential safety rules for all participants
        </CardDescription>
      </CardHeader>
      
      <CardContent>
        <ul className="space-y-2 text-sm">
          <li className="flex items-center gap-2">
            <div className="w-2 h-2 bg-[#F23005] rounded-full"></div>
            Eye & ear protection required
          </li>
          <li className="flex items-center gap-2">
            <div className="w-2 h-2 bg-[#F23005] rounded-full"></div>
            Shotgun ammunition only
          </li>
          <li className="flex items-center gap-2">
            <div className="w-2 h-2 bg-[#F23005] rounded-full"></div>
            Follow range officer commands
          </li>
        </ul>
      </CardContent>
      
      <CardFooter>
        <Button variant="outline" className="w-full">
          📋 View All Rules
        </Button>
      </CardFooter>
    </Card>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Safety information card using emergency colors and clear bullet points.',
      },
    },
  },
};