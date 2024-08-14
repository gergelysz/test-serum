'use client';

import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import ContentRenderer from '@/components/blogs/content-renderer';
import Image from 'next/image';
import BreadCrumb from '@/components/bread-crumb';
import Link from 'next/link';
import Loading from '@/components/loading';

const ProductPage = ({ params: { productId } }) => {
	const [product, setProduct] = useState(null);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	useEffect(() => {
		const fetchPost = async () => {
			try {
				const response = await fetch(`/products/${productId}/api/`);
				if (response.ok) {
					const data = await response.json();
					setProduct(data);
				} else {
					setError('Failed to load post. Response not ok');
				}
			} catch (error) {
				setError('Failed to load post. Error: ' + error);
			} finally {
				setLoading(false);
			}
		};

		if (productId) {
			fetchPost();
		}
	}, [productId]);

	if (loading) return <Loading />;
	if (error) return <div>{error}</div>;

	return (
		<div className='bg-secondary/80'>
			<div className='max-w-6xl mx-auto'>
				<BreadCrumb
					items={[
						{ label: 'Home', href: '/' },
						{ label: 'All blogs', href: '/blogs' },
						{ label: product.title, href: `/blogs/${productId}` },
					]}
				/>
				<div className='p-5'>
					<p className='text-4xl xs:text-xl lg:text-4xl font-extrabold text-primary mb-6'>{product.name}</p>
					<p>{product.shortDescription}</p>
					<Image src={product.imageUrl} alt='Blog image' width={1000} height={1000} className='mx-auto' />
					{/* <div className='text-primary leading-relaxed mt-16 xs:mt-4 sm:mt-8 md:mt-12 lg:mt-16'>
						<ContentRenderer content={product.content} />
					</div> */}
					<div>{product.description}</div>
					<Link href='/products'>
						<p className='w-fit p-2 m-2 text-white rounded-sm bg-secondary hover:bg-[#6a7b4f] transition-colors'>Back to all products</p>
					</Link>
				</div>
			</div>
		</div>
	);
};

ProductPage.propTypes = {
	params: PropTypes.object.isRequired,
};

export default ProductPage;
