import { ReactElement } from "react";
import { useForm } from "../hooks/useForm";
import { User } from "../interfaces/user";
import { UserContext } from "./UserContext";

interface Props {
	children?: ReactElement | ReactElement[];
	user: User;
}

export const UserProviderContext = ({ children, user }: Props) => {

	const { onInputChange } = useForm()

	return (
		<UserContext.Provider value={{
			onInputChange,
			user,
		}} >

			{children}

		</UserContext.Provider>
	)
}
