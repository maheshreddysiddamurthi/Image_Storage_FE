'use client';

import { useAuth0 } from '@auth0/auth0-react';
import ProtectedRoute from '@/components/ProtectedRoute';
import { useEffect, useState, useCallback } from 'react';
import { verifyAuthToken } from '@/services/auth';
import { User } from '@auth0/auth0-react';
import Link from 'next/link';

export default function Dashboard() {
    const { user, getAccessTokenSilently, isAuthenticated, logout } = useAuth0();
    const [isVerified, setIsVerified] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [userDetails, setUserDetails] = useState<any>(null);
    const [userData, setUserData] = useState<any>(null);
    const [firstName, setFirstName] = useState<string>('');
    const [lastName, setLastName] = useState<string>('');

    const verifyToken = useCallback(async () => {
        if (!user) {
            console.log('User data not yet available');
            return;
        }

        try {
            console.log('Verifying token for user:', user);
            const token = await getAccessTokenSilently();
            console.log('Got access token:', token ? 'Token received' : 'No token');
            console.log('Token length:', token?.length);
            console.log('Token first 20 chars:', token?.substring(0, 20));

            const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/profile/sync`, {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    user: {
                        sub: user.sub,
                        email: user.email,
                        name: user.name,
                        nickname: user.nickname,
                        picture: user.picture,
                        email_verified: user.email_verified,
                        updated_at: user.updated_at,
                        firstName: firstName,
                        lastName: lastName
                    }
                }),
                credentials: 'include'
            });

            if (!response.ok) {
                const errorData = await response.json();
                console.error('Profile sync error:', errorData);
                console.error('Response status:', response.status);
                console.error('Response headers:', Object.fromEntries(response.headers.entries()));
                throw new Error(errorData.error || 'Failed to verify token');
            }

            const data = await response.json();
            console.log('Profile sync response:', data);

            if (data.user) {
                setUserData(data.user);
                setFirstName(data.user.firstName || '');
                setLastName(data.user.lastName || '');
            }
        } catch (error) {
            console.error('Token verification error:', error);
            setError('Failed to verify authentication');
        }
    }, [user, getAccessTokenSilently, firstName, lastName]);

    useEffect(() => {
        verifyToken();
    }, [verifyToken]);

    const handleLogout = () => {
        logout({ logoutParams: { returnTo: window.location.origin } });
    };

    console.log('user', user);
    return (
        <ProtectedRoute>
            <div className="min-h-screen bg-gray-50">
                {/* Dashboard Navigation Bar */}
                <nav className="bg-white shadow-sm mb-6">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="flex space-x-8 h-12 items-center">
                            <Link href="/dashboard" className="text-gray-700 hover:text-blue-600 font-medium">Dashboard</Link>
                            <Link href="/dashboard/buckets" className="text-gray-700 hover:text-blue-600 font-medium">Buckets</Link>
                            <Link href="/dashboard/profile" className="text-gray-700 hover:text-blue-600 font-medium">Profile</Link>
                        </div>
                    </div>
                </nav>
                {/* Navigation Bar */}
                <nav className="bg-white shadow-sm">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="flex justify-between h-16">
                            <div className="flex items-center">
                                <h1 className="text-xl font-semibold text-gray-900">Dashboard</h1>
                            </div>
                            <div className="flex items-center">
                                <div className="flex items-center space-x-4">
                                    <span className="text-sm text-gray-700">{user?.email}</span>
                                    <img
                                        className="h-8 w-8 rounded-full"
                                        src={user?.picture}
                                        alt={user?.name}
                                    />
                                </div>
                                {isAuthenticated && (
                                    <div className="flex items-center space-x-4 ml-4">
                                        <span className="text-gray-700">{user?.name}</span>
                                        <button
                                            onClick={handleLogout}
                                            className="bg-red-600 text-white px-4 py-1.5 rounded-full hover:bg-red-700 transition-colors text-sm"
                                        >
                                            Logout
                                        </button>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </nav>

                {/* Main Content */}
                <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                    {error ? (
                        <div className="bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded-lg">
                            {error}
                        </div>
                    ) : !isVerified ? (
                        <div className="bg-yellow-50 border border-yellow-200 text-yellow-600 px-4 py-3 rounded-lg">
                            Verifying your session...
                        </div>
                    ) : (
                        <div className="space-y-6">
                            {/* Welcome Section */}
                            <div className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-2xl p-8 mb-8 shadow-xl">
                                <h1 className="text-4xl font-bold text-white mb-2">
                                    Welcome to SnapSync!
                                </h1>
                                <p className="text-xl text-blue-100">
                                    Hello, {userData?.firstName || user?.given_name || user?.nickname || user?.name || 'User'}
                                </p>
                            </div>

                            {/* User Profile Section */}
                            <div className="bg-white rounded-xl shadow-md p-6 mb-8">
                                <div className="flex items-center space-x-4 mb-4">
                                    <img
                                        src={userData?.picture || user?.picture || 'https://via.placeholder.com/64'}
                                        alt="Profile"
                                        className="w-16 h-16 rounded-full"
                                    />
                                    <div>
                                        <h2 className="text-2xl font-semibold text-gray-800">
                                            {userData?.firstName && userData?.lastName
                                                ? `${userData.firstName} ${userData.lastName}`
                                                : userData?.name || user?.name || 'User'}
                                        </h2>
                                        <p className="text-gray-600">{userData?.email || user?.email}</p>
                                        {userData?.emailVerified && (
                                            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                                                Email Verified
                                            </span>
                                        )}
                                    </div>
                                </div>

                                <div className="space-y-4">
                                    <div>
                                        <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">First Name</label>
                                        <input
                                            type="text"
                                            id="firstName"
                                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                                            value={firstName}
                                            onChange={(e) => setFirstName(e.target.value)}
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">Last Name</label>
                                        <input
                                            type="text"
                                            id="lastName"
                                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                                            value={lastName}
                                            onChange={(e) => setLastName(e.target.value)}
                                        />
                                    </div>
                                    <button
                                        onClick={verifyToken}
                                        className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                                    >
                                        Save Profile
                                    </button>
                                </div>
                            </div>

                            {/* User Info Section */}
                            <div className="bg-white shadow-sm rounded-lg p-6">
                                <h2 className="text-2xl font-bold text-gray-900 mb-2">
                                    Your Profile
                                </h2>
                                <p className="text-gray-600">
                                    You're signed in as {userDetails?.role || 'User'}
                                </p>
                            </div>

                            {/* Quick Stats */}
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                <div className="bg-white shadow-sm rounded-lg p-6">
                                    <h3 className="text-lg font-medium text-gray-900 mb-2">Profile Status</h3>
                                    <p className="text-green-600 font-medium">Active</p>
                                </div>
                                <div className="bg-white shadow-sm rounded-lg p-6">
                                    <h3 className="text-lg font-medium text-gray-900 mb-2">Role</h3>
                                    <p className="text-gray-600">{userDetails?.role || 'User'}</p>
                                </div>
                                <div className="bg-white shadow-sm rounded-lg p-6">
                                    <h3 className="text-lg font-medium text-gray-900 mb-2">Permissions</h3>
                                    <div className="flex flex-wrap gap-2">
                                        {userDetails?.permissions?.map((permission: string) => (
                                            <span
                                                key={permission}
                                                className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800"
                                            >
                                                {permission}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* Recent Activity */}
                            <div className="bg-white shadow-sm rounded-lg p-6">
                                <h3 className="text-lg font-medium text-gray-900 mb-4">Recent Activity</h3>
                                <div className="space-y-4">
                                    <p className="text-gray-500 italic">No recent activity to show</p>
                                </div>
                            </div>
                        </div>
                    )}
                </main>
            </div>
        </ProtectedRoute>
    );
} 