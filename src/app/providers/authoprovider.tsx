"use client";
import React from 'react'
import { Auth0Provider } from '@auth0/auth0-react'

export default function Auth0ProviderWithConfig({ children }: { children: React.ReactNode }) {
    return (
        <Auth0Provider
            domain="dev-ubo0g2c0zsh6ujtu.us.auth0.com"
            clientId="vt76SJk6Yvx3wxfNq9xOfVzcdbqkKRJD"
            authorizationParams={{
                redirect_uri: "http://localhost:3000/dashboard",
                audience: "https://dev-ubo0g2c0zsh6ujtu.us.auth0.com/api/v2/",
                scope: "openid profile email"
            }}
            cacheLocation="localstorage"
            useRefreshTokens={true}
        >
            {children}
        </Auth0Provider>
    )
}