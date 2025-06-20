import { User } from '@auth0/auth0-react';

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000';

export interface AuthResponse {
    email: string;
    sub: string;
    role: string;
    permissions: string[];
    is_authenticated: boolean;
}

export interface TokenResponse {
    access_token: string;
    refresh_token: string;
    token_type: string;
    expires_in: number;
}

export const verifyAuthToken = async (token: string, payload: any): Promise<AuthResponse> => {
    try {
        console.log('Payload', payload);
        payload = JSON.stringify(payload)
        const response = await fetch(`${API_URL}/auth/verify-token`, {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json',
            },
            body: payload
        });

        if (!response.ok) {
            throw new Error('Authentication failed');
        }

        return await response.json();
    } catch (error) {
        console.error('Error verifying token:', error);
        throw error;
    }
};

export const refreshToken = async (refreshToken: string): Promise<TokenResponse> => {
    try {
        const response = await fetch(`${API_URL}/auth/refresh-token`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ refresh_token: refreshToken }),
        });

        if (!response.ok) {
            throw new Error('Token refresh failed');
        }

        return await response.json();
    } catch (error) {
        console.error('Error refreshing token:', error);
        throw error;
    }
}; 