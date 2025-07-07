import type { Meta, StoryObj } from '@storybook/react';
import { 
  Progress, 
  CircularProgress,
  ScoreProgress,
  TournamentProgress,
  MembershipProgress
} from '@/components/ui/progress';
import { Trophy, Target, Award, Calendar, Users, TrendingUp } from 'lucide-react';
import { useState, useEffect } from 'react';

const meta: Meta<typeof Progress> = {
  title: 'Components/Fusion/Progress',
  component: Progress,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: 'Premium Progress component with animated gradients, glassmorphism effects, and gun club specific presets. Perfect for showing shooting scores, tournament progress, and membership status.',
      },
    },
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'success', 'warning', 'error', 'info', 'premium', 'glass'],
    },
    size: {
      control: 'select',
      options: ['sm', 'default', 'lg', 'xl'],
    },
    value: {
      control: { type: 'range', min: 0, max: 100, step: 1 },
    },
    showLabel: {
      control: 'boolean',
    },
    showPercentage: {
      control: 'boolean',
    },
    animate: {
      control: 'boolean',
    },
    shimmer: {
      control: 'boolean',
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

// All Variants Showcase
export const AllVariants: Story = {
  render: () => (
    <div className="space-y-8 max-w-2xl">
      <h2 className="text-2xl font-heading font-bold mb-4">Progress Variants</h2>
      
      <div className="space-y-6">
        <Progress
          value={75}
          variant="default"
          showLabel
          showPercentage
          label="Overall Performance"
          animate
        />

        <Progress
          value={92}
          variant="success"
          showLabel
          showPercentage
          label="Trap Shooting Average"
          animate
          shimmer
        />

        <Progress
          value={68}
          variant="warning"
          showLabel
          showPercentage
          label="Improvement Needed"
          animate
        />

        <Progress
          value={25}
          variant="error"
          showLabel
          showPercentage
          label="Course Completion"
          animate
        />

        <Progress
          value={84}
          variant="info"
          showLabel
          showPercentage
          label="Tournament Standing"
          animate
        />

        <Progress
          value={96}
          variant="premium"
          showLabel
          showPercentage
          label="Elite Member Status"
          animate
          shimmer
        />

        <Progress
          value={78}
          variant="glass"
          showLabel
          showPercentage
          label="Glassmorphism Effect"
          animate
        />
      </div>
    </div>
  ),
};

// Size Variations
export const SizeVariations: Story = {
  render: () => (
    <div className="space-y-8 max-w-2xl">
      <h2 className="text-2xl font-heading font-bold mb-4">Size Options</h2>
      
      <div className="space-y-6">
        <Progress
          value={45}
          variant="success"
          size="sm"
          showLabel
          showPercentage
          label="Small Progress"
          animate
        />

        <Progress
          value={67}
          variant="warning"
          size="default"
          showLabel
          showPercentage
          label="Default Progress"
          animate
        />

        <Progress
          value={89}
          variant="premium"
          size="lg"
          showLabel
          showPercentage
          label="Large Progress"
          animate
          shimmer
        />

        <Progress
          value={72}
          variant="info"
          size="xl"
          showLabel
          showPercentage
          label="Extra Large Progress"
          animate
        />
      </div>
    </div>
  ),
};

// Circular Progress Showcase
export const CircularProgressShowcase: Story = {
  render: () => (
    <div className="space-y-8">
      <h2 className="text-2xl font-heading font-bold mb-4">Circular Progress</h2>
      
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        <CircularProgress
          value={85}
          variant="success"
          label="Trap Average"
          size={100}
        />

        <CircularProgress
          value={73}
          variant="warning"
          label="Skeet Score"
          size={100}
        />

        <CircularProgress
          value={91}
          variant="premium"
          label="Overall Rating"
          size={100}
        />

        <CircularProgress
          value={67}
          variant="info"
          label="Course Progress"
          size={100}
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <CircularProgress
          value={94}
          variant="premium"
          label="Championship Qualification"
          size={120}
          strokeWidth={12}
        />

        <CircularProgress
          value={78}
          variant="glass"
          label="Glass Effect"
          size={120}
          strokeWidth={10}
        />

        <CircularProgress
          value={82}
          variant="success"
          label="Perfect Rounds"
          size={120}
          strokeWidth={10}
        />
      </div>
    </div>
  ),
};

// Gun Club Preset Components
export const GunClubPresets: Story = {
  render: () => (
    <div className="space-y-8 max-w-2xl">
      <h2 className="text-2xl font-heading font-bold mb-4">Gun Club Scenarios</h2>
      
      <div className="space-y-6">
        {/* Shooting Scores */}
        <div className="bg-card/50 rounded-xl p-6 border border-border/20">
          <div className="flex items-center gap-3 mb-4">
            <Target className="h-6 w-6 text-brand-green" />
            <h3 className="font-heading font-bold">Today's Shooting Scores</h3>
          </div>
          <div className="space-y-4">
            <ScoreProgress score={23} maxScore={25} label="Trap Shooting" variant="success" />
            <ScoreProgress score={18} maxScore={25} label="Skeet Shooting" variant="warning" />
            <ScoreProgress score={87} maxScore={100} label="Sporting Clays" variant="premium" />
          </div>
        </div>

        {/* Tournament Progress */}
        <div className="bg-card/50 rounded-xl p-6 border border-border/20">
          <div className="flex items-center gap-3 mb-4">
            <Trophy className="h-6 w-6 text-leonard-yellow" />
            <h3 className="font-heading font-bold">Tournament Progress</h3>
          </div>
          <div className="space-y-4">
            <TournamentProgress current={3} total={5} label="Idaho State Championship" />
            <TournamentProgress current={7} total={10} label="Monthly League" />
          </div>
        </div>

        {/* Membership Status */}
        <div className="bg-card/50 rounded-xl p-6 border border-border/20">
          <div className="flex items-center gap-3 mb-4">
            <Users className="h-6 w-6 text-brand-blue" />
            <h3 className="font-heading font-bold">Membership Status</h3>
          </div>
          <div className="space-y-4">
            <MembershipProgress daysActive={287} totalDays={365} />
            <Progress
              value={75}
              variant="info"
              showLabel
              showPercentage
              label="Benefits Utilized"
              animate
            />
          </div>
        </div>
      </div>
    </div>
  ),
};

// Animated Live Demo
export const AnimatedDemo: Story = {
  render: () => {
    const [trapScore, setTrapScore] = useState(0);
    const [skeetScore, setSkeetScore] = useState(0);
    const [sportingScore, setSportingScore] = useState(0);
    
    useEffect(() => {
      const interval = setInterval(() => {
        setTrapScore(prev => prev >= 100 ? 0 : prev + 1);
        setSkeetScore(prev => prev >= 100 ? 0 : prev + 0.8);
        setSportingScore(prev => prev >= 100 ? 0 : prev + 1.2);
      }, 100);
      
      return () => clearInterval(interval);
    }, []);

    return (
      <div className="space-y-8 max-w-2xl">
        <h2 className="text-2xl font-heading font-bold mb-4">Live Animation Demo</h2>
        
        <div className="bg-gradient-to-br from-leonard-yellow/10 to-lahoma-orange/10 rounded-xl p-6 border border-leonard-yellow/20">
          <div className="flex items-center gap-3 mb-6">
            <TrendingUp className="h-6 w-6 text-lahoma-orange" />
            <h3 className="font-heading font-bold">Real-time Score Updates</h3>
          </div>
          
          <div className="space-y-6">
            <Progress
              value={trapScore}
              variant="success"
              size="lg"
              showLabel
              showPercentage
              label="Trap Shooting Performance"
              animate
              shimmer={trapScore > 85}
            />

            <Progress
              value={skeetScore}
              variant="warning"
              size="lg"
              showLabel
              showPercentage
              label="Skeet Shooting Performance"
              animate
              shimmer={skeetScore > 85}
            />

            <Progress
              value={sportingScore}
              variant="premium"
              size="lg"
              showLabel
              showPercentage
              label="Sporting Clays Performance"
              animate
              shimmer={sportingScore > 85}
            />
          </div>
        </div>

        <div className="grid grid-cols-3 gap-4">
          <CircularProgress
            value={trapScore}
            variant="success"
            label="Trap"
            size={80}
          />
          <CircularProgress
            value={skeetScore}
            variant="warning"
            label="Skeet"
            size={80}
          />
          <CircularProgress
            value={sportingScore}
            variant="premium"
            label="Sporting"
            size={80}
          />
        </div>
      </div>
    );
  },
};

// Tournament Leaderboard Simulation
export const TournamentLeaderboard: Story = {
  render: () => {
    const leaderboard = [
      { name: "Mike Thompson", score: 94, maxScore: 100, position: 1 },
      { name: "Sarah Williams", score: 91, maxScore: 100, position: 2 },
      { name: "Tom Rodriguez", score: 89, maxScore: 100, position: 3 },
      { name: "Lisa Chen", score: 87, maxScore: 100, position: 4 },
      { name: "John Parker", score: 85, maxScore: 100, position: 5 },
    ];

    const getVariant = (position: number) => {
      switch (position) {
        case 1: return 'premium';
        case 2: return 'success';
        case 3: return 'warning';
        default: return 'info';
      }
    };

    const getIcon = (position: number) => {
      switch (position) {
        case 1: return '🥇';
        case 2: return '🥈';
        case 3: return '🥉';
        default: return position;
      }
    };

    return (
      <div className="space-y-8 max-w-3xl">
        <h2 className="text-2xl font-heading font-bold mb-4">Tournament Leaderboard</h2>
        
        <div className="bg-card/50 rounded-xl p-6 border border-border/20">
          <div className="flex items-center gap-3 mb-6">
            <Trophy className="h-6 w-6 text-leonard-yellow" />
            <h3 className="font-heading font-bold">Idaho State Sporting Clays Championship</h3>
          </div>
          
          <div className="space-y-4">
            {leaderboard.map((shooter, index) => (
              <div key={shooter.name} className="flex items-center gap-4">
                <div className="w-8 h-8 flex items-center justify-center font-bold text-lg">
                  {getIcon(shooter.position)}
                </div>
                <div className="flex-1">
                  <div className="flex justify-between items-center mb-1">
                    <span className="font-medium">{shooter.name}</span>
                    <span className="font-mono text-sm text-muted-foreground">
                      {shooter.score}/{shooter.maxScore}
                    </span>
                  </div>
                  <Progress
                    value={(shooter.score / shooter.maxScore) * 100}
                    variant={getVariant(shooter.position)}
                    size="default"
                    animate
                    shimmer={shooter.position <= 3}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Top 3 Circular Display */}
        <div className="grid grid-cols-3 gap-6">
          {leaderboard.slice(0, 3).map((shooter, index) => (
            <div key={shooter.name} className="text-center">
              <CircularProgress
                value={(shooter.score / shooter.maxScore) * 100}
                variant={getVariant(shooter.position)}
                label={shooter.name}
                size={120}
                strokeWidth={10}
              />
              <div className="mt-2">
                <div className="font-bold">{getIcon(shooter.position)} Place</div>
                <div className="text-sm text-muted-foreground">{shooter.score} points</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  },
};

// Interactive Playground
export const Playground: Story = {
  args: {
    value: 75,
    variant: 'premium',
    size: 'default',
    showLabel: true,
    showPercentage: true,
    label: 'Shooting Performance',
    animate: true,
    shimmer: true,
  },
  render: (args) => (
    <div className="max-w-md">
      <Progress {...args} />
    </div>
  ),
};

// Membership Dashboard
export const MembershipDashboard: Story = {
  render: () => (
    <div className="space-y-8 max-w-4xl">
      <h2 className="text-2xl font-heading font-bold mb-4">Member Dashboard</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Personal Stats */}
        <div className="bg-card/50 rounded-xl p-6 border border-border/20">
          <div className="flex items-center gap-3 mb-4">
            <Award className="h-6 w-6 text-brand-green" />
            <h3 className="font-heading font-bold">Personal Statistics</h3>
          </div>
          <div className="space-y-4">
            <ScoreProgress score={21} maxScore={25} label="Average Trap Score" variant="success" />
            <ScoreProgress score={18} maxScore={25} label="Average Skeet Score" variant="warning" />
            <ScoreProgress score={78} maxScore={100} label="Sporting Clays Average" variant="info" />
            <Progress
              value={92}
              variant="premium"
              showLabel
              showPercentage
              label="Overall Improvement"
              animate
              shimmer
            />
          </div>
        </div>

        {/* Season Progress */}
        <div className="bg-card/50 rounded-xl p-6 border border-border/20">
          <div className="flex items-center gap-3 mb-4">
            <Calendar className="h-6 w-6 text-brand-blue" />
            <h3 className="font-heading font-bold">Season Progress</h3>
          </div>
          <div className="space-y-4">
            <TournamentProgress current={8} total={12} label="Tournaments Entered" />
            <Progress
              value={67}
              variant="info"
              showLabel
              showPercentage
              label="League Standings"
              animate
            />
            <Progress
              value={83}
              variant="success"
              showLabel
              showPercentage
              label="Goal Achievement"
              animate
            />
          </div>
        </div>
      </div>

      {/* Circular Stats Overview */}
      <div className="bg-gradient-to-br from-leonard-yellow/10 to-lahoma-orange/10 rounded-xl p-6 border border-leonard-yellow/20">
        <h3 className="font-heading font-bold mb-6 text-center">Season Overview</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <CircularProgress
            value={85}
            variant="success"
            label="Trap Average"
            size={100}
          />
          <CircularProgress
            value={72}
            variant="warning"
            label="Skeet Average"
            size={100}
          />
          <CircularProgress
            value={78}
            variant="info"
            label="Sporting Clays"
            size={100}
          />
          <CircularProgress
            value={94}
            variant="premium"
            label="Overall Rating"
            size={100}
          />
        </div>
      </div>
    </div>
  ),
};