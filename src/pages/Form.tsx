import { useContext } from "react";
import { MySelect, MyInputText, FormDi } from "../components";

import { ContextUserProps, InitialContext } from "../context/InitialContext";
import { ErrorMessage } from "../components/ErrorMessage";
import { User, UserValidation } from "../interfaces/user";
import {  validationSchema } from "../hooks/validation";

export const Form = () => {

	const { 
		formNewState,
		initialState,
		onInputChange
	} = useContext<ContextUserProps<User>>(InitialContext)

	const { dependency, displayName, email, lastName, rol, username } = initialState

	// const{ displayNameValid, usernameValid } = formValidation

	return (

		<FormDi

			initialState={initialState}
			// onSubmit={(values) => {
			// 	console.log(values);
			// }}
			validationSchema={validationSchema(formNewState)}
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
				show={false}
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
				show={false}
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
				show={true}
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
