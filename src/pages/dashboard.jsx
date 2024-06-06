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

export function Dashboard() {
	const { user } = useContext(CurrentUserContext);
	const [module, setModule] = useState("home");
	const navigate = useNavigate();
	const [posts, setPosts] = useState([]);
	const apiURL = import.meta.env.VITE_APP_BACKEND_UPLOADS;

	const handleDelete = async (slug) => {
		await deletePosts(slug);
		setPosts([]);
	};

	const handleEdit = async (slug) => {
		await editPosts(slug);
		setPosts([]);
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
			<Main className={"ml-[18rem]"}>
				{module === "home" ? (
					<section>
						{/* <SearchForm /> */}
						<h1>
							hacer dashboard para seleccionar modelos que borrar en masa,
							editar y ver, todo inline
						</h1>
						<ul>
							{posts.map((post) => (
								<Postrow
									key={post?.model_id}
									post={post}
									apiURL={apiURL}
									handleDelete={handleDelete}
									handleEdit={handleEdit}
								/>
							))}
						</ul>
					</section>
				) : null}
				{module === "upload" ? (
					<h1>hacer formulario para subir modelos y testearlo</h1>
				) : null}
			</Main>
		</>
	);
}
