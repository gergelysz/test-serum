// 'use client';

// import React from 'react';
// import { useRouter } from 'next/navigation';
// import i18nextConfig from '../../next-i18next.config';

// const LanguageSwitcher = () => {
// 	const router = useRouter();
// 	const { locales } = i18nextConfig.i18n;
// 	const currentLocale = router.locale;

// 	const changeLanguage = (locale) => {
// 		router.push(router.pathname, router.asPath, { locale });
// 	};

// 	return (
// 		<div>
// 			{locales.map((locale) => (
// 				<button
// 					key={locale}
// 					onClick={() => changeLanguage(locale)}
// 					style={{
// 						fontWeight: currentLocale === locale ? 'bold' : 'normal',
// 						marginRight: '10px',
// 					}}
// 				>
// 					{locale.toUpperCase()}
// 				</button>
// 			))}
// 		</div>
// 	);
// };

// export default LanguageSwitcher;
