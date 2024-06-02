import { METHODS, sendApiRequest } from "./send-api-request";

export async function registerUser(username, email, password) {
	const requestObject = { username, email, password };
	const response = await sendApiRequest(
		METHODS.POST,
		"/register",
		requestObject
	);

	return response;
}
