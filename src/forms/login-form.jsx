import { Email, Key } from "@mui/icons-material";
import { Button, InputAdornment, TextField } from "@mui/material";
import { useState } from "react";
import { Link } from "react-router-dom";

export const LoginForm = ({ loginData, handleInputChange, handleSubmit }) => {
	const [hovered, setHovered] = useState(false);
	return (
		<form
			onSubmit={handleSubmit}
			className="flex flex-col items-center space-y-5 bg-decorations p-5 rounded-lg shadow-md min-w-xl max-w-2xl w-full"
		>
			<h1 className="text-2xl text-sky-950 uppercase font-bold">
				Iniciar sesión
			</h1>
			<TextField
				label="Email"
				type="email"
				name="email"
				autoComplete="email"
				value={loginData.email}
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
				value={loginData.password}
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
				Login
			</Button>
			<Link to="/admin/register" className="text-sky-950">
				<p>¿No tienes cuenta? Regístrate</p>
			</Link>
		</form>
	);
};
