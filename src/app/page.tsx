'use client';

import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-yellow-500 via-orange-200 to-yellow-300">
      <div className="bg-white rounded-3xl shadow-5xl p-10 max-w-lg w-full flex flex-col items-center">
        <span className="mb-4">
          <svg width="48" height="48" viewBox="0 0 48 48" fill="none" className="mx-auto" xmlns="http://www.w3.org/2000/svg">
            <path d="M24 8C16.268 8 10 14.268 10 22C10 22.552 10.448 23 11 23H37C37.552 23 38 22.552 38 22C38 14.268 31.732 8 24 8Z" fill="#FDE68A" stroke="#F59E42" strokeWidth="2" />
            <path d="M11 23C11 23 11 28 24 28C37 28 37 23 37 23" stroke="#F59E42" strokeWidth="2" />
            <path d="M16 33C16 33 16 38 24 38C32 38 32 33 32 33" stroke="#F59E42" strokeWidth="2" />
            <path d="M20 38C20 38 20 43 24 43C28 43 28 38 28 38" stroke="#F59E42" strokeWidth="2" />
          </svg>
        </span>
        <h1 className="text-4xl font-extrabold text-gray-900 mb-4 text-center">Welcome to the Cloud Srorage Space</h1>
        <p className="text-gray-500 text-center mb-8">Your one-stop solution for managing your data efficiently and beautifully. Please sign in to continue.</p>
        <Link href="/signin" className="bg-yellow-500 hover:bg-yellow-100 text-white font-bold py-3 px-8 rounded-lg shadow transition text-lg">
          Sign In
        </Link>
      </div>
    </div>
  );
}
