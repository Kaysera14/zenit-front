export async function editPosts(token, editData) {
	const response = await fetch(
		`${import.meta.env.VITE_APP_BACKEND}/models/${editData?.slug}`,
		{
			method: "PUT",
			headers: {
				Authorization: `${token}`,
				"Content-Type": "application/json",
			},
			body: JSON.stringify(editData),
		}
	);
	const result = await response.json();
	return result;
}
