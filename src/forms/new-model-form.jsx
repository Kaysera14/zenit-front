import {
	Button,
	FormControl,
	FormControlLabel,
	FormLabel,
	Radio,
	RadioGroup,
	TextField,
} from "@mui/material";

export const NewModelForm = ({
	uploadData,
	handleUploadChange,
	handleUploadSubmit,
}) => {
	return (
		<>
			<h1 className="w-full text-center text-xl py-4">
				Introduce los datos de tu nueva publicación
			</h1>
			<form
				className="flex flex-col w-full items-center justify-center gap-2"
				onSubmit={handleUploadSubmit}
			>
				<TextField
					label="Título del modelo"
					placeholder="Ponle un nombre a tu modelo"
					type="text"
					name="title"
					autoComplete="title"
					value={uploadData.title}
					onChange={handleUploadChange}
					required
					variant="filled"
					className="bg-white w-[40%] m-2"
				/>
				<TextField
					label="Descripción del modelo"
					placeholder="Describe tu modelo"
					type="text"
					name="description"
					autoComplete="description"
					value={uploadData.description}
					onChange={handleUploadChange}
					required
					variant="filled"
					multiline
					rows={4}
					className="bg-white w-[40%] m-2"
				/>
				<TextField
					label="Tecnologías utilizadas"
					placeholder="ZBrush, Maya, 3DMax, Substance Painter, Marmoset Toolbag 4, Marvelous"
					type="text"
					name="technologies"
					autoComplete="technologies"
					value={uploadData.technologies}
					onChange={handleUploadChange}
					required
					variant="filled"
					className="bg-white w-[40%] m-2"
				/>
				<FormControl className="bg-white w-[40%] m-2">
					<FormLabel id="category1">Personal / Profesional</FormLabel>
					<RadioGroup
						aria-labelledby="category1"
						name="category1"
						value={uploadData.category1}
						onChange={handleUploadChange}
						className="flex gap-2 w-full justify-center items-center text-black"
						sx={{ flexDirection: "row" }}
					>
						<FormControlLabel
							value="Personal"
							control={<Radio />}
							label="Personal"
						/>
						<FormControlLabel
							value="Professional"
							control={<Radio />}
							label="Profesional"
						/>
					</RadioGroup>
				</FormControl>
				<FormControl className="bg-white w-[40%] m-2">
					<FormLabel id="category2">Personal / Profesional</FormLabel>
					<RadioGroup
						aria-labelledby="category2"
						name="category2"
						value={uploadData.category2}
						onChange={handleUploadChange}
						className="flex gap-2 w-full justify-center items-center text-black"
						sx={{ flexDirection: "row" }}
					>
						<FormControlLabel
							value="Cartoon"
							control={<Radio />}
							label="Cartoon"
						/>
						<FormControlLabel
							value="Realistic"
							control={<Radio />}
							label="Realista"
						/>
						<FormControlLabel
							value="Stylized"
							control={<Radio />}
							label="Estilizado"
						/>
					</RadioGroup>
				</FormControl>
				<Button type="submit" sx={{ backgroundColor: "black" }}>
					Subir modelo
				</Button>
			</form>
		</>
	);
};
