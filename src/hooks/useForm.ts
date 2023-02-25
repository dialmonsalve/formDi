import { useEffect, useMemo, useState } from 'react';
import { Form } from '../interfaces/user';

export const useForm = <T extends Form> (initialForm:T) => {

	const [formState, setFormState] = useState(initialForm);

	useEffect(() => {
		setFormState(initialForm);
	}, [initialForm]);


	const onInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
		const { name, value } = e.target;

		setFormState({
			...formState,
			[name]: value
		});
	};

	const onResetForm = () => {

		setFormState(initialForm)
	}


	return {
		...formState,
		formState,

		onInputChange,
		onResetForm

	};
};
