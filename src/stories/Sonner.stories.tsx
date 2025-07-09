import type { Meta, StoryObj } from '@storybook/react';
import { Toaster, toast } from '@/components/ui/sonner';
import { Button } from '@/components/ui/button';

const meta: Meta<typeof Toaster> = {
  title: 'Components/UI/Sonner',
  component: Toaster,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => (
    <div>
      <Toaster {...args} />
      <Button
        variant="outline"
        onClick={() =>
          toast("Event has been created", {
            description: "Sunday, December 03, 2023 at 9:00 AM",
            action: {
              label: "Undo",
              onClick: () => console.log("Undo"),
            },
          })
        }
      >
        Show Toast
      </Button>
    </div>
  ),
};
