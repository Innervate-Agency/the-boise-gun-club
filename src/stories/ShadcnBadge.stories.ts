import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { Badge } from '@/components/ui/badge';

const meta: Meta<typeof Badge> = {
  title: 'Boise Gun Club/Badge',
  component: Badge,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Status indicators and labels using our official brand colors. Perfect for member status, event categories, achievement levels, and safety alerts.',
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
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['default', 'secondary', 'destructive', 'outline'],
      description: 'The visual style variant of the badge',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// Basic badge variants
export const Default: Story = {
  args: {
    children: 'Active Member',
  },
};

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    children: 'Guest',
  },
};

export const Destructive: Story = {
  args: {
    variant: 'destructive',
    children: 'Safety Violation',
  },
};

export const Outline: Story = {
  args: {
    variant: 'outline',
    children: 'Pending',
  },
};

// Member status badges
export const EliteMember: Story = {
  args: {
    children: '🏆 Elite Member',
    className: 'bg-gradient-to-r from-[#F28705] to-[#F25C05] text-white border-0',
  },
  parameters: {
    docs: {
      description: {
        story: 'Premium member status badge with gradient styling.',
      },
    },
  },
};

export const BasicMember: Story = {
  args: {
    children: '👤 Basic Member',
    variant: 'outline',
    className: 'border-[#5198cd] text-[#5198cd]',
  },
};

export const ExpiredMembership: Story = {
  args: {
    children: '⏰ Expired',
    variant: 'destructive',
  },
};

// Event category badges
export const Competition: Story = {
  args: {
    children: '🎯 Competition',
    className: 'bg-[#F23005]/10 text-[#F23005] border border-[#F23005]/20',
  },
  parameters: {
    docs: {
      description: {
        story: 'Event category badge for competitive shooting events.',
      },
    },
  },
};

export const Training: Story = {
  args: {
    children: '📚 Training',
    className: 'bg-[#5198cd]/10 text-[#5198cd] border border-[#5198cd]/20',
  },
};

export const FunShoot: Story = {
  args: {
    children: '🎉 Fun Shoot',
    className: 'bg-[#6f7822]/10 text-[#6f7822] border border-[#6f7822]/20',
  },
};

export const Maintenance: Story = {
  args: {
    children: '🔧 Maintenance',
    className: 'bg-[#F2CB05]/10 text-[#F28705] border border-[#F2CB05]/20',
  },
};

// Achievement badges
export const PerfectRound: Story = {
  args: {
    children: '🎯 Perfect Round',
    className: 'bg-gradient-to-r from-[#F2CB05] to-[#F28705] text-white border-0',
  },
  parameters: {
    docs: {
      description: {
        story: 'Achievement badge for hitting all 25 targets in trap shooting.',
      },
    },
  },
};

export const ClayMaster: Story = {
  args: {
    children: '🏆 Clay Master',
    className: 'bg-gradient-to-r from-[#6f7822] to-[#3F6331] text-white border-0',
  },
};

export const StateChampion: Story = {
  args: {
    children: '👑 State Champion',
    className: 'bg-gradient-to-r from-[#F23005] to-[#8C394B] text-white border-0',
  },
};

// Safety status badges
export const SafetyCertified: Story = {
  args: {
    children: '✅ Safety Certified',
    className: 'bg-[#6f7822]/10 text-[#6f7822] border border-[#6f7822]/20',
  },
  parameters: {
    docs: {
      description: {
        story: 'Safety certification status badge.',
      },
    },
  },
};

export const SafetyAlert: Story = {
  args: {
    children: '⚠️ Safety Alert',
    variant: 'destructive',
  },
};

export const RangeOfficer: Story = {
  args: {
    children: '🛡️ Range Officer',
    className: 'bg-[#4982A6]/10 text-[#4982A6] border border-[#4982A6]/20',
  },
};

// Facility status badges
export const RangeOpen: Story = {
  args: {
    children: '🟢 Range Open',
    className: 'bg-[#6f7822]/10 text-[#6f7822] border border-[#6f7822]/20',
  },
};

export const RangeClosed: Story = {
  args: {
    children: '🔴 Range Closed',
    variant: 'destructive',
  },
};

export const WeatherDelay: Story = {
  args: {
    children: '🌧️ Weather Delay',
    className: 'bg-[#F2CB05]/10 text-[#F28705] border border-[#F2CB05]/20',
  },
};

// Notification badges
export const NewMessage: Story = {
  args: {
    children: '3',
    className: 'w-6 h-6 rounded-full bg-[#F23005] text-white flex items-center justify-center text-xs font-bold',
  },
  parameters: {
    docs: {
      description: {
        story: 'Notification count badge for unread messages or alerts.',
      },
    },
  },
};

export const UpdateAvailable: Story = {
  args: {
    children: '!',
    className: 'w-6 h-6 rounded-full bg-[#F2CB05] text-[#2F3135] flex items-center justify-center text-xs font-bold',
  },
};