import React from 'react';
import Image from 'next/image';
import { CustomButton } from '../cust-button';
import createYourRitualImage from '../../../public/teglalap/2.png';
import { motion } from 'framer-motion';

function ItemYourRitual() {
	return (
		<motion.div
			initial={{ opacity: 0.2 }} // Initial state (hidden)
			animate={{ opacity: 1 }} // Animation state (visible)
			transition={{ duration: 1 }} // Duration of the animation
			className='min-h-screen xs:min-h-fit md:min-h-screen min-w-full flex xs:flex-col md:flex-row'
		>
			<div className='w-3/6 xs:w-5/6 sm:w-5/6 md:w-3/6 p-0'>
				<div className='min-h-full flex items-center justify-center p-24 xs:p-6'>
					<div className='text-left'>
						<p className='text-6xl xs:text-base sm:text-xl md:text-4xl lg:text-6xl font-bold m-3 mb-10'>
							Create your own ritual with <i>Rítusom</i>
						</p>
						<p className='text-2xl xs:text-xs sm:text-xs md:text-base lg:text-2xl m-3 mb-10'>
							We help you create a personalized skincare routine for you based on your test results. How do we do that? We curate your routine using products from well-known brands recognized for their clean and effective skincare
							solutions and we tailor your personalized package to your budget.
						</p>
						<CustomButton text={"Let's Create Your Ritual!"} />
					</div>
				</div>
			</div>
			<div className='w-3/6 xs:w-fit sm:w-3/6 p-0 xs:self-center md:self-start'>
				<Image src={createYourRitualImage} alt='Create your ritual image' className='p-0 xs:w-52 sm:w-fit md:w-fit lg:w-fit' />
			</div>
		</motion.div>
	);
}

export default ItemYourRitual;
