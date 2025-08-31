'use client';

import { motion } from 'framer-motion';
import { Heart, Github, LinkedinIcon, MailIcon } from 'lucide-react';
import GlassMorphismCard from '@/components/ui/GlassMorphismCard';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Github, href: 'https://github.com/HooyarLotfy', label: 'GitHub' },
    { icon: LinkedinIcon, href: 'https://www.linkedin.com/in/hooyarlotfy/', label: 'LinkedIn' },
    { icon: MailIcon, href: 'mailto:hooyar@cryptkingclaws.site', label: 'Email' },
  ];

  const footerLinks = [
    {
      title: 'Quick Links',
      links: [
        { name: 'About', href: '#about' },
        { name: 'Portfolio', href: '#portfolio' },
        { name: 'Contact', href: '#contact' },
      ]
    },
    {
      title: 'Services',
      links: [
        { name: 'Web Development', href: '#' },
        { name: 'Mobile Development', href: '#' },
        { name: 'Game Development', href: '#' },
      ]
    },
    {
      title: 'Connect',
      links: [
        { name: 'GitHub', href: 'https://github.com/HooyarLotfy' },
        { name: 'LinkedIn', href: 'https://www.linkedin.com/in/hooyarlotfy/' },
        { name: 'Website', href: 'https://cryptkingclaws.site' },
      ]
    }
  ];

  const scrollToSection = (href: string) => {
    if (href.startsWith('#')) {
      const element = document.getElementById(href.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <footer className="relative bg-gradient-to-b from-yang-100 via-yin-50 to-yang-100 dark:from-yin-900 dark:via-yin-950 dark:to-yin-900 pt-20 pb-8">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-br from-yin-100 to-yang-100 dark:from-yin-800 dark:to-yang-800"></div>
      </div>

    <div className="container mx-auto px-6 relative z-10">
      {/* Main Footer Content */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {/* Brand Section */}
        <motion.div
        className="lg:col-span-1"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        >
        <GlassMorphismCard className="h-full">
          <div className="p-4 h-full flex flex-col">
            <div className="flex items-center mb-3">
            <div className="w-8 h-8 bg-gradient-to-br from-yin-600 to-yang-600 rounded-full flex items-center justify-center mr-2">
              <span className="text-white font-bold text-base">☯</span>
            </div>
            <span className="text-lg font-space-grotesk font-bold text-yin-900 dark:text-yang-100">
              Hooyar Lotfy
            </span>
            </div>
            <p className="text-yin-700 dark:text-yang-300 mb-3  leading-relaxed flex-1 text-sm">
            I create, I build, and I turn ideas into reality—because there&apos;s nothing more satisfying than watching your own work outperform expectations.
            </p>
            <div className="flex space-x-2 mt-auto">
            {socialLinks.map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 bg-yin-100 dark:bg-yang-800 rounded-full flex items-center justify-center text-yin-600 dark:text-yang-400 hover:bg-yin-200 dark:hover:bg-yang-700 hover:text-yin-800 dark:hover:text-yang-200 transition-all duration-300 hover:scale-110"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                data-cursor-hover
              >
                <social.icon className="w-4 h-4" />
              </motion.a>
            ))}
            </div>
          </div>
        </GlassMorphismCard>
        </motion.div>

        {/* Quick Links */}
        {footerLinks.map((column, columnIndex) => (
        <motion.div
          key={columnIndex}
          className="lg:col-span-1"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 + columnIndex * 0.1 }}
        >
          <GlassMorphismCard className="h-full">
            <div className="p-4 h-full">
              <h3 className="text-lg font-space-grotesk font-bold text-yin-900 dark:text-yang-100 mb-4">
                {column.title}
              </h3>
              <ul className="space-y-2">
                {column.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <motion.a
                      href={link.href}
                      onClick={(e) => {
                        if (link.href.startsWith('#')) {
                          e.preventDefault();
                          scrollToSection(link.href);
                        }
                      }}
                      className="text-yin-600 dark:text-yang-400 hover:text-yin-900 dark:hover:text-yang-200 transition-colors"
                      whileHover={{ x: 2 }}
                      data-cursor-hover
                    >
                      {link.name}
                    </motion.a>
                  </li>
                ))}
              </ul>
            </div>
          </GlassMorphismCard>
        </motion.div>
        ))}
      </div>

      {/* Copyright */}
      <motion.div
        className="text-center text-yin-600 dark:text-yang-400 text-sm mt-12"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.5 }}
      >
        <p className="flex flex-wrap items-center justify-center gap-x-1 px-4">
          <span>&copy; {currentYear} Hooyar Lotfy.</span>
          <span>All rights reserved.</span>
          <span>Made with</span>
          <motion.span
            className="mx-1 text-red-500"
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <Heart className="w-4 h-4 fill-current" />
          </motion.span>
          <span>and React.</span>
        </p>
      </motion.div>
      </div>
    </footer>
  );
}
