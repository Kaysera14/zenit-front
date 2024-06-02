import { Link, useNavigate } from "react-router-dom";
import { Main } from "../components/main";
import { useContext, useEffect, useState } from "react";
import { CurrentUserContext } from "../context/auth-context";
import { useLogout } from "../hooks/use-logout";

export function Home() {
	const navigate = useNavigate();
	const userData = useContext(CurrentUserContext);
	const logout = useLogout();
	const [user, setUser] = useState(null);
	const handleLogout = () => {
		logout();
		navigate("/");
	};

	useEffect(() => {
		setUser(userData.user);
	}, [userData]);
	return (
		<Main>
			<article className="flex flex-col items-center">
				<p className="text-2xl">Welcome to the home page!</p>
			</article>
			<Link to="/login">Login</Link>
			<Link to="/register">Register</Link>
			<Link to="/validate">Validate</Link>
			<Link to="404">404</Link>
			{user ? (
				<p>
					{user.username}, wanna <button onClick={handleLogout}>logout</button>?
				</p>
			) : (
				<p>Not logged in</p>
			)}
		</Main>
	);
}
