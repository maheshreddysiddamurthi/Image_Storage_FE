'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function SignUp() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle sign up logic here
        console.log('Sign up:', { email, password, confirmPassword });
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-yellow-200 via-orange-200 to-yellow-400 py-8 px-2">
            <div className="bg-white rounded-3xl shadow-2xl flex w-full max-w-4xl overflow-hidden">
                {/* Left: Form */}
                <div className="w-full md:w-1/2 p-10 flex flex-col justify-center">
                    <div className="mb-6">
                        <div className="flex items-center mb-2">
                            <span className="font-bold text-2xl text-yellow-500 mr-2">🐝</span>
                            <span className="font-bold text-xl text-gray-800">found</span>
                        </div>
                        <h2 className="text-3xl font-extrabold text-gray-900 mb-1">
                            Sign Up <span className="text-orange-500 text-lg font-semibold">As Influencer</span>
                        </h2>
                        <p className="text-gray-400 text-sm mb-4">
                            The app is currently in dev mode and not accepting new user signups. Please, come back later or follow us on Twitter for updates.
                        </p>
                    </div>
                    <form className="space-y-4" onSubmit={handleSubmit}>
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                            <input
                                id="email"
                                name="email"
                                type="email"
                                autoComplete="email"
                                required
                                placeholder="support@befound.com"
                                className="w-full px-4 py-2 rounded-lg border border-gray-200 bg-gray-100 text-gray-700 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:bg-white transition"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <div>
                            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">Password</label>
                            <input
                                id="password"
                                name="password"
                                type="password"
                                autoComplete="new-password"
                                required
                                placeholder="********"
                                className="w-full px-4 py-2 rounded-lg border border-gray-200 bg-gray-100 text-gray-700 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:bg-white transition"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            <p className="text-xs text-gray-400 mt-1 ml-1">
                                *Must contain minimum 8 characters, one uppercase, one lowercase, one number and one special case character.
                            </p>
                        </div>
                        <div>
                            <label htmlFor="confirm-password" className="block text-sm font-medium text-gray-700 mb-1">Confirm password</label>
                            <input
                                id="confirm-password"
                                name="confirm-password"
                                type="password"
                                autoComplete="new-password"
                                required
                                placeholder="********"
                                className="w-full px-4 py-2 rounded-lg border border-gray-200 bg-gray-100 text-gray-700 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:bg-white transition"
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                            />
                        </div>
                        <div className="flex items-center justify-between mt-4">
                            <span className="text-sm text-gray-500">
                                Have an account?{' '}
                                <Link href="/signin" className="text-orange-500 font-semibold hover:underline">Sign In</Link>
                            </span>
                            <button
                                type="submit"
                                className="bg-orange-400 hover:bg-orange-500 text-white font-bold py-2 px-6 rounded-lg shadow transition"
                            >
                                Register
                            </button>
                        </div>
                    </form>
                    <div className="flex justify-between items-center mt-8 text-xs text-gray-400">
                        <span>Copyrights 2021. Befound</span>
                        <span>
                            Not a business?{' '}
                            <a href="#" className="text-orange-400 font-semibold hover:underline">Sign in like Business</a>
                        </span>
                    </div>
                </div>
                {/* Right: Illustration */}
                <div className="hidden md:flex w-1/2 bg-gradient-to-br from-yellow-100 to-orange-100 items-center justify-center">
                    {/* Placeholder SVG illustration */}
                    <svg width="260" height="260" viewBox="0 0 260 260" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <ellipse cx="130" cy="130" rx="120" ry="100" fill="#FFE0B2" />
                        <rect x="70" y="120" width="120" height="60" rx="15" fill="#FFB74D" />
                        <circle cx="160" cy="110" r="30" fill="#F57C00" />
                        <rect x="100" y="150" width="40" height="20" rx="5" fill="#FFF3E0" />
                        <rect x="120" y="170" width="20" height="10" rx="3" fill="#FFF3E0" />
                    </svg>
                </div>
            </div>
        </div>
    );
}
