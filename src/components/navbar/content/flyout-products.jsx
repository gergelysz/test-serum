import Link from 'next/link';
import React from 'react';
import { getCookie } from 'cookies-next';

const FlyoutProducts = () => {
	return (
		<div className='w-64 bg-secondary p-6 shadow-xl text-white/70 flex flex-col'>
			<div className='mb-3 space-y-3'>
				<p className='font-semibold text-white/80'>Products</p>
				<Link href='/products/nails-care/' className='block text-sm hover:underline'>
					Nails care
				</Link>
				<Link href='/products/skin-care/' className='block text-sm hover:underline'>
					Skincare
				</Link>
				<Link href='/products/hair-health/' className='block text-sm hover:underline'>
					Hair health
				</Link>
				<Link href='/products/respiratory-health/' className='block text-sm hover:underline'>
					Respiratory health
				</Link>
				<Link href='/products/immunity-enhancements' className='block text-sm hover:underline'>
					Immunity enhancements
				</Link>
				<Link href='/products/teeth-health' className='block text-sm hover:underline'>
					Teeth health
				</Link>
			</div>
			<div className='mb-3 space-y-3'>
				<h3 className='font-semibold text-white/80'>For Individuals</h3>
				<Link href='/products/ind/' className='block text-sm hover:underline'>
					All product items
				</Link>
				{getCookie('auth_token') && (
					<Link href='/products/admin/' className='block text-sm hover:underline font-semibold text-gray-900/80'>
						Access ADMIN page
					</Link>
				)}
				<Link href='/products/ind/categories' className='block text-sm hover:underline'>
					Categories
				</Link>
			</div>
			<div className='mb-6 space-y-3'>
				<h3 className='font-semibold text-white/80'>For Companies</h3>
				<Link href='/products/cmp/categories' className='block text-sm hover:underline'>
					Categories
				</Link>
				<Link href='/products/cmp/shipment' className='block text-sm hover:underline'>
					Shipment
				</Link>
				<Link href='/products/cmp' className='block text-sm hover:underline'>
					More info
				</Link>
			</div>
			<button className='w-full rounded-lg border-2 border-neutral-950 px-4 py-2 font-semibold transition-colors hover:bg-neutral-950 hover:text-white'>Contact sales</button>
		</div>
	);
};

export default FlyoutProducts;
