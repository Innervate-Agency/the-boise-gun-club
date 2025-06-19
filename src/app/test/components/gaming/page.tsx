'use client';

import { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Trophy, 
  Target, 
  Award, 
  Star, 
  Crown, 
  Zap,
  TrendingUp,
  Users,
  Calendar,
  Timer,
  Crosshair,
  Medal,
  Flame,
  Shield,
  Swords,
  ChevronUp,
  ChevronDown,
  Play,
  Pause,
  RotateCcw
} from 'lucide-react';

// Mock data for gaming elements
const achievements: Achievement[] = [
  {
    id: 1,
    title: 'Trap Master',
    description: 'Break 23 out of 25 clays in trap shooting',
    icon: Target,
    unlocked: true,
    rarity: 'legendary',
    points: 500,
    progress: 100,
    unlockedDate: '2024-06-15'
  },
  {
    id: 2,
    title: 'Skeet Ace',
    description: 'Break 22+ clays in 10 consecutive skeet rounds',
    icon: Crown,
    unlocked: true,
    rarity: 'epic',
    points: 300,
    progress: 100,
    unlockedDate: '2024-06-10'
  },
  {
    id: 3,
    title: 'Clay Crusher',
    description: 'Break 20 consecutive clays in sporting clays',
    icon: Zap,
    unlocked: false,
    rarity: 'rare',
    points: 200,
    progress: 75,
    unlockedDate: null
  },
  {
    id: 4,
    title: 'Perfect Round',
    description: 'Break all 25 clays in trap or all 25 targets in skeet',
    icon: Star,
    unlocked: false,
    rarity: 'legendary',
    points: 1000,
    progress: 45,
    unlockedDate: null
  }
];

const leaderboardData = [
  { rank: 1, name: 'Marcus Thompson', score: 247, change: 2, streak: 5, avatar: '🎯' },
  { rank: 2, name: 'Sarah Mitchell', score: 243, change: 1, streak: 3, avatar: '🏆' },
  { rank: 3, name: 'Jake Rodriguez', score: 239, change: -1, streak: 2, avatar: '⭐' },
  { rank: 4, name: 'Emily Chen', score: 235, change: 3, streak: 4, avatar: '🎖️' },
  { rank: 5, name: 'David Wilson', score: 232, change: -2, streak: 1, avatar: '🥇' },
  { rank: 6, name: 'Lisa Anderson', score: 228, change: 0, streak: 6, avatar: '🔥' },
  { rank: 7, name: 'Ryan Foster', score: 224, change: 1, streak: 2, avatar: '⚡' },
  { rank: 8, name: 'Alex Turner', score: 221, change: -1, streak: 3, avatar: '🎪' }
];

const competitionData = {
  name: 'Spring Championship 2024',
  participants: 64,
  prize: '$5,000',
  timeRemaining: '2d 14h 32m',
  status: 'active',
  rounds: [
    { name: 'Qualifying', completed: true, score: 94 },
    { name: 'Quarter-Finals', completed: true, score: 96 },
    { name: 'Semi-Finals', completed: false, score: null },
    { name: 'Finals', completed: false, score: null }
  ]
};

// Gaming Components
interface Achievement {
  id: number;
  title: string;
  description: string;
  icon: any;
  unlocked: boolean;
  rarity: 'common' | 'rare' | 'epic' | 'legendary';
  points: number;
  progress: number;
  unlockedDate: string | null;
}

