import { useEffect, useMemo, useState } from 'react';

import { InitialForm, ValidFormState } from '../interfaces/initialState';

export const useForm = (initialForm: InitialForm, formValidations: ValidFormState) => {

  const [formState, setFormState] = useState(initialForm);
  const [formValidation, setFormValidation] = useState<ValidFormState | ValidFormState[]>(formValidations);
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);

  useEffect(() => {
    createValidators();
  }, [formState]);

  useEffect(() => {
    setFormState(initialForm);
  }, [initialForm]);

  const isFormValid = useMemo(() => {

    if (Object.keys(formValidation).length === 0) {
      return true;
    }
    return false;
  }, [formValidation]);

  const onFieldChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormState((prevFormState) => ({
      ...prevFormState,
      [name]: value
    }));
  };

  const createValidators = () => {
    if (formValidations instanceof Array) {

      let formCheckedValues: Record<string, string[]> = {};

      formValidations.forEach((field) => {
        for (const fieldName of Object.keys(field)) {
          const fieldRules = field[fieldName];

          if (fieldName in formState) {

            const fieldValue = fieldRules.validate(formState[fieldName]);

            if (fieldValue.length) {
              formCheckedValues = {
                ...formCheckedValues,
                [`${fieldName}Valid`]: fieldValue
              }
            }
          };
        };
      });
      setFormValidation({ ...formCheckedValues });
    };
  };

  const onFormSubmitted = () => {
    setIsFormSubmitted(true);
  };

  const onResetForm = () => {
    setFormState(initialForm);
  };

  return {
    formState,

    formValidation,
    isFormValid,
    isFormSubmitted,

    onFieldChange,
    onResetForm,
    onFormSubmitted,
    createValidators
  };
};