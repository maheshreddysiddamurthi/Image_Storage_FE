'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

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
        <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
            {/* Background image */}
            <div className="absolute inset-0 w-full h-full bg-[url('/signup.png')] bg-cover bg-center z-0" />

            {/* Content */}
            <div className="relative z-20 flex items-center justify-center w-full h-full">
                <div className="bg-white bg-opacity-90 backdrop-blur-sm rounded-xl shadow-2xl p-8 max-w-md w-full flex flex-col items-center border border-blue-100" style={{ background: 'linear-gradient(135deg, rgba(227, 242, 253, 0.9) 0%, rgba(255, 255, 255, 0.9) 100%)' }}>
                    <div className="w-full mb-6 text-center">
                        <h2 className="text-3xl font-bold text-gray-800 mb-2">CREATE YOUR ACCOUNT</h2>
                        <p className="text-gray-600 text-sm">JOIN OUR CLOUD STORAGE PLATFORM AND START SYNCING YOUR FILES SECURELY.</p>
                    </div>

                    <form className="w-full flex flex-col gap-4" onSubmit={handleSubmit}>
                        <div className="relative">
                            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-blue-700">
                                <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 12a4 4 0 01-8 0m8 0a4 4 0 00-8 0m8 0V8a4 4 0 10-8 0v4m8 0v4a4 4 0 01-8 0v-4" /></svg>
                            </span>
                            <input
                                type="email"
                                placeholder="EMAIL"
                                className="w-full pl-12 pr-4 py-3 rounded-xl border border-blue-100 bg-white text-gray-800 font-bold text-lg shadow focus:outline-none focus:ring-2 focus:ring-blue-300 placeholder-gray-600 placeholder:font-bold"
                                value={email}
                                onChange={e => setEmail(e.target.value)}
                                required
                            />
                        </div>

                        <div className="relative">
                            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-blue-700">
                                <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m0-6a2 2 0 100 4 2 2 0 000-4zm6 2a6 6 0 11-12 0 6 6 0 0112 0z" /></svg>
                            </span>
                            <input
                                type="password"
                                placeholder="PASSWORD"
                                className="w-full pl-12 pr-4 py-3 rounded-xl border border-blue-100 bg-white text-gray-800 font-bold text-lg shadow focus:outline-none focus:ring-2 focus:ring-blue-300 placeholder-gray-600 placeholder:font-bold"
                                value={password}
                                onChange={e => setPassword(e.target.value)}
                                required
                            />
                        </div>

                        <div className="relative">
                            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-blue-700">
                                <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m0-6a2 2 0 100 4 2 2 0 000-4zm6 2a6 6 0 11-12 0 6 6 0 0112 0z" /></svg>
                            </span>
                            <input
                                type="password"
                                placeholder="CONFIRM PASSWORD"
                                className="w-full pl-12 pr-4 py-3 rounded-xl border border-blue-100 bg-white text-gray-800 font-bold text-lg shadow focus:outline-none focus:ring-2 focus:ring-blue-300 placeholder-gray-600 placeholder:font-bold"
                                value={confirmPassword}
                                onChange={e => setConfirmPassword(e.target.value)}
                                required
                            />
                        </div>

                        <div className="text-xs text-gray-500 mt-1 text-center">
                            PASSWORD MUST CONTAIN MINIMUM 8 CHARACTERS, ONE UPPERCASE, ONE LOWERCASE, ONE NUMBER AND ONE SPECIAL
                            CHARACTER.
                        </div>

                        <button type="submit" className="w-full mt-4 py-3 rounded-xl bg-green-700 hover:bg-green-800 text-white font-bold text-lg shadow transition-colors duration-300">
                            CREATE ACCOUNT
                        </button>
                    </form>

                    <div className="mt-8 text-center text-gray-700 text-lg">
                        Already have an account?{' '}
                        <Link href="/login" className="text-blue-800 hover:underline font-semibold">SIGN IN</Link>
                    </div>
                </div>
            </div>

            {/* Logo at bottom left */}
            <Image
                src="/logo.png"
                alt="Logo"
                width={64}
                height={64}
                className="absolute bottom-4 left-4 z-30 object-contain"
            />
        </div>
    );
}
