from fastapi import APIRouter, Depends, HTTPException, status
from fastapi.security import HTTPBearer, HTTPAuthorizationCredentials
from .jwt_handler import verify_token, TokenData, create_tokens, TokenResponse, verify_auth0_token
from pydantic import BaseModel
from typing import List, Optional

router = APIRouter()
security = HTTPBearer()

class UserResponse(BaseModel):
    email: str
    sub: str
    role: str
    permissions: List[str]
    is_authenticated: bool = True

class RefreshTokenRequest(BaseModel):
    refresh_token: str

@router.post("/verify-token", response_model=UserResponse)
async def verify_auth_token(credentials: HTTPAuthorizationCredentials = Depends(security)):
    token = credentials.credentials
    # Use the new function to verify Auth0 tokens
    token_data = verify_auth0_token(token)
    
    return UserResponse(
        email=token_data.email,
        sub=token_data.sub,
        role=token_data.role,
        permissions=token_data.permissions
    )

@router.post("/refresh-token", response_model=TokenResponse)
async def refresh_token(request: RefreshTokenRequest):
    try:
        # Verify the refresh token
        token_data = verify_token(request.refresh_token, token_type="refresh")
        
        # Create new tokens
        access_token, refresh_token = create_tokens({
            "email": token_data.email,
            "sub": token_data.sub,
            "role": token_data.role,
            "permissions": token_data.permissions
        })
        
        return TokenResponse(
            access_token=access_token,
            refresh_token=refresh_token,
            expires_in=30 * 60  # 30 minutes in seconds
        )
    except HTTPException as e:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Invalid refresh token",
            headers={"WWW-Authenticate": "Bearer"},
        ) 