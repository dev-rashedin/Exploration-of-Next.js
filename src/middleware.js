import { NextResponse } from 'next/server';

export function middleware(request) {
  if (request.nextUrl.pathname.startsWith('/about')) {
    
    return NextResponse.rewrite(new URL('/dashboard', request.url));
  }
  if (request.nextUrl.pathname.startsWith('/dashboard')) {
    
    return NextResponse.rewrite(new URL('/about', request.url));
  }
}

export const config = {
  matcher: ['/about', '/dashboard'],
};