import { useEffect, useMemo, useState } from 'react';
import { InitialForm } from '../interfaces/initialState';

export const useForm = <T extends InitialForm>(initialForm: T/* , formValidations?: InitialForm */) => {

	const [formNewState, setFormNewState] = useState(initialForm);

	// const [initialValidationState, setFormValidation] = useState(formValidations)

	useEffect(() => {
		setFormNewState(initialForm);
	}, [initialForm]);

	// useEffect(() => {

	// 	if (Object.keys(formNewState).length > 0) {
	//     // code to run once when data is loaded
	// 		createValidators()
	// 	}	
	// }, [formNewState])

	// const isFormValid = useMemo(() => {

	// 	if (typeof initialValidationState === 'undefined') return;

	// 	for (const formValue of Object.keys(initialValidationState)) {
	// 		if (initialValidationState[formValue] !== null) return false;
	// 	}
	// 	return true;

	// }, [initialValidationState])

	const onInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
		const { name, value } = e.target;

		setFormNewState((prevFormState) => ({
			...prevFormState,
			[name]: value
		}));
	};

	// const createValidators = () => {

	// 	const formCheckedValues: InitialForm = {};

	// 	if (typeof formValidations === 'undefined') return

	// 	for (const formField of Object.keys(formValidations)) {
	// 		const [fn, errorMessage] = formValidations[formField];
	// 		formCheckedValues[`${formField}Valid`] = fn(formNewState[formField]) ? null : errorMessage;
	// 	}
	// 	console.log(formCheckedValues);

	// 	setFormValidation(formCheckedValues);
	// }

	const onResetForm = () => {
		setFormNewState(initialForm);
	}


	return {
		...formNewState,
		formNewState,

		onInputChange,
		onResetForm,

		// ...initialValidationState,
		// initialValidationState,
		// isFormValid

	};
};
