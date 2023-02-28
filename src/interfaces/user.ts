import { InitialForm, ValidFormState } from "./initialState";

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

