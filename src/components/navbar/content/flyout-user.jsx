import React from 'react';
import { signOut } from 'firebase/auth';
import { auth } from '@/lib/firebase/config.js';
import Link from 'next/link';
import toast from 'react-hot-toast';
import { getCookie, deleteCookie } from 'cookies-next';

const FlyoutUser = () => {
	const handleSignOut = (e) => {
		toast('Signed out', { duration: 1000 });
		signOut(auth);
		deleteCookie('auth_token');
		// setIsAuthenticated(false);
	};

	return (
		<div className='w-64 bg-secondary p-6 shadow-xl text-white/70'>
			<div className='mb-3 space-y-3'>
				<h3 className='font-semibold text-white/80'>User</h3>
				{getCookie('auth_token') && (
					<>
						<Link href='/admin/profile' className='block text-sm hover:underline font-semibold'>
							Profile
						</Link>
						<Link href='/blogs/admin/' className='block text-sm hover:underline font-semibold text-gray-900/80'>
							Blogs ADMIN page
						</Link>
						<Link href='/products/admin/' className='block text-sm hover:underline font-semibold text-gray-900/80'>
							Products ADMIN page
						</Link>
					</>
				)}
				{getCookie('auth_token') ? (
					<Link
						href='/'
						onClick={(e) => {
							handleSignOut(e);
						}}
						className='block text-sm hover:underline'
					>
						Sign Out
					</Link>
				) : (
					<>
						<Link href='/sign-in/' className='block text-sm hover:underline'>
							Sign In
						</Link>
						<Link href='/sign-up/' className='block text-sm hover:underline'>
							Sign Up
						</Link>
					</>
				)}
			</div>
		</div>
	);
};

export default FlyoutUser;
