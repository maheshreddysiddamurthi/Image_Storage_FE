import { NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import User from '@/models/User';

export async function POST(req: Request) {
    try {
        const { firstName, lastName, mobileNumber } = await req.json();

        // Validate required fields
        if (!firstName || !lastName || !mobileNumber) {
            return NextResponse.json(
                { error: 'All fields are required' },
                { status: 400 }
            );
        }

        // Connect to MongoDB
        await connectDB();

        // TODO: Get the user ID from the session/token
        // For now, we'll use a placeholder user ID
        const userId = 'placeholder_user_id';

        // Update user profile
        const updatedUser = await User.findByIdAndUpdate(
            userId,
            {
                firstName,
                lastName,
                mobileNumber,
            },
            { new: true }
        );

        if (!updatedUser) {
            return NextResponse.json(
                { error: 'User not found' },
                { status: 404 }
            );
        }

        return NextResponse.json({
            message: 'Profile updated successfully',
            user: {
                id: updatedUser._id,
                email: updatedUser.email,
                username: updatedUser.username,
                firstName: updatedUser.firstName,
                lastName: updatedUser.lastName,
                mobileNumber: updatedUser.mobileNumber,
            }
        });

    } catch (error: any) {
        console.error('Profile update error:', error);
        return NextResponse.json(
            { error: 'Error updating profile' },
            { status: 500 }
        );
    }
} 