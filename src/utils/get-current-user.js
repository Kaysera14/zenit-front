import { jwtDecode } from "jwt-decode";

export function getCurrentUserFromLocalStorage() {
	const token = localStorage.getItem(
		import.meta.env.VITE_APP_CURRENT_USER_STORAGE_ID
	);

	if (token) {
		const value = jwtDecode(token);
		return value;
	}
	return null;
}
