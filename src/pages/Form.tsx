import { useContext } from "react";
import { MySelect, MyInputText, FormDi } from "../components";

import { ContextUserProps, InitialContext } from "../context/InitialContext";
import { ErrorMessage } from "../components/ErrorMessage";
import { User } from "../interfaces/user";
import { ValidationRule, ValidFormState } from "../interfaces/initialState";
import { createValidator } from "../hooks/validationSchema";

export const Form = () => {

	const validationSchema:ValidFormState = [

		{
			username: createValidator([] as ValidationRule[])
				.required('Field displayName is required')
				.min(4, 'Field must be at least 4 characters')
		}
	]

	const onsubmit = () => {
		console.log('Ac{a');
	}

	const {
		initialState,
		onInputChange,
	} = useContext<ContextUserProps<User, ValidFormState>>(InitialContext)

	const { dependency, displayName, email, lastName, rol, username } = initialState

	return (

		<FormDi
			initialState={initialState}
			onSubmit={(value)=>
			console.log(value)
			}
			validationSchema={[

				{
					username: createValidator([] as ValidationRule[])
						.required('Field username is required')
						.min(4, 'Field must be at least 4 characters')
				},
				{
					displayName: createValidator([] as ValidationRule[])
					.required('Field displayName is required')
					.max(10, 'Field must be max 4 characters')
				}
			]}
		>

			<MyInputText
				className="input-text"
				id="displayName"
				htmlFor="displayName"
				label="displayName"
				name="displayName"
				type="text"
				value={displayName}
				onChange={onInputChange} />
			<ErrorMessage
				fieldName="displayName"
				type="error"
			/>

			<MyInputText
				className="input-text"
				id="username"
				htmlFor="username"
				label="username"
				name="username"
				type="text"
				value={username}
				onChange={onInputChange} />
			<ErrorMessage
				fieldName="username"
				type="error"
			/>

			<MyInputText
				className="input-text"
				id="lastName"
				htmlFor="lastName"
				label="lastName"
				name="lastName"
				type="text"
				value={lastName}
				onChange={onInputChange} />

			<MyInputText
				className="input-text"
				id="email"
				htmlFor="email"
				label="email"
				name="email"
				type="text"
				value={email}
				onChange={onInputChange} />
			<ErrorMessage
				fieldName="email"
				type="error"
			/>

			<MySelect
				className="input-select"
				label="rol"
				name="rol"
				options={[
					{ key: "1", value: "shopping" },
					{ key: "2", value: "sales" },
					{ key: "3", value: "user" }
				]}
				type="select"
				value={rol}
				htmlFor="rol"
				id="rol"
				onChange={onInputChange}
			/>

			<MySelect
				className="input-select"
				label="dependency"
				name="dependency"
				onChange={onInputChange}
				options={[
					{ key: "1", value: "administration" },
					{ key: "2", value: "shop department" },
					{ key: "3", value: "sales department" },
					{ key: "4", value: "humanity department" },
				]}
				type="select"
				value={dependency}
				htmlFor="dependency"
				id="dependency"
			/>
			<input type="submit" value="enviar" />

		</FormDi>

	)
}
