import { db } from '../../../../lib/firebase/config.js';
import { doc, getDoc } from 'firebase/firestore';

export async function GET(request, { params }) {
	const { blogId } = params;
	console.log('bloggggiddddd: ' + blogId);

	try {
		console.log('Sending request');
		const docRef = doc(db, 'posts', blogId);
		const docSnap = await getDoc(docRef);

		if (docSnap.exists()) {
			return new Response(JSON.stringify(docSnap.data()), {
				status: 200,
				headers: { 'Content-Type': 'application/json' },
			});
		} else {
			return new Response(JSON.stringify({ error: 'Document not found' }), {
				status: 404,
				headers: { 'Content-Type': 'application/json' },
			});
		}
	} catch (error) {
		return new Response(JSON.stringify({ error: 'Failed to fetch document' }), {
			status: 500,
			headers: { 'Content-Type': 'application/json' },
		});
	}
}
