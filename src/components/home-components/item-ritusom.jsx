import React from 'react';
import ResponsiveImage from '@/components/responsive-image.jsx';
import homeImage from '../../../public/teglalap/1.png';
import { motion } from 'framer-motion';

function ItemRitusom() {
	return (
		<div className='min-h-full min-w-full flex flex-row'>
			<div className='w-1/2 xs:w-full lg:w-1/2 p-0'>
				<ResponsiveImage src={homeImage} alt='Home page image'>
					<motion.p initial={{ opacity: 0, y: -50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.5 }} className='text-7xl xs:text-7xl sm:text-7xl md:text-7xl lg:text-7xl font-bold m-3'>
						Rítusom
					</motion.p>
					<motion.p initial={{ opacity: 0, y: -50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.5, delay: 0.5 }} className='text-3xl xs:text-xl sm:text-2xl md:text-3xl lg:text-3xl'>
						Your personalized skincare ritual
					</motion.p>
				</ResponsiveImage>
			</div>
			<div className='w-1/2 xs:w-1/6 sm:w-1/6 lg:w-1/2 p-4 xs:p-0 md:p-4'>
				<div className='h-full flex flex-col items-center justify-center text-center xs:invisible lg:visible'>
					<motion.p initial={{ opacity: 0, y: -50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.5 }} className='text-7xl xs:text-2xl sm:text-3xl md:text-5xl lg:text-7xl font-bold m-3 opacity-50 bg-opacity-50 text-opacity-50'>
						Rítusom
					</motion.p>
					<motion.p initial={{ opacity: 0, y: -50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.5, delay: 0.5 }} className='text-3xl xs:text-xs sm:text-sm md:text-xl lg:text-3xl'>
						Your personalized skincare ritual
					</motion.p>
				</div>
			</div>
		</div>
	);
}

export default ItemRitusom;
