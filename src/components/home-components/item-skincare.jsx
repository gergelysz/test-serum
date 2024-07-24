import React from 'react';
import Image from 'next/image';
import serumsImage from '../../../public/kerek/1.png';
import creamsAndLotionsImage from '../../../public/kerek/2.png';
import faceSculptingAccImage from '../../../public/kerek/3.png';
import { motion } from 'framer-motion';

function ItemSkinCare() {
	return (
		<motion.div
			initial={{ opacity: 0.2 }} // Initial state (hidden)
			animate={{ opacity: 1 }} // Animation state (visible)
			transition={{ duration: 1 }} // Duration of the animation
			className='min-h-screen flex flex-col items-center justify-center space-y-8 xs:space-y-1 sm:space-y-2 md:space-y-5 lg:space-y-8 my-0 py-2'
		>
			{/* Title for the SkinCare page */}
			<div className='flex items-center justify-center h-32 xs:h-10 sm:h-14 md:h-24 lg:h-32 w-full'>
				<p className='m-10 xs:m-2 sm:m-5 md:m-10 lg:m-10 text-5xl xs:text-xl sm:text-2xl md:text-3xl lg:text-5xl tracking-tight text-center'>Sticking to a skincare routine has never been easier!</p>
			</div>
			{/* Container for the three items with images */}
			<div className='flex flex-row xs:flex-col sm:flex-col md:flex-row lg:flex-row w-full min-h-fit space-x-4'>
				<div className='min-h-fit flex flex-1 flex-col items-center justify-center'>
					<Image src={serumsImage} alt='Serums image' className='w-fit xs:w-28 sm:w-36 md:w-52 lg:w-80' />
					<p className='p-4 m-4 text-2xl xs:text-base sm:text-lg md:text-xl lg:text-2xl font-semibold'>Serums</p>
					<p className='w-1/3 text-base xs:text-xs sm:text-xs md:text-sm lg:text-base text-center'>There is just enough space here for several lines of text. Use it well.</p>
				</div>
				<div className='min-h-fit flex flex-1 flex-col items-center justify-center mt-10'>
					<Image src={creamsAndLotionsImage} alt='Creams and lotions image' className='w-fit xs:w-28 sm:w-36 md:w-52 lg:w-80' />
					<p className='p-4 m-4 text-2xl xs:text-base sm:text-lg md:text-xl lg:text-2xl font-semibold'>Creams and Lotions</p>
					<p className='w-1/3 text-base xs:text-xs sm:text-xs md:text-sm lg:text-base text-center'>There is just enough space here for several lines of text. Use it well.</p>
				</div>
				<div className='min-h-fit flex flex-1 flex-col items-center justify-center mt-10'>
					<Image src={faceSculptingAccImage} alt='Face sculpting acc image' className='w-fit xs:w-28 sm:w-36 md:w-52 lg:w-80' />
					<p className='p-4 m-4 text-2xl xs:text-base sm:text-lg md:text-xl lg:text-2xl font-semibold'>Face Sculpting Accessories</p>
					<p className='w-1/3 text-base xs:text-xs sm:text-xs md:text-sm lg:text-base text-center'>There is just enough space here for several lines of text. Use it well.</p>
				</div>
			</div>
		</motion.div>
	);
}

export default ItemSkinCare;
