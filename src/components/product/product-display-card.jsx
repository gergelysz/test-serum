import React from 'react';
import Image from 'next/image';

const ProductDisplayCard = ({ product }) => {
	const defaultPlaceholder = 'https://via.placeholder.com/150'; // Placeholder image URL

	return (
		<div className='relative flex flex-col w-40 h-64 sm:w-56 sm:h-72 md:w-60 md:h-88 bg-secondary hover:bg-secondary-darker shadow-md hover:shadow-2xl rounded-lg p-4'>
			<Image
				src={product.imageUrl || defaultPlaceholder}
				alt={product.name}
				className='w-20 h-20 sm:w-32 sm:h-32 md:w-40 md:h-40 object-cover rounded-lg mb-4'
				width={200}
				height={200}
			/>
			<p className='text-sm sm:text-base md:text-lg font-bold text-white/90'>{product.name}</p>
			<p className='text-xs sm:text-sm md:text-base text-white/80 mb-2'>{product.shortDescription}</p>
			<p className='text-xs sm:text-sm md:text-base text-gray-300/75'>{product.price} RON</p>
		</div>
	);
};

export default ProductDisplayCard;
