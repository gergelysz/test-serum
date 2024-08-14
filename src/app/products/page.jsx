'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
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
	const [lastVisible, setLastVisible] = useState(null);
	const productsPerPage = 8;

	const router = useRouter();

	const handlePageChange = (page) => {
		setCurrentPage(page);
	};

	const fetchProducts = async () => {
		const productsRef = collection(db, 'products');
		const q = query(productsRef, limit(productsPerPage));

		if (currentPage > 1 && lastVisible) {
			const newQuery = query(productsRef, startAfter(lastVisible), limit(productsPerPage));
			const querySnapshot = await getDocs(newQuery);
			setLastVisible(querySnapshot.docs[querySnapshot.docs.length - 1]);
			setProducts(querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
		} else {
			const querySnapshot = await getDocs(q);
			setLastVisible(querySnapshot.docs[querySnapshot.docs.length - 1]);
			setProducts(querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
		}

		const totalProductsSnapshot = await getDocs(productsRef);
		setTotalPages(Math.ceil(totalProductsSnapshot.docs.length / productsPerPage));
		setLoading(false);
	};

	useEffect(() => {
		fetchProducts();
	}, [currentPage]);

	if (loading) return <Loading />;

	const onClickHandle = () => {
		router.push('/products');
	};

	return (
		<div className='p-4 max-w-6xl mx-auto'>
			<div className='p-4 max-w-5xl mx-auto'>
				<h1 className='text-2xl font-bold mb-4'>All Products</h1>
				<div className='h-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
					{products.map((product) => (
						<Link href={`/products/${product.id}`}>
							<ProductDisplayCard key={product.id} product={product} onClick={onClickHandle} />
						</Link>
					))}
				</div>
				<Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange} />
			</div>
		</div>
	);
};

export default ProductsPage;
