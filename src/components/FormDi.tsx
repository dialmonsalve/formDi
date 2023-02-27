import { useContext } from 'react';
import { InitialContext } from '../context/InitialContext';
import { PropsFormDi as Props, InitialForm } from '../interfaces/initialState';

export const FormDi = ({ children, initialState, onSubmit }: Props) => {

	// const { isValid } = validationSchema()

	const onSubmitted = (e: React.FormEvent) => {
		e.preventDefault();

		const newState: typeof initialState = {} as InitialForm;

		for (const field of Object.entries(e.target)) {
			if (typeof field[1].value !== 'undefined' && field[1].type !== 'submit') {
				newState[field[1].name] = field[1].value;
			};

		};

		// if (isValid){
		// 	console.log('not valid');
		// 	return
		// }

		console.log('pass valid');

		return onSubmit && onSubmit(newState);
	};

	return (
		<form
			className='container'
			onSubmit={onSubmitted}
		>
			{children}
		</form>
	);
}
