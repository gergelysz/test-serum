'use client';

import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../lib/firebase/config.js';
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

	return (
		<div>
			{sections.map((Section, idx) => (
				<div key={idx}>{Section}</div>
			))}
		</div>
	);
};

export default Home;
