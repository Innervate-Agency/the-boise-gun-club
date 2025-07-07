import type { Meta, StoryObj } from '@storybook/react';
import { PageHero } from '@/components/ui/page-hero';
import { FeatureGrid } from '@/components/ui/feature-grid';
import { StatsShowcase } from '@/components/ui/stats-showcase';
import { TestimonialCarousel } from '@/components/ui/testimonial-carousel';
import { 
  Target, 
  Trophy, 
  Users, 
  Calendar, 
  Shield, 
  Award,
  Clock,
  MapPin,
  Star,
  Zap,
  TrendingUp,
  Activity
} from 'lucide-react';

const meta: Meta = {
  title: 'Components/Advanced/Layout Components',
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'Advanced layout components for building complete pages with professional design patterns.',
      },
    },
  },
};

export default meta;

// Page Hero Showcase
export const PageHeroShowcase: StoryObj = {
  render: () => (
    <div className="space-y-0">
      <PageHero
        subtitle="Championship Series"
        title="Elite Shooting Club"
        description="Experience professional-grade clay shooting facilities with expert instruction, competitive leagues, and a community of passionate shooters."
        badge="New Member Special"
        primaryAction={{
          text: "Join Today",
          onClick: () => console.log('Primary action clicked')
        }}
        secondaryAction={{
          text: "Take Tour",
          onClick: () => console.log('Secondary action clicked')
        }}
        backgroundPreset="gunclub"
        intensity="premium"
        size="xl"
        showScrollIndicator
      />

      <PageHero
        title="Upcoming Tournaments"
        description="Register for our seasonal championship series and compete against the best shooters in the region."
        primaryAction={{
          text: "View Schedule",
          onClick: () => console.log('View schedule')
        }}
        backgroundPreset="cool"
        intensity="medium"
        size="md"
      />

      <PageHero
        subtitle="Training Programs"
        title="Master Your Skills"
        badge="Expert Instruction"
        primaryAction={{
          text: "Start Learning",
          onClick: () => console.log('Start learning')
        }}
        backgroundPreset="warm"
        intensity="subtle"
        size="sm"
      />
    </div>
  ),
};

// Feature Grid Showcase
export const FeatureGridShowcase: StoryObj = {
  render: () => (
    <div className="space-y-16 bg-muted/20">
      <FeatureGrid
        subtitle="Club Features"
        title="World-Class Facilities"
        description="Everything you need for the ultimate clay shooting experience, from beginner instruction to championship-level competition."
        columns={3}
        cardVariant="default"
        features={[
          {
            title: "Professional Instruction",
            description: "Learn from certified instructors with decades of competitive experience. Personalized coaching for all skill levels.",
            icon: Target,
            badge: "Expert",
            color: "#F23005",
            link: {
              text: "Learn More",
              onClick: () => console.log('Professional instruction')
            }
          },
          {
            title: "Competition Leagues",
            description: "Join weekly leagues and seasonal tournaments. Track your progress and compete for championship titles.",
            icon: Trophy,
            badge: "Popular",
            color: "#F2CB05",
            link: {
              text: "View Leagues",
              onClick: () => console.log('Competition leagues')
            }
          },
          {
            title: "Premium Equipment",
            description: "State-of-the-art trap and skeet machines, rental firearms, and a fully-stocked pro shop.",
            icon: Award,
            color: "#5198cd",
            link: {
              text: "Equipment List",
              onClick: () => console.log('Premium equipment')
            }
          },
          {
            title: "Safety First",
            description: "Comprehensive safety protocols, range safety officers, and mandatory safety orientation for all members.",
            icon: Shield,
            badge: "Certified",
            color: "#6f7822",
            link: {
              text: "Safety Info",
              onClick: () => console.log('Safety first')
            }
          },
          {
            title: "Member Events",
            description: "Social gatherings, BBQ events, family days, and special member-only tournaments throughout the year.",
            icon: Users,
            color: "#F28705",
            link: {
              text: "Event Calendar",
              onClick: () => console.log('Member events')
            }
          },
          {
            title: "Flexible Scheduling",
            description: "Open 7 days a week with extended hours. Online booking system and mobile app for easy scheduling.",
            icon: Calendar,
            badge: "24/7",
            color: "#E3C03C",
            link: {
              text: "Book Now",
              onClick: () => console.log('Flexible scheduling')
            }
          }
        ]}
      />

      <FeatureGrid
        title="Glass Card Variant"
        columns={2}
        cardVariant="glass"
        features={[
          {
            title: "Advanced Analytics",
            description: "Track your shooting performance with detailed statistics and progress charts.",
            icon: Activity,
            color: "#F23005"
          },
          {
            title: "Mobile App",
            description: "Book sessions, view scores, and connect with other members on our mobile platform.",
            icon: Zap,
            color: "#5198cd"
          }
        ]}
      />
    </div>
  ),
};

