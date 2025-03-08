import { NextResponse, NextRequest } from 'next/server';
import { cookies } from 'next/headers';

export async function GET(request: NextRequest) {
  try {
    // Extract the authorization code from the URL query parameters
    const searchParams = request.nextUrl.searchParams;
    const code = searchParams.get('code');
    
    if (!code) {
      return NextResponse.redirect(new URL('/auth/signin?error=NoCodeProvided', request.url));
    }

    // Forward the code to your Django backend
    const response = await fetch(`${process.env.BACKEND_URL}/accounts/github/callback/?code=${code}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      console.error('Error from backend:', await response.text());
      return NextResponse.redirect(new URL('/auth/signin?error=BackendError', request.url));
    }

    // Parse the response from your Django backend
    const data = await response.json();
    
    // Store tokens in cookies (use secure cookies in production)
    const cookieStore = cookies();
    (await cookieStore).set('access_token', data.tokens.access, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      maxAge: 60 * 60, // 1 hour
      path: '/',
    });
    (await cookieStore).set('refresh_token', data.tokens.refresh, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      maxAge: 7 * 24 * 60 * 60, // 7 days
      path: '/',
    });
    
    // Redirect to dashboard or home page after successful authentication
    return NextResponse.redirect(new URL('/dashboard', request.url));
  } catch (error) {
    console.error('Error in GitHub OAuth callback:', error);
    return NextResponse.redirect(new URL('/auth/signin?error=ServerError', request.url));
  }
}