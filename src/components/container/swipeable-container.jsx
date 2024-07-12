'use client';

import React, { useState, useEffect, useCallback } from 'react';
import { useSwipeable } from 'react-swipeable';
import { motion, AnimatePresence } from 'framer-motion';

const SwipeableContainer = ({ sections }) => {
	const [index, setIndex] = useState(0);
	const [scrollTimeout, setScrollTimeout] = useState(null);

	const paginate = useCallback(
		(newDirection) => {
			if (index + newDirection >= 0 && index + newDirection < sections.length) {
				setIndex(index + newDirection);
			}
		},
		[index, sections.length]
	);

	const swipeHandlers = useSwipeable({
		onSwipedUp: () => paginate(1),
		onSwipedDown: () => paginate(-1),
		preventDefaultTouchmoveEvent: true,
		trackMouse: true,
	});

	useEffect(() => {
		const handleScroll = (event) => {
			const deltaY = event.deltaY;
			if (!scrollTimeout) {
				if (deltaY > 0) {
					paginate(1);
				} else if (deltaY < 0) {
					paginate(-1);
				}
				setScrollTimeout(setTimeout(() => setScrollTimeout(null), 500)); // Prevents rapid scrolling
			}
		};

		window.addEventListener('wheel', handleScroll);
		return () => {
			window.removeEventListener('wheel', handleScroll);
		};
	}, [paginate, scrollTimeout]);

	const variants = {
		enter: (direction) => ({
			y: direction > 0 ? 1000 : -1000,
			opacity: 0,
		}),
		center: {
			y: 0,
			opacity: 1,
		},
		exit: (direction) => ({
			y: direction < 0 ? 1000 : -1000,
			opacity: 0,
		}),
	};

	return (
		<div className='w-screen h-screen overflow-hidden' {...swipeHandlers}>
			<AnimatePresence initial={false} custom={index}>
				<motion.div
					key={index}
					custom={index}
					variants={variants}
					initial='enter'
					animate='center'
					exit='exit'
					transition={{
						y: { type: 'spring', stiffness: 100, damping: 30 },
						opacity: { duration: 0.2 },
					}}
					className='absolute top-0 left-0 w-full h-full flex items-center justify-center'
				>
					{sections[index]}
				</motion.div>
			</AnimatePresence>
		</div>
	);
};

export default SwipeableContainer;
