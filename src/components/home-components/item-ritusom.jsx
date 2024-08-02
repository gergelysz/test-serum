import React from 'react';
import ResponsiveImage from '@/components/responsive-image.jsx';
import homeImage from '../../../public/teglalap/1.png';
import { motion } from 'framer-motion';

function ItemRitusom() {
	return (
		<motion.div
			initial={{ opacity: 0.2 }} // Initial state (hidden)
			animate={{ opacity: 1 }} // Animation state (visible)
			transition={{ duration: 1 }} // Duration of the animation
			className='min-h-full min-w-full flex flex-row'
		>
			<div className='w-1/2 xs:w-full lg:w-1/2 p-0'>
				<ResponsiveImage src={homeImage} alt='Home page image'>
					<p className='text-7xl xs:text-7xl sm:text-7xl md:text-7xl lg:text-7xl font-bold m-3'>Rítusom</p>
					<p className='text-3xl xs:text-xl sm:text-2xl md:text-3xl lg:text-3xl'>Your personalized skincare ritual</p>
				</ResponsiveImage>
			</div>
			<div className='w-1/2 xs:w-1/6 sm:w-1/6 lg:w-1/2 p-4 xs:p-0 md:p-4'>
				<div className='h-full flex flex-col items-center justify-center text-center xs:invisible lg:visible'>
					<p className='text-7xl xs:text-2xl sm:text-3xl md:text-5xl lg:text-7xl font-bold m-3'>Rítusom</p>
					<p className='text-3xl xs:text-xs sm:text-sm md:text-xl lg:text-3xl'>Your personalized skincare ritual</p>
				</div>
			</div>
		</motion.div>
	);
}

export default ItemRitusom;
