import {
	Button,
	FormControl,
	FormControlLabel,
	FormLabel,
	Radio,
	RadioGroup,
	TextField,
} from "@mui/material";

export const EditModel = ({
	modelEdit,
	editData,
	handleEdit,
	handleEditChange,
}) => {
	return (
		<>
			<h1 className="w-full text-center text-xl py-4 uppercase">
				Estás editando el modelo de {modelEdit}
			</h1>
			<form
				className="flex flex-col w-full items-center justify-center gap-2"
				onSubmit={handleEdit}
			>
				<TextField
					label="ID del modelo"
					placeholder="Edita el ID del modelo"
					type="text"
					name="model_id"
					autoComplete="model_id"
					value={editData?.model_id || ""}
					onChange={handleEditChange}
					required
					variant="filled"
					className="bg-white w-[40%] m-2"
				/>
				<p className="uppercase">A más bajo el ID, más arriba aparecerá</p>
				<TextField
					label="Título del modelo"
					placeholder="Ponle un nombre a tu modelo"
					type="text"
					name="title"
					autoComplete="title"
					value={editData?.title || ""}
					onChange={handleEditChange}
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
					value={editData?.description || ""}
					onChange={handleEditChange}
					required
					variant="filled"
					multiline
					rows={10}
					className="bg-white w-[40%] m-2"
				/>
				<TextField
					label="Tecnologías utilizadas"
					placeholder="ZBrush, Maya, 3DMax, Substance Painter, Marmoset Toolbag 4, Marvelous"
					type="text"
					name="technologies"
					autoComplete="technologies"
					value={editData?.technologies || ""}
					onChange={handleEditChange}
					required
					variant="filled"
					className="bg-white w-[40%] m-2"
				/>
				<FormControl className="bg-white w-[40%] m-2">
					<FormLabel id="category1">Personal / Profesional</FormLabel>
					<RadioGroup
						aria-labelledby="category1"
						name="category1"
						value={editData?.category1 || ""}
						onChange={handleEditChange}
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
						value={editData?.category2 || ""}
						onChange={handleEditChange}
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
					Editar modelo
				</Button>
			</form>
		</>
	);
};
