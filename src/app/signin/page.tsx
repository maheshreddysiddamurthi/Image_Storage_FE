'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useAuth0 } from '@auth0/auth0-react';

export default function SignIn() {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const router = useRouter();
    const { loginWithRedirect, isAuthenticated } = useAuth0();
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError('');
        setLoading(true);

        try {
            await loginWithRedirect({
                authorizationParams: {
                    screen_hint: 'login',
                    connection: 'Username-Password-Authentication',
                    username: formData.email,
                    password: formData.password,
                }
            });
        } catch (err: any) {
            setError(err.message || 'Invalid email or password');
        } finally {
            setLoading(false);
        }
    };

    const handleGoogleSignIn = async () => {
        try {
            await loginWithRedirect({
                authorizationParams: {
                    connection: 'google-oauth2',
                }
            });
        } catch (err: any) {
            setError(err.message || 'Error signing in with Google');
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-yellow-200 via-orange-200 to-yellow-400 py-8 px-2">
            <div className="bg-white rounded-3xl shadow-2xl flex w-full max-w-4xl overflow-hidden">
                {/* Left: Form */}
                <div className="w-full md:w-1/2 p-10 flex flex-col justify-center">
                    <div className="mb-6">

                        <h2 className="text-3xl font-extrabold text-gray-900 mb-1">
                            Sign In <span className="text-orange-500 text-lg font-semibold">As Influencer</span>
                        </h2>
                        <p className="text-gray-400 text-sm mb-4">
                            Welcome back! Please sign in to your account.
                        </p>
                    </div>
                    {error && (
                        <div className="mb-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded">
                            {error}
                        </div>
                    )}
                    <form className="space-y-4" onSubmit={handleSubmit}>
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                            <input
                                id="email"
                                name="email"
                                type="email"
                                autoComplete="email"
                                required
                                placeholder="you@example.com"
                                className="w-full px-4 py-2 rounded-lg border border-gray-200 bg-gray-100 text-gray-700 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:bg-white transition"
                                value={formData.email}
                                onChange={handleChange}
                            />
                        </div>
                        <div>
                            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">Password</label>
                            <input
                                id="password"
                                name="password"
                                type="password"
                                autoComplete="current-password"
                                required
                                placeholder="********"
                                className="w-full px-4 py-2 rounded-lg border border-gray-200 bg-gray-100 text-gray-700 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:bg-white transition"
                                value={formData.password}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="flex items-center justify-between mt-4">
                            <span className="text-sm text-gray-500">
                                Don't have an account?{' '}
                                <Link href="/signup" className="text-orange-500 font-semibold hover:underline">Sign Up</Link>
                            </span>
                            <button
                                type="submit"
                                disabled={loading}
                                className={`bg-orange-400 hover:bg-orange-500 text-white font-bold py-2 px-6 rounded-lg shadow transition ${loading ? 'opacity-50 cursor-not-allowed' : ''
                                    }`}
                            >
                                {loading ? 'Signing in...' : 'Sign In'}
                            </button>
                        </div>
                    </form>

                    <div className="mt-6">
                        <div className="relative">
                            <div className="absolute inset-0 flex items-center">
                                <div className="w-full border-t border-gray-300"></div>
                            </div>
                            <div className="relative flex justify-center text-sm">
                                <span className="px-2 bg-white text-gray-500">Or continue with</span>
                            </div>
                        </div>

                        <div className="mt-6">
                            <button
                                onClick={handleGoogleSignIn}
                                className="w-full flex items-center justify-center px-4 py-2 border border-gray-300 rounded-lg shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-400"
                            >
                                <svg className="h-5 w-5 mr-2" viewBox="0 0 24 24">
                                    <path
                                        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                                        fill="#4285F4"
                                    />
                                    <path
                                        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                                        fill="#34A853"
                                    />
                                    <path
                                        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                                        fill="#FBBC05"
                                    />
                                    <path
                                        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                                        fill="#EA4335"
                                    />
                                </svg>
                                Sign in with Google
                            </button>
                        </div>
                    </div>

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