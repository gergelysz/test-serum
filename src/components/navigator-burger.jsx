'use client';

import React, { useState } from 'react';
import BurgerIcon from './burger-icon.js';
import Link from 'next/link.js';

const NavigatorBurger = () => {
	const [isOpen, setIsOpen] = useState(false);

	const handleToggle = () => {
		setIsOpen(!isOpen);
	};

	return (
		<div className='relative z-10'>
			<div className='absolute top-4 right-4'>
				<button onClick={handleToggle} aria-label='Toggle menu'>
					<BurgerIcon />
				</button>
			</div>

			{isOpen && (
				<div className='absolute top-0 right-0 mt-12 bg-background shadow-lg rounded-lg text-primary'>
					<ul className='flex flex-col p-4'>
						<li className='p-2 hover:bg-orange-300/20'>
							<Link href='/' onClick={handleToggle} className='flex items-center rounded-full p-2'>
								Home
							</Link>
						</li>
						<li className='p-2 hover:bg-orange-300/20'>
							<Link href='/about' onClick={handleToggle} className='flex items-center rounded-full p-2'>
								About
							</Link>
						</li>
						<li className='p-2 hover:bg-orange-300/20'>
							<Link href='/services' onClick={handleToggle} className='flex items-center rounded-full p-2'>
								Services
							</Link>
						</li>
						<li className='p-2 hover:bg-orange-300/20'>
							<Link href='/contact' onClick={handleToggle} className='flex items-center rounded-full p-2'>
								Contact
							</Link>
						</li>
					</ul>
				</div>
			)}
		</div>
	);
};

export default NavigatorBurger;
