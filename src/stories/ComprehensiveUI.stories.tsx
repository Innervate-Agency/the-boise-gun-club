import type { Meta, StoryObj } from '@storybook/react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Switch } from '@/components/ui/switch';
import { Slider } from '@/components/ui/slider';
import { Progress } from '@/components/ui/progress';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Separator } from '@/components/ui/separator';
import { Skeleton } from '@/components/ui/skeleton';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  Dialog, 
  DialogContent, 
  DialogDescription, 
  DialogHeader, 
  DialogTitle, 
  DialogTrigger,
  DialogFooter
} from '@/components/ui/dialog';
import { 
  Sheet, 
  SheetContent, 
  SheetDescription, 
  SheetHeader, 
  SheetTitle, 
  SheetTrigger 
} from '@/components/ui/sheet';
import { 
  Tooltip, 
  TooltipContent, 
  TooltipProvider, 
  TooltipTrigger 
} from '@/components/ui/tooltip';
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuLabel, 
  DropdownMenuSeparator, 
  DropdownMenuTrigger 
} from '@/components/ui/dropdown-menu';
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from '@/components/ui/table';
import { PremiumButton } from '@/components/ui/premium-button';
import { GlassFusionCard } from '@/components/ui/glass-fusion-card';
import { FloatingBackground } from '@/components/ui/floating-background';
import { 
  AlertTriangle, 
  CheckCircle, 
  Info, 
  Target, 
  Trophy, 
  Star, 
  Settings, 
  User, 
  Calendar,
  Clock,
  MapPin,
  Phone,
  Mail,
  Zap,
  Shield,
  Award,
  ChevronDown,
  Menu,
  X,
  Eye,
  EyeOff,
  Upload,
  Download,
  Edit,
  Trash2,
  Plus,
  Minus,
  Search,
  Filter,
  ArrowRight,
  ExternalLink,
  Heart,
  Share
} from 'lucide-react';

const meta: Meta = {
  title: 'Components/Complete/UI Library',
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: 'Complete shadcn/ui component library with Boise Gun Club branding and Stripe + ClickUp design patterns.',
      },
    },
  },
};

export default meta;

// Forms & Inputs Showcase
export const FormsAndInputs: StoryObj = {
  render: () => (
    <div className="space-y-8 max-w-4xl">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-heading font-bold text-card-foreground mb-2">Forms & Inputs</h2>
        <p className="text-muted-foreground font-body">Professional form components with validation states</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <User className="w-5 h-5 text-accent-primary" />
              Input Components
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" placeholder="Enter your email" />
            </div>
            <div>
              <Label htmlFor="password">Password</Label>
              <Input id="password" type="password" placeholder="••••••••" />
            </div>
            <div>
              <Label htmlFor="phone">Phone</Label>
              <Input id="phone" type="tel" placeholder="(555) 123-4567" />
            </div>
            <div>
              <Label htmlFor="message">Message</Label>
              <Textarea id="message" placeholder="Type your message here..." />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Settings className="w-5 h-5 text-accent-primary" />
              Selection Controls
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <Label>Experience Level</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select your level" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="beginner">Beginner</SelectItem>
                  <SelectItem value="intermediate">Intermediate</SelectItem>
                  <SelectItem value="advanced">Advanced</SelectItem>
                  <SelectItem value="expert">Expert</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-3">
              <Label>Shooting Disciplines</Label>
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <Checkbox id="trap" />
                  <label htmlFor="trap">Trap Shooting</label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="skeet" />
                  <label htmlFor="skeet">Skeet Shooting</label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="sporting" />
                  <label htmlFor="sporting">Sporting Clays</label>
                </div>
              </div>
            </div>

            <div className="space-y-3">
              <Label>Membership Type</Label>
              <RadioGroup defaultValue="annual">
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="monthly" id="monthly" />
                  <label htmlFor="monthly">Monthly</label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="annual" id="annual" />
                  <label htmlFor="annual">Annual</label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="lifetime" id="lifetime" />
                  <label htmlFor="lifetime">Lifetime</label>
                </div>
              </RadioGroup>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Zap className="w-5 h-5 text-accent-primary" />
            Interactive Controls
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <Label htmlFor="notifications">Email Notifications</Label>
                <Switch id="notifications" />
              </div>
              <div className="flex items-center justify-between">
                <Label htmlFor="newsletter">Newsletter</Label>
                <Switch id="newsletter" defaultChecked />
              </div>
              <div className="flex items-center justify-between">
                <Label htmlFor="sms">SMS Alerts</Label>
                <Switch id="sms" />
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <Label>Skill Level (1-10)</Label>
                <Slider defaultValue={[5]} max={10} step={1} className="mt-2" />
              </div>
              <div>
                <Label>Budget Range</Label>
                <Slider defaultValue={[20, 80]} max={100} step={1} className="mt-2" />
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <Label>Registration Progress</Label>
                <Progress value={75} className="mt-2" />
              </div>
              <div>
                <Label>Season Progress</Label>
                <Progress value={33} className="mt-2" />
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  ),
};

