'use client';

import { motion } from 'framer-motion';

interface ErrorPageExampleProps {
  title: string;
  imageUrl: string;
  link: string;
  index: number;
}

export default function ErrorPageExample({
  title,
  imageUrl,
  link,
  index,
}: ErrorPageExampleProps) {
  return (
    <motion.div
      initial={{ 
        opacity: 0,
        y: 25,
        scale: 0.98,
        rotateX: 3,
        rotateY: 2,
        rotateZ: -1
      }}
      whileInView={{ 
        opacity: 1,
        y: 0,
        scale: 1,
        rotateX: 0,
        rotateY: 0,
        rotateZ: 0
      }}
      transition={{
        duration: 0.8,
        delay: index * 0.08,
        ease: [0.4, 0.0, 0.2, 1], // EaseOutBack pour un mouvement plus naturel
        type: 'spring',
        stiffness: 70,
        damping: 25,
        mass: 1.2,
        delayChildren: 0.1,
        staggerChildren: 0.05
      }}
      viewport={{
        once: true,
        amount: 0.2
      }}
      style={{
        willChange: 'transform, opacity',
        transformStyle: 'preserve-3d',
        backfaceVisibility: 'hidden',
        perspective: '1000px'
      }}
      className="w-full max-w-sm mx-auto flex flex-col items-center"
    >
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Voir l'exemple 404 de ${title}`}
        className="w-full aspect-[16/9] overflow-hidden rounded-2xl shadow-md group transition-transform duration-300 hover:scale-[1.02]"
      >
        <img
          src={imageUrl}
          alt={`404 ${title}`}
          className="w-full h-full object-cover transition duration-300 group-hover:brightness-110"
          loading="lazy"
        />
      </a>
      <h3 className="mt-4 text-lg font-semibold mb-2">{title}</h3>
    </motion.div>
  );
}
