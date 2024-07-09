'use client';

import React, { useEffect, useRef, useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ChildComponent1 from '@/components/child1';
import ChildComponent2 from '@/components/child2';
import ChildComponent3 from '@/components/child3';

const sections = [
	{ id: 1, backgroundColor: 'bg-red-500' },
	{ id: 2, backgroundColor: 'bg-blue-500' },
	{ id: 3, backgroundColor: 'bg-green-500' },
	{ id: 4, backgroundColor: 'bg-yellow-500' },
];

const AboutPage = () => {
	const [activeChild, setActiveChild] = useState(1); // State to track active child component

	const handleButtonClick = (childNumber) => {
		setActiveChild(childNumber);
	};

	return (
		<div className='flex flex-col h-screen'>
			{/* Header */}
			<div className='bg-gray-800 text-white py-4 px-8'>
				<h1 className='text-2xl font-bold'>Main Page</h1>
			</div>

			{/* Main Content Area */}
			<div className='flex-grow flex flex-col'>
				{/* Conditional rendering based on activeChild */}
				{activeChild === 1 && <ChildComponent1 />}
				{activeChild === 2 && <ChildComponent2 />}
				{activeChild === 3 && <ChildComponent3 />}
			</div>

			{/* Footer with button */}
			<div className='bg-gray-200 py-4 px-8 flex justify-end'>
				<button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded' onClick={() => handleButtonClick(1)}>
					Child 1
				</button>
				<button className='ml-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded' onClick={() => handleButtonClick(2)}>
					Child 2
				</button>
				<button className='ml-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded' onClick={() => handleButtonClick(3)}>
					Child 3
				</button>
			</div>
		</div>
	);
};

export default AboutPage;
