import { METHODS, sendApiRequest } from "./send-api-request";

export async function loginUser(email, password) {
	const requestObject = { email, password };
	const response = await sendApiRequest(METHODS.POST, "/login", requestObject);

	return response;
}
