import { useContext } from "react";
import { MySelect, MyInputText, FormDi } from "../components";
import { UserContext } from "../context/UserContext";

export const Form = () => {

	const {onInputChange, user} = useContext(UserContext)

	return (

		<FormDi 
		user={user}
		onSubmit = {(values)=>{
			console.log(values);
		}}

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
