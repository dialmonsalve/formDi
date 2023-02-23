import { useContext } from "react";
import { MyInputText } from "../context/components/MyInputText";
import { MySelect } from "../context/components/MySelect";

import { createContext, ReactElement } from "react";
import { useForm } from "../context/hooks/useForm";

interface ContextUserProps {
	user:User;
	onInputChange: ( e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement> )=>void;
	onSubmit:(e:React.FormEvent, user:User)=>void
}

interface Props {
	children?:ReactElement |ReactElement[] ;
	user:User;
}
interface User {
	displayName: string;
	email: string,
	rol: Roles;
	dependency: Dependencies;
	lastName: string;
	username: string;
}

type Roles = | 'admin' | 'shop' | 'sales' | 'user' | '';
type Dependencies = | 'administration' | 'shop' | 'sales' | 'humanity' | '';

const UserContext = createContext({} as ContextUserProps)
const { Provider } = UserContext;

export const FormDi = ({children, user}:Props) => {

	const { onInputChange } = useForm()

	const onSubmit = (e:React.FormEvent) => {
		e.preventDefault()

		const { value } = e.target.displayName
		console.log(value) 
	}

	return (
		<Provider value={{
			onInputChange,
			user,
			onSubmit
		}} >
			<form onSubmit={onSubmit} >

				{children}
				
			</form>

		</Provider>
	)
}

export const Probe = () => {
	const {onInputChange, user} = useContext(UserContext)

	return (

		<FormDi 
		user={user}
		>
			<MyInputText
				className="input-text"
				id="displayName"
				htmlFor="displayName"
				label="displayName"
				name="displayName"
				type="text"
				value={user?.displayName}
				onChange={onInputChange} />

			<MyInputText
				className="input-text"
				id="username"
				htmlFor="username"
				label="username"
				name="username"
				type="text"
				value={user?.username}
				onChange={onInputChange} />

			<MyInputText
				className="input-text"
				id="lastName"
				htmlFor="lastName"
				label="lastName"
				name="lastName"
				type="text"
				value={user?.lastName}
				onChange={onInputChange} />

			<MyInputText
				className="input-text"
				id="email"
				htmlFor="email"
				label="email"
				name="email"
				type="text"
				value={user?.email}
				onChange={onInputChange} />

			<MySelect
				className="select-class"
				label="rol"
				name="rol"
				key={1}
				options={[
					{key:"1", value:"shopping"},
					{key:"2", value:"sales"},
					{key:"3", value:"user"}
				]}
				type="select"
				value={user?.rol}
				htmlFor="rol"
				id="rol"
				onChange={onInputChange}			
			/>

			<MySelect
				className="select-class"
				label="dependency"
				name="dependency"
				key={2}
				options={[
					{ key: "1", value: "administration" },
					{ key: "2", value: "shop department" },
					{ key: "3", value: "sales department" },
					{ key: "4", value: "humanity department" },
				]}
				type="select"
				value={user?.dependency}
				htmlFor="dependency"
				id="dependency"
				onChange={onInputChange} />

				<input type="submit" value="enviar" />

		</FormDi>

	)
}
