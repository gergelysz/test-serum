import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { FaRegSmile, FaPaintBrush, FaHeart, FaPills, FaRunning, FaHandSparkles, FaFemale, FaDumbbell } from 'react-icons/fa';

const categories = [
	{
		title: 'Beauty',
		icon: FaRegSmile,
		links: [
			{
				title: 'Skincare',
				href: '/beauty/skincare',
				icon: FaHandSparkles,
				subLinks: [
					{ title: 'Moisturizers', href: '/beauty/skincare/moisturizers', icon: FaHandSparkles },
					{ title: 'Cleansers', href: '/beauty/skincare/cleansers', icon: FaHandSparkles },
				],
			},
			{ title: 'Makeup', href: '/beauty/makeup', icon: FaPaintBrush },
		],
	},
	{
		title: 'Health',
		icon: FaHeart,
		links: [
			{
				title: 'Supplements',
				href: '/health/supplements',
				icon: FaPills,
				subLinks: [
					{ title: 'Vitamins', href: '/health/supplements/vitamins', icon: FaPills },
					{ title: 'Minerals', href: '/health/supplements/minerals', icon: FaPills },
				],
			},
			{ title: 'Fitness', href: '/health/fitness', icon: FaRunning },
		],
	},
];

const NavigationMenu = () => {
	const [openCategory, setOpenCategory] = useState(null);
	const [openSubCategory, setOpenSubCategory] = useState(null);

	const handleMouseEnter = (index) => {
		setOpenCategory(index);
	};

	const handleMouseLeave = () => {
		setOpenCategory(null);
		setOpenSubCategory(null);
	};

	const handleSubMouseEnter = (index) => {
		setOpenSubCategory(index);
	};

	return (
		<nav className='bg-gray-800 text-white'>
			<div className='container mx-auto flex items-center justify-between p-4'>
				<div className='text-lg font-bold'>
					<Link href='/'>Beauty & Health</Link>
				</div>
				<div className='flex space-x-4'>
					{categories.map((category, index) => (
						<div key={index} className='relative group' onMouseEnter={() => handleMouseEnter(index)} onMouseLeave={handleMouseLeave}>
							<button className='hover:text-gray-400 focus:outline-none flex items-center space-x-2'>
								<category.icon />
								<span>{category.title}</span>
							</button>
							<motion.div
								initial={{ opacity: 0, y: -10 }}
								animate={{ opacity: openCategory === index ? 1 : 0, y: openCategory === index ? 0 : -10 }}
								transition={{ duration: 0.2 }}
								className={`absolute left-0 mt-2 w-48 bg-white text-gray-800 shadow-lg ${openCategory === index ? 'block' : 'hidden'}`}
							>
								{category.links.map((link, subIndex) => (
									<div key={subIndex} onMouseEnter={() => handleSubMouseEnter(subIndex)} onMouseLeave={() => setOpenSubCategory(null)} className='relative'>
										<Link href={link.href}>
											<div className='flex items-center px-4 py-2 hover:bg-gray-100'>
												<link.icon className='mr-2' />
												{link.title}
											</div>
										</Link>
										{link.subLinks && (
											<motion.div
												initial={{ opacity: 0, x: -10 }}
												animate={{ opacity: openSubCategory === subIndex ? 1 : 0, x: openSubCategory === subIndex ? 0 : -10 }}
												transition={{ duration: 0.2 }}
												className={`absolute left-full top-0 mt-0 w-48 bg-white text-gray-800 shadow-lg ${openSubCategory === subIndex ? 'block' : 'hidden'}`}
											>
												{link.subLinks.map((subLink, subSubIndex) => (
													<Link key={subSubIndex} href={subLink.href}>
														<div className='flex items-center px-4 py-2 hover:bg-gray-100'>
															<subLink.icon className='mr-2' />
															{subLink.title}
														</div>
													</Link>
												))}
											</motion.div>
										)}
									</div>
								))}
							</motion.div>
						</div>
					))}
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

export default NavigationMenu;
