'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function Home() {
  const [displayText, setDisplayText] = useState('');
  const [buttonText, setButtonText] = useState('');
  const [showFeedbackOptions, setShowFeedbackOptions] = useState(false);
  const fullText = 'Join Our Cloud Storage Platform and Start Syncing Your Files Securely';
  const buttonFullText = 'Welcome';

  useEffect(() => {
    let currentIndex = 0;
    const interval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setDisplayText(fullText.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(interval);
      }
    }, 100);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    let currentIndex = 0;
    const interval = setInterval(() => {
      if (currentIndex <= buttonFullText.length) {
        setButtonText(buttonFullText.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(interval);
      }
    }, 100);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative min-h-screen w-full overflow-x-hidden">
      {/* Full background image */}
      <img
        src="/welcome.jpg"
        alt="Welcome"
        className="fixed inset-0 w-full h-full object-cover z-0"
      />

      {/* Scrollable content */}
      <div className="relative z-10 min-h-screen">
        {/* Hero section */}
        <div className="h-screen flex items-center justify-center">
          <h1 className="text-4xl md:text-6xl font-bold text-center px-4 text-gray-100 tracking-wide" style={{ textShadow: '0 4px 8px rgba(125, 211, 252, 0.6)' }}>
            {displayText}
          </h1>
        </div>

        {/* Content sections */}
        <div className="bg-white/90 backdrop-blur-sm">
          <section className="max-w-6xl mx-auto px-4 py-20">
            <h2 className="text-3xl font-bold mb-8">About Us</h2>
            <p className="text-lg mb-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <p className="text-lg mb-6">
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
          </section>

          <section className="max-w-6xl mx-auto px-4 py-20">
            <h2 className="text-3xl font-bold mb-8">Our Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[1, 2, 3].map((item) => (
                <div key={item} className="bg-white p-6 rounded-lg shadow-lg">
                  <h3 className="text-xl font-bold mb-4">Service {item}</h3>
                  <p className="text-gray-600">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.
                  </p>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>

      {/* Welcome button at bottom right */}
      <div className="fixed bottom-10 right-10 z-20">
        <Link href="/login">
          <button className="px-10 py-4 rounded-xl bg-gradient-to-r from-sky-400 to-sky-600 hover:from-sky-500 hover:to-sky-700 text-white text-2xl font-bold shadow-lg transition-all duration-300 transform hover:scale-105">
            {buttonText}
            <span className="animate-dots"></span>
          </button>
        </Link>
      </div>

      {/* Logo at bottom left */}
      <div
        className="absolute bottom-4 left-4 z-30 cursor-pointer"
        onClick={() => setShowFeedbackOptions(!showFeedbackOptions)}
      >
        <img
          src="/logo.png"
          alt="Logo"
          className="w-16 h-16 object-contain"
        />
      </div>

      {/* Feedback and Rating Options */}
      {showFeedbackOptions && (
        <div className="absolute bottom-24 left-4 z-40 bg-gradient-to-b from-blue-50 to-blue-100 p-3 rounded-lg shadow-xl flex flex-col space-y-2 font-sans border border-blue-300" style={{ boxShadow: '0 4px 12px rgba(125, 211, 252, 0.6)' }}>
          <button
            className="w-full flex justify-between items-center text-gray-700 hover:bg-blue-200 px-3 py-2 rounded-md transition-colors duration-200"
            onClick={() => {
              console.log('Feedback clicked');
              // TODO: Implement feedback action (e.g., open feedback form)
              setShowFeedbackOptions(false);
            }}
          >
            <span>Feedback</span>
            <span className="text-blue-600">📝</span>{/* Placeholder Icon */}
          </button>
          <div className="border-b border-blue-100 w-full"></div>{/* Separator */}
          <button
            className="w-full flex justify-between items-center text-gray-700 hover:bg-blue-200 px-3 py-2 rounded-md transition-colors duration-200"
            onClick={() => {
              console.log('Rate the App clicked');
              // TODO: Implement rate the app action (e.g., open rating modal)
              setShowFeedbackOptions(false);
            }}
          >
            <span>Rate the App</span>
            <span className="text-yellow-500">⭐</span>{/* Placeholder Icon */}
          </button>
        </div>
      )}
    </div>
  );
}
