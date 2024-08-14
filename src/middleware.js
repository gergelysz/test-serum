import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';

export function middleware(request) {
	const { pathname } = request.nextUrl;
	const cookieStore = cookies();
	const authToken = cookieStore.get('auth_token');

	// Restrict access to the /blog/admin route
	if (pathname.startsWith('/blog/admin') || pathname.startsWith('/products/admin')) {
		if (!authToken) {
			// Redirect to login page if auth_token is not present
			return NextResponse.redirect(new URL('/sign-in', request.url));
		}
	}

	// Disable signing in or up when signed in
	if (pathname.startsWith('/sign-in') || pathname.startsWith('/sign-up')) {
		if (authToken) {
			return NextResponse.redirect(new URL('/', request.url));
		}
	}

	return NextResponse.next();
}

export const config = {
	matcher: ['/blog/admin/:path*', '/products/admin:path*', '/sign-in/:path*', '/sign-up/:path*', '/admin/:path*'],
};
