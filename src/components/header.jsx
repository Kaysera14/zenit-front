import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

export function Header() {
	const [isMobile, setIsMobile] = useState(false);
	const [isDashboard, setIsDashboard] = useState(false);
	const navigate = useNavigate();
	const location = useLocation();

	useEffect(() => {
		const dashboard = () => {
			if (location.pathname.startsWith("/admin/dashboard")) {
				setIsDashboard(true);
			}
		};
		dashboard();
	}, [location.pathname]);

	useEffect(() => {
		const handleResize = () => {
			setIsMobile(window.innerWidth < 768);
		};
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
									className="w-[60px] h-[20px] text-xl text-center bg-transparent"
								/>
							</form>
							<p className="flex justify-center pt-0 text-[4rem]">
								<Link to={"/"}>Zenit Bragi</Link>
							</p>
							<nav>
								<ul className="flex justify-center align-middle gap-4">
									<li>
										<button className="border-4 w-[148px] h-[40px] text-xl text-center">
											Personal
										</button>
									</li>
									<li>
										<button className="border-4 w-[148px] h-[40px] text-xl text-center">
											Professional
										</button>
									</li>
								</ul>
							</nav>
						</>
					) : (
						<>
							<p className="flex justify-center py-2 text-[4rem] border-b-[1px] border-b-white">
								<Link to={"/"}>
									<img
										src="/zenit-logo.webp"
										alt="Zenit Bragi"
										className="h-[9rem] w-[9rem]"
									/>
								</Link>
							</p>
						</>
					)}
				</header>
			) : null}
		</>
	);
}
