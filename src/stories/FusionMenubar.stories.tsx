import type { Meta, StoryObj } from '@storybook/react'
import { 
  CheckIcon, 
  ChevronRightIcon, 
  CircleIcon,
  Settings,
  Trophy,
  Calendar,
  Target,
  Users,
  FileText,
  HelpCircle,
  LogOut,
  User,
  Mail,
  Phone
} from 'lucide-react'

import { 
  Menubar,
  MenubarMenu,
  MenubarTrigger,
  MenubarContent,
  MenubarItem,
  MenubarSeparator,
  MenubarLabel,
  MenubarCheckboxItem,
  MenubarRadioGroup,
  MenubarRadioItem,
  MenubarSub,
  MenubarSubTrigger,
  MenubarSubContent,
  MenubarShortcut,
  AdminMenubar,
  TournamentMenubar,
  ScheduleMenubar,
  SettingsMenuItem,
  TournamentMenuItem,
  ScheduleMenuItem,
  RangeMenuItem
} from '@/components/ui/menubar'

const meta: Meta<typeof Menubar> = {
  title: 'Fusion/Navigation/Menubar',
  component: Menubar,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: 'Fusion menubar component with ClickUp + Stripe design system. Features premium variants, glassmorphism effects, and gun club presets.',
      },
    },
  },
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof Menubar>

export const Default: Story = {
  render: () => (
    <Menubar>
      <MenubarMenu>
        <MenubarTrigger>File</MenubarTrigger>
        <MenubarContent>
          <MenubarItem>
            New Tournament <MenubarShortcut>⌘T</MenubarShortcut>
          </MenubarItem>
          <MenubarItem>
            Open Results <MenubarShortcut>⌘O</MenubarShortcut>
          </MenubarItem>
          <MenubarSeparator />
          <MenubarItem>
            Export Data <MenubarShortcut>⌘E</MenubarShortcut>
          </MenubarItem>
        </MenubarContent>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger>Edit</MenubarTrigger>
        <MenubarContent>
          <MenubarItem>
            Undo <MenubarShortcut>⌘Z</MenubarShortcut>
          </MenubarItem>
          <MenubarItem>
            Redo <MenubarShortcut>⇧⌘Z</MenubarShortcut>
          </MenubarItem>
          <MenubarSeparator />
          <MenubarItem>Find</MenubarItem>
          <MenubarItem>Replace</MenubarItem>
        </MenubarContent>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger>View</MenubarTrigger>
        <MenubarContent>
          <MenubarCheckboxItem checked>
            Show Toolbar
          </MenubarCheckboxItem>
          <MenubarCheckboxItem>
            Show Sidebar
          </MenubarCheckboxItem>
          <MenubarSeparator />
          <MenubarItem>
            Fullscreen <MenubarShortcut>F11</MenubarShortcut>
          </MenubarItem>
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  ),
}

export const Premium: Story = {
  render: () => (
    <Menubar variant="premium" size="lg">
      <MenubarMenu>
        <MenubarTrigger variant="premium" size="lg">
          <Trophy className="size-4 mr-2" />
          Tournaments
        </MenubarTrigger>
        <MenubarContent variant="premium">
          <MenubarLabel>Tournament Management</MenubarLabel>
          <MenubarItem variant="premium">
            <Trophy className="size-4 mr-2" />
            Create Tournament
            <MenubarShortcut>⌘T</MenubarShortcut>
          </MenubarItem>
          <MenubarItem variant="premium">
            <FileText className="size-4 mr-2" />
            View Results
            <MenubarShortcut>⌘R</MenubarShortcut>
          </MenubarItem>
          <MenubarSeparator />
          <MenubarSub>
            <MenubarSubTrigger variant="premium">
              <Settings className="size-4 mr-2" />
              Tournament Settings
            </MenubarSubTrigger>
            <MenubarSubContent variant="premium">
              <MenubarItem variant="premium">Scoring System</MenubarItem>
              <MenubarItem variant="premium">Time Limits</MenubarItem>
              <MenubarItem variant="premium">Classifications</MenubarItem>
            </MenubarSubContent>
          </MenubarSub>
          <MenubarSeparator />
          <MenubarItem variant="premium">
            Export Leaderboard
            <MenubarShortcut>⌘E</MenubarShortcut>
          </MenubarItem>
        </MenubarContent>
      </MenubarMenu>
      
      <MenubarMenu>
        <MenubarTrigger variant="premium" size="lg">
          <Calendar className="size-4 mr-2" />
          Schedule
        </MenubarTrigger>
        <MenubarContent variant="premium">
          <MenubarLabel>Event Scheduling</MenubarLabel>
          <MenubarItem variant="premium">
            <Calendar className="size-4 mr-2" />
            Add Event
            <MenubarShortcut>⌘N</MenubarShortcut>
          </MenubarItem>
          <MenubarItem variant="premium">
            <Users className="size-4 mr-2" />
            Manage Registrations
          </MenubarItem>
          <MenubarSeparator />
          <MenubarCheckboxItem>
            Show Weekend Events
          </MenubarCheckboxItem>
          <MenubarCheckboxItem checked>
            Show League Matches
          </MenubarCheckboxItem>
          <MenubarCheckboxItem>
            Show Practice Sessions
          </MenubarCheckboxItem>
        </MenubarContent>
      </MenubarMenu>
      
      <MenubarMenu>
        <MenubarTrigger variant="premium" size="lg">
          <Target className="size-4 mr-2" />
          Range
        </MenubarTrigger>
        <MenubarContent variant="premium">
          <MenubarLabel>Range Operations</MenubarLabel>
          <MenubarItem variant="premium">
            <Target className="size-4 mr-2" />
            Range Status
          </MenubarItem>
          <MenubarItem variant="premium">
            Safety Briefing
          </MenubarItem>
          <MenubarSeparator />
          <MenubarRadioGroup value="outdoor">
            <MenubarRadioItem value="indoor">
              Indoor Range
            </MenubarRadioItem>
            <MenubarRadioItem value="outdoor">
              Outdoor Range
            </MenubarRadioItem>
            <MenubarRadioItem value="trap">
              Trap Field
            </MenubarRadioItem>
          </MenubarRadioGroup>
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  ),
}

