'use client';

import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { signOut } from 'firebase/auth';
import { auth } from '../lib/firebase/config.js';
import { getCookie, setCookie } from 'cookies-next';
import '../styles/globals.css';
import ItemRitusom from '@/components/home-components/item-ritusom';
import ItemSkinCare from '@/components/home-components/item-skincare';
import ItemAboutUs from '@/components/home-components/item-about-us';
import ItemQuiz from '@/components/home-components/item-quiz';
import ItemYourRitual from '@/components/home-components/item-your-ritual';
import ItemSocials from '@/components/home-components/item-socials';

const sections = [<ItemRitusom key={'ritusom'} />, <ItemSkinCare key={'skincare'} />, <ItemAboutUs key={'aboutus'} />, <ItemQuiz key={'quiz'} />, <ItemYourRitual key={'yourritual'} />, <ItemSocials key={'socials'} />];

const Home = () => {
	const [user] = useAuthState(auth);
	// const userSession = sessionStorage.getItem('user');
	console.log({ user });
	console.log('auth token: ' + getCookie('auth_token'));

	return (
		<div>
			{/* {user && (
				<div>
					<p>Welcome {user.email}</p>
					<button
						className='border-cyan-600 text-white bg-black/25'
						onClick={() => {
							signOut(auth);
							sessionStorage.removeItem('user');
							setCookie('auth_token', '', {
								maxAge: 0,
							});
						}}
					>
						Log out
					</button>
				</div>
			)} */}

			{sections.map((Section, idx) => (
				<div key={idx}>{Section}</div>
			))}
		</div>
	);
};

export default Home;
