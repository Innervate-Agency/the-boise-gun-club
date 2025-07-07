import type { Meta, StoryObj } from '@storybook/react';
import { PremiumButton } from '@/components/ui/premium-button';
import { Target, Zap, Star } from 'lucide-react';

const meta: Meta<typeof PremiumButton> = {
  title: 'Components/UI/Premium Button',
  component: PremiumButton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'Join The Elite',
    effect: 'lift',
  },
};

export const WithGlow: Story = {
  args: {
    children: 'Book Range Time',
    effect: 'glow',
    icon: <Target className="h-4 w-4" />,
  },
};

export const WithPulse: Story = {
  args: {
    children: 'Register Now',
    effect: 'pulse',
    icon: <Star className="h-4 w-4" />,
  },
};

export const Loading: Story = {
  args: {
    children: 'Processing...',
    loading: true,
    effect: 'glow',
  },
};

export const CustomGradient: Story = {
  args: {
    children: 'Premium Action',
    gradient: 'from-leonard-yellow to-lahoma-orange',
    effect: 'glow',
    icon: <Zap className="h-4 w-4" />,
  },
};