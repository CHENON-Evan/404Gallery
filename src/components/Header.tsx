'use client';

import Link from 'next/link';
import ThemeAndLanguageSwitcher from './ThemeAndLanguageSwitcher';

export default function Header() {


  return (
    <header className="p-2 transition-colors duration-0 md:bg-white dark:md:bg-gray-900 shadow-md fixed top-0 left-0 w-full z-50 h-20">
      <div className="max-w-6xl mx-auto px-4 h-full flex items-center justify-center">
        <div className="flex items-center justify-between w-full">
          <div>
            <Link
              href="/"
              className="text-2xl font-bold text-indigo-600 dark:text-indigo-400 hover:text-indigo-500 dark:hover:text-indigo-300"
            >
              404 Gallery
            </Link>
          </div>
          <div className="flex items-center gap-4">
            <ThemeAndLanguageSwitcher />
          </div>
        </div>
      </div>
    </header>
  );
}
