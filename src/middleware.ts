import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(_request: NextRequest) {
  // 🟡 DEMO MODE: Auth guard is disabled for client demo access.
  // To re-enable auth protection, uncomment the block below.
  
  // const authCookie = request.cookies.get('user-session')
  // if (!authCookie && request.nextUrl.pathname.startsWith('/admin')) {
  //   return NextResponse.redirect(new URL('/login', request.url))
  // }

  return NextResponse.next()
}

export const config = {
  matcher: ['/admin/:path*'],
}
