'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import './styles/globals.css';
import serumsImage from '../../public/kerek/1.png';
import creamsAndLotionsImage from '../../public/kerek/2.png';
import faceSculptingAccImage from '../../public/kerek/3.png';
import aboutUsImage from '../../public/teglalap/3.png';
import createYourRitualImage from '../../public/teglalap/2.png';
import { CustomButton } from '@/components/cust-button';
import SocialIcons from '@/components/social-icons';
import QuestionCarousel from '@/components/question-carousel';
import TopPage from '@/components/top-page';
import jsonQuizData from '../../public/quiz.json';
import LoadingSpinner from '@/components/loading-spinner';

export default function Home() {
	const [isLoading, setIsLoading] = useState(true);

	const data = JSON.parse(JSON.stringify(jsonQuizData));

	useEffect(() => {
		const timeout = setTimeout(() => {
			setIsLoading(false);
		}, 200);

		return () => clearTimeout(timeout);
	}, []);

	return (
		<div>
			{/* First Part */}
			{isLoading ? <LoadingSpinner /> : <TopPage />}
			{/* <TopPage /> */}
			{/* Second part */}
			<div className='min-h-screen flex flex-col items-center justify-center space-y-8 xs:space-y-1 sm:space-y-2 md:space-y-5 lg:space-y-8 my-24 py-2'>
				{/* First div with centered h1 */}
				<div className='flex items-center justify-center h-64 sm:h-32 md:h-44 lg:h-64 w-full'>
					<p className='m-10 xs:m-2 sm:m-5 md:m-10 lg:m-10 text-5xl xs:text-xl sm:text-2xl md:text-3xl lg:text-5xl tracking-tight text-center'>Sticking to a skincare routine has never been easier!</p>
				</div>

				{/* Second div with three child divs */}
				<div className='flex flex-row xs:flex-col sm:flex-col md:flex-row lg:flex-row w-full min-h-fit space-x-4'>
					{/* <div className='flex-1 flex items-center justify-center'> */}
					<div className='min-h-fit flex flex-1 flex-col items-center justify-center'>
						<Image src={serumsImage} alt='Serums image' className='w-fit xs:w-28 sm:w-36 md:w-52 lg:w-80' />
						<p className='p-4 m-4 text-2xl xs:text-base sm:text-lg md:text-xl lg:text-2xl font-semibold'>Serums</p>
						<p className='w-1/3 text-base xs:text-xs sm:text-xs md:text-sm lg:text-base text-center'>There is just enough space here for several lines of text. Use it well.</p>
					</div>
					{/* <div className='flex-1 flex items-center justify-center'> */}
					<div className='min-h-fit flex flex-1 flex-col items-center justify-center mt-10'>
						<Image src={creamsAndLotionsImage} alt='Creams and lotions image' className='w-fit xs:w-28 sm:w-36 md:w-52 lg:w-80' />
						<p className='p-4 m-4 text-2xl xs:text-base sm:text-lg md:text-xl lg:text-2xl font-semibold'>Creams and Lotions</p>
						<p className='w-1/3 text-base xs:text-xs sm:text-xs md:text-sm lg:text-base text-center'>There is just enough space here for several lines of text. Use it well.</p>
					</div>
					{/* <div className='flex-1 flex items-center justify-center'> */}
					<div className='min-h-fit flex flex-1 flex-col items-center justify-center mt-10'>
						<Image src={faceSculptingAccImage} alt='Face sculpting acc image' className='w-fit xs:w-28 sm:w-36 md:w-52 lg:w-80' />
						<p className='p-4 m-4 text-2xl xs:text-base sm:text-lg md:text-xl lg:text-2xl font-semibold'>Face Sculpting Accessories</p>
						<p className='w-1/3 text-base xs:text-xs sm:text-xs md:text-sm lg:text-base text-center'>There is just enough space here for several lines of text. Use it well.</p>
					</div>
				</div>
			</div>

			{/* Third part */}
			<div className='min-h-fit min-w-full flex flex-row'>
				{/* About us description */}
				<div className='w-4/6'>
					<div className='flex flex-col p-20 xs:p-10 sm:p-12 md:p-14 lg:p-20 ml-44 xs:ml-5 sm:ml-10 md:ml-32 lg:ml-44'>
						<p className='text-4xl xs:text-sm sm:text-xl md:text-2xl lg:text-4xl bg-lime-800/75 text-white w-fit p-2 mb-6'>About us</p>
						<p className='mt-5 mb-5 w-2/3 xs:w-11/12 sm:w-11/12 md:w-11/12 lg:w-2/3 text-2xl xs:text-xs sm:text-sm md:text-base lg:text-2xl'>
							At <i>Rítusom</i>, we believe in the power of <b>simplicity and purity</b>.
						</p>
						<p className='mt-5 mb-5 w-2/3 xs:w-11/12 sm:w-11/12 md:w-11/12 lg:w-2/3 text-2xl xs:text-xs sm:text-sm md:text-base lg:text-2xl'>
							We offer <b>100% clean</b> skincare products that are tailored to your unique skin type and concerns, making it effortless to create a <b>personalized skincare ritual</b>.
						</p>
						<p className='mt-5 mb-5 w-2/3 xs:w-11/12 sm:w-11/12 md:w-11/12 lg:w-2/3 text-2xl xs:text-xs sm:text-sm md:text-base lg:text-2xl'>
							Embrace the beauty of natural, effective skincare with <b>monthly packages</b> designed just for you. Your journey to <b>radiant, healthy skin starts here</b>.
						</p>
						<CustomButton text={'Learn More About Us'} />
					</div>
				</div>
				{/* About us image */}
				<div className='w-2/6'>
					<div className='min-h-fit flex items-center justify-center p-20 xs:p-0 sm:p-2 md:p-10 lg:p-20'>
						<Image className='p-5 mr-32 xs:mr-2 sm:mr-4 md:mr-16 lg:mr-32' src={aboutUsImage} alt='About us image' />
					</div>
				</div>
			</div>

			{/* Fourth part */}
			<div className='flex flex-col items-center justify-center space-y-7 bg-serums bg-cover bg-center'>
				<p className='text-4xl xs:text-base sm:text-lg md:text-2xl lg:text-4xl'>Take our test and create your ritual!</p>
				<p className='text-4xl xs:text-base sm:text-lg md:text-2xl lg:text-4xl bg-lime-800/75 text-white font-bold p-3 pl-7 pr-7'>About you</p>
				<div className='relative min-h-fit min-w-full flex flex-col items-center justify-center'>
					<QuestionCarousel data={data} />
				</div>
			</div>

			{/* Fifth part */}
			<div className='min-h-fit min-w-full flex xs:flex-col md:flex-row'>
				<div className='w-3/6 xs:w-5/6 sm:w-5/6 md:w-3/6 p-0'>
					<div className='min-h-full flex items-center justify-center p-24 xs:p-6'>
						<div className='text-left'>
							<p className='text-6xl xs:text-base sm:text-xl md:text-4xl lg:text-6xl font-bold m-3 mb-10'>
								Create your own ritual with <i>Rítusom</i>
							</p>
							<p className='text-2xl xs:text-xs sm:text-xs md:text-base lg:text-2xl m-3 mb-10'>
								We help you create a personalized skincare routine for you based on your test results. How do we do that? We curate your routine using products from well-known brands recognized for their clean and effective skincare
								solutions and we tailor your personalized package to your budget.
							</p>
							<CustomButton text={"Let's Create Your Ritual!"} />
						</div>
					</div>
				</div>
				<div className='w-3/6 xs:w-fit sm:w-3/6 p-0 xs:self-center md:self-start'>
					<Image src={createYourRitualImage} alt='Create your ritual image' className='p-5 xs:w-52 sm:w-fit md:w-fit lg:w-fit' />
				</div>
			</div>

			{/* Sixth part */}
			<div className='min-h-fit min-w-full flex'>
				<div className='w-3/6 p-0'>
					<div className='flex items-center justify-center p-24 sm:p-10 md:p-16 lg:p-24'>
						<div className='text-left'>
							<p className='text-4xl xs:text-sm sm:text-base md:text-2xl lg:4xl font-bold mb-10 xs:mb-5 sm:mb-5 md:mb-8 lg:mb-10'>We offer you a 10% discount for your first month with Rítusom.</p>
							<SocialIcons />
						</div>
					</div>
				</div>
				<div className='w-3/6 p-0'>
					<div className='flex flex-col items-center justify-center p-24 xs:p-2 md:p-24 mt-0 xs:mt-20 sm:mt-10 md:mt-0'>
						<CustomButton text={'Enjoy Your First Ritual!'} />
						<p className='text-lg xs:text-xs sm:text-sm md:text-base lg:text-lg font-sans font-bold mt-5'>www.ritusom.com</p>
					</div>
				</div>
			</div>
		</div>
	);
}
