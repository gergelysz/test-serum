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

const Navbar = () => {
	const [isScrolled, setIsScrolled] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			setIsScrolled(window.scrollY > 0);
		};

		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	return (
		<>
			<Toaster
				position='top-center'
				reverseOrder={false}
				toastOptions={{
					style: {
						background: '#313a23',
						color: '#fff',
						borderRadius: '8px',
						padding: '16px',
						borderColor: '#fff',
						border: 1,
					},
				}}
			/>
			<div className={`z-50 fixed top-0 left-0 w-full flex justify-center px-3 py-6 space-x-5 transition-colors duration-300 ${isScrolled ? 'bg-[#444f32]/70 shadow-lg' : 'bg-[#444f32]'}`}>
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
					<FaUserLarge />
				</FlyoutLink>
			</div>
		</>
	);
};

export default Navbar;
