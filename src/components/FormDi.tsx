import { ReactElement } from 'react';
import { User } from '../interfaces/user';

interface Props {
	children?: ReactElement | ReactElement[];
	user: User;
	onSubmit?: (user:User) => void;
}

export const FormDi = ({ children, user, onSubmit }: Props) => {

		const onSubmitted = (e:React.FormEvent) => {
			e.preventDefault()
	
			for(const fields of Object.entries(e.target)){
				for (const field of Object.entries(fields)){
					if(typeof field[1].value !== 'undefined' && field[1].type !== 'submit'){
						user[field[1].name] = field[1].value
					};
				};
			};

			if(user.displayName===''){//! Implement validation here
				console.log("first")
			}
			return onSubmit&& onSubmit(user);
		}

	return (
			<form onSubmit={ onSubmitted } >
				{children}
			</form>
	)
}
