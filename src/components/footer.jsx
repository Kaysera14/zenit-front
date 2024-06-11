import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import SimpleIconsArtstation from "../assets/SimpleIconsArtstation";
import SimpleIconsLinkedin from "../assets/SimpleIconsLinkedin";
import SimpleIconsInstagram from "../assets/SimpleIconsInstagram";

export function Footer() {
	const [isDashboard, setIsDashboard] = useState(false);
	const location = useLocation();

	useEffect(() => {
		if (location.pathname.startsWith("/admin/dashboard")) {
			setIsDashboard(true);
		} else {
			setIsDashboard(false);
		}
	}, [location?.pathname]);

	return (
		<>
			{!isDashboard ? (
				<footer className="flex flex-col items-center text-center bg-[#0e0c0a] text-color border-t-[1px] border-gray-500 fixed bottom-0 w-full h-[4.5rem]">
					<section className="flex justify-center gap-2 pt-3">
						<Link to="https://www.artstation.com/zenitbragi">
							<SimpleIconsArtstation width="1.5em" height="1.5em" />
						</Link>
						<Link to="https://www.linkedin.com/in/ariadna-aguilera-93a552267/">
							<SimpleIconsLinkedin width="1.5em" height="1.5em" />
						</Link>
						<Link to="https://www.instagram.com/zenit.bragi/">
							<SimpleIconsInstagram width="1.5em" height="1.5em" />
						</Link>
					</section>
					<section className="w-full text-center pt-2">
						©{new Date().getFullYear()} Zenit Bragi
					</section>
				</footer>
			) : null}
		</>
	);
}
