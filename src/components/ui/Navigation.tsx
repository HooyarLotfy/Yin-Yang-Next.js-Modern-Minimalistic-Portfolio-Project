'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MenuIcon, XIcon, HomeIcon, UserIcon, BriefcaseIcon, MailIcon } from 'lucide-react';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navItems = [
    { id: 'home', label: 'Home', icon: HomeIcon },
    { id: 'about', label: 'About', icon: UserIcon },
    { id: 'portfolio', label: 'Portfolio', icon: BriefcaseIcon },
    { id: 'contact', label: 'Contact', icon: MailIcon },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'portfolio', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <>
      {/* Desktop Navigation */}
      <nav className="hidden lg:block fixed top-8 left-1/2 transform -translate-x-1/2 z-50">
        <motion.div
          className="backdrop-blur-md bg-white/10 dark:bg-black/10 border border-white/20 dark:border-black/20 rounded-full px-6 py-3 shadow-glassmorphism"
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <div className="flex items-center space-x-8">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`relative flex items-center space-x-2 px-4 py-2 rounded-full transition-all duration-300 ${
                    activeSection === item.id
                      ? 'text-yin-950 dark:text-yang-50'
                      : 'text-yin-600 dark:text-yang-400 hover:text-yin-800 dark:hover:text-yang-200'
                  }`}
                  data-cursor-hover
                >
                  {activeSection === item.id && (
                    <motion.div
                      className="absolute inset-0 bg-yang-50 dark:bg-yin-950 rounded-full"
                      layoutId="activeSection"
                      transition={{ duration: 0.3 }}
                    />
                  )}
                  <Icon className="w-4 h-4 relative z-10" />
                  <span className="text-sm font-medium relative z-10">{item.label}</span>
                </button>
              );
            })}
          </div>
        </motion.div>
      </nav>

      {/* Mobile Navigation */}
      <div className="lg:hidden">
        {/* Mobile Menu Button */}
        <motion.button
          className="fixed top-4 right-4 z-50 w-14 h-14 backdrop-blur-md bg-black/20 border border-black/30 rounded-full flex items-center justify-center shadow-glassmorphism"
          onClick={() => setIsOpen(!isOpen)}
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.3 }}
          data-cursor-hover
        >
          <AnimatePresence mode="wait">
            {isOpen ? (
              <motion.div
                key="close"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <XIcon className="w-7 h-7 text-yin-700 dark:text-yang-300" />
              </motion.div>
            ) : (
              <motion.div
                key="menu"
                initial={{ rotate: 90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <MenuIcon className="w-7 h-7 text-yin-700 dark:text-yang-300" />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.button>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              className="fixed inset-0 z-40 backdrop-blur-md bg-black/60 overflow-x-hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
            >
              <motion.div
                className="absolute top-20 left-4 right-4 max-w-full backdrop-blur-md bg-black/95 border border-black/30 rounded-3xl shadow-glassmorphism overflow-hidden"
                initial={{ scale: 0.8, opacity: 0, y: -20 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.8, opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                onClick={(e) => e.stopPropagation()}
              >
                <div className="p-8">
                  <div className="text-center mb-8">
                    <h3 className="text-xl font-space-grotesk font-semibold text-yang-100 mb-2">
                      Navigation
                    </h3>
                    <div className="w-12 h-0.5 bg-gradient-to-r from-yin-600 to-yang-600 mx-auto"></div>
                  </div>
                  
                  <div className="space-y-3">
                    {navItems.map((item, index) => {
                      const Icon = item.icon;
                      return (
                        <motion.button
                          key={item.id}
                          onClick={() => scrollToSection(item.id)}
                          className={`w-full flex items-center space-x-4 px-6 py-4 rounded-xl transition-all duration-300 ${
                            activeSection === item.id
                              ? 'bg-yang-800 text-yang-100 shadow-md'
                              : 'text-yang-400 hover:bg-yang-900 hover:text-yang-200'
                          }`}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.3, delay: index * 0.1 }}
                          data-cursor-hover
                        >
                          <Icon className="w-6 h-6 flex-shrink-0" />
                          <span className="font-medium text-lg">{item.label}</span>
                          {activeSection === item.id && (
                            <motion.div
                              className="w-2 h-2 bg-yin-600 dark:bg-yang-400 rounded-full ml-auto"
                              initial={{ scale: 0 }}
                              animate={{ scale: 1 }}
                              transition={{ duration: 0.2 }}
                            />
                          )}
                        </motion.button>
                      );
                    })}
                  </div>
                  
                  <div className="mt-8 pt-6 border-t border-yin-200 dark:border-yang-700">
                    <p className="text-center text-sm text-yin-500 dark:text-yang-500">
                      Scroll or tap to navigate
                    </p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
}
