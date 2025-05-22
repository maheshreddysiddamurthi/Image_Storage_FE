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
    <section id="testimonials" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold text-gray-900 sm:text-4xl"
          >
            Loved by Users Worldwide
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto"
          >
            See what our users have to say about their experience with SnapSync
          </motion.p>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.author}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="relative bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow"
            >
              {/* Quote icon */}
              <div className="absolute -top-4 left-8">
                <div className="p-2 bg-blue-600 rounded-lg">
                  <svg
                    className="h-6 w-6 text-white"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                </div>
              </div>

              <div className="pt-6">
                <p className="text-gray-600 italic">
                  "{testimonial.content}"
                </p>
                <div className="mt-6 flex items-center">
                  <div className="flex-shrink-0">
                    <div className="relative h-12 w-12 rounded-full overflow-hidden">
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
                    <p className="text-gray-600">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trust badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-20 text-center"
        >
          <p className="text-sm font-semibold text-gray-500 uppercase tracking-wide">
            Trusted by leading companies
          </p>
          <div className="mt-8 flex justify-center items-center space-x-12">
            {/* Add company logos here */}
            <div className="h-8 w-auto opacity-50 grayscale hover:opacity-100 hover:grayscale-0 transition-all">
              <Image
                src="/logos/company1.svg"
                alt="Company 1"
                width={120}
                height={32}
                className="h-8 w-auto"
              />
            </div>
            {/* Add more company logos as needed */}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials; 