// Stats Showcase
export const StatsShowcaseDemo: StoryObj = {
  render: () => (
    <div className="space-y-16 bg-muted/20">
      <StatsShowcase
        subtitle="Club Statistics"
        title="Numbers That Matter"
        layout="grid"
        columns={4}
        variant="default"
        stats={[
          {
            label: "Active Members",
            value: "2,450",
            icon: Users,
            change: { value: "+12%", trend: "up" },
            description: "Growing community",
            color: "#F23005"
          },
          {
            label: "Clay Targets Shot",
            value: "1.2M",
            icon: Target,
            change: { value: "+25%", trend: "up" },
            description: "This year",
            color: "#F2CB05"
          },
          {
            label: "Tournament Events",
            value: "48",
            icon: Trophy,
            change: { value: "Same", trend: "neutral" },
            description: "Annual competitions",
            color: "#5198cd"
          },
          {
            label: "Safety Record",
            value: "100%",
            icon: Shield,
            change: { value: "Perfect", trend: "up" },
            description: "Incident-free",
            color: "#6f7822"
          }
        ]}
      />

      <StatsShowcase
        title="Performance Metrics"
        layout="inline"
        stats={[
          {
            label: "Average Score",
            value: "84.5",
            icon: Star,
            color: "#F28705"
          },
          {
            label: "Improvement Rate",
            value: "15%",
            icon: TrendingUp,
            color: "#F23005"
          },
          {
            label: "Session Time",
            value: "2.3hrs",
            icon: Clock,
            color: "#5198cd"
          }
        ]}
      />

      <StatsShowcase
        title="Minimal Glass Variant"
        layout="grid"
        columns={3}
        variant="glass"
        stats={[
          {
            label: "Weekly Sessions",
            value: "156",
            icon: Activity,
            color: "#F23005"
          },
          {
            label: "Top Scorers",
            value: "24",
            icon: Award,
            color: "#F2CB05"
          },
          {
            label: "Training Hours",
            value: "340",
            icon: Clock,
            color: "#6f7822"
          }
        ]}
      />
    </div>
  ),
};

// Testimonial Carousel Showcase
export const TestimonialCarouselDemo: StoryObj = {
  render: () => (
    <div className="space-y-16 bg-muted/20">
      <TestimonialCarousel
        subtitle="Member Stories"
        title="What Our Members Say"
        autoPlay={true}
        autoPlayInterval={4000}
        showDots={true}
        showArrows={true}
        variant="default"
        testimonials={[
          {
            name: "John Smith",
            role: "Championship Winner",
            company: "2024 State Champion",
            content: "The facilities at Boise Gun Club are absolutely world-class. The instruction I received here took my shooting from recreational to competitive level.",
            rating: 5,
            badge: "Champion",
            avatar: "/avatars/01.png"
          },
          {
            name: "Sarah Johnson",
            role: "League Captain",
            company: "Weekly League",
            content: "The community here is incredible. Everyone is supportive and the competitive atmosphere pushes you to improve constantly.",
            rating: 5,
            badge: "Captain"
          },
          {
            name: "Mike Chen",
            role: "New Member",
            company: "Joined 2024",
            content: "As a beginner, I was nervous about starting. The instructors here made me feel welcome and confident. I've improved dramatically in just 3 months.",
            rating: 5,
            badge: "Rising Star"
          },
          {
            name: "Lisa Rodriguez",
            role: "Safety Officer",
            company: "Club Volunteer",
            content: "The safety standards here are exceptional. As someone who values proper protocols, I appreciate the club's commitment to keeping everyone safe.",
            rating: 5,
            badge: "Safety Expert"
          }
        ]}
      />

      <TestimonialCarousel
        title="Glass Variant"
        variant="glass"
        showArrows={false}
        testimonials={[
          {
            name: "David Wilson",
            role: "Pro Instructor",
            content: "Teaching here has been an incredible experience. The facilities allow me to provide the best possible instruction to my students.",
            rating: 5
          },
          {
            name: "Emma Davis",
            role: "Tournament Director",
            content: "We've hosted numerous competitions here and the feedback is always outstanding. The club sets the standard for excellence.",
            rating: 5
          }
        ]}
      />
    </div>
  ),
};

