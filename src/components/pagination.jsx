import React from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
	const pageNumbers = [...Array(totalPages).keys()].map((num) => num + 1);

	return (
		<div className='flex justify-center my-4'>
			<nav aria-label='Pagination'>
				<ul className='inline-flex items-center -space-x-px gap-2'>
					<li>
						<button
							onClick={() => onPageChange(currentPage - 1)}
							disabled={currentPage === 1}
							className={`px-3 py-2 leading-tight  ${
								currentPage === 1 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-secondary hover:text-white'
							} text-secondary/75 bg-white rounded-l-lg`}>
							<FaArrowLeft />
						</button>
					</li>
					{pageNumbers.map((page) => (
						<li key={page}>
							<button
								onClick={() => onPageChange(page)}
								className={`px-3 py-2 leading-tight rounded-lg  ${
									page === currentPage
										? 'text-secondary bg-white '
										: 'text-secondary/75 bg-white/50  hover:bg-secondary hover:text-white'
								}`}>
								{page}
							</button>
						</li>
					))}
					<li>
						<button
							onClick={() => onPageChange(currentPage + 1)}
							disabled={currentPage === totalPages}
							className={`px-3 py-2 leading-tight  ${
								currentPage === totalPages ? 'opacity-50 cursor-not-allowed' : 'hover:bg-secondary hover:text-white'
							} text-secondary/75 bg-white rounded-r-lg`}>
							<FaArrowRight />
						</button>
					</li>
				</ul>
			</nav>
		</div>
	);
};

export default Pagination;
