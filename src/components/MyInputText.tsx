import { PropsInputText as Props } from "../interfaces/initialState"

export const MyInputText = ({ className, htmlFor, id, label, name, type, value, onChange }: Props) => {
	return (
		<div className="form-group">
			<label htmlFor={htmlFor}>{label}</label>
			<input
				type={type}
				name={name}
				defaultValue={value}
				onChange={onChange}
				id={id}
				className={className}
			/>
		</div>
	)
}
