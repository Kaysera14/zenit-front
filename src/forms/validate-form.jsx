import { Key } from "@mui/icons-material";
import { Button, InputAdornment, TextField } from "@mui/material";
import { useState } from "react";

export const ValidateForm = ({
	registrationCode,
	handleInputChange,
	handleSubmit,
}) => {
	const [hovered, setHovered] = useState(false);
	return (
		<form
			onSubmit={handleSubmit}
			className="flex flex-col items-center space-y-5 bg-decorations p-5 rounded-lg shadow-md min-w-xl max-w-2xl w-full"
		>
			<h1 className="text-2xl text-sky-950 uppercase font-bold">
				Activa tu cuenta
			</h1>
			<TextField
				label="Código de validación"
				type="text"
				name="registrationCode"
				autoComplete="registrationCode"
				value={registrationCode.registrationCode}
				onChange={handleInputChange}
				required
				InputProps={{
					startAdornment: (
						<InputAdornment position="start">
							<Key />
						</InputAdornment>
					),
				}}
				variant="standard"
				className="w-[90%] md:w-[75%] xl:w-[90%]"
			/>
			<Button
				type="submit"
				sx={{
					backgroundColor: "black",
					color: `${hovered ? "black" : "white"}`,
				}}
				onMouseOver={() => setHovered(true)}
				onMouseLeave={() => setHovered(false)}
			>
				Validar
			</Button>
		</form>
	);
};
