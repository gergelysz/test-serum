import { Inter as FontSans, Poppins } from 'next/font/google';
import './styles/globals.css';
import { cn } from '@/lib/utils';
// import { appWithTranslation } from 'next-i18next';
import NavigatorBurger from '@/components/navigator-burger';
import Link from 'next/link';

const fontSans = FontSans({
	subsets: ['latin'],
	variable: '--font-sans',
});

const poppins = Poppins({
	subsets: ['latin'],
	display: 'swap',
	variable: '--font-poppins',
	weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
});

export const metadata = {
	title: 'Serum',
	description: 'Lorem ipsum',
};

const pagesList = [
	{ name: 'Home', path: '/' },
	{ name: 'About us', path: '/about' },
	{ name: 'Services', path: '/services' },
];

function RootLayout({ children }) {
	return (
		<html lang='en'>
			<head>
				<meta name='viewport' content='width=device-width, initial-scale=1' />
			</head>
			{/* <body className={cn('min-h-screen bg-background font-poppins antialiased', poppins.variable)}> */}
			<body className={cn('bg-gradient-to-r from-gradient-start to-gradient-end min-h-screen font-poppins antialiased', poppins.variable)}>
				{/* <div className='flex flex-row space-x-4 ml-5'>
					{pagesList.map((pageListItem) => (
						// <p key={pageListItem.name}>{pageListItem.name}</p>
						<Link key={pageListItem.name} href={pageListItem.path} className='text-sm'>
							{pageListItem.name}
						</Link>
					))}
				</div> */}
				<NavigatorBurger />
				{children}
			</body>
		</html>
	);
}

export default RootLayout;
