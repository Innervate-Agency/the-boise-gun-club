import type { Meta, StoryObj } from '@storybook/react';
import { motion } from 'framer-motion';
import { 
  Trophy, 
  Target, 
  Star, 
  Layers, 
  FileText, 
  BarChart3,
  Radar,
  Activity,
  Gamepad2
} from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const meta: Meta = {
  title: 'Components/Showcases/Component Cards',
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: 'These are the actual sexy component cards extracted from /test/components page that you love. Perfect Stripe + ClickUp fusion aesthetic.',
      },
    },
  },
};

export default meta;

interface ComponentCardProps {
  title: string;
  description: string;
  href: string;
  icon: React.ComponentType<any>;
  color: string;
  status: 'stable' | 'beta' | 'experimental' | 'new';
  features: string[];
  componentCount: number;
  onClick?: () => void;
}

const statusStyles = {
  stable: 'bg-white/20 text-white border border-white/30',
  beta: 'bg-white/20 text-white border border-white/30', 
  experimental: 'bg-white/20 text-white border border-white/30',
  new: 'bg-white/20 text-white border border-white/30'
};

function ComponentCard({ 
  title, 
  description, 
  icon: IconComponent, 
  color, 
  status, 
  features, 
  componentCount,
  onClick 
}: ComponentCardProps) {
  return (
    <motion.div
      whileHover={{ y: -4, scale: 1.02 }}
      transition={{ duration: 0.2, ease: "easeOut" }}
      className="group cursor-pointer"
      onClick={onClick}
    >
      <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden bg-white dark:bg-[var(--ed-charcoal)]">
        {/* Stripe-style gradient header - The actual sexy part! */}
        <div className={`h-32 bg-gradient-to-r ${color} relative overflow-hidden rounded-t-xl`}>
          <div className="absolute inset-0 bg-black/5" />
          
          {/* Status badge */}
          <div className="absolute top-4 right-4">
            <Badge className={statusStyles[status]}>
              {status}
            </Badge>
          </div>
          
          {/* Icon with glassmorphism */}
          <div className="absolute bottom-4 left-6">
            <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
              <IconComponent className="h-6 w-6 text-white" />
            </div>
          </div>
          
          {/* Component count */}
          <div className="absolute bottom-4 right-6">
            <div className="text-right">
              <div className="text-2xl font-bold text-white">{componentCount}</div>
              <div className="text-xs text-white/80">components</div>
            </div>
          </div>
          
          {/* Subtle pattern overlay - ClickUp style */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent" />
        </div>

        <CardHeader className="pb-3">
          <CardTitle className="text-xl font-heading font-bold text-card-foreground group-hover:text-lahoma-orange transition-colors">
            {title}
          </CardTitle>
          <CardDescription className="text-muted-foreground font-body font-light leading-relaxed">
            {description}
          </CardDescription>
        </CardHeader>

        <CardContent className="pt-0">
          {/* Features */}
          <div className="space-y-3 mb-6">
            <h4 className="text-xs font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wider font-heading">
              Key Features
            </h4>
            <div className="flex flex-wrap gap-2">
              {features.map((feature, index) => (
                <Badge
                  key={index}
                  variant="outline"
                  className="text-xs"
                >
                  {feature}
                </Badge>
              ))}
            </div>
          </div>

          {/* Action button with micro-animation */}
          <Button 
            variant="ghost" 
            className="w-full group-hover:bg-lahoma-orange/10 group-hover:text-lahoma-orange transition-colors font-heading font-semibold"
          >
            Explore Components
            <motion.div
              className="ml-2"
              animate={{ x: [0, 4, 0] }}
              transition={{ 
                repeat: Infinity, 
                duration: 2,
                ease: "easeInOut" 
              }}
            >
              →
            </motion.div>
          </Button>
        </CardContent>
      </Card>
    </motion.div>
  );
}

// Sample data matching your actual /test/components page
const sampleCategories = [
  {
    title: 'Core Components',
    description: 'Essential UI building blocks with Stripe-inspired design and accessibility',
    href: '/test/components/core',
    icon: Layers,
    color: 'from-[#F28705] to-[#F23005]',
    status: 'stable' as const,
    features: ['Buttons', 'Cards', 'Badges', 'Inputs'],
    componentCount: 12
  },
  {
    title: 'Form Components',
    description: 'Complete form system with validation, auto-completion and smart interactions',
    href: '/test/components/forms',
    icon: FileText,
    color: 'from-[#5198cd] to-[#4982A6]',
    status: 'stable' as const,
    features: ['Validation', 'Auto-complete', 'Multi-step', 'File Upload'],
    componentCount: 8
  },
  {
    title: 'Data Display',
    description: 'Tables, charts, and data visualization with real-time updates',
    href: '/test/components/data',
    icon: BarChart3,
    color: 'from-[#909233] to-[#6f7822]',
    status: 'stable' as const,
    features: ['Tables', 'Charts', 'Progress', 'Statistics'],
    componentCount: 6
  },
  {
    title: 'Navigation',
    description: 'Advanced navigation patterns with mega menus and breadcrumbs',
    href: '/test/components/navigation',
    icon: Radar,
    color: 'from-[#F2CB05] to-[#F28705]',
    status: 'stable' as const,
    features: ['Mega Menu', 'Breadcrumbs', 'Tabs', 'Dropdown'],
    componentCount: 7
  },
  {
    title: 'Feedback',
    description: 'Loading states, alerts, and user feedback components',
    href: '/test/components/feedback',
    icon: Activity,
    color: 'from-[#F23005] to-[#8C394B]',
    status: 'stable' as const,
    features: ['Loading', 'Alerts', 'Toasts', 'Modals'],
    componentCount: 9
  },
  {
    title: 'Gaming Elements',
    description: 'Gamification components for shotgun sports achievements and scoring',
    href: '/test/components/gaming',
    icon: Trophy,
    color: 'from-[#f07b1d] to-[#F25C05]',
    status: 'new' as const,
    features: ['Leaderboards', 'Achievements', 'Scoring', 'Competitions'],
    componentCount: 5
  }
];

export const SingleCard: StoryObj = {
  render: () => (
    <div className="max-w-sm">
      <ComponentCard 
        {...sampleCategories[0]}
        onClick={() => console.log('Card clicked!')}
      />
    </div>
  ),
};

export const CardGrid: StoryObj = {
  render: () => (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl">
      {sampleCategories.map((category, index) => (
        <ComponentCard 
          key={category.href}
          {...category}
          onClick={() => console.log(`${category.title} clicked!`)}
        />
      ))}
    </div>
  ),
};

export const AnimatedGrid: StoryObj = {
  render: () => {
    const containerVariants = {
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: {
          staggerChildren: 0.1
        }
      }
    };

    const cardVariants = {
      hidden: { 
        opacity: 0, 
        y: 20,
        scale: 0.95
      },
      visible: { 
        opacity: 1, 
        y: 0,
        scale: 1,
        transition: {
          type: "spring",
          stiffness: 300,
          damping: 24
        }
      }
    };

    return (
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl"
      >
        {sampleCategories.map((category, index) => (
          <motion.div key={category.href} variants={cardVariants}>
            <ComponentCard 
              {...category}
              onClick={() => console.log(`${category.title} clicked!`)}
            />
          </motion.div>
        ))}
      </motion.div>
    );
  },
};

export const WithCustomColors: StoryObj = {
  render: () => (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl">
      <ComponentCard 
        title="Custom Gradient 1"
        description="Purple to blue gradient with premium feel"
        href="#"
        icon={Star}
        color="from-purple-600 to-blue-600"
        status="new"
        features={['Custom', 'Gradient', 'Premium']}
        componentCount={15}
        onClick={() => console.log('Custom card 1 clicked!')}
      />
      <ComponentCard 
        title="Custom Gradient 2"  
        description="Orange to red gradient matching our brand"
        href="#"
        icon={Target}
        color="from-orange-500 to-red-600"
        status="beta"
        features={['Brand', 'Colors', 'Vibrant']}
        componentCount={8}
        onClick={() => console.log('Custom card 2 clicked!')}
      />
    </div>
  ),
};