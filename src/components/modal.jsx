import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Modal = ({ isOpen, onClose, data, selectedAnswers }) => {
	return (
		<AnimatePresence>
			{isOpen && (
				<motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className='fixed inset-0 z-50 flex items-center justify-center bg-green-900/25'>
					<motion.div
						initial={{ y: -100, opacity: 0 }}
						animate={{ y: 0, opacity: 1 }}
						exit={{ y: -100, opacity: 0 }}
						transition={{ type: 'spring', damping: 20, stiffness: 300 }}
						className='bg-secondary text-primary-foreground p-5 xs:p-2 md:p-3 lg:p-4 xl:p-5 rounded-lg shadow-lg w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl'
					>
						<h2 className='text-2xl xs:text-sm md:text-lg lg:text-2xl font-bold mb-4'>Summary</h2>
						{data.map((question, index) => (
							<div key={index} className='mb-4'>
								<h3 className='text-xl xs:text-sm md:text-base lg:text-lg xl:text-xl font-bold'>{question.question}</h3>
								<ul>
									{selectedAnswers[index].map((answer, i) => (
										<li key={i} className='text-lg xs:text-xs md:text-sm lg:text-base xl:text-lg'>
											{answer}
										</li>
									))}
								</ul>
							</div>
						))}
						<div className='mt-4 flex justify-end'>
							<button onClick={onClose} className='bg-primary text-primary-foreground hover:bg-secondary-foreground text-2xl xs:text-sm md:text-lg lg:text-xl font-bold py-2 px-4 rounded-lg mr-2'>
								Close
							</button>
							{/* Add additional buttons or content here */}
						</div>
					</motion.div>
				</motion.div>
			)}
		</AnimatePresence>
	);
};

export default Modal;
