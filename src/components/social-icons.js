import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const SocialIcons = () => {
	return (
		<div className='flex space-x-4 sm:space-x-2 md:space-x-3 lg:space-x-4'>
			<a href='https://instagram.com' target='_blank' rel='noopener noreferrer' className='text-black hover:text-pink-700'>
				<FaInstagram size={30} className='w-fit sm:w-4 md:w-5 lg:w-fit' />
			</a>
			<a href='https://facebook.com' target='_blank' rel='noopener noreferrer' className='text-black hover:text-blue-800'>
				<FaFacebook size={30} className='w-fit sm:w-4 md:w-5 lg:w-fit' />
			</a>
			<a href='https://twitter.com' target='_blank' rel='noopener noreferrer' className='text-black hover:text-blue-600'>
				<FaTwitter title={'Twitter'} size={30} className='w-fit sm:w-4 md:w-5 lg:w-fit' />
			</a>
			<a href='https://linkedin.com' target='_blank' rel='noopener noreferrer' className='text-black hover:text-blue-900'>
				<FaLinkedin size={30} className='w-fit sm:w-4 md:w-5 lg:w-fit' />
			</a>
		</div>
	);
};

export default SocialIcons;