// Buttons & Actions Showcase
export const ButtonsAndActions: StoryObj = {
  render: () => (
    <div className="space-y-8 max-w-4xl">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-heading font-bold text-card-foreground mb-2">Buttons & Actions</h2>
        <p className="text-muted-foreground font-body">Premium button components with effects and states</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <Card>
          <CardHeader>
            <CardTitle>Standard Buttons</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex flex-wrap gap-3">
              <Button>Default</Button>
              <Button variant="secondary">Secondary</Button>
              <Button variant="outline">Outline</Button>
              <Button variant="ghost">Ghost</Button>
              <Button variant="destructive">Destructive</Button>
            </div>
            <div className="flex flex-wrap gap-3">
              <Button size="sm">Small</Button>
              <Button size="default">Default</Button>
              <Button size="lg">Large</Button>
            </div>
            <div className="flex flex-wrap gap-3">
              <Button disabled>Disabled</Button>
              <Button>
                <Plus className="w-4 h-4 mr-2" />
                With Icon
              </Button>
              <Button>
                Loading...
                <Zap className="w-4 h-4 ml-2 animate-pulse" />
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Premium Buttons</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-3">
              <PremiumButton effect="lift" icon={<Trophy className="w-4 h-4" />}>
                Lift Effect
              </PremiumButton>
              <PremiumButton effect="glow" icon={<Star className="w-4 h-4" />}>
                Glow Effect
              </PremiumButton>
              <PremiumButton effect="pulse" icon={<Target className="w-4 h-4" />}>
                Pulse Effect
              </PremiumButton>
              <PremiumButton effect="shimmer" icon={<Award className="w-4 h-4" />}>
                Shimmer Effect
              </PremiumButton>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Action Groups</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="space-y-3">
              <h4 className="font-semibold text-card-foreground">File Actions</h4>
              <div className="flex gap-2">
                <Button size="sm" variant="outline">
                  <Upload className="w-4 h-4" />
                </Button>
                <Button size="sm" variant="outline">
                  <Download className="w-4 h-4" />
                </Button>
                <Button size="sm" variant="outline">
                  <Edit className="w-4 h-4" />
                </Button>
                <Button size="sm" variant="outline">
                  <Trash2 className="w-4 h-4" />
                </Button>
              </div>
            </div>

            <div className="space-y-3">
              <h4 className="font-semibold text-card-foreground">Social Actions</h4>
              <div className="flex gap-2">
                <Button size="sm" variant="outline">
                  <Heart className="w-4 h-4" />
                </Button>
                <Button size="sm" variant="outline">
                  <Share className="w-4 h-4" />
                </Button>
                <Button size="sm" variant="outline">
                  <ExternalLink className="w-4 h-4" />
                </Button>
              </div>
            </div>

            <div className="space-y-3">
              <h4 className="font-semibold text-card-foreground">Navigation</h4>
              <div className="flex gap-2">
                <Button size="sm" variant="outline">
                  <Search className="w-4 h-4" />
                </Button>
                <Button size="sm" variant="outline">
                  <Filter className="w-4 h-4" />
                </Button>
                <Button size="sm" variant="outline">
                  <Menu className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  ),
};

