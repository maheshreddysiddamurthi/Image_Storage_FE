'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { useAuth0 } from '@auth0/auth0-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { loginWithRedirect, logout, isAuthenticated, error, isLoading, user } = useAuth0();

  console.log('isAuthenticated', isAuthenticated);
  

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    console.log("Auth0 Hook State:", { isAuthenticated, error, isLoading, loginWithRedirect: !!loginWithRedirect });
    if (error) {
      console.error("Auth0 Error:", error);
    }
  }, [isAuthenticated, error, isLoading, loginWithRedirect]);

  const handleLogout = () => {
    logout({ logoutParams: { returnTo: window.location.origin } });
  };

  const handleSignIn = () => {
    loginWithRedirect({
      authorizationParams: {
        screen_hint: 'login'
      }
    });
  };

  const handleSignUp = () => {
    loginWithRedirect({
      authorizationParams: {
        screen_hint: 'signup'
      }
    });
  };

  const navLinks = [
    { name: 'Features', href: '#features' },
    { name: 'How It Works', href: '#how-it-works' },
    { name: 'Testimonials', href: '#testimonials' },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-lg' : 'bg-transparent'
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <Link href="/">
              <Image
                src="/camera-icon.png"
                alt="SnapSync Logo"
                width={48}
                height={48}
                className="h-12 w-12 rounded-full shadow border border-gray-200 object-cover bg-white"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-gray-200 hover:text-blue-400 transition-colors duration-200"
              >
                {link.name}
              </Link>
            ))}
            {isAuthenticated ? (
              <div className="flex items-center space-x-4">
                <span className="text-gray-200">{user?.name}</span>
                <button
                  onClick={handleLogout}
                  className="bg-red-600 text-white px-6 py-2 rounded-full hover:bg-red-700 transition-colors"
                >
                  Logout
                </button>
              </div>
            ) : (
              <>
                <button
                  onClick={handleSignIn}
                  className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-colors"
                >
                  Sign In
                </button>
                <button
                  onClick={handleSignUp}
                  className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-colors"
                >
                  Sign Up
                </button>
              </>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 hover:text-gray-900 focus:outline-none"
            >
              {isOpen ? (
                <XMarkIcon className="h-6 w-6" />
              ) : (
                <Bars3Icon className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="md:hidden bg-gray-800"
        >
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="block px-3 py-2 text-gray-200 hover:text-blue-400 hover:bg-gray-700 rounded-md"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            {isAuthenticated ? (
              <>
                <div className="px-3 py-2 text-gray-200">{user?.name}</div>
                <button
                  onClick={() => {
                    handleLogout();
                    setIsOpen(false);
                  }}
                  className="w-full px-3 py-2 bg-red-600 text-white rounded-full text-center hover:bg-red-700 transition-colors"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <button
                  onClick={() => {
                    handleSignIn();
                    setIsOpen(false);
                  }}
                  className="w-full px-3 py-2 bg-blue-600 text-white rounded-full text-center hover:bg-blue-700 transition-colors"
                >
                  Sign In
                </button>
                <button
                  onClick={() => {
                    handleSignUp();
                    setIsOpen(false);
                  }}
                  className="w-full px-3 py-2 bg-blue-600 text-white rounded-full text-center hover:bg-blue-700 transition-colors"
                >
                  Sign Up
                </button>
              </>
            )}
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar; 