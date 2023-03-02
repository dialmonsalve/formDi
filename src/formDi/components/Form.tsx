import { ReactElement, useContext } from 'react';

import { FormContext } from '../context';

interface Props {
	children?: ReactElement | ReactElement[];
	className?: string;
}

export const Form = ({ children, className }: Props) => {

	const { formState, onSubmit, onFormSubmitted, isFormValid } = useContext(FormContext);

	const onSubmitted = (e: React.FormEvent) => {
		e.preventDefault();

		onFormSubmitted();

		for (const field of Object.entries(e.target)) {
			if (typeof field[1].value !== 'undefined' && field[1].type !== 'submit') {
				formState[field[1].name] = field[1].value;
			};
		};

		if (!isFormValid) return

		return onSubmit && onSubmit({ formState });
	};

	return (
		<form
			className={className}
			onSubmit={onSubmitted}
		>
			{children}
		</form>
	);
};
