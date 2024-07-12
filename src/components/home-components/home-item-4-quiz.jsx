import React from 'react';
import QuestionCarousel from '../question-carousel';
import jsonQuizData from '../../../public/quiz.json';
import { motion } from 'framer-motion';

function HomeItem4Quiz() {
	const data = JSON.parse(JSON.stringify(jsonQuizData));
	return (
		<motion.div
			initial={{ opacity: 0.2 }} // Initial state (hidden)
			animate={{ opacity: 1 }} // Animation state (visible)
			transition={{ duration: 1 }} // Duration of the animation
			className='min-h-screen flex flex-col items-center justify-center space-y-7 bg-serums bg-cover bg-center'
		>
			<p className='text-4xl xs:text-base sm:text-lg md:text-2xl lg:text-4xl'>Take our test and create your ritual!</p>
			<motion.p initial={{ opacity: 0, y: -50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.2 }} className='text-6xl xs:text-base sm:text-lg md:text-2xl lg:text-4xl xl:text-6xl  text-lime-800/75 font-bold p-3 pl-7 pr-7'>
				About you
			</motion.p>
			<div className='relative min-h-fit min-w-full flex flex-col items-center justify-center'>
				<QuestionCarousel data={data} />
			</div>
		</motion.div>
	);
}

export default HomeItem4Quiz;
