import { MySelect, MyInputText, Form, ErrorMessage } from '../formDi/components';

import { User } from './user';
import { ValidationRule, ValidFormState } from '../formDi/interfaces/initialState';
import { useValidator } from '../formDi/hooks/useValidator';
import { FormDi } from '../formDi/context/FormDi';

const initialState: User = {
	displayName: '',
	email: '',
	rol: '',
	dependency: '',
	lastName: '',
	username: '',
	password: ''
}

export const AppUser = () => {

	const validationSchema: ValidFormState = [
		{
			displayName: useValidator([] as ValidationRule[])
				.required('Field name is required')
				.min(4, 'Field must be at least 4 characters')
		},
		{
			email: useValidator([] as ValidationRule[])
				.email('The email is not valid Email')
				.required('Field displayName is required')
		},
		{
			password: useValidator([] as ValidationRule[])
				.required('is required')
		},
		{
			username: useValidator([] as ValidationRule[])
				.required('Field displayName is required')
				.min(4, 'Field must be at least 4 characters')
		}
	]

	const onsubmit = () => {

		console.log('Add user');
	}

	const { dependency, displayName, email, lastName, rol, username, password } = initialState;

	return (
		<FormDi
			initialState={initialState}
			validationSchema={validationSchema}
			onSubmit={onsubmit}
		>
			<Form
				className='container'
			>

				<MyInputText
					className="input-text"
					label="Name"
					name="displayName"
					type="text"
					value={displayName} />
				<ErrorMessage
					fieldName="displayName"
					type="error"
				/>

				<MyInputText
					className="input-text"
					label="username"
					name="username"
					type="text"
					value={username} />
				<ErrorMessage
					fieldName="username"
					type="error"
				/>

				<MyInputText
					className="input-text"
					label="lastName"
					name="lastName"
					type="text"
					value={lastName} />

				<MyInputText
					className="input-text"
					label="email"
					name="email"
					type="text"
					value={email} />
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
				/>

				<MySelect
					className="input-select"
					label="dependency"
					name="dependency"
					options={[
						{ key: "1", value: "administration" },
						{ key: "2", value: "shop department" },
						{ key: "3", value: "sales department" },
						{ key: "4", value: "humanity department" },
					]}
					type="select"
					value={dependency}
				/>

				<MyInputText
					className="input-text"
					label="password"
					name="password"
					type="password"
					value={password} />
				<ErrorMessage
					fieldName="password"
					type="success"
				/>
				<input type="submit" value="enviar" />

			</Form>

		</FormDi>
	);
};
