import { ReactElement } from 'react';

import { FormContext } from "./";
import { useForm } from '../hooks';
import { InitialForm, ValidFormState } from '../interfaces/initialState';


interface Props {
	children?: ReactElement | ReactElement[];
	initialState: InitialForm;
	validationSchema?: ValidFormState
	onSubmit?: (formState: InitialForm) => void;
}

export const FormDi = ({ children, initialState, validationSchema = [], onSubmit }: Props) => {

	const {
		formState,

		onFieldChange,
		onResetForm,
		isFormValid,
		formValidation,
		isFormSubmitted,
		onFormSubmitted,

	} = useForm(initialState, validationSchema)

	return (
		<FormContext.Provider value={{

			formState,

			formValidation,
			isFormSubmitted,
			onFormSubmitted,

			onFieldChange,
			onResetForm,

			isFormValid,
			onSubmit,

		}} >

			{children}

		</FormContext.Provider>
	)
}