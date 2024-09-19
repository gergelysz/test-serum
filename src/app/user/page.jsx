'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { signOut } from 'firebase/auth';
import { auth } from '@/lib/firebase/config.js';
import toast from 'react-hot-toast';
import Link from 'next/link';
import { getCookie, deleteCookie } from 'cookies-next';

const UserPage = () => {
	const router = useRouter();
	const [authToken, setAuthToken] = useState(null);

	// Check for the auth token after the component mounts (client-side only)
	useEffect(() => {
		const token = getCookie('auth_token');
		setAuthToken(token);
	}, []);

	const handleSignOut = () => {
		toast('Signed out', { duration: 1000 });
		signOut(auth);
		deleteCookie('auth_token');
		router.push('/');
	};

	return (
		<div className='flex flex-col items-center space-y-8 mt-24'>
			{authToken ? (
				<button onClick={handleSignOut} className='bg-secondary hover:bg-secondary-darker px-5 py-2 text-white/80 rounded-md'>
					Sign Out
				</button>
			) : (
				<>
					<Link href='/sign-in' className='bg-secondary hover:bg-secondary-darker px-5 py-2 text-white/80 rounded-md'>
						Sign In
					</Link>
					<Link href='/sign-up' className='bg-secondary hover:bg-secondary-darker px-5 py-2 text-white/80 rounded-md'>
						Sign Up
					</Link>
				</>
			)}
		</div>
	);
};

export default UserPage;
