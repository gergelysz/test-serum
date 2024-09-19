'use client';

import React, { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

// Custom hook to detect mobile screens
const useIsMobile = () => {
	const [isMobile, setIsMobile] = useState(false);

	useEffect(() => {
		const handleResize = () => {
			setIsMobile(window.innerWidth <= 768); // Adjust the width based on your design
		};

		window.addEventListener('resize', handleResize);
		handleResize(); // Check on component mount

		return () => {
			window.removeEventListener('resize', handleResize);
		};
	}, []);

	return isMobile;
};

const FlyoutLink = ({ children, href, FlyoutContent }) => {
	const [open, setOpen] = useState(false);
	const isMobile = useIsMobile();

	// For mobile, we toggle on click, for desktop we use hover
	const handleToggle = () => {
		if (isMobile) {
			setOpen(!open);
		}
	};

	return (
		<div
			onMouseEnter={() => !isMobile && setOpen(true)}
			onMouseLeave={() => !isMobile && setOpen(false)}
			onClick={handleToggle}
			className='relative w-fit h-fit'>
			<a href={href} className='relative text-white'>
				{children}
				<span
					style={{
						transform: open ? 'scaleX(1)' : 'scaleX(0)',
					}}
					className='absolute -bottom-2 -left-2 -right-2 h-1 origin-left scale-x-0 rounded-full bg-white transition-transform duration-300 ease-out'
				/>
			</a>

			<AnimatePresence>
				{open && FlyoutContent && !isMobile && (
					<motion.div
						initial={{ opacity: 0, y: 15 }}
						animate={{ opacity: 1, y: 0 }}
						exit={{ opacity: 0, y: 15 }}
						style={{ translateX: '-50%' }}
						transition={{ duration: 0.3, ease: 'easeOut' }}
						className='absolute left-1/2 top-12 bg-secondary-darker text-black z-50'>
						<div className='absolute -top-6 left-0 right-0 h-6 bg-transparent' />
						<div className='absolute left-1/2 top-0 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rotate-45 bg-secondary-darker' />
						<FlyoutContent />
					</motion.div>
				)}
			</AnimatePresence>
		</div>
	);
};

export default FlyoutLink;
