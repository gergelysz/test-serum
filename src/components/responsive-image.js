'use client';

import Image from 'next/image';
import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const ResponsiveImage = ({ src, alt, children }) => {
	const [isSmallScreen, setIsSmallScreen] = useState(false);

	useEffect(() => {
		const handleResize = () => {
			setIsSmallScreen(window.innerWidth < 1024);
		};

		handleResize();
		window.addEventListener('resize', handleResize);

		return () => {
			window.removeEventListener('resize', handleResize);
		};
	}, []);

	return (
		<div className={`relative ${isSmallScreen ? 'w-full h-screen' : 'w-full xs:w-10 sm:w-full md:w-full lg:w-full md:h-auto'} flex items-center justify-center overflow-hidden`}>
			<Image src={src} alt={alt} layout={isSmallScreen ? 'fill' : 'intrinsic'} objectFit={isSmallScreen ? 'cover' : 'contain'} className={`${isSmallScreen ? 'scale-100' : 'scale-100'}`} />
			{isSmallScreen && <div className='absolute inset-0 flex flex-col items-center justify-center text-center text-white p-4 bg-black bg-opacity-50'>{children}</div>}
		</div>
	);
};

ResponsiveImage.propTypes = {
	src: PropTypes.string.isRequired,
	alt: PropTypes.string.isRequired,
	children: PropTypes.node.isRequired,
};

export default ResponsiveImage;