// Data Display Showcase
export const DataDisplay: StoryObj = {
  render: () => (
    <div className="space-y-8 max-w-6xl">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-heading font-bold text-card-foreground mb-2">Data Display</h2>
        <p className="text-muted-foreground font-body">Tables, avatars, badges and data presentation components</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle>Member Leaderboard</CardTitle>
            <CardDescription>Top performers this season</CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-12">#</TableHead>
                  <TableHead>Member</TableHead>
                  <TableHead>Score</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead className="text-right">Rounds</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell className="font-medium">1</TableCell>
                  <TableCell>
                    <div className="flex items-center gap-3">
                      <Avatar>
                        <AvatarImage src="/avatars/01.png" />
                        <AvatarFallback>JD</AvatarFallback>
                      </Avatar>
                      <div>
                        <div className="font-medium">John Doe</div>
                        <div className="text-sm text-muted-foreground">Expert</div>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="font-bold text-lg">248</div>
                  </TableCell>
                  <TableCell>
                    <Badge className="bg-[#F2CB05] text-black">Champion</Badge>
                  </TableCell>
                  <TableCell className="text-right">24</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">2</TableCell>
                  <TableCell>
                    <div className="flex items-center gap-3">
                      <Avatar>
                        <AvatarFallback>SM</AvatarFallback>
                      </Avatar>
                      <div>
                        <div className="font-medium">Sarah Miller</div>
                        <div className="text-sm text-muted-foreground">Advanced</div>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="font-bold text-lg">245</div>
                  </TableCell>
                  <TableCell>
                    <Badge className="bg-[#F28705] text-white">Elite</Badge>
                  </TableCell>
                  <TableCell className="text-right">22</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">3</TableCell>
                  <TableCell>
                    <div className="flex items-center gap-3">
                      <Avatar>
                        <AvatarFallback>RJ</AvatarFallback>
                      </Avatar>
                      <div>
                        <div className="font-medium">Robert Johnson</div>
                        <div className="text-sm text-muted-foreground">Advanced</div>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="font-bold text-lg">242</div>
                  </TableCell>
                  <TableCell>
                    <Badge variant="secondary">Pro</Badge>
                  </TableCell>
                  <TableCell className="text-right">20</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Badge Examples</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex flex-wrap gap-2">
                <Badge>Default</Badge>
                <Badge variant="secondary">Secondary</Badge>
                <Badge variant="outline">Outline</Badge>
                <Badge variant="destructive">Destructive</Badge>
              </div>
              <div className="flex flex-wrap gap-2">
                <Badge className="bg-[#F2CB05] text-black">Champion</Badge>
                <Badge className="bg-[#F28705] text-white">Elite</Badge>
                <Badge className="bg-[#5198cd] text-white">Pro</Badge>
                <Badge className="bg-[#6f7822] text-white">Member</Badge>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Avatar Gallery</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center gap-3">
                <Avatar className="h-8 w-8">
                  <AvatarFallback className="text-xs">SM</AvatarFallback>
                </Avatar>
                <Avatar>
                  <AvatarFallback>MD</AvatarFallback>
                </Avatar>
                <Avatar className="h-12 w-12">
                  <AvatarFallback>LG</AvatarFallback>
                </Avatar>
              </div>
              <div className="flex items-center gap-3">
                <Avatar>
                  <AvatarImage src="/avatars/01.png" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <Avatar>
                  <AvatarImage src="/avatars/02.png" />
                  <AvatarFallback>JL</AvatarFallback>
                </Avatar>
                <Avatar>
                  <AvatarImage src="/avatars/03.png" />
                  <AvatarFallback>IN</AvatarFallback>
                </Avatar>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Loading States</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-4/5" />
                <Skeleton className="h-4 w-3/5" />
              </div>
              <div className="flex items-center space-x-4">
                <Skeleton className="h-12 w-12 rounded-full" />
                <div className="space-y-2">
                  <Skeleton className="h-4 w-[200px]" />
                  <Skeleton className="h-4 w-[160px]" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  ),
};

