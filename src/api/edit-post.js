import { METHODS, sendApiRequest } from "./send-api-request";

export async function editPosts(slug) {
	const posts = await sendApiRequest(METHODS.PUT, `/models/${slug}`);

	return posts;
}
