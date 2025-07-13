import type { Meta, StoryObj } from '@storybook/react';
import { MegaHero } from '@/components/ui/mega-hero';
import { Target, Trophy, Users, Calendar, Shield, Star } from 'lucide-react';

const meta: Meta<typeof MegaHero> = {
  title: 'Heroes & Headers/Mega Hero',
  component: MegaHero,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'Large hero section component with customizable backgrounds, CTAs, and content for impactful landing pages.'
      }
    }
  },
  tags: ['autodocs'],
  argTypes: {
    backgroundPreset: {
      control: 'select',
      options: ['warm', 'cool', 'mixed', 'gunclub']
    },
    height: {
      control: 'select',
      options: ['sm', 'md', 'lg', 'xl', 'full']
    },
    centerContent: {
      control: 'boolean'
    }
  }
};

export default meta;
type Story = StoryObj<typeof MegaHero>;

// Default hero for main landing page
export const Default: Story = {
  args: {
    title: 'Welcome to Boise Gun Club',
    subtitle: 'Idaho&apos;s Premier Shooting Facility',
    description: 'Experience top-tier shooting sports in a safe, family-friendly environment. From beginner training to competitive shooting, we have everything you need to excel.',
    primaryCTA: {
      text: 'Become a Member',
      onClick: () => console.log('Primary CTA clicked'),
      icon: <Target className="h-4 w-4" />
    },
    secondaryCTA: {
      text: 'Schedule Tour',
      onClick: () => console.log('Secondary CTA clicked'),
      icon: <Calendar className="h-4 w-4" />
    },
    badges: ['NRA Certified', 'Family Friendly', 'All Skill Levels'],
    backgroundPreset: 'gunclub',
    height: 'xl',
    centerContent: true,
    icon: <Target className="h-8 w-8" />
  }
};

// Competition focused hero
export const CompetitionHero: Story = {
  args: {
    title: 'Competitive Shooting Excellence',
    subtitle: 'Join Our Championship Team',
    description: 'Take your shooting skills to the next level with our competitive programs. From local matches to state championships, we&apos;ll help you achieve your goals.',
    primaryCTA: {
      text: 'View Competitions',
      onClick: () => console.log('View competitions'),
      icon: <Trophy className="h-4 w-4" />
    },
    secondaryCTA: {
      text: 'Join Team',
      onClick: () => console.log('Join team'),
      icon: <Users className="h-4 w-4" />
    },
    badges: ['State Champions', 'Weekly Matches', 'All Disciplines'],
    backgroundPreset: 'cool',
    height: 'lg',
    centerContent: true,
    icon: <Trophy className="h-8 w-8" />
  }
};

// Training focused hero
export const TrainingHero: Story = {
  args: {
    title: 'Learn from the Best',
    subtitle: 'Professional Firearms Training',
    description: 'Our NRA certified instructors provide comprehensive training programs for all skill levels. Safety is our top priority.',
    primaryCTA: {
      text: 'Book Training',
      onClick: () => console.log('Book training'),
      icon: <Shield className="h-4 w-4" />
    },
    secondaryCTA: {
      text: 'View Programs',
      onClick: () => console.log('View programs'),
      icon: <Star className="h-4 w-4" />
    },
    badges: ['NRA Certified', 'Safety First', 'All Ages'],
    backgroundPreset: 'warm',
    height: 'md',
    centerContent: true,
    icon: <Shield className="h-8 w-8" />
  }
};

// Membership promotion hero
export const MembershipPromotion: Story = {
  args: {
    title: 'Join Our Community',
    subtitle: 'Limited Time: 50% Off First Year',
    description: 'Become part of Idaho&apos;s most welcoming gun club community. Access all facilities, training programs, and exclusive member events.',
    primaryCTA: {
      text: 'Join Now',
      onClick: () => console.log('Join now'),
      icon: <Users className="h-4 w-4" />
    },
    secondaryCTA: {
      text: 'Learn More',
      onClick: () => console.log('Learn more')
    },
    badges: ['50% Off', 'No Initiation Fee', 'All Inclusive'],
    backgroundPreset: 'mixed',
    height: 'lg',
    centerContent: true,
    icon: <Users className="h-8 w-8" />
  }
};

// Event announcement hero
export const EventAnnouncement: Story = {
  args: {
    title: 'Annual Championship',
    subtitle: 'Registration Now Open',
    description: 'Don&apos;t miss our biggest event of the year. Three days of competition across all disciplines with prizes and recognition.',
    primaryCTA: {
      text: 'Register Now',
      onClick: () => console.log('Register now'),
      icon: <Calendar className="h-4 w-4" />
    },
    secondaryCTA: {
      text: 'Event Details',
      onClick: () => console.log('Event details')
    },
    badges: ['July 15-17', 'All Disciplines', 'Prizes Available'],
    backgroundPreset: 'gunclub',
    height: 'lg',
    centerContent: true,
    icon: <Calendar className="h-8 w-8" />
  }
};

// Compact hero variant
export const CompactHero: Story = {
  args: {
    title: 'Quick Start Guide',
    subtitle: 'New to Shooting?',
    description: 'Get started with our beginner-friendly programs and expert instruction.',
    primaryCTA: {
      text: 'Get Started',
      onClick: () => console.log('Get started')
    },
    badges: ['Beginner Friendly'],
    backgroundPreset: 'warm',
    height: 'sm',
    centerContent: true,
    icon: <Target className="h-6 w-6" />
  }
};

// Full screen hero
export const FullScreenHero: Story = {
  args: {
    title: 'Experience Excellence',
    subtitle: 'Where Champions Are Made',
    description: 'State-of-the-art facilities, world-class instruction, and a community that supports your shooting journey from day one.',
    primaryCTA: {
      text: 'Explore Facilities',
      onClick: () => console.log('Explore facilities'),
      icon: <Target className="h-4 w-4" />
    },
    secondaryCTA: {
      text: 'Contact Us',
      onClick: () => console.log('Contact us')
    },
    badges: ['Award Winning', 'Modern Facilities', 'Expert Staff'],
    backgroundPreset: 'gunclub',
    height: 'full',
    centerContent: true,
    icon: <Star className="h-8 w-8" />
  }
}; 