// Overlays & Dialogs Showcase  
export const OverlaysAndDialogs: StoryObj = {
  render: () => (
    <TooltipProvider>
      <div className="space-y-8 max-w-4xl">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-heading font-bold text-card-foreground mb-2">Overlays & Dialogs</h2>
          <p className="text-muted-foreground font-body">Modal dialogs, sheets, tooltips and overlay components</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <CardTitle>Modal Dialogs</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <Dialog>
                <DialogTrigger asChild>
                  <Button>Open Registration Dialog</Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px]">
                  <DialogHeader>
                    <DialogTitle>Event Registration</DialogTitle>
                    <DialogDescription>
                      Register for the upcoming tournament. Enter your details below.
                    </DialogDescription>
                  </DialogHeader>
                  <div className="grid gap-4 py-4">
                    <div className="grid grid-cols-4 items-center gap-4">
                      <Label htmlFor="name" className="text-right">
                        Name
                      </Label>
                      <Input id="name" defaultValue="John Doe" className="col-span-3" />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                      <Label htmlFor="email" className="text-right">
                        Email
                      </Label>
                      <Input id="email" defaultValue="john@example.com" className="col-span-3" />
                    </div>
                  </div>
                  <DialogFooter>
                    <Button type="submit">Register</Button>
                  </DialogFooter>
                </DialogContent>
              </Dialog>

              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="outline">Open Settings Panel</Button>
                </SheetTrigger>
                <SheetContent>
                  <SheetHeader>
                    <SheetTitle>Account Settings</SheetTitle>
                    <SheetDescription>
                      Manage your account preferences and notification settings.
                    </SheetDescription>
                  </SheetHeader>
                  <div className="grid gap-4 py-4">
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <Label htmlFor="notifications">Email Notifications</Label>
                        <Switch id="notifications" />
                      </div>
                      <div className="flex items-center justify-between">
                        <Label htmlFor="newsletter">Newsletter</Label>
                        <Switch id="newsletter" defaultChecked />
                      </div>
                      <Separator />
                      <div>
                        <Label>Communication Preference</Label>
                        <Select>
                          <SelectTrigger className="mt-2">
                            <SelectValue placeholder="Select preference" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="email">Email Only</SelectItem>
                            <SelectItem value="sms">SMS Only</SelectItem>
                            <SelectItem value="both">Email & SMS</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                  </div>
                </SheetContent>
              </Sheet>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Interactive Elements</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h4 className="font-medium mb-3">Tooltips</h4>
                <div className="flex gap-3">
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button variant="outline" size="sm">
                        <Target className="w-4 h-4" />
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>View shooting targets</p>
                    </TooltipContent>
                  </Tooltip>

                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button variant="outline" size="sm">
                        <Trophy className="w-4 h-4" />
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Tournament leaderboard</p>
                    </TooltipContent>
                  </Tooltip>

                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button variant="outline" size="sm">
                        <Calendar className="w-4 h-4" />
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Event calendar</p>
                    </TooltipContent>
                  </Tooltip>
                </div>
              </div>

              <div>
                <h4 className="font-medium mb-3">Dropdown Menu</h4>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="outline">
                      Account Options
                      <ChevronDown className="w-4 h-4 ml-2" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="w-56">
                    <DropdownMenuLabel>My Account</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>
                      <User className="mr-2 h-4 w-4" />
                      <span>Profile</span>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <Settings className="mr-2 h-4 w-4" />
                      <span>Settings</span>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <Trophy className="mr-2 h-4 w-4" />
                      <span>Achievements</span>
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>
                      <span>Log out</span>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </TooltipProvider>
  ),
};

