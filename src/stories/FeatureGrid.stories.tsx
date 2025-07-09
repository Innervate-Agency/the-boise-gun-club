import type { Meta, StoryObj } from '@storybook/react';
import { FeatureGrid } from '@/components/ui/feature-grid';
import { Target, Shield, Users } from 'lucide-react';

const meta: Meta<typeof FeatureGrid> = {
  title: 'Components/UI/FeatureGrid',
  component: FeatureGrid,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

const sampleFeatures = [
  {
    title: 'State-of-the-Art Ranges',
    description: 'Our facilities include 10 trap fields, 5 skeet fields, and a 5-stand course, all equipped with professional-grade lighting for day and night shooting.',
    icon: Target,
    link: { text: 'Explore Ranges' },
  },
  {
    title: 'Unwavering Safety Commitment',
    description: 'Safety is our top priority. We have certified Range Safety Officers on-site during all operating hours to ensure a safe and enjoyable experience for everyone.',
    icon: Shield,
    link: { text: 'Review Rules' },
  },
  {
    title: 'A Welcoming Community',
    description: 'Join a vibrant community of shooting enthusiasts. We host regular leagues, tournaments, and social events for members of all skill levels.',
    icon: Users,
    link: { text: 'Become a Member' },
  },
];

export const Default: Story = {
  args: {
    title: 'Why Choose Boise Gun Club?',
    subtitle: 'Premier Shooting Sports',
    description: 'Since 1948, Boise Gun Club has been the Treasure Valley\'s top destination for shotgun sports, offering world-class facilities and a welcoming community.',
    features: sampleFeatures,
  },
  render: (args) => <FeatureGrid {...args} />,
};

export const FourColumns: Story = {
  args: {
    features: [
      ...sampleFeatures,
      {
        title: 'Expert-Led Training',
        description: 'From beginner lessons to advanced coaching, our certified instructors are here to help you improve your skills and achieve your shooting goals.',
        icon: Target,
        link: { text: 'See Training' },
      },
    ],
    columns: 4,
  },
  render: (args) => <FeatureGrid {...args} />,
};

export const GlassVariant: Story = {
  args: {
    title: 'Our Facilities',
    features: sampleFeatures,
    cardVariant: 'glass',
  },
  render: (args) => (
    <div className="bg-cover bg-center p-10" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1587174486073-ae5e3c2e6a04?q=80&w=2070&auto=format&fit=crop')" }}>
      <FeatureGrid {...args} />
    </div>
  ),
};