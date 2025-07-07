import type { Meta, StoryObj } from '@storybook/react';
import { 
  Dialog, 
  DialogContent, 
  DialogDescription, 
  DialogFooter, 
  DialogHeader, 
  DialogTitle, 
  DialogTrigger,
  GlassDialog,
  PremiumDialog,
  SolidDialog
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Trophy, Target, Users, Calendar, CreditCard, Settings, Award, Zap } from 'lucide-react';
import { useState } from 'react';

const meta: Meta<typeof Dialog> = {
  title: 'Components/Fusion/Dialog',
  component: Dialog,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Premium Dialog component with glassmorphism effects, brand gradients, and smooth animations. Perfect for membership forms, confirmations, and premium interactions.',
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

// All Variants Showcase
export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-wrap gap-4 p-8">
      {/* Default Dialog */}
      <Dialog>
        <DialogTrigger asChild>
          <Button variant="outline">Default Dialog</Button>
        </DialogTrigger>
        <DialogContent variant="default">
          <DialogHeader>
            <DialogTitle>Range Reservation</DialogTitle>
            <DialogDescription>
              Book your shooting session at Boise Gun Club. Select your preferred time and discipline.
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-medium">Date</label>
                <input type="date" className="w-full p-2 border rounded-lg" />
              </div>
              <div>
                <label className="text-sm font-medium">Time</label>
                <select className="w-full p-2 border rounded-lg">
                  <option>9:00 AM</option>
                  <option>10:00 AM</option>
                  <option>11:00 AM</option>
                </select>
              </div>
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline">Cancel</Button>
            <Button>Book Session</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Glass Dialog */}
      <Dialog>
        <DialogTrigger asChild>
          <Button variant="outline">Glass Dialog</Button>
        </DialogTrigger>
        <DialogContent variant="glass">
          <DialogHeader>
            <DialogTitle>Tournament Results</DialogTitle>
            <DialogDescription>
              Congratulations on your performance in today's sporting clays competition!
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
              <div className="flex items-center gap-3">
                <Trophy className="h-8 w-8 text-leonard-yellow" />
                <div>
                  <h3 className="font-heading font-bold">2nd Place</h3>
                  <p className="text-sm opacity-80">Score: 87/100</p>
                </div>
              </div>
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline">View Details</Button>
            <Button>Share Result</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Premium Dialog */}
      <Dialog>
        <DialogTrigger asChild>
          <Button>Premium Dialog</Button>
        </DialogTrigger>
        <DialogContent variant="premium">
          <DialogHeader>
            <DialogTitle>Elite Membership Upgrade</DialogTitle>
            <DialogDescription>
              Unlock exclusive benefits and priority access to all club facilities.
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4">
            <div className="bg-gradient-to-r from-leonard-yellow/20 to-lahoma-orange/20 rounded-xl p-4 border border-leonard-yellow/30">
              <div className="flex items-center gap-3">
                <Zap className="h-8 w-8 text-lahoma-orange" />
                <div>
                  <h3 className="font-heading font-bold">Premium Benefits</h3>
                  <ul className="text-sm space-y-1 opacity-90">
                    <li>• Priority range booking</li>
                    <li>• 25% discount on lessons</li>
                    <li>• Exclusive member events</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline">Maybe Later</Button>
            <Button className="bg-leonard-yellow hover:bg-lahoma-orange text-black">
              Upgrade Now - $295/year
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Solid Dialog */}
      <Dialog>
        <DialogTrigger asChild>
          <Button variant="secondary">Solid Dialog</Button>
        </DialogTrigger>
        <DialogContent variant="solid">
          <DialogHeader>
            <DialogTitle>Safety Reminder</DialogTitle>
            <DialogDescription>
              Please review these important safety protocols before entering the range.
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-3">
            <div className="flex items-center gap-3 p-3 bg-red-50 dark:bg-red-950/20 rounded-lg">
              <div className="w-2 h-2 bg-red-500 rounded-full"></div>
              <span className="text-sm">Eye and ear protection required</span>
            </div>
            <div className="flex items-center gap-3 p-3 bg-amber-50 dark:bg-amber-950/20 rounded-lg">
              <div className="w-2 h-2 bg-amber-500 rounded-full"></div>
              <span className="text-sm">Follow range officer commands</span>
            </div>
            <div className="flex items-center gap-3 p-3 bg-green-50 dark:bg-green-950/20 rounded-lg">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span className="text-sm">Shotgun ammunition only</span>
            </div>
          </div>
          <DialogFooter>
            <Button>I Understand</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  ),
};

