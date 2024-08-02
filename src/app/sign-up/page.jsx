'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import Head from 'next/head';
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
			sessionStorage.setItem('user', res);
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
		<div className='min-h-screen flex items-center justify-center bg-gray-900'>
			<div className='bg-gray-800 p-10 rounded-lg shadow-xl w-96'>
				<h1 className='text-white text-2xl mb-5'>Sign Up</h1>
				<input type='email' placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} className='w-full p-3 mb-4 bg-gray-700 rounded outline-none text-white placeholder-gray-500' />
				<input type='password' placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} className='w-full p-3 mb-4 bg-gray-700 rounded outline-none text-white placeholder-gray-500' />
				<button onClick={handleSignUp} className='w-full p-3 bg-indigo-600 rounded text-white hover:bg-indigo-500'>
					Sign Up
				</button>
			</div>
		</div>
	);

	// return (
	// 	<div className='flex items-center justify-center min-h-screen bg-gray-100'>
	// 		<Head>
	// 			<title>Sign Up</title>
	// 		</Head>
	// 		<motion.div className='p-8 bg-white shadow-lg rounded-md w-full max-w-md' initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
	// 			<h1 className='text-3xl font-semibold text-center mb-6'>Sign Up</h1>
	// 			<form>
	// 				<motion.div className='mb-4' initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}>
	// 					{/* <label className='block mb-2 text-sm font-medium text-gray-600'>Email</label> */}
	// 					<input type='email' className='w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500' placeholder='Enter your email' value={email} onChange={(e) => setEmail(e.target.value)} />
	// 				</motion.div>
	// 				<motion.div className='mb-4' initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}>
	// 					{/* <label className='block mb-2 text-sm font-medium text-gray-600'>Password</label> */}
	// 					<input type='password' className='w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500' placeholder='Enter your password' value={password} onChange={(e) => setPassword(e.target.value)} />
	// 				</motion.div>
	// 				<motion.div className='mb-4' initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }}>
	// 					{/* <label className='block mb-2 text-sm font-medium text-gray-600'>Confirm Password</label> */}
	// 					<input type='password' className='w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500' placeholder='Confirm your password' />
	// 				</motion.div>
	// 				<button
	// 					type='submit'
	// 					className='w-full p-2 text-white bg-indigo-600 rounded-md hover:bg-indigo-700'
	// 					// whileHover={{ scale: 1.05 }}
	// 					// whileTap={{ scale: 0.95 }}
	// 					// initial={{ opacity: 0 }}
	// 					// animate={{ opacity: 1 }}
	// 					// transition={{ delay: 0.5 }}
	// 					// onClick={handleSignUp}
	// 				>
	// 					Sign Up
	// 				</button>
	// 			</form>
	// 		</motion.div>
	// 	</div>
	// );
};

export default SignUpPage;