const AchievementCard = ({ achievement }: { achievement: Achievement }) => {
  const { icon: Icon } = achievement;
  const rarityColors = {
    common: 'from-gray-400 to-gray-600',
    rare: 'from-blue-400 to-blue-600',
    epic: 'from-purple-400 to-purple-600',
    legendary: 'from-yellow-400 to-orange-600'
  };

  return (
    <motion.div
      whileHover={{ scale: 1.05, rotateY: 5 }}
      whileTap={{ scale: 0.98 }}
      className={`relative p-6 rounded-2xl border-2 transition-all duration-300 ${
        achievement.unlocked
          ? 'bg-white dark:bg-slate-800 border-[var(--accent-primary)] shadow-lg shadow-[var(--accent-primary)]/20'
          : 'bg-slate-100 dark:bg-slate-700 border-slate-300 dark:border-slate-600 opacity-75'
      }`}
    >
      {/* Rarity Glow */}
      <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${rarityColors[achievement.rarity]} opacity-20 blur-sm`}></div>
      
      {/* Lock Overlay */}
      {!achievement.unlocked && (
        <div className="absolute inset-0 bg-black/20 rounded-2xl flex items-center justify-center">
          <Shield className="h-8 w-8 text-slate-500" />
        </div>
      )}

      <div className="relative z-10">
        {/* Header */}
        <div className="flex items-center justify-between mb-4">
          <div className={`p-3 rounded-xl bg-gradient-to-r ${rarityColors[achievement.rarity]}`}>
            <Icon className="h-6 w-6 text-white" />
          </div>
          <div className="text-right">
            <div className="text-sm font-medium text-slate-500 dark:text-slate-400 uppercase tracking-wider">
              {achievement.rarity}
            </div>
            <div className="text-lg font-bold text-[var(--accent-primary)]">
              {achievement.points} pts
            </div>
          </div>
        </div>

        {/* Content */}
        <h3 className="text-lg font-heading font-bold text-slate-900 dark:text-white mb-2">
          {achievement.title}
        </h3>
        <p className="text-sm text-slate-600 dark:text-slate-300 mb-4">
          {achievement.description}
        </p>

        {/* Progress */}
        <div className="space-y-2">
          <div className="flex justify-between text-sm">
            <span className="text-slate-500 dark:text-slate-400">Progress</span>
            <span className="font-medium text-slate-900 dark:text-white">
              {achievement.progress}%
            </span>
          </div>
          <div className="h-2 bg-slate-200 dark:bg-slate-600 rounded-full overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${achievement.progress}%` }}
              transition={{ duration: 1, ease: "easeOut" }}
              className={`h-full bg-gradient-to-r ${rarityColors[achievement.rarity]} relative`}
            >
              {achievement.unlocked && (
                <div className="absolute inset-0 bg-white/30 animate-pulse"></div>
              )}
            </motion.div>
          </div>
        </div>

        {/* Unlock Date */}
        {achievement.unlocked && achievement.unlockedDate && (
          <div className="mt-4 pt-4 border-t border-slate-200 dark:border-slate-600">
            <div className="text-xs text-slate-500 dark:text-slate-400">
              Unlocked on {new Date(achievement.unlockedDate).toLocaleDateString()}
            </div>
          </div>
        )}
      </div>
    </motion.div>
  );
};

const LeaderboardRow = ({ player, index }: any) => {
  const getRankIcon = (rank: number) => {
    switch (rank) {
      case 1: return <Crown className="h-5 w-5 text-yellow-500" />;
      case 2: return <Medal className="h-5 w-5 text-gray-400" />;
      case 3: return <Award className="h-5 w-5 text-amber-600" />;
      default: return <span className="text-lg font-bold text-slate-500">#{rank}</span>;
    }
  };

  const getChangeIcon = (change: number) => {
    if (change > 0) return <ChevronUp className="h-4 w-4 text-green-500" />;
    if (change < 0) return <ChevronDown className="h-4 w-4 text-red-500" />;
    return <div className="h-4 w-4"></div>;
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ scale: 1.02, x: 10 }}
      className={`flex items-center gap-4 p-4 rounded-xl transition-all ${
        player.rank <= 3 
          ? 'bg-gradient-to-r from-[var(--accent-primary)]/10 to-transparent border border-[var(--accent-primary)]/20' 
          : 'bg-slate-50 dark:bg-slate-700 hover:bg-slate-100 dark:hover:bg-slate-600'
      }`}
    >
      {/* Rank */}
      <div className="flex items-center justify-center w-12 h-12">
        {getRankIcon(player.rank)}
      </div>

      {/* Avatar */}
      <div className="text-2xl">{player.avatar}</div>

      {/* Player Info */}
      <div className="flex-1">
        <div className="font-semibold text-slate-900 dark:text-white">
          {player.name}
        </div>
        <div className="text-sm text-slate-500 dark:text-slate-400">
          {player.streak} win streak
        </div>
      </div>

      {/* Score */}
      <div className="text-right">
        <div className="text-lg font-bold text-slate-900 dark:text-white">
          {player.score.toLocaleString()}
        </div>
        <div className="flex items-center gap-1 text-sm">
          {getChangeIcon(player.change)}
          <span className={`${
            player.change > 0 ? 'text-green-500' : 
            player.change < 0 ? 'text-red-500' : 'text-slate-500'
          }`}>
            {Math.abs(player.change)}
          </span>
        </div>
      </div>

      {/* Streak Indicator */}
      {player.streak >= 3 && (
        <div className="flex items-center gap-1">
          <Flame className="h-4 w-4 text-orange-500" />
          <span className="text-sm font-medium text-orange-500">Hot!</span>
        </div>
      )}
    </motion.div>
  );
};