// Feedback & Status Showcase
export const FeedbackAndStatus: StoryObj = {
  render: () => (
    <div className="space-y-8 max-w-4xl">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-heading font-bold text-card-foreground mb-2">Feedback & Status</h2>
        <p className="text-muted-foreground font-body">Alerts, progress indicators and status components</p>
      </div>

      <div className="space-y-6">
        <Card>
          <CardHeader>
            <CardTitle>Alert Components</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <Alert>
              <Info className="h-4 w-4" />
              <AlertTitle>Information</AlertTitle>
              <AlertDescription>
                Your shooting session is scheduled for tomorrow at 10:00 AM.
              </AlertDescription>
            </Alert>

            <Alert className="border-green-200 bg-green-50 text-green-800 dark:border-green-800 dark:bg-green-950 dark:text-green-300">
              <CheckCircle className="h-4 w-4" />
              <AlertTitle>Success</AlertTitle>
              <AlertDescription>
                Your membership has been successfully renewed for another year.
              </AlertDescription>
            </Alert>

            <Alert className="border-yellow-200 bg-yellow-50 text-yellow-800 dark:border-yellow-800 dark:bg-yellow-950 dark:text-yellow-300">
              <AlertTriangle className="h-4 w-4" />
              <AlertTitle>Warning</AlertTitle>
              <AlertDescription>
                Range will be closed for maintenance this Sunday from 8 AM to 12 PM.
              </AlertDescription>
            </Alert>

            <Alert variant="destructive">
              <AlertTriangle className="h-4 w-4" />
              <AlertTitle>Error</AlertTitle>
              <AlertDescription>
                Payment failed. Please check your payment method and try again.
              </AlertDescription>
            </Alert>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Progress Indicators</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span>Season Progress</span>
                  <span>75%</span>
                </div>
                <Progress value={75} />
              </div>

              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span>Skill Development</span>
                  <span>60%</span>
                </div>
                <Progress value={60} className="[&>div]:bg-[#F28705]" />
              </div>

              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span>Tournament Points</span>
                  <span>90%</span>
                </div>
                <Progress value={90} className="[&>div]:bg-[#6f7822]" />
              </div>

              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span>Member Benefits</span>
                  <span>45%</span>
                </div>
                <Progress value={45} className="[&>div]:bg-[#5198cd]" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Status Cards</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between p-3 bg-green-50 dark:bg-green-950/20 rounded-lg border border-green-200 dark:border-green-800">
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <div>
                    <div className="font-medium text-green-800 dark:text-green-300">Range Open</div>
                    <div className="text-sm text-green-600 dark:text-green-400">All lanes available</div>
                  </div>
                </div>
                <Badge className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300">Active</Badge>
              </div>

              <div className="flex items-center justify-between p-3 bg-yellow-50 dark:bg-yellow-950/20 rounded-lg border border-yellow-200 dark:border-yellow-800">
                <div className="flex items-center gap-3">
                  <Clock className="w-5 h-5 text-yellow-600" />
                  <div>
                    <div className="font-medium text-yellow-800 dark:text-yellow-300">Maintenance</div>
                    <div className="text-sm text-yellow-600 dark:text-yellow-400">Lanes 1-3 unavailable</div>
                  </div>
                </div>
                <Badge className="bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300">Partial</Badge>
              </div>

              <div className="flex items-center justify-between p-3 bg-red-50 dark:bg-red-950/20 rounded-lg border border-red-200 dark:border-red-800">
                <div className="flex items-center gap-3">
                  <X className="w-5 h-5 text-red-600" />
                  <div>
                    <div className="font-medium text-red-800 dark:text-red-300">Range Closed</div>
                    <div className="text-sm text-red-600 dark:text-red-400">Weather conditions</div>
                  </div>
                </div>
                <Badge className="bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300">Closed</Badge>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  ),
};

