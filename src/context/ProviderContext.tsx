import { useForm } from "../hooks/useForm";
import { createValidator } from "../hooks/validationSchema";
import { ProviderProps as Props, ValidationRule, ValidFormState } from "../interfaces/initialState";

import { InitialContext } from "./InitialContext";

export const UserProviderContext = ({ children, initialState, InitialValidations=[] }: Props) => {

	const validForm:ValidFormState = [

		{
			displayName: createValidator([] as ValidationRule[])
				.required('Field displayName is required')
				.min(4, 'Field must be at least 4 characters')
		},
		{
			email: createValidator([] as ValidationRule[])
				.email('The email is not valid Email')
				.required('Field displayName is required')
		},
	]

	const { 
		formNewState, onInputChange, 
		onResetForm, initialValidationState, 
		isFormValid 
	} = useForm(initialState, InitialValidations)

	return (
		<InitialContext.Provider value={{
			onInputChange,
			formNewState,
			initialState,
			onResetForm,
			initialValidationState,
			isFormValid
		}} >

			{children}

		</InitialContext.Provider>
	)
}