const CompetitionBracket = ({ competition }: any) => {
  return (
    <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-xl border border-slate-200 dark:border-slate-700">
      <div className="flex items-center gap-3 mb-6">
        <Swords className="h-6 w-6 text-[var(--accent-primary)]" />
        <div>
          <h3 className="text-xl font-heading font-bold text-slate-900 dark:text-white">
            {competition.name}
          </h3>
          <div className="flex items-center gap-4 text-sm text-slate-500 dark:text-slate-400">
            <span>{competition.participants} participants</span>
            <span>Prize: {competition.prize}</span>
            <span className="flex items-center gap-1">
              <Timer className="h-4 w-4" />
              {competition.timeRemaining}
            </span>
          </div>
        </div>
      </div>

      <div className="space-y-4">
        {competition.rounds.map((round: any, index: number) => (
          <div
            key={round.name}
            className={`flex items-center gap-4 p-4 rounded-lg border-2 transition-all ${
              round.completed
                ? 'bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-800'
                : index === competition.rounds.findIndex((r: any) => !r.completed)
                ? 'bg-blue-50 dark:bg-blue-900/20 border-blue-200 dark:border-blue-800 animate-pulse'
                : 'bg-slate-50 dark:bg-slate-700 border-slate-200 dark:border-slate-600'
            }`}
          >
            <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
              round.completed
                ? 'bg-green-500 text-white'
                : index === competition.rounds.findIndex((r: any) => !r.completed)
                ? 'bg-blue-500 text-white'
                : 'bg-slate-300 dark:bg-slate-600 text-slate-500'
            }`}>
              {round.completed ? '✓' : index + 1}
            </div>
            
            <div className="flex-1">
              <div className="font-semibold text-slate-900 dark:text-white">
                {round.name}
              </div>
              {round.completed && round.score && (
                <div className="text-sm text-green-600 dark:text-green-400">
                  Score: {round.score}%
                </div>
              )}
            </div>
            
            {round.completed && (
              <Award className="h-5 w-5 text-green-500" />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

const ScoreCounter = () => {
  const [score, setScore] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const [multiplier, setMultiplier] = useState(1);

  const addScore = (points: number) => {
    setScore(prev => prev + (points * multiplier));
    if (score > 0 && score % 500 === 0) {
      setMultiplier(prev => Math.min(prev + 1, 5));
    }
  };

  const resetScore = () => {
    setScore(0);
    setMultiplier(1);
    setIsActive(false);
  };

  return (
    <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-xl border border-slate-200 dark:border-slate-700">
      <div className="text-center mb-6">
        <h3 className="text-xl font-heading font-bold text-slate-900 dark:text-white mb-2">
          Live Score Tracker
        </h3>
        <div className="text-4xl font-bold text-[var(--accent-primary)] mb-2">
          {score.toLocaleString()}
        </div>
        {multiplier > 1 && (
          <div className="text-lg font-semibold text-orange-500">
            {multiplier}x Multiplier!
          </div>
        )}
      </div>

      <div className="grid grid-cols-2 gap-4 mb-6">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => addScore(10)}
          className="p-4 bg-[var(--brand-green)] hover:bg-[var(--brand-green)]/80 text-white rounded-xl font-semibold transition-colors"
        >
          Hit (+10)
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => addScore(25)}
          className="p-4 bg-[var(--brand-blue)] hover:bg-[var(--brand-blue)]/80 text-white rounded-xl font-semibold transition-colors"
        >
          Clay Break (+25)
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => addScore(50)}
          className="p-4 bg-[var(--accent-secondary)] hover:bg-[var(--accent-secondary)]/80 text-white rounded-xl font-semibold transition-colors"
        >
          Perfect (+50)
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => addScore(100)}
          className="p-4 bg-[var(--accent-primary)] hover:bg-[var(--accent-primary)]/80 text-white rounded-xl font-semibold transition-colors"
        >
          Streak (+100)
        </motion.button>
      </div>

      <div className="flex gap-2">
        <button
          onClick={() => setIsActive(!isActive)}
          className={`flex-1 flex items-center justify-center gap-2 p-3 rounded-lg font-medium transition-colors ${
            isActive
              ? 'bg-red-500 hover:bg-red-600 text-white'
              : 'bg-green-500 hover:bg-green-600 text-white'
          }`}
        >
          {isActive ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
          {isActive ? 'Pause' : 'Start'}
        </button>
        <button
          onClick={resetScore}
          className="p-3 bg-slate-500 hover:bg-slate-600 text-white rounded-lg transition-colors"
        >
          <RotateCcw className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
};

export default function GamingPlayground() {
  const [selectedTab, setSelectedTab] = useState('achievements');

  const tabs = [
    { id: 'achievements', label: 'Achievements', icon: Award },
    { id: 'leaderboard', label: 'Leaderboard', icon: Trophy },
    { id: 'competition', label: 'Competition', icon: Swords },
    { id: 'scoring', label: 'Live Scoring', icon: Target }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
      {/* Header */}
      <div className="bg-gradient-to-r from-slate-900 to-slate-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <div className="flex justify-center mb-4">
              <Trophy className="h-12 w-12 text-[var(--accent-primary)]" />
            </div>
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">
              GAMING ELEMENTS ARSENAL
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Gamification components including achievement systems, leaderboards, 
              competition brackets, and real-time scoring for enhanced user engagement.
            </p>
          </motion.div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Tab Navigation */}
        <div className="mb-8">
          <div className="flex flex-wrap gap-2">
            {tabs.map((tab) => {
              const IconComponent = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setSelectedTab(tab.id)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all ${
                    selectedTab === tab.id
                      ? 'bg-[var(--accent-primary)] text-white shadow-lg'
                      : 'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700'
                  }`}
                >
                  <IconComponent className="h-4 w-4" />
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Tab Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            {selectedTab === 'achievements' && (
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {achievements.map((achievement) => (
                  <AchievementCard key={achievement.id} achievement={achievement} />
                ))}
              </div>
            )}

            {selectedTab === 'leaderboard' && (
              <div className="max-w-4xl mx-auto">
                <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-xl border border-slate-200 dark:border-slate-700">
                  <div className="flex items-center gap-3 mb-6">
                    <Trophy className="h-6 w-6 text-[var(--accent-primary)]" />
                    <h3 className="text-xl font-heading font-bold text-slate-900 dark:text-white">
                      Weekly Leaderboard
                    </h3>
                    <div className="ml-auto text-sm text-slate-500 dark:text-slate-400">
                      Updates every hour
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    {leaderboardData.map((player, index) => (
                      <LeaderboardRow key={player.rank} player={player} index={index} />
                    ))}
                  </div>
                </div>
              </div>
            )}

            {selectedTab === 'competition' && (
              <div className="max-w-4xl mx-auto">
                <CompetitionBracket competition={competitionData} />
              </div>
            )}

            {selectedTab === 'scoring' && (
              <div className="max-w-2xl mx-auto">
                <ScoreCounter />
              </div>
            )}
          </motion.div>
        </AnimatePresence>

        {/* Implementation Guide */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-16 bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-xl border border-slate-200 dark:border-slate-700"
        >
          <h2 className="text-2xl font-heading font-bold text-slate-900 dark:text-white mb-6">
            Gamification Implementation Guide
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-4">
                Psychology Principles
              </h3>
              <div className="space-y-3">
                <div className="p-3 bg-slate-50 dark:bg-slate-700 rounded-lg">
                  <div className="font-medium text-slate-900 dark:text-white">Progress Visibility</div>
                  <div className="text-sm text-slate-600 dark:text-slate-400">Clear progress indicators increase engagement</div>
                </div>
                <div className="p-3 bg-slate-50 dark:bg-slate-700 rounded-lg">
                  <div className="font-medium text-slate-900 dark:text-white">Social Competition</div>
                  <div className="text-sm text-slate-600 dark:text-slate-400">Leaderboards drive competitive behavior</div>
                </div>
                <div className="p-3 bg-slate-50 dark:bg-slate-700 rounded-lg">
                  <div className="font-medium text-slate-900 dark:text-white">Achievement Recognition</div>
                  <div className="text-sm text-slate-600 dark:text-slate-400">Badges and rewards provide satisfaction</div>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-4">
                Technical Features
              </h3>
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-slate-700 dark:text-slate-300">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  Real-time score updates
                </div>
                <div className="flex items-center gap-2 text-slate-700 dark:text-slate-300">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  Achievement unlock animations
                </div>
                <div className="flex items-center gap-2 text-slate-700 dark:text-slate-300">
                  <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                  Dynamic leaderboard ranking
                </div>
                <div className="flex items-center gap-2 text-slate-700 dark:text-slate-300">
                  <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                  Competition bracket management
                </div>
                <div className="flex items-center gap-2 text-slate-700 dark:text-slate-300">
                  <div className="w-2 h-2 bg-pink-500 rounded-full"></div>
                  Streak and multiplier systems
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
} 