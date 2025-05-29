'use client';

import { useAuth0 } from '@auth0/auth0-react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function Navigation() {
    const { isAuthenticated, logout, user } = useAuth0();
    const router = useRouter();

    const handleSignOut = () => {
        const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000';
        logout({
            logoutParams: {
                returnTo: baseUrl
            }
        });
    };

    return (
        <nav className="bg-white shadow-lg">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16">
                    <div className="flex">
                        <div className="flex-shrink-0 flex items-center">
                            <Link href="/" className="flex items-center">
                                <span className="font-bold text-2xl text-yellow-500 mr-2">🐝</span>
                                <span className="font-bold text-xl text-gray-800">found</span>
                            </Link>
                        </div>
                    </div>

                    <div className="flex items-center">
                        {isAuthenticated ? (
                            <div className="flex items-center space-x-4">
                                <span className="text-gray-700">{user?.email}</span>
                                <button
                                    onClick={handleSignOut}
                                    className="bg-orange-400 hover:bg-orange-500 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
                                >
                                    Sign Out
                                </button>
                            </div>
                        ) : (
                            <div className="flex items-center space-x-4">
                                <Link
                                    href="/signin"
                                    className="text-gray-700 hover:text-orange-500 px-3 py-2 rounded-md text-sm font-medium transition-colors"
                                >
                                    Sign In
                                </Link>
                                <Link
                                    href="/signup"
                                    className="bg-orange-400 hover:bg-orange-500 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
                                >
                                    Sign Up
                                </Link>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </nav>
    );
} 