'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { auth } from '../../lib/firebase/config.js';

const SignUpPage = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [createUserWithEmailAndPassword] = useCreateUserWithEmailAndPassword(auth);
	const router = useRouter();

	const handleSignUp = async () => {
		try {
			const res = await createUserWithEmailAndPassword(email, password);
			console.log({ res });
			console.log(res);
			// sessionStorage.setItem('user', res);
			setEmail('');
			setPassword('');
			// Set the authentication token as a cookie
			const oneDay = 24 * 60 * 60 * 1000;
			cookies().set('auth_token', token, { expires: Date.now() - oneDay, secure: true, sameSite: 'Strict' });
			router.push('/');
		} catch (e) {
			console.error(e);
		}
	};

	return (
		<div className='min-h-screen flex items-center justify-center bg-secondary-darkest'>
			<div className='bg-secondary-darker p-10 rounded-lg shadow-xl w-96'>
				<h1 className='text-white text-2xl mb-5'>Sign Up</h1>
				<input
					type='email'
					placeholder='Email'
					value={email}
					onChange={(e) => setEmail(e.target.value)}
					className='w-full p-3 mb-4 bg-secondary rounded outline-none text-white placeholder-white'
				/>
				<input
					type='password'
					placeholder='Password'
					value={password}
					onChange={(e) => setPassword(e.target.value)}
					className='w-full p-3 mb-4 bg-secondary rounded outline-none text-white placeholder-white'
				/>
				<button
					onClick={handleSignUp}
					className='w-full p-3 bg-secondary rounded text-white hover:bg-secondary-darkest transition duration-200'>
					Sign Up
				</button>
			</div>
		</div>
	);
};

export default SignUpPage;
