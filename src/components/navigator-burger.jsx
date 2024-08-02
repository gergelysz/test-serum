'use client';

import React, { useState } from 'react';
import BurgerIcon from './burger-icon.js';
import Link from 'next/link.js';
import { motion } from 'framer-motion';
import { auth } from '../lib/firebase/config.js';
import { useAuthState } from 'react-firebase-hooks/auth';
import { signOut } from 'firebase/auth';
import { getCookie, setCookie } from 'cookies-next';
import toast, { Toaster } from 'react-hot-toast';
import { FaHome, FaPen, FaShoppingCart } from 'react-icons/fa';
import { RiPresentationFill } from 'react-icons/ri';
import { MdOutlineLocalOffer } from 'react-icons/md';
import { IoIosContact } from 'react-icons/io';
import { PiSignIn, PiSignOut } from 'react-icons/pi';
import { IoCreate } from 'react-icons/io5';

const NavigatorBurger = () => {
	const [user] = useAuthState(auth);
	const [isOpen, setIsOpen] = useState(false);

	const handleToggle = () => {
		setIsOpen(!isOpen);
	};

	const handleSignOut = (e) => {
		toast('Signed out', { duration: 1000 });
		signOut(auth);
		sessionStorage.removeItem('user');
		setCookie('auth_token', '', {
			maxAge: 0,
		});
		setIsOpen((isOpen) => !isOpen);
	};

	return (
		<div className='relative z-10'>
			<div className='absolute top-4 right-4'>
				<Toaster position='top-center' reverseOrder={false} />
				<button onClick={handleToggle} aria-label='Toggle menu'>
					<BurgerIcon />
				</button>
			</div>

			{isOpen && (
				<motion.div
					initial={{ opacity: 0.2 }} // Initial state (hidden)
					animate={{ opacity: 1 }} // Animation state (visible)
					transition={{ duration: 0.5 }} // Duration of the animation
					className='absolute top-0 right-0 mt-12 bg-orange-100/95 shadow-2xl rounded-lg text-black'
				>
					<ul className='flex flex-col p-3'>
						<li className='p-2 hover:bg-orange-300/20 flex flex-row items-center rounded-lg'>
							<FaHome />
							<Link href='/' onClick={handleToggle} className='flex items-center  p-2'>
								Home
							</Link>
						</li>
						<li className='p-2 hover:bg-orange-300/20 flex flex-row items-center rounded-lg'>
							<FaShoppingCart />
							<Link href='/products' onClick={handleToggle} className='flex items-center p-2'>
								Products
							</Link>
						</li>
						<li className='p-2 hover:bg-orange-300/20 flex flex-row items-center rounded-lg'>
							<FaPen />
							<Link href='/blogs' onClick={handleToggle} className='flex items-center p-2'>
								Blogs
							</Link>
						</li>
						<li className='p-2 hover:bg-orange-300/20 flex flex-row items-center rounded-lg'>
							<RiPresentationFill />
							<Link href='/about' onClick={handleToggle} className='flex items-center p-2'>
								About
							</Link>
						</li>
						<li className='p-2 hover:bg-orange-300/20 flex flex-row items-center rounded-lg'>
							<MdOutlineLocalOffer />
							<Link href='/services' onClick={handleToggle} className='flex items-center p-2'>
								Services
							</Link>
						</li>
						<li className='p-2 hover:bg-orange-300/20 flex flex-row items-center rounded-lg'>
							<IoIosContact />
							<Link href='/contact' onClick={handleToggle} className='flex items-center p-2'>
								Contact
							</Link>
						</li>
						{!user && (
							<li className='p-2 hover:bg-orange-300/20 flex flex-row items-center rounded-lg'>
								<PiSignIn />
								<Link href='/sign-in' onClick={handleToggle} className='flex items-center p-2'>
									Sign In
								</Link>
							</li>
						)}
						{user && (
							<li className='p-2 hover:bg-orange-300/20 flex flex-row items-center rounded-lg'>
								<PiSignOut />
								<Link
									href='/'
									onClick={(e) => {
										handleSignOut(e);
									}}
									className='flex items-center p-2'
								>
									Sign Out
								</Link>
							</li>
						)}
						{!user && (
							<li className='p-2 hover:bg-orange-300/20 flex flex-row items-center rounded-lg'>
								<IoCreate />
								<Link href='/sign-up' onClick={handleToggle} className='flex items-center p-2'>
									Sign Up
								</Link>
							</li>
						)}
					</ul>
				</motion.div>
			)}
		</div>
	);
};

export default NavigatorBurger;
