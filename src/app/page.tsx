'use client';

import Link from 'next/link';

export default function Home() {
  return (
    <div className="relative min-h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Full background image */}
      <img
        src="/welcome.jpg"
        alt="Welcome"
        className="absolute inset-0 w-full h-full object-cover z-0"
      />
      {/* Welcome button at bottom right */}
      <div className="absolute bottom-10 right-10 z-10">
        <Link href="/login">
          <button className="px-10 py-4 rounded-xl bg-yellow-500 hover:bg-yellow-600 text-white text-2xl font-bold shadow-lg transition">
            Welcome
          </button>
        </Link>
      </div>
    </div>
  );
}
