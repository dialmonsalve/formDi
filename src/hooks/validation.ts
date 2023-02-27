import { User } from "../interfaces/user";
import { createValidator } from "./validationSchema";

interface ValidationRule {
  test: (value: string) => boolean | string;
  message: string;
}

export const validationSchema = (user:User) => {

  const { email, displayName, dependency, lastName, rol, username } = user

  const getValidator = (fieldName: string) => {
    switch (fieldName) {
      case 'email':
        return createValidator([] as ValidationRule[])
          .required('Email field is required')
          .email('Email not valid')
      case 'displayName':
        return createValidator([] as ValidationRule[])
          .required('Name field is required')
          .min(4, 'The field must be at least 4 characters')
      default:
        return (createValidator([] as ValidationRule[]))
    }
  }
  
  const errors: { [key: string]: string[] } = {};


  for (const fieldName of Object.keys(user)) {
    const validator = getValidator(fieldName)
    const fieldValue = user[fieldName]
    errors[fieldName] = validator.validate(fieldValue)
  }

	const isValid = false

	return {
		isValid,
    errors
	}
}