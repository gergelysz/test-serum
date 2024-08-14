export const menuItems = [
	{
		title: 'Home',
		href: '/',
	},
	{
		title: 'Services',
		href: '/services',
		submenu: [
			{
				title: 'Product orders',
				href: '/services/product-orders',
				submenu: [
					{
						title: 'Order status',
						href: '/services/product-orders',
					},
					{
						title: 'FAQ',
						href: '/services/faq',
					},
				],
			},
			{
				title: 'Product choices',
				href: '/services/product-choices',
			},
		],
	},
	{
		title: 'Products',
		href: '/products',
		submenu: [
			{
				title: 'Product categories',
				href: '/products',
				submenu: [
					{
						title: 'All products',
						href: '/products',
					},
					{
						title: 'Hair products',
						href: '/products',
					},
					{
						title: 'Nail products',
						href: '/products',
					},
				],
			},
		],
	},
	{
		title: 'Blogs',
		href: '/blogs',
	},
	{
		title: 'Contact',
		href: '/contact',
	},
	{
		title: 'Sign In',
		href: '/sign-in',
	},
	{
		title: 'Sign Up',
		href: '/sign-up',
	},
	{
		title: 'Sign Out',
		href: '/sign-out',
	},
];
