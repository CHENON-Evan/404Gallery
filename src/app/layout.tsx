import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "../context/LanguageContext";
import { ThemeProvider } from "../context/ThemeContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "404 Gallery",
  description: "",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">
        <LanguageProvider>
          <ThemeProvider>
            <div className="min-h-screen flex flex-col">
              {children}
            </div>
          </ThemeProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}
