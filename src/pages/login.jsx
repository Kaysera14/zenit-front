import { useNavigate } from "react-router-dom";
import { Main } from "../components/main";
import { useLogin } from "../hooks/use-login";
import { useState } from "react";
import { loginUser } from "../api/login-user";
import { LoginForm } from "../forms/login-form";
import { Alert, Stack } from "@mui/material";

export function Login() {
	const setCurrentUser = useLogin();
	const navigate = useNavigate();
	const [loginData, setLoginData] = useState({
		email: "",
		password: "",
	});
	const [error, setError] = useState(null);

	const handleInputChange = (event) => {
		setLoginData({
			...loginData,
			[event.target.name]: event.target.value,
		});
	};

	const handleSubmit = async (event) => {
		event.preventDefault();
		const token = await loginUser(loginData.email, loginData.password);
		if (token.status == "ok") {
			setCurrentUser(token.token);
			navigate("/admin/dashboard");
		} else {
			setError(token.message);
		}
	};
	return (
		<Main>
			<LoginForm
				loginData={loginData}
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
