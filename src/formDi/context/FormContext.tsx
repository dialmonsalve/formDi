import { createContext } from 'react';

import { InitialForm } from '../interfaces/initialState';

export interface ContextUserProps<S> {
	formState: InitialForm;
	formValidation?: S;
	isFormSubmitted: boolean;
	isFormValid: boolean;
	onFieldChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
	onFormSubmitted: () => void;
	onResetForm?: () => void;
	onSubmit?: (value: InitialForm) => void;
}

export const FormContext = createContext({} as ContextUserProps<any>);