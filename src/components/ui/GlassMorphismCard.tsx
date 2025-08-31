'use client';

import { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface GlassMorphismCardProps {
  children: ReactNode;
  className?: string;
  blur?: string;
  opacity?: number;
  hover?: boolean;
}

export default function GlassMorphismCard({
  children,
  className = '',
  blur = 'backdrop-blur-lg',
  opacity = 0.1,
  hover = true,
}: GlassMorphismCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      whileHover={hover ? { scale: 1.02, y: -5 } : {}}
      className={cn(
        'relative rounded-2xl border border-white/20',
        blur,
        'shadow-glassmorphism',
        'overflow-hidden',
        className
      )}
      style={{
        background: `rgba(255, 255, 255, ${opacity})`,
      }}
    >
      {/* Glass reflection effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-transparent pointer-events-none" />
      
      {/* Content */}
      <div className="relative z-10 p-6">
        {children}
      </div>
      
      {/* Border glow effect */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </motion.div>
  );
}
