import type { Meta, StoryObj } from '@storybook/react'
import { CheckCircle, AlertTriangle, XCircle, Info, Zap, Shield, Trophy, Target } from 'lucide-react'
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'

const meta: Meta<typeof Alert> = {
  title: 'Components/UI/Alert',
  component: Alert,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => (
    <Alert {...args}>
      <AlertTitle>Heads up!</AlertTitle>
      <AlertDescription>
        You can add components to your app using the cli.
      </AlertDescription>
    </Alert>
  ),
};

export const Success: Story = {
  render: (args) => (
    <Alert variant="success" {...args}>
      <AlertTitle>Success!</AlertTitle>
      <AlertDescription>
        Your changes have been saved successfully.
      </AlertDescription>
    </Alert>
  ),
};

export const InfoAlert: Story = {
  render: () => (
    <Alert variant="info">
      <Info />
      <AlertTitle>Information</AlertTitle>
      <AlertDescription>
        This is an informational message.
      </AlertDescription>
    </Alert>
  ),
};

export const Warning: Story = {
  render: (args) => (
    <Alert variant="warning" {...args}>
      <AlertTitle>Warning!</AlertTitle>
      <AlertDescription>
        Please be careful when proceeding.
      </AlertDescription>
    </Alert>
  ),
};

export const Error: Story = {
  render: (args) => (
    <Alert variant="error" {...args}>
      <AlertTitle>Error!</AlertTitle>
      <AlertDescription>
        Something went wrong. Please try again.
      </AlertDescription>
    </Alert>
  ),
};

export const Premium: Story = {
  render: (args) => (
    <Alert variant="premium" {...args}>
      <AlertTitle>Premium Feature</AlertTitle>
      <AlertDescription>
        This is a premium feature. Thanks for being a member!
      </AlertDescription>
    </Alert>
  ),
};

export const Dismissible: Story = {
  render: (args) => (
    <Alert dismissible {...args}>
      <AlertTitle>Dismissible</AlertTitle>
      <AlertDescription>
        You can close this alert by clicking the 'X' icon.
      </AlertDescription>
    </Alert>
  ),
};