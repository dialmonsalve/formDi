import { useForm } from "../hooks/useForm";
import { ProviderProps as Props } from "../interfaces/initialState";
import { InitialContext } from "./InitialContext";

export const UserProviderContext = ({ children, initialState, /* initialValidations */ }: Props) => {

	const { formNewState, onInputChange, onReset, initialValidationState } = useForm(initialState)

	return (
		<InitialContext.Provider value={{
			onInputChange,
			formNewState,
			initialState,
			onReset
		}} >

			{children}

		</InitialContext.Provider>
	)
}