// Layout & Navigation Showcase
export const LayoutAndNavigation: StoryObj = {
  render: () => (
    <div className="space-y-8 max-w-6xl">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-heading font-bold text-card-foreground mb-2">Layout & Navigation</h2>
        <p className="text-muted-foreground font-body">Tabs, separators and layout components</p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Tabbed Interface</CardTitle>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="overview" className="w-full">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="schedule">Schedule</TabsTrigger>
              <TabsTrigger value="leaderboard">Leaderboard</TabsTrigger>
              <TabsTrigger value="settings">Settings</TabsTrigger>
            </TabsList>
            
            <TabsContent value="overview" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Club Overview</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="text-center p-4 bg-muted rounded-lg">
                      <div className="text-2xl font-bold text-card-foreground">245</div>
                      <div className="text-sm text-muted-foreground">Active Members</div>
                    </div>
                    <div className="text-center p-4 bg-muted rounded-lg">
                      <div className="text-2xl font-bold text-card-foreground">12</div>
                      <div className="text-sm text-muted-foreground">Events This Month</div>
                    </div>
                    <div className="text-center p-4 bg-muted rounded-lg">
                      <div className="text-2xl font-bold text-card-foreground">8</div>
                      <div className="text-sm text-muted-foreground">Available Lanes</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="schedule" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Upcoming Events</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center gap-4 p-3 border rounded-lg">
                      <Calendar className="w-5 h-5 text-accent-primary" />
                      <div>
                        <div className="font-medium">Weekly Trap Shoot</div>
                        <div className="text-sm text-muted-foreground">Saturday, 9:00 AM</div>
                      </div>
                      <Badge className="ml-auto">Open</Badge>
                    </div>
                    <div className="flex items-center gap-4 p-3 border rounded-lg">
                      <Trophy className="w-5 h-5 text-accent-primary" />
                      <div>
                        <div className="font-medium">Monthly Tournament</div>
                        <div className="text-sm text-muted-foreground">Next Sunday, 8:00 AM</div>
                      </div>
                      <Badge variant="secondary" className="ml-auto">Registration Open</Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="leaderboard" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Monthly Leaderboard</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between p-3 border rounded-lg">
                      <div className="flex items-center gap-3">
                        <Badge className="bg-[#F2CB05] text-black">1</Badge>
                        <div>
                          <div className="font-medium">John Smith</div>
                          <div className="text-sm text-muted-foreground">248 points</div>
                        </div>
                      </div>
                      <Trophy className="w-5 h-5 text-[#F2CB05]" />
                    </div>
                    <div className="flex items-center justify-between p-3 border rounded-lg">
                      <div className="flex items-center gap-3">
                        <Badge className="bg-[#F28705] text-white">2</Badge>
                        <div>
                          <div className="font-medium">Sarah Jones</div>
                          <div className="text-sm text-muted-foreground">245 points</div>
                        </div>
                      </div>
                      <Award className="w-5 h-5 text-[#F28705]" />
                    </div>
                    <div className="flex items-center justify-between p-3 border rounded-lg">
                      <div className="flex items-center gap-3">
                        <Badge className="bg-[#5198cd] text-white">3</Badge>
                        <div>
                          <div className="font-medium">Mike Wilson</div>
                          <div className="text-sm text-muted-foreground">240 points</div>
                        </div>
                      </div>
                      <Star className="w-5 h-5 text-[#5198cd]" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="settings" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Account Preferences</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <Label htmlFor="email-notifications">Email Notifications</Label>
                      <div className="text-sm text-muted-foreground">Receive updates about events and scores</div>
                    </div>
                    <Switch id="email-notifications" defaultChecked />
                  </div>
                  <Separator />
                  <div className="flex items-center justify-between">
                    <div>
                      <Label htmlFor="weekly-digest">Weekly Digest</Label>
                      <div className="text-sm text-muted-foreground">Summary of weekly activities</div>
                    </div>
                    <Switch id="weekly-digest" />
                  </div>
                  <Separator />
                  <div className="flex items-center justify-between">
                    <div>
                      <Label htmlFor="tournament-alerts">Tournament Alerts</Label>
                      <div className="text-sm text-muted-foreground">Get notified about upcoming tournaments</div>
                    </div>
                    <Switch id="tournament-alerts" defaultChecked />
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  ),
};

