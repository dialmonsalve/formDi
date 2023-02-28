import { createContext } from "react";

export interface ContextUserProps<T, S> {
	initialState: T;
	onInputChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
	formNewState: T
	onResetForm?: () => void
	initialValidationState:S,
	isFormValid:boolean|undefined
}

export const InitialContext = createContext<ContextUserProps<any, any>>({} as ContextUserProps<any, any>)
