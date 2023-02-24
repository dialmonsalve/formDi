interface Props {
	className: string;
	htmlFor?: string;
	id?: string;
	label: string;
	name: string;
	type: string;
	value: string;
	onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}
export const MyInputText = ({ className, htmlFor, id, label, name, type, value, onChange }: Props) => {
	return (
		<>
			<label htmlFor={htmlFor}>{label}</label>
			<input
				type={type}
				name={name}
				defaultValue={value}
				onChange={onChange}
				id={id}
				className={className}
			/>
		</>
	)
}
