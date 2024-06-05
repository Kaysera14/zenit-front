import { useState } from "react";
import { Main } from "../components/main";
import { useEffect } from "react";
import { getPosts } from "../api/get-posts.js";
import { PostCard } from "../components/postcard";

export function Home() {
	const [posts, setPosts] = useState([]);
	useEffect(() => {
		const fetchPosts = async () => {
			const posts = await getPosts();
			const postsData = posts.data;
			setPosts(postsData);
		};
		fetchPosts();
	}, [posts.length]);
	return (
		<Main>
			{posts.map((post) => (
				<PostCard key={post.model_id} post={post} />
			))}
		</Main>
	);
}
