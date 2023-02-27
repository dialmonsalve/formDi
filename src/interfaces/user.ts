import { InitialForm, InitialValidations } from "./initialState";

export interface User extends InitialForm {
	displayName: string;
	email: string,
	rol: Roles;
	dependency: Dependencies;
	lastName: string;
	username: string;
}

type Roles = | 'admin' | 'shop' | 'sales' | 'user' | '';
type Dependencies = | 'administration' | 'shop' | 'sales' | 'humanity' | '';

export interface UserValidation extends InitialValidations {
	displayNameValid: [(value:any)=>boolean, null | string];
	emailValid?: [(value:any)=>boolean, null | string];
	rolValid?: [(value:any)=>boolean, null | string];
	dependencyValid?: [(value:any)=>boolean, null | string];
	lastNameValid?: [(value:any)=>boolean, null | string];
	usernameValid?: [(value:any)=>boolean, null | string];
}