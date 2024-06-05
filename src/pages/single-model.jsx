import { useEffect, useState } from "react";
import { Main } from "../components/main";
import { getSinglePost } from "../api/get-single-post";
import { useParams } from "react-router-dom";

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
			<h1 className="text-4xl text-white">{postData?.title}</h1>
			{postImages?.map((image) => (
				<img
					src={apiURL + image.url}
					alt={image.post}
					key={image.model_image_id}
				/>
			))}
			<p>{postData?.description}</p>
		</Main>
	);
}
