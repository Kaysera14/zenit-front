import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Main } from "../components/main";
import { CurrentUserContext } from "../context/auth-context";
import { Sidebar } from "../components/sidebar";

export function Dashboard() {
	const { user } = useContext(CurrentUserContext);
	const [module, setModule] = useState("home");
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
		<>
			<Sidebar user={user} setModule={setModule} />
			<Main className={"ml-[18rem]"}>
				{module === "home" ? <h1>Inicio</h1> : null}
				{module === "upload" ? <h1>Subir modelo</h1> : null}
			</Main>
		</>
	);
}
