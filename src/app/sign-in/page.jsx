'use client';

import React, { useState } from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { auth } from '../../lib/firebase/config.js';
import { useRouter } from 'next/navigation';
import { getCookie, setCookie } from 'cookies-next';
import toast from 'react-hot-toast';

const SignIn = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [signInWithEmailAndPassword] = useSignInWithEmailAndPassword(auth);
	const router = useRouter();

	const handleSignIn = async () => {
		try {
			const res = await signInWithEmailAndPassword(email, password);
			const token = await res.user.getIdToken();
			setEmail('');
			setPassword('');
			// Set the authentication token as a cookie
			setCookie('auth_token', token, {
				maxAge: 24 * 60 * 60, // 1 day in seconds
				// httpOnly: true,
				secure: true,
				sameSite: 'Strict',
			});
			toast('Welcome back ' + res.user.email + '!', { duration: 1000 });
			console.log('SignIn - token: ' + getCookie('auth_token'));
			setTimeout(() => {
				router.push('/');
			}, 1000);
		} catch (e) {
			console.error('Error logging in: ' + e);
		}
	};

	return (
		<div className='min-h-screen flex items-center justify-center bg-green-900'>
			<div className='bg-green-800 p-10 rounded-lg shadow-xl w-96'>
				<h1 className='text-white text-2xl mb-5'>Sign In</h1>
				<input type='email' placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} className='w-full p-3 mb-4 bg-emerald-950 rounded outline-none text-white placeholder-green-700' />
				<input type='password' placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} className='w-full p-3 mb-4 bg-emerald-950 rounded outline-none text-white placeholder-green-700' />
				<button onClick={handleSignIn} className='w-full p-3 bg-emerald-950/80 rounded text-white hover:bg-emerald-950/20 transition duration-200'>
					Sign In
				</button>
			</div>
		</div>
	);
};

export default SignIn;
