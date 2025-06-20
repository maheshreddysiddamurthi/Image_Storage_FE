"use client";

import { useAuth0 } from '@auth0/auth0-react';
import { useCallback, useEffect, useState } from 'react';
import ProtectedRoute from '@/components/ProtectedRoute';

export default function ProfilePage() {
    const { user, getAccessTokenSilently } = useAuth0();
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [nickname, setNickname] = useState('');
    const [message, setMessage] = useState('');
    const [loading, setLoading] = useState(false);
    const [profile, setProfile] = useState<any>(null);
    const [selectedImage, setSelectedImage] = useState<string | null>(null);
    const [imageFile, setImageFile] = useState<File | null>(null);

    // Fetch profile info from backend
    const fetchProfile = useCallback(async () => {
        if (!user) return;
        setLoading(true);
        try {
            const token = await getAccessTokenSilently();
            const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/profile/sync`, {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json',
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
                    }
                }),
                credentials: 'include',
            });
            const data = await res.json();
            setProfile(data.user);
            setFirstName(data.user.firstName || '');
            setLastName(data.user.lastName || '');
            setNickname(data.user.nickname || user?.nickname || '');
            setSelectedImage(data.user.picture || user?.picture || null);
        } catch (err) {
            setMessage('Failed to load profile');
        } finally {
            setLoading(false);
        }
    }, [user, getAccessTokenSilently]);

    useEffect(() => {
        fetchProfile();
    }, [fetchProfile]);

    // Handle image file selection
    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            setImageFile(file);
            const reader = new FileReader();
            reader.onloadend = () => {
                setSelectedImage(reader.result as string);
            };
            reader.readAsDataURL(file);
        }
    };

    // Save profile changes
    const handleSave = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!user) return;
        setLoading(true);
        setMessage('');
        let pictureToSend = selectedImage || user.picture;
        try {
            if (imageFile && selectedImage) {
                pictureToSend = selectedImage;
            }
            const token = await getAccessTokenSilently();
            const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/profile/sync`, {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    user: {
                        sub: user.sub,
                        email: user.email,
                        nickname,
                        picture: pictureToSend,
                        firstName,
                        lastName,
                    }
                }),
                credentials: 'include',
            });
            const data = await res.json();
            if (res.ok) {
                setMessage('Profile updated!');
                setProfile(data.user);
                setSelectedImage(data.user.picture);
                setImageFile(null);
            } else {
                setMessage(data.error || 'Failed to update profile');
            }
        } catch (err) {
            setMessage('Failed to update profile');
        } finally {
            setLoading(false);
        }
    };

    return (
        <ProtectedRoute>
            <div className="max-w-xl mx-auto py-10">
                <h1 className="text-3xl font-bold mb-6">My Profile</h1>
                <form onSubmit={handleSave} className="space-y-4">
                    <div className="flex items-center mb-6">
                        <img
                            src={selectedImage || profile?.picture || user?.picture || 'https://via.placeholder.com/64'}
                            alt="Profile"
                            className="w-16 h-16 rounded-full mr-4 object-cover"
                        />
                        <div>
                            <div className="text-lg font-semibold">{profile?.email || user?.email}</div>
                        </div>
                    </div>
                    <div>
                        <label htmlFor="profilePhoto" className="block text-sm font-medium text-gray-700">Profile Photo</label>
                        <input
                            type="file"
                            id="profilePhoto"
                            accept="image/*"
                            onChange={handleImageChange}
                            disabled={loading}
                            className="mt-1 block w-full"
                        />
                    </div>
                    <div>
                        <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">First Name</label>
                        <input
                            type="text"
                            id="firstName"
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)}
                            disabled={loading}
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
                            disabled={loading}
                        />
                    </div>
                    <div>
                        <label htmlFor="nickname" className="block text-sm font-medium text-gray-700">Nickname</label>
                        <input
                            type="text"
                            id="nickname"
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                            value={nickname}
                            onChange={(e) => setNickname(e.target.value)}
                            disabled={loading}
                        />
                    </div>
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                        <input
                            type="email"
                            id="email"
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm bg-gray-100 cursor-not-allowed sm:text-sm"
                            value={profile?.email || user?.email || ''}
                            disabled
                        />
                    </div>
                    <button
                        type="submit"
                        className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                        disabled={loading}
                    >
                        {loading ? 'Saving...' : 'Save Profile'}
                    </button>
                    {message && <div className="text-green-600 mt-2">{message}</div>}
                </form>
            </div>
        </ProtectedRoute>
    );
} 