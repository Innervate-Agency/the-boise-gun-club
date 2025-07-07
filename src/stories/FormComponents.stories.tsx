import type { Meta, StoryObj } from '@storybook/react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Switch } from '@/components/ui/switch';
import { Slider } from '@/components/ui/slider';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const meta: Meta = {
  title: 'Components/Forms/Form Elements',
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: 'Essential form components with Boise Gun Club styling and accessibility features.',
      },
    },
  },
};

export default meta;

// Input Components
export const Inputs: StoryObj = {
  render: () => (
    <div className="space-y-8 p-6 max-w-2xl">
      <Card>
        <CardHeader>
          <CardTitle className="font-heading">Input Components</CardTitle>
          <CardDescription>Text inputs with various states and types</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input type="email" id="email" placeholder="member@boisegunclub.com" />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="phone">Phone Number</Label>
              <Input type="tel" id="phone" placeholder="(208) 555-0123" />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="member-id">Member ID</Label>
              <Input id="member-id" placeholder="BGC-12345" />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="disabled">Disabled Input</Label>
              <Input id="disabled" placeholder="Cannot edit" disabled />
            </div>
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="message">Message</Label>
            <Textarea 
              id="message" 
              placeholder="Tell us about your shooting experience or any questions..."
              className="min-h-[100px]"
            />
          </div>
        </CardContent>
      </Card>
    </div>
  ),
};

// Select and Dropdown Components
export const Selects: StoryObj = {
  render: () => (
    <div className="space-y-8 p-6 max-w-2xl">
      <Card>
        <CardHeader>
          <CardTitle className="font-heading">Select Components</CardTitle>
          <CardDescription>Dropdown selections for forms</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label>Membership Type</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Choose membership" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="recreation">Recreation</SelectItem>
                  <SelectItem value="competition">Competition</SelectItem>
                  <SelectItem value="championship">Championship</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div className="space-y-2">
              <Label>Shooting Discipline</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select discipline" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="trap">Trap</SelectItem>
                  <SelectItem value="skeet">Skeet</SelectItem>
                  <SelectItem value="sporting-clays">Sporting Clays</SelectItem>
                  <SelectItem value="five-stand">5-Stand</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  ),
};

// Checkbox and Radio Components
export const ChoiceComponents: StoryObj = {
  render: () => (
    <div className="space-y-8 p-6 max-w-2xl">
      <Card>
        <CardHeader>
          <CardTitle className="font-heading">Choice Components</CardTitle>
          <CardDescription>Checkboxes, radio buttons, and switches</CardDescription>
        </CardHeader>
        <CardContent className="space-y-8">
          {/* Checkboxes */}
          <div className="space-y-4">
            <Label className="text-base font-medium">Range Preferences (Select all that apply)</Label>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <Checkbox id="trap-range" />
                <Label htmlFor="trap-range">Trap Range Access</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="skeet-range" />
                <Label htmlFor="skeet-range">Skeet Range Access</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="sporting-clays" />
                <Label htmlFor="sporting-clays">Sporting Clays Course</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="newsletter" defaultChecked />
                <Label htmlFor="newsletter">Monthly Newsletter</Label>
              </div>
            </div>
          </div>
          
          {/* Radio Groups */}
          <div className="space-y-4">
            <Label className="text-base font-medium">Experience Level</Label>
            <RadioGroup defaultValue="intermediate">
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="beginner" id="beginner" />
                <Label htmlFor="beginner">Beginner (0-2 years)</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="intermediate" id="intermediate" />
                <Label htmlFor="intermediate">Intermediate (3-10 years)</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="advanced" id="advanced" />
                <Label htmlFor="advanced">Advanced (10+ years)</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="competitive" id="competitive" />
                <Label htmlFor="competitive">Competitive Shooter</Label>
              </div>
            </RadioGroup>
          </div>
          
          {/* Switches */}
          <div className="space-y-4">
            <Label className="text-base font-medium">Notification Settings</Label>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <Label htmlFor="email-notifications" className="flex-1">Email Notifications</Label>
                <Switch id="email-notifications" defaultChecked />
              </div>
              <div className="flex items-center justify-between">
                <Label htmlFor="sms-notifications" className="flex-1">SMS Notifications</Label>
                <Switch id="sms-notifications" />
              </div>
              <div className="flex items-center justify-between">
                <Label htmlFor="event-reminders" className="flex-1">Event Reminders</Label>
                <Switch id="event-reminders" defaultChecked />
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  ),
};

