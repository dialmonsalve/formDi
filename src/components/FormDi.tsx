import { useEffect, useState } from 'react';
import { PropsFormDi as Props, InitialForm } from '../interfaces/initialState';

const hello = {}

export const FormDi = ({ children, initialState, onSubmit, validationSchema=[] }: Props) => {

	const [formState, setFormState] = useState<InitialForm>( initialState );
	const [formValidation, setFormValidation] = useState(hello)

	useEffect(() => {
		validations()
	}, [validationSchema])

	const validations = ()=>{

		validationSchema.forEach((field:{})=>{
	
			Object.entries(field).map((name)=>{
	
				name[1].rules.map((rule)=>{
					console.log(rule.message);
					setFormValidation(rule.message)
					
				})
			})
	
			
		})
	}
	

	
	

	const onSubmitted = (e: React.FormEvent) => {

		e.preventDefault();

		for (const field of Object.entries(e.target)) {
			if (typeof field[1].value !== 'undefined' && field[1].type !== 'submit') {
				formState[field[1].name] = field[1].value;
			};
		};

		setFormState((prev)=>({
			...prev
		}))

		return onSubmit && onSubmit({ formState });
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
