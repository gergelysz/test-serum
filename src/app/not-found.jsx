import Link from 'next/link';

export default function NotFoundPage() {
	return (
		<div className='flex flex-col items-center justify-center h-screen font-poppins'>
			<h1 className='text-4xl font-bold'>404 - Page Not Found</h1>
			<p className='text-gray-600 mt-2'>Sorry, the page you&apos;re looking for does not exist.</p>
			<Link href='/' className='mt-4 text-blue-500 hover:underline'>
				Go back to home
			</Link>
		</div>
	);
}
