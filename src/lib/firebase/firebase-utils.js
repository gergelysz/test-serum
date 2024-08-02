const getAllBlogPosts = async () => {
	const postsCollection = await getDocs(collection(db, 'posts'));
	return postsCollection.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
};

export { getAllBlogPosts };
