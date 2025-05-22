'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

// You'll need to add actual icons for app stores (e.g., Apple App Store, Google Play Store)
// and potentially contact icons (email, phone).

const ContactCTA = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 0.3, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="absolute top-0 left-1/4 w-96 h-96 bg-blue-50 rounded-full blur-3xl"
        />
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 0.3, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, delay: 0.2, ease: "easeOut" }}
          className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-50 rounded-full blur-3xl"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="lg:text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-4xl sm:text-5xl font-bold text-gray-900"
          >
            Stay Connected
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="mt-6 text-xl text-gray-700 max-w-3xl lg:mx-auto leading-relaxed"
          >
            Reach out anytime or download our app to get started.
          </motion.p>
        </div>

        <div className="mt-20 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Contact Info and App Links */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="bg-white rounded-2xl shadow-lg p-8 md:p-12"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Get in Touch</h3>
            <div className="space-y-6">
              <div className="flex items-start">
                {/* Email Icon */}
                <svg xmlns="http://www.w3.org/2000/svg" className="flex-shrink-0 h-7 w-7 text-blue-600 mr-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8m-18 9h18a2 2 0 002-2V7a2 2 0 00-2-2H3a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <div className="ml-4">
                  <p className="text-lg font-semibold text-gray-900">Send an Email</p>
                  <p className="text-lg text-gray-700">hello@snapsync.com</p>
                </div>
              </div>
              <div className="flex items-start">
                {/* Phone Icon */}
                <svg xmlns="http://www.w3.org/2000/svg" className="flex-shrink-0 h-7 w-7 text-blue-600 mr-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2V5zM15 7a2 2 0 012-2h2a2 2 0 012 2v6a2 2 0 01-2 2h-2a2 2 0 01-2-2V7z" />
                </svg>
                <div>
                  <p className="text-lg font-semibold text-gray-900">Give Us a Call</p>
                  <p className="text-lg text-gray-700">+1 (555) 987-6543</p>
                </div>
              </div>
            </div>

            <h3 className="text-2xl font-bold text-gray-900 mt-12 mb-6">Download the App</h3>
            <div className="flex flex-col sm:flex-row gap-6">
              {/* App Store Link */}
              <Link href="#" className="flex items-center justify-center px-6 py-3 border border-gray-300 rounded-lg shadow-sm text-base font-medium text-gray-700 bg-white hover:bg-gray-50 transition-colors duration-200">
                {/* Replace with actual App Store icon */}
                <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
                App Store
              </Link>
              {/* Play Store Link */}
              <Link href="#" className="flex items-center justify-center px-6 py-3 border border-gray-300 rounded-lg shadow-sm text-base font-medium text-gray-700 bg-white hover:bg-gray-50 transition-colors duration-200">
                {/* Replace with actual Play Store icon */}
                <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
                Play Store
              </Link>
            </div>
          </motion.div>

          {/* Image or Illustration */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
            className="flex justify-center items-center w-full lg:max-w-none"
          >
            <div className="w-full max-w-md lg:max-w-none rounded-2xl shadow-lg overflow-hidden relative h-64 sm:h-80 md:h-96">
               <Image 
                src="/logos/landing-page-1.png" 
                alt="People using SnapSync on their phones" 
                fill
                className="object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactCTA; 