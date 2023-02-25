import { useContext } from "react";
import { MySelect, MyInputText, FormDi } from "../components";
import { validationSchema } from "../hooks/useValidation";
import { UserContext } from "../context/UserContext";

export const Form = () => {

	const {
		user,
		user: { displayName, email, username, rol, dependency, lastName },
		onInputChange,
	} = useContext(UserContext)

	return (

		<FormDi

			user={user}
			onSubmit={(values) => {
				console.log(values);
			}}
			validationSchema={validationSchema}

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

			<MyInputText
				className="input-text"
				id="username"
				htmlFor="username"
				label="username"
				name="username"
				type="text"
				value={username}
				onChange={onInputChange} />

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

			<MySelect
				className="input-select"
				label="rol"
				name="rol"
				key={1}
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
				key={2}
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
