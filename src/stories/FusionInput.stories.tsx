import type { Meta, StoryObj } from '@storybook/react';
import { 
  Input, 
  MemberIDInput,
  ScoreInput,
  NSCANumberInput
} from '@/components/ui/input';
import { Search, Mail, Phone, User, Lock, CreditCard } from 'lucide-react';

const meta: Meta<typeof Input> = {
  title: 'Components/Fusion/Input',
  component: Input,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: 'Premium Input component with micro-interactions, floating labels, and gun club specific presets.',
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const AllVariants: Story = {
  render: () => (
    <div className="space-y-6 max-w-md">
      <Input variant="default" placeholder="Default input" label="Default" />
      <Input variant="premium" placeholder="Premium input" label="Premium" />
      <Input variant="glass" placeholder="Glass input" label="Glass" />
      <Input variant="outline" placeholder="Outline input" label="Outline" />
      <Input variant="filled" placeholder="Filled input" label="Filled" />
    </div>
  ),
};

export const GunClubPresets: Story = {
  render: () => (
    <div className="space-y-6 max-w-md">
      <MemberIDInput memberType="individual" />
      <ScoreInput max={25} label="Trap Score" />
      <NSCANumberInput />
    </div>
  ),
};

export const WithIcons: Story = {
  render: () => (
    <div className="space-y-6 max-w-md">
      <Input 
        leftIcon={<Search className="h-4 w-4" />} 
        placeholder="Search members..." 
        label="Search"
        clearable
      />
      <Input 
        leftIcon={<Mail className="h-4 w-4" />} 
        type="email" 
        placeholder="member@example.com" 
        label="Email"
        variant="premium"
      />
      <Input 
        leftIcon={<Phone className="h-4 w-4" />} 
        type="tel" 
        placeholder="(555) 123-4567" 
        label="Phone"
        variant="glass"
      />
    </div>
  ),
};

export const FloatingLabels: Story = {
  render: () => (
    <div className="space-y-8 max-w-md">
      <Input 
        floatingLabel 
        label="Member Name" 
        variant="premium"
      />
      <Input 
        floatingLabel 
        label="NSCA Number" 
        type="number"
        variant="glass"
      />
      <Input 
        floatingLabel 
        label="Email Address" 
        type="email"
        variant="outline"
      />
    </div>
  ),
};

export const States: Story = {
  render: () => (
    <div className="space-y-6 max-w-md">
      <Input 
        placeholder="Loading..." 
        label="Loading State"
        loading
        helperText="Validating membership..."
      />
      <Input 
        placeholder="Success!" 
        label="Success State"
        success
        helperText="Valid member ID"
        value="M12345"
        readOnly
      />
      <Input 
        placeholder="Error..." 
        label="Error State"
        error
        helperText="Member ID not found"
        value="INVALID"
        readOnly
      />
    </div>
  ),
};

export const PasswordInput: Story = {
  render: () => (
    <div className="space-y-6 max-w-md">
      <Input 
        type="password"
        placeholder="Enter password"
        label="Password"
        variant="premium"
        leftIcon={<Lock className="h-4 w-4" />}
      />
      <Input 
        type="password"
        floatingLabel
        label="Confirm Password"
        variant="glass"
      />
    </div>
  ),
};