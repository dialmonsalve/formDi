import { User } from "../interfaces/user";
import { createValidator } from "./validationSchema";

interface ValidationRule {
  test: (value: string) => boolean | string;
  message: string;
}

export const validationSchema = (user:User) => {

  const { email, displayName, dependency, lastName, rol, username } = user
  

  const emailValid = createValidator([] as ValidationRule[])
    .required('email is required')
    .min(5,"The email needs at least 5 characters")

    const error = emailValid.validate(email)

    
    console.log(error);


    
    const errores : {[key:string]:string[] } = {}


    

  
	const isValid = false

	return {
		isValid,
    error
	}
}