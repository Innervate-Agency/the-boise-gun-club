'use client';

import { useEffect, useState } from 'react';
import { ThemeProvider } from '@/components/ui/ThemeContext';
import { NavigationProvider, useNavigation } from '@/components/navigation/NavigationContext';
import NavBar from '@/components/navigation/NavBar';
import Footer from '@/components/layout/Footer';
import AccessibilityFAB from '@/components/ui/AccessibilityFAB';
import NewThemeToggle from '@/components/ui/NewThemeToggle';

interface ClientLayoutProps {
  children: React.ReactNode;
}

// New wrapper component to access navigation context for padding
const MainContentWrapper = ({ children }: { children: React.ReactNode }) => {
  const { totalNavHeight } = useNavigation();

  return (
    <main 
      className="flex-grow w-full"
      style={{ paddingTop: `${totalNavHeight}px` }} // Apply dynamic padding
    >
      {children}
    </main>
  );
};

export default function ClientLayout({ children }: ClientLayoutProps) {
  const [mounted, setMounted] = useState(false);
  const [fontsLoaded, setFontsLoaded] = useState(false);

  useEffect(() => {
    setMounted(true);
    
    // Enhanced font loading detection with better fallback
    const checkFonts = async () => {
      try {
        // Set a reasonable timeout for font loading
        const fontTimeout = new Promise((resolve) => setTimeout(resolve, 1500));
        const fontReady = document.fonts.ready;
        
        await Promise.race([fontReady, fontTimeout]);
        
        // Check if our primary brand fonts loaded successfully (optional, document.fonts.ready is often sufficient for Google Fonts)
        const rajdhaniLoaded = document.fonts.check('1em "Rajdhani", sans-serif');
        const notoLoaded = document.fonts.check('1em "Noto Sans", sans-serif');
        
        // Always consider fonts loaded to avoid fallback override
        setFontsLoaded(true);
        document.documentElement.classList.add('fonts-loaded');
        document.documentElement.classList.remove('fonts-loading');
        
        if (rajdhaniLoaded && notoLoaded) {
          console.log('Custom fonts loaded successfully');
        } else {
          console.warn('Custom fonts detection failed, but using CSS fallback system instead');
        }
      } catch (error) {
        console.warn('Font checking not supported in this browser');
        // Show content immediately with fallback fonts
        setFontsLoaded(true);
        document.documentElement.classList.add('fonts-loaded');
        document.documentElement.classList.remove('fonts-loading');
      }
    };
    
    // Add initial loading class
    document.documentElement.classList.add('fonts-loading');
    checkFonts();
  }, []);

  // Add CSS for font loading states with better fallback
  useEffect(() => {
    if (typeof document !== 'undefined') {
      const style = document.createElement('style');
      style.textContent = `
        .fonts-loading {
          opacity: 0.95; /* Slightly visible to indicate loading */
          transition: opacity 0.3s ease-in-out;
        }
        .fonts-loaded {
          opacity: 1;
          transition: opacity 0.3s ease-in-out;
        }
        /* Fallback for if primary Google Fonts fail - use system UI fonts */
        .fonts-fallback body {
          font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif !important;
        }
        .fonts-fallback h1, .fonts-fallback h2, .fonts-fallback h3, .fonts-fallback h4, .fonts-fallback h5, .fonts-fallback h6 {
          font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif !important; /* More generic heading fallback */
        }
      `;
      document.head.appendChild(style);
      
      // Ensure content is visible after a maximum wait time
      const fallbackTimeout = setTimeout(() => {
        document.documentElement.classList.add('fonts-loaded');
        document.documentElement.classList.remove('fonts-loading');
        setFontsLoaded(true);
      }, 2000); // Show content after 2 seconds regardless
      
      return () => {
        clearTimeout(fallbackTimeout);
        if (style.parentNode) {
          style.parentNode.removeChild(style);
        }
      };
    }
  }, []);

  return (
    <ThemeProvider>
      <NavigationProvider>
        <NavBar />
        <MainContentWrapper>
          {children}
        </MainContentWrapper>
        <Footer />
        {mounted && (
          <>
            <NewThemeToggle />
            <AccessibilityFAB />
          </>
        )}
      </NavigationProvider>
    </ThemeProvider>
  );
}
