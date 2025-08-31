'use client';

import { motion } from 'framer-motion';
import { CodeIcon, PaletteIcon, DatabaseIcon, ServerIcon, SmartphoneIcon, GlobeIcon } from 'lucide-react';
import GlassMorphismCard from '@/components/ui/GlassMorphismCard';
import Image from 'next/image';

export default function AboutSection() {
  const skills = [
    {
      category: 'Frontend',
      icon: CodeIcon,
      skills: ['React', 'Next.js', 'Laravel Blade'],
      color: 'from-blue-500 to-cyan-500',
    },
    {
      category: 'Design',
      icon: PaletteIcon,
      skills: ['Figma', 'Adobe After Effects', 'Video Editing'],
      color: 'from-purple-500 to-pink-500',
    },
    {
      category: 'Backend',
      icon: ServerIcon,
      skills: ['Laravel (PHP)', 'Node.js'],
      color: 'from-green-500 to-emerald-500',
    },
    {
      category: 'Database',
      icon: DatabaseIcon,
      skills: ['MySQL', 'Firebase'],
      color: 'from-orange-500 to-red-500',
    },
    {
      category: 'Mobile',
      icon: SmartphoneIcon,
      skills: ['React Native'],
      color: 'from-indigo-500 to-purple-500',
    },
    {
      category: 'Game Development',
      icon: GlobeIcon,
      skills: ['Unreal Engine', 'C++'],
      color: 'from-gray-500 to-slate-500',
    },
    {
      category: 'DevOps / Security',
      icon: GlobeIcon,
      skills: ['SSH', 'Server Security'],
      color: 'from-red-500 to-amber-500',
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-yang-100 via-yin-50 to-yang-100 dark:from-yin-900 dark:via-yin-800 dark:to-yin-900">
      <div className="container mx-auto px-6">
        <motion.div
          className="max-w-6xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* Section Header */}
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-5xl md:text-6xl font-space-grotesk font-bold mb-6 bg-gradient-to-r from-yin-950 to-yang-600 dark:from-yang-50 dark:to-yin-300 bg-clip-text text-transparent">
              About Me
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-yin-500 to-yang-500 mx-auto mb-8" />
            <p className="text-xl font-inter text-yin-700 dark:text-yang-300 max-w-3xl mx-auto leading-relaxed">
              I don&apos;t just explore the tech world; I shape it. My creations aren&apos;t just projects—they&apos;re
              proof that vision and skill can bend reality. I&apos;m here to leave my mark in the digital world.
            </p>
          </motion.div>

          {/* Bento Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {/* Profile Picture Card */}
            <motion.div
              className="lg:row-span-2"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              <GlassMorphismCard className="h-full">
                <div className="p-8 flex flex-col items-center justify-center text-center h-full">
                  <div className="relative mb-6">
                    <div className="w-40 h-40 bg-gradient-to-br from-yin-200 to-yang-300 dark:from-yin-700 dark:to-yang-600 rounded-full p-1 shadow-lg">
                      <div className="w-full h-full rounded-full overflow-hidden bg-gradient-to-br from-yin-100 to-yang-200 dark:from-yin-800 dark:to-yang-700">
                        {/* Placeholder avatar with subtle pattern */}
                        <div className="w-full h-full bg-gradient-to-br from-yin-300 to-yang-400 dark:from-yin-600 dark:to-yang-700 opacity-80 flex items-center justify-center">
                          <Image src="/assets/image/avatar.png" alt="Hooyar Lotfy" width={160} height={160} className="w-full h-full object-cover" />
                        </div>
                      </div>
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center">
                      <div className="w-3 h-3 bg-white rounded-full"></div>
                    </div>
                  </div>
                  <h2 className="text-2xl md:text-3xl font-space-grotesk font-bold text-yin-900 dark:text-yang-100 mb-3">
                    Hooyar Lotfy
                  </h2>
                  <h3 className="text-lg md:text-xl text-yin-700 dark:text-yang-300 mb-2">
                    Full-Stack Developer | Web, Mobile & Security
                  </h3>
                  <p className="text-yin-500 dark:text-yang-500 mt-2 font-medium">
                    Open to opportunities
                  </p>
                </div>
              </GlassMorphismCard>
            </motion.div>

            {/* Large Bio Card */}
            <motion.div
              className="lg:col-span-2 lg:row-span-2"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <GlassMorphismCard className="h-full">
                <div className="p-8">
                  <h3 className="text-2xl font-space-grotesk font-bold mb-6 text-yin-900 dark:text-yang-100">
                    My Journey
                  </h3>
                  <div className="space-y-4 text-yin-700 dark:text-yang-300">
                    <p>
                      I&apos;m Hooyar Lotfy, 17—a developer of web, mobile, and games. I don&apos;t just learn tech; 
                      I shape it, turning ideas into real apps, websites, and interactive worlds that actually work.
                    </p>
                    <p>
                      I love creating, building, and solving problems my way. Watching hard work turn into results?
                      That&apos;s the only reward I need. My approach is simple: I see the problem, break it down, and make 
                      it happen—no excuses, no fluff.
                    </p>
                    <p>
                      Looking forward, I&apos;m here to keep pushing boundaries, building projects that matter,
                      and leaving my mark in the digital world.
                    </p>
                  </div>
                  
                  {/* Experience Stats */}
                  <div className="grid grid-cols-3 gap-4 mt-8 pt-8 border-t border-yin-200 dark:border-yang-700">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-yin-900 dark:text-yang-100">3+</div>
                      <div className="text-sm text-yin-600 dark:text-yang-400">Years</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-yin-900 dark:text-yang-100">10+</div>
                      <div className="text-sm text-yin-600 dark:text-yang-400">Projects</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-yin-900 dark:text-yang-100">5+</div>
                      <div className="text-sm text-yin-600 dark:text-yang-400">Clients</div>
                    </div>
                  </div>
                </div>
              </GlassMorphismCard>
            </motion.div>

            {/* Skills Cards */}
            {skills.map((skill, index) => {
              const Icon = skill.icon;
              return (
                <motion.div
                  key={skill.category}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                  className="animate-bento-slide"
                >
                  <GlassMorphismCard className="h-full group">
                    <div className="p-6">
                      <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${skill.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-xl font-space-grotesk font-bold mb-3 text-yin-900 dark:text-yang-100">
                        {skill.category}
                      </h3>
                      <div className="space-y-2">
                        <div className="flex flex-wrap" >
                          {skill.skills.map((item) => (
                            <motion.div
                              key={item}
                              className="text-sm text-yin-600 dark:text-yang-400 bg-yin-100 dark:bg-yang-800 px-1 py-1 rounded-full inline-block mr-2"
                              whileHover={{ scale: 1.04 }}
                              transition={{ duration: 0.2 }}
                            >
                              {item}
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </GlassMorphismCard>
                </motion.div>
              );
            })}
          </div>

          {/* Education and Certifications */}
          <motion.div
            className="mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <GlassMorphismCard>
              <div className="p-3">
                <h3 className="text-2xl font-space-grotesk font-bold mb-6 text-yin-900 dark:text-yang-100">
                  Recognition & Experience
                </h3>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-yin-400 to-yang-400 flex items-center justify-center mr-4 flex-shrink-0">
                      <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l-3 9 9-5-9-5 3-5" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-yin-900 dark:text-yang-100">Full-Stack Recognition</h4>
                      <p className="text-yin-600 dark:text-yang-400">Professional Development</p>
                      <p className="mt-2 text-yin-700 dark:text-yang-300">
                        Recognized as a full-stack developer, combining frontend, backend, and mobile development skills to deliver complete solutions.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-yin-400 to-yang-400 flex items-center justify-center mr-4 flex-shrink-0">
                      <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-yin-900 dark:text-yang-100">Leadership Experience</h4>
                      <p className="text-yin-600 dark:text-yang-400">Google Partner Company</p>
                      <p className="mt-2 text-yin-700 dark:text-yang-300">
                        Led fellow interns while still an intern at a Google Partner company, demonstrating leadership skills and technical expertise.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </GlassMorphismCard>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
