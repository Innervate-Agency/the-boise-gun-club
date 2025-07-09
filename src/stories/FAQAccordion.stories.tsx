import type { Meta, StoryObj } from '@storybook/react';
import {
  FAQAccordion,
  sampleFAQs,
} from '@/components/ui/faq-accordion';

const meta: Meta<typeof FAQAccordion> = {
  title: 'Components/UI/FAQAccordion',
  component: FAQAccordion,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    faqs: sampleFAQs,
  },
  render: (args) => (
    <div className="w-full max-w-4xl mx-auto">
      <FAQAccordion {...args} />
    </div>
  ),
};

export const CompactView: Story = {
  args: {
    faqs: sampleFAQs,
    variant: 'compact',
    showCategories: false,
  },
  render: (args) => (
    <div className="w-full max-w-2xl mx-auto">
      <FAQAccordion {...args} />
    </div>
  ),
};

export const CardView: Story = {
  args: {
    faqs: sampleFAQs,
    variant: 'card',
  },
  render: (args) => (
    <div className="w-full max-w-4xl mx-auto">
      <FAQAccordion {...args} />
    </div>
  ),
};
