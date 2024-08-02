import { NextResponse } from 'next/server';
import { db } from '../../../lib/firebase/config';
import { collection, getDocs } from 'firebase/firestore';

export async function GET() {
	try {
		const querySnapshot = await getDocs(collection(db, 'products'));
		const products = [];
		querySnapshot.forEach((doc) => {
			products.push({ id: doc.id, ...doc.data() });
		});
		return NextResponse.json({ products });
	} catch (error) {
		console.error('Error fetching products:', error);
		return NextResponse.error();
	}
}
