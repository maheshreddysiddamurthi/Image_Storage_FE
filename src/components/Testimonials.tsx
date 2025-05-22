'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const testimonials = [
  {
    content: "SnapSync has completely transformed how I organize and share my family photos. The interface is intuitive and the sharing features are exactly what I needed.",
    author: "Sarah Johnson",
    role: "Photography Enthusiast",
    avatar: "/avatars/sarah.jpg", // You'll need to add these images
  },
  {
    content: "As a professional photographer, I need a reliable platform to store and share my work. SnapSync's security features and organization tools are unmatched.",
    author: "Michael Chen",
    role: "Professional Photographer",
    avatar: "/avatars/michael.jpg",
  },
  {
    content: "The AI-powered organization features save me hours of work. I can find any photo instantly, and sharing albums with clients is a breeze.",
    author: "Emily Rodriguez",
    role: "Digital Artist",
    avatar: "/avatars/emily.jpg",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-24 bg-white relative overflow-hidden">
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
            Loved by Users Worldwide
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="mt-6 text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed"
          >
            See what our users have to say about their experience with SnapSync
          </motion.p>
        </div>

        <motion.div 
          className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.author}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
              whileHover={{ y: -8, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
              className="relative bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-all duration-300"
            >
              {/* Quote icon */}
              <motion.div 
                className="absolute -top-4 left-8"
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ duration: 0.2 }}
              >
                <div className="p-3 bg-blue-600 rounded-xl shadow-lg">
                  <svg
                    className="h-6 w-6 text-white"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                </div>
              </motion.div>

              <div className="pt-8">
                <motion.p 
                  className="text-gray-600 italic text-lg leading-relaxed"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                >
                  &quot;{testimonial.content}&quot;
                </motion.p>
                <motion.div 
                  className="mt-8 flex items-center"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 1 + index * 0.1 }}
                >
                  <div className="flex-shrink-0">
                    <div className="relative h-14 w-14 rounded-full overflow-hidden shadow-lg">
                      <Image
                        src={testimonial.avatar}
                        alt={testimonial.author}
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-semibold text-gray-900">
                      {testimonial.author}
                    </h4>
                    <p className="text-gray-700">{testimonial.role}</p>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Trust badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="mt-20 text-center"
        >
          <motion.p 
            className="text-sm font-semibold text-gray-600 uppercase tracking-wide"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 1.4 }}
          >
            Trusted by leading companies
          </motion.p>
          <motion.div 
            className="mt-8 flex justify-center items-center space-x-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 1.6 }}
          >
            {/* Add company logos here */}
            <motion.div 
              className="h-8 w-auto opacity-50 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-300"
              whileHover={{ scale: 1.1 }}
            >
              <Image
                src="/logos/company1.svg"
                alt="Company 1"
                width={120}
                height={32}
                className="h-8 w-auto"
              />
            </motion.div>
            {/* Add more company logos as needed */}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials; 