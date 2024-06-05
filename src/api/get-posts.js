import { METHODS, sendApiRequest } from "./send-api-request";

export async function getPosts() {
	const posts = await sendApiRequest(METHODS.GET, "/models");

	return posts;
}
