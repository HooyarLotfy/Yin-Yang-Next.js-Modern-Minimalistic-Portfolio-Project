'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function DragonAnimation() {
  const particlesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (particlesRef.current) {
      // Create subtle floating particles instead of dragon
      const particles = particlesRef.current.querySelectorAll('.particle');
      
      particles.forEach((particle, index) => {
        gsap.to(particle, {
          y: -100,
          x: 50,
          opacity: 0,
          duration: 3 + index * 0.5,
          repeat: -1,
          ease: 'power2.out',
          delay: index * 0.3,
        });
      });

      // Scroll-triggered particle movement
      ScrollTrigger.create({
        trigger: particlesRef.current,
        start: 'top bottom',
        end: 'bottom top',
        onUpdate: (self) => {
          const progress = self.progress;
          particles.forEach((particle) => {
            gsap.to(particle, {
              x: progress * 200 - 100,
              duration: 0.3,
              ease: 'power2.out',
            });
          });
        },
      });
    }

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <div ref={particlesRef} className="absolute inset-0 pointer-events-none overflow-hidden opacity-20">
      {/* Subtle floating particles */}
      {[...Array(6)].map((_, i) => (
        <div
          key={i}
          className="particle absolute w-1 h-1 bg-yin-400 dark:bg-yang-600 rounded-full"
          style={{
            left: `${10 + i * 15}%`,
            top: `${60 + Math.sin(i) * 20}%`,
          }}
        />
      ))}
    </div>
  );
}
