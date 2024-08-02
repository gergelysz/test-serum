import { db } from '../../../lib/firebase/config.js';
import { collection, getDocs } from 'firebase/firestore';

export async function GET() {
	try {
		const postsCollection = await getDocs(collection(db, 'posts'));
		return new Response(JSON.stringify(postsCollection.docs.map((doc) => ({ id: doc.id, ...doc.data() }))), {
			status: 200,
			headers: { 'Content-Type': 'application/json' },
		});
	} catch (error) {
		return new Response(JSON.stringify({ error: 'Failed to fetch all blogs' }), {
			status: 500,
			headers: { 'Content-Type': 'application/json' },
		});
	}
}
