'use client';

import React, { useState } from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { auth } from '../../lib/firebase/config.js';
import { useRouter } from 'next/navigation';
import { getCookie, setCookie } from 'cookies-next';
import toast, { Toaster } from 'react-hot-toast';
import { Button } from '@/components/ui/button.jsx';

const SignIn = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [signInWithEmailAndPassword] = useSignInWithEmailAndPassword(auth);
	const router = useRouter();

	const handleSignIn = async () => {
		try {
			const res = await signInWithEmailAndPassword(email, password);
			const token = res.user.uid;
			sessionStorage.setItem('user', res);
			setEmail('');
			setPassword('');
			// Set the authentication token as a cookie
			setCookie('auth_token', token, {
				maxAge: 24 * 60 * 60, // 1 day in seconds
				secure: true,
				sameSite: 'Strict',
			});
			toast('Signed in successfully', { duration: 1000 });
			setTimeout(() => {
				router.push('/');
			}, 1000);
		} catch (e) {
			console.error(e);
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
				<Toaster position='top-center' reverseOrder={false} />
			</div>
		</div>
	);
};

export default SignIn;
