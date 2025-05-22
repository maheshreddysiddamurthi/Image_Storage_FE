'use client';

import { motion } from 'framer-motion';
import {
  CloudArrowUpIcon,
  ShieldCheckIcon,
  ShareIcon,
  PhotoIcon,
  DevicePhoneMobileIcon,
  ClockIcon,
} from '@heroicons/react/24/outline';
import Image from 'next/image';

const features = [
  {
    icon: CloudArrowUpIcon,
    title: 'Easy Upload',
    description: 'Drag and drop your photos and videos. Bulk upload support for quick organization.',
    image: '/logos/landing-page-8.png',
  },
  {
    icon: ShieldCheckIcon,
    title: 'Secure Storage',
    description: 'End-to-end encryption ensures your memories are safe and private.',
    image: '/logos/landing-page-4.png',
  },
  {
    icon: ShareIcon,
    title: 'Simple Sharing',
    description: 'Share albums with friends and family with customizable privacy settings.',
    image: '/logos/landing-page-9.png',
  },
  {
    icon: PhotoIcon,
    title: 'Smart Organization',
    description: 'AI-powered tagging and automatic organization of your media library.',
    image: '/logos/landing-page-10.png',
  },
  {
    icon: DevicePhoneMobileIcon,
    title: 'Mobile Access',
    description: 'Access your photos and videos from any device, anywhere in the world.',
    image: '/logos/landing-page-2.png',
  },
  {
    icon: ClockIcon,
    title: 'Backup & Sync',
    description: 'Automatic backup and sync across all your devices in real-time.',
    image: '/logos/landing-page-3.png',
  },
];

const Features = () => {
  return (
    <section id="features" className="py-24 bg-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 0.3, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="absolute top-1/4 -right-40 w-96 h-96 bg-blue-50 rounded-full blur-3xl"
        />
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 0.3, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, delay: 0.2, ease: "easeOut" }}
          className="absolute bottom-1/4 -left-40 w-96 h-96 bg-blue-50 rounded-full blur-3xl"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-4xl sm:text-5xl font-bold text-gray-900"
          >
            Everything You Need to Store and Share
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="mt-6 text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed"
          >
            Powerful features to help you manage your memories with ease
          </motion.p>
        </div>

        <motion.div 
          className="mt-16 grid grid-cols-1 gap-y-16 lg:gap-x-16 lg:gap-y-24"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 + index * 0.15, ease: "easeOut" }}
              className={`relative grid grid-cols-1 ${index % 2 === 0 ? 'lg:grid-cols-2' : 'lg:grid-cols-2 lg:grid-flow-col-dense'} gap-8 items-center`}
            >
              {/* Feature Content */}
              <div className={`${index % 2 === 0 ? '' : 'lg:col-start-2'} `}>
                <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-blue-600 text-white shadow-lg mb-6">
                   <feature.icon className="h-6 w-6" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {feature.title}
                </h3>
                <p className="text-lg text-gray-700 leading-relaxed">
                  {feature.description}
                </p>
              </div>

              {/* Feature Image */}
              <div className={`${index % 2 === 0 ? '' : 'lg:col-start-1'} rounded-2xl shadow-lg overflow-hidden`}>
                 {feature.image && (
                    <div className="relative w-full" style={{ paddingBottom: '66.66%' }}> {/* Aspect ratio container */}
                      <Image 
                        src={feature.image}
                        alt={feature.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                 )}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Features; 