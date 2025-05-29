'use client';

import { createContext, useContext, useState, useEffect } from 'react';

interface LanguageContextType {
  language: 'fr' | 'en';
  setLanguage: (lang: 'fr' | 'en') => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<'fr' | 'en'>('fr');
  const [isSSR, setIsSSR] = useState(true);

  useEffect(() => {
    setIsSSR(false);
    const savedLanguage = localStorage.getItem('language') as 'fr' | 'en';
    if (savedLanguage) {
      setLanguage(savedLanguage);
    }
  }, []);

  useEffect(() => {
    if (!isSSR) {
      localStorage.setItem('language', language);
    }
  }, [language, isSSR]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
