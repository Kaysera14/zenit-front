import { RestartAlt, Search } from "@mui/icons-material";

export function SearchForm() {
	return (
		<form className="flex justify-center items-center mt-4">
			<input
				type="text"
				placeholder="Buscar..."
				className="border-2 border-slate-900 p-2"
			/>
			<button className="bg-slate-900 border-2 border-white p-2 ml-2">
				<Search />
			</button>
			<button className="bg-slate-900 border-2 border-white p-2 ml-2">
				<RestartAlt />
			</button>
		</form>
	);
}
