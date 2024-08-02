import { NextResponse } from 'next/server';
import { collection, getDocs, addDoc, updateDoc, deleteDoc, doc } from 'firebase/firestore';
import { db } from '../../../../lib/firebase/config.js';

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
	try {
		const { id } = await request.json();
		const docRef = doc(db, 'products', id);
		await deleteDoc(docRef);
		return NextResponse.json({ id });
	} catch (error) {
		console.error('Error deleting product:', error);
		return NextResponse.error();
	}
}
