'use client';

import { useAuth0 } from '@auth0/auth0-react';
import ProtectedRoute from '@/components/ProtectedRoute';
import { useEffect, useState } from 'react';
import { verifyAuthToken } from '@/services/auth';
import { User } from '@auth0/auth0-react';

export default function Dashboard() {
    const { user, getAccessTokenSilently, isAuthenticated, logout } = useAuth0();
    const [isVerified, setIsVerified] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [userDetails, setUserDetails] = useState<any>(null);

    useEffect(() => {
        const verifyToken = async () => {
            if (!user) {
                console.log('Waiting for user data...');
                return;
            }

            try {
                const token = await getAccessTokenSilently();
                console.log('User data:', user);
                
                const response = await verifyAuthToken(token, user);
                setIsVerified(response.is_authenticated);
                setUserDetails(response);
            } catch (err) {
                setError('Failed to verify authentication');
                console.error('Verification error:', err);
            }
        };
        
        verifyToken();
    }, [getAccessTokenSilently, user]);

    const handleLogout = () => {
        logout({ logoutParams: { returnTo: window.location.origin } });
      };
    
    console.log('user', user);
    return (
        <ProtectedRoute>
            <div className="min-h-screen bg-gray-50">
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
            ): null}
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
                            <div className="bg-white shadow-sm rounded-lg p-6">
                                <h2 className="text-2xl font-bold text-gray-900 mb-2">
                                    Welcome back, {user?.name}!
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