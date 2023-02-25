import { User } from "../interfaces/user";
import { createValidator } from "./schemaFunction";
import { StringValidator } from "./Schema";

interface ValidationRule {
	test: (value: string) => boolean | string;
	message: string;
}

export const validationSchema = (newUser:User) => {

	const { dependency, displayName, email, lastName, rol, username  } = newUser

	const schema = new StringValidator()

	schema.required('Email field is required')
	.email('The email must be valid');

	const errors = schema.validate(email);


	const validator = createValidator([] as ValidationRule[])
  .required(`displayName Field  is required`)
  .max(10, 'Value must be at most 10 characters long')

	const errorsFunc = validator.validate(displayName);
	console.log(errorsFunc);

	if (errors.length > 0) {
		console.log('Validation errors:', errors);
	} else {
		console.log('Validation passed');
	}
};