// Size Variations
export const SizeVariations: Story = {
  render: () => (
    <div className="flex flex-wrap gap-4 p-8">
      {/* Small Dialog */}
      <Dialog>
        <DialogTrigger asChild>
          <Button size="sm">Small Dialog</Button>
        </DialogTrigger>
        <DialogContent variant="glass" size="sm">
          <DialogHeader>
            <DialogTitle>Quick Confirmation</DialogTitle>
            <DialogDescription>
              Are you sure you want to cancel your reservation?
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button variant="outline" size="sm">No</Button>
            <Button size="sm">Yes, Cancel</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Default Size */}
      <Dialog>
        <DialogTrigger asChild>
          <Button>Default Dialog</Button>
        </DialogTrigger>
        <DialogContent variant="premium">
          <DialogHeader>
            <DialogTitle>Lesson Booking</DialogTitle>
            <DialogDescription>
              Schedule a lesson with one of our certified instructors.
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4">
            <div>
              <label className="text-sm font-medium">Instructor</label>
              <select className="w-full p-2 border rounded-lg">
                <option>Mike Thompson - NSCA Level III</option>
                <option>Sarah Williams - NSCA Level II</option>
                <option>Tom Rodriguez - NSCA Level II</option>
              </select>
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline">Cancel</Button>
            <Button>Book Lesson</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Large Dialog */}
      <Dialog>
        <DialogTrigger asChild>
          <Button size="lg">Large Dialog</Button>
        </DialogTrigger>
        <DialogContent variant="glass" size="lg">
          <DialogHeader>
            <DialogTitle>Tournament Registration</DialogTitle>
            <DialogDescription>
              Register for the Idaho State Sporting Clays Championship. Complete all required information.
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-medium">First Name</label>
                <input type="text" className="w-full p-2 border rounded-lg" />
              </div>
              <div>
                <label className="text-sm font-medium">Last Name</label>
                <input type="text" className="w-full p-2 border rounded-lg" />
              </div>
            </div>
            <div>
              <label className="text-sm font-medium">NSCA Number</label>
              <input type="text" className="w-full p-2 border rounded-lg" />
            </div>
            <div>
              <label className="text-sm font-medium">Classification</label>
              <select className="w-full p-2 border rounded-lg">
                <option>D Class</option>
                <option>C Class</option>
                <option>B Class</option>
                <option>A Class</option>
                <option>AA Class</option>
                <option>Master Class</option>
              </select>
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline">Cancel</Button>
            <Button>Register - $85</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Extra Large Dialog */}
      <Dialog>
        <DialogTrigger asChild>
          <Button variant="outline">XL Dialog</Button>
        </DialogTrigger>
        <DialogContent variant="premium" size="xl">
          <DialogHeader>
            <DialogTitle>Member Dashboard</DialogTitle>
            <DialogDescription>
              Your complete shooting statistics and membership overview.
            </DialogDescription>
          </DialogHeader>
          <div className="grid grid-cols-3 gap-4">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
              <div className="flex items-center gap-3">
                <Target className="h-6 w-6 text-brand-blue" />
                <div>
                  <h3 className="font-medium">Trap Average</h3>
                  <p className="text-2xl font-bold">21.3</p>
                </div>
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
              <div className="flex items-center gap-3">
                <Trophy className="h-6 w-6 text-leonard-yellow" />
                <div>
                  <h3 className="font-medium">Tournaments</h3>
                  <p className="text-2xl font-bold">12</p>
                </div>
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
              <div className="flex items-center gap-3">
                <Award className="h-6 w-6 text-brand-green" />
                <div>
                  <h3 className="font-medium">Best Score</h3>
                  <p className="text-2xl font-bold">24/25</p>
                </div>
              </div>
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline">Export Stats</Button>
            <Button>Update Profile</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  ),
};

