import { Link } from "react-router-dom";

export function Header() {
	return (
		<header className="h-[192px] w-full">
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
		</header>
	);
}
