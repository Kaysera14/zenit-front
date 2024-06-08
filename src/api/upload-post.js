import { METHODS, sendApiRequest } from "./send-api-request";

export async function uploadPost(uploadData) {
	const response = await sendApiRequest(METHODS.POST, "/models", uploadData);

	return response;
}
