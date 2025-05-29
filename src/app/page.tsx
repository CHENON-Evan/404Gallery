'use client'

import { useState, useEffect } from 'react'
import { examples } from '@/data/examples'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ErrorPageExample from '@/components/ErrorPageExample'
import { translations } from '@/components/translations'
import { useLanguage } from '@/context/LanguageContext'

export default function Home() {
  const [searchTerm, setSearchTerm] = useState('')
  const [isSSR, setIsSSR] = useState(true)
  const { language } = useLanguage()

  useEffect(() => {
    setIsSSR(false)
  }, [])

  const searchTermLower = searchTerm.toLowerCase().trim();

  if (isSSR) {
    return null
  }

  const filteredExamples = searchTermLower === ''
    ? examples
    : examples.filter(({ title }) => {
      const titleLower = title.toLowerCase();
      const words = searchTermLower.split(' ').filter(word => word.trim());

      return words.every(word => titleLower.includes(word));
    });

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <div className="container mx-auto px-4 pt-24 pb-8 max-w-6xl">
          <div className="flex flex-col gap-6">
            <h1 className="text-4xl font-bold text-center">{translations[language].pageTitle}</h1>
            <div className="mb-8 text-center">
              <input
                type="text"
                placeholder={translations[language].searchPlaceholder}
                className="px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 w-full max-w-md focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:bg-gray-800 dark:text-white"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredExamples.map((example, idx) => (
                <div key={idx}>
                  <ErrorPageExample
                    title={example.title}
                    imageUrl={example.imageUrl}
                    link={example.link}
                    index={idx % 3}
                  />
                </div>
              ))}
              {filteredExamples.length === 0 && (
                <div className="col-span-3 text-center py-12">
                  <p className="text-gray-600 dark:text-gray-400">{translations[language].noResults.replace('{searchTerm}', searchTerm)}</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
