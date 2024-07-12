import React from 'react';
import Image from 'next/image';
import { CustomButton } from '../cust-button';
import aboutUsImage from '../../../public/teglalap/3.png';
import { motion } from 'framer-motion';

function HomeItem3AboutUs() {
	const openYouTube = () => {
		// Define the YouTube URL
		const youtubeUrl = 'https://www.youtube.com/watch?v=dQw4w9WgXcQ';

		// Open the YouTube URL in a new tab
		window.open(youtubeUrl, '_blank');
	};

	return (
		<motion.div
			initial={{ opacity: 0.2 }} // Initial state (hidden)
			animate={{ opacity: 1 }} // Animation state (visible)
			transition={{ duration: 1 }} // Duration of the animation
			className='min-h-screen min-w-full flex flex-row'
		>
			{/* About us description */}
			<div className='w-4/6'>
				<div className='flex flex-col p-20 xs:p-10 sm:p-12 md:p-14 lg:p-20 ml-44 xs:ml-5 sm:ml-10 md:ml-32 lg:ml-44'>
					<p className='text-4xl xs:text-sm sm:text-xl md:text-2xl lg:text-6xl font-bold w-fit p-2 mb-6 font-sans'>About us</p>
					<p className='mt-5 mb-5 w-2/3 xs:w-11/12 sm:w-11/12 md:w-11/12 lg:w-2/3 text-2xl xs:text-xs sm:text-sm md:text-base lg:text-2xl'>
						At <i>Rítusom</i>, we believe in the power of <b>simplicity and purity</b>.
					</p>
					<p className='mt-5 mb-5 w-2/3 xs:w-11/12 sm:w-11/12 md:w-11/12 lg:w-2/3 text-2xl xs:text-xs sm:text-sm md:text-base lg:text-2xl'>
						We offer <b>100% clean</b> skincare products that are tailored to your unique skin type and concerns, making it effortless to create a <b>personalized skincare ritual</b>.
					</p>
					<p className='mt-5 mb-5 w-2/3 xs:w-11/12 sm:w-11/12 md:w-11/12 lg:w-2/3 text-2xl xs:text-xs sm:text-sm md:text-base lg:text-2xl'>
						Embrace the beauty of natural, effective skincare with <b>monthly packages</b> designed just for you. Your journey to <b>radiant, healthy skin starts here</b>.
					</p>
					<CustomButton text={'Learn More About Us'} onClick={openYouTube} />
				</div>
			</div>
			{/* About us image */}
			<div className='w-2/6'>
				<div className='min-h-fit flex items-center justify-center p-20 xs:p-0 sm:p-2 md:p-10 lg:p-20'>
					<Image className='p-5 mr-32 xs:mr-2 sm:mr-4 md:mr-16 lg:mr-32' src={aboutUsImage} alt='About us image' />
				</div>
			</div>
		</motion.div>
	);
}

export default HomeItem3AboutUs;
