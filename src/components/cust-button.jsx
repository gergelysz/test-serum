import { Button } from './ui/button';
import PropTypes from 'prop-types';

function CustomButton({ text }) {
	return <Button variant='default'>{text}</Button>;
}

CustomButton.propTypes = {
	text: PropTypes.string.isRequired,
};

function TestButton({ answer, isSelected, onSelect }) {
	const toggleSelect = () => {
		onSelect(answer);
	};

	return (
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
	);
}

TestButton.propTypes = {
	answer: PropTypes.string.isRequired,
	isSelected: PropTypes.bool.isRequired,
	onSelect: PropTypes.func.isRequired,
};

export { CustomButton, TestButton };
