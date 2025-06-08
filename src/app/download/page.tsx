'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import DownloadCTA from '@/components/DownloadCTA';

export default function DownloadPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <div className="container mx-auto px-4 text-center py-12">
        <Image
          src="/logos/landing-page-7.png"
          alt="Landing Page Image 7"
          width={800} // Adjust width as needed
          height={400} // Adjust height as needed
          className="mx-auto mb-12 rounded-lg shadow-lg"
        />
        <DownloadCTA />
      </div>
      <Footer />
    </main>
  );
} 