export const Glass: Story = {
  render: () => (
    <div className="bg-gradient-to-br from-slate-900 to-slate-800 p-8 rounded-xl">
      <Menubar variant="glass" size="lg">
        <MenubarMenu>
          <MenubarTrigger variant="glass" size="lg">
            <Target className="size-4 mr-2" />
            Live Range
          </MenubarTrigger>
          <MenubarContent variant="glass">
            <MenubarLabel>Live Operations</MenubarLabel>
            <MenubarItem variant="glass">
              <Target className="size-4 mr-2" />
              Current Status
            </MenubarItem>
            <MenubarItem variant="glass">
              <Users className="size-4 mr-2" />
              Active Shooters
            </MenubarItem>
            <MenubarSeparator />
            <MenubarCheckboxItem checked>
              Audio Alerts
            </MenubarCheckboxItem>
            <MenubarCheckboxItem>
              Auto Refresh
            </MenubarCheckboxItem>
          </MenubarContent>
        </MenubarMenu>
        
        <MenubarMenu>
          <MenubarTrigger variant="glass" size="lg">
            <Settings className="size-4 mr-2" />
            Controls
          </MenubarTrigger>
          <MenubarContent variant="glass">
            <MenubarLabel>System Controls</MenubarLabel>
            <MenubarItem variant="glass">
              <Settings className="size-4 mr-2" />
              Range Settings
            </MenubarItem>
            <MenubarItem variant="glass">
              Emergency Stop
            </MenubarItem>
            <MenubarSeparator />
            <MenubarSub>
              <MenubarSubTrigger variant="glass">
                Display Options
              </MenubarSubTrigger>
              <MenubarSubContent variant="glass">
                <MenubarItem variant="glass">Timer Display</MenubarItem>
                <MenubarItem variant="glass">Score Display</MenubarItem>
                <MenubarItem variant="glass">Weather Info</MenubarItem>
              </MenubarSubContent>
            </MenubarSub>
          </MenubarContent>
        </MenubarMenu>
        
        <MenubarMenu>
          <MenubarTrigger variant="glass" size="lg">
            <HelpCircle className="size-4 mr-2" />
            Support
          </MenubarTrigger>
          <MenubarContent variant="glass">
            <MenubarItem variant="glass">
              <HelpCircle className="size-4 mr-2" />
              Help Center
            </MenubarItem>
            <MenubarItem variant="glass">
              <Mail className="size-4 mr-2" />
              Contact Support
            </MenubarItem>
            <MenubarItem variant="glass">
              <Phone className="size-4 mr-2" />
              Emergency Contact
            </MenubarItem>
          </MenubarContent>
        </MenubarMenu>
      </Menubar>
    </div>
  ),
}

