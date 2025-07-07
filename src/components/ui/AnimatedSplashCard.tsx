import { ReactNode } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface AnimatedSplashCardProps {
  children: ReactNode;
  className?: string;
}

export default function AnimatedSplashCard({ children, className = '' }: AnimatedSplashCardProps) {
  return (
    <motion.div
      className={`relative rounded-2xl shadow-lg bg-white dark:bg-gray-900 border-t-4 border-lahoma-orange overflow-hidden ${className}`}
      whileHover="hovered"
      initial="rest"
      animate="rest"
    >
      {/* Splash SVG/Gradient */}
      <AnimatePresence>
        <motion.div
          variants={{
            rest: { opacity: 0, scale: 0.95 },
            hovered: { opacity: 1, scale: 1 },
          }}
          transition={{ duration: 0.5, type: 'spring', stiffness: 80 }}
          className="absolute inset-0 pointer-events-none z-0 bg-gradient-radial from-leonard-yellow via-lahoma-orange to-red-600"
          style={{
            opacity: 0.18,
            filter: 'blur(8px)',
          }}
        />
      </AnimatePresence>
      {/* Card Content */}
      <div className="relative z-10 p-10 md:p-14">
        {children}
      </div>
    </motion.div>
  );
} 