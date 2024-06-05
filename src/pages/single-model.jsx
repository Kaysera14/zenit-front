import { useEffect, useState } from "react";
import { Main } from "../components/main";
import { getSinglePost } from "../api/get-single-post";
import { useParams } from "react-router-dom";
import { Divider } from "@mui/material";

export function SingleModel() {
	const [post, setPost] = useState([]);
	const apiURL = import.meta.env.VITE_APP_BACKEND_UPLOADS;
	const { slug } = useParams();
	const postData = post.data;
	const postImages = post.images;
	const postVideos = post.videos;
	useEffect(() => {
		const fetchModel = async () => {
			const post = await getSinglePost(slug);
			setPost(post);
		};
		fetchModel();
	}, [slug]);
	return (
		<Main>
			<article className="flex flex-col items-center gap-2">
				<h1 className="text-4xl text-white">{postData?.title}</h1>
				<Divider
					aria-hidden="true"
					className="w-[95%]"
					sx={{
						"&::before, &::after": {
							borderColor: "white",
						},
						textTransform: "uppercase",
						fontSize: "1.2rem",
					}}
				>
					{postData?.category1} {`| ${postData?.category2}`}
				</Divider>
				{postImages?.map((image) => (
					<img
						src={apiURL + image.url}
						alt={image.post}
						key={image.model_image_id}
						className="w-[95%] h-auto"
					/>
				))}
				{postVideos?.map((video) => (
					<video
						src={apiURL + video.url}
						alt={video.post}
						key={video.model_video_id}
						className="w-[95%] h-auto"
						controls
					/>
				))}
				<Divider
					aria-hidden="true"
					className="w-[95%]"
					sx={{
						"&::before, &::after": {
							borderColor: "white",
						},
					}}
				>
					<h2 className="uppercase text-xl">Description</h2>
				</Divider>
				<p className="w-[95%] pt-1 mt-1">{postData?.description}</p>
				<Divider
					aria-hidden="true"
					className="w-[95%]"
					sx={{
						"&::before, &::after": {
							borderColor: "white",
						},
					}}
				>
					<h2 className="uppercase text-xl">Technologies</h2>
				</Divider>
				<p className="w-[95%] mt-1 pt-1">{postData?.technologies}</p>
			</article>
		</Main>
	);
}