'use client';

import Link from 'next/link';

export default function Home() {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 w-full h-full bg-[url('/welcome.jpg')] bg-cover bg-center z-0" />
      {/* Gradient overlay */}
      <div className="absolute inset-0 w-full h-full bg-gradient-to-br" />
      {/* Content */}
      <div className="relative z-20 flex items-center justify-center w-full h-full">
        <div className="bg-white bg-opacity-50 rounded-3xl shadow-5xl p-10 max-w-lg w-full flex flex-col items-center">
          <h1 className="text-4xl font-extrabold text-gray-900 mb-4 text-center">Welcome to the Cloud Storage Space</h1>
          <p className="text-gray-1000 text-center mb-8">Your one-stop solution for managing your data efficiently and beautifully. Please sign in to continue.</p>
          <Link href="/login" className="bg-yellow-500 hover:bg-yellow-100 text-white font-bold py-3 px-8 rounded-lg shadow transition text-lg">
            Sign In
          </Link>
        </div>
      </div>
    </div>
  );
}
