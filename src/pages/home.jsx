import { Box, CircularProgress } from "@mui/material";
import { Main } from "../components/main";
import { PostCard } from "../components/postcard";
import { useEffect, useState } from "react";

export function Home({ filteredPosts, posts }) {
	const [isLoading, setIsLoading] = useState(true);
	useEffect(() => {
		if (posts?.length > 0) {
			setIsLoading(false);
		}
	}, [posts]);
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
	return (
		<Main>
			{filteredPosts.length > 0
				? filteredPosts.map((post) => (
						<PostCard key={post.model_id} post={post} />
				  ))
				: posts.map((post) => <PostCard key={post.model_id} post={post} />)}
		</Main>
	);
}