// Preset Components
export const PresetComponents: Story = {
  render: () => (
    <div className="flex flex-wrap gap-4 p-8">
      {/* Glass Dialog Preset */}
      <GlassDialog
        trigger={<Button variant="outline">Glass Preset</Button>}
        title="Course Weather Update"
        description="Current conditions for the sporting clays course."
      >
        <div className="space-y-3">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 border border-white/20">
            <div className="flex justify-between">
              <span>Temperature</span>
              <span className="font-medium">72°F</span>
            </div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 border border-white/20">
            <div className="flex justify-between">
              <span>Wind Speed</span>
              <span className="font-medium">8 mph</span>
            </div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 border border-white/20">
            <div className="flex justify-between">
              <span>Visibility</span>
              <span className="font-medium">Excellent</span>
            </div>
          </div>
        </div>
        <DialogFooter>
          <Button>Perfect Shooting Weather!</Button>
        </DialogFooter>
      </GlassDialog>

      {/* Premium Dialog Preset */}
      <PremiumDialog
        trigger={<Button>Premium Preset</Button>}
        title="Championship Qualification"
        description="You've qualified for the regional championship tournament!"
        size="lg"
      >
        <div className="space-y-4">
          <div className="bg-gradient-to-r from-leonard-yellow/20 to-lahoma-orange/20 rounded-xl p-6 border border-leonard-yellow/30 text-center">
            <Trophy className="h-12 w-12 text-lahoma-orange mx-auto mb-3" />
            <h3 className="font-heading font-bold text-xl mb-2">Congratulations!</h3>
            <p className="text-sm opacity-90">
              Your recent scores of 89, 92, and 87 qualify you for the Western Regional Championship.
              This is a huge achievement - only the top 50 shooters from Idaho, Montana, and Wyoming qualify.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div>
              <strong>Tournament:</strong> Western Regional Championship
            </div>
            <div>
              <strong>Date:</strong> April 15-17, 2025
            </div>
            <div>
              <strong>Location:</strong> Phoenix, Arizona
            </div>
            <div>
              <strong>Travel Stipend:</strong> $500 (covered by club)
            </div>
          </div>
        </div>
        <DialogFooter>
          <Button variant="outline">View Details</Button>
          <Button className="bg-leonard-yellow hover:bg-lahoma-orange text-black">
            Accept Invitation
          </Button>
        </DialogFooter>
      </PremiumDialog>

      {/* Solid Dialog Preset */}
      <SolidDialog
        trigger={<Button variant="secondary">Solid Preset</Button>}
        title="Equipment Checkout"
        description="Rental equipment must be returned by closing time."
      >
        <div className="space-y-3">
          <div className="flex justify-between items-center p-3 bg-muted rounded-lg">
            <span>Beretta A400 (12ga)</span>
            <span className="text-sm text-muted-foreground">Due: 8:00 PM</span>
          </div>
          <div className="flex justify-between items-center p-3 bg-muted rounded-lg">
            <span>Eye Protection</span>
            <span className="text-sm text-muted-foreground">Due: 8:00 PM</span>
          </div>
          <div className="flex justify-between items-center p-3 bg-muted rounded-lg">
            <span>Ear Protection</span>
            <span className="text-sm text-muted-foreground">Due: 8:00 PM</span>
          </div>
        </div>
        <DialogFooter>
          <Button variant="outline">Extend Rental</Button>
          <Button>Return Equipment</Button>
        </DialogFooter>
      </SolidDialog>
    </div>
  ),
};

