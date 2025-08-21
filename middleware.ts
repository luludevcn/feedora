import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
    const token = request.cookies.get('token')?.value;
    const { pathname } = request.nextUrl;

    // 保护的路由
    const protectedRoutes = ['/dashboard', '/profile'];
    const isProtectedRoute = protectedRoutes.some(route =>
        pathname.startsWith(route)
    );

    if (isProtectedRoute && !token) {
        return NextResponse.redirect(new URL('/login', request.url));
    }

    if (token) {
        // const user = verifyToken(token);
        // if (!user && isProtectedRoute) {
        //     const response = NextResponse.redirect(new URL('/login', request.url));
        //     response.cookies.delete('token');
        //     return response;
        // }
    }

    return NextResponse.next();
}

export const config = {
    matcher: ['/dashboard/:path*', '/profile/:path*']
};