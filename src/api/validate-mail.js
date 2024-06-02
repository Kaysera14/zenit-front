import { METHODS, sendApiRequest } from "./send-api-request";

export async function validateMail(registrationCode) {
	const response = await sendApiRequest(
		METHODS.POST,
		`/validate/${registrationCode}`
	);

	return response;
}
