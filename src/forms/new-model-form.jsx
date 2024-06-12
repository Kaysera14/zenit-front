import {
	Button,
	FormControl,
	FormControlLabel,
	FormLabel,
	Radio,
	RadioGroup,
	TextField,
} from "@mui/material";
import { useRef, useState } from "react";

export const NewModelForm = ({
	setUploadData,
	uploadData,
	handleUploadChange,
	handleUploadSubmit,
	handleChangeVideos,
}) => {
	const fileInputRef = useRef(null);
	const [selectedImages, setSelectedImages] = useState([]);
	const [webImages, setWebImages] = useState([]);

	const handleChangeImage = (e) => {
		e.preventDefault();

		if (e.target) {
			const files = e.target.files;
			if (files) {
				const filesArray = Array.from(files);

				const newImages = filesArray.map((file) => URL.createObjectURL(file));

				setSelectedImages([...selectedImages, ...files]);
				setWebImages([...webImages, ...newImages]);

				setUploadData({
					...uploadData,
					images: [...selectedImages, ...files],
					webImages: [...webImages, ...newImages],
				});
			}
		}
	};

	const handleFileClick = () => {
		fileInputRef.current.click();
	};
	const [dragging, setDragging] = useState(false);

	const handleDragStart = (index) => {
		setDragging(index);
	};

	const handleDragEnter = (index) => {
		if (dragging !== null && dragging !== index) {
			const newWebImages = [...webImages];
			newWebImages.splice(index, 0, newWebImages.splice(dragging, 1)[0]);
			setWebImages(newWebImages);

			const newSelectedImages = [...selectedImages];
			newSelectedImages.splice(
				index,
				0,
				newSelectedImages.splice(dragging, 1)[0]
			);
			setSelectedImages(newSelectedImages);

			setUploadData({
				...uploadData,
				images: newSelectedImages,
				webImages: newWebImages,
			});

			setDragging(index);
		}
	};

	const handleDragEnd = () => {
		setDragging(null);
	};
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
					rows={10}
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
				{webImages?.length !== 0 && (
					<ul className="grid grid-cols-2 overflow-y-scroll gap-1 md:grid-cols-4">
						{webImages?.map((image, index) => (
							<li
								key={index}
								draggable
								onDragStart={() => handleDragStart(index)}
								onDragEnter={() => handleDragEnter(index)}
								onDragEnd={handleDragEnd}
								style={{ userSelect: "none" }}
							>
								<img
									src={`${image}`}
									alt="rentImage"
									className={`w-48 static object-cover rounded-md ${
										dragging === index ? "bg-lightgreen" : ""
									}`}
								/>
							</li>
						))}
					</ul>
				)}
				<TextField
					label="Links de videos"
					placeholder="Pon enlaces a tus vídeos de YouTube, separados por comas o saltos de línea"
					type="text"
					name="description"
					autoComplete="description"
					value={uploadData.videos}
					onChange={handleChangeVideos}
					required
					variant="filled"
					multiline
					rows={4}
					className="bg-white w-[40%] m-2"
				/>
				<input
					className="custom-file-input hidden"
					type="file"
					id="file-input"
					onChange={handleChangeImage}
					accept="image/*"
					ref={fileInputRef}
					multiple
				/>
				<button
					type="button"
					className="flex flex-col items-center justify-center bg-black text-white p-4 rounded-md"
					onClick={handleFileClick}
				>
					Añadir imágenes
				</button>
				<Button type="submit" sx={{ backgroundColor: "black" }}>
					Subir modelo
				</Button>
			</form>
		</>
	);
};
