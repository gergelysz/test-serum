'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const AddOrEditProductDialog = ({ isOpen, onClose, product, onSave }) => {
	const [name, setName] = useState('');
	const [price, setPrice] = useState('');
	const [description, setDescription] = useState('');
	const [shortDescription, setShortDescription] = useState('');
	const [category, setCategory] = useState('');
	const [sizes, setSizes] = useState([]);
	const [colors, setColors] = useState([]);
	const [ml, setMl] = useState([]); // New state for ml variants
	const [manufacturer, setManufacturer] = useState(''); // New state for manufacturer
	const [imageUrl, setImageUrl] = useState('');

	console.log('editing product with id: ' + product?.id);

	useEffect(() => {
		if (product) {
			setName(product.name || '');
			setManufacturer(product.manufacturer || ''); // Load manufacturer
			setPrice(product.price || '');
			setDescription(product.description || '');
			setShortDescription(product.shortDescription || '');
			setCategory(product.category || '');
			setImageUrl(product.imageUrl || '');
			setSizes(product.variants?.sizes || []);
			setColors(product.variants?.colors || []);
			setMl(product.variants?.ml || []); // Load ml variants
		} else {
			resetForm();
		}
	}, [product]);

	const resetForm = () => {
		setName('');
		setManufacturer(''); // Reset manufacturer
		setPrice('');
		setDescription('');
		setShortDescription('');
		setCategory('');
		setImageUrl('');
		setSizes([]);
		setColors([]);
		setMl([]); // Reset ml variants
	};

	const handleSave = () => {
		if (product) {
			onSave({
				...product,
				name,
				manufacturer, // Add manufacturer field
				price,
				description,
				shortDescription,
				category,
				imageUrl,
				variants: {
					sizes,
					colors,
					ml, // Save ml variants
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

	const handleAddMl = () => {
		setMl([...ml, '']); // Add a new empty ml variant input
	};

	const handleSizeChange = (index, value) => {
		const updatedSizes = sizes.map((size, i) => (i === index ? value : size));
		setSizes(updatedSizes);
	};

	const handleColorChange = (index, value) => {
		const updatedColors = colors.map((color, i) => (i === index ? value : color));
		setColors(updatedColors);
	};

	const handleMlChange = (index, value) => {
		const updatedMl = ml.map((mlSize, i) => (i === index ? value : mlSize));
		setMl(updatedMl);
	};

	return (
		<AnimatePresence>
			{isOpen && (
				<motion.div
					className='fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50'
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					exit={{ opacity: 0 }}>
					<motion.div
						className='bg-secondary rounded-lg shadow-lg p-6 w-2/3 text-white'
						initial={{ y: -50, opacity: 0 }}
						animate={{ y: 0, opacity: 1 }}
						exit={{ y: -50, opacity: 0 }}>
						<p className='text-2xl font-bold mb-4'>{product?.id ? 'Edit Product' : 'Add Product'}</p>

						<div className='flex flex-row space-x-11'>
							<div className='flex flex-col w-2/3'>
								{/* Name Field */}
								<div className='mb-3'>
									<p className='text-sm font-medium text-gray-700'>Name</p>
									<input
										type='text'
										className='mt-1 w-full text-sm p-2 bg-secondary-darker rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50'
										value={name}
										onChange={(e) => setName(e.target.value)}
									/>
								</div>
								{/* Manufacturer Field */}
								<div className='mb-3'>
									<p className='text-sm font-medium text-gray-700'>Manufacturer</p>
									<input
										type='text'
										className='mt-1 w-full text-sm p-2 bg-secondary-darker rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50'
										value={manufacturer}
										onChange={(e) => setManufacturer(e.target.value)}
									/>
								</div>
								<div className='mb-3'>
									<p className='text-sm font-medium text-gray-700'>Price</p>
									<input
										type='number'
										className='mt-1 w-full text-sm p-2 bg-secondary-darker rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50'
										value={price}
										onChange={(e) => setPrice(e.target.value)}
									/>
								</div>
								<div className='mb-3'>
									<p className='text-sm font-medium text-gray-700'>Category</p>
									<input
										type='text'
										className='mt-1 w-full text-sm p-2 bg-secondary-darker rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50'
										value={category}
										onChange={(e) => setCategory(e.target.value)}
									/>
								</div>
								<div className='mb-3'>
									<p className='text-sm font-medium text-gray-700'>Short Description</p>
									<input
										type='text'
										className='mt-1 w-full text-sm p-2 bg-secondary-darker rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50'
										value={shortDescription}
										onChange={(e) => setShortDescription(e.target.value)}
									/>
								</div>
								<div className='mb-3'>
									<p className='text-sm font-medium text-gray-700'>Description</p>
									<textarea
										rows={3}
										className='mt-1 w-full text-sm p-2 bg-secondary-darker rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50'
										value={description}
										onChange={(e) => setDescription(e.target.value)}
									/>
								</div>
							</div>
							<div className='flex flex-col w-1/3'>
								<div className='mb-3'>
									<p className='text-sm font-medium text-gray-700'>Image URL</p>
									<input
										type='text'
										className='mt-1 w-full text-sm p-2 bg-secondary-darker rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50'
										value={imageUrl}
										onChange={(e) => setImageUrl(e.target.value)}
									/>
								</div>
								<div className='mb-3'>
									<p className='text-sm font-medium text-gray-700'>Sizes</p>
									{sizes.map((size, index) => (
										<input
											key={index}
											type='text'
											className='mt-1 w-full text-sm p-2 bg-secondary-darker rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50'
											value={size}
											onChange={(e) => handleSizeChange(index, e.target.value)}
										/>
									))}
									<button
										onClick={handleAddSize}
										className='mt-2 px-4 py-2 text-xs bg-secondary-darkest text-white/90 rounded hover:bg-secondary-darker'>
										Add Size
									</button>
								</div>
								<div className='mb-3'>
									<p className='text-sm font-medium text-gray-700'>Colors</p>
									{colors.map((color, index) => (
										<input
											key={index}
											type='text'
											className='mt-1 w-full text-sm p-2 bg-secondary-darker rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50'
											value={color}
											onChange={(e) => handleColorChange(index, e.target.value)}
										/>
									))}
									<button
										onClick={handleAddColor}
										className='mt-2 px-4 py-2 text-xs bg-secondary-darkest text-white/90 rounded hover:bg-secondary-darker'>
										Add Color
									</button>
								</div>
								{/* Milliliter (ml) Variants Section */}
								<div className='mb-3'>
									<p className='text-sm font-medium text-gray-700'>Milliliters (ml)</p>
									{ml.map((mlSize, index) => (
										<input
											key={index}
											type='text'
											className='mt-1 w-full text-sm p-2 bg-secondary-darker rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50'
											value={mlSize}
											onChange={(e) => handleMlChange(index, e.target.value)}
										/>
									))}
									<button
										onClick={handleAddMl}
										className='mt-2 px-4 py-2 text-xs bg-secondary-darkest text-white/90 rounded hover:bg-secondary-darker'>
										Add Milliliter
									</button>
								</div>
							</div>
						</div>

						<div className='flex justify-end space-x-4'>
							<button
								onClick={() => {
									resetForm();
									onClose();
								}}
								className='px-4 py-2 bg-secondary-darkest/70 text-white/90 rounded hover:bg-secondary-darkest'>
								Cancel
							</button>
							<button
								onClick={handleSave}
								className='px-4 py-2 bg-secondary-darkest/90 text-white/90 rounded hover:bg-secondary-darkest'>
								Save
							</button>
						</div>
					</motion.div>
				</motion.div>
			)}
		</AnimatePresence>
	);
};

export default AddOrEditProductDialog;
