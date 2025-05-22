'use client';

import { motion } from 'framer-motion';
import {
  UserPlusIcon,
  CloudArrowUpIcon,
  ShareIcon,
  SparklesIcon,
} from '@heroicons/react/24/outline';
import Link from 'next/link';
import Image from 'next/image';

const steps = [
  {
    icon: UserPlusIcon,
    title: 'Create Your Account',
    description: 'Sign up in seconds with your email or social media account.',
    color: 'bg-blue-500',
  },
  {
    icon: CloudArrowUpIcon,
    title: 'Upload Your Media',
    description: 'Drag and drop your photos and videos to start organizing your memories.',
    color: 'bg-green-500',
  },
  {
    icon: ShareIcon,
    title: 'Share with Others',
    description: 'Create albums and share them with friends and family instantly.',
    color: 'bg-purple-500',
  },
  {
    icon: SparklesIcon,
    title: 'Enjoy Smart Features',
    description: 'Let AI help organize and enhance your media collection.',
    color: 'bg-yellow-500',
  },
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-24 bg-gray-50 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 0.3, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="absolute top-1/3 -right-40 w-96 h-96 bg-blue-50 rounded-full blur-3xl"
        />
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 0.3, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, delay: 0.2, ease: "easeOut" }}
          className="absolute bottom-1/3 -left-40 w-96 h-96 bg-blue-50 rounded-full blur-3xl"
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
            How SnapSync Works
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="mt-6 text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed"
          >
            Get started in minutes with our simple process
          </motion.p>
        </div>

        <div className="mt-20">
          <div className="relative">
            {/* Connection line */}
            <motion.div 
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.4 }}
              className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500 via-purple-500 to-yellow-500 -translate-y-1/2"
            />

            <div className="grid grid-cols-1 gap-12 lg:grid-cols-4 pt-12">
              {steps.map((step, index) => (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                  className="relative"
                >
                  <div className="flex flex-col items-center">
                    <motion.div 
                      className={`relative z-10 p-5 rounded-2xl ${step.color} shadow-lg`}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ duration: 0.2 }}
                    >
                      <step.icon className="h-8 w-8 text-white" />
                    </motion.div>
                    <motion.div 
                      className="mt-8 text-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
                      whileHover={{ y: -8 }}
                    >
                      <h3 className="text-xl font-semibold text-gray-900 mb-4">
                        {step.title}
                      </h3>
                      <p className="text-gray-700 leading-relaxed">
                        {step.description}
                      </p>
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* App Screenshot Image */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 2.0, ease: "easeOut" }}
          className="mt-20 flex justify-center"
        >
          <div className="w-full max-w-sm rounded-2xl shadow-lg overflow-hidden relative h-96">
            <Image
              src="/logos/landing-page-5.png"
              alt="SnapSync App Screenshot on Phone"
              fill
              className="object-cover"
            />
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="mt-24 text-center"
        >
          <div className="inline-block bg-white rounded-2xl shadow-xl p-12 max-w-3xl">
            <motion.h3 
              className="text-3xl font-bold text-gray-900"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 1.4 }}
            >
              Ready to Get Started?
            </motion.h3>
            <motion.p 
              className="mt-6 text-xl text-gray-700 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 1.6 }}
            >
              Join thousands of users who trust SnapSync with their memories
            </motion.p>
            <motion.div 
              className="mt-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 1.8 }}
            >
              <Link href="/signup">
                <motion.button
                  whileHover={{ scale: 1.05, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
                  whileTap={{ scale: 0.95 }}
                  className="px-10 py-4 bg-blue-600 text-white rounded-full text-xl font-semibold hover:bg-blue-700 transition-all duration-300 shadow-lg"
                >
                  Create Free Account
                </motion.button>
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorks; 