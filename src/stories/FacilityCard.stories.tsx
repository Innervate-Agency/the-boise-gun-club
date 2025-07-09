import type { Meta, StoryObj } from '@storybook/react';
import FacilityCard from '@/components/ui/FacilityCard';

const meta: Meta<typeof FacilityCard> = {
  title: 'Components/UI/FacilityCard',
  component: FacilityCard,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: 'Trap & Skeet Fields',
    icon: '/images/events.jpg',
    description: 'Our club features 10 trap fields and 5 skeet fields, all equipped with state-of-the-art lighting for night shooting.',
    linkText: 'View Ranges',
    link: '/ranges',
  },
  render: (args) => (
    <div className="w-[400px]">
      <FacilityCard {...args} />
    </div>
  ),
};
