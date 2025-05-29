import { NextResponse } from 'next/server';
import { auth0 } from '../../../lib/auth0';
import User from '@/models/User';
import connectDB from '@/lib/mongodb';

export async function POST(req: Request) {
    try {
        const session = await auth0.getSession(req);
        if (!session?.user) {
            return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
        }

        const body = await req.json();
        const { firstName, lastName, mobileNumber } = body;

        if (!firstName || !lastName || !mobileNumber) {
            return NextResponse.json(
                { error: 'All fields are required' },
                { status: 400 }
            );
        }

        await connectDB();

        const user = await User.findOneAndUpdate(
            { email: session.user.email },
            {
                firstName,
                lastName,
                mobileNumber,
            },
            { new: true }
        );

        if (!user) {
            return NextResponse.json({ error: 'User not found' }, { status: 404 });
        }

        return NextResponse.json({
            message: 'Profile updated successfully',
            user: {
                id: user._id,
                email: user.email,
                firstName: user.firstName,
                lastName: user.lastName,
                mobileNumber: user.mobileNumber,
            }
        });
    } catch (error: any) {
        console.error('Profile update error:', error);
        return NextResponse.json(
            { error: 'Failed to update profile' },
            { status: 500 }
        );
    }
} 