'use client';

import { useState } from 'react';
import BurgerIcon from './burger-icon.js';
import Link from 'next/link.js';

const NavigatorBurger = () => {
	const [isOpen, setIsOpen] = useState(false);

	const handleToggle = () => {
		setIsOpen(!isOpen);
	};

	return (
		<div className='relative'>
			<div className='absolute top-4 right-4'>
				<button onClick={handleToggle} aria-label='Toggle menu'>
					<BurgerIcon />
				</button>
			</div>

			{isOpen && (
				<div className='absolute top-0 right-0 mt-12 bg-white shadow-lg rounded-lg'>
					<ul className='flex flex-col p-4'>
						<li className='p-2 hover:bg-gray-200'>
							<Link href='/'>Home</Link>
						</li>
						<li className='p-2 hover:bg-gray-200'>
							<Link href='/about'>About</Link>
						</li>
						<li className='p-2 hover:bg-gray-200'>
							<Link href='/services'>Services</Link>
						</li>
						<li className='p-2 hover:bg-gray-200'>
							<Link href='/contact'>Contact</Link>
						</li>
					</ul>
				</div>
			)}
		</div>
	);
};

export default NavigatorBurger;
