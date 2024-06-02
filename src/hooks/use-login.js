import { useContext } from "react";
import { jwtDecode } from "jwt-decode";
import { CurrentUserUpdateContext } from "../context/auth-context";

export function useLogin() {
	const setCurrentUser = useContext(CurrentUserUpdateContext);

	return (token) => {
		localStorage.setItem(
			`${import.meta.env.VITE_APP_CURRENT_USER_STORAGE_ID}`,
			token
		);
		const user = jwtDecode(token);
		setCurrentUser(user);
	};
}
