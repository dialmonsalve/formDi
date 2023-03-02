import { useContext } from 'react';

import { FormContext } from '../context';
import { Input } from '../interfaces/initialState';

interface Props extends Input {
	options: Options[];
}
type Options = {
	key: string;
	value: string;
}

export const MySelect = ({ className, label, name, type, value, options, id, htmlFor }: Props) => {

	const { onFieldChange } = useContext(FormContext);

	return (

		<div className="form-group">
			<label htmlFor={htmlFor}>{label}</label>
			<select
				className={className}
				id={id}
				name={name}
				onChange={onFieldChange}
				value={value}
				key={name}
			>
				<option value="">Choice a {name}</option>
				{
					options.map(option => (
						<option key={option.key} value={option.key}>{option.value}</option>
					))
				}
			</select>
		</div>
	);
};
