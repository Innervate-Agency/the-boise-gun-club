'use client';

import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';

type ThemeSetting = 'light' | 'dark' | 'system';

interface ThemeContextType {
    themeSetting: ThemeSetting;
    effectiveTheme: 'light' | 'dark';
    setTheme: (theme: ThemeSetting) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [themeSetting, setThemeSetting] = useState<ThemeSetting>('system');
    const [effectiveTheme, setEffectiveTheme] = useState<'light' | 'dark'>('dark');

    const applyTheme = useCallback((setting: ThemeSetting) => {
        let currentTheme: 'light' | 'dark';
        if (setting === 'system') {
            currentTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
        } else {
            currentTheme = setting;
        }
        setEffectiveTheme(currentTheme);
        document.documentElement.classList.toggle('dark', currentTheme === 'dark');
        document.documentElement.setAttribute('data-theme', currentTheme);
        localStorage.setItem('theme', setting);
    }, []);

    useEffect(() => {
        const savedTheme = localStorage.getItem('theme') as ThemeSetting | null;
        if (savedTheme) {
            setThemeSetting(savedTheme);
            applyTheme(savedTheme);
        } else {
            applyTheme('system'); // Default to system if nothing is saved
        }
    }, [applyTheme]);

    useEffect(() => {
        const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
        const handleChange = () => {
            if (themeSetting === 'system') {
                applyTheme('system');
            }
        };

        mediaQuery.addEventListener('change', handleChange);
        return () => mediaQuery.removeEventListener('change', handleChange);
    }, [themeSetting, applyTheme]);

    const setTheme = (newSetting: ThemeSetting) => {
        setThemeSetting(newSetting);
        applyTheme(newSetting);
    };

    return (
        <ThemeContext.Provider value={{ themeSetting, effectiveTheme, setTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

export const useTheme = (): ThemeContextType => {
    const context = useContext(ThemeContext);
    if (context === undefined) {
        throw new Error('useTheme must be used within a ThemeProvider');
    }
    return context;
};