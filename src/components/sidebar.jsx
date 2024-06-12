import { Divider } from "@mui/material";
import { useLogout } from "../hooks/use-logout";
import { Logout } from "@mui/icons-material";

export function Sidebar({ user, setModule, navigate }) {
	const logout = useLogout();
	const handleLogout = () => {
		logout();
	};
	return (
		<aside className="bg-slate-900 w-[18rem] h-screen border-r-2 border-gray-600 absolute flex flex-col top-0">
			<button onClick={() => alert("Soy un easter egg")}>
				<img
					src="/zenit-logo.webp"
					alt="Zenit"
					className="w-20 h-20 mx-auto my-5"
				/>
			</button>
			<Divider
				aria-hidden="true"
				sx={{
					"&::before, &::after": {
						borderColor: "white",
					},
					textTransform: "uppercase",
					fontSize: "1rem",
					paddingBottom: "0.5rem",
				}}
			>
				<h1 className="flex justify-center">{user?.username}</h1>
			</Divider>
			<nav className="flex-grow">
				<ul className="h-full flex flex-col gap-2">
					<li>
						<button
							className="uppercase mx-auto w-full p-2 bg-slate-800 text-white hover:bg-slate-700"
							onClick={() => setModule("home")}
						>
							Panel de control
						</button>
					</li>
					<li>
						<button
							className="uppercase mx-auto w-full p-2 bg-slate-800 text-white hover:bg-slate-700"
							onClick={() => setModule("upload")}
						>
							Subir modelo
						</button>
					</li>
					<li>
						<button
							className="uppercase mx-auto w-full p-2 bg-slate-800 text-white hover:bg-slate-700"
							onClick={() => navigate("/")}
						>
							Volver a la web
						</button>
					</li>
				</ul>
			</nav>
			<button
				className="uppercase text-xl flex items-center justify-center gap-2 w-full p-2 bg-red-500 text-white hover:bg-red-600 mt-auto"
				onClick={handleLogout}
			>
				Cerrar sesión <Logout />
			</button>
		</aside>
	);
}
