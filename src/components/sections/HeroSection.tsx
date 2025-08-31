'use client';

import { motion } from 'framer-motion';
import { LinkedinIcon, FileTextIcon } from 'lucide-react';
import YinYang from '@/components/animations/YinYang';
import GlassMorphismCard from '@/components/ui/GlassMorphismCard';

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-yang-50 via-yang-100 to-yin-100 dark:from-yin-950 dark:via-yin-900 dark:to-yang-900">
      {/* Background particles */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-yin-400 dark:bg-yang-400 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.3, 1, 0.3],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 z-10">
        <div className="max-w-6xl mx-auto text-center">
          {/* Profile Image & Yin Yang */}
          <motion.div
            className="relative mx-auto mb-8 w-fit"
            style={{ paddingTop: '10rem' }}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
          >
            <div className="relative">
              <YinYang size={300} className="mx-auto" />
              {/* Profile text overlay */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-32 h-32 rounded-full bg-gradient-to-br from-yin-200 to-yang-200 p-1 shadow-lg">
                  <div className="w-full h-full rounded-full bg-gradient-to-br from-yin-700 to-yang-500 flex items-center justify-center text-4xl font-bold">
                    <span
                      className="bg-gradient-to-r from-black via-black to-white bg-clip-text text-transparent drop-shadow-[0_0_8px_white]"
                      style={{
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        textShadow: '0 0 8px #000, 6px 0 70px #000',
                      }}
                    >
                      Hooyar
                    </span>
                    &nbsp;
                    <span
                      className="bg-gradient-to-l from-gray-400 to-white bg-clip-text text-transparent drop-shadow-[0_0_8px_white]"
                      style={{
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        textShadow: '0 0 8px #fff, 0 0 30px #fff',
                      }}
                    >
                      Lotfy
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Name & Title */}
          <motion.div 
            className="mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <h1 className="text-6xl md:text-8xl font-space-grotesk font-bold mb-4 bg-gradient-to-r from-yin-950 to-yang-600 dark:from-yang-50 dark:to-yin-300 bg-clip-text text-transparent">
              Hooyar Lotfy
            </h1>
            <h2 className="text-2xl md:text-3xl font-inter text-yin-700 dark:text-yang-300 mb-6">
              Full-Stack Developer | Web, Mobile & Security
            </h2>
          </motion.div>

          {/* Bio */}
          <motion.div 
            className="mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <GlassMorphismCard className="max-w-2xl mx-auto">
              <p className="text-lg font-inter text-yin-800 dark:text-yang-200 leading-relaxed">
                I&apos;m Hooyar, 17—a developer of web, mobile, and games. I roam the vast tech world 
                not just to learn, but to leave my mark.
              </p>
            </GlassMorphismCard>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            <motion.a
              href="https://drive.google.com/file/d/1mmJIc6zk5Vt26A4VfSx84eN2AtejhpgS/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative overflow-hidden rounded-full bg-yin-950 dark:bg-yang-50 text-yang-50 dark:text-yin-950 px-8 py-4 font-semibold transition-all duration-300 hover:scale-105"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              data-cursor-hover
            >
              <span className="relative z-10 flex items-center gap-2">
                <FileTextIcon className="w-5 h-5" />
                Download CV
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-yin-800 to-yin-600 dark:from-yang-200 dark:to-yang-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
            </motion.a>

            <motion.a
              href="https://www.linkedin.com/in/hooyarlotfy/"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative overflow-hidden rounded-full border-2 border-yin-950 dark:border-yang-50 text-yin-950 dark:text-yang-50 px-8 py-4 font-semibold transition-all duration-300 hover:scale-105"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              data-cursor-hover
            >
              <span className="relative z-10 flex items-center gap-2">
                <LinkedinIcon className="w-5 h-5" />
                LinkedIn
              </span>
              <div className="absolute inset-0 bg-yin-950 dark:bg-yang-50 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              <span className="absolute inset-0 flex items-center justify-center gap-2 text-yang-50 dark:text-yin-950 transform translate-x-full group-hover:translate-x-0 transition-transform duration-300">
                <LinkedinIcon className="w-5 h-5" />
                LinkedIn
              </span>
            </motion.a>
          </motion.div>
        </div>
      </div>

      {/* Gradient overlay */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-yang-100 dark:from-yin-900 to-transparent" />
    </section>
  );
}
