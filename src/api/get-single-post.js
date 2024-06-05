import { METHODS, sendApiRequest } from "./send-api-request";

export async function getSinglePost(slug) {
	const post = await sendApiRequest(METHODS.GET, "/models/" + slug);
	return post;
}
