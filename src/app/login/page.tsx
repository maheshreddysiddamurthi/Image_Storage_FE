'use client';

import { useState, useRef } from 'react';
import Link from 'next/link';

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [showTooltip, setShowTooltip] = useState(false);
    const [tooltipTarget, setTooltipTarget] = useState<'email' | 'password' | null>(null);
    const emailRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!email) {
            setTooltipTarget('email');
            setShowTooltip(true);
            emailRef.current?.focus();
            setTimeout(() => setShowTooltip(false), 2000);
            return;
        }
        if (!password) {
            setTooltipTarget('password');
            setShowTooltip(true);
            passwordRef.current?.focus();
            setTimeout(() => setShowTooltip(false), 2000);
            return;
        }
        // Handle sign up logic here
        console.log('Sign up:', { email, password });
    };

    const handleInput = () => {
        setShowTooltip(false);
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-yellow-500 via-orange-200 to-yellow-300">
            <div className="bg-white rounded-3xl shadow-5xl p-10 max-w-lg w-full flex flex-col items-center">
                <form className="w-full flex flex-col gap-4" onSubmit={handleSubmit}>
                    <p className="text-gray-400 text-sm mb-2">
                        This application is currently in development. If you experience any issues, please contact us at <a href="mailto:support@example.com" className="underline">support@example.com</a>.
                    </p>
                    <div className="relative">
                        {showTooltip && tooltipTarget === 'email' && (
                            <div className="absolute left-1/2 -translate-x-1/2 -top-14 z-10 flex items-center px-4 py-2 bg-white border border-gray-300 rounded shadow-lg animate-fade-in">
                                <span className="text-orange-500 mr-2">
                                    <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01M12 17a5 5 0 100-10 5 5 0 000 10z" /></svg>
                                </span>
                                <span className="text-gray-800 font-medium">Please fill in this field.</span>
                            </div>
                        )}
                        <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                            <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 12a4 4 0 01-8 0m8 0a4 4 0 00-8 0m8 0V8a4 4 0 10-8 0v4m8 0v4a4 4 0 01-8 0v-4" /></svg>
                        </span>
                        <input
                            ref={emailRef}
                            type="email"
                            placeholder="Email"
                            className={`w-full pl-12 pr-4 py-3 rounded-lg border ${showTooltip && tooltipTarget === 'email' ? 'border-orange-400' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-yellow-400 text-gray-700 text-lg`}
                            value={email}
                            onChange={e => { setEmail(e.target.value); handleInput(); }}
                        />
                    </div>
                    <div className="relative">
                        {showTooltip && tooltipTarget === 'password' && (
                            <div className="absolute left-1/2 -translate-x-1/2 -top-14 z-10 flex items-center px-4 py-2 bg-white border border-gray-300 rounded shadow-lg animate-fade-in">
                                <span className="text-orange-500 mr-2">
                                    <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01M12 17a5 5 0 100-10 5 5 0 000 10z" /></svg>
                                </span>
                                <span className="text-gray-800 font-medium">Please fill in this field.</span>
                            </div>
                        )}
                        <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                            <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m0-6a2 2 0 100 4 2 2 0 000-4zm6 2a6 6 0 11-12 0 6 6 0 0112 0z" /></svg>
                        </span>
                        <input
                            ref={passwordRef}
                            type="password"
                            placeholder="Password"
                            className={`w-full pl-12 pr-4 py-3 rounded-lg border ${showTooltip && tooltipTarget === 'password' ? 'border-orange-400' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-yellow-400 text-gray-700 text-lg`}
                            value={password}
                            onChange={e => { setPassword(e.target.value); handleInput(); }}
                        />
                    </div>
                    <button type="submit" className="w-full mt-2 py-3 rounded-xl bg-gradient-to-r from-yellow-500 to-orange-400 text-white font-bold text-lg shadow-md transition hover:from-yellow-600 hover:to-orange-500">Login</button>
                </form>
                <div className="mt-8 text-center text-gray-600 text-lg">
                    Don't have an account?{' '}
                    <Link href="/signup" className="text-yellow-600 hover:underline font-medium">Sign Up</Link>
                </div>
            </div>
        </div>
    );
}
