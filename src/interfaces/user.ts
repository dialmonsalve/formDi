import { ReactElement } from "react";

export interface User extends Form {
	displayName: string;
	email: string,
	rol: Roles;
	dependency: Dependencies;
	lastName: string;
	username: string;
}

type Roles = | 'admin' | 'shop' | 'sales' | 'user' | '';
type Dependencies = | 'administration' | 'shop' | 'sales' | 'humanity' | '';


export interface Form {
	[key: string]: any
}


export interface PropsFormDi {
	children?: ReactElement | ReactElement[];
	user: User;
	onSubmit?: (user: User) => void;
	validationSchema?(user: User): void
}

export interface PropsInputText {
	className: string;
	htmlFor?: string;
	id?: string;
	label: string;
	name: string;
	type: string;
	value: string;
	onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export interface PropsSelect {
	className: string;
	htmlFor?: string;
	id?: string;
	label: string;
	name: string;
	type: string;
	value: string;
	onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void
	options: Options[]
}

type Options = {
	key: string
	value: string
}

export interface ProviderProps {
	children?: ReactElement | ReactElement[];
	user: User;
}