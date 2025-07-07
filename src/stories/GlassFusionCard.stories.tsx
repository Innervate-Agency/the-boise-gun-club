import type { Meta, StoryObj } from '@storybook/react';
import { GlassFusionCard } from '@/components/ui/glass-fusion-card';
import { PremiumButton } from '@/components/ui/premium-button';
import { Target, Star } from 'lucide-react';

const meta: Meta<typeof GlassFusionCard> = {
  title: 'Components/UI/Glass Fusion Card',
  component: GlassFusionCard,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: 'Elite Membership',
    description: '$75/year + $6 per round',
    badge: 'Most Popular',
    children: (
      <PremiumButton className="w-full" effect="glow">
        Join Today
      </PremiumButton>
    ),
  },
};

export const WithBlueGradient: Story = {
  args: {
    title: 'Range Training',
    badge: 'New',
    headerGradient: 'from-[#5198cd] to-[#3c81c0]',
    splashColor: '#5198cd',
    children: (
      <div>
        <p className="font-body text-gray-600 dark:text-gray-300 mb-4">
          Professional instruction for all skill levels
        </p>
        <PremiumButton variant="outline" className="w-full">
          Learn More
        </PremiumButton>
      </div>
    ),
  },
};

export const GreenVariant: Story = {
  args: {
    title: 'Competition Events',
    headerGradient: 'from-[#6f7822] to-[#3F6331]',
    splashColor: '#6f7822',
    children: (
      <div>
        <p className="font-body text-gray-600 dark:text-gray-300 mb-4">
          Weekly tournaments and seasonal championships
        </p>
        <PremiumButton className="w-full bg-[#6f7822] hover:bg-[#3F6331]">
          Register
        </PremiumButton>
      </div>
    ),
  },
};