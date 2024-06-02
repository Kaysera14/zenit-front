import { useNavigate, useSearchParams } from "react-router-dom";
import { Main } from "../components/main";
import { useState } from "react";
import { validateMail } from "../api/validate-mail";
import { Alert, Stack } from "@mui/material";
import { ValidateForm } from "../forms/validate-form";

export function Validate() {
	const navigate = useNavigate();
	const [searchParams] = useSearchParams();
	const [registrationCode, setRegistrationCode] = useState({
		registrationCode: searchParams.get("registrationCode") || "",
	});
	const [error, setError] = useState(null);

	const handleInputChange = (event) => {
		setRegistrationCode({
			...registrationCode,
			[event.target.name]: event.target.value,
		});
	};

	const handleSubmit = async (event) => {
		event.preventDefault();
		const validate = await validateMail(registrationCode.registrationCode);
		if (validate.status == "ok") {
			navigate("/login");
		} else {
			setError(validate.message);
		}
	};
	return (
		<Main>
			<ValidateForm
				registrationCode={registrationCode}
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
