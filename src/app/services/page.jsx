'use client';

import React, { useState, useEffect, useCallback } from 'react';
import '../../styles/globals.css';
import { motion, AnimatePresence } from 'framer-motion';
import { useSwipeable } from 'react-swipeable';
import ItemRitusom from '@/components/home-components/item-ritusom';
import ItemSkinCare from '@/components/home-components/item-skincare';
import ItemAboutUs from '@/components/home-components/item-about-us';
import ItemQuiz from '@/components/home-components/item-quiz';
import ItemYourRitual from '@/components/home-components/item-your-ritual';
import ItemSocials from '@/components/home-components/item-socials';
import ButtonMovePages from '@/components/button-move-pages';
import Loading from '@/components/loading';

const sections = [
	<ItemRitusom key={'ritusom'} />,
	<ItemSkinCare key={'skincare'} />,
	<ItemAboutUs key={'aboutus'} />,
	<ItemQuiz key={'quiz'} />,
	<ItemYourRitual key={'yourritual'} />,
	<ItemSocials key={'socials'} />,
];

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

const ServicesPage = () => {
	const [isLoading, setIsLoading] = useState(true);

	const [index, setIndex] = useState(0);
	const [direction, setDirection] = useState(0);
	const [scrollTimeout, setScrollTimeout] = useState(null);
	const [isScrolling, setIsScrolling] = useState(false);

	useEffect(() => {
		const timeout = setTimeout(() => {
			setIsLoading(false);
		}, 200);

		return () => clearTimeout(timeout);
	}, []);

	const paginate = useCallback(
		(newDirection) => {
			if (index + newDirection >= 0 && index + newDirection < sections.length) {
				setDirection(newDirection);
				setIndex(index + newDirection);
			}
		},
		[index]
	);

	const handleUserSelect = (disable) => {
		document.body.style.userSelect = disable ? 'none' : 'auto';
	};

	const swipeHandlers = useSwipeable({
		onSwipedUp: () => paginate(1),
		onSwipedDown: () => paginate(-1),
		onSwiping: () => setIsScrolling(true),
		onSwiped: () => setIsScrolling(false),
		preventDefaultTouchmoveEvent: true,
		trackMouse: true,
	});

	useEffect(() => {
		const handleScroll = (event) => {
			if (!scrollTimeout && !isScrolling) {
				handleUserSelect(true);
				const deltaY = event.deltaY;
				if (deltaY > 0) {
					paginate(1);
				} else if (deltaY < 0) {
					paginate(-1);
				}
				setScrollTimeout(
					setTimeout(() => {
						setScrollTimeout(null);
						handleUserSelect(false);
					}, 500)
				);
			}
		};

		window.addEventListener('wheel', handleScroll);
		return () => {
			window.removeEventListener('wheel', handleScroll);
		};
	}, [paginate, scrollTimeout, isScrolling]);

	return (
		<div>
			{isLoading ? (
				<Loading />
			) : (
				<div {...swipeHandlers} className='relative w-screen h-screen overflow-hidden'>
					<AnimatePresence initial={true} custom={direction}>
						<motion.div
							key={index}
							custom={direction}
							variants={variants}
							initial='enter'
							animate='center'
							exit='exit'
							transition={{
								y: { type: 'spring', stiffness: 300, damping: 30 },
								opacity: { duration: 0.2 },
							}}
							className='absolute top-0 left-0 w-full h-full flex items-center justify-center'>
							{sections.map((Section, idx) => (
								<div key={idx} className={`w-full h-full ${index === idx ? '' : 'hidden'}`}>
									{Section}
								</div>
							))}
						</motion.div>
					</AnimatePresence>
					<ButtonMovePages paginate={paginate} />
				</div>
			)}
		</div>
	);
};

export default ServicesPage;