export const Tournament: Story = {
  render: () => (
    <div className="bg-gradient-to-br from-slate-900 to-slate-700 p-8 rounded-xl">
      <Menubar variant="tournament" size="xl">
        <MenubarMenu>
          <MenubarTrigger variant="tournament" size="xl">
            <Trophy className="size-5 mr-2" />
            Championship
          </MenubarTrigger>
          <MenubarContent variant="tournament">
            <MenubarLabel>Elite Tournament Control</MenubarLabel>
            <MenubarItem variant="tournament">
              <Trophy className="size-4 mr-2" />
              Live Leaderboard
              <MenubarShortcut>⌘L</MenubarShortcut>
            </MenubarItem>
            <MenubarItem variant="tournament">
              <FileText className="size-4 mr-2" />
              Official Results
              <MenubarShortcut>⌘O</MenubarShortcut>
            </MenubarItem>
            <MenubarSeparator />
            <MenubarSub>
              <MenubarSubTrigger variant="tournament">
                <Settings className="size-4 mr-2" />
                Tournament Admin
              </MenubarSubTrigger>
              <MenubarSubContent variant="tournament">
                <MenubarItem variant="tournament">Scoring Officials</MenubarItem>
                <MenubarItem variant="tournament">Range Officers</MenubarItem>
                <MenubarItem variant="tournament">Medical Team</MenubarItem>
                <MenubarSeparator />
                <MenubarItem variant="tournament">Emergency Protocols</MenubarItem>
              </MenubarSubContent>
            </MenubarSub>
            <MenubarSeparator />
            <MenubarItem variant="tournament">
              Broadcast Controls
              <MenubarShortcut>⌘B</MenubarShortcut>
            </MenubarItem>
          </MenubarContent>
        </MenubarMenu>
        
        <MenubarMenu>
          <MenubarTrigger variant="tournament" size="xl">
            <Users className="size-5 mr-2" />
            Competitors
          </MenubarTrigger>
          <MenubarContent variant="tournament">
            <MenubarLabel>Competitor Management</MenubarLabel>
            <MenubarItem variant="tournament">
              <Users className="size-4 mr-2" />
              Registration List
            </MenubarItem>
            <MenubarItem variant="tournament">
              Squad Assignments
            </MenubarItem>
            <MenubarSeparator />
            <MenubarRadioGroup value="classification">
              <MenubarRadioItem value="classification">
                By Classification
              </MenubarRadioItem>
              <MenubarRadioItem value="division">
                By Division
              </MenubarRadioItem>
              <MenubarRadioItem value="squad">
                By Squad
              </MenubarRadioItem>
            </MenubarRadioGroup>
            <MenubarSeparator />
            <MenubarCheckboxItem checked>
              Show DNF Competitors
            </MenubarCheckboxItem>
            <MenubarCheckboxItem>
              Show Penalties
            </MenubarCheckboxItem>
          </MenubarContent>
        </MenubarMenu>
        
        <MenubarMenu>
          <MenubarTrigger variant="tournament" size="xl">
            <Target className="size-5 mr-2" />
            Range Control
          </MenubarTrigger>
          <MenubarContent variant="tournament">
            <MenubarLabel>Master Range Control</MenubarLabel>
            <MenubarItem variant="tournament">
              <Target className="size-4 mr-2" />
              All Stop Command
            </MenubarItem>
            <MenubarItem variant="tournament">
              Start Command
            </MenubarItem>
            <MenubarSeparator />
            <MenubarSub>
              <MenubarSubTrigger variant="tournament">
                Stage Controls
              </MenubarSubTrigger>
              <MenubarSubContent variant="tournament">
                <MenubarItem variant="tournament">Stage 1 Control</MenubarItem>
                <MenubarItem variant="tournament">Stage 2 Control</MenubarItem>
                <MenubarItem variant="tournament">Stage 3 Control</MenubarItem>
                <MenubarItem variant="tournament">Stage 4 Control</MenubarItem>
              </MenubarSubContent>
            </MenubarSub>
            <MenubarSeparator />
            <MenubarItem variant="tournament">
              Weather Override
            </MenubarItem>
          </MenubarContent>
        </MenubarMenu>
      </Menubar>
    </div>
  ),
}

export const Minimal: Story = {
  render: () => (
    <Menubar variant="minimal">
      <MenubarMenu>
        <MenubarTrigger variant="minimal">About</MenubarTrigger>
        <MenubarContent variant="minimal">
          <MenubarItem variant="minimal">Club History</MenubarItem>
          <MenubarItem variant="minimal">Our Mission</MenubarItem>
          <MenubarItem variant="minimal">Contact Info</MenubarItem>
        </MenubarContent>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger variant="minimal">Events</MenubarTrigger>
        <MenubarContent variant="minimal">
          <MenubarItem variant="minimal">Upcoming Events</MenubarItem>
          <MenubarItem variant="minimal">Past Results</MenubarItem>
          <MenubarItem variant="minimal">Photo Gallery</MenubarItem>
        </MenubarContent>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger variant="minimal">Contact</MenubarTrigger>
        <MenubarContent variant="minimal">
          <MenubarItem variant="minimal">
            <Mail className="size-4 mr-2" />
            Email Us
          </MenubarItem>
          <MenubarItem variant="minimal">
            <Phone className="size-4 mr-2" />
            Call Us
          </MenubarItem>
          <MenubarItem variant="minimal">Directions</MenubarItem>
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  ),
}

