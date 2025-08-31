'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseEnter = () => {
      // Don't show hover effects if modal is open
      if (!isModalOpen) {
        setIsHovering(true);
      }
    };
    const handleMouseLeave = () => setIsHovering(false);

    // Check for modal overlay
    const checkModalState = () => {
      const modalOverlay = document.querySelector('[class*="z-[9998]"]');
      setIsModalOpen(!!modalOverlay);
    };

    // Track mouse movement
    window.addEventListener('mousemove', updateMousePosition);

    // Track hoverable elements
    const hoverElements = document.querySelectorAll('a, button, [data-cursor-hover]');
    hoverElements.forEach(el => {
      el.addEventListener('mouseenter', handleMouseEnter);
      el.addEventListener('mouseleave', handleMouseLeave);
    });

    // Check modal state periodically
    const modalChecker = setInterval(checkModalState, 100);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
      clearInterval(modalChecker);
      hoverElements.forEach(el => {
        el.removeEventListener('mouseenter', handleMouseEnter);
        el.removeEventListener('mouseleave', handleMouseLeave);
      });
    };
  }, [isModalOpen]);

  return (
    <>
      {/* Hide default cursor */}
      <style jsx global>{`
        * {
          cursor: none !important;
        }
      `}</style>

      {/* Main Cursor - Modern Design */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999]"
        animate={{
          x: mousePosition.x - 12,
          y: mousePosition.y - 12,
        }}
        transition={{
          type: 'spring',
          stiffness: 400,
          damping: 25,
          mass: 0.5,
        }}
      >
        <div 
          className={`w-6 h-6 rounded-full border-2 transition-all duration-200 ${
            isHovering && !isModalOpen
              ? 'border-yin-600 dark:border-yang-400 bg-yin-100 dark:bg-yang-900 scale-150' 
              : 'border-yin-800 dark:border-yang-200 bg-transparent'
          }`}
        />
      </motion.div>

      {/* Trailing Dot */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9998]"
        animate={{
          x: mousePosition.x - 2,
          y: mousePosition.y - 2,
        }}
        transition={{
          type: 'spring',
          stiffness: 200,
          damping: 20,
          mass: 0.3,
        }}
      >
        <div className="w-1 h-1 rounded-full bg-yin-600 dark:bg-yang-400" />
      </motion.div>

      {/* Outer Ring for Hover Effect - Only show when not in modal */}
      {isHovering && !isModalOpen && (
        <motion.div
          className="fixed top-0 left-0 pointer-events-none z-[9997]"
          animate={{
            x: mousePosition.x - 20,
            y: mousePosition.y - 20,
            scale: 1,
            opacity: 0.3,
          }}
          transition={{
            type: 'spring',
            stiffness: 300,
            damping: 30,
          }}
          initial={{ scale: 0, opacity: 0 }}
          exit={{ scale: 0, opacity: 0 }}
        >
          <div className="w-10 h-10 rounded-full border border-yin-400 dark:border-yang-600" />
        </motion.div>
      )}
    </>
  );
}
