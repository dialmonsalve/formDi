import { useEffect, useState } from 'react';

interface User {
	displayName: string;
	email: string,
	rol: Roles;
	dependency: Dependencies;
	lastName: string;
	username: string;
}

type Roles = | 'admin' | 'shop' | 'sales' | 'user' | '';
type Dependencies = | 'administration' | 'shop' | 'sales' | 'humanity' | '';

const initialForm = {} as User

export const useForm = () => {

	const [formState, setFormState] = useState(initialForm);

	const onInputChange = ( e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement> ) => {
		const { name, value } = e.target;
		
		
		setFormState({
			...formState,
			[name]: value
		});
		
		console.log(value);
		console.log(name);
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

interface Form {
	[x:string]:any
};
