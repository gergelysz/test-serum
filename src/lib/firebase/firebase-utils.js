import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from './config.js';
import { getCookie } from 'cookies-next';

const getAllBlogPosts = async () => {
	const postsCollection = await getDocs(collection(db, 'posts'));
	return postsCollection.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
};

const checkAuth = () => {
	return new Promise((resolve, reject) => {
		// Check if the cookie exists
		const token = getCookie('auth_token');
		console.log('Check auth - cookie: ' + token);

		if (!token) {
			// If no token, resolve as not authenticated
			return resolve(false);
		}

		// Check Firebase auth state
		const [user] = useAuthState(auth);

		if (user) {
			console.log('Check auth - onAuthStateChanged: ' + true);
			resolve(true);
		} else {
			console.log('Check auth - onAuthStateChanged: ' + false);
			resolve(false);
		}
	});
};

export { getAllBlogPosts, checkAuth };
