import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { Button } from '@/components/ui/button';

const meta: Meta<typeof Button> = {
  title: 'Boise Gun Club/Button',
  component: Button,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A versatile button component built with shadcn/ui, Radix UI and styled with our official brand colors. Perfect for gun club actions like membership signup, range booking, and emergency protocols.',
      },
    },
    backgrounds: {
      default: 'dark',
      values: [
        { name: 'light', value: '#f8f6f1' },
        { name: 'dark', value: '#2F3135' },
      ],
    },
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['default', 'destructive', 'outline', 'secondary', 'ghost', 'link'],
      description: 'The visual style variant of the button',
    },
    size: {
      control: { type: 'select' },
      options: ['default', 'sm', 'lg', 'icon'],
      description: 'The size of the button',
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the button is disabled',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// Primary brand buttons
export const Default: Story = {
  args: {
    children: 'Join The Elite',
  },
  parameters: {
    docs: {
      description: {
        story: 'Default button using our primary brand color (Lahoma Orange). Perfect for main actions like membership signup.',
      },
    },
  },
};

export const Destructive: Story = {
  args: {
    variant: 'destructive',
    children: '🚨 Emergency Stop',
  },
  parameters: {
    docs: {
      description: {
        story: 'Destructive button for critical actions like emergency stops or account deletion.',
      },
    },
  },
};

export const Outline: Story = {
  args: {
    variant: 'outline',
    children: '🎯 Virtual Tour',
  },
  parameters: {
    docs: {
      description: {
        story: 'Outline button for secondary actions like virtual tours or additional information.',
      },
    },
  },
};

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    children: 'Learn More',
  },
};

export const Ghost: Story = {
  args: {
    variant: 'ghost',
    children: 'Explore Facilities',
  },
};

export const Link: Story = {
  args: {
    variant: 'link',
    children: 'View Rules & Safety',
  },
};

// Size variations
export const Small: Story = {
  args: {
    size: 'sm',
    children: 'Quick Action',
  },
};

export const Large: Story = {
  args: {
    size: 'lg',
    children: '🏆 Become a Member Today',
  },
  parameters: {
    docs: {
      description: {
        story: 'Large button for prominent calls-to-action like membership signup.',
      },
    },
  },
};

export const IconOnly: Story = {
  args: {
    size: 'icon',
    children: '🎯',
  },
};

// State variations
export const Disabled: Story = {
  args: {
    disabled: true,
    children: 'Range Closed',
  },
};

export const Loading: Story = {
  args: {
    disabled: true,
    children: 'Processing Membership...',
  },
  parameters: {
    docs: {
      description: {
        story: 'Loading state for async actions like payment processing.',
      },
    },
  },
};

// Gun Club specific use cases
export const MembershipCTA: Story = {
  args: {
    variant: 'default',
    size: 'lg',
    children: '🏆 Join The Elite - $75/year',
  },
  parameters: {
    docs: {
      description: {
        story: 'Primary membership call-to-action with pricing information.',
      },
    },
  },
};

export const BookRange: Story = {
  args: {
    variant: 'outline',
    children: '📅 Book Range Time',
  },
  parameters: {
    docs: {
      description: {
        story: 'Range booking button for member portal.',
      },
    },
  },
};

export const ViewResults: Story = {
  args: {
    variant: 'secondary',
    children: '📊 View Competition Results',
  },
  parameters: {
    docs: {
      description: {
        story: 'Button for viewing competition scores and leaderboards.',
      },
    },
  },
};

export const SafetyProtocol: Story = {
  args: {
    variant: 'destructive',
    children: '⚠️ Report Safety Issue',
  },
  parameters: {
    docs: {
      description: {
        story: 'Emergency button for reporting safety violations or incidents.',
      },
    },
  },
};

export const ForumPost: Story = {
  args: {
    variant: 'ghost',
    children: '💬 Join Discussion',
  },
  parameters: {
    docs: {
      description: {
        story: 'Subtle button for forum interactions and community features.',
      },
    },
  },
};