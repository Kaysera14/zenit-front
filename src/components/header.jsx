import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export function Header() {
	const [isMobile, setIsMobile] = useState(false);

	useEffect(() => {
		const handleResize = () => {
			setIsMobile(window.innerWidth < 768);
		};
		window.addEventListener("resize", handleResize);
		return () => {
			window.removeEventListener("resize", handleResize);
		};
	}, []);

	return (
		<header className="h-[12rem] w-full">
			{!isMobile ? (
				<>
					<p className="flex justify-center pt-7 text-[4rem]">
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
					<p className="flex justify-center pt-7 text-[4rem] border-b-[1px] border-b-white">
						<Link to={"/"}>
							<img
								src="zenit-logo.webp"
								alt="Zenit Bragi"
								className="h-[9rem] w-[9rem]"
							/>
						</Link>
					</p>
				</>
			)}
		</header>
	);
}
