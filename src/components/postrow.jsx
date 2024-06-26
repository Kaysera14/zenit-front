import { Delete, Edit } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import { Link } from "react-router-dom";

export function Postrow({
	sortedPosts,
	apiURL,
	handleDelete,
	setModelEdit,
	setModule,
	handleCheckDelete,
	postsToDelete,
}) {
	const videoID = sortedPosts?.video?.split("/embed/")[1];
	return (
		<li
			className={`flex flex-row w-full items-center justify-around text-center py-1 ${
				postsToDelete.includes(sortedPosts?.slug)
					? "bg-red-500"
					: sortedPosts?.model_id % 2 === 0
					? "bg-slate-800"
					: "bg-slate-700"
			}`}
		>
			<input
				type="checkbox"
				onChange={(event) => handleCheckDelete(event, sortedPosts?.slug)}
				checked={postsToDelete.includes(sortedPosts?.slug)}
				className="w-4 h-4 rounded"
			/>
			<p className="w-[5px]">{sortedPosts?.model_id}</p>
			<Link to={`/models/${sortedPosts?.slug}`}>
				{sortedPosts?.cover ? (
					<img
						src={apiURL + sortedPosts?.cover}
						alt={sortedPosts?.slug}
						className="w-20 h-20 static object-cover"
					/>
				) : (
					<img
						src={`https://i3.ytimg.com/vi/${videoID}/maxresdefault.jpg`}
						alt={sortedPosts?.slug}
						className="w-20 h-20 static object-cover"
					/>
				)}
			</Link>
			<p className="w-[12.5%]">{sortedPosts?.title}</p>
			<p className="w-[12.5%]">{sortedPosts?.category1}</p>
			<p className="w-[12.5%]">{sortedPosts?.category2}</p>
			<p className="w-[12.5%]">
				{sortedPosts?.createdAt &&
					new Date(sortedPosts.createdAt).toLocaleDateString("es-ES")}
			</p>
			<IconButton
				onClick={() => {
					setModelEdit(sortedPosts?.slug);
					setModule("edit");
				}}
			>
				<Edit color="info" />
			</IconButton>
			<IconButton
				onClick={() => {
					if (
						window.confirm(
							`¿Seguro que quieres borrar el modelo de ${sortedPosts?.title}?`
						)
					) {
						handleDelete(sortedPosts?.slug);
					}
				}}
			>
				<Delete
					color={`${
						postsToDelete.includes(sortedPosts?.slug) ? "info" : "error"
					}`}
				/>
			</IconButton>
		</li>
	);
}
