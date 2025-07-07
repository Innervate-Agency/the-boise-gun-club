import type { Meta, StoryObj } from '@storybook/react';
import { 
  Alert, 
  AlertTitle, 
  AlertDescription,
  SuccessAlert,
  WarningAlert,
  ErrorAlert,
  InfoAlert,
  PremiumAlert
} from '@/components/ui/alert';
import { Trophy, Target, Zap, AlertCircle, CheckCircle2, Info, XCircle } from 'lucide-react';
import { useState } from 'react';

const meta: Meta<typeof Alert> = {
  title: 'Components/Fusion/Alert',
  component: Alert,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: 'Premium Alert component with ClickUp + Stripe fusion design. Features glassmorphism, brand gradients, animations, and dismissible functionality.',
      },
    },
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'success', 'warning', 'error', 'info', 'premium'],
    },
    size: {
      control: 'select',
      options: ['sm', 'default', 'lg'],
    },
    dismissible: {
      control: 'boolean',
    },
    animate: {
      control: 'boolean',
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

// Basic Alert Examples
export const AllVariants: Story = {
  render: () => (
    <div className="space-y-6 max-w-2xl">
      <h2 className="text-2xl font-heading font-bold mb-4">Alert Variants</h2>
      
      <Alert variant="success">
        <AlertTitle>Tournament Registration Successful!</AlertTitle>
        <AlertDescription>
          You've been registered for the Idaho State Sporting Clays Championship. 
          Confirmation email sent to your inbox.
        </AlertDescription>
      </Alert>

      <Alert variant="warning">
        <AlertTitle>Range Safety Reminder</AlertTitle>
        <AlertDescription>
          Eye and ear protection is required at all times on the range. 
          Please ensure your safety gear is properly fitted.
        </AlertDescription>
      </Alert>

      <Alert variant="error">
        <AlertTitle>Payment Failed</AlertTitle>
        <AlertDescription>
          Your membership renewal payment could not be processed. 
          Please check your payment method and try again.
        </AlertDescription>
      </Alert>

      <Alert variant="info">
        <AlertTitle>Weather Update</AlertTitle>
        <AlertDescription>
          Light rain expected this afternoon. All outdoor ranges remain open. 
          Covered shooting stations available.
        </AlertDescription>
      </Alert>

      <Alert variant="premium">
        <AlertTitle>Elite Member Exclusive</AlertTitle>
        <AlertDescription>
          Early access to the Spring Championship is now available! 
          Premium members get priority registration and 25% off entry fees.
        </AlertDescription>
      </Alert>
    </div>
  ),
};

// Interactive Dismissible Alerts
export const DismissibleAlerts: Story = {
  render: () => {
    const [alerts, setAlerts] = useState({
      success: true,
      warning: true,
      error: true,
      premium: true,
    });

    const dismissAlert = (type: keyof typeof alerts) => {
      setAlerts(prev => ({ ...prev, [type]: false }));
    };

    const resetAlerts = () => {
      setAlerts({ success: true, warning: true, error: true, premium: true });
    };

    return (
      <div className="space-y-6 max-w-2xl">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-heading font-bold">Dismissible Alerts</h2>
          <button 
            onClick={resetAlerts}
            className="px-4 py-2 bg-leonard-yellow text-black rounded-lg hover:bg-lahoma-orange transition-colors font-medium"
          >
            Reset All
          </button>
        </div>

        {alerts.success && (
          <Alert 
            variant="success" 
            dismissible 
            onDismiss={() => dismissAlert('success')}
          >
            <AlertTitle>Score Submitted Successfully</AlertTitle>
            <AlertDescription>
              Your trap shooting score of 23/25 has been recorded. Great shooting!
            </AlertDescription>
          </Alert>
        )}

        {alerts.warning && (
          <Alert 
            variant="warning" 
            dismissible 
            onDismiss={() => dismissAlert('warning')}
          >
            <AlertTitle>Equipment Checkout Reminder</AlertTitle>
            <AlertDescription>
              Your rental shotgun checkout expires in 30 minutes. Please return to the pro shop.
            </AlertDescription>
          </Alert>
        )}

        {alerts.error && (
          <Alert 
            variant="error" 
            dismissible 
            onDismiss={() => dismissAlert('error')}
          >
            <AlertTitle>Range Temporarily Closed</AlertTitle>
            <AlertDescription>
              Skeet Field 3 is temporarily closed for maintenance. Expected reopening: 2:00 PM.
            </AlertDescription>
          </Alert>
        )}

        {alerts.premium && (
          <Alert 
            variant="premium" 
            dismissible 
            onDismiss={() => dismissAlert('premium')}
          >
            <AlertTitle>Championship Qualification Achieved!</AlertTitle>
            <AlertDescription>
              Congratulations! Your recent scores qualify you for the Regional Championship. 
              Premium coaching sessions now available.
            </AlertDescription>
          </Alert>
        )}
      </div>
    );
  },
};

// Custom Icons
export const CustomIcons: Story = {
  render: () => (
    <div className="space-y-6 max-w-2xl">
      <h2 className="text-2xl font-heading font-bold mb-4">Custom Icons</h2>

      <Alert variant="success" icon={Trophy}>
        <AlertTitle>Tournament Victory!</AlertTitle>
        <AlertDescription>
          Congratulations on winning the Monthly Trap League! Your trophy is ready for pickup.
        </AlertDescription>
      </Alert>

      <Alert variant="info" icon={Target}>
        <AlertTitle>Perfect Round Alert</AlertTitle>
        <AlertDescription>
          Amazing! You just shot a perfect 25/25 in sporting clays. This qualifies you for the club record board.
        </AlertDescription>
      </Alert>

      <Alert variant="premium" icon={Zap}>
        <AlertTitle>Power User Achievement</AlertTitle>
        <AlertDescription>
          You've unlocked premium member status! Enjoy exclusive benefits and priority bookings.
        </AlertDescription>
      </Alert>

      <Alert variant="warning" icon={false}>
        <AlertTitle>No Icon Alert</AlertTitle>
        <AlertDescription>
          This alert demonstrates the clean layout when no icon is displayed.
        </AlertDescription>
      </Alert>
    </div>
  ),
};

// Size Variations
export const SizeVariations: Story = {
  render: () => (
    <div className="space-y-6 max-w-2xl">
      <h2 className="text-2xl font-heading font-bold mb-4">Size Variations</h2>

      <Alert variant="info" size="sm">
        <AlertTitle>Small Alert</AlertTitle>
        <AlertDescription>
          Compact alert for subtle notifications.
        </AlertDescription>
      </Alert>

      <Alert variant="success" size="default">
        <AlertTitle>Default Alert</AlertTitle>
        <AlertDescription>
          Standard alert size for most use cases with balanced spacing and readability.
        </AlertDescription>
      </Alert>

      <Alert variant="premium" size="lg">
        <AlertTitle>Large Premium Alert</AlertTitle>
        <AlertDescription>
          Spacious alert perfect for important announcements and premium features. 
          The larger size draws attention and provides excellent readability for longer content.
        </AlertDescription>
      </Alert>
    </div>
  ),
};

// Preset Components Showcase
export const PresetComponents: Story = {
  render: () => (
    <div className="space-y-6 max-w-2xl">
      <h2 className="text-2xl font-heading font-bold mb-4">Preset Components</h2>

      <SuccessAlert dismissible>
        <AlertTitle>Membership Renewed</AlertTitle>
        <AlertDescription>
          Your annual membership has been successfully renewed. Welcome back for another year!
        </AlertDescription>
      </SuccessAlert>

      <WarningAlert>
        <AlertTitle>Ammunition Restriction</AlertTitle>
        <AlertDescription>
          Only lead shot ammunition permitted on sporting clays course. Steel shot available for purchase.
        </AlertDescription>
      </WarningAlert>

      <ErrorAlert dismissible>
        <AlertTitle>Booking Conflict</AlertTitle>
        <AlertDescription>
          The requested time slot is no longer available. Please select an alternative time.
        </AlertDescription>
      </ErrorAlert>

      <InfoAlert>
        <AlertTitle>New Course Layout</AlertTitle>
        <AlertDescription>
          Sporting clays course has been updated with 3 new challenging stations. Check the course map for details.
        </AlertDescription>
      </InfoAlert>

      <PremiumAlert dismissible>
        <AlertTitle>VIP Experience Available</AlertTitle>
        <AlertDescription>
          Upgrade to our VIP shooting experience: private instructor, premium ammunition, and personalized coaching session.
        </AlertDescription>
      </PremiumAlert>
    </div>
  ),
};

// Interactive Playground
export const Playground: Story = {
  args: {
    variant: 'success',
    size: 'default',
    dismissible: true,
    animate: true,
  },
  render: (args) => (
    <Alert {...args}>
      <AlertTitle>Interactive Alert</AlertTitle>
      <AlertDescription>
        Customize this alert using the controls panel to see different variants, sizes, and features in action.
      </AlertDescription>
    </Alert>
  ),
};

// Gun Club Themed Examples
export const GunClubExamples: Story = {
  render: () => (
    <div className="space-y-6 max-w-2xl">
      <h2 className="text-2xl font-heading font-bold mb-4">Gun Club Scenarios</h2>

      <Alert variant="success" icon={CheckCircle2}>
        <AlertTitle>Range Safety Course Completed</AlertTitle>
        <AlertDescription>
          Congratulations! You've successfully completed the mandatory safety course. 
          You're now authorized to use all club facilities.
        </AlertDescription>
      </Alert>

      <Alert variant="warning" icon={AlertCircle}>
        <AlertTitle>High Wind Advisory</AlertTitle>
        <AlertDescription>
          Wind speeds exceeding 25 mph. Sporting clays course may be challenging. 
          Consider shorter range disciplines today.
        </AlertDescription>
      </Alert>

      <Alert variant="error" icon={XCircle}>
        <AlertTitle>Equipment Malfunction</AlertTitle>
        <AlertDescription>
          Trap machine #3 is experiencing issues. Please use alternate fields. 
          Maintenance team has been notified.
        </AlertDescription>
      </Alert>

      <Alert variant="info" icon={Info}>
        <AlertTitle>League Registration Open</AlertTitle>
        <AlertDescription>
          Spring Trap League registration is now open! Shoot every Tuesday at 6:00 PM. 
          $120 for 10-week season includes targets and awards banquet.
        </AlertDescription>
      </Alert>

      <Alert variant="premium" icon={Trophy}>
        <AlertTitle>Championship Invitation</AlertTitle>
        <AlertDescription>
          Based on your outstanding performance, you've been invited to represent our club 
          at the State Championship. Travel expenses covered for qualifying members.
        </AlertDescription>
      </Alert>
    </div>
  ),
};