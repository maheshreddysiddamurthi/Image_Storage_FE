import { NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';

export async function GET() {
    try {
        await connectDB();
        return NextResponse.json({ status: 'success', message: 'Database connected successfully' });
    } catch (error: any) {
        console.error('Database connection error:', error);
        return NextResponse.json(
            { status: 'error', message: 'Failed to connect to database' },
            { status: 500 }
        );
    }
} 