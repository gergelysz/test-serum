'use client';

import React, { useState, useEffect } from 'react';
import { auth } from '../../lib/firebase/config.js';
import { getCookie, setCookie } from 'cookies-next';
import { useAuthState } from 'react-firebase-hooks/auth';
import Link from 'next/link.js';
import Image from 'next/image.js';
import Loading from '@/components/loading.jsx';

const BlogPage = () => {
	const [user] = useAuthState(auth);
	const [posts, setPosts] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	useEffect(() => {
		const fetchPost = async () => {
			try {
				const response = await fetch(`/blogs/api/`);
				if (response.ok) {
					const data = await response.json();
					setPosts(data);
				} else {
					setError('Failed to load post. Response not ok');
				}
			} catch (error) {
				setError('Failed to load post. Error: ' + error);
			} finally {
				setLoading(false);
			}
		};

		fetchPost();
	}, []);

	if (loading) return <Loading />;
	if (error) return <div>{error}</div>;

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

	return (
		<div>
			{user && getCookie('auth_token') && (
				<div className='p-4 xs:p-5 xs:pr-5 md:p-4 md:pr-0 lg:p-4 lg:pr-0 bg-green-900 text-white text-center text-base xs:text-xs md:text-sm lg:text-base'>
					<Link className='text-white hover:text-blue-500 hover:underline transition-colors' href='/blogs/admin'>
						Access administrative page for blogs (as administrator {user.email})
					</Link>
				</div>
			)}
			<div className='flex flex-col flex-1 space-y-8 xs:space-y-3 md:space-y-8 lg:space-y-8 p-10 xs:p-4 md:p-8 lg:p-10 bg-orange-200 items-center'>
				{posts.map((post) => (
					// <Link key={post.id} className='text-2xl text-green-900/80 mb-2 hover:text-yellow-700/50 transition-colors' href={`/blogs/${post.id}`}>
					<Link key={post.id} className='text-2xl rounded-lg bg-orange-800/30 hover:bg-orange-900/50 transition-colors shadow-md w-2/3 xs:w-11/12 md:w-2/3 lg:w-2/3' href={`/blogs/${post.id}`}>
						<div className='flex flex-row w-full h-80 xs:h-32 md:h-64 lg:h-80 xs:items-start md:items-center lg:items-start'>
							<div className='w-1/3 m-6 xs:m-1 md:m-4 lg:m-6'>
								{/* <Image src={post.image} alt={post.title} width={400} height={200} className='w-full md:w-1/3 object-cover rounded-lg' /> */}
								<Image priority={true} src={post.image} alt={post.title} width={1000} height={1000} className='w-64 h-64 xs:w-28 xs:h-28 md:w-32 md:h-32 lg:w-64 lg:h-64 object-cover rounded-lg mb-6' />
							</div>
							<div className='w-full m-6 xs:m-1 md:m-4 lg:m-6 p-6 xs:p-1 md:p-2 rounded-lg'>
								<p className='text-3xl xs:text-sm md:text-base lg:text-3xl font-semibold text-primary'>{post.title}</p>
								<p className='text-lg xs:text-xs md:text-xs lg:text-lg text-orange-700/90 mb-1'>By {post.author}</p>
								<p className='text-lg xs:text-xs md:text-xs lg:text-lg text-orange-800/90 mb-4 xs:mb-1 md:mb-2 lg:mb-4'>Published on {formatDate(post.publishedDate)}</p>
								<div className='max-sm:hidden text-lg xs:text-xs md:text-xs lg:text-lg text-orange-900/90'>
									<p>{post.content.slice(0, 200)}...</p>
								</div>
							</div>
						</div>
					</Link>
				))}
			</div>
		</div>
	);
};

export default BlogPage;
