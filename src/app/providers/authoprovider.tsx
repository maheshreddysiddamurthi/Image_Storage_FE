"use client";
import React, { useEffect } from 'react'
import { Auth0Provider, useAuth0 } from '@auth0/auth0-react'

function Authoprovider({ children }: { children: React.ReactNode }) {
    return (
        <Auth0Provider
            domain={'dev-ubo0g2c0zsh6ujtu.us.auth0.com'} // ToDo: Get from env
            clientId={'vt76SJk6Yvx3wxfNq9xOfVzcdbqkKRJD'}
            authorizationParams={{
                redirect_uri: typeof window !== "undefined" ? window.location.origin : undefined,
                audience: "https://dev-ubo0g2c0zsh6ujtu.us.auth0.com/api/v2/",
                scope: "read:roles read:users read:user_roles update:users email profile openid phone " // REQUIRED scopes
            }}
        >
            {children}
        </Auth0Provider>
    )
}

export default Authoprovider