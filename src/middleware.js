// import createMiddleware from 'next-intl/middleware';

// export default createMiddleware({
// 	locales: ['en', 'hu', 'ro'],
// 	defaultLocale: 'en',
// });

// export const config = {
// 	matcher: ['/((?!api|_next|.*\\..*).*)'],
// };

import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';

export function middleware(request) {
	console.log('running');
	const { pathname } = request.nextUrl;
	const cookieStore = cookies();
	const authToken = cookieStore.get('auth_token');

	console.log('middleware - path name: ' + pathname);
	console.log('middleware - nextUrl: ' + request.nextUrl);
	console.log('middleware - request: ' + JSON.stringify(request));
	console.log('middleware - authToken: ' + JSON.stringify(authToken));
	console.log('middleware - authToken boolean: ' + (authToken ? 'true' : 'false'));

	// Restrict access to the /blog/admin route
	if (pathname.startsWith('/blog/admin') || pathname.startsWith('/products/admin')) {
		if (!authToken) {
			// Redirect to login page if auth_token is not present
			console.log('redirecting');
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
	matcher: ['/blog/admin/:path*', '/products/admin:path*', '/sign-in/:path*', '/sign-up/:path*'],
};
