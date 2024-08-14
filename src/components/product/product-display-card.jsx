import React from 'react';

const ProductDisplayCard = ({ product }) => {
	const defaultPlaceholder = 'https://via.placeholder.com/150'; // Placeholder image URL

	return (
		<div className='relative flex flex-col w-56 bg-secondary hover:bg-secondary/70 shadow-md rounded-lg p-4 text-primary'>
			<img src={product.imageUrl || defaultPlaceholder} alt={product.name} className='w-full h-32 object-cover rounded-lg mb-4' />
			<p className='text-lg font-bold'>{product.name}</p>
			<p className='text-base text-gray-700 mb-2'>{product.shortDescription}</p>
			<p className='text-gray-600'>${product.price}</p>
		</div>
	);
};

export default ProductDisplayCard;
