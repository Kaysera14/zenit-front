import { Delete, Edit } from "@mui/icons-material";

export function Postrow({ post, apiURL, handleDelete, handleEdit }) {
	return (
		<li className="flex flex-row w-full items-center justify-between">
			<p>{post?.model_id}</p>
			<img src={apiURL + post?.cover} alt={post?.slug} className="w-20 h-20" />
			<p>{post?.title}</p>
			<p>{post?.category1}</p>
			<p>{post?.category2}</p>
			<button
				onClick={() => {
					handleEdit(post?.slug);
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
