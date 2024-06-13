import { Delete, Edit } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import { Link } from "react-router-dom";

export function Postrow({
	post,
	apiURL,
	handleDelete,
	setModelEdit,
	setModule,
	handleCheckDelete,
	postsToDelete,
}) {
	const videoID = post?.video?.split("/embed/")[1];
	return (
		<li
			className={`flex flex-row w-full items-center justify-around text-center py-1 ${
				postsToDelete.includes(post?.slug)
					? "bg-red-500"
					: post?.model_id % 2 === 0
					? "bg-slate-800"
					: "bg-slate-700"
			}`}
		>
			<input
				type="checkbox"
				onChange={(event) => handleCheckDelete(event, post?.slug)}
				checked={postsToDelete.includes(post?.slug)}
				className="w-4 h-4 rounded"
			/>
			<p>{post?.model_id}</p>
			<Link to={`/models/${post?.slug}`}>
				{post?.cover ? (
					<img
						src={apiURL + post?.cover}
						alt={post?.slug}
						className="w-20 h-20 static object-cover"
					/>
				) : (
					<img
						src={`https://i3.ytimg.com/vi/${videoID}/maxresdefault.jpg`}
						alt={post?.slug}
						className="w-20 h-20 static object-cover"
					/>
				)}
			</Link>
			<p className="w-[12.5%]">{post?.title}</p>
			<p className="w-[12.5%]">{post?.category1}</p>
			<p className="w-[12.5%]">{post?.category2}</p>
			<p className="w-[12.5%]">
				{post?.createdAt &&
					new Date(post.createdAt).toLocaleDateString("es-ES")}
			</p>
			<IconButton
				onClick={() => {
					setModelEdit(post?.slug);
					setModule("edit");
				}}
			>
				<Edit color="info" />
			</IconButton>
			<IconButton
				onClick={() => {
					if (
						window.confirm(
							`¿Seguro que quieres borrar el modelo de ${post?.title}?`
						)
					) {
						handleDelete(post?.slug);
					}
				}}
			>
				<Delete
					color={`${postsToDelete.includes(post?.slug) ? "info" : "error"}`}
				/>
			</IconButton>
		</li>
	);
}
