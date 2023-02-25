import { useForm } from "../hooks/useForm";
import { ProviderProps as Props } from "../interfaces/user";
import { UserContext } from "./UserContext";

export const UserProviderContext = ({ children, user }: Props) => {

	const { onInputChange } = useForm(user)

	return (
		<UserContext.Provider value={{
			onInputChange,
			user,
		}} >

			{children}

		</UserContext.Provider>
	)
}
