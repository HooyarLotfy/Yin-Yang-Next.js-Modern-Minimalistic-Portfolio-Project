'use client';

import { useEffect } from 'react';
import HeroSection from '@/components/sections/HeroSection';
import AboutSection from '@/components/sections/AboutSection';
import PortfolioSection from '@/components/sections/PortfolioSection';
import ContactSection from '@/components/sections/ContactSection';
import Footer from '@/components/sections/Footer';
import CustomCursor from '@/components/ui/CustomCursor';
import Navigation from '@/components/ui/Navigation';
import SmoothScrollProvider from '@/components/ui/SmoothScrollProvider';
import BackgroundParticles from '@/components/ui/BackgroundParticles';

export default function Home() {
  useEffect(() => {
    // Force dark mode only
    document.documentElement.classList.add('dark');
  }, []);

  return (
    <SmoothScrollProvider>
      <BackgroundParticles count={40} color="white" size="w-1 h-1" />
      <main className="relative">
        <CustomCursor />
        <Navigation />
        
        <section id="home">
          <HeroSection />
        </section>
        
        <section id="about">
          <AboutSection />
        </section>
        
        <section id="portfolio">
          <PortfolioSection />
        </section>
        
        <section id="contact">
          <ContactSection />
        </section>
      </main>
      
      {/* Footer */}
      <Footer />
    </SmoothScrollProvider>
  );
}
