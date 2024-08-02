import { Button } from './ui/button';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import PropTypes from 'prop-types';

const PrevQuestionButton = ({ onClick }) => {
	return (
		<Button onClick={onClick} className='absolute bottom-4 left-8 xs:left-2 sm:left-4 md:left-6 lg:left-8 px-4 xs:px-3 sm:px-3 md:px-4 lg:px-4 py-6 xs:py-4 sm:py-4 md:py-5 lg:py-6 rounded-full hover:bg-green-900/50'>
			<FaArrowLeft className='text-xl xs:text-xs sm:text-base md:text-lg lg:text-xl' />
		</Button>
	);
};

PrevQuestionButton.propTypes = {
	onClick: PropTypes.func.isRequired,
};

const NextQuestionButton = ({ onClick }) => {
	return (
		<Button onClick={onClick} className='absolute bottom-4 right-8 xs:right-2 sm:right-4 md:right-6 lg:right-8 px-4 xs:px-3 sm:px-3 md:px-4 lg:px-4 py-6 xs:py-4 sm:py-4 md:py-5 lg:py-6 rounded-full hover:bg-green-900/50'>
			<FaArrowRight className='text-xl xs:text-xs sm:text-base md:text-lg lg:text-xl' />
		</Button>
	);
};

NextQuestionButton.propTypes = {
	onClick: PropTypes.func.isRequired,
};

export { NextQuestionButton, PrevQuestionButton };