// Slider Component
export const SliderComponent: StoryObj = {
  render: () => (
    <div className="space-y-8 p-6 max-w-2xl">
      <Card>
        <CardHeader>
          <CardTitle className="font-heading">Slider Components</CardTitle>
          <CardDescription>Range inputs for numeric values</CardDescription>
        </CardHeader>
        <CardContent className="space-y-8">
          <div className="space-y-4">
            <Label>Expected Monthly Visits</Label>
            <Slider defaultValue={[4]} max={20} min={1} step={1} />
            <div className="flex justify-between text-sm text-gray-500">
              <span>1 visit</span>
              <span>20+ visits</span>
            </div>
          </div>
          
          <div className="space-y-4">
            <Label>Annual Budget Range ($)</Label>
            <Slider defaultValue={[500, 2000]} max={5000} min={100} step={50} />
            <div className="flex justify-between text-sm text-gray-500">
              <span>$100</span>
              <span>$5,000+</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  ),
};

// Complete Form Example
export const CompleteForm: StoryObj = {
  render: () => (
    <div className="space-y-8 p-6 max-w-3xl">
      <Card>
        <CardHeader>
          <CardTitle className="font-heading text-2xl">Membership Application</CardTitle>
          <CardDescription>Complete form showcasing all form components</CardDescription>
        </CardHeader>
        <CardContent className="space-y-8">
          {/* Personal Information */}
          <div className="space-y-4">
            <h3 className="text-lg font-heading font-semibold">Personal Information</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="first-name">First Name *</Label>
                <Input id="first-name" placeholder="John" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="last-name">Last Name *</Label>
                <Input id="last-name" placeholder="Smith" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email-form">Email *</Label>
                <Input type="email" id="email-form" placeholder="john.smith@email.com" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone-form">Phone</Label>
                <Input type="tel" id="phone-form" placeholder="(208) 555-0123" />
              </div>
            </div>
          </div>
          
          {/* Membership Details */}
          <div className="space-y-4">
            <h3 className="text-lg font-heading font-semibold">Membership Details</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label>Membership Type</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Choose membership" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="recreation">Recreation - $299/year</SelectItem>
                    <SelectItem value="competition">Competition - $499/year</SelectItem>
                    <SelectItem value="championship">Championship - $799/year</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div className="space-y-2">
                <Label>Primary Discipline</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select discipline" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="trap">Trap</SelectItem>
                    <SelectItem value="skeet">Skeet</SelectItem>
                    <SelectItem value="sporting-clays">Sporting Clays</SelectItem>
                    <SelectItem value="five-stand">5-Stand</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
          
          {/* Experience Level */}
          <div className="space-y-4">
            <h3 className="text-lg font-heading font-semibold">Experience Level</h3>
            <RadioGroup defaultValue="intermediate">
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="beginner" id="form-beginner" />
                <Label htmlFor="form-beginner">Beginner (0-2 years)</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="intermediate" id="form-intermediate" />
                <Label htmlFor="form-intermediate">Intermediate (3-10 years)</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="advanced" id="form-advanced" />
                <Label htmlFor="form-advanced">Advanced (10+ years)</Label>
              </div>
            </RadioGroup>
          </div>
          
          {/* Additional Information */}
          <div className="space-y-4">
            <h3 className="text-lg font-heading font-semibold">Additional Information</h3>
            <div className="space-y-2">
              <Label htmlFor="comments">Comments or Questions</Label>
              <Textarea 
                id="comments" 
                placeholder="Tell us about your shooting goals, experience, or any questions you have..."
                className="min-h-[120px]"
              />
            </div>
          </div>
          
          {/* Agreements */}
          <div className="space-y-4">
            <h3 className="text-lg font-heading font-semibold">Agreements</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <Checkbox id="safety-rules" />
                <Label htmlFor="safety-rules">I agree to follow all club safety rules and regulations</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="waiver" />
                <Label htmlFor="waiver">I acknowledge the waiver and release of liability</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="newsletter-form" />
                <Label htmlFor="newsletter-form">Send me the monthly newsletter and event updates</Label>
              </div>
            </div>
          </div>
          
          {/* Submit */}
          <div className="flex gap-4 pt-4">
            <Button variant="outline" className="flex-1">
              Save Draft
            </Button>
            <Button variant="premium" className="flex-1">
              Submit Application
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  ),
};