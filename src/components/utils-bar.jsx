import { Delete } from "@mui/icons-material";
import { IconButton } from "@mui/material";

export function UtilsBar({
	posts,
	multipleDelete,
	postsToDelete,
	setPostsToDelete,
}) {
	const handleCheckDelete = (event) => {
		setPostsToDelete([]);
		for (const post of posts) {
			if (event.target.checked) {
				setPostsToDelete((prevPosts) => [...prevPosts, post.slug]);
			} else {
				setPostsToDelete((prevPosts) =>
					prevPosts.filter((prevPost) => prevPost !== post.slug)
				);
			}
		}
	};
	return (
		<section className="flex flex-row w-full items-center justify-between px-7 text-center py-1 border-b-[1px] bg-slate-800">
			<input
				type="checkbox"
				onChange={(event) => handleCheckDelete(event)}
				checked={posts.length === postsToDelete.length}
				className="w-4 h-4 rounded"
			/>
			<p className="uppercase">Seleccion total y borrado multiple</p>
			<IconButton onClick={() => multipleDelete()}>
				<Delete color="error" />
			</IconButton>
		</section>
	);
}
