import React from 'react';

const ProductEditCard = ({ product, onEdit, onDelete }) => {
	const defaultPlaceholder = 'https://via.placeholder.com/150'; // Placeholder image URL

	return (
		<div className='relative flex flex-col w-56 bg-white/50 shadow-md rounded-lg p-4'>
			<img src={product.imageUrl || defaultPlaceholder} alt={product.name} className='w-full h-32 object-cover rounded-lg mb-4' />
			<p className='text-lg font-bold'>{product.name}</p>
			<p className='text-base text-gray-700 mb-2'>{product.shortDescription}</p>
			<p className='text-gray-600 mb-10'>{product.price} RON</p>
			<div className='absolute bottom-2 space-x-6'>
				<button onClick={() => onEdit(product)} className='mt-2 px-4 py-2 bg-secondary/80 text-white rounded hover:bg-blue-600'>
					Edit
				</button>
				<button onClick={() => onDelete(product.id)} className='mt-2 px-4 py-2 bg-secondary text-white rounded hover:bg-red-600'>
					Delete
				</button>
			</div>
		</div>
	);
};

export default ProductEditCard;
