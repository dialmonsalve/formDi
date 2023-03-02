import { useContext } from 'react';

import { FormContext } from '../context/FormContext';
import { Input } from '../interfaces/initialState';

export const MyInputText = ({ className, label, name, type, value, id, htmlFor }: Input) => {

	const { onFieldChange } = useContext(FormContext);

	return (
		<div className="form-group">
			<label htmlFor={htmlFor}>{label}</label>
			<input
				type={type}
				name={name}
				defaultValue={value}
				onChange={onFieldChange}
				id={id}
				className={className}
				autoComplete={`${type === 'password' ? 'off' : 'on'}`}
			/>
		</div>
	);
};