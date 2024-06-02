import { createContext, useEffect, useState } from "react";
import { getCurrentUserFromLocalStorage } from "../utils/get-current-user";

export const CurrentUserContext = createContext(null);
export const CurrentUserUpdateContext = createContext(() => {});

export function AuthContextProvider({ children }) {
	const [user, setUser] = useState(null);

	useEffect(() => {
		setUser(getCurrentUserFromLocalStorage());
		window.addEventListener("storage", (e) => {
			if (e.key === import.meta.env.VITE_APP_CURRENT_USER_STORAGE_ID) {
				setUser(getCurrentUserFromLocalStorage());
			}
		});
	}, []);

	return (
		<CurrentUserContext.Provider value={{ user, setUser }}>
			{children}
		</CurrentUserContext.Provider>
	);
}
