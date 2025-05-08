import { createContext, useContext, useEffect, useState, ReactNode } from 'react';

type Theme = 'light' | 'dark' | 'system';
type ColorScheme = 'light' | 'dark';

interface ThemeContextType {
    theme: Theme;
    setTheme: (theme: Theme) => void;
    colorScheme: ColorScheme;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: ReactNode }) {
    const [theme, setTheme] = useState<Theme>('system');
    const [colorScheme, setColorScheme] = useState<ColorScheme>('dark');

    useEffect(() => {
        // Load saved theme preference
        const savedTheme = localStorage.getItem('theme') as Theme;
        if (savedTheme) {
            setTheme(savedTheme);
        }
    }, []);

    useEffect(() => {
        // Save theme preference
        localStorage.setItem('theme', theme);

        // Handle system theme changes
        const updateColorScheme = () => {
            if (theme === 'system') {
                const isDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                setColorScheme(isDark ? 'dark' : 'light');
            } else {
                setColorScheme(theme);
            }
        };

        updateColorScheme();

        if (theme === 'system') {
            const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
            mediaQuery.addEventListener('change', updateColorScheme);
            return () => mediaQuery.removeEventListener('change', updateColorScheme);
        }
    }, [theme]);

    return (
        <ThemeContext.Provider value={{ theme, setTheme, colorScheme }}>
            {children}
        </ThemeContext.Provider>
    );
}

export function useTheme() {
    const context = useContext(ThemeContext);
    if (context === undefined) {
        throw new Error('useTheme must be used within a ThemeProvider');
    }
    return context;
} 