export const AdminMenubarPreset: Story = {
  render: () => (
    <div className="space-y-6">
      <div>
        <h3 className="font-semibold mb-4">Tournament Section</h3>
        <AdminMenubar section="tournament">
          <MenubarMenu>
            <MenubarTrigger variant="tournament" size="lg">
              <Trophy className="size-4 mr-2" />
              Tournament Admin
            </MenubarTrigger>
            <MenubarContent variant="tournament">
              <TournamentMenuItem variant="tournament">
                Elite Championships
              </TournamentMenuItem>
              <MenubarItem variant="tournament">Results Management</MenubarItem>
              <MenubarItem variant="tournament">Competitor Registration</MenubarItem>
            </MenubarContent>
          </MenubarMenu>
        </AdminMenubar>
      </div>
      
      <div>
        <h3 className="font-semibold mb-4">Schedule Section</h3>
        <AdminMenubar section="schedule">
          <MenubarMenu>
            <MenubarTrigger variant="premium" size="md">
              <Calendar className="size-4 mr-2" />
              Schedule Management
            </MenubarTrigger>
            <MenubarContent variant="premium">
              <ScheduleMenuItem variant="premium">
                Event Calendar
              </ScheduleMenuItem>
              <MenubarItem variant="premium">League Schedules</MenubarItem>
              <MenubarItem variant="premium">Range Bookings</MenubarItem>
            </MenubarContent>
          </MenubarMenu>
        </AdminMenubar>
      </div>
      
      <div className="bg-gradient-to-br from-slate-900 to-slate-800 p-6 rounded-xl">
        <h3 className="font-semibold mb-4 text-white">Membership Section</h3>
        <AdminMenubar section="membership">
          <MenubarMenu>
            <MenubarTrigger variant="glass" size="md">
              <Users className="size-4 mr-2" />
              Membership Portal
            </MenubarTrigger>
            <MenubarContent variant="glass">
              <MenubarItem variant="glass">
                <User className="size-4 mr-2" />
                Member Directory
              </MenubarItem>
              <MenubarItem variant="glass">Payment Processing</MenubarItem>
              <MenubarItem variant="glass">Access Management</MenubarItem>
            </MenubarContent>
          </MenubarMenu>
        </AdminMenubar>
      </div>
      
      <div>
        <h3 className="font-semibold mb-4">Settings Section</h3>
        <AdminMenubar section="settings">
          <MenubarMenu>
            <MenubarTrigger variant="minimal">
              <Settings className="size-4 mr-2" />
              System Settings
            </MenubarTrigger>
            <MenubarContent variant="minimal">
              <SettingsMenuItem variant="minimal">
                General Settings
              </SettingsMenuItem>
              <MenubarItem variant="minimal">User Preferences</MenubarItem>
              <MenubarItem variant="minimal">Security Settings</MenubarItem>
            </MenubarContent>
          </MenubarMenu>
        </AdminMenubar>
      </div>
    </div>
  ),
}

export const TournamentMenubarPreset: Story = {
  render: () => (
    <div className="bg-gradient-to-br from-slate-900 to-slate-700 p-8 rounded-xl">
      <TournamentMenubar>
        <MenubarMenu>
          <MenubarTrigger variant="tournament" size="lg">
            <Trophy className="size-4 mr-2" />
            Elite Competition
          </MenubarTrigger>
          <MenubarContent variant="tournament">
            <TournamentMenuItem variant="tournament">
              Championship Leaderboard
            </TournamentMenuItem>
            <MenubarItem variant="tournament">Live Scoring</MenubarItem>
            <MenubarItem variant="tournament">Official Results</MenubarItem>
          </MenubarContent>
        </MenubarMenu>
        
        <MenubarMenu>
          <MenubarTrigger variant="tournament" size="lg">
            <Target className="size-4 mr-2" />
            Range Operations
          </MenubarTrigger>
          <MenubarContent variant="tournament">
            <RangeMenuItem variant="tournament">
              Master Control
            </RangeMenuItem>
            <MenubarItem variant="tournament">Safety Protocols</MenubarItem>
            <MenubarItem variant="tournament">Equipment Status</MenubarItem>
          </MenubarContent>
        </MenubarMenu>
      </TournamentMenubar>
    </div>
  ),
}

