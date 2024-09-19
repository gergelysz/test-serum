'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Loading from '@/components/loading.jsx';
import { collection, query, getDocs, limit, startAfter } from 'firebase/firestore';
import { db } from '@/lib/firebase/config.js';
import Pagination from '@/components/pagination.jsx';
import ProductDisplayCard from '@/components/product/product-display-card';

const ProductsPage = () => {
	const [products, setProducts] = useState([]);
	const [loading, setLoading] = useState(true);

	const [currentPage, setCurrentPage] = useState(1);
	const [totalPages, setTotalPages] = useState(1);
	const lastVisibleRef = useRef(null);
	const productsPerPage = 12;

	const handlePageChange = (page) => {
		setCurrentPage(page);
	};

	useEffect(() => {
		const fetchProducts = async () => {
			const productsRef = collection(db, 'products');
			const q = query(productsRef, limit(productsPerPage));

			if (currentPage > 1 && lastVisibleRef.current) {
				const newQuery = query(productsRef, startAfter(lastVisibleRef.current), limit(productsPerPage));
				const querySnapshot = await getDocs(newQuery);
				lastVisibleRef.current = querySnapshot.docs[querySnapshot.docs.length - 1];
				setProducts(querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
			} else {
				const querySnapshot = await getDocs(q);
				lastVisibleRef.current = querySnapshot.docs[querySnapshot.docs.length - 1];
				setProducts(querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
			}

			const totalProductsSnapshot = await getDocs(productsRef);
			setTotalPages(Math.ceil(totalProductsSnapshot.docs.length / productsPerPage));
			setLoading(false);
		};

		fetchProducts();
	}, [currentPage]);

	if (loading) return <Loading />;

	return (
		<div className='p-4 max-w-5xl mx-auto'>
			<h1 className='text-2xl font-bold mb-4'>All Products</h1>
			<div className='h-full grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 grid-rows-3 gap-6'>
				{products.map((product) => (
					<Link key={product.id} href={`/products/${product.id}`}>
						<ProductDisplayCard product={product} />
					</Link>
				))}
			</div>
			<Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange} />
		</div>
	);
};

export default ProductsPage;
