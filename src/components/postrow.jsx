import { Delete, Edit } from "@mui/icons-material";
import { Link } from "react-router-dom";

export function Postrow({
	post,
	apiURL,
	handleDelete,
	setModelEdit,
	setModule,
}) {
	return (
		<li className="flex flex-row w-full items-center justify-around">
			<p>{post?.model_id}</p>
			<Link to={`/models/${post?.slug}`}>
				<img
					src={apiURL + post?.cover}
					alt={post?.slug}
					className="w-20 h-20 static object-cover"
				/>
			</Link>
			<p className="w-[12.5%]">{post?.title}</p>
			<p className="w-[12.5%]">{post?.category1}</p>
			<p className="w-[12.5%]">{post?.category2}</p>
			<p className="w-[12.5%]">
				{post?.createdAt &&
					new Date(post.createdAt).toLocaleDateString("es-ES")}
			</p>
			<button
				onClick={() => {
					setModelEdit(post?.slug);
					setModule("edit");
				}}
			>
				<Edit />
			</button>
			<button
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
				<Delete />
			</button>
		</li>
	);
}
