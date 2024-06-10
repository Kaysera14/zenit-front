export async function uploadPost(data, token) {
	const response = await fetch(`${import.meta.env.VITE_APP_BACKEND}/models/`, {
		method: "POST",
		headers: {
			Authorization: `${token}`,
		},
		body: data,
	});
	const result = await response.json();
	return result;
}
