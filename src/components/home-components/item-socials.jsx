import React from 'react';
import SocialIcons from '../social-icons.jsx';
import { CustomButton } from '../cust-button';
import { motion } from 'framer-motion';

function ItemSocials() {
	return (
		<motion.div
			initial={{ opacity: 0.2 }} // Initial state (hidden)
			animate={{ opacity: 1 }} // Animation state (visible)
			transition={{ duration: 1 }} // Duration of the animation
			className='min-h-fit min-w-full flex mt-40 xs:mt-5 sm:mt-7 md:mt-20 lg:mt-40'
		>
			<div className='w-3/6 p-0'>
				<div className='flex items-center justify-center p-24 sm:p-10 md:p-16 lg:p-24'>
					<div className='text-left'>
						<p className='text-4xl xs:text-sm sm:text-base md:text-2xl lg:4xl font-bold mb-10 xs:mb-5 sm:mb-5 md:mb-8 lg:mb-10'>We offer you a 10% discount for your first month with Rítusom.</p>
						<SocialIcons />
					</div>
				</div>
			</div>
			<div className='w-3/6 p-0'>
				<div className='flex flex-col items-center justify-center p-24 xs:p-2 md:p-24 mt-0 xs:mt-20 sm:mt-10 md:mt-0'>
					<CustomButton text={'Enjoy Your First Ritual!'} />
					<p className='text-lg xs:text-xs sm:text-sm md:text-base lg:text-lg font-sans font-bold mt-5'>www.ritusom.com</p>
				</div>
			</div>
		</motion.div>
	);
}

export default ItemSocials;
