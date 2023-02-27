import { useContext } from "react";
import { InitialContext } from "../context/InitialContext";
import { validationSchema } from "../hooks/validation";
import { createValidator } from "../hooks/validationSchema";

interface Props {
	fieldName: string;
	type: 'error' | 'success';
	show?: boolean
}

interface ValidationRule {
	test: (value: string) => boolean | string;
	message: string;

}

export const ErrorMessage = ({ show = false, type, fieldName }: Props) => {

	const { formNewState } = useContext( InitialContext )

	const { errors } = validationSchema( formNewState )
	
	const errorMessages = Object.entries(errors)

	console.log(errorMessages);
	

	const diStyle = {
		backgroundColor: type === 'error' ? '#f007079b' : '#42db42ea',
		borderRadius: '.6rem',
		color: 'white',
		fontSize: '20px',
		justifyContent: "center",
		margin: '1px',
		padding: '0.5rem',
		textAlign: "center" as any,
		width: '100%',
	};
	return (
		errorMessages &&
		show ?

			<div style={{ display: "flex", width: "100%", flexDirection: "column", alignItems: "center" }} >
				{errorMessages.map((errorMessage, index) => (

					<p style={diStyle} key={index} >{errorMessage}</p>

				))}
			</div>
			: <></>

	)
}
