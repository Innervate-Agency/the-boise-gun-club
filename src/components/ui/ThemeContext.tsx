// Dummy ThemeContext for build compatibility
'use client';
import React from 'react';

export const ThemeContext = React.createContext({});
export const ThemeProvider = ({ children }: { children: React.ReactNode }) => children;
export const useTheme = () => ({ theme: 'light', setTheme: () => {} });