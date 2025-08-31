'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLinkIcon, GithubIcon, XIcon } from 'lucide-react';
import Image from 'next/image';
import GlassMorphismCard from '@/components/ui/GlassMorphismCard';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  liveUrl: string;
  githubUrl: string;
  category: string;
  details: {
    overview: string;
    challenges: string[];
    solutions: string[];
    results: string;
  };
  videoEmbed?: string;
  videoSrc?: string; // for actual JSX iframe

}



export default function PortfolioSection() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const modalContentRef = useRef<HTMLDivElement>(null);
  
  // Effect to lock body scroll when modal is open
  useEffect(() => {
    // Only run this effect on the client side
    if (typeof window !== 'undefined') {
      const originalStyle = window.getComputedStyle(document.body).overflow;
      
      if (selectedProject) {
        // Lock the body scroll
        document.body.style.overflow = 'hidden';
      } else {
        // Restore normal scrolling when modal closes
        document.body.style.overflow = originalStyle;
      }
      
      // Cleanup function to ensure scroll is restored when component unmounts
      return () => {
        document.body.style.overflow = originalStyle;
      };
    }
  }, [selectedProject]);
  const [filter, setFilter] = useState('All');

const projects: Project[] = [
    {
        id: 1,
        title: 'GeelyIran  autoshop project',
        description: 'A fast, responsive website showcasing Geely cars, with smooth animations and test drive booking',
        image: '/assets/image/geelyiran.png',
        technologies: ['jQuery', 'GSAP', 'Lenis.js', 'EmailJS', 'CSS', 'JavaScript'],
        liveUrl: 'https://geelyiran.tech',
        githubUrl: '',
        category: 'Web Development',
        videoSrc: 'https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7332024065164996609?compact=1',
        details: {
            overview: 'GeelyIran.tech is a sleek, custom-built platform focused on Geely cars. It provides a smooth, device-optimized experience with engaging animations and a simple test drive booking system.',
            challenges: [
                'Integrating high-performance animations without slowing the site',
                'Ensuring full responsiveness',
                'Implementing an intuitive booking workflow'
            ],
            solutions: [
                'Leveraged GSAP and Lenis.js for smooth, performant animations',
                'Rigorously tested across devices',
                'Implemented EmailJS for easy client contact'
            ],
            results: 'A professional, interactive website optimized for speed, functionality, and user experience.'
        }
    },
    {
        id: 2,
        title: 'Soulverse',
        description: 'A fast, clean, and modern blog platform designed for developers and writers',
        image: '/assets/image/soulverse.png',
        technologies: ['Laravel 11', 'PHP 8.3', 'Blade Components', 'Tailwind CSS', 'Markdown'],
        liveUrl: '',
        githubUrl: 'https://github.com/username/soulverse',
        category: 'Full Stack',
        videoEmbed: '<iframe src="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7350218508133109760?compact=1" height="399" width="504" frameborder="0" allowfullscreen="" title="Embedded post"></iframe>',
        details: {
            overview: 'Soulverse provides a minimal, scalable blogging system with SEO-optimized URLs, dynamic cover images, dark mode, and markdown-powered posts. Clean code and extensibility make it easy to maintain and grow.',
            challenges: [
                'Maintaining a minimal yet functional UI',
                'Implementing dark mode and markdown support efficiently',
                'Following SEO best practices'
            ],
            solutions: [
                'Used Blade components for templating',
                'Tailwind CSS for rapid styling',
                'Structured the codebase for scalability'
            ],
            results: 'A high-performing, user-friendly platform optimized for content creation, SEO, and scalability.'
        }
    },
    {
        id: 3,
        title: 'Arteng Yapi & Healthcare',
        description: 'Designed and structured a professional website for a construction & healthcare client',
        image: '/assets/image/arteng.png',
        technologies: ['React', 'CSS', 'JavaScript', 'Figma'],
        liveUrl: 'https://usphonecases.com/',
        githubUrl: '',
        category: 'Client Project',
        details: {
            overview: 'A clean, structured website presenting services for Arteng Yapi & Healthcare with a professional, user-friendly interface.',
            challenges: [
                'Organizing multiple business sections',
                'Creating a cohesive visual hierarchy',
                'Ensuring responsive design across devices'
            ],
            solutions: [
                'Designed and implemented structured layouts',
                'Optimized UI/UX for readability and clarity',
                'Ensured mobile responsiveness'
            ],
            results: 'Enhanced user experience and visual consistency, making the client\'s services more accessible and professional.'
        }
    },
    {
        id: 4,
        title: 'Poylin',
        description: 'Resolved critical issues in a large e-commerce website, improving SEO and stability',
        image: '/assets/image/poylin.png',
        technologies: ['React', 'Node.js', 'MySQL', 'SEO Tools'],
        liveUrl: 'https://poylin.com.tr/',
        githubUrl: '',
        category: 'SEO Optimization',
        details: {
            overview: 'Poylin is a Turkish e-commerce platform. I addressed major SEO and technical issues that could have affected site rankings and stability.',
            challenges: [
                'Misconfigured SEO settings',
                'Multiple technical bugs',
                'Potential impact on search engine traffic'
            ],
            solutions: [
                'Diagnosed and fixed SEO and site configuration',
                'Tested thoroughly to ensure stability',
                'Resolved critical errors'
            ],
            results: 'The website\'s SEO and functionality were restored, preventing ranking and traffic loss while ensuring smooth operation.'
        }
    }
];

  const categories = ['All', ...Array.from(new Set(projects.map(p => p.category)))];
  const filteredProjects = filter === 'All' ? projects : projects.filter(p => p.category === filter);

  return (
    <section id="portfolio" className="py-20 bg-gradient-to-b from-yang-100 via-yin-50 to-yang-100 dark:from-yin-900 dark:via-yin-800 dark:to-yin-900">
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
              Portfolio
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-yin-500 to-yang-500 mx-auto mb-8" />
            <p className="text-xl font-inter text-yin-700 dark:text-yang-300 max-w-3xl mx-auto leading-relaxed">
              A collection of my works across web development, design, and optimization projects.
              Each project demonstrates my approach to solving real-world problems with code.
            </p>
          </motion.div>

          {/* Filter Tabs */}
          <motion.div
            className="flex flex-wrap justify-center gap-4 mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setFilter(category)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  filter === category
                    ? 'bg-yin-950 dark:bg-yang-50 text-yang-50 dark:text-yin-950'
                    : 'bg-yin-100 dark:bg-yang-800 text-yin-700 dark:text-yang-300 hover:bg-yin-200 dark:hover:bg-yang-700'
                }`}
              >
                {category}
              </button>
            ))}
          </motion.div>

          {/* Projects Grid */}
          <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                whileHover={{ y: -5 }}
              >
                <GlassMorphismCard className="h-full transition-all duration-300 hover:shadow-lg">
                  <div
                    className="w-full aspect-[5/3] bg-gradient-to-br from-yin-100 to-yang-200 dark:from-yin-800 dark:to-yang-900 overflow-hidden cursor-pointer"
                    onClick={() => setSelectedProject(project)}
                  >
                    {project.image ? (
                      <div className="w-full h-full relative overflow-hidden rounded-md">
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>
                        <Image
                          src={project.image}
                          alt={project.title}
                          fill
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                          className="object-cover object-center transform transition-transform duration-700 hover:scale-105 "
                        />
                      </div>
                    ) : (
                      <div className="w-full h-full flex items-center justify-center">
                        <span className="text-yin-400 dark:text-yang-600">No Image</span>
                      </div>
                    )}
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-space-grotesk font-bold text-yin-900 dark:text-yang-100 mb-1">
                      {project.title}
                    </h3>
                    <h4 className="text-xs  py-1 bg-yin-100 dark:bg-yang-800 text-yin-600 dark:text-yang-400 rounded-full ">
                      {project.category}
                    </h4>
                    <p className="text-yin-600 dark:text-yang-400 text-sm mb-4 line-clamp-2 mt-1">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.slice(0, 3).map((tech) => (
                        <span
                          key={tech}
                          className="text-xs  py-1 rounded-full bg-yin-100 dark:bg-yang-800 text-yin-700 dark:text-yang-300"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 3 && (
                        <span className="text-xs px-2 py-1 rounded-full bg-yin-100 dark:bg-yang-800 text-yin-700 dark:text-yang-300">
                          +{project.technologies.length - 3}
                        </span>
                      )}
                    </div>
                    <div className="flex justify-between items-center">
                      <motion.button
                        onClick={() => setSelectedProject(project)}
                        className="text-sm font-medium text-yin-800 dark:text-yang-200 hover:text-yin-600 dark:hover:text-yang-400 transition-colors"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        View Details
                      </motion.button>
                      <div className="flex space-x-2">
                        {project.liveUrl && (
                          <motion.a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-8 h-8 rounded-full bg-yin-100 dark:bg-yang-800 flex items-center justify-center text-yin-600 dark:text-yang-400 hover:bg-yin-200 dark:hover:bg-yang-700 transition-colors"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            <ExternalLinkIcon className="w-4 h-4" />
                          </motion.a>
                        )}
                        {project.githubUrl && (
                          <motion.a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-8 h-8 rounded-full bg-yin-100 dark:bg-yang-800 flex items-center justify-center text-yin-600 dark:text-yang-400 hover:bg-yin-200 dark:hover:bg-yang-700 transition-colors"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            <GithubIcon className="w-4 h-4" />
                          </motion.a>
                        )}
                      </div>
                    </div>
                  </div>
                </GlassMorphismCard>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Project Details Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="fixed inset-0 bg-black/70 backdrop-blur-sm z-[9998] flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              className="w-full max-w-6xl h-[90vh] bg-yang-50 dark:bg-yin-950 rounded-2xl shadow-xl mx-4 my-8 overflow-hidden flex flex-col"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative h-[30vh] md:h-[40vh] bg-gradient-to-r from-yin-200 to-yang-300 dark:from-yin-700 dark:to-yang-800 overflow-hidden flex-shrink-0 shadow-md border border-gray-900 dark:border-gray-900">
                {selectedProject.image && (
                  <div className="w-full h-full relative">
                    <Image
                      src={selectedProject.image}
                      alt={selectedProject.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover object-center"
                    />
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute inset-0 flex items-end p-6">
                  <div>
                    <h2 className="text-2xl md:text-3xl font-space-grotesk font-bold text-white mb-2">
                      {selectedProject.title}
                    </h2>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.technologies.slice(0, 4).map((tech) => (
                        <span
                          key={tech}
                          className="text-xs px-2 py-1 rounded-full bg-white/20 text-white backdrop-blur-sm"
                        >
                          {tech}
                        </span>
                      ))}
                      {selectedProject.technologies.length > 4 && (
                        <span className="text-xs px-2 py-1 rounded-full bg-white/20 text-white backdrop-blur-sm">
                          +{selectedProject.technologies.length - 4}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 w-10 h-10 rounded-full bg-black/50 text-white flex items-center justify-center hover:bg-black/70 transition-colors backdrop-blur-sm"
                >
                  <XIcon className="w-5 h-5" />
                </button>
              </div>
              <div 
                 ref={modalContentRef}
                 className="overflow-y-auto p-6 max-h-[calc(90vh-40vh)] scrollable-content modal-content-container"
                 style={{ 
                   WebkitOverflowScrolling: 'touch',
                   overscrollBehavior: 'contain',
                   height: 'calc(100% - 40vh)',
                 }}
                 onWheel={(e) => e.stopPropagation()}
                 onScroll={(e) => e.stopPropagation()}
                 onTouchStart={(e) => e.stopPropagation()}
              >
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div className="md:col-span-2 space-y-6">
                    <div>
                      <h3 className="text-lg font-space-grotesk font-bold text-yin-900 dark:text-yang-100 mb-3">
                        Overview
                      </h3>
                      <p className="text-yin-700 dark:text-yang-300 leading-relaxed">
                        {selectedProject.details.overview}
                      </p>
                    </div>
                    
                    {(selectedProject.videoEmbed || selectedProject.videoSrc) && (
                      <div>
                        <h3 className="text-lg font-space-grotesk font-bold text-yin-900 dark:text-yang-100 mb-3">
                          Project Demo
                        </h3>
                        <div className="iframe-container">
                          {selectedProject.videoEmbed ? (
                            <div dangerouslySetInnerHTML={{ __html: selectedProject.videoEmbed }} />
                          ) : selectedProject.videoSrc && (
                            <iframe 
                              src={selectedProject.videoSrc} 
                              height="399" 
                              width="100%" 
                              frameBorder="0" 
                              allowFullScreen={true}
                              title={`${selectedProject.title} Demo`}
                            />
                          )}
                        </div>
                      </div>
                    )}
                    
                    <div>
                      <h3 className="text-lg font-space-grotesk font-bold text-yin-900 dark:text-yang-100 mb-3">
                        Results & Impact
                      </h3>
                      <p className="text-yin-700 dark:text-yang-300 leading-relaxed">
                        {selectedProject.details.results}
                      </p>
                    </div>
                  </div>
                  
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg font-space-grotesk font-bold text-yin-900 dark:text-yang-100 mb-3">
                        Challenges
                      </h3>
                      <ul className="space-y-2">
                        {selectedProject.details.challenges.map((challenge, i) => (
                          <li key={i} className="text-yin-700 dark:text-yang-300 flex items-start">
                            <span className="w-1.5 h-1.5 rounded-full bg-yin-400 dark:bg-yang-500 mt-2 mr-2 flex-shrink-0"></span>
                            <span>{challenge}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-space-grotesk font-bold text-yin-900 dark:text-yang-100 mb-3">
                        Solutions
                      </h3>
                      <ul className="space-y-2">
                        {selectedProject.details.solutions.map((solution, i) => (
                          <li key={i} className="text-yin-700 dark:text-yang-300 flex items-start">
                            <span className="w-1.5 h-1.5 rounded-full bg-yin-400 dark:bg-yang-500 mt-2 mr-2 flex-shrink-0"></span>
                            <span>{solution}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-space-grotesk font-bold text-yin-900 dark:text-yang-100 mb-3">
                        Links
                      </h3>
                      <div className="space-y-3">
                        {selectedProject.liveUrl && (
                          <a
                            href={selectedProject.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center text-yin-700 dark:text-yang-300 hover:text-yin-900 dark:hover:text-yang-100 transition-colors group"
                          >
                            <ExternalLinkIcon className="w-5 h-5 mr-2 text-yin-500 dark:text-yang-500 group-hover:text-yin-700 dark:group-hover:text-yang-300 transition-colors" />
                            <span className="border-b border-dashed border-yin-300 dark:border-yang-700 group-hover:border-yin-500 dark:group-hover:border-yang-500 transition-colors">
                              Live Website
                            </span>
                          </a>
                        )}
                        {selectedProject.githubUrl && (
                          <a
                            href={selectedProject.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center text-yin-700 dark:text-yang-300 hover:text-yin-900 dark:hover:text-yang-100 transition-colors group"
                          >
                            <GithubIcon className="w-5 h-5 mr-2 text-yin-500 dark:text-yang-500 group-hover:text-yin-700 dark:group-hover:text-yang-300 transition-colors" />
                            <span className="border-b border-dashed border-yin-300 dark:border-yang-700 group-hover:border-yin-500 dark:group-hover:border-yang-500 transition-colors">
                              GitHub Repository
                            </span>
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
