import React, { useState, useRef } from 'react';
import Link from 'next/link';
import { GiMirrorMirror } from 'react-icons/gi';
import { FaHandHoldingHeart, FaRunning } from 'react-icons/fa';
import { IoMdBrush } from 'react-icons/io';
import { CiHeart } from 'react-icons/ci';
import { LiaCapsulesSolid } from 'react-icons/lia';

const ProductNavMenu = () => {
	const [isOpen, setIsOpen] = useState(false);
	const menuRef = useRef(null);

	const handleMouseEnter = () => setIsOpen(true);
	const handleMouseLeave = () => setIsOpen(false);

	return (
		<nav className='bg-gray-800 text-white'>
			<div className='container mx-auto flex items-center justify-between p-4'>
				<div className='text-lg font-bold'>
					<Link href='/'>Beauty & Health</Link>
				</div>
				<div className='relative' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
					<button className='hover:text-gray-400 focus:outline-none'>Categories</button>
					<div className='absolute left-0 top-full mt-2 w-64 bg-white text-gray-800 shadow-lg group-hover:block'>
						<div className='px-4 py-2 border-b hover:bg-gray-100'>
							<Link href='/beauty'>
								<div className='flex items-center'>
									<GiMirrorMirror className='mr-2' />
									Beauty
								</div>
							</Link>
							<div className='ml-6 mt-2'>
								<div className='px-4 py-1 hover:bg-gray-100'>
									<Link href='/beauty/skincare'>
										<div className='flex items-center'>
											<FaHandHoldingHeart className='mr-2' />
											Skincare
										</div>
									</Link>
								</div>
								<div className='px-4 py-1 hover:bg-gray-100'>
									<Link href='/beauty/makeup'>
										<div className='flex items-center'>
											<IoMdBrush className='mr-2' />
											Makeup
										</div>
									</Link>
								</div>
							</div>
						</div>
						<div className='px-4 py-2 border-b hover:bg-gray-100'>
							<Link href='/health'>
								<div className='flex items-center'>
									<CiHeart className='mr-2' />
									Health
								</div>
							</Link>
							<div className='ml-6 mt-2'>
								<div className='px-4 py-1 hover:bg-gray-100'>
									<Link href='/health/supplements'>
										<div className='flex items-center'>
											<LiaCapsulesSolid className='mr-2' />
											Supplements
										</div>
									</Link>
								</div>
								<div className='px-4 py-1 hover:bg-gray-100'>
									<Link href='/health/fitness'>
										<div className='flex items-center'>
											<FaRunning className='mr-2' />
											Fitness
										</div>
									</Link>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className='flex space-x-4'>
					<Link href='/about' className='hover:text-gray-400'>
						About
					</Link>
					<Link href='/contact' className='hover:text-gray-400'>
						Contact
					</Link>
				</div>
			</div>
		</nav>
	);
};

export default ProductNavMenu;
