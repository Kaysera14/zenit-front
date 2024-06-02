import { AccountCircle, Key, Email } from "@mui/icons-material";
import { Button, InputAdornment, TextField } from "@mui/material";
import { useState } from "react";
import { Link } from "react-router-dom";

export const RegisterForm = ({
	registerData,
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
				Crea tu cuenta
			</h1>
			<TextField
				label="Usuario"
				type="text"
				name="username"
				autoComplete="username"
				value={registerData.username}
				onChange={handleInputChange}
				required
				InputProps={{
					startAdornment: (
						<InputAdornment position="start">
							<AccountCircle />
						</InputAdornment>
					),
				}}
				variant="standard"
				className="w-[90%] md:w-[75%] xl:w-[90%]"
			/>
			<TextField
				label="Email"
				type="email"
				name="email"
				autoComplete="email"
				value={registerData.email}
				onChange={handleInputChange}
				required
				InputProps={{
					startAdornment: (
						<InputAdornment position="start">
							<Email />
						</InputAdornment>
					),
				}}
				variant="standard"
				className="w-[90%] md:w-[75%] xl:w-[90%]"
			/>
			<TextField
				label="Password"
				type="password"
				name="password"
				autoComplete="current-password"
				value={registerData.password}
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
				Registro
			</Button>
			<Link to="/login" className="text-sky-950">
				<p>¿Ya tienes cuenta? Inicia sesión</p>
			</Link>
		</form>
	);
};
