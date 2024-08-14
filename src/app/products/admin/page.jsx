'use client';

import React, { useEffect, useState } from 'react';
import { doc, updateDoc, deleteDoc, collection, query, getDocs, limit, startAfter, addDoc } from 'firebase/firestore';
import Loading from '@/components/loading';
import EditProductDialog from '../../../components/product/edit-product-dialog.jsx';
import ProductEditCard from '@/components/product/product-edit-card.jsx';
import Pagination from '@/components/pagination.jsx';
import { db } from '@/lib/firebase/config.js';

const ProductsAdmin = () => {
	const [products, setProducts] = useState([]);
	const [selectedProduct, setSelectedProduct] = useState(null);
	const [isDialogOpen, setIsDialogOpen] = useState(false);
	const [loading, setLoading] = useState(true);

	const [currentPage, setCurrentPage] = useState(1);
	const [totalPages, setTotalPages] = useState(1);
	const [lastVisible, setLastVisible] = useState(null);
	const productsPerPage = 8;

	// New product state
	const newProduct = {
		id: '',
		name: '',
		description: '',
		shortDescription: '',
		price: '',
		imageUrl: '',
		variants: { sizes: [], colors: [] },
	};

	const updateProduct = async (updatedProduct) => {
		try {
			const productRef = doc(db, 'products', updatedProduct.id.toString());
			console.log(productRef);
			await updateDoc(productRef, {
				name: updatedProduct.name,
				description: updatedProduct.description,
				shortDescription: updatedProduct.shortDescription,
				price: updatedProduct.price,
				variants: updatedProduct.variants,
				imageUrl: updatedProduct.imageUrl,
			});

			setProducts((prevProducts) => prevProducts.map((product) => (product.id === updatedProduct.id ? updatedProduct : product)));
		} catch (error) {
			console.error('Error updating product:', error);
		}
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

	const deleteProduct = async (id) => {
		await deleteDoc(doc(db, 'products', id));
		fetchProducts();
	};

	const addProduct = async (product) => {
		try {
			await addDoc(collection(db, 'products'), product);
			fetchProducts();
		} catch (error) {
			console.error('Error adding product:', error);
		}
	};

	useEffect(() => {
		fetchProducts();
	}, [currentPage]);

	if (loading) return <Loading />;

	const handleEdit = (product) => {
		setSelectedProduct(product);
		setIsDialogOpen(true);
	};

	const handleCloseDialog = () => {
		setSelectedProduct(null);
		setIsDialogOpen(false);
	};

	const handlePageChange = (page) => {
		setCurrentPage(page);
	};

	const handleAddNewProduct = () => {
		setSelectedProduct(newProduct);
		setIsDialogOpen(true);
	};

	const handleSaveProduct = (product) => {
		if (product.id) {
			updateProduct(product);
		} else {
			addProduct(product);
		}
		handleCloseDialog();
	};

	return (
		<div className='p-4 max-w-5xl mx-auto'>
			<h1 className='text-2xl font-bold mb-4'>Manage Products</h1>
			<button onClick={handleAddNewProduct} className='mb-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700'>
				Add New Product
			</button>
			<div className='h-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
				{products.map((product) => (
					<ProductEditCard key={product.id} product={product} onEdit={handleEdit} onDelete={deleteProduct} />
				))}
				<EditProductDialog isOpen={isDialogOpen} onClose={handleCloseDialog} product={selectedProduct} onSave={handleSaveProduct} />
			</div>
			<Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange} />
		</div>
	);
};

export default ProductsAdmin;
