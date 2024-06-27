import { useEffect, useState } from "react";
import { Main } from "../components/main";
import { getSinglePost } from "../api/get-single-post";
import { useParams } from "react-router-dom";
import { Box, CircularProgress, Divider } from "@mui/material";

export function SingleModel() {
	const [model, setModel] = useState(null);
	const [isLoading, setIsLoading] = useState(true);
	const apiURL = import.meta.env.VITE_APP_BACKEND_UPLOADS;
	const { slug } = useParams();
	const postData = model?.data;
	const postImages = model?.images;
	const postVideos = model?.videos;

	useEffect(() => {
		getSinglePost(slug).then((fetchedModel) => {
			setModel(fetchedModel);
			setIsLoading(false);
		});
	}, [slug]);
	if (isLoading) {
		return (
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
		);
	}

	function splitDescriptionIntoLinks(description) {
		const urlRegex =
			/(\bhttps?:\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/gi;
		return description.split(urlRegex);
	}

	function renderDescriptionWithLinks(description) {
		const descriptionParts = splitDescriptionIntoLinks(description);
		return (
			<>
				{descriptionParts.map((part, index) => {
					if (part.match(/^https?:\/\/[^\s]+$/)) {
						return (
							<a
								key={index}
								href={part}
								target="_blank"
								rel="noopener noreferrer"
							>
								{part}
							</a>
						);
					} else {
						return <span key={index}>{part}</span>;
					}
				})}
			</>
		);
	}

	return (
		<Main>
			<article className="flex flex-col items-center gap-2 w-full">
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
						className="h-auto"
						onLoad={(e) => {
							const target = e.target;
							const width = target.naturalWidth;
							const height = target.naturalHeight;
							if (width > height) {
								target.style.width = "95%";
							} else {
								if (window.innerWidth < 768) {
									target.style.width = "95%";
								} else {
									target.style.width = "30%";
									target.style.backgroundColor = "#f7fafc";
									target.style.padding = "16px";
									target.style.margin = "8px";
									target.style.borderRadius = "8px";
									target.style.boxShadow =
										"0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -4px rgba(0, 0, 0, 0.1)";
									target.style.display = "flex";
									target.style.justifyContent = "center";
									target.style.alignItems = "center";
								}
							}
						}}
					/>
				))}
				{postVideos?.map((video) => (
					<iframe
						src={video.url}
						title={video.post}
						key={video.model_video_id}
						allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
						allowFullScreen
						className={`w-[95%] ${
							window.innerWidth <= 768 ? "h-[25vh]" : "h-[95vh]"
						}`}
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
				<p id="description" className="w-[95%] pt-1 mt-1 whitespace-pre-wrap">
					{postData?.description &&
						renderDescriptionWithLinks(postData.description)}
				</p>
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
