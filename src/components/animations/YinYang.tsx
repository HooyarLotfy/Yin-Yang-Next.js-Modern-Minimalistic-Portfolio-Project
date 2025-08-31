'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface YinYangProps {
  size?: number;
  className?: string;
}

export default function YinYang({ size = 200, className = '' }: YinYangProps) {
  const yinYangRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    if (yinYangRef.current) {
      // Only scroll-triggered rotation (no continuous rotation)
      ScrollTrigger.create({
        trigger: document.body,
        start: 'top top',
        end: 'bottom bottom',
        onUpdate: (self) => {
          const progress = self.progress;
          const rotation = progress * 360 * 3; // 3 full rotations during scroll
          gsap.set(yinYangRef.current, {
            rotation: rotation,
          });
        },
      });
    }

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <div className={`relative yin-yang-container ${className}`}>
      <svg
        ref={yinYangRef}
        width={size}
        height={size}
        viewBox="0 0 200 200"
        className="drop-shadow-yin-yang w-full h-full max-w-full"
      >
        {/* Outer circle */}
        <circle
          cx="100"
          cy="100"
          r="95"
          fill="white"
          stroke="black"
          strokeWidth="2"
        />
        
        {/* Left half (black) */}
        <path
          d="M 100,5 A 95,95 0 0,1 100,195 A 47.5,47.5 0 0,1 100,100 A 47.5,47.5 0 0,0 100,5"
          fill="black"
        />
        
        {/* Small white dot - no text */}
        <circle cx="100" cy="50" r="15" fill="white" />
        
        {/* Small black dot - no text */}
        <circle cx="100" cy="150" r="15" fill="black" />

        {/* Glow effects */}
        <defs>
          <filter id="glow">
            <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
            <feMerge> 
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>
      </svg>
      
      {/* Animated particles around yin-yang */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-gradient-to-r from-black to-white rounded-full opacity-60"
            style={{
              left: `${50 + 40 * Math.cos((i * 45 * Math.PI) / 180)}%`,
              top: `${50 + 40 * Math.sin((i * 45 * Math.PI) / 180)}%`,
              animationDelay: `${i * 0.2}s`,
            }}
          />
        ))}
      </div>
    </div>
  );
}
