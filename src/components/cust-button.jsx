import { Button } from './ui/button';

function CustomButton({ text }) {
	return <Button variant='default'>{text}</Button>;
}

function TestButton({ text }) {
	return <Button variant='testButton'>{text}</Button>;
}

export { CustomButton, TestButton };
