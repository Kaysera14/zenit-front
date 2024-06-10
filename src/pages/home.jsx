import { useState } from "react";
import { Main } from "../components/main";
import { useEffect } from "react";
import { getPosts } from "../api/get-posts.js";
import { PostCard } from "../components/postcard";

export function Home({ filter }) {
	const [posts, setPosts] = useState([]);
	const [filteredPosts, setFilteredPosts] = useState([]);

	useEffect(() => {
		const fetchPosts = async () => {
			const posts = await getPosts();
			const postsData = posts.data;
			setPosts(postsData);
		};

		if (filter === "Professional" || filter === "Personal") {
			const newFilteredPosts = posts.filter((post) =>
				post.category1.toLowerCase().includes(filter.toLowerCase())
			);
			setFilteredPosts(newFilteredPosts);
		} else {
			if (posts.length === 0) {
				fetchPosts();
			}
		}

		if (filter === "") {
			setFilteredPosts([]);
		}
	}, [filter, posts]);
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
