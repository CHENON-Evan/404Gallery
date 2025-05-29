'use client';

import { createContext, useContext, useState, useEffect } from 'react';

interface ThemeContextType {
  theme: 'light' | 'dark';
  setTheme: (theme: 'light' | 'dark') => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  const [isSSR, setIsSSR] = useState(true);

  useEffect(() => {
    setIsSSR(false);
    const savedTheme = localStorage.getItem('theme') || 'light';
    setTheme(savedTheme as 'light' | 'dark');
    document.documentElement.classList.remove(savedTheme === 'light' ? 'dark' : 'light');
    document.documentElement.classList.add(savedTheme);
  }, []);

  useEffect(() => {
    if (!isSSR) {
      localStorage.setItem('theme', theme);
      document.documentElement.classList.remove(theme === 'light' ? 'dark' : 'light');
      document.documentElement.classList.add(theme);
    }
  }, [theme, isSSR]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
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
