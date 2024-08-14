import { NextResponse } from 'next/server';
import { collection, getDocs, addDoc, updateDoc, deleteDoc, doc } from 'firebase/firestore';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth, db } from '../../../../lib/firebase/config.js';

export async function GET() {
	try {
		console.log('getting prods');
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

export async function POST(request) {
	try {
		const data = await request.json();
		const docRef = await addDoc(collection(db, 'products'), data);
		return NextResponse.json({ id: docRef.id, ...data });
	} catch (error) {
		console.error('Error adding product:', error);
		return NextResponse.error();
	}
}

export async function PUT(request) {
	try {
		const { id, ...data } = await request.json();
		const docRef = doc(db, 'products', id);
		await updateDoc(docRef, data);
		return NextResponse.json({ id, ...data });
	} catch (error) {
		console.error('Error updating product:', error);
		return NextResponse.error();
	}
}

export async function DELETE(request) {
	console.log('asd');
	console.log(request);

	try {
		// const [user] = useAuthState(auth);
		console.log('asd2');
		// if (!user) {
		// 	return NextResponse.json({ error: 'User not authenticated' }, { status: 401 });
		// }
		const { productId } = await request.body;
		console.log('Product id: ' + productId);
		console.log('Request body: ' + request.body);
		console.log('Request body str: ' + JSON.stringify(request.body));

		if (!productId) {
			return NextResponse.json({ error: 'Product ID is required' }, { status: 404 });
		}
		const { id } = request.json();
		const docRef = doc(db, 'products', id);
		await deleteDoc(docRef);
		return NextResponse.json({ id });
	} catch (error) {
		console.log(error);
		return NextResponse.json({ error: 'Product ID is required. + ' + error }, { status: 404 });
	}
}
