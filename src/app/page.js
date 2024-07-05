import Image from 'next/image';
import NavigatorBurger from '../components/navigator-burger';
import './styles/globals.css';
import homeImage from '../../public/teglalap/1.png';
import serumsImage from '../../public/kerek/1.png';
import creamsAndLotionsImage from '../../public/kerek/2.png';
import faceSculptingAccImage from '../../public/kerek/3.png';
import aboutUsImage from '../../public/teglalap/3.png';
import createYourRitualImage from '../../public/teglalap/2.png';
import { CustomButton, TestButton } from '@/components/cust-button';
import SocialIcons from '@/components/social-icons';
import QuestionCarousel from '@/components/question-carousel';
import ResponsiveImage from '@/components/responsive-image';

export default function Home() {
	const data = [
		{
			question: 'What is your skin type?',
			answers: ['Acne prone skin', 'Sensitive skin', 'Dry skin', 'Normal skin', 'Oily skin', 'Mature skin'],
			multipleAnswersAllowed: true,
		},
		{
			question: 'What are your main skin concerns?',
			answers: ['Acne and breakouts', 'Dryness and flaking', 'Wrinkles and signs of aging', 'Pigmentation and discoloration', 'Sensitivity and redness', 'No specific concern'],
			multipleAnswersAllowed: true,
		},
		{
			question: 'Which age group do you belong to?',
			answers: ['Under 18', '18-24 years', '25-34 years', '35-44 years', '45-54 years', '55 years and older'],
			multipleAnswersAllowed: false,
		},
		{
			question: 'How often do you follow a skincare routine?',
			answers: ['Twice a day (morning and night)', 'Once a day (morning or night)', 'A few times a week', 'Occasionally', 'Never', 'It varies'],
			multipleAnswersAllowed: false,
		},
		{
			question: 'How often do you exercise or sweat intensely?',
			answers: ['Daily', '3-5 times a week', '1-2 times a week', 'A few times a month', 'Never', 'It varies'],
			multipleAnswersAllowed: false,
		},
		{
			question: 'How much attention do you pay to healthy eating?',
			answers: ['Very attentive', 'Attentive, but with occasional indulgencies', 'Generally try to be attentive', 'Rarely attentive', 'Not at all attentive', 'Not sure'],
			multipleAnswersAllowed: false,
		},
		{
			question: 'How many hours do you sleep on average per night?',
			answers: ['More than 8 hours', '7-8 hours', '6-7 hours', '5-6 hours', 'Less than 5 hours', 'It varies'],
			multipleAnswersAllowed: false,
		},
		{
			question: 'How much do you spend on skincare products per month?',
			answers: ['Less than 100 RON / 20 EUR', '100-200 RON / 20-40 EUR', '200-400 RON / 40-80 EUR', '400-600 RON / 80-120 EUR', 'More than 600 RON / 120 EUR', 'Not sure / no specific budget'],
			multipleAnswersAllowed: false,
		},
		{
			question: 'How often do you use sunscreen?',
			answers: ['Every day', 'Only in summer', 'Only on sunny days', 'Occasionally', 'Never', 'Not sure / do not use'],
			multipleAnswersAllowed: false,
		},
		{
			question: 'Which type of skincare products do you prefer?',
			answers: ['Natural / organic', 'Dermatologically tested', 'Luxury brands', 'Pharmacy brands', 'Best value for money', "Doesn't matter, as long as it's effective"],
			multipleAnswersAllowed: true,
		},
	];

	return (
		<div>
			{/* First Part */}
			<div className='min-h-full min-w-full flex flex-row'>
				<div className='w-1/2 xs:w-full lg:w-1/2 p-0'>
					<ResponsiveImage src={homeImage} alt='Home page image'>
						<p className='text-7xl xs:text-7xl sm:text-7xl md:text-7xl lg:text-7xl font-bold m-3'>Rítusom</p>
						<p className='text-3xl xs:text-xl sm:text-2xl md:text-3xl lg:text-3xl'>Your personalized skincare ritual</p>
					</ResponsiveImage>
				</div>
				<div className='w-1/2 xs:w-1/6 sm:w-1/6 lg:w-1/2 p-4 xs:p-0 md:p-4'>
					<NavigatorBurger />
					<div className='h-full flex flex-col items-center justify-center text-center xs:invisible lg:visible'>
						<p className='text-7xl xs:text-2xl sm:text-3xl md:text-5xl lg:text-7xl font-bold m-3'>Rítusom</p>
						<p className='text-3xl xs:text-xs sm:text-sm md:text-xl lg:text-3xl'>Your personalized skincare ritual</p>
					</div>
				</div>
			</div>

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
