'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { SendIcon, MailIcon, MapPinIcon, LinkedinIcon, GithubIcon } from 'lucide-react';
import GlassMorphismCard from '@/components/ui/GlassMorphismCard';

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export default function ContactSection() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    console.log('Form submitted:', formData);
    setIsSubmitting(false);
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const contactInfo = [
    {
      icon: MailIcon,
      label: 'Email',
      value: 'hooyar@cryptkingclaws.site',
      href: 'mailto:hooyar@cryptkingclaws.site'
    },
    {
      icon: MapPinIcon,
      label: 'Location',
      value: 'Istanbul, Turkey',
      href: '#'
    }
  ];

  const socialLinks = [
    {
      icon: LinkedinIcon,
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/hooyarlotfy/',
      color: 'hover:text-blue-500'
    },
    {
      icon: GithubIcon,
      label: 'GitHub',
      href: 'https://github.com/HooyarLotfy',
      color: 'hover:text-gray-700 dark:hover:text-gray-300'
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-yang-100 via-yin-50 to-yang-100 dark:from-yin-900 dark:via-yin-800 dark:to-yin-900">
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
              Get In Touch
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-yin-500 to-yang-500 mx-auto mb-8" />
            <p className="text-xl font-inter text-yin-700 dark:text-yang-300 max-w-3xl mx-auto leading-relaxed">
              Ideas don&apos;t build themselves. Let&apos;s make yours happen—contact me.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form - Yin Side */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <GlassMorphismCard className="h-full ">
                <div className="p-6 h-full flex flex-col ">
                  <div className="flex flex-col items-center mb-10">
                    <div className="w-6 h-6 rounded-full bg-yin-950 dark:bg-yang-50 flex items-center justify-center mb-4">
                      <div className="w-6 h-6 bg-yang-50 dark:bg-yin-950 rounded-full" />
                    </div>
                    <h3 className="text-2xl font-space-grotesk font-bold text-yin-900 dark:text-yang-100 text-center w-full">
                      Send a Message
                    </h3>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-yin-700 dark:text-yang-300 mb-2">
                          Name
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 rounded-lg bg-yin-50 dark:bg-yang-800 border border-yin-200 dark:border-yang-600 text-yin-900 dark:text-yang-100 focus:ring-2 focus:ring-yin-500 dark:focus:ring-yang-400 focus:border-transparent transition-all duration-300"
                          placeholder="Your name"
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-yin-700 dark:text-yang-300 mb-2">
                          Email
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 rounded-lg bg-yin-50 dark:bg-yang-800 border border-yin-200 dark:border-yang-600 text-yin-900 dark:text-yang-100 focus:ring-2 focus:ring-yin-500 dark:focus:ring-yang-400 focus:border-transparent transition-all duration-300"
                          placeholder="your@email.com"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-yin-700 dark:text-yang-300 mb-2">
                        Subject
                      </label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 rounded-lg bg-yin-50 dark:bg-yang-800 border border-yin-200 dark:border-yang-600 text-yin-900 dark:text-yang-100 focus:ring-2 focus:ring-yin-500 dark:focus:ring-yang-400 focus:border-transparent transition-all duration-300"
                        placeholder="What's this about?"
                      />
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-yin-700 dark:text-yang-300 mb-2">
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        rows={6}
                        className="w-full px-4 py-3 rounded-lg bg-yin-50 dark:bg-yang-800 border border-yin-200 dark:border-yang-600 text-yin-900 dark:text-yang-100 focus:ring-2 focus:ring-yin-500 dark:focus:ring-yang-400 focus:border-transparent transition-all duration-300 resize-none"
                        placeholder="Tell me about your project..."
                      />
                    </div>

                    <motion.button
                      type="submit"
                      disabled={isSubmitting}
                      className={`w-full py-4 rounded-lg flex items-center justify-center text-white font-medium transition-all duration-300 ${
                        isSubmitting
                          ? 'bg-yin-400 dark:bg-yang-600 cursor-not-allowed'
                          : 'bg-gradient-to-r from-yin-800 to-yang-800 dark:from-yang-200 dark:to-yin-300 hover:shadow-lg'
                      }`}
                      whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                      whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                    >
                      {isSubmitting ? (
                        <span className="flex items-center">
                          <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Sending...
                        </span>
                      ) : (
                        <span className="flex items-center">
                          Send Message
                          <SendIcon className="w-4 h-4 ml-2" />
                        </span>
                      )}
                    </motion.button>
                  </form>
                </div>
              </GlassMorphismCard>
            </motion.div>

            {/* Contact Info - Yang Side */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="h-full flex flex-col">
                <GlassMorphismCard className="mb-8">
                  <div className="p-2">
                    <div className="p-6 h-full flex flex-col">
                      <div className="w-12 h-12 rounded-full bg-yang-50 dark:bg-yin-950 flex items-center justify-center mb-4">
                        <div className="w-6 h-6 bg-yin-950 dark:bg-yang-50 rounded-full" />
                      </div>
                      <h3 className="text-2xl font-space-grotesk font-bold text-yin-900 dark:text-yang-100 text-center w-full">
                        Connect With Me
                      </h3>
                    </div>

                    <div className="space-y-6 mt-4">
                      {contactInfo.map((item, index) => (
                        <motion.a
                          key={index}
                          href={item.href}
                          target={item.label === 'Email' ? '_self' : '_blank'}
                          rel="noopener noreferrer"
                          className="flex items-start p-4 rounded-lg bg-yin-50 dark:bg-yang-900 hover:bg-yin-100 dark:hover:bg-yang-800 transition-colors"
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-yin-200 to-yang-300 dark:from-yin-700 dark:to-yang-600 flex items-center justify-center mr-4 flex-shrink-0">
                            <item.icon className="w-5 h-5 text-yin-600 dark:text-yang-300" />
                          </div>
                          <div>
                            <h4 className="text-sm font-medium text-yin-500 dark:text-yang-500 mb-1">
                              {item.label}
                            </h4>
                            <p className="text-yin-900 dark:text-yang-100 font-medium">
                              {item.value}
                            </p>
                          </div>
                        </motion.a>
                      ))}

                      <div className="pt-6 mt-6 border-t border-yin-200 dark:border-yang-700">
                        <h4 className="text-sm font-medium text-yin-500 dark:text-yang-500 mb-4 text-center">
                          Find me on social media
                        </h4>
                        <div className="flex justify-center space-x-4">
                          {socialLinks.map((social, index) => (
                            <motion.a
                              key={index}
                              href={social.href}
                              target="_blank"
                              rel="noopener noreferrer"
                              className={`w-12 h-12 rounded-full bg-yin-50 dark:bg-yang-800 flex items-center justify-center text-yin-600 dark:text-yang-400 ${social.color} transition-all duration-300`}
                              whileHover={{ scale: 1.1 }}
                              whileTap={{ scale: 0.95 }}
                              data-cursor-hover
                            >
                              <social.icon className="w-5 h-5" />
                            </motion.a>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </GlassMorphismCard>

                <GlassMorphismCard className="flex-1">
                  <div className="p-6 h-full flex flex-col">
                    <h3 className="text-xl font-space-grotesk font-bold text-yin-900 dark:text-yang-100 mb-4">
                      My Website
                    </h3>
                    <a
                      href="https://cryptkingclaws.site"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-yin-700 dark:text-yang-300 hover:text-yin-900 dark:hover:text-yang-100 mb-2 transition-colors inline-block"
                    >
                      cryptkingclaws.site
                    </a>
                    <p className="text-yin-600 dark:text-yang-400 text-sm mb-6 flex-1">
                      Visit my personal website for more information about my work, projects, and background.
                    </p>
                    <a
                      href="https://drive.google.com/file/d/1mmJIc6zk5Vt26A4VfSx84eN2AtejhpgS/view?usp=sharing"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-auto inline-flex items-center justify-center py-3  rounded-lg bg-gradient-to-r from-yin-800 to-yang-800 dark:from-yang-200 dark:to-yin-300 text-white font-medium hover:shadow-lg transition-all duration-300 text-center self-start"
                    >
                      Download CV
                    </a>
                  </div>
                </GlassMorphismCard>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
