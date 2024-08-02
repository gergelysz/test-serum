'use client';

import React, { useState, useEffect } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { collection, addDoc, getDocs, doc, updateDoc, deleteDoc } from 'firebase/firestore';
import { auth, db } from '../../../lib/firebase/config.js';
import ContentRenderer from '@/components/blogs/content-renderer.js';

const BlogAdmin = () => {
	const [title, setTitle] = useState('');
	const [content, setContent] = useState('');
	const [image, setImage] = useState('');
	const [posts, setPosts] = useState([]);
	const [isEditing, setIsEditing] = useState(false);
	const [editId, setEditId] = useState(null);

	const [user] = useAuthState(auth);

	useEffect(() => {
		fetchPosts();
	}, []);

	const fetchPosts = async () => {
		const postsCollection = await getDocs(collection(db, 'posts'));
		setPosts(postsCollection.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
	};

	const createOrUpdatePost = async () => {
		if (isEditing && editId) {
			// Update post
			console.log('isEditing: ' + isEditing + ' editId: ' + editId);
			await updateDoc(doc(db, 'posts', editId), { title: title, content: content, image: image });
		} else {
			// Create new post
			let publishedDate = new Date().toISOString();
			let author = user.email;
			await addDoc(collection(db, 'posts'), { title, content, image, publishedDate, author });
		}
		setTitle('');
		setContent('');
		setImage('');
		setIsEditing(false);
		setEditId(null);
		fetchPosts();
	};

	const startEdit = (post) => {
		setIsEditing(true);
		setEditId(post.id);
		setTitle(post.title);
		setContent(post.content);
		setImage(post.image);
	};

	const deletePost = async (id) => {
		await deleteDoc(doc(db, 'posts', id));
		fetchPosts();
	};

	return (
		<div className='flex flex-col items-center py-8 px-4 sm:px-6 lg:px-8 min-h-screen'>
			<p className='text-3xl font-bold mb-6 text-green-900/90'>Admin Panel</p>
			<div className='w-3/4 p-6 rounded-lg shadow-lg'>
				<p className='text-xl font-semibold mb-4 text-green-900/90'>{isEditing ? 'Edit Post' : 'Create New Post'}</p>
				<div className='border-4 rounded-3xl w-fit text-center mx-auto p-2 border-green-900/90 text-green-900/90 m-7'>
					<p className='text-lg font-bold underline'>Editing instructions</p>
					<p className='text-base font-semibold'>Text contents are checked:</p>
					<ul className='list-disc text-sm list-inside text-left'>
						<li>
							Text is identified by every <span className='font-bold'>ENTER</span> pressed (\n char)
						</li>
						<li>
							Lines ending in <span className='font-bold'>':'</span> have a bigger, bolder font
						</li>
						<li>
							Lines ending in <span className='font-bold'>'.'</span> have a normal paragraph format
						</li>
						<li>Every other line is considered a title or a list item, bigger font, styled list item</li>
					</ul>
				</div>

				<input type='text' placeholder='Title' value={title} onChange={(e) => setTitle(e.target.value)} className='w-full p-2 mb-4 border border-green-500 rounded focus:outline-none focus:border-green-800' />
				<textarea placeholder='Content' value={content} onChange={(e) => setContent(e.target.value)} className='w-full p-2 mb-4 border border-green-500 rounded focus:outline-none focus:border-green-800' rows='10' />
				<input type='text' placeholder='Image URL' value={image} onChange={(e) => setImage(e.target.value)} className='w-full p-2 mb-4 border border-green-500 rounded focus:outline-none focus:border-green-800' />
				<button onClick={createOrUpdatePost} className='w-full bg-green-900 text-white p-2 rounded hover:bg-green-950 transition duration-200'>
					{isEditing ? 'Update Post' : 'Create Post'}
				</button>
			</div>
			<div className='w-full max-w-2xl mt-8'>
				<p className='text-xl font-semibold mb-4 text-green-900/90'>Existing Posts</p>
				<p className='text-lg font-semibold mb-10 text-green-900/80'>{posts.length} total blog articles</p>
				{posts.length === 0 ? (
					<p className='text-gray-600'>No posts available</p>
				) : (
					posts.map((post) => (
						<div key={post.id} className='text-green-900/80 p-4 mb-4 rounded-lg shadow-md hover:bg-green-950/75 hover:text-white transition duration-200'>
							<p className='text-lg font-semibold'>
								{post.title} - {post.author}
							</p>
							<ContentRenderer content={post.content.slice(0, 250)} />
							<div className='flex justify-end space-x-2'>
								<button onClick={() => startEdit(post)} className='text-white/95 bg-green-900/50 p-2 rounded hover:bg-yellow-600 transition duration-200'>
									Edit
								</button>
								<button onClick={() => deletePost(post.id)} className='text-white/95 bg-green-950/50 p-2 rounded hover:bg-red-600 transition duration-200'>
									Delete
								</button>
							</div>
						</div>
					))
				)}
			</div>
		</div>
	);
};

export default BlogAdmin;
