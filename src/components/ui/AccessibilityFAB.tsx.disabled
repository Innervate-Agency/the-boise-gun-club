'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MdAccessibilityNew, MdClose, MdZoomIn, MdZoomOut, MdRestartAlt, MdContrast } from 'react-icons/md';

const AccessibilityFAB: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [fontSizeMultiplier, setFontSizeMultiplier] = useState(1);
  const [isHighContrast, setIsHighContrast] = useState(false);

  // Persist settings to localStorage
  useEffect(() => {
    const savedFontSize = localStorage.getItem('accessibility-fontSize');
    const savedHighContrast = localStorage.getItem('accessibility-highContrast');

    if (savedFontSize) {
      setFontSizeMultiplier(parseFloat(savedFontSize));
    }
    if (savedHighContrast) {
      setIsHighContrast(savedHighContrast === 'true');
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('accessibility-fontSize', fontSizeMultiplier.toString());
    document.documentElement.style.fontSize = `${fontSizeMultiplier * 100}%`;
  }, [fontSizeMultiplier]);

  useEffect(() => {
    localStorage.setItem('accessibility-highContrast', isHighContrast.toString());
    if (isHighContrast) {
      document.documentElement.classList.add('high-contrast');
    } else {
      document.documentElement.classList.remove('high-contrast');
    }
  }, [isHighContrast]);

  const togglePanel = () => setIsOpen(!isOpen);

  const adjustFontSize = (increment: number) => {
    setFontSizeMultiplier(prev => Math.max(0.5, Math.min(2, prev + increment)));
  };

  const resetFontSize = () => setFontSizeMultiplier(1);
  const toggleHighContrast = () => setIsHighContrast(!isHighContrast);

  const fabVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: { scale: 1, opacity: 1, transition: { type: 'spring', stiffness: 260, damping: 20 } },
  };

  const panelVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.3, ease: 'easeOut' } },
    exit: { opacity: 0, y: 30, scale: 0.95, transition: { duration: 0.2, ease: 'easeIn' } },
  };

  return (
    <>
      <motion.button
        variants={fabVariants}
        initial="hidden"
        animate="visible"
        onClick={togglePanel}
        className="fixed bottom-6 left-6 z-[1000] w-14 h-14 bg-[var(--accent-primary)] text-[var(--text-primary)] rounded-full shadow-xl flex items-center justify-center hover:brightness-90 transition-colors duration-200"
        aria-label={isOpen ? 'Close accessibility panel' : 'Open accessibility panel'}
        aria-expanded={isOpen}
      >
        {isOpen ? <MdClose size={28} /> : <MdAccessibilityNew size={28} />}
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            variants={panelVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="fixed bottom-24 left-6 z-[999] w-72 bg-[var(--bg-secondary)] border border-white/10 rounded-lg shadow-2xl p-6 text-[var(--text-primary)]"
          >
            <h3 className="text-xl font-semibold mb-5 text-center">Accessibility Options</h3>
            
            {/* Font Size Controls */}
            <div className="mb-6">
              <p className="text-sm text-[var(--text-secondary)] mb-2">Font Size</p>
              <div className="flex items-center space-x-2">
                <button 
                  onClick={() => adjustFontSize(-0.1)} 
                  className="p-2 bg-[var(--bg-tertiary)] hover:bg-[var(--accent-primary)] rounded-md transition-colors"
                  aria-label="Decrease font size"
                >
                  <MdZoomOut size={20} />
                </button>
                <span className="flex-grow text-center text-lg tabular-nums">{(fontSizeMultiplier * 100).toFixed(0)}%</span>
                <button 
                  onClick={() => adjustFontSize(0.1)} 
                  className="p-2 bg-[var(--bg-tertiary)] hover:bg-[var(--accent-primary)] rounded-md transition-colors"
                  aria-label="Increase font size"
                >
                  <MdZoomIn size={20} />
                </button>
                <button 
                  onClick={resetFontSize} 
                  className="p-2 bg-[var(--bg-tertiary)] hover:bg-[var(--accent-secondary)] rounded-md transition-colors"
                  aria-label="Reset font size"
                >
                  <MdRestartAlt size={20} />
                </button>
              </div>
            </div>

            {/* High Contrast Toggle */}
            <div>
              <p className="text-sm text-[var(--text-secondary)] mb-2">Display Mode</p>
              <button
                onClick={toggleHighContrast}
                className={`w-full flex items-center justify-between p-3 rounded-md transition-colors ${
                  isHighContrast ? 'bg-[var(--accent-primary)] text-[var(--text-primary)]' : 'bg-[var(--bg-tertiary)] hover:bg-[var(--bg-secondary)]'
                }`}
                aria-pressed={isHighContrast}
              >
                <span className="flex items-center">
                  <MdContrast size={20} className="mr-2" />
                  High Contrast
                </span>
                <span className={`w-4 h-4 rounded-full border-2 ${isHighContrast ? 'bg-[var(--text-primary)] border-[var(--text-primary)]' : 'border-[var(--text-secondary)]'}`}></span>
              </button>
            </div>
            
            <p className="text-xs text-[var(--text-secondary)] opacity-70 mt-6 text-center">
              Settings are saved locally in your browser.
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default AccessibilityFAB;
