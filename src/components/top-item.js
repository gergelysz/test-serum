import ResponsiveImage from './responsive-image';
import NavigatorBurger from './navigator-burger';

function TopItem() {
	return (
		<div className='min-h-full min-w-full flex flex-row'>
			<div className='w-3/6 p-0'>
				{/* <Image src={homeImage} layout='fill' objectFit='contain' alt='Home page image' className='w-full h-full' /> */}
				<ResponsiveImage src={homeImage} alt='Home page image'>
					<p className='text-7xl xs:text-2xl sm:text-3xl md:text-5xl lg:text-7xl font-bold m-3'>Rítusom</p>
					<p className='text-3xl xs:text-xs sm:text-sm md:text-xl lg:text-3xl'>Your personalized skincare ritual</p>
				</ResponsiveImage>
			</div>
			<div className='w-3/6 p-4 bg-transparent'>
				<NavigatorBurger />
				<div className='h-full flex flex-col items-center justify-center text-center'>
					<p className='text-7xl xs:text-2xl sm:text-3xl md:text-5xl lg:text-7xl font-bold m-3'>Rítusom</p>
					<p className='text-3xl xs:text-xs sm:text-sm md:text-xl lg:text-3xl'>Your personalized skincare ritual</p>
				</div>
			</div>
		</div>
	);
}

export default TopItem;
