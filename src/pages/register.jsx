import { useNavigate } from "react-router-dom";
import { Main } from "../components/main";
import { useState } from "react";
import { RegisterForm } from "../forms/register-form";
import { registerUser } from "../api/register-user-";
import { Alert, Stack } from "@mui/material";

export function Register() {
	const navigate = useNavigate();
	const [registerData, setRegisterData] = useState({
		username: "",
		email: "",
		password: "",
	});
	const [error, setError] = useState(null);

	const handleInputChange = (event) => {
		setRegisterData({
			...registerData,
			[event.target.name]: event.target.value,
		});
	};

	const handleSubmit = async (event) => {
		event.preventDefault();
		const registration = await registerUser(
			registerData.username,
			registerData.email,
			registerData.password
		);
		if (registration.status == "ok") {
			navigate("/validate");
		} else {
			setError(registration.message);
		}
	};
	return (
		<Main>
			<RegisterForm
				registerData={registerData}
				handleInputChange={handleInputChange}
				handleSubmit={handleSubmit}
			/>
			{error ? (
				<Stack
					className="w-[100%] fixed bottom-0 right-0 bg-white mt-4 xl:w-[50%]"
					spacing={2}
				>
					<Alert
						variant="outlined"
						severity="warning"
						onClose={() => setError("")}
					>
						{error}
					</Alert>
				</Stack>
			) : null}
		</Main>
	);
}
