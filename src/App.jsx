import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/home";
import { NotFound } from "./pages/not-found";
import { Header } from "./components/header";
import { Login } from "./pages/login";
import { Register } from "./pages/register";
import { Validate } from "./pages/validate";
import { SingleModel } from "./pages/single-model";
import { Dashboard } from "./pages/dashboard";
import { useEffect, useState } from "react";
import { getPosts } from "./api/get-posts";

function App() {
	const [filter, setFilter] = useState("");
	const [posts, setPosts] = useState([]);
	const [filteredPosts, setFilteredPosts] = useState([]);

	useEffect(() => {
		const fetchPosts = async () => {
			const posts = await getPosts();
			const postsData = posts.data;
			setPosts(postsData);
		};

		if (filter === "Professional" || filter === "Personal") {
			const newFilteredPosts = posts.filter((post) =>
				post.category1.toLowerCase().includes(filter.toLowerCase())
			);
			setFilteredPosts(newFilteredPosts);
		} else {
			if (posts.length === 0) {
				fetchPosts();
			}
		}

		if (filter === "") {
			setFilteredPosts([]);
		}
	}, [filter, posts]);
	return (
		<>
			<Header setFilter={setFilter} filter={filter} />
			<Routes>
				<Route
					path="/"
					element={<Home posts={posts} filteredPosts={filteredPosts} />}
				/>
				<Route path="admin">
					<Route path="register" element={<Register />} />
					<Route path="validate" element={<Validate />} />
					<Route path="login" element={<Login />} />
					<Route path="dashboard" element={<Dashboard />} />
				</Route>
				<Route path="models/:slug" element={<SingleModel />} />
				<Route path="*" element={<NotFound />} />
			</Routes>
		</>
	);
}

export default App;
