import { Main } from "../components/main";
import { PostCard } from "../components/postcard";

export function Home({ filteredPosts, posts }) {
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
