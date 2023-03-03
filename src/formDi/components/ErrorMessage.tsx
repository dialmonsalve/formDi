import { useContext } from 'react';

import { FormContext } from '../context';

interface Props {
	fieldName: string;
	type: 'error' | 'success';
}

export const ErrorMessage = ({ type = 'error', fieldName }: Props) => {
	const { formValidation, isFormSubmitted } = useContext(FormContext);

	const errorMessages = formValidation[`${fieldName}Valid`];

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
		isFormSubmitted && formValidation[`${fieldName}Valid`] &&

		<div style={{ display: "flex", width: "100%", flexDirection: "column", alignItems: "center" }} >
			{errorMessages.map((errorMessage: string, index: string) => (
				<p key={index} style={diStyle}>{errorMessage}</p>
			))}
		</div>
	);
};
