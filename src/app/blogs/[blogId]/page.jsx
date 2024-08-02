'use client';

import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import ContentRenderer from '@/components/blogs/content-renderer';
import Image from 'next/image';
import BreadCrumb from '@/components/bread-crumb';
import Link from 'next/link';
import Loading from '@/components/loading';

const BlogPostPage = ({ params: { blogId } }) => {
	console.log('blogId: ' + blogId);

	const [post, setPost] = useState(null);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	const formatDate = (date) => {
		return new Date(date).toLocaleDateString('en-US', {
			year: 'numeric',
			month: 'long',
			day: 'numeric',
			hour: '2-digit',
			minute: '2-digit',
			second: '2-digit',
			hour12: true,
		});
	};

	useEffect(() => {
		const fetchPost = async () => {
			try {
				const response = await fetch(`/blogs/${blogId}/api/`);
				if (response.ok) {
					const data = await response.json();
					setPost(data);
				} else {
					setError('Failed to load post. Response not ok');
				}
			} catch (error) {
				setError('Failed to load post. Error: ' + error);
			} finally {
				setLoading(false);
			}
		};

		if (blogId) {
			fetchPost();
		}
	}, [blogId]);

	if (loading) return <Loading />;
	if (error) return <div>{error}</div>;

	return (
		<div className='bg-orange-200'>
			<div className='max-w-6xl mx-auto'>
				<BreadCrumb
					items={[
						{ label: 'Home', href: '/' },
						{ label: 'All blogs', href: '/blogs' },
						{ label: post.title, href: `/blogs/${blogId}` },
					]}
				/>
				<div className='p-5'>
					<h1 className='text-4xl xs:text-xl lg:text-4xl font-extrabold text-primary mb-6'>{post.title}</h1>
					<div className='flex items-center space-x-4 m-6 xs:m-3 sm:m-4 md:m-5 lg:m-6 text-sm xs:text-xs sm:text-xs md:text-sm lg:text-sm'>
						<p className=' text-gray-600'>By {post.author}</p>
						<span className=' text-gray-500'>•</span>
						<p className=' text-gray-500'>{formatDate(post.publishedDate)}</p>
					</div>
					<Image src={post.image} alt='Blog image' width={1000} height={1000} className='mx-auto' />
					<div className='text-primary leading-relaxed mt-16 xs:mt-4 sm:mt-8 md:mt-12 lg:mt-16'>
						<ContentRenderer content={post.content} />
					</div>
					<Link href='/blogs'>
						<p className='w-fit p-2 m-2 text-white rounded-sm bg-orange-700 hover:bg-orange-900 transition-colors'>Back to Blog list</p>
					</Link>
				</div>
			</div>
		</div>
	);
};

BlogPostPage.propTypes = {
	params: PropTypes.object.isRequired,
};

export default BlogPostPage;
