import { ReactElement, useCallback, useContext } from 'react';

import { FormContext } from '../context';

interface Props {
	children?: ReactElement | ReactElement[];
	className?: string;
};

export const Form = ({ children, className }: Props) => {

	const { formState, onSubmit, onFormSubmitted, isFormValid } = useContext(FormContext);

	const onSubmitted = useCallback((e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		onFormSubmitted();

		const elements = e.currentTarget.elements;
		// const newFormState = { ...formState };
		for (let i = 0; i < elements.length; i++) {
			const field = elements[i] as HTMLInputElement;
			if (typeof field.value !== 'undefined' && field.type !== 'submit') {
				formState[field.name] = field.value;
			}
		}

		if (!isFormValid) return;

		return onSubmit && onSubmit({ formState });

	}, []);

	return (
		<form
			className={className}
			onSubmit={onSubmitted}
		>
			{children}
		</form>
	);
};
