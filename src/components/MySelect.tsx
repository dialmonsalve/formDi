import { PropsSelect as Props} from "../interfaces/user"

export const MySelect = ({ className, htmlFor, id, label, name, type, value, options, onChange }: Props) => {
	return (

		<div className="form-group">
			<label htmlFor={htmlFor}>{label}</label>
			<select
				className={className}
				id={id}
				name={name}
				onChange={onChange}
				value={value}
			>
				<option value="">Choice a {name}</option>
				{
					options.map(option => (
						<option key={option.key} value={option.key}>{option.value}</option>
					))
				}
			</select>
		</div>
	)
}