// Complete Showcase with Fusion Components
export const CompleteShowcase: StoryObj = {
  render: () => (
    <FloatingBackground preset="gunclub" intensity="premium" className="min-h-screen p-8">
      <div className="max-w-7xl mx-auto space-y-12">
        <div className="text-center">
          <h1 className="text-5xl font-heading font-black text-card-foreground mb-4">
            Complete UI Library
          </h1>
          <p className="text-xl text-muted-foreground font-body max-w-3xl mx-auto">
            Professional components for building the Boise Gun Club website with Stripe design patterns
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <GlassFusionCard
            title="Forms & Inputs"
            description="Complete form system"
            badge="Essential"
            intensity="premium"
            headerGradient="from-[#F23005] to-[#f07b1d]"
            splashColor="#E3C03C"
          >
            <div className="space-y-4">
              <div className="text-sm text-muted-foreground font-body">
                Professional form components with validation, auto-completion, and smart interactions for member registration and event signup.
              </div>
              <PremiumButton effect="lift" className="w-full">
                View Forms
              </PremiumButton>
            </div>
          </GlassFusionCard>

          <GlassFusionCard
            title="Buttons & Actions"
            description="Premium button library"
            badge="Interactive"
            intensity="medium"
            headerGradient="from-[#5198cd] to-[#6f7822]"
            splashColor="#5198cd"
          >
            <div className="space-y-4">
              <div className="text-sm text-muted-foreground font-body">
                Enhanced buttons with lift, glow, pulse, and shimmer effects. Perfect for calls-to-action and user interactions.
              </div>
              <PremiumButton effect="glow" variant="outline" className="w-full">
                View Buttons
              </PremiumButton>
            </div>
          </GlassFusionCard>

          <GlassFusionCard
            title="Data Display"
            description="Tables and visualization"
            intensity="subtle"
            headerGradient="from-[#6f7822] to-[#909233]"
            splashColor="#6f7822"
          >
            <div className="space-y-4">
              <div className="text-sm text-muted-foreground font-body">
                Professional data tables, leaderboards, avatars, badges, and progress indicators for member dashboards.
              </div>
              <PremiumButton effect="pulse" variant="secondary" className="w-full">
                View Data
              </PremiumButton>
            </div>
          </GlassFusionCard>

          <GlassFusionCard
            title="Overlays & Dialogs"
            description="Modal and overlay system"
            badge="Advanced"
            intensity="medium"
            headerGradient="from-[#F2CB05] to-[#F28705]"
            splashColor="#F2CB05"
          >
            <div className="space-y-4">
              <div className="text-sm text-muted-foreground font-body">
                Modal dialogs, side sheets, tooltips, and dropdown menus for complex user interactions and settings.
              </div>
              <PremiumButton effect="shimmer" className="w-full">
                View Overlays
              </PremiumButton>
            </div>
          </GlassFusionCard>

          <GlassFusionCard
            title="Feedback & Status"
            description="Alerts and progress"
            intensity="premium"
            headerGradient="from-[#F28705] to-[#F23005]"
            splashColor="#F28705"
          >
            <div className="space-y-4">
              <div className="text-sm text-muted-foreground font-body">
                Alert components, progress indicators, status cards, and loading states for user feedback and system status.
              </div>
              <PremiumButton effect="lift" variant="outline" className="w-full">
                View Status
              </PremiumButton>
            </div>
          </GlassFusionCard>

          <GlassFusionCard
            title="Layout & Navigation"
            description="Structure and navigation"
            badge="Foundation"
            intensity="subtle"
            headerGradient="from-[#5198cd] to-[#3c81c0]"
            splashColor="#5198cd"
          >
            <div className="space-y-4">
              <div className="text-sm text-muted-foreground font-body">
                Tabbed interfaces, separators, navigation menus, and layout components for organizing complex interfaces.
              </div>
              <PremiumButton effect="glow" variant="secondary" className="w-full">
                View Layout
              </PremiumButton>
            </div>
          </GlassFusionCard>
        </div>

        <div className="text-center">
          <PremiumButton 
            effect="shimmer" 
            size="lg" 
            icon={<Target className="w-5 h-5" />}
            iconPosition="left"
          >
            Build 30 Pages with This Library
          </PremiumButton>
        </div>
      </div>
    </FloatingBackground>
  ),
};