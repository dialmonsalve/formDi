import { useEffect, useState } from 'react';
import { User } from '../interfaces/user';

const initialForm = {} as User

export const useForm = () => {

	const [formState, setFormState] = useState(initialForm);

	const onInputChange = ( e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement> ) => {
		const { name, value } = e.target;

		setFormState({
			...formState,
			[name]: value
		});
	};

	useEffect(() => {
		setFormState( initialForm );
	}, [ initialForm ]);


	return {
		...formState,
		formState,

		onInputChange

	};
};
