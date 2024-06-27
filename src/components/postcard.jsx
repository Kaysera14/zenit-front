import { Box, CircularProgress } from "@mui/material";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export function PostCard(post) {
	const apiURL = import.meta.env.VITE_APP_BACKEND_UPLOADS;
	const postData = post.post;
	const [isImageLoaded, setImageLoaded] = useState(false);
	const videoID = postData?.video?.split("/embed/")[1];

	useEffect(() => {
		const img = new Image();
		img.src = apiURL + postData.cover;
		img.onload = () => setImageLoaded(true);
	}, [apiURL, postData.cover]);
	return (
		<article className="gap-2 text-center break-inside-avoid-column">
			<Link
				className="overflow-hidden block relative"
				to={"/models/" + postData.slug}
			>
				{postData.cover ? (
					isImageLoaded ? (
						<img
							className="static object-cover h-[13rem] w-[13rem] md:h-[16rem] md:w-[16rem] xl:h-[22rem] xl:w-[22rem]"
							src={apiURL + postData.cover}
							alt={postData.title}
						/>
					) : (
						<Box
							sx={{
								display: "flex",
								justifyContent: "center",
								alignItems: "center",
								position: "absolute",
								top: "50%",
								left: "50%",
								transform: "translate(-50%, -50%)",
							}}
						>
							<CircularProgress sx={{ color: "#e3e3e3" }} />
						</Box>
					)
				) : (
					<img
						className="static object-cover h-[13rem] w-[13rem] md:h-[16rem] md:w-[16rem] xl:h-[22rem] xl:w-[22rem]"
						src={`https://i3.ytimg.com/vi/${videoID}/maxresdefault.jpg`}
						alt={postData.title}
					/>
				)}
				<section className="absolute opacity-0 top-0 right-0 left-0 bottom-0 flex items-center justify-center text-center break-words bg-blue-700 transition-all ease-in-out hover:opacity-100 hover:bg-opacity-80">
					<p className="text-2xl uppercase font-bold">{postData.title}</p>
				</section>
			</Link>
		</article>
	);
}
