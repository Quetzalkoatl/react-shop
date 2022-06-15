import {useEffect} from 'react';

const Alert = ({name = '', closeAlert = Function.prototype}) => {
	useEffect(() => {
		const timerId = setTimeout(closeAlert, 3000);

		return () => {
			clearTimeout(timerId);
		};
		// eslint-disable-next-line
	}, [name]);

	return (
		<div className='toast-container alert-message'>
			<div className='toast'>{name} добавлен в корзину</div>
		</div>
	);
};

export default Alert;
