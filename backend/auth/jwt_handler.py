from jose import JWTError, jwt, jwk
from datetime import datetime, timedelta
from typing import Optional, Tuple
from fastapi import HTTPException, status
from pydantic import BaseModel
import os
from dotenv import load_dotenv
import requests

# Load environment variables
load_dotenv()

# Auth0 configuration
AUTH0_DOMAIN = os.getenv("AUTH0_DOMAIN", "dev-ubo0g2c0zsh6ujtu.us.auth0.com") # Replace with your Auth0 domain
AUTH0_API_AUDIENCE = os.getenv("AUTH0_API_AUDIENCE", "https://dev-ubo0g2c0zsh6ujtu.us.auth0.com/api/v2/") # Replace with your Auth0 API Audience

# Security configuration (These might be used for internal token generation if needed)
SECRET_KEY = os.getenv("SECRET_KEY", "your-internal-secret-key-here")
ALGORITHM = os.getenv("ALGORITHM", "HS256")
ACCESS_TOKEN_EXPIRE_MINUTES = int(os.getenv("ACCESS_TOKEN_EXPIRE_MINUTES", "30"))
REFRESH_TOKEN_EXPIRE_DAYS = int(os.getenv("REFRESH_TOKEN_EXPIRE_DAYS", "7"))

# Fetch Auth0 JWKS
def get_auth0_jwks():
    jwks_url = f"https://{AUTH0_DOMAIN}/.well-known/jwks.json"
    try:
        response = requests.get(jwks_url)
        response.raise_for_status()
        return response.json()
    except requests.exceptions.RequestException as e:
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail=f"Could not fetch Auth0 JWKS: {e}"
        )

jwks = get_auth0_jwks()

class TokenData(BaseModel):
    email: Optional[str] = None
    sub: Optional[str] = None
    role: Optional[str] = None
    permissions: Optional[list[str]] = None

class TokenResponse(BaseModel):
    access_token: str
    refresh_token: str
    token_type: str = "bearer"
    expires_in: int

# (Keep create_tokens and create_token functions if you need internal token generation later)
def create_tokens(data: dict) -> Tuple[str, str]:
    """Create both access and refresh tokens"""
    access_token_expires = timedelta(minutes=ACCESS_TOKEN_EXPIRE_MINUTES)
    refresh_token_expires = timedelta(days=REFRESH_TOKEN_EXPIRE_DAYS)
    
    # Create access token
    access_token = create_token(
        data=data,
        expires_delta=access_token_expires,
        token_type="access"
    )
    
    # Create refresh token
    refresh_token = create_token(
        data=data,
        expires_delta=refresh_token_expires,
        token_type="refresh"
    )
    
    return access_token, refresh_token

def create_token(data: dict, expires_delta: timedelta, token_type: str) -> str:
    """Create a JWT token"""
    to_encode = data.copy()
    expire = datetime.utcnow() + expires_delta
    
    to_encode.update({
        "exp": expire,
        "type": token_type,
        "iat": datetime.utcnow()
    })
    
    return jwt.encode(to_encode, SECRET_KEY, algorithm=ALGORITHM)

def verify_auth0_token(token: str) -> TokenData:
    """Verify an Auth0 JWT token using JWKS"""
    try:
        # Get the key ID from the token header
        header = jwt.get_unverified_header(token)
        kid = header.get("kid")
        if not kid:
             raise HTTPException(
                status_code=status.HTTP_401_UNAUTHORIZED,
                detail="Invalid authentication credentials - missing kid",
                headers={"WWW-Authenticate": "Bearer"},
            )
        
        # Find the matching key in the JWKS
        matching_key = next((key for key in jwks["keys"] if key["kid"] == kid), None)
        if not matching_key:
            raise HTTPException(
                status_code=status.HTTP_401_UNAUTHORIZED,
                detail="Invalid authentication credentials - key not found",
                headers={"WWW-Authenticate": "Bearer"},
            )
            
        # Create a key object from the matching key
        public_key = jwk.construct(matching_key)
        
        # Decode and verify the token
        payload = jwt.decode(
            token,
            public_key,
            algorithms=["RS256"], # Auth0 typically uses RS256
            audience=AUTH0_API_AUDIENCE,
            issuer=f"https://{AUTH0_DOMAIN}/"
        )
        
        email: str = payload.get("email")
        sub: str = payload.get("sub")
        role: str = payload.get("https://your-app-namespace/role", "user") # Adjust namespace if you have custom claims
        permissions: list[str] = payload.get("https://your-app-namespace/permissions", []) # Adjust namespace
        
        if email is None or sub is None:
            raise HTTPException(
                status_code=status.HTTP_401_UNAUTHORIZED,
                detail="Invalid authentication credentials",
                headers={"WWW-Authenticate": "Bearer"},
            )
            
        return TokenData(
            email=email,
            sub=sub,
            role=role,
            permissions=permissions
        )
        
    except JWTError as e:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail=f"Invalid authentication credentials: {e}",
            headers={"WWW-Authenticate": "Bearer"},
        )
    except Exception as e:
         raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail=f"An unexpected error occurred during token verification: {e}"
        )

# Keep the original verify_token function if you still need it for internal tokens
def verify_token(token: str, token_type: str = "access") -> TokenData:
    """Verify a JWT token (potentially for internal tokens)"""
    try:
        payload = jwt.decode(token, SECRET_KEY, algorithms=[ALGORITHM])
        
        # Verify token type
        if payload.get("type") != token_type:
            raise HTTPException(
                status_code=status.HTTP_401_UNAUTHORIZED,
                detail="Invalid token type",
                headers={"WWW-Authenticate": "Bearer"},
            )
        
        # Check if token is expired
        exp = payload.get("exp")
        if exp is None or datetime.utcnow() > datetime.fromtimestamp(exp):
            raise HTTPException(
                status_code=status.HTTP_401_UNAUTHORIZED,
                detail="Token has expired",
                headers={"WWW-Authenticate": "Bearer"},
            )
        
        email: str = payload.get("email")
        sub: str = payload.get("sub")
        role: str = payload.get("role", "user")
        permissions: list[str] = payload.get("permissions", [])
        
        if email is None or sub is None:
            raise HTTPException(
                status_code=status.HTTP_401_UNAUTHORIZED,
                detail="Invalid authentication credentials",
                headers={"WWW-Authenticate": "Bearer"},
            )
            
        return TokenData(
            email=email,
            sub=sub,
            role=role,
            permissions=permissions
        )
    except JWTError:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Invalid authentication credentials",
            headers={"WWW-Authenticate": "Bearer"},
        ) 