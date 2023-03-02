import { useValidator } from '../hooks/useValidator';

export interface InitialForm {
	[key: string]: any;
}

export type ValidFormState = ValidFormField[] | Record<string, string[]>;

export interface ValidFormField {
	[fieldName: string]: ReturnType<typeof useValidator>;
};

export interface Input {
	className?: string;
	label: string;
	name: string;
	type: string;
	value: string;
	id?: string;
	htmlFor?: string
};


export interface ValidationRule {
	test: (value: string) => boolean | string;
	message: string;
};