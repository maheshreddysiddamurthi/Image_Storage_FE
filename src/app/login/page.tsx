'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle login logic here
    };

    return (
        <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
            {/* Background image */}
            <div className="absolute inset-0 w-full h-full bg-[url('/login.jpg')] bg-cover bg-center z-0" />
            {/* Content */}
            <div className="relative z-20 flex items-center justify-center w-full h-full">
                <div className="bg-white bg-opacity-80 backdrop-blur-md rounded-3xl shadow-2xl p-8 max-w-sm w-full flex flex-col items-center border border-green-200" style={{ background: 'linear-gradient(135deg, #e0ffe0 0%, #ffffff 100%)' }}>
                    <div className="w-full mb-6">
                        <p className="text-black text-lg font-bold mb-1">This application is currently in development.</p>
                        <p className="text-black text-base">To infirre nam flibh irure in ea cohose ouport voluptate not chen ex derus cu.</p>
                    </div>
                    <form className="w-full flex flex-col gap-4" onSubmit={handleSubmit}>
                        <div className="relative">
                            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-green-700">
                                <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 12a4 4 0 01-8 0m8 0a4 4 0 00-8 0m8 0V8a4 4 0 10-8 0v4m8 0v4a4 4 0 01-8 0v-4" /></svg>
                            </span>
                            <input
                                type="email"
                                placeholder="Email"
                                className="w-full pl-12 pr-4 py-3 rounded-xl border-none bg-white text-black font-bold text-lg shadow focus:outline-none focus:ring-2 focus:ring-green-300 placeholder-black placeholder:font-bold"
                                value={email}
                                onChange={e => setEmail(e.target.value)}
                                required
                            />
                        </div>
                        <div className="relative">
                            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-green-700">
                                <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m0-6a2 2 0 100 4 2 2 0 000-4zm6 2a6 6 0 11-12 0 6 6 0 0112 0z" /></svg>
                            </span>
                            <input
                                type="password"
                                placeholder="Password"
                                className="w-full pl-12 pr-4 py-3 rounded-xl border-none bg-white text-black font-bold text-lg shadow focus:outline-none focus:ring-2 focus:ring-green-300 placeholder-black placeholder:font-bold"
                                value={password}
                                onChange={e => setPassword(e.target.value)}
                                required
                            />
                        </div>
                        <button type="submit" className="w-full mt-2 py-3 rounded-xl bg-green-600 hover:bg-green-700 text-white font-bold text-lg shadow transition">Login</button>
                    </form>
                    <div className="mt-8 text-center text-black text-lg">
                        Don&apos;t have an account?{' '}
                        <Link href="/signup" className="text-green-700 hover:underline font-semibold">Sign Up</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
