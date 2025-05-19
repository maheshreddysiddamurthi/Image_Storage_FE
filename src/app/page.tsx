'use client';

import Link from 'next/link';
import Image from 'next/image';
import TypingText from './components/TypingText';

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative pt-8 pb-4 px-4 flex items-center justify-center bg-green-200">
        <div className="container mx-auto px-4 w-full">
          {/* Top bar with Logo, Heading, and Auth Buttons */}
          <div className="flex items-center justify-between py-4">
            {/* Logo and Heading */}
            <div className="flex items-center gap-6">
              <Image
                src="/logo.png"
                alt="SnapSync Logo"
                width={80}
                height={80}
              />
              <TypingText
                text="Welcome to Snap Sync!"
                className="text-3xl md:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-600 whitespace-nowrap"
              />
            </div>

            {/* Auth Buttons */}
            <div className="flex gap-4">
              <Link href="/login">
                <button className="px-4 py-2 rounded-md bg-white text-blue-600 font-semibold hover:bg-gray-100 transition-colors">
                  Sign In
                </button>
              </Link>
              <Link href="/signup">
                <button className="px-4 py-2 rounded-md bg-blue-600 text-white font-semibold hover:bg-blue-700 transition-colors">
                  Sign Up
                </button>
              </Link>
            </div>
          </div>

          {/* Main Hero Content (Text and Image) */}
          <div className="flex flex-col md:flex-row items-center justify-between md:gap-8">
            <div className="text-center md:text-left md:w-1/2 mb-8 md:mb-0">
              <p className="text-lg md:text-xl text-gray-600 mt-4 mb-8">
                Share the Moment, Sync the Memories. Effortlessly collect and share photos from any event with Snap Sync!s smart, fun platform.
              </p>
            </div>
            <div className="md:w-1/2 flex flex-col items-center md:items-end">
              {/* Trip Memories Image */}
              <Image
                src="/tripmemories.png"
                alt="Trip Memories"
                width={500} // Adjust width as needed
                height={400} // Adjust height as needed
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* What is SnapSync Section */}
      <section className="py-20 bg-green-200">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-20">What is SnapSync?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-orange-400 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2 text-white">Automatic Photo Gathering</h3>
              <p className="text-white">SnapSync automatically collects all photos from your friends into a single shared album, no chasing needed.</p>
            </div>
            <div className="text-center p-6 bg-orange-400 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2 text-white">Seamless Sharing</h3>
              <p className="text-white">Eliminate endless group chats. Collaborate effortlessly and enjoy sharing memories seamlessly.</p>
            </div>
            <div className="text-center p-6 bg-orange-400 rounded-lg shadow-md ">
              <h3 className="text-xl font-semibold mb-2 text-white">Fun & Easy</h3>
              <p className="text-white">SnapSync transforms photo sharing into a joyful, interactive experience for everyone involved.</p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-blue-200">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-20">How It Works</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">1</div>
              <h3 className="text-xl font-semibold mb-2">Create</h3>
              <p className="text-gray-600">Set up your SnapSync album for any event like birthdays or trips in seconds.</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">2</div>
              <h3 className="text-xl font-semibold mb-2">Capture</h3>
              <p className="text-gray-600">Friends snap photos anytime; they instantly upload to the shared album automatically.</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">3</div>
              <h3 className="text-xl font-semibold mb-2">Collect</h3>
              <p className="text-gray-600">All memories are stored safely in one place, ready to relive and share with loved ones.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="py-20 bg-blue-200">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-700">Key Features</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-white rounded-lg shadow-md border border-blue-300">
              <h3 className="text-xl font-semibold mb-2 text-blue-700">Automatic Photo Gathering</h3>
              <p className="text-blue-600">No more manual photo uploads or messy group chats to gather photos.</p>
            </div>
            <div className="text-center p-6 bg-white rounded-lg shadow-md border border-blue-300">
              <h3 className="text-xl font-semibold mb-2 text-blue-700">Seamless Sharing</h3>
              <p className="text-blue-600">Eliminate endless group chats. Collaborate effortlessly and enjoy sharing memories seamlessly.</p>
            </div>
            <div className="text-center p-6 bg-white rounded-lg shadow-md border border-blue-300">
              <h3 className="text-xl font-semibold mb-2 text-blue-700">Instant Sharing</h3>
              <p className="text-blue-600">Share entire albums instantly with a single link — no fuss.</p>
            </div>
            <div className="text-center p-6 bg-white rounded-lg shadow-md border border-blue-300">
              <h3 className="text-xl font-semibold mb-2 text-blue-700">High-Quality Photos</h3>
              <p className="text-blue-600">Preserve every photo's original resolution for vibrant memories.</p>
            </div>
            <div className="text-center p-6 bg-white rounded-lg shadow-md border border-blue-300">
              <h3 className="text-xl font-semibold mb-2 text-blue-700">Privacy Controls</h3>
              <p className="text-blue-600">Manage album visibility and permissions for worry-free sharing.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Real-World Use Cases Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-700">Real-World Use Cases</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2">Family Vacations</h3>
              <p className="text-gray-600">Capture every beach wave, amusement park smile, and candid moment with loved ones.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2">Weddings & Parties</h3>
              <p className="text-gray-600">Effortlessly collect photos from guests for a complete celebration album.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2">Sports Events</h3>
              <p className="text-gray-600">Share game-winning shots and team memories in real time with your squad.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2">Travel Adventures</h3>
              <p className="text-gray-600">Document journeys from every angle with contributions from the whole group.</p>
            </div>
          </div>
          <div className="mt-12 text-center">
            <p className="text-xl font-semibold text-gray-800">The Smith family saved 200+ photos seamlessly on their Disney trip using SnapSync&#39;s smart, fun platform!</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-purple-200 text-gray-800">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Image Section */}
          <div className="md:w-1/2 flex justify-center">
            <Image
              src="/snapsync.png"
              alt="SnapSync App Screenshot"
              width={400} // Adjust size as needed
              height={600} // Adjust size as needed
              className="rounded-lg shadow-lg"
            />
          </div>

          {/* Text Content Section */}
          <div className="md:w-1/2 text-center md:text-left">
            <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-700 mb-8">Get Started Today!</h2>

            {/* Download Text */}
            <div className="flex items-center mb-4">
              {/* Placeholder Icon */}
              <div className="w-6 h-6 bg-gray-300 rounded-md mr-4"></div>
              <p className="text-lg">Download SnapSync Now – Available on App Store & Google Play</p>
            </div>

            {/* Join Community Text */}
            <div className="flex items-center mb-8">
              {/* Placeholder Icon */}
              <div className="w-6 h-6 bg-gray-300 rounded-md mr-4"></div>
              <p className="text-lg">Join the SnapSync community and start sharing your memories effortlessly.</p>
            </div>

            {/* Copyright Text */}
            <p className="text-sm text-gray-600">© 2024 SnapSync. Privacy Policy</p>
          </div>
        </div>
      </section>
    </main>
  );
}
