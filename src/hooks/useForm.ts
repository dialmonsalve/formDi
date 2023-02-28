import { useEffect, useMemo, useState } from 'react';
import { InitialForm, ValidFormState } from '../interfaces/initialState';

export const useForm = (initialForm: InitialForm, formValidations: ValidFormState) => {
	

	const [formNewState, setFormNewState] = useState(initialForm);

	const [initialValidationState, setFormValidation] = useState<ValidFormState | ValidFormState[]>(formValidations)

	useEffect(() => {
		setFormNewState(initialForm);		
	}, [initialForm]);

	useEffect(() => {
		createValidators()

	}, [formNewState])
	

	const isFormValid = useMemo(() => {
		if (Object.keys(initialValidationState).length === 0) {
			return true;
		}
		for (const formValue of Object.keys(initialValidationState)) {
			const fieldValue = initialValidationState[formValue];			
			if (fieldValue !== null && fieldValue.length > 0) {
				return false;
			}
		}
		return true;
	}, [initialValidationState]);
	

	const onInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
		const { name, value } = e.target;
		setFormNewState((prevFormState) => ({
			...prevFormState,
			[name]: value
		}));
	};

	const createValidators = () => {
		if (formValidations instanceof Array) {
			let formCheckedValues: Record<string, string[]> = {};
			
			formValidations.forEach((field) => {
				for (const fieldName of Object.keys(field) as Array<keyof typeof formNewState>) {
					const fieldRules = field[fieldName];
					
					if (fieldName in formNewState) {
						const fieldValue = fieldRules.validate(formNewState[fieldName]);
						
						if (fieldValue.length) {
							formCheckedValues = {
								...formCheckedValues,
								[`${fieldName}Valid`]: fieldValue
							};
							
						} else {
							formCheckedValues = {
								...formCheckedValues,
								[`${fieldName}Valid`]: null
							} as any;
						}
					}
				}
			});

			setFormValidation((prevState) => ({
				...prevState,
				...formCheckedValues
			}));
		}
	};

	const onResetForm = () => {
		setFormNewState(initialForm);
	}

	return {
		...formNewState,
		formNewState,

		onInputChange,
		onResetForm,

		...initialValidationState,
		initialValidationState,
		isFormValid

	};
};
