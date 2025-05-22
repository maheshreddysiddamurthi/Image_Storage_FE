'use client';

import { motion } from 'framer-motion';
import {
  UserPlusIcon,
  CloudArrowUpIcon,
  ShareIcon,
  SparklesIcon,
} from '@heroicons/react/24/outline';

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
    <section id="how-it-works" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold text-gray-900 sm:text-4xl"
          >
            How SnapSync Works
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto"
          >
            Get started in minutes with our simple process
          </motion.p>
        </div>

        <div className="mt-20">
          <div className="relative">
            {/* Connection line */}
            <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gray-200 -translate-y-1/2" />

            <div className="grid grid-cols-1 gap-12 lg:grid-cols-4">
              {steps.map((step, index) => (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative"
                >
                  <div className="flex flex-col items-center">
                    <div className={`relative z-10 p-4 rounded-full ${step.color} shadow-lg`}>
                      <step.icon className="h-8 w-8 text-white" />
                    </div>
                    <div className="mt-6 text-center">
                      <h3 className="text-xl font-semibold text-gray-900">
                        {step.title}
                      </h3>
                      <p className="mt-2 text-gray-600">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-20 text-center"
        >
          <div className="inline-block bg-white rounded-2xl shadow-xl p-8">
            <h3 className="text-2xl font-bold text-gray-900">
              Ready to Get Started?
            </h3>
            <p className="mt-4 text-gray-600">
              Join thousands of users who trust SnapSync with their memories
            </p>
            <div className="mt-8">
              <a
                href="/signup"
                className="inline-block px-8 py-4 bg-blue-600 text-white rounded-full text-lg font-semibold hover:bg-blue-700 transition-colors shadow-lg"
              >
                Create Free Account
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorks; 