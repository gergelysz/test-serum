import PropTypes from 'prop-types';

const ContentRenderer = ({ content }) => {
	const lines = content.split('\n');

	const checkLineConditions = (line) => {
		// This function will be used to check the conditions of each line
		if (line !== null && line.trim() !== '') {
			if (line.endsWith('.')) {
				return <p className='text-lg xs:text-sm md:text-md lg:text-lg indent-16 xs:indent-4 md:indent-10 lg:indent-16'>{line}</p>;
			} else if (line.endsWith(':')) {
				return <p className='p-3 font-bold text-lg xs:text-sm md:text-md lg:text-lg indent-16 xs:indent-4 md:indent-10 lg:indent-16'>{line}</p>;
			} else {
				return (
					<div className='flex flex-row space-x-2 p-3'>
						<p className='text-xl xs:text-base md:text-lg lg:text-xl font-medium indent-16 xs:indent-4 md:indent-10 lg:indent-16'>•</p>
						<p className='text-xl xs:text-sm md:text-md lg:text-xl'>{line}</p>
					</div>
				);
			}
		} else {
			return;
		}
	};

	return (
		<div>
			{lines.map((line, index) => (
				<div key={index}>{checkLineConditions(line)}</div>
			))}
		</div>
	);
};

ContentRenderer.propTypes = {
	content: PropTypes.string.isRequired,
};

export default ContentRenderer;
