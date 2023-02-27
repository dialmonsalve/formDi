import { createContext } from "react";

export interface ContextUserProps<T> {
	initialState: T;
	onInputChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
	formNewState: T
	onReset?: () => void
}

export const InitialContext = createContext<ContextUserProps<any>>({} as ContextUserProps<any>)
