'use client';

import React, { useEffect, useState } from 'react';
import { Progress } from '@/components/ui/progress';

const Loading = () => {
	const [progress, setProgress] = useState(0);

	useEffect(() => {
		const interval = setInterval(() => {
			setProgress((prev) => (prev < 100 ? prev + 5 : 100));
		}, 1);
		return () => clearInterval(interval);
	}, []);

	return (
		<div className='flex items-center justify-center h-screen'>
			<div className='w-64'>
				<Progress value={progress} />
				<p className='mt-2 text-center text-gray-500'>Loading...</p>
			</div>
		</div>
	);
};

export default Loading;
