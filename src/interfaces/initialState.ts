import { ReactElement } from "react";

export interface InitialForm {
	[key: string ]: any
}

interface ValidationSchemaOutput {
  isValid: boolean;
}

export interface PropsFormDi {
	children?: ReactElement | ReactElement[];
	initialState: InitialForm;
	onSubmit?: (formState: InitialForm) => void;
	validationSchema?:ValidationSchemaOutput;
	onReset?:()=>void
}

export interface InitialValidations  {
	(): { [key: string]: string };
}

export interface InitialValidations extends InitialForm {
  required: [(value: any) => boolean, string];
  minLength: [(value: any, length: number) => boolean, string];
}

export interface ProviderProps {
	children?: ReactElement | ReactElement[];
	initialState: InitialForm;
}

interface Input {
	className?: string;
	htmlFor?: string;
	id?: string;
	label: string;
	name: string;
	type: string;
	value: string;
}

export interface PropsInputText extends Input {
	onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export interface PropsSelect extends Input{
	
	onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void
	options: Options[]
}

type Options = {
	key: string
	value: string
}