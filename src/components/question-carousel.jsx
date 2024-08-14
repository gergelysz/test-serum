'use client';

import React, { useState, useEffect } from 'react';
import { SummaryButton, TestButton } from './cust-button';
import { NextQuestionButton, PrevQuestionButton } from '@/components/question-move-button.jsx';
import PropTypes from 'prop-types';
import Modal from './modal';
import CacheHandler from '../../cache-handler.js';

const cacheHandler = new CacheHandler();
const cacheKey = 'quizData';

const QuestionCarousel = ({ data }) => {
	const [currentIndex, setCurrentIndex] = useState(0);
	const [selectedAnswers, setSelectedAnswers] = useState(data.map(() => []));
	const [isOpen, setIsOpen] = useState(false);

	useEffect(() => {
		const cachedData = cacheHandler.get(cacheKey);
		if (cachedData) {
			setSelectedAnswers(cachedData.value);
			return;
		}
	}, [selectedAnswers]);

	const nextQuestion = () => {
		setCurrentIndex((prevIndex) => (prevIndex + 1) % data.length);
		// setTimeout(() => ) TODO
	};

	const previousQuestion = () => {
		setCurrentIndex((prevIndex) => (prevIndex - 1 + data.length) % data.length);
		// setTimeout(() => ) TODO
	};

	const handleSelect = (answer) => {
		setSelectedAnswers((prevSelectedAnswers) => {
			const newSelectedAnswers = [...prevSelectedAnswers];
			if (data[currentIndex].multipleAnswersAllowed) {
				const currentAnswers = newSelectedAnswers[currentIndex];
				if (currentAnswers.includes(answer)) {
					newSelectedAnswers[currentIndex] = currentAnswers.filter((a) => a !== answer);
				} else {
					newSelectedAnswers[currentIndex] = [...currentAnswers, answer];
				}
			} else {
				newSelectedAnswers[currentIndex] = [answer];
			}
			// Cookies.set('serum-quiz-responses', newSelectedAnswers, { expires: 7 });
			cacheHandler.set(cacheKey, newSelectedAnswers, { tags: ['quiz'] });
			return newSelectedAnswers;
		});
	};

	const openModal = () => {
		setIsOpen(true);
	};

	const closeModal = () => {
		setIsOpen(false);
	};

	const allAnswered = selectedAnswers.every((answers) => answers.length > 0);

	return (
		<div className='relative min-h-32 min-w-full flex flex-col items-center justify-center p-8'>
			<PrevQuestionButton onClick={previousQuestion} />
			<div className='text-center p-8 xs:p-1 sm:p-4 md:p-6 lg:p-8 mb-16 xs:mb-1 sm:mb-1 md:mb-10 lg:mb-16 w-full max-w-2xl'>
				<p className='text-4xl xs:text-lg sm:text-sm md:text-xl lg:text-3xl xl:text-4xl'>{data[currentIndex].question}</p>
				<div className='grid grid-cols-2 xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-4 xs:gap-0.5 sm:gap-1 md:gap-2 lg:gap-4 p-8 sm:p-1 md:p-4 lg:p-8'>
					{data[currentIndex].answers.map((answer, index) => (
						<div key={index} className='m-4 xs:m-1 sm:m-1 md:m-2 lg:m-4 p-4 xs:p-1 sm:p-2 md:p-3 lg:p-4 w-full'>
							{/* <Reveal> */}
							<TestButton answer={answer} isSelected={selectedAnswers[currentIndex].includes(answer)} onSelect={handleSelect} />
							{/* </Reveal> */}
						</div>
					))}
				</div>
			</div>
			<NextQuestionButton onClick={nextQuestion} />
			{allAnswered && (
				<>
					<SummaryButton text={'Get summary'} onClick={openModal} />
					<Modal isOpen={isOpen} onClose={closeModal} data={data} selectedAnswers={selectedAnswers} />
				</>
			)}
		</div>
	);
};

QuestionCarousel.propTypes = {
	data: PropTypes.object.isRequired,
};

export default QuestionCarousel;
