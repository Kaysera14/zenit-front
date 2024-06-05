import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Main } from "../components/main";
import { CurrentUserContext } from "../context/auth-context";

export function Dashboard() {
	const { user } = useContext(CurrentUserContext);
	const navigate = useNavigate();

	useEffect(() => {
		const token = localStorage.getItem(
			import.meta.env.VITE_APP_CURRENT_USER_STORAGE_ID
		);
		if (!token) {
			navigate("/");
		}
	}, [user, navigate]);

	return (
		<Main>
			<h1>Dashboard</h1>
		</Main>
	);
}
