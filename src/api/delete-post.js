import { METHODS, sendApiRequest } from "./send-api-request";

export async function deletePosts(slug) {
	const posts = await sendApiRequest(METHODS.DELETE, `/models/${slug}`);

	return posts;
}
