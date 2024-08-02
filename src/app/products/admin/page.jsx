'use client';

import Loading from '@/components/loading';
import React, { useEffect, useState } from 'react';

const ProductsAdmin = () => {
	const [products, setProducts] = useState([]);
	const [loading, setLoading] = useState(true);
	const [form, setForm] = useState({
		id: '',
		name: '',
		description: '',
		shortDescription: '',
		price: '',
		variants: { sizes: [], colors: [] },
	});

	useEffect(() => {
		fetchProducts();
	}, []);

	const fetchProducts = async () => {
		try {
			const response = await fetch('/products/admin/api');
			if (response.ok) {
				const data = await response.json();
				setProducts(data.products);
			} else {
				console.error('Failed to load products');
			}
		} catch (error) {
			console.error('Failed to load products', error);
		} finally {
			setLoading(false);
		}
	};

	const handleChange = (e) => {
		const { name, value } = e.target;
		setForm((prevForm) => ({ ...prevForm, [name]: value }));
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const response = form.id ? await fetch('/products/admin/api', { method: 'PUT', body: JSON.stringify(form) }) : await fetch('/products/admin/api', { method: 'POST', body: JSON.stringify(form) });
			if (response.ok) {
				fetchProducts();
				setForm({ id: '', name: '', description: '', shortDescription: '', price: '', variants: { sizes: [], colors: [] } });
			} else {
				console.error('Failed to save product');
			}
		} catch (error) {
			console.error('Failed to save product', error);
		}
	};

	const handleEdit = (product) => {
		setForm(product);
	};

	const handleDelete = async (id) => {
		try {
			const response = await fetch('/products/admin/api', { method: 'DELETE', body: JSON.stringify({ id }) });
			if (response.ok) {
				fetchProducts();
			} else {
				console.error('Failed to delete product');
			}
		} catch (error) {
			console.error('Failed to delete product', error);
		}
	};

	if (loading) return <Loading />;

	return (
		<div className='p-4 max-w-3xl mx-auto'>
			<h1 className='text-2xl font-bold mb-4'>Manage Products</h1>
			<form onSubmit={handleSubmit} className='mb-6'>
				<input type='hidden' name='id' value={form.id} />
				<div className='mb-4'>
					<label className='block mb-2'>Name</label>
					<input type='text' name='name' value={form.name} onChange={handleChange} className='border p-2 w-full' />
				</div>
				<div className='mb-4'>
					<label className='block mb-2'>Description</label>
					<textarea name='description' value={form.description} onChange={handleChange} className='border p-2 w-full' />
				</div>
				<div className='mb-4'>
					<label className='block mb-2'>Short Description</label>
					<textarea name='shortDescription' value={form.shortDescription} onChange={handleChange} className='border p-2 w-full' />
				</div>
				<div className='mb-4'>
					<label className='block mb-2'>Price</label>
					<input type='number' name='price' value={form.price} onChange={handleChange} className='border p-2 w-full' />
				</div>
				<div className='mb-4'>
					<label className='block mb-2'>Sizes</label>
					<input type='text' name='sizes' value={form.variants.sizes.join(', ')} onChange={(e) => setForm({ ...form, variants: { ...form.variants, sizes: e.target.value.split(', ') } })} className='border p-2 w-full' />
				</div>
				<div className='mb-4'>
					<label className='block mb-2'>Colors</label>
					<input type='text' name='colors' value={form.variants.colors.join(', ')} onChange={(e) => setForm({ ...form, variants: { ...form.variants, colors: e.target.value.split(', ') } })} className='border p-2 w-full' />
				</div>
				<button type='submit' className='w-full bg-green-900 text-white p-2 rounded hover:bg-green-950 transition duration-200'>
					Save
				</button>
			</form>
			<div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
				{products.map((product) => (
					<div key={product.id} className='border rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow'>
						<h2 className='text-xl font-semibold mb-2'>{product.name}</h2>
						<p className='text-gray-700 mb-4'>{product.shortDescription}</p>
						<p className='text-lg font-bold'>${product.price}</p>
						<button onClick={() => handleEdit(product)} className='bg-yellow-500 text-white py-1 px-2 rounded mt-2'>
							Edit
						</button>
						<button onClick={() => handleDelete(product.id)} className='bg-red-500 text-white py-1 px-2 rounded mt-2'>
							Delete
						</button>
					</div>
				))}
			</div>
		</div>
	);
};

export default ProductsAdmin;
