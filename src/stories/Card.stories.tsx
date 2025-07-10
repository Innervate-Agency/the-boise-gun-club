import type { Meta, StoryObj } from '@storybook/react';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';

const meta: Meta<typeof Card> = {
  title: 'Components/UI/Card',
  component: Card,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'premium', 'elite', 'glass'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => (
    <Card className="w-[350px]" {...args}>
      <CardHeader>
        <CardTitle>Default Card</CardTitle>
        <CardDescription>This is the default card style.</CardDescription>
      </CardHeader>
      <CardContent>
        <p>This is the main content area of the card.</p>
      </CardContent>
      <CardFooter>
        <Button variant="primary">Action</Button>
      </CardFooter>
    </Card>
  ),
};

export const Glass: Story = {
  render: (args) => (
    <div className="relative w-[400px] h-[300px] p-10 bg-cover bg-center rounded-lg" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1587174486073-ae5e3c2e6a04?q=80&w=2070&auto=format&fit=crop')" }}>
      <Card variant="glass" {...args}>
        <CardHeader>
          <CardTitle>Glass Card</CardTitle>
        </CardHeader>
        <CardContent>
          <p>This card has a glassmorphism effect.</p>
        </CardContent>
      </Card>
    </div>
  ),
};

export const PremiumGradient: Story = {
  render: (args) => (
    <Card variant="premium" className="w-[350px]" {...args}>
      <CardHeader>
        <CardTitle>Premium Gradient</CardTitle>
      </CardHeader>
      <CardContent>
        <p>This card has a subtle orange gradient background.</p>
      </CardContent>
    </Card>
  ),
};

export const EliteVariant: Story = {
  render: (args) => (
    <Card variant="elite" className="w-[350px]" {...args}>
      <CardHeader>
        <CardTitle>Elite Card</CardTitle>
        <CardDescription>Premium elite styling with shimmer effects</CardDescription>
      </CardHeader>
      <CardContent>
        <p>This card demonstrates the elite variant with amber gradients and subtle animations.</p>
      </CardContent>
    </Card>
  ),
};

export const Premium: Story = {
  render: (args) => (
    <Card variant="premium" className="w-[350px]" {...args}>
      <CardHeader>
        <CardTitle>Premium Membership</CardTitle>
        <CardDescription>Exclusive premium benefits and features</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          <p>Premium card with gradient background and enhanced shadows.</p>
          <Badge variant="premium">Premium</Badge>
        </div>
      </CardContent>
      <CardFooter>
        <Button variant="premium" className="w-full">
          Upgrade to Premium
        </Button>
      </CardFooter>
    </Card>
  ),
};

export const Elite: Story = {
  render: (args) => (
    <Card variant="elite" className="w-[350px]" {...args}>
      <CardHeader>
        <CardTitle>Elite Championship</CardTitle>
        <CardDescription>Top-tier exclusive access and benefits</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          <p>Elite card with animated gradients and premium effects.</p>
          <Badge variant="elite">Elite</Badge>
        </div>
      </CardContent>
      <CardFooter>
        <Button variant="elite" className="w-full">
          Join Elite Program
        </Button>
      </CardFooter>
    </Card>
  ),
};

export const WithAnimation: Story = {
  render: (args) => (
    <Card className="w-[350px] transition-all duration-300 hover:scale-105" {...args}>
      <CardHeader>
        <CardTitle>Hover Animation</CardTitle>
        <CardDescription>This card has smooth hover animations.</CardDescription>
      </CardHeader>
      <CardContent>
        <p>Hover over this card to see the scale animation effect.</p>
      </CardContent>
    </Card>
  ),
};

// FUSION SHOWCASE - All variants in one view
export const FusionShowcase: Story = {
  render: () => (
    <div className="space-y-8 p-8 max-w-6xl">
      <div className="text-center space-y-2">
        <h2 className="text-2xl font-heading font-bold text-text-primary">Card Fusion System</h2>
        <p className="text-text-secondary">Professional card variants for different membership tiers</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Default */}
        <Card className="w-full">
          <CardHeader>
            <CardTitle>Standard Access</CardTitle>
            <CardDescription>Basic membership benefits</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2 text-sm text-text-secondary">
              <li>• Range access during standard hours</li>
              <li>• Basic safety training included</li>
              <li>• Community events access</li>
            </ul>
          </CardContent>
          <CardFooter>
            <Button variant="outline" className="w-full">Learn More</Button>
          </CardFooter>
        </Card>

        {/* Premium */}
        <Card variant="premium" className="w-full">
          <CardHeader>
            <CardTitle>Premium Membership</CardTitle>
            <CardDescription>Enhanced access and exclusive benefits</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <Badge variant="premium">Most Popular</Badge>
              <ul className="space-y-2 text-sm text-text-secondary">
                <li>• Extended range hours</li>
                <li>• Advanced training programs</li>
                <li>• Equipment rental discounts</li>
                <li>• Priority event booking</li>
              </ul>
            </div>
          </CardContent>
          <CardFooter>
            <Button variant="premium" className="w-full">Choose Premium</Button>
          </CardFooter>
        </Card>

        {/* Elite */}
        <Card variant="elite" className="w-full">
          <CardHeader>
            <CardTitle>Elite Championship</CardTitle>
            <CardDescription>Exclusive top-tier membership</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <Badge variant="elite">Exclusive</Badge>
              <ul className="space-y-2 text-sm text-text-secondary">
                <li>• 24/7 range access</li>
                <li>• Personal coaching sessions</li>
                <li>• Championship competitions</li>
                <li>• VIP lounge access</li>
                <li>• Custom gear storage</li>
              </ul>
            </div>
          </CardContent>
          <CardFooter>
            <Button variant="elite" className="w-full">Join Elite</Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  ),
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        story: 'Complete showcase of the Card fusion system showing membership tiers with appropriate styling.'
      }
    }
  }
};