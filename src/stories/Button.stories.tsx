import type { Meta, StoryObj } from '@storybook/react';
import { Button } from '@/components/ui/button';
import { Target, Zap, Star, Plus, Download, ArrowRight } from 'lucide-react';

const meta: Meta<typeof Button> = {
  title: 'Components/UI/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'primary', 'destructive', 'outline', 'secondary', 'ghost', 'link', 'premium'],
    },
    size: {
      control: 'select',
      options: ['default', 'sm', 'lg', 'icon'],
    },
    effect: {
      control: 'select',
      options: ['none', 'lift', 'glow', 'pulse', 'shimmer'],
    },
    loading: {
      control: 'boolean',
    },
    disabled: {
      control: 'boolean',
    },
    iconPosition: {
      control: 'select',
      options: ['left', 'right'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// Basic Variants
export const Default: Story = {
  args: {
    children: 'Default Button',
  },
};

export const Primary: Story = {
  args: {
    variant: 'primary',
    children: 'Primary Button',
  },
};

export const Premium: Story = {
  args: {
    variant: 'premium',
    children: 'Join The Elite',
    effect: 'lift',
  },
};

export const Destructive: Story = {
  args: {
    variant: 'destructive',
    children: 'Delete Account',
  },
};

export const Outline: Story = {
  args: {
    variant: 'outline',
    children: 'Outline Button',
  },
};

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    children: 'Secondary Button',
  },
};

export const Ghost: Story = {
  args: {
    variant: 'ghost',
    children: 'Ghost Button',
  },
};

export const Link: Story = {
  args: {
    variant: 'link',
    children: 'Link Button',
  },
};

// Sizes
export const Small: Story = {
  args: {
    size: 'sm',
    children: 'Small Button',
  },
};

export const Large: Story = {
  args: {
    size: 'lg',
    children: 'Large Button',
  },
};

export const Icon: Story = {
  args: {
    size: 'icon',
    children: <Plus className="w-4 h-4" />,
  },
};

// With Icons
export const WithLeftIcon: Story = {
  args: {
    variant: 'primary',
    children: 'Book Range Time',
    icon: <Target className="w-4 h-4" />,
    iconPosition: 'left',
  },
};

export const WithRightIcon: Story = {
  args: {
    variant: 'premium',
    children: 'Get Started',
    icon: <ArrowRight className="w-4 h-4" />,
    iconPosition: 'right',
  },
};

// Loading States
export const Loading: Story = {
  args: {
    variant: 'primary',
    children: 'Processing...',
    loading: true,
  },
};

export const LoadingPremium: Story = {
  args: {
    variant: 'premium',
    children: 'Processing Payment...',
    loading: true,
  },
};

// Effects
export const WithLift: Story = {
  args: {
    variant: 'premium',
    children: 'Hover to Lift',
    effect: 'lift',
    icon: <Target className="w-4 h-4" />,
  },
};

export const WithGlow: Story = {
  args: {
    variant: 'primary',
    children: 'Glowing Effect',
    effect: 'glow',
    icon: <Star className="w-4 h-4" />,
  },
};

export const WithPulse: Story = {
  args: {
    variant: 'premium',
    children: 'Register Now',
    effect: 'pulse',
    icon: <Zap className="w-4 h-4" />,
  },
};

export const WithShimmer: Story = {
  args: {
    variant: 'premium',
    children: 'Premium Action',
    effect: 'shimmer',
    icon: <Download className="w-4 h-4" />,
  },
};

// Disabled States
export const Disabled: Story = {
  args: {
    variant: 'primary',
    children: 'Disabled Button',
    disabled: true,
  },
};

export const DisabledWithIcon: Story = {
  args: {
    variant: 'premium',
    children: 'Disabled Premium',
    disabled: true,
    icon: <Target className="w-4 h-4" />,
  },
};

// Real-world Examples
export const CallToAction: Story = {
  args: {
    variant: 'premium',
    size: 'lg',
    children: 'Join Boise Gun Club',
    effect: 'lift',
    icon: <Target className="w-4 h-4" />,
  },
};

export const DownloadButton: Story = {
  args: {
    variant: 'primary',
    children: 'Download Rules',
    icon: <Download className="w-4 h-4" />,
    iconPosition: 'left',
  },
};

export const NavigationButton: Story = {
  args: {
    variant: 'outline',
    children: 'View Schedule',
    icon: <ArrowRight className="w-4 h-4" />,
    iconPosition: 'right',
  },
};