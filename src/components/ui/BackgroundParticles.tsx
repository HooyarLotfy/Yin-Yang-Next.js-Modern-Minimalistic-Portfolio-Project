'use client';

import { motion } from 'framer-motion';

interface BackgroundParticlesProps {
  count?: number;
  color?: string;
  size?: string;
}

export default function BackgroundParticles({ 
  count = 30, 
  color = 'white', 
  size = 'w-1 h-1' 
}: BackgroundParticlesProps) {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {[...Array(count)].map((_, i) => (
        <motion.div
          key={i}
          className={`absolute ${size} bg-${color}/20 rounded-full`}
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -50, 0],
            x: [0, Math.random() > 0.5 ? 30 : -30, 0],
            opacity: [0.1, 0.6, 0.1],
            scale: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 8 + Math.random() * 4,
            repeat: Infinity,
            delay: Math.random() * 5,
            ease: "easeInOut"
          }}
        />
      ))}
    </div>
  );
}
