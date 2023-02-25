import { PropsFormDi as Props, User } from '../interfaces/user';

export const FormDi = ({ children, user, onSubmit, validationSchema }: Props)=> {

	const onSubmitted = (e: React.FormEvent) => {
		e.preventDefault();

		let newUser: typeof user = {} as User;

		for (const field of Object.entries(e.target)) {
				if (typeof field[1].value !== 'undefined' && field[1].type !== 'submit') {
					newUser[field[1].name] = field[1].value;
				};

		};		
		validationSchema &&  validationSchema(newUser)

		return onSubmit && onSubmit(newUser);
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
