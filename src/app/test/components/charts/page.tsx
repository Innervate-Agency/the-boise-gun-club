'use client';

import { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  BarChart3, 
  TrendingUp, 
  Target, 
  Trophy, 
  Users, 
  Calendar,
  Download,
  Settings,
  Eye,
  EyeOff,
  Zap,
  Activity,
  Award,
  Clock
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

// Mock data for gun club analytics
const generateShootingData = () => {
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'];
  return months.map(month => ({
    month,
    trapShooting: Math.floor(Math.random() * 50) + 70,
    skeetShooting: Math.floor(Math.random() * 40) + 60,
    sportingClays: Math.floor(Math.random() * 45) + 65,
    members: Math.floor(Math.random() * 20) + 45
  }));
};

const generateLeaderboardData = () => [
  { name: 'Marcus Thompson', score: 98, discipline: 'Trap', improvement: +5 },
  { name: 'Sarah Mitchell', score: 96, discipline: 'Skeet', improvement: +3 },
  { name: 'Jake Rodriguez', score: 94, discipline: 'Sporting Clays', improvement: +8 },
  { name: 'Emily Chen', score: 92, discipline: 'Trap', improvement: -1 },
  { name: 'David Wilson', score: 91, discipline: 'Skeet', improvement: +2 }
];

const generatePerformanceMetrics = () => ({
  accuracy: 87.5,
  consistency: 92.3,
  improvement: 15.8,
  sessionsThisMonth: 12
});

// Advanced Chart Components
const AnimatedBarChart = ({ data, title, color }: any) => {
  const [isVisible, setIsVisible] = useState(true);
  const maxValue = Math.max(...data.map((d: any) => Math.max(d.trapShooting, d.skeetShooting, d.sportingClays)));

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle className="font-heading">
          {title}
        </CardTitle>
        <Button
          onClick={() => setIsVisible(!isVisible)}
          variant="ghost"
          size="icon"
        >
          {isVisible ? <Eye className="h-4 w-4" /> : <EyeOff className="h-4 w-4" />}
        </Button>
      </CardHeader>
      
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="space-y-4 p-6 pt-0"
          >
            {data.map((item: any, index: number) => (
              <div key={item.month} className="space-y-2">
                <div className="flex justify-between text-sm font-medium text-secondary-foreground">
                  <span>{item.month}</span>
                  <span>{item.trapShooting}%</span>
                </div>
                <div className="relative h-3 bg-muted rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${(item.trapShooting / maxValue) * 100}%` }}
                    transition={{ delay: index * 0.1, duration: 0.8, ease: "easeOut" }}
                    className={`h-full bg-gradient-to-r ${color} rounded-full relative`}
                  >
                    <div className="absolute inset-0 bg-white/20 animate-pulse"></div>
                  </motion.div>
                </div>
              </div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </Card>
  );
};

const CircularProgressChart = ({ value, label, color, icon: Icon }: any) => {
  const circumference = 2 * Math.PI * 45;
  const strokeDasharray = circumference;
  const strokeDashoffset = circumference - (value / 100) * circumference;

  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
    >
      <Card className="text-center p-6">
        <div className="relative w-32 h-32 mx-auto mb-4">
          <svg className="w-32 h-32 transform -rotate-90" viewBox="0 0 100 100">
            <circle
              cx="50"
              cy="50"
              r="45"
              stroke="currentColor"
              strokeWidth="8"
              fill="none"
              className="text-muted"
            />
            <motion.circle
              cx="50"
              cy="50"
              r="45"
              stroke="currentColor"
              strokeWidth="8"
              fill="none"
              strokeLinecap="round"
              className={color}
              initial={{ strokeDashoffset: circumference }}
              animate={{ strokeDashoffset }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              style={{
                strokeDasharray,
              }}
            />
          </svg>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <div className="text-2xl font-bold text-primary-foreground">
                {value}%
              </div>
              <Icon className="h-5 w-5 mx-auto mt-1 text-secondary-foreground" />
            </div>
          </div>
        </div>
        <h4 className="font-heading font-semibold text-primary-foreground">
          {label}
        </h4>
      </Card>
    </motion.div>
  );
};

const LeaderboardCard = ({ data }: any) => {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center gap-3">
        <Trophy className="h-6 w-6 text-[var(--accent-primary)]" />
        <CardTitle className="font-heading">
          Top Performers
        </CardTitle>
      </CardHeader>
      
      <CardContent className="space-y-4">
        {data.map((member: any, index: number) => (
          <motion.div
            key={member.name}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            className="flex items-center justify-between p-3 rounded-lg bg-muted hover:bg-accent transition-colors"
          >
            <div className="flex items-center gap-3">
              <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
                index === 0 ? 'bg-yellow-500 text-white' :
                index === 1 ? 'bg-gray-400 text-white' :
                index === 2 ? 'bg-amber-600 text-white' :
                'bg-muted-foreground text-muted'
              }`}>
                {index + 1}
              </div>
              <div>
                <div className="font-semibold text-primary-foreground">
                  {member.name}
                </div>
                <div className="text-sm text-secondary-foreground">
                  {member.discipline}
                </div>
              </div>
            </div>
            <div className="text-right">
              <div className="font-bold text-primary-foreground">
                {member.score}%
              </div>
              <div className={`text-sm flex items-center gap-1 ${
                member.improvement > 0 ? 'text-green-600' : 
                member.improvement < 0 ? 'text-red-600' : 'text-secondary-foreground'
              }`}>
                {member.improvement > 0 ? '↗' : member.improvement < 0 ? '↘' : '→'}
                {Math.abs(member.improvement)}
              </div>
            </div>
          </motion.div>
        ))}
      </CardContent>
    </Card>
  );
};

const RealTimeActivityFeed = () => {
  const [activities, setActivities] = useState([
    { id: 1, user: 'Marcus T.', action: 'achieved personal best', target: 'Trap Shooting', time: '2 min ago', type: 'achievement' },
    { id: 2, user: 'Sarah M.', action: 'completed session', target: 'Skeet Range', time: '5 min ago', type: 'session' },
    { id: 3, user: 'Jake R.', action: 'joined competition', target: 'Spring Championship', time: '8 min ago', type: 'competition' },
  ]);

  useEffect(() => {
    const interval = setInterval(() => {
      const newActivity = {
        id: Date.now(),
        user: ['Alex K.', 'Emma L.', 'Chris P.', 'Diana R.'][Math.floor(Math.random() * 4)],
        action: ['completed session', 'achieved personal best', 'joined competition'][Math.floor(Math.random() * 3)],
        target: ['Trap Range', 'Skeet Range', 'Sporting Clays'][Math.floor(Math.random() * 3)],
        time: 'just now',
        type: ['session', 'achievement', 'competition'][Math.floor(Math.random() * 3)]
      };
      
      setActivities(prev => [newActivity, ...prev.slice(0, 4)]);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const getActivityIcon = (type: string) => {
    switch (type) {
      case 'achievement': return <Award className="h-4 w-4 text-yellow-500" />;
      case 'session': return <Target className="h-4 w-4 text-blue-500" />;
      case 'competition': return <Trophy className="h-4 w-4 text-purple-500" />;
      default: return <Activity className="h-4 w-4 text-gray-500" />;
    }
  };

  return (
    <Card>
      <CardHeader className="flex flex-row items-center gap-3">
        <Activity className="h-6 w-6 text-[var(--accent-secondary)]" />
        <CardTitle className="font-heading">
          Live Activity Feed
        </CardTitle>
        <div className="ml-auto">
          <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
        </div>
      </CardHeader>
      
      <CardContent className="space-y-3">
        <AnimatePresence>
          {activities.map((activity) => (
            <motion.div
              key={activity.id}
              initial={{ opacity: 0, y: -20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.95 }}
              className="flex items-center gap-3 p-3 rounded-lg bg-muted"
            >
              {getActivityIcon(activity.type)}
              <div className="flex-1 min-w-0">
                <div className="text-sm text-primary-foreground">
                  <span className="font-semibold">{activity.user}</span>
                  {' '}{activity.action} in{' '}
                  <span className="font-semibold text-[var(--accent-primary)]">{activity.target}</span>
                </div>
                <div className="text-xs text-secondary-foreground">
                  {activity.time}
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </CardContent>
    </Card>
  );
};

export default function ChartsPlayground() {
  const [selectedChart, setSelectedChart] = useState('overview');
  const shootingData = useMemo(() => generateShootingData(), []);
  const leaderboardData = useMemo(() => generateLeaderboardData(), []);
  const metrics = useMemo(() => generatePerformanceMetrics(), []);

  const chartTypes = [
    { id: 'overview', label: 'Overview Dashboard', icon: BarChart3 },
    { id: 'performance', label: 'Performance Metrics', icon: TrendingUp },
    { id: 'leaderboard', label: 'Live Rankings', icon: Trophy },
    { id: 'activity', label: 'Real-time Feed', icon: Activity }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-card text-card-foreground border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-left"
          >
            <div className="flex items-center gap-4 mb-4">
              <BarChart3 className="h-12 w-12 text-[var(--accent-primary)]" />
              <div>
                <h1 className="text-4xl md:text-5xl font-heading font-bold">
                  DATA VISUALIZATION ARSENAL
                </h1>
                <p className="text-xl text-muted-foreground max-w-3xl">
                  Advanced interactive charts and analytics for tracking shooting performance.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Chart Type Selector */}
        <div className="mb-8">
          <div className="flex flex-wrap gap-2">
            {chartTypes.map((type) => {
              const IconComponent = type.icon;
              return (
                <Button
                  key={type.id}
                  onClick={() => setSelectedChart(type.id)}
                  variant={selectedChart === type.id ? 'default' : 'outline'}
                >
                  <IconComponent className="h-4 w-4 mr-2" />
                  {type.label}
                </Button>
              );
            })}
          </div>
        </div>

        {/* Chart Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedChart}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            {selectedChart === 'overview' && (
              <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
                <div className="xl:col-span-2">
                  <AnimatedBarChart
                    data={shootingData}
                    title="Monthly Shooting Performance"
                    color="from-blue-500 to-purple-600"
                  />
                </div>
                <div className="space-y-6">
                  <CircularProgressChart
                    value={metrics.accuracy}
                    label="Accuracy Rate"
                    color="text-green-500"
                    icon={Target}
                  />
                  <CircularProgressChart
                    value={metrics.consistency}
                    label="Consistency"
                    color="text-blue-500"
                    icon={Zap}
                  />
                </div>
              </div>
            )}

            {selectedChart === 'performance' && (
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
                <CircularProgressChart
                  value={metrics.accuracy}
                  label="Accuracy Rate"
                  color="text-green-500"
                  icon={Target}
                />
                <CircularProgressChart
                  value={metrics.consistency}
                  label="Consistency"
                  color="text-blue-500"
                  icon={Zap}
                />
                <CircularProgressChart
                  value={metrics.improvement}
                  label="Improvement"
                  color="text-purple-500"
                  icon={TrendingUp}
                />
                <CircularProgressChart
                  value={(metrics.sessionsThisMonth / 20) * 100}
                  label="Monthly Sessions"
                  color="text-orange-500"
                  icon={Clock}
                />
              </div>
            )}

            {selectedChart === 'leaderboard' && (
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <LeaderboardCard data={leaderboardData} />
                <AnimatedBarChart
                  data={shootingData}
                  title="Top Performers by Discipline"
                  color="from-yellow-500 to-orange-600"
                />
              </div>
            )}

            {selectedChart === 'activity' && (
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <RealTimeActivityFeed />
                <div className="space-y-6">
                  <AnimatedBarChart
                    data={shootingData.slice(0, 3)}
                    title="Recent Activity Trends"
                    color="from-emerald-500 to-teal-600"
                  />
                </div>
              </div>
            )}
          </motion.div>
        </AnimatePresence>

        {/* Implementation Guide */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-16"
        >
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl font-heading">
                Implementation Guide
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-lg font-semibold text-primary-foreground mb-4">
                    Featured Libraries
                  </h3>
                  <div className="space-y-3">
                    <div className="p-3 bg-muted rounded-lg">
                      <div className="font-medium text-primary-foreground">Recharts</div>
                      <div className="text-sm text-secondary-foreground">React charting library built on D3</div>
                    </div>
                    <div className="p-3 bg-muted rounded-lg">
                      <div className="font-medium text-primary-foreground">Framer Motion</div>
                      <div className="text-sm text-secondary-foreground">Advanced animations and transitions</div>
                    </div>
                    <div className="p-3 bg-muted rounded-lg">
                      <div className="font-medium text-primary-foreground">React Spring</div>
                      <div className="text-sm text-secondary-foreground">Spring-physics based animations</div>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-primary-foreground mb-4">
                    Key Features
                  </h3>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-primary-foreground">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      Real-time data streaming
                    </div>
                    <div className="flex items-center gap-2 text-primary-foreground">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      Interactive hover states
                    </div>
                    <div className="flex items-center gap-2 text-primary-foreground">
                      <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                      Smooth animations
                    </div>
                    <div className="flex items-center gap-2 text-primary-foreground">
                      <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                      Responsive design
                    </div>
                    <div className="flex items-center gap-2 text-primary-foreground">
                      <div className="w-2 h-2 bg-pink-500 rounded-full"></div>
                      Dark mode support
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
} 