import React from 'react';
import Link from 'next/link';
import { getCookie } from 'cookies-next';

const FlyoutOrders = () => {
	return (
		<div className='w-64 bg-secondary p-6 shadow-xl text-white/70'>
			<div className='mb-3 space-y-3'>
				<h3 className='font-semibold text-white/80'>Orders</h3>
				{getCookie('auth_token') && (
					<Link href='/orders/my-orders/' className='block text-sm hover:underline'>
						My orders
					</Link>
				)}
				{getCookie('auth_token') && (
					<Link href='/orders/my-orders/history/' className='block text-sm hover:underline'>
						History
					</Link>
				)}
				<Link href='/orders/info/' className='block text-sm hover:underline'>
					Info orders
				</Link>
			</div>
			<div className='mb-3 space-y-3'>
				<h3 className='font-semibold text-white/80'>FAQ</h3>
				<Link href='/orders/faq/' className='block text-sm hover:underline'>
					Check our page for frequently asked questions
				</Link>
			</div>
			{/* <div className='mb-6 space-y-3'>
				<h3 className='font-semibold text-white/80'>Health facts</h3>
				<Link href='/products/health-facts/' className='block text-sm hover:underline'>
					Health benefits
				</Link>
				<Link href='/products/health-facts/our-products' className='block text-sm hover:underline'>
					Connection to our products
				</Link>
				<Link href='/products/health-facts/contact' className='block text-sm hover:underline'>
					Contact an expert
				</Link>
			</div> */}
			{/* <button className='w-full rounded-lg border-2 border-neutral-950 px-4 py-2 font-semibold transition-colors hover:bg-neutral-950 hover:text-white'>Contact sales</button> */}
		</div>
	);
};

export default FlyoutOrders;
