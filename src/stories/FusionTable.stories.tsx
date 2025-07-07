import type { Meta, StoryObj } from '@storybook/react';
import { 
  Table,
  TableHeader, 
  TableBody,
  TableFooter,
  TableHead,
  TableRow,
  TableCell,
  TableCaption,
  LeaderboardTable,
  ScoreTable
} from '@/components/ui/table';
import { Trophy, Target, Award, TrendingUp, Calendar, Users } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

const meta: Meta<typeof Table> = {
  title: 'Components/Fusion/Table',
  component: Table,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: 'Premium Table component with tournament styling, position-based row variants, and gun club specific presets for leaderboards and score tracking.',
      },
    },
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'premium', 'glass', 'tournament'],
    },
    animate: {
      control: 'boolean',
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

// All Table Variants
export const AllVariants: Story = {
  render: () => (
    <div className="space-y-8">
      <h2 className="text-2xl font-heading font-bold mb-4">Table Variants</h2>
      
      {/* Default Table */}
      <div className="space-y-2">
        <h3 className="font-heading font-semibold">Default</h3>
        <Table variant="default">
          <TableHeader>
            <TableRow>
              <TableHead>Member</TableHead>
              <TableHead>Classification</TableHead>
              <TableHead>Score</TableHead>
              <TableHead>Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell>John Smith</TableCell>
              <TableCell>AA</TableCell>
              <TableCell className="font-mono">23/25</TableCell>
              <TableCell>Active</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Sarah Johnson</TableCell>
              <TableCell>A</TableCell>
              <TableCell className="font-mono">21/25</TableCell>
              <TableCell>Active</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>

      {/* Premium Table */}
      <div className="space-y-2">
        <h3 className="font-heading font-semibold">Premium</h3>
        <Table variant="premium">
          <TableHeader>
            <TableRow>
              <TableHead>Member</TableHead>
              <TableHead>Classification</TableHead>
              <TableHead>Score</TableHead>
              <TableHead>Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow variant="premium">
              <TableCell>Mike Davis</TableCell>
              <TableCell>Master</TableCell>
              <TableCell className="font-mono">24/25</TableCell>
              <TableCell>
                <Badge variant="success">Elite</Badge>
              </TableCell>
            </TableRow>
            <TableRow variant="premium">
              <TableCell>Lisa Wilson</TableCell>
              <TableCell>AA</TableCell>
              <TableCell className="font-mono">22/25</TableCell>
              <TableCell>
                <Badge variant="default">Premium</Badge>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>

      {/* Glass Table */}
      <div className="space-y-2">
        <h3 className="font-heading font-semibold">Glass</h3>
        <Table variant="glass">
          <TableHeader>
            <TableRow>
              <TableHead>Event</TableHead>
              <TableHead>Date</TableHead>
              <TableHead>Participants</TableHead>
              <TableHead>Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow variant="glass">
              <TableCell>Spring Championship</TableCell>
              <TableCell>March 15, 2024</TableCell>
              <TableCell>45</TableCell>
              <TableCell>
                <Badge variant="warning">Upcoming</Badge>
              </TableCell>
            </TableRow>
            <TableRow variant="glass">
              <TableCell>Monthly League</TableCell>
              <TableCell>March 22, 2024</TableCell>
              <TableCell>28</TableCell>
              <TableCell>
                <Badge variant="info">Open</Badge>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>

      {/* Tournament Table */}
      <div className="space-y-2">
        <h3 className="font-heading font-semibold">Tournament</h3>
        <Table variant="tournament">
          <TableHeader>
            <TableRow>
              <TableHead>Position</TableHead>
              <TableHead>Shooter</TableHead>
              <TableHead>Score</TableHead>
              <TableHead>Prize</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow variant="tournament" position="first">
              <TableCell className="font-bold">🥇 1st</TableCell>
              <TableCell>Tom Rodriguez</TableCell>
              <TableCell className="font-mono font-bold">98/100</TableCell>
              <TableCell>$500</TableCell>
            </TableRow>
            <TableRow variant="tournament" position="second">
              <TableCell className="font-bold">🥈 2nd</TableCell>
              <TableCell>Amy Chen</TableCell>
              <TableCell className="font-mono font-bold">96/100</TableCell>
              <TableCell>$300</TableCell>
            </TableRow>
            <TableRow variant="tournament" position="third">
              <TableCell className="font-bold">🥉 3rd</TableCell>
              <TableCell>Dave Miller</TableCell>
              <TableCell className="font-mono font-bold">94/100</TableCell>
              <TableCell>$200</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </div>
  ),
};

// Tournament Leaderboard Preset
export const TournamentLeaderboard: Story = {
  render: () => {
    const leaderboardData = [
      { position: 1, name: "Mike Thompson", score: 96, maxScore: 100, classification: "Master", location: "Boise, ID" },
      { position: 2, name: "Sarah Williams", score: 94, maxScore: 100, classification: "AA", location: "Meridian, ID" },
      { position: 3, name: "Tom Rodriguez", score: 92, maxScore: 100, classification: "AA", location: "Nampa, ID" },
      { position: 4, name: "Lisa Chen", score: 89, maxScore: 100, classification: "A", location: "Eagle, ID" },
      { position: 5, name: "John Parker", score: 87, maxScore: 100, classification: "A", location: "Caldwell, ID" },
      { position: 6, name: "Amy Davis", score: 85, maxScore: 100, classification: "B", location: "Star, ID" },
      { position: 7, name: "Chris Wilson", score: 83, maxScore: 100, classification: "B", location: "Kuna, ID" },
      { position: 8, name: "Jessica Moore", score: 81, maxScore: 100, classification: "C", location: "Garden City, ID" }
    ];

    return (
      <div className="space-y-6">
        <div className="flex items-center gap-3">
          <Trophy className="h-6 w-6 text-leonard-yellow" />
          <h2 className="text-2xl font-heading font-bold">Idaho State Sporting Clays Championship</h2>
        </div>
        
        <LeaderboardTable data={leaderboardData} variant="tournament" />
        
        <div className="text-sm text-muted-foreground">
          * Final results - 100 target sporting clays event
        </div>
      </div>
    );
  },
};

// Score Tracking Table
export const ScoreTracking: Story = {
  render: () => {
    const scores = [
      { round: 1, trap: 23, skeet: 21, sporting: 87 },
      { round: 2, trap: 25, skeet: 19, sporting: 91 },
      { round: 3, trap: 22, skeet: 23, sporting: 89 },
      { round: 4, trap: 24, skeet: 22, sporting: 93 },
      { round: 5, trap: 25, skeet: 24, sporting: 95 }
    ];

    return (
      <div className="space-y-6">
        <div className="flex items-center gap-3">
          <Target className="h-6 w-6 text-brand-green" />
          <h2 className="text-2xl font-heading font-bold">Personal Score History</h2>
        </div>
        
        <ScoreTable scores={scores} variant="premium" />
        
        <div className="grid grid-cols-3 gap-4 p-4 bg-card/50 rounded-xl border border-border/20">
          <div className="text-center">
            <div className="text-2xl font-bold text-brand-green">24.8</div>
            <div className="text-sm text-muted-foreground">Trap Average</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-lahoma-orange">21.8</div>
            <div className="text-sm text-muted-foreground">Skeet Average</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-leonard-yellow">91.0</div>
            <div className="text-sm text-muted-foreground">Sporting Average</div>
          </div>
        </div>
      </div>
    );
  },
};

// Member Directory Table
export const MemberDirectory: Story = {
  render: () => (
    <div className="space-y-6">
      <div className="flex items-center gap-3">
        <Users className="h-6 w-6 text-brand-blue" />
        <h2 className="text-2xl font-heading font-bold">Active Members Directory</h2>
      </div>
      
      <Table variant="glass">
        <TableCaption>Current active club members - 2024 season</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Member ID</TableHead>
            <TableHead>Name</TableHead>
            <TableHead>Classification</TableHead>
            <TableHead>NSCA #</TableHead>
            <TableHead>Join Date</TableHead>
            <TableHead>Status</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow variant="glass">
            <TableCell className="font-mono">M001</TableCell>
            <TableCell className="font-medium">Michael Thompson</TableCell>
            <TableCell>
              <Badge variant="success">Master</Badge>
            </TableCell>
            <TableCell className="font-mono">123456</TableCell>
            <TableCell>Jan 2020</TableCell>
            <TableCell>
              <Badge variant="default">Active</Badge>
            </TableCell>
          </TableRow>
          <TableRow variant="glass">
            <TableCell className="font-mono">F002</TableCell>
            <TableCell className="font-medium">Rodriguez Family</TableCell>
            <TableCell>
              <Badge variant="warning">AA</Badge>
            </TableCell>
            <TableCell className="font-mono">234567</TableCell>
            <TableCell>Mar 2021</TableCell>
            <TableCell>
              <Badge variant="default">Active</Badge>
            </TableCell>
          </TableRow>
          <TableRow variant="glass">
            <TableCell className="font-mono">M003</TableCell>
            <TableCell className="font-medium">Sarah Williams</TableCell>
            <TableCell>
              <Badge variant="warning">AA</Badge>
            </TableCell>
            <TableCell className="font-mono">345678</TableCell>
            <TableCell>Jun 2019</TableCell>
            <TableCell>
              <Badge variant="success">Premium</Badge>
            </TableCell>
          </TableRow>
          <TableRow variant="glass">
            <TableCell className="font-mono">C001</TableCell>
            <TableCell className="font-medium">TechCorp Shooting Team</TableCell>
            <TableCell>
              <Badge variant="info">A</Badge>
            </TableCell>
            <TableCell className="font-mono">456789</TableCell>
            <TableCell>Sep 2022</TableCell>
            <TableCell>
              <Badge variant="default">Corporate</Badge>
            </TableCell>
          </TableRow>
          <TableRow variant="glass">
            <TableCell className="font-mono">M004</TableCell>
            <TableCell className="font-medium">Lisa Chen</TableCell>
            <TableCell>
              <Badge variant="info">A</Badge>
            </TableCell>
            <TableCell className="font-mono">567890</TableCell>
            <TableCell>Feb 2023</TableCell>
            <TableCell>
              <Badge variant="default">Active</Badge>
            </TableCell>
          </TableRow>
        </TableBody>
        <TableFooter>
          <TableRow>
            <TableCell colSpan={5} className="font-medium">Total Active Members</TableCell>
            <TableCell className="font-bold">247</TableCell>
          </TableRow>
        </TableFooter>
      </Table>
    </div>
  ),
};

// Event Schedule Table
export const EventSchedule: Story = {
  render: () => (
    <div className="space-y-6">
      <div className="flex items-center gap-3">
        <Calendar className="h-6 w-6 text-lahoma-orange" />
        <h2 className="text-2xl font-heading font-bold">Upcoming Events</h2>
      </div>
      
      <Table variant="premium">
        <TableHeader>
          <TableRow>
            <TableHead>Event</TableHead>
            <TableHead>Date</TableHead>
            <TableHead>Time</TableHead>
            <TableHead>Discipline</TableHead>
            <TableHead>Entry Fee</TableHead>
            <TableHead>Registered</TableHead>
            <TableHead>Status</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow variant="premium">
            <TableCell className="font-medium">Spring Championship</TableCell>
            <TableCell>Mar 15, 2024</TableCell>
            <TableCell>8:00 AM</TableCell>
            <TableCell>Sporting Clays</TableCell>
            <TableCell className="font-mono">$45</TableCell>
            <TableCell>32/50</TableCell>
            <TableCell>
              <Badge variant="success">Open</Badge>
            </TableCell>
          </TableRow>
          <TableRow variant="premium">
            <TableCell className="font-medium">Monthly Trap League</TableCell>
            <TableCell>Mar 20, 2024</TableCell>
            <TableCell>6:00 PM</TableCell>
            <TableCell>Trap</TableCell>
            <TableCell className="font-mono">$15</TableCell>
            <TableCell>18/25</TableCell>
            <TableCell>
              <Badge variant="success">Open</Badge>
            </TableCell>
          </TableRow>
          <TableRow variant="premium">
            <TableCell className="font-medium">Ladies Day</TableCell>
            <TableCell>Mar 22, 2024</TableCell>
            <TableCell>10:00 AM</TableCell>
            <TableCell>Skeet</TableCell>
            <TableCell className="font-mono">$20</TableCell>
            <TableCell>12/20</TableCell>
            <TableCell>
              <Badge variant="info">Registration</Badge>
            </TableCell>
          </TableRow>
          <TableRow variant="premium">
            <TableCell className="font-medium">Youth Training</TableCell>
            <TableCell>Mar 25, 2024</TableCell>
            <TableCell>9:00 AM</TableCell>
            <TableCell>All</TableCell>
            <TableCell className="font-mono">Free</TableCell>
            <TableCell>8/15</TableCell>
            <TableCell>
              <Badge variant="warning">Few Spots</Badge>
            </TableCell>
          </TableRow>
          <TableRow variant="premium">
            <TableCell className="font-medium">State Qualifier</TableCell>
            <TableCell>Apr 5, 2024</TableCell>
            <TableCell>7:00 AM</TableCell>
            <TableCell>Sporting Clays</TableCell>
            <TableCell className="font-mono">$65</TableCell>
            <TableCell>45/60</TableCell>
            <TableCell>
              <Badge variant="error">Almost Full</Badge>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  ),
};

// Performance Analytics Table
export const PerformanceAnalytics: Story = {
  render: () => (
    <div className="space-y-6">
      <div className="flex items-center gap-3">
        <TrendingUp className="h-6 w-6 text-brand-green" />
        <h2 className="text-2xl font-heading font-bold">Performance Analytics</h2>
      </div>
      
      <Table variant="tournament">
        <TableHeader>
          <TableRow>
            <TableHead>Metric</TableHead>
            <TableHead>This Month</TableHead>
            <TableHead>Last Month</TableHead>
            <TableHead>Change</TableHead>
            <TableHead>Best</TableHead>
            <TableHead>Goal</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow variant="tournament">
            <TableCell className="font-medium">Trap Average</TableCell>
            <TableCell className="font-mono">23.8/25</TableCell>
            <TableCell className="font-mono">22.4/25</TableCell>
            <TableCell>
              <Badge variant="success">+1.4</Badge>
            </TableCell>
            <TableCell className="font-mono">25/25</TableCell>
            <TableCell className="font-mono">24/25</TableCell>
          </TableRow>
          <TableRow variant="tournament">
            <TableCell className="font-medium">Skeet Average</TableCell>
            <TableCell className="font-mono">21.2/25</TableCell>
            <TableCell className="font-mono">20.8/25</TableCell>
            <TableCell>
              <Badge variant="success">+0.4</Badge>
            </TableCell>
            <TableCell className="font-mono">24/25</TableCell>
            <TableCell className="font-mono">22/25</TableCell>
          </TableRow>
          <TableRow variant="tournament">
            <TableCell className="font-medium">Sporting Clays</TableCell>
            <TableCell className="font-mono">87/100</TableCell>
            <TableCell className="font-mono">89/100</TableCell>
            <TableCell>
              <Badge variant="error">-2</Badge>
            </TableCell>
            <TableCell className="font-mono">95/100</TableCell>
            <TableCell className="font-mono">90/100</TableCell>
          </TableRow>
          <TableRow variant="tournament">
            <TableCell className="font-medium">Consistency Rating</TableCell>
            <TableCell className="font-mono">8.7/10</TableCell>
            <TableCell className="font-mono">8.2/10</TableCell>
            <TableCell>
              <Badge variant="success">+0.5</Badge>
            </TableCell>
            <TableCell className="font-mono">9.2/10</TableCell>
            <TableCell className="font-mono">9.0/10</TableCell>
          </TableRow>
          <TableRow variant="tournament">
            <TableCell className="font-medium">Tournament Finishes</TableCell>
            <TableCell>Top 10: 3/4</TableCell>
            <TableCell>Top 10: 2/3</TableCell>
            <TableCell>
              <Badge variant="success">Better</Badge>
            </TableCell>
            <TableCell>1st Place</TableCell>
            <TableCell>Top 5</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  ),
};

// Interactive Playground
export const Playground: Story = {
  args: {
    variant: 'premium',
    animate: true,
  },
  render: (args) => (
    <div className="space-y-4">
      <h3 className="font-heading font-semibold">Interactive Table</h3>
      <Table {...args}>
        <TableHeader>
          <TableRow>
            <TableHead>Shooter</TableHead>
            <TableHead>Round 1</TableHead>
            <TableHead>Round 2</TableHead>
            <TableHead>Total</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow variant={args.variant}>
            <TableCell>Alex Johnson</TableCell>
            <TableCell className="font-mono">24/25</TableCell>
            <TableCell className="font-mono">23/25</TableCell>
            <TableCell className="font-mono font-bold">47/50</TableCell>
          </TableRow>
          <TableRow variant={args.variant}>
            <TableCell>Maria Garcia</TableCell>
            <TableCell className="font-mono">22/25</TableCell>
            <TableCell className="font-mono">25/25</TableCell>
            <TableCell className="font-mono font-bold">47/50</TableCell>
          </TableRow>
          <TableRow variant={args.variant}>
            <TableCell>David Kim</TableCell>
            <TableCell className="font-mono">23/25</TableCell>
            <TableCell className="font-mono">22/25</TableCell>
            <TableCell className="font-mono font-bold">45/50</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  ),
};