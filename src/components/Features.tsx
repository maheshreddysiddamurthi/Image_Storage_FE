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

const features = [
  {
    icon: CloudArrowUpIcon,
    title: 'Easy Upload',
    description: 'Drag and drop your photos and videos. Bulk upload support for quick organization.',
  },
  {
    icon: ShieldCheckIcon,
    title: 'Secure Storage',
    description: 'End-to-end encryption ensures your memories are safe and private.',
  },
  {
    icon: ShareIcon,
    title: 'Simple Sharing',
    description: 'Share albums with friends and family with customizable privacy settings.',
  },
  {
    icon: PhotoIcon,
    title: 'Smart Organization',
    description: 'AI-powered tagging and automatic organization of your media library.',
  },
  {
    icon: DevicePhoneMobileIcon,
    title: 'Mobile Access',
    description: 'Access your photos and videos from any device, anywhere in the world.',
  },
  {
    icon: ClockIcon,
    title: 'Backup & Sync',
    description: 'Automatic backup and sync across all your devices in real-time.',
  },
];

const Features = () => {
  return (
    <section id="features" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold text-gray-900 sm:text-4xl"
          >
            Everything You Need to Store and Share
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto"
          >
            Powerful features to help you manage your memories with ease
          </motion.p>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="relative p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="absolute -top-4 left-6">
                <div className="p-2 bg-blue-600 rounded-lg">
                  <feature.icon className="h-6 w-6 text-white" />
                </div>
              </div>
              <div className="pt-8">
                <h3 className="text-xl font-semibold text-gray-900">
                  {feature.title}
                </h3>
                <p className="mt-4 text-gray-600">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features; 