import { Button } from './ui/button';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';

function CustomButton({ text, onClick }) {
	return (
		<Button variant='default' onClick={onClick}>
			{text}
		</Button>
	);
}

CustomButton.propTypes = {
	text: PropTypes.string.isRequired,
	onClick: PropTypes.func,
};

function TestButton({ answer, isSelected, onSelect }) {
	const toggleSelect = () => {
		onSelect(answer);
	};

	return (
		<motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
			<Button
				variant='testButton'
				onClick={toggleSelect}
				className={
					`${isSelected ? 'bg-secondary-foreground' : 'bg-secondary'}`
					// + ' w-fit'
				}
			>
				{answer}
			</Button>
		</motion.div>
	);
}

TestButton.propTypes = {
	answer: PropTypes.string.isRequired,
	isSelected: PropTypes.bool.isRequired,
	onSelect: PropTypes.func.isRequired,
};

function SummaryButton({ text, onClick }) {
	return (
		<motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }}>
			<Button
				variant='testButton'
				onClick={onClick}
				// className={
				// 	`${isSelected ? 'bg-secondary-foreground' : 'bg-secondary'}`
				// 	// + ' w-fit'
				// }
			>
				{text}
			</Button>
		</motion.div>
	);
}

SummaryButton.propTypes = {
	text: PropTypes.string.isRequired,
	onClick: PropTypes.func.isRequired,
};

export { CustomButton, TestButton, SummaryButton };
