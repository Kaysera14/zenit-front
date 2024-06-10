import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Main } from "../components/main";
import { CurrentUserContext } from "../context/auth-context";
import { Sidebar } from "../components/sidebar";
import { getPosts } from "../api/get-posts";
import { Topbar } from "../components/topbar";
import { SearchForm } from "../forms/search-form";
import { Postrow } from "../components/postrow";
import { deletePosts } from "../api/delete-post";
import { editPosts } from "../api/edit-post";
import { Alert, Stack } from "@mui/material";
import { NewModelForm } from "../forms/new-model-form";
import { uploadPost } from "../api/upload-post";
import { EditModel } from "../forms/edit-model";
import { getSinglePost } from "../api/get-single-post";

export function Dashboard() {
	const { user } = useContext(CurrentUserContext);
	const [module, setModule] = useState("home");
	const navigate = useNavigate();
	const [posts, setPosts] = useState([]);
	const apiURL = import.meta.env.VITE_APP_BACKEND_UPLOADS;
	const [error, setError] = useState(null);
	const token = localStorage.getItem(
		import.meta.env.VITE_APP_CURRENT_USER_STORAGE_ID
	);
	const [uploadData, setUploadData] = useState({
		title: "",
		description: "",
		technologies: "",
		category1: "",
		category2: "",
		images: [],
	});

	const [modelEdit, setModelEdit] = useState(null);
	const [editData, setEditData] = useState({
		slug: "",
		title: "",
		description: "",
		technologies: "",
		category1: "",
		category2: "",
	});

	const handleEditChange = (event) => {
		setEditData({
			...editData,
			[event.target.name]: event.target.value,
		});
	};

	useEffect(() => {
		const fetchModelToEdit = async () => {
			const response = await getSinglePost(modelEdit);
			const modelToEdit = response.data;
			setEditData({
				slug: modelToEdit?.slug,
				title: modelToEdit?.title,
				description: modelToEdit?.description,
				technologies: modelToEdit?.technologies,
				category1: modelToEdit?.category1,
				category2: modelToEdit?.category2,
			});
		};
		fetchModelToEdit();
	}, [modelEdit]);

	const handleUploadChange = (event) => {
		setUploadData({
			...uploadData,
			[event.target.name]: event.target.value,
		});
	};

	const handleUploadSubmit = async (event) => {
		event.preventDefault();
		try {
			const formData = new FormData();
			formData.append("title", uploadData.title);
			formData.append("description", uploadData.description);
			formData.append("technologies", uploadData.technologies);
			formData.append("category1", uploadData.category1);
			formData.append("category2", uploadData.category2);

			uploadData.images.forEach((image) => {
				formData.append("images", image);
			});

			const upload = await uploadPost(formData, token);
			if (upload.status == "ok") {
				setModule("home");
				setUploadData({
					title: "",
					description: "",
					technologies: "",
					category1: "",
					category2: "",
					images: [],
				});
				setError(null);
				setPosts([]);
			} else {
				setError(upload.message);
			}
		} catch (error) {
			setError(error.message);
		}
	};

	const handleDelete = async (slug) => {
		await deletePosts(slug);
		setPosts([]);
	};

	const handleEdit = async () => {
		await editPosts(token, editData);
		setPosts([]);
		setModule("home");
	};

	useEffect(() => {
		const fetchPosts = async () => {
			const posts = await getPosts();
			const postsData = posts.data;
			setPosts(postsData);
		};
		fetchPosts();
	}, [posts.length]);

	useEffect(() => {
		const fetchPosts = async () => {
			const posts = await getPosts();
			const postsData = posts.data;
			setPosts(postsData);
		};
		const interval = setInterval(fetchPosts, 5000);
		return () => clearInterval(interval);
	}, []);

	useEffect(() => {
		const token = localStorage.getItem(
			import.meta.env.VITE_APP_CURRENT_USER_STORAGE_ID
		);
		if (!token) {
			navigate("/");
		}
	}, [user, navigate]);
	return (
		<>
			<Topbar />
			<Sidebar user={user} setModule={setModule} navigate={navigate} />
			<Main
				className={
					"ml-[18rem] pt-[8.45rem] md:gap-0 content-start bg-slate-900 h-screen sm:mb-0"
				}
			>
				{module === "home" ? (
					<section className="w-full flex flex-col items-center gap-4">
						{/* <SearchForm /> */}
						<h1 className="uppercase text-2xl">
							Edita y borra los modelos ya subidos
						</h1>
						<ul className="w-full flex gap-2 flex-col">
							{posts.map((post) => (
								<Postrow
									key={post?.model_id}
									post={post}
									apiURL={apiURL}
									handleDelete={handleDelete}
									setModelEdit={setModelEdit}
									setModule={setModule}
								/>
							))}
						</ul>
					</section>
				) : null}
				{module === "upload" ? (
					<NewModelForm
						setUploadData={setUploadData}
						uploadData={uploadData}
						handleUploadChange={handleUploadChange}
						handleUploadSubmit={handleUploadSubmit}
					/>
				) : null}
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
				{module === "edit" ? (
					<EditModel
						modelEdit={modelEdit}
						handleEdit={handleEdit}
						editData={editData}
						handleEditChange={handleEditChange}
					/>
				) : null}
			</Main>
		</>
	);
}