export const ScheduleMenubarPreset: Story = {
  render: () => (
    <ScheduleMenubar>
      <MenubarMenu>
        <MenubarTrigger variant="premium" size="md">
          <Calendar className="size-4 mr-2" />
          Event Calendar
        </MenubarTrigger>
        <MenubarContent variant="premium">
          <ScheduleMenuItem variant="premium">
            Weekly Schedule
          </ScheduleMenuItem>
          <MenubarItem variant="premium">Monthly View</MenubarItem>
          <MenubarItem variant="premium">Event Registration</MenubarItem>
        </MenubarContent>
      </MenubarMenu>
      
      <MenubarMenu>
        <MenubarTrigger variant="premium" size="md">
          <Users className="size-4 mr-2" />
          Participants
        </MenubarTrigger>
        <MenubarContent variant="premium">
          <MenubarItem variant="premium">Registration List</MenubarItem>
          <MenubarItem variant="premium">Waitlist Management</MenubarItem>
          <MenubarItem variant="premium">Payment Status</MenubarItem>
        </MenubarContent>
      </MenubarMenu>
    </ScheduleMenubar>
  ),
}

export const IconMenuItems: Story = {
  render: () => (
    <Menubar variant="premium" size="lg">
      <MenubarMenu>
        <MenubarTrigger variant="premium" size="lg">
          <Settings className="size-4 mr-2" />
          Gun Club Admin
        </MenubarTrigger>
        <MenubarContent variant="premium">
          <MenubarLabel>Administrative Functions</MenubarLabel>
          <SettingsMenuItem variant="premium">
            Club Configuration
          </SettingsMenuItem>
          <TournamentMenuItem variant="premium">
            Tournament Setup
          </TournamentMenuItem>
          <ScheduleMenuItem variant="premium">
            Event Planning
          </ScheduleMenuItem>
          <RangeMenuItem variant="premium">
            Range Management
          </RangeMenuItem>
          <MenubarSeparator />
          <MenubarItem variant="premium">
            <LogOut className="size-4 mr-2" />
            Sign Out
            <MenubarShortcut>⌘Q</MenubarShortcut>
          </MenubarItem>
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  ),
}

export const Sizes: Story = {
  render: () => (
    <div className="space-y-6">
      <div>
        <h3 className="font-semibold mb-4">Small Size</h3>
        <Menubar variant="premium" size="sm">
          <MenubarMenu>
            <MenubarTrigger variant="premium" size="sm">Small Menu</MenubarTrigger>
            <MenubarContent variant="premium">
              <MenubarItem variant="premium">Small Item 1</MenubarItem>
              <MenubarItem variant="premium">Small Item 2</MenubarItem>
            </MenubarContent>
          </MenubarMenu>
        </Menubar>
      </div>
      
      <div>
        <h3 className="font-semibold mb-4">Medium Size (Default)</h3>
        <Menubar variant="premium" size="md">
          <MenubarMenu>
            <MenubarTrigger variant="premium" size="md">Medium Menu</MenubarTrigger>
            <MenubarContent variant="premium">
              <MenubarItem variant="premium">Medium Item 1</MenubarItem>
              <MenubarItem variant="premium">Medium Item 2</MenubarItem>
            </MenubarContent>
          </MenubarMenu>
        </Menubar>
      </div>
      
      <div>
        <h3 className="font-semibold mb-4">Large Size</h3>
        <Menubar variant="premium" size="lg">
          <MenubarMenu>
            <MenubarTrigger variant="premium" size="lg">Large Menu</MenubarTrigger>
            <MenubarContent variant="premium">
              <MenubarItem variant="premium">Large Item 1</MenubarItem>
              <MenubarItem variant="premium">Large Item 2</MenubarItem>
            </MenubarContent>
          </MenubarMenu>
        </Menubar>
      </div>
      
      <div>
        <h3 className="font-semibold mb-4">Extra Large Size</h3>
        <Menubar variant="premium" size="xl">
          <MenubarMenu>
            <MenubarTrigger variant="premium" size="xl">Extra Large Menu</MenubarTrigger>
            <MenubarContent variant="premium">
              <MenubarItem variant="premium">Extra Large Item 1</MenubarItem>
              <MenubarItem variant="premium">Extra Large Item 2</MenubarItem>
            </MenubarContent>
          </MenubarMenu>
        </Menubar>
      </div>
    </div>
  ),
}