// Gun Club Scenarios
export const GunClubScenarios: Story = {
  render: () => (
    <div className="flex flex-wrap gap-4 p-8">
      {/* Membership Payment */}
      <Dialog>
        <DialogTrigger asChild>
          <Button className="bg-leonard-yellow hover:bg-lahoma-orange text-black">
            <CreditCard className="h-4 w-4 mr-2" />
            Renew Membership
          </Button>
        </DialogTrigger>
        <DialogContent variant="premium" size="lg">
          <DialogHeader>
            <DialogTitle>Membership Renewal</DialogTitle>
            <DialogDescription>
              Renew your annual membership and continue enjoying all club benefits.
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4">
            <div className="bg-gradient-to-r from-leonard-yellow/20 to-lahoma-orange/20 rounded-xl p-4 border border-leonard-yellow/30">
              <h3 className="font-heading font-bold mb-2">Elite Membership - $295/year</h3>
              <ul className="text-sm space-y-1 opacity-90">
                <li>✓ Unlimited range access (trap, skeet, sporting clays)</li>
                <li>✓ 25% discount on lessons and equipment rental</li>
                <li>✓ Priority tournament registration</li>
                <li>✓ Guest privileges (2 guests per visit)</li>
                <li>✓ Exclusive member events and socials</li>
              </ul>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-medium">Card Number</label>
                <input type="text" placeholder="1234 5678 9012 3456" className="w-full p-2 border rounded-lg" />
              </div>
              <div>
                <label className="text-sm font-medium">Expiry</label>
                <input type="text" placeholder="MM/YY" className="w-full p-2 border rounded-lg" />
              </div>
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline">Cancel</Button>
            <Button className="bg-leonard-yellow hover:bg-lahoma-orange text-black">
              Pay $295 - Renew Membership
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* League Registration */}
      <Dialog>
        <DialogTrigger asChild>
          <Button variant="outline">
            <Users className="h-4 w-4 mr-2" />
            Join League
          </Button>
        </DialogTrigger>
        <DialogContent variant="glass">
          <DialogHeader>
            <DialogTitle>Spring Trap League Registration</DialogTitle>
            <DialogDescription>
              Join our weekly trap league running every Tuesday at 6:00 PM.
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
              <h3 className="font-heading font-bold mb-3">League Details</h3>
              <div className="grid grid-cols-2 gap-3 text-sm">
                <div>
                  <strong>Duration:</strong> 10 weeks
                </div>
                <div>
                  <strong>Schedule:</strong> Tuesdays 6:00 PM
                </div>
                <div>
                  <strong>Format:</strong> 16-yard trap
                </div>
                <div>
                  <strong>Cost:</strong> $120 (includes targets)
                </div>
              </div>
            </div>
            <div>
              <label className="text-sm font-medium">Preferred Squad</label>
              <select className="w-full p-2 border rounded-lg">
                <option>Squad A (6:00 PM)</option>
                <option>Squad B (6:30 PM)</option>
                <option>Squad C (7:00 PM)</option>
                <option>No preference</option>
              </select>
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline">Cancel</Button>
            <Button>Register - $120</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Tournament Entry */}
      <Dialog>
        <DialogTrigger asChild>
          <Button>
            <Trophy className="h-4 w-4 mr-2" />
            Enter Tournament
          </Button>
        </DialogTrigger>
        <DialogContent variant="premium" size="xl">
          <DialogHeader>
            <DialogTitle>Idaho State Sporting Clays Championship</DialogTitle>
            <DialogDescription>
              The premier sporting clays event in Idaho. NSCA sanctioned with cash prizes.
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gradient-to-r from-leonard-yellow/20 to-lahoma-orange/20 rounded-xl p-4 border border-leonard-yellow/30">
                <h3 className="font-heading font-bold mb-2">Event Details</h3>
                <div className="space-y-1 text-sm">
                  <div><strong>Date:</strong> March 15-16, 2025</div>
                  <div><strong>Format:</strong> 100 sporting clays</div>
                  <div><strong>Entry Fee:</strong> $85</div>
                  <div><strong>Prize Fund:</strong> $15,000</div>
                </div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                <h3 className="font-heading font-bold mb-2">Categories</h3>
                <div className="space-y-1 text-sm">
                  <div>• Open (All classifications)</div>
                  <div>• Ladies</div>
                  <div>• Junior (Under 18)</div>
                  <div>• Veteran (Over 65)</div>
                  <div>• Sub-gauge (20ga, 28ga, .410)</div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-medium">NSCA Number</label>
                <input type="text" className="w-full p-2 border rounded-lg" />
              </div>
              <div>
                <label className="text-sm font-medium">Classification</label>
                <select className="w-full p-2 border rounded-lg">
                  <option>AA Class</option>
                  <option>A Class</option>
                  <option>B Class</option>
                  <option>C Class</option>
                  <option>D Class</option>
                </select>
              </div>
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline">Save for Later</Button>
            <Button className="bg-leonard-yellow hover:bg-lahoma-orange text-black">
              Enter Tournament - $85
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  ),
};