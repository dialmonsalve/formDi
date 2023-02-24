import { createContext } from "react";
import { User } from "../interfaces/user";

interface ContextUserProps {
	user:User;
	onInputChange: ( e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement> )=>void;
}

export const UserContext = createContext({} as ContextUserProps)
