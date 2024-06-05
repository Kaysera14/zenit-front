import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/home";
import { NotFound } from "./pages/not-found";
import { Header } from "./components/header";
import { Login } from "./pages/login";
import { Register } from "./pages/register";
import { Validate } from "./pages/validate";
import { SingleModel } from "./pages/single-model";
import { Admin } from "./pages/admin";

function App() {
	return (
		<>
			<Header />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="admin" element={<Admin />}>
					<Route path="register" element={<Register />} />
					<Route path="validate" element={<Validate />} />
					<Route path="login" element={<Login />} />
					<Route path="dashboard" />
				</Route>
				<Route path="models/:slug" element={<SingleModel />} />
				<Route path="*" element={<NotFound />} />
			</Routes>
		</>
	);
}

export default App;
