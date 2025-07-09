import type { Meta, StoryObj } from '@storybook/react';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  GlassCard,
  AnimatedCard,
  GradientCard,
  GlassFusionCard,
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
      <GlassCard {...args}>
        <CardHeader>
          <CardTitle>Glass Card</CardTitle>
        </CardHeader>
        <CardContent>
          <p>This card has a glassmorphism effect.</p>
        </CardContent>
      </GlassCard>
    </div>
  ),
};

export const Gradient: Story = {
  render: (args) => (
    <GradientCard className="w-[350px]" {...args}>
      <CardHeader>
        <CardTitle>Gradient Card</CardTitle>
      </CardHeader>
      <CardContent>
        <p>This card has a subtle gradient background.</p>
      </CardContent>
    </GradientCard>
  ),
};

export const Fusion: Story = {
  render: (args) => (
    <GlassFusionCard
      className="w-[350px]"
      title="Fusion Card"
      description="Combining multiple effects"
      badge="New"
      {...args}
    >
      <CardContent>
        <p>This card demonstrates the 'fusion' variant with a header, badge, and splash effect.</p>
      </CardContent>
    </GlassFusionCard>
  ),
};

export const Animated: Story = {
  render: (args) => (
    <AnimatedCard className="w-[350px]" {...args}>
      <CardHeader>
        <CardTitle>Animated Card</CardTitle>
        <CardDescription>This card animates into view.</CardDescription>
      </CardHeader>
      <CardContent>
        <p>Scroll this story into view to see the animation.</p>
      </CardContent>
    </AnimatedCard>
  ),
};