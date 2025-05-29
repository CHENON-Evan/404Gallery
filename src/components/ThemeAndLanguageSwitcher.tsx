'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { MoonIcon, SunIcon } from '@heroicons/react/24/outline';
import { translations } from './translations';
import { useLanguage } from '../context/LanguageContext';
import { useTheme } from '../context/ThemeContext';

interface ThemeAndLanguageSwitcherProps {
  className?: string;
}

export default function ThemeAndLanguageSwitcher({ className = '' }: ThemeAndLanguageSwitcherProps) {
  const [isThemeHovered, setIsThemeHovered] = useState(false);
  const [isLanguageHovered, setIsLanguageHovered] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const { language, setLanguage } = useLanguage();
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setIsLoading(false);
  }, []);

  useEffect(() => {
    setIsLoading(false);
  }, []);

  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove(theme === 'light' ? 'dark' : 'light');
    root.classList.add(theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
  };

  const switchLanguage = () => {
    const newLang = language === 'fr' ? 'en' : 'fr';
    setLanguage(newLang);
    console.log('Switching language to:', newLang);
  };

  return (
    <div className={`flex items-center gap-4 ${className}`}>
      {/* Switch de thème */}
      <motion.button
        onClick={toggleTheme}
        onMouseEnter={() => setIsThemeHovered(true)}
        onMouseLeave={() => setIsThemeHovered(false)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className={`p-2 rounded-lg transition-all duration-200 ${
          isThemeHovered ? 'bg-indigo-50 dark:bg-indigo-900' : 'hover:bg-gray-100 dark:hover:bg-gray-800'
        }`}
        aria-label="Toggle theme"
        title={translations[language].theme[theme]}
      >
        <motion.div
          initial={{ rotate: 0 }}
          animate={{ rotate: isThemeHovered ? 180 : 0 }}
          transition={{ duration: 0.2 }}
        >
          {theme === 'light' ? (
            <SunIcon className="w-5 h-5" />
          ) : (
            <MoonIcon className="w-5 h-5" />
          )}
        </motion.div>
      </motion.button>

      {/* Switch de langue */}
      <motion.button
        onClick={switchLanguage}
        className="relative p-2 rounded-lg transition-all duration-200"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        style={{
          backgroundColor: isLanguageHovered
            ? 'rgba(147, 197, 253, 0.2)'
            : 'transparent',
          backdropFilter: isLanguageHovered ? 'blur(4px)' : 'none'
        }}
      >
        <div className="flex items-center gap-1">
          <span className="text-sm font-medium">
            {language === 'fr' ? 'FR' : 'EN'}
          </span>
        </div>
      </motion.button>
    </div>
  );
}
