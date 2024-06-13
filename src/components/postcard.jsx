import { Link } from "react-router-dom";

export function PostCard(post) {
	const apiURL = import.meta.env.VITE_APP_BACKEND_UPLOADS;
	const postData = post.post;

	const videoID = postData?.video?.split("/embed/")[1];
	console.log(postData.cover);
	return (
		<article className="gap-2 text-center break-inside-avoid-column">
			<Link
				className="overflow-hidden block relative"
				to={"/models/" + postData.slug}
			>
				{postData.cover ? (
					<img
						className="static object-cover h-[13rem] w-[13rem] md:h-[16rem] md:w-[16rem] xl:h-[22rem] xl:w-[22rem]"
						src={apiURL + postData.cover}
						alt={postData.title}
					/>
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
