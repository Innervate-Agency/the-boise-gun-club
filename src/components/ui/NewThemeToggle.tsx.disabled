'use client';

import { useTheme } from './ThemeContext'; // Ensure this path is correct
import { FiSun, FiMoon, FiMonitor } from 'react-icons/fi';
import { motion } from 'framer-motion';

const NewThemeToggle = () => {
  // Updated to use themeSetting and effectiveTheme from the revised context
  const { themeSetting, effectiveTheme, setTheme } = useTheme();

  const cycleTheme = () => {
    if (themeSetting === 'light') {
      setTheme('dark');
    } else if (themeSetting === 'dark') {
      setTheme('system');
    } else { // themeSetting === 'system'
      setTheme('light');
    }
  };

  // Icon selection should be based on the current themeSetting, or effectiveTheme if preferred
  let Icon;
  let title = "Toggle theme";
  if (themeSetting === 'light') {
    Icon = FiSun;
    title = "Switch to Dark Mode";
  } else if (themeSetting === 'dark') {
    Icon = FiMoon;
    title = "Switch to System Preference";
  } else { // system
    Icon = FiMonitor;
    title = "Switch to Light Mode";
  }
  
  // The button can visually reflect the effectiveTheme if desired, e.g. for system theme
  // For simplicity, this example keeps the icon based on the setting itself.

  return (
    <motion.button
      onClick={cycleTheme}
      title={title} // Add title for accessibility
      className="fixed bottom-6 left-24 z-50 p-4 bg-slate-800 text-[var(--card)] rounded-full shadow-xl hover:bg-slate-700 transition-all duration-200 border-2 border-red-600/20 hover:border-red-600/40"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      aria-label={title} // More descriptive aria-label
    >
      <Icon size={24} />
    </motion.button>
  );
};

export default NewThemeToggle;
