import { NextRequest, NextResponse } from 'next/server';

export default async function middleware(req: NextRequest) {
  const origin = req.nextUrl.origin;
  const pathname = req.nextUrl.pathname;
  
  if (pathname === '/') {
    return NextResponse.rewrite(new URL('/writing', origin));
  }
  
  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
};
