'use client';

import { motion } from 'framer-motion';

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      viewport={{ once: true }}
      className="w-full py-4 border-t border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 text-center"
    >
      <p className="text-sm text-gray-600 dark:text-gray-400">
        © {new Date().getFullYear()} 404Gallery
      </p>
    </motion.footer>
  );
}
