'use client';

import { useAuth0 } from '@auth0/auth0-react';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function Welcome() {
    const { user, isAuthenticated, isLoading, logout } = useAuth0();
    const router = useRouter();

    useEffect(() => {
        if (!isLoading && !isAuthenticated) {
            router.push('/signin');
        }
    }, [isLoading, isAuthenticated, router]);

    const handleSignOut = () => {
        logout({ logoutParams: { returnTo: window.location.origin } });
    };

    if (isLoading) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-yellow-200 via-orange-200 to-yellow-400">
                <div className="text-2xl font-bold text-gray-800">Loading...</div>
            </div>
        );
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-yellow-200 via-orange-200 to-yellow-400 py-8 px-2">
            <div className="bg-white rounded-3xl shadow-2xl w-full max-w-2xl p-12 text-center">
                <div className="mb-8">
                    <div className="flex items-center justify-center mb-4">
                        <span className="font-bold text-4xl text-yellow-500 mr-2">🐝</span>
                        <span className="font-bold text-3xl text-gray-800">found</span>
                    </div>
                    <h1 className="text-4xl font-bold text-gray-900 mb-4">
                        Welcome to SnapSync!
                    </h1>
                    <p className="text-xl text-gray-600 mb-8">
                        Your journey to becoming an influencer starts here.
                    </p>
                    {user && (
                        <div className="bg-gray-50 rounded-xl p-6 mb-8">
                            <p className="text-lg text-gray-700">
                                Hello, <span className="font-semibold">{user.name || user.email}</span>!
                            </p>
                        </div>
                    )}
                    <div className="space-y-4">
                        <button
                            onClick={() => router.push('/dashboard')}
                            className="w-full bg-orange-400 hover:bg-orange-500 text-white font-bold py-3 px-6 rounded-lg shadow transition"
                        >
                            Go to Dashboard
                        </button>
                        <button
                            onClick={() => router.push('/profile')}
                            className="w-full bg-white hover:bg-gray-50 text-orange-400 font-bold py-3 px-6 rounded-lg shadow border border-orange-400 transition"
                        >
                            View Profile
                        </button>
                        <button
                            onClick={handleSignOut}
                            className="w-full bg-gray-100 hover:bg-gray-200 text-gray-600 font-bold py-3 px-6 rounded-lg shadow transition"
                        >
                            Sign Out
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
} 