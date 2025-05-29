'use client';

import { useState } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { useRouter } from 'next/navigation';
import ProtectedRoute from '@/components/ProtectedRoute';

export default function CompleteProfile() {
    const { user, getAccessTokenSilently } = useAuth0();
    const router = useRouter();
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        mobileNumber: '',
    });
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

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
            const token = await getAccessTokenSilently();
            const response = await fetch('/api/user/profile', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                body: JSON.stringify(formData)
            });

            if (!response.ok) {
                const data = await response.json();
                throw new Error(data.error || 'Failed to update profile');
            }

            router.push('/welcome');
        } catch (err: any) {
            setError(err.message || 'Error updating profile');
        } finally {
            setLoading(false);
        }
    };

    return (
        <ProtectedRoute>
            <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-yellow-200 via-orange-200 to-yellow-400 py-8 px-2">
                <div className="bg-white rounded-3xl shadow-2xl w-full max-w-md p-8">
                    <div className="mb-6">
                        <div className="flex items-center mb-2">
                            <span className="font-bold text-2xl text-yellow-500 mr-2">🐝</span>
                            <span className="font-bold text-xl text-gray-800">found</span>
                        </div>
                        <h2 className="text-2xl font-bold text-gray-900 mb-1">Complete Your Profile</h2>
                        <p className="text-gray-400 text-sm">
                            Please provide your details to complete your profile.
                        </p>
                    </div>

                    {error && (
                        <div className="mb-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded">
                            {error}
                        </div>
                    )}

                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div>
                            <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
                                First Name
                            </label>
                            <input
                                id="firstName"
                                name="firstName"
                                type="text"
                                required
                                className="w-full px-4 py-2 rounded-lg border border-gray-200 bg-gray-100 text-gray-700 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:bg-white transition"
                                value={formData.firstName}
                                onChange={handleChange}
                            />
                        </div>

                        <div>
                            <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
                                Last Name
                            </label>
                            <input
                                id="lastName"
                                name="lastName"
                                type="text"
                                required
                                className="w-full px-4 py-2 rounded-lg border border-gray-200 bg-gray-100 text-gray-700 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:bg-white transition"
                                value={formData.lastName}
                                onChange={handleChange}
                            />
                        </div>

                        <div>
                            <label htmlFor="mobileNumber" className="block text-sm font-medium text-gray-700 mb-1">
                                Mobile Number
                            </label>
                            <input
                                id="mobileNumber"
                                name="mobileNumber"
                                type="tel"
                                required
                                pattern="[0-9]{10}"
                                title="Please enter a valid 10-digit mobile number"
                                className="w-full px-4 py-2 rounded-lg border border-gray-200 bg-gray-100 text-gray-700 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:bg-white transition"
                                value={formData.mobileNumber}
                                onChange={handleChange}
                            />
                        </div>

                        <button
                            type="submit"
                            disabled={loading}
                            className={`w-full bg-orange-400 hover:bg-orange-500 text-white font-bold py-2 px-6 rounded-lg shadow transition ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
                        >
                            {loading ? 'Updating Profile...' : 'Complete Profile'}
                        </button>
                    </form>
                </div>
            </div>
        </ProtectedRoute>
    );
} 