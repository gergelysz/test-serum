import { Inter as FontSans, Poppins } from 'next/font/google';
import './styles/globals.css';
import { cn } from '@/lib/utils';

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

export default function RootLayout({ children }) {
	return (
		<html lang='en'>
			<head>
				<meta name='viewport' content='width=device-width, initial-scale=1' />
			</head>
			{/* <body className={cn('min-h-screen bg-background font-poppins antialiased', poppins.variable)}> */}
			<body className={cn('bg-gradient-to-r from-gradient-start to-gradient-end min-h-screen font-poppins antialiased', poppins.variable)}>{children}</body>
		</html>
	);
}
