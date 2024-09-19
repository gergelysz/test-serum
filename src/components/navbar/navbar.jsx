'use client';

import React, { useEffect, useState } from 'react';
import FlyoutLink from './flyout-link.jsx';
import FlyoutProducts from './content/flyout-products.jsx';
import FlyoutBlogs from './content/flyout-blogs.jsx';
import FlyoutAbout from './content/flyout-about.jsx';
import FlyoutOrders from './content/flyout-orders.jsx';
import FlyoutUser from './content/flyout-user.jsx';
import { FaUserLarge } from 'react-icons/fa6';
import { Toaster } from 'react-hot-toast';
import { auth } from '@/lib/firebase/config.js';
import { useRouter } from 'next/navigation';
import { getCookie } from 'cookies-next';
import { onAuthStateChanged } from 'firebase/auth';

const Navbar = () => {
	const [isScrolled, setIsScrolled] = useState(false);
	const [userEmail, setUserEmail] = useState(null);

	useEffect(() => {
		const unsubscribe = onAuthStateChanged(auth, (user) => {
			if (user) {
				// User is signed in, get the user's email
				setUserEmail(user.email);
			} else {
				// User is signed out
				setUserEmail(null);
			}
		});

		const handleScroll = () => {
			setIsScrolled(window.scrollY > 0);
		};

		window.addEventListener('scroll', handleScroll);
		return () => {
			unsubscribe();
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	return (
		<>
			<Toaster
				position='top-center'
				reverseOrder={false}
				toastOptions={{
					style: {
						background: '#5c6f41',
						color: '#fff',
						borderRadius: '8px',
						padding: '16px',
						borderColor: '#fff',
						border: 1,
					},
				}}
			/>
			<div
				className={`z-50 fixed top-0 left-0 w-full flex justify-center px-3 py-6 transition-colors duration-300 ${
					isScrolled ? 'bg-secondary/70 shadow-lg' : 'bg-secondary'
				} text-base xs:text-xs sm:text-base lg:text-base h-20`}>
				<div className='flex flex-row items-center space-x-2 sm:space-x-5'>
					<FlyoutLink href='/'>Home</FlyoutLink>
					<FlyoutLink href='/products/' FlyoutContent={FlyoutProducts}>
						Products
					</FlyoutLink>
					<FlyoutLink href='/blogs/' FlyoutContent={FlyoutBlogs}>
						Blogs
					</FlyoutLink>
					<FlyoutLink href='/about/' FlyoutContent={FlyoutAbout}>
						About
					</FlyoutLink>
					<FlyoutLink href='/orders/' FlyoutContent={FlyoutOrders}>
						Orders
					</FlyoutLink>
					<FlyoutLink href='/user/' FlyoutContent={FlyoutUser}>
						<div className='flex flex-row space-x-2'>
							<div>
								<FaUserLarge />
							</div>
							{userEmail && <div>{userEmail}</div>}
						</div>
					</FlyoutLink>
				</div>
			</div>
		</>
	);
};

export default Navbar;
