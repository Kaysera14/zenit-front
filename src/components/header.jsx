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

	useEffect(() => {
		const handleResize = () => {
			setIsMobile(window.innerWidth < 768);
		};

		handleResize();

		window.addEventListener("resize", handleResize);
		return () => {
			window.removeEventListener("resize", handleResize);
		};
	}, []);

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
				<header className="sm:h-[9rem] md:h-[12rem] w-full">
					{!isMobile ? (
						<>
							<form
								onSubmit={handleOnSubmit}
								className="h-[1.75rem] flex items-center justify-center"
							>
								<input
									type="text"
									className="w-[75px] h-[20px] text-xl text-center bg-transparent"
								/>
							</form>
							<p className="flex justify-center pt-0 text-[4rem]">
								<Link onClick={() => setFilter("")} to={"/"}>
									Zenit Bragi
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
						</>
					) : (
						<section className="border-b-[1px] border-b-white pb-2">
							<p className="flex justify-center py-2 text-[4rem]">
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
					)}
				</header>
			) : null}
		</>
	);
}
