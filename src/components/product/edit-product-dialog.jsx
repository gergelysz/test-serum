'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const EditProductDialog = ({ isOpen, onClose, product, onSave }) => {
	const [name, setName] = useState('');
	const [price, setPrice] = useState('');
	const [description, setDescription] = useState('');
	const [shortDescription, setShortDescription] = useState('');
	const [category, setCategory] = useState('');
	const [sizes, setSizes] = useState([]);
	const [colors, setColors] = useState([]);
	const [imageUrl, setImageUrl] = useState('');

	console.log('editing product with id: ' + product?.id);

	useEffect(() => {
		if (product) {
			setName(product.name || '');
			setPrice(product.price || '');
			setDescription(product.description || '');
			setShortDescription(product.shortDescription || '');
			setCategory(product.category || '');
			setSizes(product.variants?.sizes || []);
			setColors(product.variants?.colors || []);
			setImageUrl(product.imageUrl || '');
		} else {
			resetForm();
		}
	}, [product]);

	const resetForm = () => {
		setName('');
		setPrice('');
		setDescription('');
		setShortDescription('');
		setCategory('');
		setSizes([]);
		setColors([]);
		setImageUrl('');
	};

	const handleSave = () => {
		if (product) {
			onSave({
				...product,
				name,
				price,
				description,
				shortDescription,
				category,
				imageUrl,
				variants: {
					sizes,
					colors,
				},
			});
			onClose();
		}
	};

	const handleAddSize = () => {
		setSizes([...sizes, '']);
	};

	const handleAddColor = () => {
		setColors([...colors, '']);
	};

	const handleSizeChange = (index, value) => {
		const updatedSizes = sizes.map((size, i) => (i === index ? value : size));
		setSizes(updatedSizes);
	};

	const handleColorChange = (index, value) => {
		const updatedColors = colors.map((color, i) => (i === index ? value : color));
		setColors(updatedColors);
	};

	return (
		<AnimatePresence>
			{isOpen && (
				<motion.div className='fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50' initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
					<motion.div className='bg-white rounded-lg shadow-lg p-8 w-full max-w-md' initial={{ y: -50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: -50, opacity: 0 }}>
						<p className='text-2xl font-bold mb-4'>{product.id ? <p>Edit Product</p> : <p>Add Product</p>}</p>
						<div className='mb-4'>
							<label className='block text-sm font-medium text-gray-700'>Name</label>
							<input type='text' className='mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50' value={name} onChange={(e) => setName(e.target.value)} />
						</div>
						<div className='mb-4'>
							<label className='block text-sm font-medium text-gray-700'>Price</label>
							<input
								type='number'
								className='mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50'
								value={price}
								onChange={(e) => setPrice(e.target.value)}
							/>
						</div>
						<div className='mb-4'>
							<label className='block text-sm font-medium text-gray-700'>Category</label>
							<input
								type='text'
								className='mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50'
								value={category}
								onChange={(e) => setCategory(e.target.value)}
							/>
						</div>
						<div className='mb-4'>
							<label className='block text-sm font-medium text-gray-700'>Short Description</label>
							<input
								type='text'
								className='mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50'
								value={shortDescription}
								onChange={(e) => setShortDescription(e.target.value)}
							/>
						</div>
						<div className='mb-4'>
							<label className='block text-sm font-medium text-gray-700'>Description</label>
							<textarea
								className='mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50'
								value={description}
								onChange={(e) => setDescription(e.target.value)}
							/>
						</div>
						<div className='mb-4'>
							<label className='block text-sm font-medium text-gray-700'>Image URL</label>
							<input
								type='text'
								className='mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50'
								value={imageUrl}
								onChange={(e) => setImageUrl(e.target.value)}
							/>
						</div>
						<div className='mb-4'>
							<label className='block text-sm font-medium text-gray-700'>Sizes</label>
							{sizes.map((size, index) => (
								<input
									key={index}
									type='text'
									className='mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 mb-2'
									value={size}
									onChange={(e) => handleSizeChange(index, e.target.value)}
								/>
							))}
							<button onClick={handleAddSize} className='mt-2 px-4 py-2 bg-secondary text-white/90 rounded hover:bg-gray-700'>
								Add Size
							</button>
						</div>
						<div className='mb-4'>
							<label className='block text-sm font-medium text-gray-700'>Colors</label>
							{colors.map((color, index) => (
								<input
									key={index}
									type='text'
									className='mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 mb-2'
									value={color}
									onChange={(e) => handleColorChange(index, e.target.value)}
								/>
							))}
							<button onClick={handleAddColor} className='mt-2 px-4 py-2 bg-secondary text-white/90 rounded hover:bg-gray-700'>
								Add Color
							</button>
						</div>
						<div className='flex justify-end space-x-4'>
							<button
								onClick={() => {
									resetForm();
									onClose();
								}}
								className='px-4 py-2 bg-secondary/80 text-white/90 rounded hover:bg-gray-400'
							>
								Cancel
							</button>
							<button onClick={handleSave} className='px-4 py-2 bg-secondary text-white/90 rounded hover:bg-green-950/90'>
								Save
							</button>
						</div>
					</motion.div>
				</motion.div>
			)}
		</AnimatePresence>
	);
};

export default EditProductDialog;
