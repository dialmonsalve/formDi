interface Props {
	className: string;
	htmlFor?: string;
	id?: string;
	label: string;
	name: string;
	type: string;
	value: string;
	onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void
	options: Options[]
}

type Options = {
	key: string
	value: string
}

export const MySelect = ({ className, htmlFor, id, label, name, type, value, options, onChange }: Props) => {
	return (

		<>
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
		</>
	)
}
