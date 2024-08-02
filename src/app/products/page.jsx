'use client';

import React, { useState, useEffect } from 'react';
import { auth } from '../../lib/firebase/config.js';
import { getCookie, setCookie } from 'cookies-next';
import { useAuthState } from 'react-firebase-hooks/auth';
import Link from 'next/link.js';
import Reveal from '@/components/container/reveal';
import Loading from '@/components/loading.jsx';

const ProductsPage = () => {
	const [products, setProducts] = useState([]);
	const [loading, setLoading] = useState(true);
	const [user] = useAuthState(auth);

	useEffect(() => {
		const fetchProducts = async () => {
			try {
				const response = await fetch('/products/api');
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

		fetchProducts();
	}, []);

	if (loading) return <Loading />;

	return (
		<>
			{user && getCookie('auth_token') && (
				<div className='p-4 xs:p-5 xs:pr-5 md:p-4 md:pr-0 lg:p-4 lg:pr-0 bg-green-900 text-white text-center text-base xs:text-xs md:text-sm lg:text-base'>
					<Link className='text-white hover:text-blue-500 hover:underline transition-colors' href='/products/admin'>
						Access administrative page for products (as administrator {user.email})
					</Link>
				</div>
			)}
			<div className='p-4 max-w-6xl mx-auto'>
				<h1 className='text-2xl font-bold mb-4'>Products</h1>
				<div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
					{products.map((product) => (
						<div key={product.id} className='border rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow'>
							<h2 className='text-xl font-semibold mb-2'>{product.name}</h2>
							<p className='text-gray-700 mb-4'>{product.description}</p>
							<p className='text-lg font-bold'>${product.price}</p>
						</div>
					))}
				</div>
			</div>
		</>
	);
};

export default ProductsPage;
