import React from 'react';
import PropTypes from 'prop-types';
import { FaArrowUp, FaArrowDown } from 'react-icons/fa';

function ButtonMovePages({ paginate }) {
	return (
		<div className='absolute top-1/2 right-5 transform -translate-y-1/2 flex flex-col space-y-4'>
			<button onClick={() => paginate(-1)} className='bg-gray-800 text-white px-2 py-1 rounded-full hover:bg-gray-700 w-10 h-10 flex items-center justify-center'>
				<FaArrowUp className='text-base' />
			</button>
			<button onClick={() => paginate(1)} className='bg-gray-800 text-white px-2 py-1 rounded-full hover:bg-gray-700 w-10 h-10 flex items-center justify-center'>
				<FaArrowDown className='text-base' />
			</button>
		</div>
	);
}

ButtonMovePages.propTypes = {
	paginate: PropTypes.func.isRequired,
};

export default ButtonMovePages;
