/* eslint-disable react/no-unescaped-entities */
import { Main } from "../components/main";
import notFound from "../assets/404.gif";
import { Link } from "react-router-dom";
export function NotFound() {
	return (
		<Main>
			<article className="flex flex-col items-center">
				<p className="text-2xl">You have strayed from the path...</p>
				<figure className="max-w-lg py-4">
					<img
						className="h-auto max-w-full rounded-lg"
						src={notFound}
						alt="image description"
					/>
					<figcaption className="mt-2 text-sm text-center text-gray-500 dark:text-gray-400">
						You've gone too far!
					</figcaption>
				</figure>
				<p className="text-2xl">
					But fear not,{" "}
					<Link to={"/"} className="underline">
						here's the way home!
					</Link>
				</p>
			</article>
		</Main>
	);
}
