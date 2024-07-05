'use client';

import { useState, useEffect } from 'react';
import { TestButton } from './cust-button';
import { NextQuestionButton, PrevQuestionButton } from '@/components/question-move-button';
import PropTypes from 'prop-types';
import { Button } from './ui/button';

const QuestionCarousel = ({ data }) => {
	const [currentIndex, setCurrentIndex] = useState(0);
	const [selectedAnswers, setSelectedAnswers] = useState(data.map(() => []));

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
			return newSelectedAnswers;
		});
	};

	const allAnswered = selectedAnswers.every((answers) => answers.length > 0);

	return (
		<div className='relative min-h-fit min-w-full flex flex-col items-center justify-center p-8'>
			<PrevQuestionButton onClick={previousQuestion} />
			<div className='text-center p-8 xs:p-1 sm:p-4 md:p-6 lg:p-8 mb-16 xs:mb-1 sm:mb-1 md:mb-10 lg:mb-16 w-full max-w-2xl'>
				<p className='text-3xl xs:text-lg sm:text-sm md:text-xl lg:text-3xl'>{data[currentIndex].question}</p>
				<div className='grid grid-cols-2 xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-4 xs:gap-0.5 sm:gap-1 md:gap-2 lg:gap-4 p-8 sm:p-1 md:p-4 lg:p-8'>
					{data[currentIndex].answers.map((answer, index) => (
						<div key={index} className='m-4 xs:m-1 sm:m-1 md:m-2 lg:m-4 p-4 xs:p-1 sm:p-2 md:p-3 lg:p-4 w-full'>
							<TestButton answer={answer} isSelected={selectedAnswers[currentIndex].includes(answer)} onSelect={handleSelect} />
						</div>
					))}
				</div>
			</div>
			<NextQuestionButton onClick={nextQuestion} />
			{allAnswered && (
				<div className='bg-white rounded shadow-lg text-center p-8 mb-16 w-full max-w-2xl'>
					<h2 className='text-2xl font-bold mb-4'>Summary</h2>
					{data.map((question, index) => (
						<div key={index} className='mb-4'>
							<h3 className='font-bold'>{question.question}</h3>
							<ul>
								{selectedAnswers[index].map((answer, i) => (
									<li key={i} className='text-gray-700'>
										{answer}
									</li>
								))}
							</ul>
						</div>
					))}
				</div>
			)}
		</div>
	);
};

QuestionCarousel.propTypes = {
	data: PropTypes.object.isRequired,
};

export default QuestionCarousel;