// Complete Page Layout Example
export const CompletePageLayout: StoryObj = {
  render: () => (
    <div className="space-y-0">
      {/* Hero Section */}
      <PageHero
        subtitle="Premium Membership"
        title="Join the Elite"
        description="Experience the finest clay shooting facilities in the Pacific Northwest with professional instruction, competitive leagues, and an unmatched community."
        badge="Limited Time Offer"
        primaryAction={{
          text: "Become a Member",
          onClick: () => console.log('Become a member')
        }}
        secondaryAction={{
          text: "Schedule Tour",
          onClick: () => console.log('Schedule tour')
        }}
        backgroundPreset="gunclub"
        intensity="premium"
        size="xl"
        showScrollIndicator
      />

      {/* Stats Section */}
      <StatsShowcase
        subtitle="Club Excellence"
        title="Proven Results"
        layout="grid"
        columns={4}
        stats={[
          {
            label: "Members",
            value: "2,450+",
            icon: Users,
            change: { value: "+12%", trend: "up" },
            color: "#F23005"
          },
          {
            label: "Championships",
            value: "156",
            icon: Trophy,
            change: { value: "+8", trend: "up" },
            color: "#F2CB05"
          },
          {
            label: "Years of Excellence",
            value: "25",
            icon: Award,
            color: "#5198cd"
          },
          {
            label: "Safety Record",
            value: "100%",
            icon: Shield,
            change: { value: "Perfect", trend: "up" },
            color: "#6f7822"
          }
        ]}
      />

      {/* Features Section */}
      <FeatureGrid
        subtitle="Member Benefits"
        title="Everything You Need"
        description="From beginner instruction to championship competition, we provide everything you need to excel in clay shooting."
        columns={3}
        features={[
          {
            title: "Expert Instruction",
            description: "Learn from certified professionals with decades of competitive experience.",
            icon: Target,
            badge: "Certified",
            color: "#F23005",
            link: {
              text: "Meet Our Instructors",
              onClick: () => console.log('Meet instructors')
            }
          },
          {
            title: "Competitive Leagues",
            description: "Join weekly leagues and seasonal tournaments for all skill levels.",
            icon: Trophy,
            badge: "Popular",
            color: "#F2CB05",
            link: {
              text: "View Schedules",
              onClick: () => console.log('View schedules')
            }
          },
          {
            title: "Premium Facilities",
            description: "State-of-the-art equipment and meticulously maintained shooting ranges.",
            icon: Award,
            color: "#5198cd",
            link: {
              text: "Virtual Tour",
              onClick: () => console.log('Virtual tour')
            }
          }
        ]}
      />

      {/* Testimonials Section */}
      <TestimonialCarousel
        subtitle="Success Stories"
        title="Member Experiences"
        testimonials={[
          {
            name: "Robert Chen",
            role: "State Champion",
            company: "2024 Winner",
            content: "The training I received here transformed my shooting. The instructors are world-class and the facilities are unmatched.",
            rating: 5,
            badge: "Champion"
          },
          {
            name: "Maria Gonzalez",
            role: "League Captain",
            company: "Advanced League",
            content: "The community here is amazing. Everyone supports each other while maintaining a competitive spirit that drives improvement.",
            rating: 5,
            badge: "Captain"
          }
        ]}
      />
    </div>
  ),
};