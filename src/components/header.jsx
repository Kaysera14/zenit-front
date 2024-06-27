import { Button } from "@mui/material";
import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

export function Header({ setFilter, filter }) {
	const [isMobile, setIsMobile] = useState(false);
	const [isDashboard, setIsDashboard] = useState(false);
	const navigate = useNavigate();
	const location = useLocation();

	useEffect(() => {
		if (location.pathname.startsWith("/admin/dashboard")) {
			setIsDashboard(true);
		} else {
			setIsDashboard(false);
		}
	}, [location?.pathname]);

	const handleOnSubmit = (e) => {
		e.preventDefault();
		if (e.target[0].value === import.meta.env.VITE_APP_SECRET_KEY) {
			e.target[0].value = "";
			navigate("/admin/login");
		} else {
			e.target[0].value = "";
			navigate("/");
		}
	};
	return (
		<>
			{!isDashboard ? (
				<header className="h-[12rem] w-full">
					<form
						onSubmit={handleOnSubmit}
						className="h-[1.75rem] hidden md:flex items-center justify-center"
					>
						<input
							type="text"
							className="w-[75px] h-[20px] text-xl text-center bg-transparent"
						/>
					</form>
					<p className="hidden md:flex justify-center pt-0 text-[4rem]">
						<Link onClick={() => setFilter("")} to={"/"}>
							Zenit Bragi
						</Link>
					</p>
					<section className="border-b-[1px] border-b-white pb-2 md:border-0">
						<p className="flex justify-center md:hidden py-2 text-[4rem]">
							<Link onClick={() => setFilter("")} to={"/"}>
								<img
									src="/zenit-logo.webp"
									alt="Zenit Bragi"
									className="h-[6.4rem] w-[6.4rem]"
								/>
							</Link>
						</p>
						<nav>
							<ul className="flex justify-center align-middle gap-4">
								<li>
									<Button
										onClick={() => setFilter("Personal")}
										sx={{
											border: "4px solid",
											width: "148px",
											height: "40px",
											fontSize: "1.25rem",
											textAlign: "center",
											textTransform: "capitalize",
											color: "#e5e7eb",
											fontWeight: "normal",
											borderRadius: "0",
										}}
										variant={filter === "Personal" ? "contained" : "outlined"}
									>
										Personal
									</Button>
								</li>
								<li>
									<Button
										onClick={() => setFilter("Professional")}
										sx={{
											border: "4px solid",
											width: "148px",
											height: "40px",
											fontSize: "1.25rem",
											textAlign: "center",
											textTransform: "capitalize",
											color: "#e5e7eb",
											fontWeight: "normal",
											borderRadius: "0",
										}}
										variant={
											filter === "Professional" ? "contained" : "outlined"
										}
									>
										Professional
									</Button>
								</li>
							</ul>
						</nav>
					</section>
				</header>
			) : null}
		</>
	);
}
